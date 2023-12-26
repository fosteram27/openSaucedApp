"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[5117],{"./components/atoms/UserCard/user-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoActivities:()=>NoActivities,UserCardStory:()=>UserCardStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>user_card_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),github=__webpack_require__("./lib/utils/github.ts"),spin_loader=__webpack_require__("./components/atoms/SpinLoader/spin-loader.tsx"),__jsx=react.createElement;const UserCard=_ref=>{let{username,name,meta,loading}=_ref;const avatarUrl=(0,github.cc)(username);return __jsx("div",{className:"pb-6 border bg-light-slate-1 w-full rounded-lg border-zinc-200"},loading?__jsx("div",{className:"flex items-center justify-center h-32 w-72"},__jsx(spin_loader.$,{className:"mt-6 "})):__jsx("div",{className:"flex flex-col items-center gap-6 px-9"},__jsx("div",{className:"flex flex-col items-center gap-2 -mt-10"},__jsx(link_default(),{href:"/user/".concat(username)},__jsx(next_image.Z,{className:"border border-white rounded-full ",width:100,height:100,src:avatarUrl,alt:"".concat(username,"'s avatar image")})),__jsx("div",{className:"text-center"},__jsx("h3",{className:"text-lg "},name),__jsx(link_default(),{className:"text-lg text-slate-700",href:"/user/".concat(username)},"@".concat(username)))),__jsx("div",{className:"flex items-center gap-5 text-base text-center "},meta.map(((_ref2,i)=>{let{name,count}=_ref2;return __jsx("div",{key:i.toLocaleString()},__jsx("p",{className:"text-xs text-center text-light-slate-9"},name),count>0?count:"-")})))))};UserCard.displayName="UserCard";const user_card=UserCard;try{usercard.displayName="usercard",usercard.__docgenInfo={description:"",displayName:"usercard",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!0,type:{name:"MetaObj[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/UserCard/user-card.tsx#usercard"]={docgenInfo:usercard.__docgenInfo,name:"usercard",path:"components/atoms/UserCard/user-card.tsx#usercard"})}catch(__react_docgen_typescript_loader_error){}var _UserCardStory$parame,_UserCardStory$parame2,_NoActivities$paramet,_NoActivities$paramet2,user_card_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const user_card_stories={title:"Design System/Atoms/UserCard"},UserCardTemplate=args=>user_card_stories_jsx(user_card,args);UserCardTemplate.displayName="UserCardTemplate";const UserCardStory=UserCardTemplate.bind({}),NoActivities=UserCardTemplate.bind({});UserCardStory.args={username:"foxyblocks",name:"Chris Schlensker",meta:[{name:"Followers",count:3},{name:"Following",count:103},{name:"Highlights",count:55}]},NoActivities.args={username:"foxyblocks",name:"Chris Schlensker",meta:[{name:"Followers",count:0},{name:"Following",count:0},{name:"Highlights",count:0}]},UserCardStory.parameters=_objectSpread(_objectSpread({},UserCardStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_UserCardStory$parame=UserCardStory.parameters)||void 0===_UserCardStory$parame?void 0:_UserCardStory$parame.docs),{},{source:_objectSpread({originalSource:"args => <UserCard {...args} />"},null===(_UserCardStory$parame2=UserCardStory.parameters)||void 0===_UserCardStory$parame2||null===(_UserCardStory$parame2=_UserCardStory$parame2.docs)||void 0===_UserCardStory$parame2?void 0:_UserCardStory$parame2.source)})}),NoActivities.parameters=_objectSpread(_objectSpread({},NoActivities.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoActivities$paramet=NoActivities.parameters)||void 0===_NoActivities$paramet?void 0:_NoActivities$paramet.docs),{},{source:_objectSpread({originalSource:"args => <UserCard {...args} />"},null===(_NoActivities$paramet2=NoActivities.parameters)||void 0===_NoActivities$paramet2||null===(_NoActivities$paramet2=_NoActivities$paramet2.docs)||void 0===_NoActivities$paramet2?void 0:_NoActivities$paramet2.source)})});const __namedExportsOrder=["UserCardStory","NoActivities"]},"./components/atoms/SpinLoader/spin-loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className"],_excluded2=["className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const SpinLoader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className}=_ref,props=(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref},props,{className:"flex justify-center w-full pt-36 "}),__jsx(Spinner,{className:"mr-2 md:w-16 md:h-16"}))}));SpinLoader.displayName="SpinLoader";const __WEBPACK_DEFAULT_EXPORT__=SpinLoader,Spinner=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className}=_ref2,props=(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("div",(0,_home_runner_work_openSaucedApp_openSaucedApp_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref},props,{role:"status"}),__jsx("svg",{"aria-hidden":"true",className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline w-6 h-6 text-gray-200 animate-spin fill-light-slate-8",className),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),__jsx("span",{className:"sr-only"},"Loading..."))}));Spinner.displayName="Spinner";try{SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",displayName:"SpinLoader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"]={docgenInfo:SpinLoader.__docgenInfo,name:"SpinLoader",path:"components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/github.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ty:()=>getOwnerAndRepoNameFromUrl,VV:()=>getPullRequestCommitMessageFromUrl,cc:()=>getAvatarByUsername,dL:()=>getGithubIssueComments,ih:()=>getGithubIssueDetails,ny:()=>generateRepoParts,o8:()=>isValidIssueUrl,pX:()=>generateGhOgImage,qm:()=>isValidPullRequestUrl});var _supabase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/utils/supabase.ts");const getAvatarByUsername=function(username){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:460;return"https://www.github.com/".concat(username,".png?size=").concat(size)},generateRepoParts=url=>{try{const trimmedUrl=url.trim();if(!(trimmedUrl.includes("https://")||trimmedUrl.includes("http://")||trimmedUrl.includes("www."))&&2===trimmedUrl.split("/").length){const[orgName,repoName]=trimmedUrl.split("/");return{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName:"".concat(orgName,"/").concat(repoName),issueId:null}}}const githubUrl=new URL(trimmedUrl.includes("https://")?trimmedUrl:"https://".concat(trimmedUrl)),{pathname}=githubUrl,[,orgName,repoName,,issueId]=pathname.split("/"),repoFullName="".concat(orgName,"/").concat(repoName);return"github.com"===githubUrl.hostname&&orgName&&repoName?issueId?{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName,issueId}}:{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName,issueId:null}}:{isValidUrl:!1,apiPaths:{orgName:null,repoName:null,repoFullName:null,issueId:null}}}catch(err){return{isValidUrl:!1,apiPaths:{orgName:null,repoName:null,repoFullName:null,issueId:null}}}},generateGhOgImage=githubUrl=>{try{const trimmedUrl=githubUrl.trim(),url=new URL(trimmedUrl.includes("https://")?trimmedUrl:"https://".concat(trimmedUrl)),{pathname}=url;return"github.com"!==url.hostname?{isValid:!1,url:""}:{isValid:!0,url:"https://opengraph.githubassets.com/1".concat(pathname)}}catch(err){return{isValid:!1,url:""}}},getPullRequestCommitMessageFromUrl=async url=>{var _sessionResponse$data;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.provider_token,[,,,owner,repoName,,pullRequestNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/pulls/").concat(pullRequestNumber,"/commits"),response=await fetch(apiUrl,{headers:{Authorization:"token ".concat(githubToken)}}),data=await response.json();return Array.isArray(null==data?void 0:data.commits)?data.commits.map((commit=>commit.commit.message)):data.map((commit=>commit.commit.message))},getGithubIssueDetails=async url=>{var _sessionResponse$data2;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data2=sessionResponse.data.session)||void 0===_sessionResponse$data2?void 0:_sessionResponse$data2.provider_token,[,,,owner,repoName,,issueNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/issues/").concat(issueNumber),response=await fetch(apiUrl,{headers:{Authorization:"token ".concat(githubToken)}}),data=await response.json();return{title:data.title,body:data.body}},getGithubIssueComments=async url=>{var _sessionResponse$data3;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data3=sessionResponse.data.session)||void 0===_sessionResponse$data3?void 0:_sessionResponse$data3.provider_token,[,,,owner,repoName,,issueNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/issues/").concat(issueNumber,"/comments"),response=await fetch(apiUrl,{headers:{Authorization:"token ".concat(githubToken)}});return(await response.json()).map((comment=>comment.body)).join(" ")},isValidPullRequestUrl=url=>!!url.match(/((https?:\/\/)?(www\.)?github\.com\/[^\/]+\/[^\/]+\/pull\/[0-9]+)/),isValidIssueUrl=url=>!!url.match(/((https?:\/\/)?(www\.)?github\.com\/[^\/]+\/[^\/]+\/issues\/[0-9]+)/),getOwnerAndRepoNameFromUrl=url=>{const[,,,owner,repoName]=url.split("/");return{owner,repoName}}},"./lib/utils/supabase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>supabase});var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@supabase/auth-helpers-nextjs/dist/index.js");const supabase=(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createPagesBrowserClient)()},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx}}]);