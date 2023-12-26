"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[624],{"./components/organisms/DevCardWall/dev-card-wall.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dev_card_wall_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),useMeasure=__webpack_require__("./node_modules/react-use/esm/useMeasure.js"),useKeyPress=__webpack_require__("./node_modules/react-use/esm/useKeyPress.js"),useKey=__webpack_require__("./node_modules/react-use/esm/useKey.js"),react_spring_web_modern=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs"),use_gesture_react_esm=__webpack_require__("./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js"),useOutsideClickRef=__webpack_require__("./node_modules/rooks/dist/esm/hooks/useOutsideClickRef.js"),dev_card=__webpack_require__("./components/molecules/DevCard/dev-card.tsx"),Button_button=__webpack_require__("./components/atoms/Button/button.tsx");const chevron_left_src="static/media/chevron-left.de916dea.svg";var __jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const coordinatesForIndex=height=>index=>{const tilesPerColumn=Math.floor((height-20)/368)+1,y=368*(index%tilesPerColumn)-(Math.floor(index/tilesPerColumn)%2==1?0:139.20000000000002);return{x:265*Math.floor(index/tilesPerColumn),y}};function DevCardWall(_ref){let{isLoading=!1,cards,initialCardIndex}=_ref;const[containerRef,{height}]=(0,useMeasure.Z)(),{0:activeCardIndex,1:setActiveCardIndex}=(0,react.useState)(null),[outsideClickRef]=(0,useOutsideClickRef.I)((()=>{setActiveCardIndex(null)})),[leftArrowIsPressed]=(0,useKeyPress.Z)("ArrowLeft"),[downArrowIsPressed]=(0,useKeyPress.Z)("ArrowDown"),pulseAnimation=(0,react_spring_web_modern.q_)({from:{opacity:.1},to:isLoading?[{opacity:.2},{opacity:.1}]:{opacity:0},loop:isLoading,config:{duration:1e3}}),nextButtonActiveStyle={opacity:.8,translateY:4,config:{duration:100}},nextButtonDefaultStyle={opacity:1,translateY:0},[nextButtonSpringStyle,nextButtonSpringApi]=(0,react_spring_web_modern.q_)((()=>leftArrowIsPressed?nextButtonActiveStyle:nextButtonDefaultStyle),[leftArrowIsPressed]),bindHover=(0,use_gesture_react_esm.useGesture)({onHover:state=>{const hoverIndex=state.args[0];cardApi.start((i=>state.hovering&&i===hoverIndex&&i!==activeCardIndex?{translateY:-20}:{translateY:0}))}}),[cardSprings,cardApi]=(0,react_spring_web_modern.bY)(cards.length,(index=>({from:{x:0,y:0,opacity:1,translateY:0,scale:1,zIndex:0},to:_objectSpread({scale:1,opacity:1,zIndex:0,delay:100*index},coordinatesForIndex(height)(index))})),[cards,height]),[cardButtonSprings,cardButtonApi]=(0,react_spring_web_modern.bY)(cards.length,(index=>({opacity:0,translateY:50})),[cards,activeCardIndex]);(0,react.useEffect)((()=>{!async function animate(){cardApi.start((i=>i===activeCardIndex?{scale:1.1,translateY:0,opacity:1,zIndex:49,x:0,y:height/2-174,immediate:"zIndex"}:_objectSpread(_objectSpread({scale:1,translateY:0,opacity:1,zIndex:0},coordinatesForIndex(height)(i)),{},{immediate:"zIndex"}))),cardButtonApi.start((i=>i===activeCardIndex?{opacity:1,translateY:0,delay:250}:{opacity:0,translateY:50}))}()}),[activeCardIndex,cardApi,cardButtonApi,height]),(0,react.useEffect)((()=>{void 0!==initialCardIndex&&setActiveCardIndex(initialCardIndex)}),[initialCardIndex]);const nextCard=(0,react.useCallback)((()=>{setActiveCardIndex((index=>null===index?0:(index+1)%cards.length))}),[cards]);(0,useKey.Z)("ArrowLeft",nextCard,{},[nextCard]),(0,useKey.Z)("ArrowDown",nextCard,{},[nextCard]),(0,react.useEffect)((()=>{leftArrowIsPressed||downArrowIsPressed?nextButtonSpringApi.start({opacity:.8,translateY:4,config:{duration:100}}):nextButtonSpringApi.start({opacity:1,translateY:0})}),[leftArrowIsPressed,downArrowIsPressed,nextButtonSpringApi]);const loadingSkeleton=Array.from({length:20},((_,i)=>{const{x,y}=coordinatesForIndex(height)(i);return __jsx(react_spring_web_modern.q.div,{className:"grid absolute rounded-3xl bg-white",key:i,style:_objectSpread({width:"".concat(245,"px"),height:"".concat(348,"px"),left:"".concat(x,"px"),top:"".concat(y,"px")},pulseAnimation)})})),cardElements=cardSprings.map(((_ref2,i)=>{let{x,y,translateY,scale,zIndex}=_ref2;const cardProps=cards[i],buttonSpring=cardButtonSprings[i];return __jsx(react_spring_web_modern.q.div,(0,esm_extends.Z)({},bindHover(i),{className:"grid absolute gap-3",key:i,onClick:event=>{event.stopPropagation(),setActiveCardIndex(i)},style:{width:"".concat(245,"px"),height:"".concat(348,"px"),left:x.to((x=>"".concat(x,"px"))),top:y.to((y=>"".concat(y,"px"))),translateY:translateY.to((y=>"".concat(y,"px"))),scale,zIndex}}),__jsx(dev_card.Z,(0,esm_extends.Z)({key:"card",isInteractive:i===activeCardIndex,hideProfileButton:!0},cardProps)),__jsx(react_spring_web_modern.q.div,{key:"button",className:"grid place-content-center",style:_objectSpread({},buttonSpring)},__jsx(Button_button.Z,{variant:"primary",href:"/user/".concat(cardProps.username)},"View Profile")))}));return __jsx("div",{className:"grid relative",ref:outsideClickRef,onClick:()=>{setActiveCardIndex(null)}},__jsx("div",{className:"relative ml-20",ref:containerRef},loadingSkeleton,cardElements,__jsx("div",{style:{width:"calc(100% + 15px)",position:"absolute",top:0,left:-15,bottom:0,right:0,zIndex:2,pointerEvents:"none",background:"linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)"}}),__jsx("div",{style:{width:"calc(100% + 15px)",position:"absolute",top:0,left:-15,zIndex:2,pointerEvents:"none",height:"72.42614145%",background:"linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 40%)"}})),__jsx(react_spring_web_modern.q.button,{onClick:function handleNextButtonClick(event){event.stopPropagation(),nextCard()},onMouseDown:event=>nextButtonSpringApi.start(nextButtonActiveStyle),onMouseUp:event=>nextButtonSpringApi.start(nextButtonDefaultStyle),className:"rounded-md border border-amber-700 w-10 h-10 absolute left-0 top-1/2 block z-50 active:outline-none",style:_objectSpread({backgroundColor:"#271700",backgroundImage:"url(".concat(chevron_left_src,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center"},nextButtonSpringStyle)}))}DevCardWall.displayName="DevCardWall";try{devcardwall.displayName="devcardwall",devcardwall.__docgenInfo={description:"",displayName:"devcardwall",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"DevCardProps[]"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},initialCardIndex:{defaultValue:null,description:"",name:"initialCardIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/DevCardWall/dev-card-wall.tsx#devcardwall"]={docgenInfo:devcardwall.__docgenInfo,name:"devcardwall",path:"components/organisms/DevCardWall/dev-card-wall.tsx#devcardwall"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Loading$parameters,_Loading$parameters2,dev_card_wall_stories_jsx=react.createElement;function dev_card_wall_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function dev_card_wall_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?dev_card_wall_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dev_card_wall_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const cards=Array.from({length:10},((_,i)=>({username:"test".concat(i),name:"test",avatarURL:"https://avatars.githubusercontent.com/u/54212428?v=4"}))),dev_card_wall_stories={title:"Design System/Organisms/DevCard Wall",component:DevCardWall,parameters:{layout:"fullscreen",backgrounds:{default:"dark"}},decorators:[Story=>dev_card_wall_stories_jsx("div",{className:"grid w-screen h-screen"},dev_card_wall_stories_jsx(Story,null))]},Default={args:{cards:[...cards],isLoading:!1}},Loading={args:{cards:[],isLoading:!0}};Default.parameters=dev_card_wall_stories_objectSpread(dev_card_wall_stories_objectSpread({},Default.parameters),{},{docs:dev_card_wall_stories_objectSpread(dev_card_wall_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:dev_card_wall_stories_objectSpread({originalSource:"{\n  args: {\n    cards: [...cards],\n    isLoading: false\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Loading.parameters=dev_card_wall_stories_objectSpread(dev_card_wall_stories_objectSpread({},Loading.parameters),{},{docs:dev_card_wall_stories_objectSpread(dev_card_wall_stories_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:dev_card_wall_stories_objectSpread({originalSource:"{\n  args: {\n    cards: [],\n    isLoading: true\n  }\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})});const __namedExportsOrder=["Default","Loading"]},"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 border-none  pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7 border-none","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Icon=_ref=>{let{onClick,className,IconImage,alt,size=16}=_ref;return __jsx("div",{className:"".concat(className||""," inline-flex")},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick,className:"items-center justify-center ",alt:alt||"Icon",width:size,height:size,src:IconImage,style:{maxWidth:"100%",height:"auto"}}))};Icon.displayName="Icon";const __WEBPACK_DEFAULT_EXPORT__=Icon;try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{IconImage:{defaultValue:null,description:"",name:"IconImage",required:!0,type:{name:"string | StaticImageData"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((...args: any) => any)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"components/atoms/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Pill/pill.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const Pill=_ref=>{let{className,text,color="slate",size="base",icon}=_ref;return __jsx("div",{className:"\n        ".concat("green"===color?"bg-light-grass-4 ":"yellow"===color?"bg-amber-200 ":"red"===color?"bg-light-red-4 ":"purple"===color?"bg-purple-200":"bg-light-slate-4 ","\n        ").concat("small"===size?"py-1 px-1.5  ":"py-1.5 px-2 ","\n        inline-flex items-center rounded-full gap-1 ").concat(className)},icon,__jsx("div",{className:"\n        ".concat("green"===color?"text-light-grass-11":"yellow"===color?"text-amber-700":"red"===color?"text-light-red-11":"purple"===color?"text-purple-600":"text-light-slate-11","\n            text-sm leading-none")},text))};Pill.displayName="Pill";const __WEBPACK_DEFAULT_EXPORT__=Pill;try{pill.displayName="pill",pill.__docgenInfo={description:"",displayName:"pill",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | number"}},color:{defaultValue:{value:"slate"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"slate"'},{value:'"green"'},{value:'"yellow"'},{value:'"red"'},{value:'"purple"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Pill/pill.tsx#pill"]={docgenInfo:pill.__docgenInfo,name:"pill",path:"components/atoms/Pill/pill.tsx#pill"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/DevCard/dev-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DevCard});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),ArrowSmallUpIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/ArrowSmallUpIcon.js"),ArrowSmallDownIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/ArrowSmallDownIcon.js"),ArrowTrendingUpIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/ArrowTrendingUpIcon.js"),MinusSmallIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/MinusSmallIcon.js"),GiftIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/GiftIcon.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),index_esm=__webpack_require__("./node_modules/react-parallax-tilt/dist/index.esm.js"),Button_button=__webpack_require__("./components/atoms/Button/button.tsx"),pill=__webpack_require__("./components/atoms/Pill/pill.tsx"),icon=__webpack_require__("./components/atoms/Icon/icon.tsx");const card_sauce_bg={src:"static/media/card-sauce-bg.a541f58d.svg",height:177,width:245,blurDataURL:"static/media/card-sauce-bg.a541f58d.svg"};var openSauced_icon=__webpack_require__("./img/openSauced-icon.png");const pr_icon={src:"static/media/pr-icon.7c0fe5a7.svg",height:15,width:14,blurDataURL:"static/media/pr-icon.7c0fe5a7.svg"};var date_utils=__webpack_require__("./lib/utils/date-utils.ts"),fallback_values=__webpack_require__("./lib/utils/fallback-values.ts");const _excluded=["velocity"],_excluded2=["activity"];var __jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function DevCard(props){var _props$isFlipped,_props$isInteractive,_props$prs,_props$name;const{0:isFlipped,1:setIsFlipped}=(0,react.useState)(null!==(_props$isFlipped=props.isFlipped)&&void 0!==_props$isFlipped&&_props$isFlipped),isInteractive=null===(_props$isInteractive=props.isInteractive)||void 0===_props$isInteractive||_props$isInteractive,activity=function getActivity(prs){return prs>4?"high":"mid"}(null!==(_props$prs=props.prs)&&void 0!==_props$prs?_props$prs:0);(0,react.useEffect)((()=>{var _props$isFlipped2;setIsFlipped(null!==(_props$isFlipped2=props.isFlipped)&&void 0!==_props$isFlipped2&&_props$isFlipped2)}),[props.isFlipped]),(0,react.useEffect)((()=>{var _props$isFlipped3;props.isInteractive||setIsFlipped(null!==(_props$isFlipped3=props.isFlipped)&&void 0!==_props$isFlipped3&&_props$isFlipped3)}),[props.isInteractive,props.isFlipped]);const profileHref="/user/".concat(props.username);function handleCardClick(event){var _props$onFlip;isInteractive&&(event.target instanceof HTMLAnchorElement||event.target instanceof HTMLButtonElement||(void 0===props.isFlipped?setIsFlipped(!isFlipped):null===(_props$onFlip=props.onFlip)||void 0===_props$onFlip||_props$onFlip.call(props)))}const faceClasses=(0,clsx_m.Z)("flex","flex-col","items-stretch","justify-items-stretch","overflow-hidden","rounded-3xl","border-white","cursor-pointer","w-full","h-full","absolute","left-0","top-0"),faceStyle={backfaceVisibility:"hidden",background:"#11181c linear-gradient(152.13deg, rgba(217, 217, 217, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",gridArea:"1/1",border:"2px"};return __jsx("div",{className:"DevCard",style:{width:"245px",height:"348px"}},__jsx(index_esm.Z,{tiltEnable:isInteractive,glareEnable:isInteractive,trackOnWindow:isInteractive,glareBorderRadius:"1.5rem",flipHorizontally:isFlipped,className:(0,clsx_m.Z)("DevCard-card","relative","rounded-3xl","w-full","h-full","border","border-gray-400"),style:{boxShadow:"0px 0px 20px -12px rgba(0, 0, 0, 0.25)",transformStyle:"preserve-3d"}},__jsx("div",{className:(0,clsx_m.Z)("DevCard-front",faceClasses),onClick:handleCardClick,style:_objectSpread({},faceStyle)},__jsx("div",{className:"grid grid-rows-2 grid-cols-1 flex-shrink-0 w-full h-full"},__jsx("div",{className:"DevCard-top",style:{backgroundImage:"url(".concat(card_sauce_bg.src,")")}},__jsx("div",{className:" absolute left-[10px] top-[10px] flex items-center gap-1 cursor-pointer"},__jsx(next_image.Z,{className:"rounded",alt:"Open Sauced Logo",width:13,height:13,src:openSauced_icon.Z}),__jsx("p",{className:"font-semibold text-white",style:{fontSize:"8px"}},"OpenSauced"))),__jsx("div",{className:"DevCard-bottom relative text-white flex flex-col items-center pt-10"},!props.isLoading&&__jsx("div",{className:"absolute right-[8px] top-[8px]"},__jsx(ActivityPill,{activity})),__jsx("div",{className:"text-sm mb-3 font-semibold"},"@",props.username),__jsx("div",{className:"w-full flex justify-center gap-6"},__jsx("div",{className:"text-center"},__jsx("div",{className:"text-6xl font-black"},props.isLoading?"-":props.prs),__jsx("div",{className:"text-xs"},"PRs created")),__jsx("div",{className:"text-center"},__jsx("div",{className:"text-6xl font-black"},props.isLoading?"-":props.repos),__jsx("div",{className:"text-xs"},1===props.repos?"Repo":"Repos"))))),__jsx("div",{className:(0,clsx_m.Z)("DevCard-avatar","absolute","top-1/2","left-1/2","bg-white","border-white","border-2","block","rounded-full","w-28","h-28","text-transparent","overflow-hidden"),style:{transform:"translate(-50%, -75%)"}},__jsx(next_image.Z,{src:props.avatarURL,alt:"avatar",width:116,height:116}))),__jsx("div",{className:(0,clsx_m.Z)("DevCard-back",faceClasses),onClick:handleCardClick,style:_objectSpread(_objectSpread({},faceStyle),{},{transform:"rotateY(180deg)"})},__jsx("div",{className:"p-2 pt-4 w-full h-full flex flex-col"},__jsx("div",{className:"text-white rounded-full w-full bg-[#F98026] mb-2 flex items-center",style:{boxShadow:"0px 10px 15px -3px rgba(249, 128, 38, 0.1), 0px 4px 6px -2px rgba(249, 128, 38, 0.05)"}},__jsx(next_image.Z,{src:props.avatarURL,alt:"avatar",width:36,height:36,className:"border-white border-[2px] block rounded-full mr-2"}),__jsx("div",{className:"py-0.5"},__jsx("div",{className:"text-xs font-semibold"},null!==(_props$name=props.name)&&void 0!==_props$name?_props$name:props.username),__jsx("div",{className:"flex items-center gap-2"},void 0!==props.prs&&__jsx("div",{className:"flex items-center"},__jsx(icon.Z,{IconImage:pr_icon,className:"w-3 h-3 mr-1"}),__jsx("div",{className:"flex text-xs"},props.prs," PR")),void 0!==props.age&&__jsx("div",{className:"flex items-center"},__jsx(GiftIcon,{className:"w-3 h-3 mr-1"}),__jsx("div",{className:"flex text-xs"},(0,date_utils.MK)(props.age)))))),__jsx("div",{className:"px-2"},__jsx("div",{className:"flex justify-between items-center"},__jsx("div",{className:"text-xs text-slate-300"},"Activity"),props.isLoading?__jsx("div",{className:"text-xs text-slate-300 font-extralight"},fallback_values.I):__jsx(ActivityPill,{activity,size:"small"})),__jsx(Seperator,null),__jsx("div",{className:"flex justify-between items-center"},__jsx("div",{className:"text-xs text-slate-300"},"PRs Velocity"),__jsx("div",{className:"flex items-center ml-auto gap-1"},props.prVelocity&&null!=props.prMergePercentage?__jsx(react.Fragment,null,__jsx("div",{className:"text-xs text-slate-300 font-extralight"},(0,date_utils.MK)(props.prVelocity)),__jsx(VelocityPill,{velocity:props.prMergePercentage,size:"small"})):__jsx("div",{className:"text-xs text-slate-300 font-extralight"},fallback_values.I))),__jsx(Seperator,null),__jsx("div",{className:"text-xs text-slate-300 text-ellipsis"},props.bio)),__jsx("div",{className:"px-2 mt-auto justify-self-end"},!props.hideProfileButton&&__jsx(link_default(),{href:profileHref,passHref:!0},__jsx(Button_button.Z,{variant:"primary",className:"w-full text-center justify-center mt-4 !py-1"},"View Profile")),__jsx("div",{className:"flex justify-center mt-2"},__jsx(next_image.Z,{className:"rounded",alt:"Open Sauced Logo",width:13,height:13,src:openSauced_icon.Z}),__jsx("p",{className:"font-semibold text-white ml-1",style:{fontSize:"8px"}},"OpenSauced")))))))}function VelocityPill(_ref){let{velocity}=_ref,props=(0,objectWithoutProperties.Z)(_ref,_excluded);const icon=velocity>0?__jsx(ArrowSmallUpIcon,{color:"purple",className:"h-4 w-4"}):__jsx(ArrowSmallDownIcon,{className:"h-4 w-4"});return __jsx(pill.Z,(0,esm_extends.Z)({color:"purple",icon,text:"".concat(velocity,"%")},props))}function ActivityPill(_ref2){let{activity}=_ref2,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);const color="high"===activity?"green":"yellow",activityText="high"===activity?"High":"Mid",icon="high"===activity?__jsx(ArrowTrendingUpIcon,{color:"green",className:"h-4 w-4"}):__jsx(MinusSmallIcon,{className:"h-4 w-4 text-amber-500"});return __jsx(pill.Z,(0,esm_extends.Z)({color,icon,text:activityText},props))}function Seperator(){return __jsx("div",{className:"my-2 h-[1px]",style:{background:"linear-gradient(90deg, hsla(206, 12%, 89%, 0.6), hsla(206, 12%, 89%, 0.01)"}})}DevCard.displayName="DevCard",VelocityPill.displayName="VelocityPill",ActivityPill.displayName="ActivityPill",Seperator.displayName="Seperator";try{devcard.displayName="devcard",devcard.__docgenInfo={description:"",displayName:"devcard",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!0,type:{name:"string"}},prs:{defaultValue:null,description:"",name:"prs",required:!1,type:{name:"number"}},repos:{defaultValue:null,description:"",name:"repos",required:!1,type:{name:"number"}},bio:{defaultValue:null,description:"",name:"bio",required:!1,type:{name:"string"}},prVelocity:{defaultValue:null,description:"",name:"prVelocity",required:!1,type:{name:"number"}},prMergePercentage:{defaultValue:null,description:"",name:"prMergePercentage",required:!1,type:{name:"number"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isFlipped:{defaultValue:null,description:"",name:"isFlipped",required:!1,type:{name:"boolean"}},isInteractive:{defaultValue:null,description:"",name:"isInteractive",required:!1,type:{name:"boolean"}},hideProfileButton:{defaultValue:null,description:"",name:"hideProfileButton",required:!1,type:{name:"boolean"}},age:{defaultValue:null,description:"",name:"age",required:!1,type:{name:"number"}},onFlip:{defaultValue:null,description:"",name:"onFlip",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/DevCard/dev-card.tsx#devcard"]={docgenInfo:devcard.__docgenInfo,name:"devcard",path:"components/molecules/DevCard/dev-card.tsx#devcard"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/date-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L0:()=>getFormattedDate,MK:()=>getRelativeDays,wu:()=>calcDistanceFromToday,yy:()=>calcDaysFromToday});var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],calcDaysFromToday=endDate=>{const timeFromNowArray=(0,date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_0__.Z)(endDate,{unit:"day"}).split(" ");return parseInt(timeFromNowArray[0])},getRelativeDays=days=>0===days?"-":days>=365?"".concat(Math.floor(days/365),"y"):days>30&&days<365?"".concat(Math.floor(days/30),"mo"):"".concat(days,"d"),calcDistanceFromToday=endDate=>{const daysFromNow=calcDaysFromToday(endDate);return"".concat(getRelativeDays(daysFromNow))},getFormattedDate=dateString=>{const date=new Date(dateString),month=months[date.getMonth()],day=date.getDate(),year=date.getFullYear();return"".concat(month," ").concat(day,", ").concat(year)}},"./lib/utils/fallback-values.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>DATA_FALLBACK_VALUE});const DATA_FALLBACK_VALUE="-"},"./img/openSauced-icon.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/openSauced-icon.e6bb10df.png",height:113,width:112,blurDataURL:"static/media/openSauced-icon.e6bb10df.png"}}}]);