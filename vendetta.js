"use strict";(()=>{var fr=Object.defineProperty;var v=(e,t)=>{for(var r in t)fr(e,r,{get:t[r],enumerable:!0})};var Ue={};v(Ue,{connectToDebugger:()=>Oe,getDebugInfo:()=>Ce,patchLogHook:()=>Ve,socket:()=>_,versionHash:()=>de});var De={};v(De,{Flux:()=>yr,FluxDispatcher:()=>fe,NavigationNative:()=>B,React:()=>k,ReactNative:()=>l,assets:()=>Z,channels:()=>gr,clipboard:()=>Q,commands:()=>ue,constants:()=>U,i18n:()=>se,invites:()=>hr,moment:()=>H,navigation:()=>Rr,navigationStack:()=>Er,stylesheet:()=>I,toasts:()=>Ie,url:()=>le});var Ne={};v(Ne,{find:()=>z,findAll:()=>_e,findByDisplayName:()=>W,findByDisplayNameAll:()=>pr,findByProps:()=>f,findByPropsAll:()=>dr,findByStoreName:()=>ce,modules:()=>Se});var ie=function(e){return Object.values(window.modules).find(function(t){return t?.publicModule.exports?.[e]})?.publicModule?.exports};window.React=ie("createElement");var l=ie("AppRegistry"),U=ie("AbortCodes"),H=ie("isMoment");function Ot(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),r=window.modules[t]?.publicModule?.exports;if(!r||r===window||r.proxygone===null){Ot(t);continue}}var Vt=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return function(r){let n=[],o=H?.locale();for(let a in e){let c=Number(a),i=e[c]?.publicModule?.exports;if(!e[c].isInitialized)try{__r(c),o&&o!==H.locale()&&H.locale(o)}catch{}if(!i){Ot(c);continue}try{if(i.default&&i.__esModule&&r(i.default)){if(t)return i.default;n.push(i.default)}if(r(i)){if(t)return i;n.push(i)}}catch(s){console.error(`Failed to filter modules... ${s.stack||s.toString()}`)}}if(!t)return n}},Se=window.modules,z=Vt(Se,!0),_e=Vt(Se),Ct=function(e){return function(t){return e.every(function(r){return t[r]!==void 0})}},Ut=function(e,t){return t?function(r){return r?.name===e}:function(r){return r?.default?.name===e}},mr=function(e){return function(t){return t.getName&&t.getName.length===0&&t.getName()===e}},f=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return z(Ct(t))},dr=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return _e(Ct(t))},W=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return z(Ut(e,t))},pr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return _e(Ut(e,t))},ce=function(e){return z(mr(e))};var gr=f("getVoiceChannelId"),se=f("Messages"),le=f("openDeeplink"),Ie=z(function(e){return e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop}),I=f("createThemedStyleSheet"),Q=f("setString","getString","hasString"),Z=f("registerAsset"),hr=f("acceptInviteAndTransitionToInviteChannel"),ue=f("getBuiltInCommands"),Rr=f("pushLazy"),Er=f("createStackNavigator"),B=f("NavigationContainer"),yr=f("connectStores"),fe=f("_currentDispatchActionType"),k=window.React;var Be={};v(Be,{after:()=>b,before:()=>vr,instead:()=>xr,unpatchAll:()=>Gt});var Pe=["a","b","i"],P=new Map;function kt(e,t,r,n,o){let a=P.get(t)?.[e];if(!a)return o?Reflect.construct(t[e],r,n):t[e].apply(n,r);for(let s of a.b.values()){let d=s.call(n,r);Array.isArray(d)&&(r=d)}let c=function(){for(var s=arguments.length,d=new Array(s),g=0;g<s;g++)d[g]=arguments[g];return o?Reflect.construct(a.o,d,n):a.o.apply(n,d)};for(let s of a.i.values()){let d=c;c=function(){for(var g=arguments.length,w=new Array(g),p=0;p<g;p++)w[p]=arguments[p];return s.call(n,w,d)}}let i=c(...r);for(let s of a.a.values())i=s.call(n,r,i)??i;return i}function Te(e,t,r,n){let o=P.get(e),a=o?.[t];return a?.[n].has(r)?(a[n].delete(r),Pe.every(function(c){return a[c].size===0})&&(Reflect.defineProperty(e,t,{value:a.o,writable:!0,configurable:!0})||(e[t]=a.o),delete o[t]),Object.keys(o).length==0&&P.delete(e),!0):!1}function Gt(){for(let[e,t]of P.entries())for(let r in t)for(let n of Pe)for(let o of t[r]?.[n].keys()??[])Te(e,r,o,n)}function me(e){return function(t,r,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(typeof r[t]!="function")throw new Error(`${t} is not a function in ${r.constructor.name}`);P.has(r)||P.set(r,{});let a=P.get(r);if(!a[t]){let s=r[t];a[t]={o:s,b:new Map,i:new Map,a:new Map};let d=function(p,N,C){let ur=kt(t,r,N,p,C);return o&&i(),ur},g=new Proxy(s,{apply:function(p,N,C){return d(N,C,!1)},construct:function(p,N){return d(s,N,!0)},get:function(p,N,C){return N=="toString"?s.toString.bind(s):Reflect.get(p,N,C)}});Reflect.defineProperty(r,t,{value:g,configurable:!0,writable:!0})||(r[t]=g)}let c=Symbol(),i=function(){return Te(r,t,c,e)};return a[t][e].set(c,n),i}}var vr=me("b"),xr=me("i"),b=me("a");var jt={...Be};var Me={};v(Me,{all:()=>A,find:()=>wr,getAssetByID:()=>Sr,getAssetByName:()=>br,getAssetIDByName:()=>u,patchAssets:()=>Ae});var A={};function Ae(){let e=b("registerAsset",Z,function(t,r){let n=t[0];A[n.name]={...n,id:r}});for(let t=1;;t++){let r=Z.getAssetByID(t);if(!r)break;A[r.name]||(A[r.name]={...r,id:t})}return e}var wr=function(e){return Object.values(A).find(e)},br=function(e){return A[e]},Sr=function(e){return Z.getAssetByID(e)},u=function(e){return A[e]?.id};var Fe={};v(Fe,{showToast:()=>x});var x=function(e,t){return Ie.open({content:e,source:t})};var Le=f("setLogFn").default,_r=new Le("Vendetta"),S=_r;var _;function Oe(e){if(_!==void 0&&_.readyState!==WebSocket.CLOSED&&_.close(),!e){x("Invalid debugger URL!",u("Small"));return}_=new WebSocket(`ws://${e}`),_.addEventListener("open",function(){return x("Connected to debugger.",u("Check"))}),_.addEventListener("message",function(t){try{(0,eval)(t.data)}catch(r){console.error(r)}}),_.addEventListener("error",function(t){console.log(`Debugger error: ${t.message}`),x("An error occurred with the debugger connection!",u("Small"))})}function Ve(){let e=b("nativeLoggingHook",globalThis,function(t){_?.readyState===WebSocket.OPEN&&_.send(JSON.stringify({message:t[0],level:t[1]})),S.log(t[0])});return function(){_&&_.close(),e()}}var de="__vendettaVersion";function Ce(){let e=l.NativeModules.InfoDictionaryManager,t=l.NativeModules.DCDDeviceManager,r=window.HermesInternal.getRuntimeProperties(),n=r["OSS Release Version"],o="for RN ",a=l.Platform.constants,c=a.reactNativeVersion;return{vendetta:{version:de,loader:window.__vendetta_loader?.name??"Unknown"},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:n.startsWith(o)?n.substring(o.length):`${c.major}.${c.minor}.${c.patch}`},hermes:{version:n,buildType:r.Build,bytecodeVersion:r["Bytecode Version"]},...l.Platform.select({android:{os:{name:"Android",version:a.Release,sdk:a.Version}},ios:{os:{name:a.systemName,version:a.osVersion}}}),...l.Platform.select({android:{device:{manufacturer:a.Manufacturer,brand:a.Brand,model:a.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var Ge={};v(Ge,{patchCommands:()=>ke,registerCommand:()=>Nr});var q=[];function ke(){let e=b("getBuiltInCommands",ue,function(t,r){return r.concat(q)});return function(){q=[],e()}}function Nr(e){let t=ue.getBuiltInCommands(1,!0,!1);t.sort(function(n,o){return parseInt(o.id)-parseInt(n.id)});let r=t[t.length-1];return e.id=(parseInt(r.id,10)-1).toString(),q.push(e),function(){return q=q.filter(function(n){let{id:o}=n;return o!==e.id})}}var Qe={};v(Qe,{evalPlugin:()=>Jt,fetchPlugin:()=>pe,getSettings:()=>Xe,initPlugins:()=>Ye,installPlugin:()=>Ke,plugins:()=>h,removePlugin:()=>Je,startPlugin:()=>te,stopPlugin:()=>re});var We={};v(We,{awaitSyncWrapper:()=>ze,createFileBackend:()=>He,createMMKVBackend:()=>K,createProxy:()=>Kt,createStorage:()=>G,useProxy:()=>T,wrapSync:()=>J});var je;(function(e){e.GET="GET",e.SET="SET",e.DEL="DEL"})(je||(je={}));function $e(){return{listeners:Object.values(je).reduce(function(e,t){return e[t]=new Set,e},{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){var r=this;let n=function(o,a){r.off(o,n),t(o,a)};this.on(e,n)},emit(e,t){for(let r of this.listeners[e])r(e,t)}}}var $t=l.NativeModules.MMKVManager,ee=l.NativeModules.DCDFileManager,Ht=l.Platform.select({default:function(e){return e},ios:function(e){return`Documents/${e}`}}),K=function(e){return{get:async function(){return JSON.parse(await $t.getItem(e)??"{}")},set:function(t){return $t.setItem(e,JSON.stringify(t))}}},He=function(e){let t;return{get:async function(){let r=`${ee.getConstants().DocumentsDirPath}/${e}`;return!t&&!await ee.fileExists(r)?(t=!0,ee.writeFile("documents",Ht(e),"{}","utf8")):JSON.parse(await ee.readFile(r,"utf8"))},set:function(r){return void ee.writeFile("documents",Ht(e),JSON.stringify(r),"utf8")}}};var Tn=l.NativeModules.MMKVManager,zt=Symbol("emitter accessor"),Wt=Symbol("wrapSync promise accessor");function Kt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=$e();function r(n,o){return new Proxy(n,{get(a,c){if(c===zt)return t;let i=[...o,c],s=a[c];return s!=null?(t.emit("GET",{path:i,value:s}),typeof s=="object"?r(s,i):s):s},set(a,c,i){return a[c]=i,t.emit("SET",{path:[...o,c],value:i}),!0},deleteProperty(a,c){let i=delete a[c];return i&&t.emit("DEL",{path:[...o,c]}),i}})}return{proxy:r(e,[]),emitter:t}}function T(e){let t=e[zt],[,r]=React.useReducer(function(n){return~n},0);return React.useEffect(function(){let n=function(){return r()};return t.on("SET",n),t.on("DEL",n),function(){t.off("SET",n),t.off("DEL",n)}},[]),e}async function G(e){let t=await e.get(),{proxy:r,emitter:n}=Kt(t),o=function(){return e.set(r)};return n.on("SET",o),n.on("DEL",o),r}function J(e){let t,r=[],n=function(o){return t?o():r.push(o)};return e.then(function(o){t=o,r.forEach(function(a){return a()})}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(function(o){return[o,function(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),s=1;s<c;s++)i[s-1]=arguments[s];return Reflect[o](t??a,...i)}]})),get(o,a,c){return a===Wt?n:Reflect.get(t??o,a,c)}})}var ze=function(e){return new Promise(function(t){return e[Wt](t)})};async function Y(e,t){let r=await fetch(e,t);if(!r.ok)throw new Error("Request returned non-ok");return r}var h=J(G(K("VENDETTA_PLUGINS"))),j={};async function pe(e){e.endsWith("/")||(e+="/");let t=h[e],r;try{r=await(await Y(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let n;if(t?.manifest.hash!==r.hash)try{n=await(await Y(e+(r.main||"index.js"),{cache:"no-store"})).text()}catch{}if(!n&&!t)throw new Error(`Failed to fetch JS for ${e}`);h[e]={id:e,manifest:r,enabled:t?.enabled??!1,update:t?.update??!0,js:n??t.js}}async function Ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in h)throw new Error("Plugin already installed");await pe(e),t&&await te(e)}async function Jt(e){let t={...window.vendetta,plugin:{id:e.id,manifest:e.manifest,storage:await G(K(e.id))},logger:new Le(`Vendetta \xBB ${e.manifest.name}`)},r=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,n=(0,eval)(r)(t),o=typeof n=="function"?n():n;return o.default||o}async function te(e){e.endsWith("/")||(e+="/");let t=h[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let r=await Jt(t);j[e]=r,r.onLoad?.(),t.enabled=!0}catch(r){S.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,r);try{j[t.id]?.onUnload?.()}catch(n){S.error(`Plugin ${t.id} errored whilst unloading`,n)}delete j[e],t.enabled=!1}}function re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;e.endsWith("/")||(e+="/");let r=h[e],n=j[e];if(!r)throw new Error("Attempted to stop non-existent plugin");if(!n)throw new Error("Attempted to stop a non-started plugin");try{n.onUnload?.()}catch(o){S.error(`Plugin ${r.id} errored whilst unloading`,o)}delete j[e],t&&(r.enabled=!1)}function Je(e){e.endsWith("/")||(e+="/"),h[e].enabled&&re(e),delete h[e]}async function Ye(){await ze(h);let e=Object.keys(h);return await Promise.allSettled(e.filter(function(t){return h[t].enabled&&h[t].update}).map(function(t){return pe(t)})),await Promise.allSettled(e.filter(function(t){return h[t].enabled}).map(function(t){return te(t)})),e.filter(function(t){return!h[t].enabled&&h[t].update}).forEach(function(t){return pe(t)}),Ir}var Ir=function(){return Object.keys(j).forEach(function(e){return re(e,!1)})},Xe=function(e){return j[e]?.settings};function ne(e,t){let{walkable:r=[],ignore:n=[],maxDepth:o=100}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0;function c(i,s){let{walkable:d=[],ignore:g=[]}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(a+=1,!(a>o)){if(typeof s=="string"){if(i.hasOwnProperty(s))return i[s]}else if(s(i))return i;if(i){if(Array.isArray(i))for(let w of i){let p=c(w,s,{walkable:d,ignore:g});if(p)return p}else if(typeof i=="object"){for(let w of Object.keys(i))if(!(d!=null&&d.includes(w))&&!g.includes(w))try{let p=c(i[w],s,{walkable:d,ignore:g});if(p)return p}catch{}}}}}return c(e,t,{walkable:r,ignore:n})}function ge(e,t){return ne(e,t,{walkable:["props","children","child","sibling"]})}function Ze(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qe(e,t){return qe=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},qe(e,t)}function et(e,t){return qe(e,t)}function tt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&et(e,t)}function rt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nt(e){return nt=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},nt(e)}function he(e){return nt(e)}function ot(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function at(e){return e&&e.constructor===Symbol?"symbol":typeof e}function it(e,t){return t&&(at(t)==="object"||typeof t=="function")?t:ot(e)}function ct(e){var t=rt();return function(){var n=he(e),o;if(t){var a=he(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return it(this,o)}}var ut={};v(ut,{Alert:()=>lt,ErrorBoundary:()=>R,Forms:()=>m,General:()=>oe,Search:()=>st,Summary:()=>X});function X(e){let{label:t,icon:r,noPadding:n=!1,noAnimation:o=!1,children:a}=e,[c,i]=React.useState(!0);return React.createElement(React.Fragment,null,React.createElement(m.FormRow,{label:t,leading:r&&React.createElement(m.FormRow.Icon,{source:u(r)}),trailing:React.createElement(m.FormRow.Arrow,{style:{transform:[{rotate:`${c?180:90}deg`}]}}),onPress:function(){i(!c),o||l.LayoutAnimation.configureNext(l.LayoutAnimation.Presets.easeInEaseOut)}}),!c&&React.createElement(React.Fragment,null,React.createElement(m.FormDivider,null),React.createElement(l.View,{style:!n&&{paddingHorizontal:15}},a)))}var m=f("Form","FormSection"),oe=f("Button","Text","View"),st=W("StaticSearchBarContainer"),lt=f("alertDarkStyles","alertLightStyles").default;var ft={};v(ft,{rawColors:()=>Dr,semanticColors:()=>M});var Yt=f("colors","meta"),M=U.ThemeColorMap??Yt?.colors,Dr=U.Colors??Yt?.unsafe_rawColors;var Re=f("Looks","Colors","Sizes"),mt=I.createThemedStyleSheet({view:{flex:1,flexDirection:"column",margin:10},title:{fontSize:20,textAlign:"center",marginBottom:5},codeblock:{fontFamily:U.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,fontSize:12,backgroundColor:M.BACKGROUND_SECONDARY,padding:5,borderRadius:5,marginBottom:5}}),Pr,R=function(e){"use strict";tt(r,e);var t=ct(r);function r(o){Ze(this,r);var a;return a=t.call(this,o),a.state={hasErr:!1},a}var n=r.prototype;return n.render=function(){var a=this;return this.state.hasErr?k.createElement(l.ScrollView,{style:mt.view},k.createElement(m.FormText,{style:mt.title},"Uh oh."),k.createElement(m.FormText,{style:mt.codeblock},this.state.errText),k.createElement(Re,{color:Re.Colors.RED,size:Re.Sizes.MEDIUM,look:Re.Looks.FILLED,onPress:function(){return a.setState({hasErr:!1,errText:void 0})},text:"Retry"})):this.props.children},r}(Pr=k.Component);R.getDerivedStateFromError=function(e){return{hasErr:!0,errText:e.message}};var E=J(G(K("VENDETTA_SETTINGS"))),D=J(G(He("vendetta_loader.json")));var{FormRow:F,FormSection:Tr,FormDivider:Xt}=m;function dt(){let e=B.useNavigation();return T(E),React.createElement(R,null,React.createElement(Tr,{key:"Vendetta",title:"Vendetta"},React.createElement(F,{label:"General",leading:React.createElement(F.Icon,{source:u("settings")}),trailing:F.Arrow,onPress:function(){return e.push("VendettaSettings")}}),React.createElement(Xt,null),React.createElement(F,{label:"Plugins",leading:React.createElement(F.Icon,{source:u("debug")}),trailing:F.Arrow,onPress:function(){return e.push("VendettaPlugins")}}),E.developerSettings&&React.createElement(React.Fragment,null,React.createElement(Xt,null),React.createElement(F,{label:"Developer",leading:React.createElement(F.Icon,{source:u("ic_progress_wrench_24px")}),trailing:F.Arrow,onPress:function(){return e.push("VendettaDeveloper")}}))))}var Rt={};v(Rt,{DISCORD_SERVER:()=>pt,GITHUB:()=>gt,HTTP_REGEX:()=>ht});var pt="https://discord.gg/n9QQ4XhhJP",gt="https://github.com/vendetta-mod",ht=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;var xt={};v(xt,{showConfirmationAlert:()=>yt,showCustomAlert:()=>qt,showInputAlert:()=>vt});var{FormInput:Br}=m,Qt=f("openLazy","close");function Et(e){let{title:t,confirmText:r,confirmColor:n,onConfirm:o,cancelText:a,placeholder:c,initialValue:i=""}=e,[s,d]=React.useState(i),[g,w]=React.useState("");function p(){Promise.resolve(o(s)).then(function(){Qt.close()}).catch(function(C){w(C.message)})}return React.createElement(lt,{title:t,confirmText:r,confirmColor:n,isConfirmButtonDisabled:g.length!==0,onConfirm:p,cancelText:a,onCancel:function(){return Qt.close()}},React.createElement(Br,{placeholder:c,value:s,onChangeText:function(N){d(N),g&&w("")},returnKeyType:"done",onSubmitEditing:p,error:g,autoFocus:!0,showBorder:!0,style:{paddingVertical:5,alignSelf:"stretch",paddingHorizontal:0}}))}var Zt=f("openLazy","close");function yt(e){let t=e;return typeof e.content=="string"?t.body=e.content:t.children=e.content,delete t.content,Zt.show(t)}var qt=function(e,t){return Zt.openLazy({importer:async function(){return function(){return React.createElement(e,t)}}})},vt=function(e){return qt(Et,e)};var{TouchableOpacity:Ar,Image:Mr}=oe,Fr=I.createThemedStyleSheet({icon:{marginRight:10,tintColor:M.HEADER_PRIMARY}});function wt(){return React.createElement(Ar,{onPress:function(){return Q.getString().then(function(e){return vt({title:"Install Plugin",initialValue:ht.test(e)?e:"",placeholder:"https://example.com/",onConfirm:Ke,confirmText:"Install",confirmColor:void 0,cancelText:"Cancel"})})}},React.createElement(Mr,{style:Fr.icon,source:u("ic_add_24px")}))}function L(e){try{Q.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}var{FormRow:er,FormText:Lr}=m;function Ee(e){let{label:t,version:r,icon:n}=e;return React.createElement(er,{label:t,leading:React.createElement(er.Icon,{source:u(n)}),trailing:React.createElement(Lr,null,r),onPress:function(){L(`${t} - ${r}`),x("Copied version to clipboard.",u("toast_copy_link"))}})}var{FormRow:O,FormSwitchRow:Or,FormSection:bt,FormDivider:ae}=m,y=Ce();function St(){T(E);let e=[{label:"Vendetta",version:y.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${y.discord.version} (${y.discord.build})`,icon:"Discord"},{label:"React",version:y.react.version,icon:"ic_category_16px"},{label:"React Native",version:y.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:y.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Loader",version:y.vendetta.loader,icon:"ic_download_24px"},{label:"Operating System",version:`${y.os.name} ${y.os.version}`,icon:"ic_cog_24px"},...y.os.sdk?[{label:"SDK",version:y.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:y.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:y.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:y.device.model,icon:"ic_phonelink_24px"},{label:l.Platform.select({android:"Codename",ios:"Machine ID"}),version:y.device.codename,icon:"ic_compose_24px"}];return React.createElement(R,null,React.createElement(l.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(bt,{title:"Links",titleStyleType:"no_border"},React.createElement(O,{label:"Discord Server",leading:React.createElement(O.Icon,{source:u("Discord")}),trailing:O.Arrow,onPress:function(){return le.openDeeplink(pt)}}),React.createElement(ae,null),React.createElement(O,{label:"GitHub",leading:React.createElement(O.Icon,{source:u("img_account_sync_github_white")}),trailing:O.Arrow,onPress:function(){return le.openURL(gt)}})),React.createElement(bt,{title:"Actions"},React.createElement(O,{label:"Reload Discord",leading:React.createElement(O.Icon,{source:u("ic_message_retry")}),onPress:function(){return l.NativeModules.BundleUpdaterManager.reload()}}),React.createElement(ae,null),React.createElement(Or,{label:"Developer Settings",leading:React.createElement(O.Icon,{source:u("ic_progress_wrench_24px")}),value:E.developerSettings,onValueChange:function(r){E.developerSettings=r}})),React.createElement(bt,{title:"Info"},React.createElement(X,{label:"Versions",icon:"ic_information_filled_24px"},e.map(function(r,n){return React.createElement(React.Fragment,null,React.createElement(Ee,{label:r.label,version:r.version,icon:r.icon}),n!==e.length-1&&React.createElement(ae,null))})),React.createElement(ae,null),React.createElement(X,{label:"Platform",icon:"ic_mobile_device"},t.map(function(r,n){return React.createElement(React.Fragment,null,React.createElement(Ee,{label:r.label,version:r.version,icon:r.icon}),n!==t.length-1&&React.createElement(ae,null))})))))}var ye;(function(e){e.BRAND="brand",e.RED="red",e.GREEN="green",e.PRIMARY="primary",e.TRANSPARENT="transparent",e.GREY="grey",e.LIGHTGREY="lightgrey",e.WHITE="white",e.LINK="link"})(ye||(ye={}));var tr;(function(e){e[e.BUILT_IN=0]="BUILT_IN",e[e.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",e[e.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",e[e.BOT=3]="BOT",e[e.PLACEHOLDER=4]="PLACEHOLDER"})(tr||(tr={}));var rr;(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER=6]="USER",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(rr||(rr={}));var nr;(function(e){e[e.CHAT=1]="CHAT",e[e.USER=2]="USER",e[e.MESSAGE=3]="MESSAGE"})(nr||(nr={}));var{FormRow:_t,FormSwitch:Vr}=m,{TouchableOpacity:ve,Image:xe}=oe,$=I.createThemedStyleSheet({card:{backgroundColor:M?.BACKGROUND_SECONDARY,borderRadius:5,marginHorizontal:10,marginBottom:10},header:{padding:0,backgroundColor:M?.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:M?.INTERACTIVE_NORMAL}});function Nt(e){let{plugin:t,index:r}=e,n=Xe(t.id),o=B.useNavigation(),[a,c]=React.useState(!1);return a?null:React.createElement(l.View,{style:[$.card,{marginTop:r===0?10:0}]},React.createElement(_t,{style:$.header,label:`${t.manifest.name} by ${t.manifest.authors.map(function(i){return i.name}).join(", ")}`,leading:React.createElement(_t.Icon,{source:u(t.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(Vr,{style:l.Platform.OS==="android"&&{marginVertical:-15},value:t.enabled,onValueChange:function(i){try{i?te(t.id):re(t.id)}catch(s){x(s.message,u("Small"))}}})}),React.createElement(_t,{label:t.manifest.description,trailing:React.createElement(l.View,{style:$.actions},React.createElement(ve,{onPress:function(){return yt({title:"Wait!",content:`Are you sure you wish to delete ${t.manifest.name}?`,confirmText:"Delete",cancelText:"Cancel",confirmColor:ye.RED,onConfirm:function(){try{Je(t.id),c(!0)}catch(i){x(i.message,u("Small"))}}})}},React.createElement(xe,{style:$.icon,source:u("ic_message_delete")})),React.createElement(ve,{onPress:function(){L(t.id),x("Copied plugin URL to clipboard.",u("toast_copy_link"))}},React.createElement(xe,{style:$.icon,source:u("copy")})),React.createElement(ve,{onPress:function(){t.update=!t.update,x(`${t.update?"Enabled":"Disabled"} updates for ${t.manifest.name}.`,u("toast_image_saved"))}},React.createElement(xe,{style:$.icon,source:u(t.update?"Check":"Small")})),n&&React.createElement(ve,{onPress:function(){return o.push("VendettaCustomPage",{title:t.manifest.name,render:n})}},React.createElement(xe,{style:$.icon,source:u("settings")})))}))}function It(){return T(h),React.createElement(R,null,React.createElement(l.View,{style:{flex:1}},React.createElement(l.FlatList,{data:Object.values(h),renderItem:function(e){let{item:t,index:r}=e;return React.createElement(Nt,{plugin:t,index:r})},keyExtractor:function(e){return e.id}})))}var{FormSection:Dt,FormRow:V,FormSwitchRow:or,FormInput:ar,FormDivider:we}=m;function Pt(){let e=B.useNavigation();return T(E),T(D),React.createElement(R,null,React.createElement(l.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(Dt,{title:"Debug",titleStyleType:"no_border"},React.createElement(ar,{value:E.debuggerUrl,onChange:function(t){return E.debuggerUrl=t},placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(we,null),React.createElement(V,{label:"Connect to debug websocket",leading:React.createElement(V.Icon,{source:u("copy")}),onPress:function(){return Oe(E.debuggerUrl)}}),window.__vendetta_rdc&&React.createElement(React.Fragment,null,React.createElement(we,null),React.createElement(V,{label:"Connect to React DevTools",leading:React.createElement(V.Icon,{source:u("ic_badge_staff")}),onPress:function(){return window.__vendetta_rdc?.connectToDevTools({host:E.debuggerUrl.split(":")?.[0],resolveRNStyle:l.StyleSheet.flatten})}}))),window.__vendetta_loader?.features.loaderConfig&&React.createElement(Dt,{title:"Loader config"},React.createElement(or,{label:"Load from custom url",subLabel:"Load Vendetta from a custom endpoint.",leading:React.createElement(V.Icon,{source:u("copy")}),value:D.customLoadUrl.enabled,onValueChange:function(t){D.customLoadUrl.enabled=t}}),React.createElement(we,null),D.customLoadUrl.enabled&&React.createElement(React.Fragment,null,React.createElement(ar,{value:D.customLoadUrl.url,onChange:function(t){return D.customLoadUrl.url=t},placeholder:"http://localhost:4040/vendetta.js",title:"VENDETTA URL"}),React.createElement(we,null)),window.__vendetta_loader.features.devtools&&React.createElement(or,{label:"Load React DevTools",subLabel:`Version: ${window.__vendetta_loader.features.devtools.version}`,leading:React.createElement(V.Icon,{source:u("ic_badge_staff")}),value:D.loadReactDevTools,onValueChange:function(t){D.loadReactDevTools=t}})),React.createElement(Dt,{title:"Other"},React.createElement(V,{label:"Asset Browser",leading:React.createElement(V.Icon,{source:u("ic_media_upload")}),trailing:V.Arrow,onPress:function(){return e.push("VendettaAssetBrowser")}}))))}var{FormRow:Cr}=m,Ur=I.createThemedStyleSheet({asset:{width:32,height:32}});function Tt(e){let{asset:t}=e;return React.createElement(Cr,{label:`${t.name} - ${t.id}`,trailing:React.createElement(l.Image,{source:t.id,style:Ur.asset}),onPress:function(){L(t.name),x("Copied asset name to clipboard.",u("toast_copy_link"))}})}var{FormDivider:kr}=m,Gr=I.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function Bt(){let[e,t]=React.useState("");return React.createElement(R,null,React.createElement(l.View,{style:{flex:1}},React.createElement(st,{style:Gr.search,onChangeText:function(r){return t(r)},placeholder:"Search"}),React.createElement(l.FlatList,{data:Object.values(A).filter(function(r){return r.name.includes(e)||r.id.toString()===e}),renderItem:function(r){let{item:n}=r;return React.createElement(React.Fragment,null,React.createElement(Tt,{asset:n}),React.createElement(kr,null))},keyExtractor:function(r){return r.name}})))}var jr=W("getScreens",!1),$r=W("UserSettingsOverviewWrapper",!1);function At(){let e=new Array;return e.push(b("default",jr,function(t,r){return{...r,VendettaSettings:{title:"Vendetta",render:St},VendettaPlugins:{title:"Plugins",render:It,headerRight:wt},VendettaDeveloper:{title:"Developer",render:Pt},VendettaAssetBrowser:{title:"Asset Browser",render:Bt},VendettaCustomPage:{title:"Vendetta Page",render:function(n){let{render:o,...a}=n,c=B.useNavigation();return React.useEffect(function(){return a&&c.setOptions(a)}),React.createElement(R,null,React.createElement(o,null))}}}})),b("default",$r,function(t,r){let n=ge(r.props.children,function(o){return o.type&&o.type.name==="UserSettingsOverview"});e.push(b("renderSupportAndAcknowledgements",n.type.prototype,function(o,a){let{props:{children:c}}=a,i=c.findIndex(function(s){return s?.type?.name==="UploadLogsButton"});i!==-1&&c.splice(i,1)})),e.push(b("render",n.type.prototype,function(o,a){let{props:{children:c}}=a,i=[se.Messages.BILLING_SETTINGS,se.Messages.PREMIUM_SETTINGS],s=c.findIndex(function(d){return i.includes(d.props.title)});c.splice(s===-1?4:s,0,React.createElement(dt,null))}))},!0),function(){return e.forEach(function(t){return t()})}}var Hr=f("updateTheme","overrideTheme"),ir=f("setAMOLEDThemeEnabled"),cr=ce("ThemeStore"),zr=ce("UnsyncedUserSettingsStore");function sr(){let e=cr.theme||"dark";Hr.overrideTheme(e),ir&&zr.useAMOLEDTheme===2&&ir.setAMOLEDThemeEnabled(!0),fe.unsubscribe("I18N_LOAD_START",sr)}function Mt(){try{cr&&fe.subscribe("I18N_LOAD_START",sr)}catch(e){S.error("Failed to fix theme...",e)}}var Lt={};v(Lt,{copyText:()=>L,findInReactTree:()=>ge,findInTree:()=>ne,safeFetch:()=>Y,unfreeze:()=>Ft});function Ft(e){return Object.isFrozen(e)?Object.assign({},e):e}function be(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];let o={...e};return r.forEach(function(a){return delete o[a]}),o}async function lr(e){return{patcher:be(jt,"unpatchAll"),metro:{...Ne,common:{...De}},constants:Rt,utils:Lt,debug:be(Ue,"versionHash","patchLogHook"),ui:{components:ut,toasts:Fe,alerts:xt,assets:Me,...ft},plugins:be(Qe,"initPlugins"),commands:be(Ge,"patchCommands"),storage:We,settings:E,loader:{identity:window.__vendetta_loader,config:D},logger:S,version:de,unload:function(){e.filter(function(t){return typeof t=="function"}).forEach(function(t){return t()}),delete window.vendetta}}}console.log("Hello from Vendetta!");(async function(){try{let e=await Promise.all([Ve(),Ae(),ke(),Mt(),At()]);window.vendetta=await lr(e),e.push(await Ye()),S.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}})();})();
//# sourceURL=Vendetta