module.exports = [
"[project]/shiraz-mobile-ui/src/components/BannerPromo/BannerPromo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/BannerPromo/BannerPromo.tsx
__turbopack_context__.s([
    "default",
    ()=>BannerPromo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ads = [
    "🔥 حراج ویژه جمعه سیاه - تا 50% تخفیف",
    "🛒 ارسال رایگان برای سفارش‌های بالای 500 هزار تومان",
    "📱 موجودی جدید قاب‌های iPhone 16 رسید!"
];
function BannerPromo() {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>setIndex((prev)=>(prev + 1) % ads.length), 4000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
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
}),
"[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/SearchBar/SearchBar.tsx
__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Input$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Input/Input.js [app-ssr] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/icons-material/esm/Search.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function SearchBar() {
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            justifyContent: "center",
            mt: 2,
            mb: 3,
            px: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Input$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                placeholder: "جستجوی محصول یا برند...",
                startDecorator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}),
"[project]/shiraz-mobile-ui/src/components/HeroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/styles/ThemeProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function HeroSection() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const brandColor = "#E60023";
    // گرادینت هماهنگ با حالت دارک/لایت
    const backgroundGradient = theme.palette.mode === "dark" ? "radial-gradient(circle at top right, rgba(230,0,35,0.1) 0%, #121212 75%)" : "radial-gradient(circle at top right, #ffe5e8 0%, #ffffff 80%)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section,
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
            ].map((circle, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button,
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
}),
"[project]/shiraz-mobile-ui/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
// 🔹 نوار تبلیغات بالای صفحه (اسلایدی و انیمیشنی)
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$BannerPromo$2f$BannerPromo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/BannerPromo/BannerPromo.tsx [app-ssr] (ecmascript)");
// 🔹 نوار جستجو با انیمیشن متمایز
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$SearchBar$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx [app-ssr] (ecmascript)");
// 🔹 سکشن اصلی معرفی کسب‌وکار (Hero Section)
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/HeroSection.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/BannerSection/BannerSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            bgcolor: "background.body",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$BannerPromo$2f$BannerPromo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$SearchBar$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerSection, {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGrid, {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingButton, {}, void 0, false, {
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
}),
];

//# sourceMappingURL=shiraz-mobile-ui_src_de54e056._.js.map