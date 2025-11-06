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
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section,
        initial: {
            opacity: 0,
            y: 50
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
            overflow: "hidden",
            bgcolor: "#fff",
            // پس‌زمینه گرادینت هماهنگ با برند توروب
            background: "radial-gradient(circle at top right, #ffe5e8 0%, #ffffff 80%)",
            px: 3,
            py: 6
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div,
                animate: {
                    y: [
                        0,
                        -8,
                        0
                    ]
                },
                transition: {
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                },
                sx: {
                    position: "absolute",
                    top: "10%",
                    left: "15%",
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    background: "rgba(230,0,35,0.08)",
                    filter: "blur(3px)"
                }
            }, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div,
                animate: {
                    y: [
                        0,
                        6,
                        0
                    ]
                },
                transition: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                },
                sx: {
                    position: "absolute",
                    bottom: "12%",
                    right: "18%",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(230,0,35,0.1)",
                    filter: "blur(4px)"
                }
            }, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 25
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
                                xs: "2.2rem",
                                md: "3.2rem"
                            },
                            fontWeight: 800,
                            color: "#E60023",
                            lineHeight: 1.2
                        },
                        children: "جدیدترین مدل‌های موبایل 🎉"
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        level: "body-lg",
                        sx: {
                            mb: 4,
                            color: "text.secondary",
                            fontSize: {
                                xs: "1rem",
                                md: "1.2rem"
                            },
                            maxWidth: 600,
                            mx: "auto"
                        },
                        children: "بهترین قیمت، ارسال سریع و ضمانت اصالت کالا"
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        size: "lg",
                        variant: "solid",
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button,
                        whileHover: {
                            scale: 1.07
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        sx: {
                            px: 5,
                            py: 1.5,
                            fontSize: "1.1rem",
                            bgcolor: "#E60023",
                            color: "#fff",
                            borderRadius: "xl",
                            boxShadow: "0 8px 20px rgba(230,0,35,0.3)",
                            "&:hover": {
                                bgcolor: "#c2001d",
                                boxShadow: "0 10px 25px rgba(230,0,35,0.35)"
                            },
                            transition: "all 0.3s ease"
                        },
                        children: "مشاهده محصولات"
                    }, void 0, false, {
                        fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shiraz-mobile-ui/src/components/HeroSection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Grid/Grid.js [app-ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Card/Card.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/CardContent/CardContent.js [app-ssr] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const products = [
    {
        id: 1,
        title: "کاور سیلیکونی آیفون",
        price: "210,000 تومان",
        image: "/assets/cover1.png"
    },
    {
        id: 2,
        title: "محافظ گوشی سامسونگ",
        price: "150,000 تومان",
        image: "/assets/protector1.png"
    },
    {
        id: 3,
        title: "هندزفری بلوتوث",
        price: "460,000 تومان",
        image: "/assets/earbuds.png"
    },
    {
        id: 4,
        title: "شارژر سریع 25 وات",
        price: "320,000 تومان",
        image: "/assets/charger.png"
    }
];
function ProductGrid() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
        container: true,
        spacing: 3,
        sx: {
            p: {
                xs: 2,
                md: 6
            },
            justifyContent: "center"
        },
        component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            staggerChildren: 0.15
        },
        children: products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                xs: 12,
                sm: 6,
                md: 3,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                    component: __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div,
                    whileHover: {
                        scale: 1.04,
                        boxShadow: "0 10px 25px rgba(230,0,35,0.2)"
                    },
                    transition: {
                        type: "spring",
                        stiffness: 300
                    },
                    sx: {
                        cursor: "pointer",
                        overflow: "hidden",
                        borderRadius: "lg",
                        bgcolor: "#fff"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: p.image,
                            alt: p.title,
                            style: {
                                width: "100%",
                                height: 180,
                                objectFit: "contain"
                            }
                        }, void 0, false, {
                            fileName: "[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    level: "body-lg",
                                    sx: {
                                        fontWeight: 600,
                                        mb: 1
                                    },
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    level: "body-sm",
                                    sx: {
                                        color: "text.secondary"
                                    },
                                    children: p.price
                                }, void 0, false, {
                                    fileName: "[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this)
            }, p.id, false, {
                fileName: "[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/shiraz-mobile-ui/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Link$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/Link/Link.js [app-ssr] (ecmascript) <export default as Link>");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            borderTop: "1px solid",
            borderColor: "neutral.outlinedBorder",
            mt: 4,
            py: 2,
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                level: "body-sm",
                sx: {
                    mb: 1
                },
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Shiraz Mobile – All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/shiraz-mobile-ui/src/components/Footer.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$Link$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                href: "#",
                fontSize: "sm",
                color: "neutral",
                children: "قوانین و مقررات"
            }, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/components/Footer.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shiraz-mobile-ui/src/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/shiraz-mobile-ui/src/components/FloatingButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/joy/IconButton/IconButton.js [app-ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChatRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/@mui/icons-material/esm/ChatRounded.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FloatingButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            y: [
                0,
                -5,
                0
            ]
        },
        transition: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
        },
        style: {
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1000
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$joy$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
            variant: "solid",
            color: "danger",
            size: "lg",
            sx: {
                bgcolor: "#E60023",
                color: "#fff",
                borderRadius: "50%",
                boxShadow: "0 4px 10px rgba(230, 0, 35, 0.5)",
                "&:hover": {
                    bgcolor: "#c2001d",
                    transform: "rotate(10deg) scale(1.08)"
                },
                transition: "all .3s ease"
            },
            onClick: ()=>alert("پشتیبانی آنلاین شیراز موبایل"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChatRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/components/FloatingButton.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/shiraz-mobile-ui/src/components/FloatingButton.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shiraz-mobile-ui/src/components/FloatingButton.tsx",
        lineNumber: 9,
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
(()=>{
    const e = new Error("Cannot find module '../components/Header/Header'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// 🔹 نوار تبلیغات بالای صفحه (اسلایدی و انیمیشنی)
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$BannerPromo$2f$BannerPromo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/BannerPromo/BannerPromo.tsx [app-ssr] (ecmascript)");
// 🔹 نوار جستجو با انیمیشن متمایز
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$SearchBar$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/SearchBar/SearchBar.tsx [app-ssr] (ecmascript)");
// 🔹 سکشن اصلی معرفی کسب‌وکار (Hero Section / Banner Hero)
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/HeroSection.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/BannerSection/BannerSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// 🔹 گرید محصولات / پیشنهادات ویژه
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/ProductGrid.tsx [app-ssr] (ecmascript)");
// 🔹 پابرگ سایت
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/Footer.tsx [app-ssr] (ecmascript)");
// 🔹 دکمه شناور پشتیبانی
var __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$FloatingButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shiraz-mobile-ui/src/components/FloatingButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
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
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$SearchBar$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerSection, {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shiraz$2d$mobile$2d$ui$2f$src$2f$components$2f$FloatingButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shiraz-mobile-ui/src/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=shiraz-mobile-ui_src_ca2caed2._.js.map