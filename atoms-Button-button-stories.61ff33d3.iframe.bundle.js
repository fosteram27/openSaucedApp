"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[5887],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/atoms/Button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonTypes:()=>ButtonTypes,Dark:()=>Dark,Default:()=>Default,Destructive:()=>Destructive,HasIcons:()=>HasIcons,Link:()=>Link,Outline:()=>Outline,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ButtonTypes$paramete,_ButtonTypes$paramete2,_Default$parameters,_Default$parameters2,_Primary$parameters,_Primary$parameters2,_Dark$parameters,_Dark$parameters2,_Outline$parameters,_Outline$parameters2,_Link$parameters,_Link$parameters2,_Destructive$paramete,_Destructive$paramete2,_HasIcons$parameters,_HasIcons$parameters2,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Button/button.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Button",argTypes:{disabled:{control:{type:"boolean"}},type:{options:["primary","outline","default","dark","link"],control:{type:"select"}}}},ButtonTemplate=args=>__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.Z,args,"Button");ButtonTemplate.displayName="ButtonTemplate";const ButtonTypes=args=>__jsx("div",{className:"flex gap-2"},__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"default"},"Default Button"),__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"primary"},"Primary Button"),__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"outline"},"Outline Button"),__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"link"},"Link Button"),__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"destructive"},"Destructive Button"));ButtonTypes.displayName="ButtonTypes";const Default=ButtonTemplate.bind({});Default.args={variant:"default"};const Primary=ButtonTemplate.bind({});Primary.args={variant:"primary"};const Dark=ButtonTemplate.bind({});Dark.args={variant:"dark"};const Outline=ButtonTemplate.bind({});Outline.args={variant:"outline"};const Link=ButtonTemplate.bind({});Link.args={variant:"link"};const Destructive=ButtonTemplate.bind({});Destructive.args={variant:"destructive"};const HasIcons=args=>__jsx("div",{className:"flex flex-wrap gap-2"},__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"default"},"Icon Left"),__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"default"},"Icon Right"));HasIcons.displayName="HasIcons",ButtonTypes.parameters=_objectSpread(_objectSpread({},ButtonTypes.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ButtonTypes$paramete=ButtonTypes.parameters)||void 0===_ButtonTypes$paramete?void 0:_ButtonTypes$paramete.docs),{},{source:_objectSpread({originalSource:'args => <div className="flex gap-2">\n    <Button variant="default">Default Button</Button>\n    <Button variant="primary">Primary Button</Button>\n    <Button variant="outline">Outline Button</Button>\n    <Button variant="link">Link Button</Button>\n    <Button variant="destructive">Destructive Button</Button>\n  </div>'},null===(_ButtonTypes$paramete2=ButtonTypes.parameters)||void 0===_ButtonTypes$paramete2||null===(_ButtonTypes$paramete2=_ButtonTypes$paramete2.docs)||void 0===_ButtonTypes$paramete2?void 0:_ButtonTypes$paramete2.source)})}),Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args}>Button</Button>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args}>Button</Button>"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Dark.parameters=_objectSpread(_objectSpread({},Dark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Dark$parameters=Dark.parameters)||void 0===_Dark$parameters?void 0:_Dark$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args}>Button</Button>"},null===(_Dark$parameters2=Dark.parameters)||void 0===_Dark$parameters2||null===(_Dark$parameters2=_Dark$parameters2.docs)||void 0===_Dark$parameters2?void 0:_Dark$parameters2.source)})}),Outline.parameters=_objectSpread(_objectSpread({},Outline.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Outline$parameters=Outline.parameters)||void 0===_Outline$parameters?void 0:_Outline$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args}>Button</Button>"},null===(_Outline$parameters2=Outline.parameters)||void 0===_Outline$parameters2||null===(_Outline$parameters2=_Outline$parameters2.docs)||void 0===_Outline$parameters2?void 0:_Outline$parameters2.source)})}),Link.parameters=_objectSpread(_objectSpread({},Link.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Link$parameters=Link.parameters)||void 0===_Link$parameters?void 0:_Link$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args}>Button</Button>"},null===(_Link$parameters2=Link.parameters)||void 0===_Link$parameters2||null===(_Link$parameters2=_Link$parameters2.docs)||void 0===_Link$parameters2?void 0:_Link$parameters2.source)})}),Destructive.parameters=_objectSpread(_objectSpread({},Destructive.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Destructive$paramete=Destructive.parameters)||void 0===_Destructive$paramete?void 0:_Destructive$paramete.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args}>Button</Button>"},null===(_Destructive$paramete2=Destructive.parameters)||void 0===_Destructive$paramete2||null===(_Destructive$paramete2=_Destructive$paramete2.docs)||void 0===_Destructive$paramete2?void 0:_Destructive$paramete2.source)})}),HasIcons.parameters=_objectSpread(_objectSpread({},HasIcons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_HasIcons$parameters=HasIcons.parameters)||void 0===_HasIcons$parameters?void 0:_HasIcons$parameters.docs),{},{source:_objectSpread({originalSource:'args => <div className="flex flex-wrap gap-2">\n    <Button variant="default">Icon Left</Button>\n    <Button variant="default">Icon Right</Button>\n  </div>'},null===(_HasIcons$parameters2=HasIcons.parameters)||void 0===_HasIcons$parameters2||null===(_HasIcons$parameters2=_HasIcons$parameters2.docs)||void 0===_HasIcons$parameters2?void 0:_HasIcons$parameters2.source)})});const __namedExportsOrder=["ButtonTypes","Default","Primary","Dark","Outline","Link","Destructive","HasIcons"]},"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 border-none  pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7 border-none","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);