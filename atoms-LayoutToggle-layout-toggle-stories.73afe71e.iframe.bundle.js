"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[249],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/atoms/LayoutToggle/layout-toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_LayoutToggle_layout_toggle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/LayoutToggle/layout-toggle.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/LayoutToggle"},LayoutToggleTemplate=args=>__jsx(components_atoms_LayoutToggle_layout_toggle__WEBPACK_IMPORTED_MODULE_2__.Z,args);LayoutToggleTemplate.displayName="LayoutToggleTemplate";const Default=LayoutToggleTemplate.bind({});Default.args={onChange:value=>console.log(value),value:"grid"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <LayoutToggle {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/atoms/LayoutToggle/layout-toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_icons_bs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-icons/bs/index.esm.js"),react_icons_bi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/bi/index.esm.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const LayoutToggle=_ref=>{let{value,onChange}=_ref;const handleToggle=value=>{null==onChange||onChange(value)};return __jsx("div",{className:"flex h-8 border rounded-lg shadow-xs w-28 p-[1px] text-light-slate-9"},__jsx("div",{onClick:()=>handleToggle("list"),role:"toggle",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("flex items-center cursor-pointer justify-center flex-1 transition rounded-lg","list"===value&&"bg-light-slate-4 ")},__jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.ut$,{className:"text-2xl"})),__jsx("div",{onClick:()=>handleToggle("grid"),role:"toggle",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("flex items-center justify-center flex-1 rounded-lg transition cursor-pointer","grid"===value&&"bg-light-slate-4 ")},__jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.rp3,{className:"text-2xl"})))};LayoutToggle.displayName="LayoutToggle";const __WEBPACK_DEFAULT_EXPORT__=LayoutToggle;try{layouttoggle.displayName="layouttoggle",layouttoggle.__docgenInfo={description:"",displayName:"layouttoggle",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: ToggleValue) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"list"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/LayoutToggle/layout-toggle.tsx#layouttoggle"]={docgenInfo:layouttoggle.__docgenInfo,name:"layouttoggle",path:"components/atoms/LayoutToggle/layout-toggle.tsx#layouttoggle"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);