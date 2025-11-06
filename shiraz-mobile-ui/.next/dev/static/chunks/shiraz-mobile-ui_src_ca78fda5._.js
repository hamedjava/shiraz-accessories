(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shiraz-mobile-ui/src/components/BannerPromo/BannerPromo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/BannerPromo/BannerPromo.tsx
__turbopack_context__.s([
    "default",
    ()=>BannerPromo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ads = [
    "🔥 حراج ویژه جمعه سیاه - تا 50% تخفیف",
    "🛒 ارسال رایگان برای سفارش‌های بالای 500 هزار تومان",
    "📱 موجودی جدید قاب‌های iPhone 16 رسید!"
];
function BannerPromo() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BannerPromo.useEffect": ()=>{
            const interval = setInterval({
                "BannerPromo.useEffect.interval": ()=>setIndex({
                        "BannerPromo.useEffect.interval": (prev)=>(prev + 1) % ads.length
                    }["BannerPromo.useEffect.interval"])
            }["BannerPromo.useEffect.interval"], 4000);
            return ({
                "BannerPromo.useEffect": ()=>clearInterval(interval)
            })["BannerPromo.useEffect"];
        }
    }["BannerPromo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: "100%",
            py: 1,
            bgcolor: "#E60023",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                y: 20,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: -20,
                opacity: 0
            },
            transition: {
                duration: 0.6
            },
            style: {
                position: "absolute"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                level: "body-sm",
                sx: {
                    fontWeight: 600
                },
                children: ads[index]
            }, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/components/BannerPromo/BannerPromo.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, index, false, {
            fileName: "[project]/shiraz-mobile-ui/src/components/BannerPromo/BannerPromo.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shiraz-mobile-ui/src/components/BannerPromo/BannerPromo.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(BannerPromo, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = BannerPromo;
var _c;
__turbopack_context__.k.register(_c, "BannerPromo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/SearchBar/SearchBar.tsx
__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Input/Input.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/icons-material/esm/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SearchBar() {
    _s();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            justifyContent: "center",
            mt: 2,
            mb: 3,
            px: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                width: focused ? "90%" : "70%",
                boxShadow: focused ? "0px 4px 20px rgba(230, 0, 35, 0.3)" : "0px 2px 10px rgba(0,0,0,0.1)",
                scale: focused ? 1.03 : 1
            },
            transition: {
                duration: 0.4,
                ease: "easeOut"
            },
            style: {
                borderRadius: "30px",
                background: "#fff",
                overflow: "hidden"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                placeholder: "جستجوی محصول یا برند...",
                startDecorator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx",
                    lineNumber: 39,
                    columnNumber: 27
                }, void 0),
                size: "lg",
                sx: {
                    "--Input-focusedHighlight": "none",
                    fontSize: "0.95rem",
                    borderRadius: "30px",
                    width: "100%"
                },
                onFocus: ()=>setFocused(true),
                onBlur: ()=>setFocused(false)
            }, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "rwqZf9cBjrH2zIMw/NeLpi+hjZQ=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shiraz-mobile-ui/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/styles/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroSection() {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const brandColor = "#E60023";
    // گرادینت هماهنگ با حالت دارک/لایت
    const backgroundGradient = theme.palette.mode === "dark" ? "radial-gradient(circle at top right, rgba(230,0,35,0.1) 0%, #121212 75%)" : "radial-gradient(circle at top right, #ffe5e8 0%, #ffffff 80%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section,
        initial: {
            opacity: 0,
            y: 40
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8,
            ease: "easeOut"
        },
        sx: {
            position: "relative",
            minHeight: {
                xs: "70vh",
                md: "85vh"
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            bgcolor: "background.body",
            background: backgroundGradient,
            overflow: "hidden",
            px: {
                xs: 2,
                sm: 4
            }
        },
        children: [
            [
                {
                    size: 90,
                    top: "12%",
                    left: "14%",
                    color: "rgba(230,0,35,0.08)",
                    duration: 7
                },
                {
                    size: 65,
                    bottom: "10%",
                    right: "20%",
                    color: "rgba(230,0,35,0.12)",
                    duration: 5
                }
            ].map((circle, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div,
                    animate: {
                        y: [
                            0,
                            circle.size * 0.1,
                            0
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        duration: circle.duration,
                        ease: "easeInOut"
                    },
                    sx: {
                        position: "absolute",
                        ...circle.top && {
                            top: circle.top
                        },
                        ...circle.left && {
                            left: circle.left
                        },
                        ...circle.bottom && {
                            bottom: circle.bottom
                        },
                        ...circle.right && {
                            right: circle.right
                        },
                        width: circle.size,
                        height: circle.size,
                        borderRadius: "50%",
                        background: circle.color,
                        filter: "blur(3px)",
                        opacity: 0.9
                    }
                }, idx, false, {
                    fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.9,
                    delay: 0.2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        level: "h1",
                        sx: {
                            mb: 2,
                            fontSize: {
                                xs: "2rem",
                                md: "3rem"
                            },
                            fontWeight: 800,
                            color: brandColor,
                            lineHeight: 1.2,
                            textShadow: theme.palette.mode === "dark" ? "0 1px 6px rgba(255,255,255,0.12)" : "0 1px 6px rgba(0,0,0,0.08)"
                        },
                        children: "جدیدترین مدل‌های موبایل 🎉"
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        level: "body-lg",
                        sx: {
                            mb: 5,
                            color: "text.secondary",
                            fontSize: {
                                xs: "1rem",
                                md: "1.15rem"
                            },
                            maxWidth: 600,
                            mx: "auto"
                        },
                        children: "بهترین قیمت، ارسال سریع و ضمانت اصالت کالا"
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button,
                        size: "lg",
                        whileHover: {
                            scale: 1.06
                        },
                        whileTap: {
                            scale: 0.96
                        },
                        "aria-label": "مشاهده محصولات",
                        variant: "solid",
                        sx: {
                            px: 5,
                            py: 1.6,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            borderRadius: "xl",
                            bgcolor: brandColor,
                            color: "#fff",
                            boxShadow: `0 6px 18px ${brandColor}40`,
                            "&:hover": {
                                bgcolor: "#C2001D",
                                boxShadow: `0 8px 24px ${brandColor}50`
                            },
                            transition: "all 0.3s ease"
                        },
                        children: "مشاهده محصولات"
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shiraz-mobile-ui/src/assets/images/banner-promo-hero.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/banner-promo-hero.8ee1c085.png");}),
"[project]/shiraz-mobile-ui/src/assets/images/banner-promo-hero.png.mjs { IMAGE => \"[project]/shiraz-mobile-ui/src/assets/images/banner-promo-hero.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/assets/images/banner-promo-hero.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 803,
    height: 492,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBskSJBGyjBZiD6YOT/AErq1TscVNKSbfY//9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/shiraz-mobile-ui/src/assets/images/banner-promo-hero.png.mjs { IMAGE => "[project]/shiraz-mobile-ui/src/assets/images/banner-promo-hero.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
const bannerPromoHero = typeof __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$assets$2f$images$2f$banner$2d$promo$2d$hero$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src;
function BannerSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section,
        initial: {
            opacity: 0,
            y: 60
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.9,
            ease: "easeOut"
        },
        viewport: {
            once: true
        },
        sx: {
            width: "100%",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #fff6f7 0%, #ffe5e8 50%, #ffd9df 100%)",
            py: {
                xs: 8,
                md: 12
            },
            px: {
                xs: 3,
                md: 8
            },
            display: "flex",
            flexDirection: {
                xs: "column-reverse",
                md: "row"
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
                xs: 4,
                md: 10
            },
            fontFamily: 'Vazirmatn, "IRANYekanX", sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    position: "absolute",
                    top: "-100px",
                    left: "-80px",
                    width: 300,
                    height: 300,
                    background: "radial-gradient(circle, rgba(230,0,35,0.25) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    position: "absolute",
                    bottom: "-100px",
                    right: "-80px",
                    width: 280,
                    height: 280,
                    background: "radial-gradient(circle, rgba(255,160,175,0.35) 0%, transparent 70%)",
                    filter: "blur(70px)",
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    textAlign: {
                        xs: "center",
                        md: "right"
                    },
                    zIndex: 2,
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: {
                            fontWeight: 800,
                            fontSize: {
                                xs: "1.9rem",
                                md: "2.7rem"
                            },
                            color: "#E60023",
                            letterSpacing: "-0.03em",
                            mb: 1.5
                        },
                        children: "بزرگ‌ترین مارکت موبایل و اکسسوری در شیراز 📱"
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        level: "body-md",
                        sx: {
                            color: "#333",
                            fontSize: {
                                xs: "1.05rem",
                                md: "1.15rem"
                            },
                            lineHeight: 1.9,
                            mb: 4,
                            maxWidth: 580,
                            mx: {
                                xs: "auto",
                                md: 0
                            }
                        },
                        children: [
                            "به ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Shiraz Mobile"
                            }, void 0, false, {
                                fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                                lineNumber: 96,
                                columnNumber: 14
                            }, this),
                            " خوش اومدی! اینجا می‌تونی جدیدترین محصولات موبایل، کیس، گلس، کابل و لوازم جانبی رو با بهترین قیمت ببینی 👀 یا اگر فروشنده‌ای، با چند کلیک ساده وارد بازار فروش بشی و فروشگاه دیجیتال خودتو بسازی 🚀",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            "ما کنارت هستیم با پشتیبانی واقعی، آمار حرفه‌ای و طراحی فروشگاه شخصی."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            flexDirection: {
                                xs: "column",
                                sm: "row"
                            },
                            justifyContent: {
                                xs: "center",
                                md: "flex-start"
                            },
                            alignItems: "center",
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button,
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.97
                                },
                                size: "lg",
                                sx: {
                                    bgcolor: "#E60023",
                                    color: "#fff",
                                    fontWeight: 700,
                                    px: 5,
                                    py: 1.8,
                                    borderRadius: "9999px",
                                    fontSize: "1.05rem",
                                    boxShadow: "0 6px 25px rgba(230,0,35,0.4)",
                                    "&:hover": {
                                        bgcolor: "#c2001d"
                                    }
                                },
                                children: "خرید محصولات 🔍"
                            }, void 0, false, {
                                fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button,
                                whileHover: {
                                    scale: 1.07
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                size: "lg",
                                variant: "soft",
                                sx: {
                                    borderRadius: "9999px",
                                    border: "2px solid rgba(230,0,35,0.2)",
                                    color: "#E60023",
                                    fontWeight: 600,
                                    px: 5,
                                    py: 1.8,
                                    fontSize: "1.05rem",
                                    background: "rgba(255,255,255,0.5)",
                                    backdropFilter: "blur(10px)",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                                    "&:hover": {
                                        background: "rgba(255,255,255,0.7)"
                                    }
                                },
                                children: "شروع فروش 💼"
                            }, void 0, false, {
                                fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div,
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                sx: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img,
                        src: bannerPromoHero,
                        alt: "بنر تبلیغاتی بازار موبایل شیراز",
                        width: "100%",
                        sx: {
                            maxWidth: 480,
                            borderRadius: "20px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div,
                        animate: {
                            scale: [
                                1,
                                1.1,
                                1
                            ],
                            opacity: [
                                0.5,
                                0.8,
                                0.5
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 6
                        },
                        sx: {
                            position: "absolute",
                            width: 260,
                            height: 260,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(230,0,35,0.25) 0%, transparent 70%)",
                            filter: "blur(45px)",
                            zIndex: -1
                        }
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = BannerSection;
var _c;
__turbopack_context__.k.register(_c, "BannerSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shiraz-mobile-ui/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-client] (ecmascript) <export default as Box>");
// 🔹 نوار تبلیغات بالای صفحه (اسلایدی و انیمیشنی)
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$BannerPromo$2f$BannerPromo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/BannerPromo/BannerPromo.tsx [app-client] (ecmascript)");
// 🔹 نوار جستجو با انیمیشن متمایز
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$SearchBar$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx [app-client] (ecmascript)");
// 🔹 سکشن اصلی معرفی کسب‌وکار (Hero Section)
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/HeroSection.tsx [app-client] (ecmascript)");
// 🔹 بنر تبلیغاتی ثانویه (نمایش عکس تبلیغی یا برند مارکت‌پلیس)
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$app$2f$widgets$2f$BannerSecion$2f$BannerSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/app/widgets/BannerSecion/BannerSection.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/ProductGrid/ProductGrid'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/FloatingButton/FloatingButton'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            bgcolor: "background.body",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$BannerPromo$2f$BannerPromo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$SearchBar$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$app$2f$widgets$2f$BannerSecion$2f$BannerSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGrid, {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingButton, {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=shiraz-mobile-ui_src_ca78fda5._.js.map