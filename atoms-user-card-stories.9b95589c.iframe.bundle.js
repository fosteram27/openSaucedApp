(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[3105],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./components/atoms/SpinLoader/spin-loader.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return Spinner}});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_excluded=["className"],_excluded2=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SpinLoader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){_ref.className;var props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref:ref},props,{className:"flex justify-center w-full pt-36 "}),__jsx(Spinner,{className:"mr-2 md:w-16 md:h-16"}))}));SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",methods:[],displayName:"SpinLoader"},__webpack_exports__.Z=SpinLoader;var Spinner=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref:ref},props,{role:"status"}),__jsx("svg",{"aria-hidden":"true",className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline w-6 h-6 text-gray-200 animate-spin fill-light-slate-8",className),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),__jsx("span",{className:"sr-only"},"Loading..."))}));Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner"};try{SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",displayName:"SpinLoader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"]={docgenInfo:SpinLoader.__docgenInfo,name:"SpinLoader",path:"components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/github.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Ty:function(){return getOwnerAndRepoNameFromUrl},VV:function(){return getPullRequestCommitMessageFromUrl},cc:function(){return getAvatarByUsername},dL:function(){return getGithubIssueComments},ih:function(){return getGithubIssueDetails},ny:function(){return generateRepoParts},o8:function(){return isValidIssueUrl},pX:function(){return generateGhOgImage},qm:function(){return isValidPullRequestUrl}});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_supabase__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/utils/supabase.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),getAvatarByUsername=function getAvatarByUsername(username){var size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:460;return"https://www.github.com/".concat(username,".png?size=").concat(size)},generateRepoParts=function generateRepoParts(url){try{var trimmedUrl=url.trim();if(!(trimmedUrl.includes("https://")||trimmedUrl.includes("http://")||trimmedUrl.includes("www."))&&2===trimmedUrl.split("/").length){var _trimmedUrl$split=trimmedUrl.split("/"),_trimmedUrl$split2=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_trimmedUrl$split,2),_orgName=_trimmedUrl$split2[0],_repoName=_trimmedUrl$split2[1];return{isValidUrl:!0,apiPaths:{orgName:_orgName,repoName:_repoName,repoFullName:"".concat(_orgName,"/").concat(_repoName),issueId:null}}}var githubUrl=new URL(trimmedUrl.includes("https://")?trimmedUrl:"https://".concat(trimmedUrl)),_pathname$split=githubUrl.pathname.split("/"),_pathname$split2=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_pathname$split,5),orgName=_pathname$split2[1],repoName=_pathname$split2[2],issueId=_pathname$split2[4],repoFullName="".concat(orgName,"/").concat(repoName);return"github.com"===githubUrl.hostname&&orgName&&repoName?issueId?{isValidUrl:!0,apiPaths:{orgName:orgName,repoName:repoName,repoFullName:repoFullName,issueId:issueId}}:{isValidUrl:!0,apiPaths:{orgName:orgName,repoName:repoName,repoFullName:repoFullName,issueId:null}}:{isValidUrl:!1,apiPaths:{orgName:null,repoName:null,repoFullName:null,issueId:null}}}catch(err){return{isValidUrl:!1,apiPaths:{orgName:null,repoName:null,repoFullName:null,issueId:null}}}},generateGhOgImage=function generateGhOgImage(githubUrl){try{var trimmedUrl=githubUrl.trim(),url=new URL(trimmedUrl.includes("https://")?trimmedUrl:"https://".concat(trimmedUrl)),pathname=url.pathname;return"github.com"!==url.hostname?{isValid:!1,url:""}:{isValid:!0,url:"https://opengraph.githubassets.com/1".concat(pathname)}}catch(err){return{isValid:!1,url:""}}},getPullRequestCommitMessageFromUrl=function(){var _ref=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(url){var _sessionResponse$data,sessionResponse,githubToken,_url$split,_url$split2,owner,repoName,pullRequestNumber,apiUrl,response,data;return _home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_supabase__WEBPACK_IMPORTED_MODULE_1__.O.auth.getSession();case 2:return sessionResponse=_context.sent,githubToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.provider_token,_url$split=url.split("/"),_url$split2=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_url$split,7),owner=_url$split2[3],repoName=_url$split2[4],pullRequestNumber=_url$split2[6],apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/pulls/").concat(pullRequestNumber,"/commits"),_context.next=8,fetch(apiUrl,{headers:{Authorization:"token ".concat(githubToken)}});case 8:return response=_context.sent,_context.next=11,response.json();case 11:if(data=_context.sent,console.log(sessionResponse),!Array.isArray(null==data?void 0:data.commits)){_context.next=15;break}return _context.abrupt("return",data.commits.map((function(commit){return commit.commit.message})));case 15:return _context.abrupt("return",data.map((function(commit){return commit.commit.message})));case 16:case"end":return _context.stop()}}),_callee)})));return function getPullRequestCommitMessageFromUrl(_x){return _ref.apply(this,arguments)}}(),getGithubIssueDetails=function(){var _ref2=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee2(url){var _sessionResponse$data2,sessionResponse,githubToken,_url$split3,_url$split4,owner,repoName,issueNumber,apiUrl,response,data;return _home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,_supabase__WEBPACK_IMPORTED_MODULE_1__.O.auth.getSession();case 2:return sessionResponse=_context2.sent,githubToken=null==sessionResponse||null===(_sessionResponse$data2=sessionResponse.data.session)||void 0===_sessionResponse$data2?void 0:_sessionResponse$data2.provider_token,_url$split3=url.split("/"),_url$split4=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_url$split3,7),owner=_url$split4[3],repoName=_url$split4[4],issueNumber=_url$split4[6],apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/issues/").concat(issueNumber),_context2.next=8,fetch(apiUrl,{headers:{Authorization:"token ".concat(githubToken)}});case 8:return response=_context2.sent,_context2.next=11,response.json();case 11:return data=_context2.sent,_context2.abrupt("return",{title:data.title,body:data.body});case 13:case"end":return _context2.stop()}}),_callee2)})));return function getGithubIssueDetails(_x2){return _ref2.apply(this,arguments)}}(),getGithubIssueComments=function(){var _ref3=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee3(url){var _sessionResponse$data3,sessionResponse,githubToken,_url$split5,_url$split6,owner,repoName,issueNumber,apiUrl,response,data,allComments;return _home_runner_work_app_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,_supabase__WEBPACK_IMPORTED_MODULE_1__.O.auth.getSession();case 2:return sessionResponse=_context3.sent,githubToken=null==sessionResponse||null===(_sessionResponse$data3=sessionResponse.data.session)||void 0===_sessionResponse$data3?void 0:_sessionResponse$data3.provider_token,_url$split5=url.split("/"),_url$split6=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_url$split5,7),owner=_url$split6[3],repoName=_url$split6[4],issueNumber=_url$split6[6],apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/issues/").concat(issueNumber,"/comments"),_context3.next=8,fetch(apiUrl,{headers:{Authorization:"token ".concat(githubToken)}});case 8:return response=_context3.sent,_context3.next=11,response.json();case 11:return data=_context3.sent,allComments=data.map((function(comment){return comment.body})).join(" "),_context3.abrupt("return",allComments);case 14:case"end":return _context3.stop()}}),_callee3)})));return function getGithubIssueComments(_x3){return _ref3.apply(this,arguments)}}(),isValidPullRequestUrl=function isValidPullRequestUrl(url){return!!url.match(/((https?:\/\/)?(www\.)?github\.com\/[^\/]+\/[^\/]+\/pull\/[0-9]+)/)},isValidIssueUrl=function isValidIssueUrl(url){return!!url.match(/((https?:\/\/)?(www\.)?github\.com\/[^\/]+\/[^\/]+\/issues\/[0-9]+)/)},getOwnerAndRepoNameFromUrl=function getOwnerAndRepoNameFromUrl(url){var _url$split7=url.split("/"),_url$split8=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_url$split7,5);return{owner:_url$split8[3],repoName:_url$split8[4]}}},"./lib/utils/supabase.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{O:function(){return supabase}});var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@supabase/auth-helpers-nextjs/dist/index.js"),supabase=(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createPagesBrowserClient)()},"./stories/atoms/user-card.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoActivities:function(){return NoActivities},UserCardStory:function(){return UserCardStory},default:function(){return user_card_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),github=__webpack_require__("./lib/utils/github.ts"),spin_loader=__webpack_require__("./components/atoms/SpinLoader/spin-loader.tsx"),__jsx=react.createElement,UserCard=function UserCard(_ref){var username=_ref.username,name=_ref.name,meta=_ref.meta,loading=_ref.loading,avatarUrl=(0,github.cc)(username);return __jsx("div",{className:"pb-6 border bg-light-slate-1 w-full rounded-lg border-zinc-200"},loading?__jsx("div",{className:"flex items-center justify-center h-32 w-72"},__jsx(spin_loader.$,{className:"mt-6 "})):__jsx("div",{className:"flex flex-col items-center gap-6 px-9"},__jsx("div",{className:"flex flex-col items-center gap-2 -mt-10"},__jsx(next_image.Z,{className:"border border-white rounded-full ",width:100,height:100,src:avatarUrl,alt:"".concat(username,"'s avatar image")}),__jsx("div",{className:"text-center"},__jsx("h3",{className:"text-lg "},name),__jsx(link_default(),{className:"text-lg text-slate-700",href:"/user/".concat(username)},"@".concat(username)))),__jsx("div",{className:"flex items-center gap-5 text-base text-center "},meta.map((function(_ref2,i){var name=_ref2.name,count=_ref2.count;return __jsx("div",{key:i.toLocaleString()},__jsx("p",{className:"text-xs text-center text-light-slate-9"},name),count>0?count:"-")})))))};UserCard.displayName="UserCard",UserCard.__docgenInfo={description:"",methods:[],displayName:"UserCard",props:{username:{required:!0,tsType:{name:"string"},description:""},meta:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{\n  name: "Followers" | "Following" | "Highlights";\n  count: number;\n}',signature:{properties:[{key:"name",value:{name:"union",raw:'"Followers" | "Following" | "Highlights"',elements:[{name:"literal",value:'"Followers"'},{name:"literal",value:'"Following"'},{name:"literal",value:'"Highlights"'}],required:!0}},{key:"count",value:{name:"number",required:!0}}]}}],raw:"MetaObj[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};var _UserCardStory$parame,_UserCardStory$parame2,_NoActivities$paramet,_NoActivities$paramet2,user_card=UserCard;try{usercard.displayName="usercard",usercard.__docgenInfo={description:"",displayName:"usercard",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!0,type:{name:"MetaObj[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/UserCard/user-card.tsx#usercard"]={docgenInfo:usercard.__docgenInfo,name:"usercard",path:"components/atoms/UserCard/user-card.tsx#usercard"})}catch(__react_docgen_typescript_loader_error){}var user_card_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var user_card_stories={title:"Design System/Atoms/UserCard"},UserCardTemplate=function UserCardTemplate(args){return user_card_stories_jsx(user_card,args)};UserCardTemplate.displayName="UserCardTemplate";var UserCardStory=UserCardTemplate.bind({}),NoActivities=UserCardTemplate.bind({});UserCardStory.args={username:"foxyblocks",name:"Chris Schlensker",meta:[{name:"Followers",count:3},{name:"Following",count:103},{name:"Highlights",count:55}]},NoActivities.args={username:"foxyblocks",name:"Chris Schlensker",meta:[{name:"Followers",count:0},{name:"Following",count:0},{name:"Highlights",count:0}]},UserCardStory.parameters=_objectSpread(_objectSpread({},UserCardStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_UserCardStory$parame=UserCardStory.parameters)||void 0===_UserCardStory$parame?void 0:_UserCardStory$parame.docs),{},{source:_objectSpread({originalSource:"args => <UserCard {...args} />"},null===(_UserCardStory$parame2=UserCardStory.parameters)||void 0===_UserCardStory$parame2||null===(_UserCardStory$parame2=_UserCardStory$parame2.docs)||void 0===_UserCardStory$parame2?void 0:_UserCardStory$parame2.source)})}),NoActivities.parameters=_objectSpread(_objectSpread({},NoActivities.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoActivities$paramet=NoActivities.parameters)||void 0===_NoActivities$paramet?void 0:_NoActivities$paramet.docs),{},{source:_objectSpread({originalSource:"args => <UserCard {...args} />"},null===(_NoActivities$paramet2=NoActivities.parameters)||void 0===_NoActivities$paramet2||null===(_NoActivities$paramet2=_NoActivities$paramet2.docs)||void 0===_NoActivities$paramet2?void 0:_NoActivities$paramet2.source)})})},"./node_modules/@storybook/nextjs/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:function(){return clsx}}),__webpack_exports__.Z=clsx}}]);