"use client";

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../../src/utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <CssVarsProvider>{children}</CssVarsProvider>
    </CacheProvider>
  );
}
