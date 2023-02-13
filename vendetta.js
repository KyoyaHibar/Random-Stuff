"use strict";(()=>{var Vt=Object.defineProperty;var b=(e,t)=>{for(var o in t)Vt(e,o,{get:t[o],enumerable:!0})};var Ae={};b(Ae,{connectToDebugger:()=>Ie,getDebugInfo:()=>Me,patchLogHook:()=>Fe,socket:()=>x,versionHash:()=>ce});var Se={};b(Se,{Flux:()=>Ut,FluxDispatcher:()=>se,NavigationNative:()=>E,React:()=>jt,ReactNative:()=>m,assets:()=>z,channels:()=>Bt,clipboard:()=>we,commands:()=>ie,constants:()=>k,i18n:()=>ne,invites:()=>xe,navigation:()=>Ot,navigationStack:()=>kt,stylesheet:()=>P,toasts:()=>be,url:()=>ve});var he={};b(he,{find:()=>U,findAll:()=>ye,findByDisplayName:()=>j,findByDisplayNameAll:()=>Lt,findByProps:()=>d,findByPropsAll:()=>Ct,findByStoreName:()=>re,modules:()=>ge});var te=e=>Object.values(window.modules).find(t=>t.publicModule.exports?.[e]).publicModule.exports;window.React=te("createElement");var m=te("Text"),k=te("ThemeColorMap"),oe=te("isMoment");function pt(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t].publicModule.exports;if(!o||o===window||o.proxygone===null){pt(t);continue}}var ut=(e,t=!1)=>o=>{let r=[],n=oe?.locale();for(let i in e){let a=Number(i),s=e[a].publicModule.exports;if(!e[a].isInitialized)try{__r(a),n&&n!==oe.locale()&&oe.locale(n)}catch{}if(!s){pt(a);continue}try{if(s.default&&s.__esModule&&o(s.default)){if(t)return s.default;r.push(s.default)}if(o(s)){if(t)return s;r.push(s)}}catch(l){console.error(`Failed to getModule... ${l.stack||l.toString()}`)}}if(!t)return r},ge=window.modules,U=ut(ge,!0),ye=ut(ge),ft=e=>t=>e.every(o=>t[o]!==void 0),gt=(e,t)=>t?o=>o.name===e:o=>o?.default?.name===e,d=(...e)=>U(ft(e)),Ct=(...e)=>ye(ft(e)),j=(e,t=!0)=>U(gt(e,t)),Lt=(e,t=!0)=>ye(gt(e,t)),re=e=>U(t=>t.getName?.()===e);var Bt=d("getVoiceChannelId"),ne=d("Messages"),ve=d("openURL"),be=U(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),P=d("createThemedStyleSheet"),we=d("setString","getString","hasString"),z=d("registerAsset"),xe=d("acceptInviteAndTransitionToInviteChannel"),ie=d("getBuiltInCommands"),Ot=d("pushLazy"),kt=d("createStackNavigator"),E=d("NavigationContainer"),Ut=d("connectStores"),se=d("_currentDispatchActionType"),jt=window.React;var _e={};b(_e,{after:()=>w,before:()=>$t,instead:()=>Gt,unpatchAll:()=>ht});var Te=["a","b","i"],R=new Map;function yt(e,t,o,r,n){let i=R.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let l of i.b.values()){let v=l.call(r,o);Array.isArray(v)&&(o=v)}let a=(...l)=>n?Reflect.construct(i.o,l,r):i.o.apply(r,l);for(let l of i.i.values()){let v=a;a=(...N)=>l.call(r,N,v)}let s=a(...o);for(let l of i.a.values())s=l.call(r,o,s)??s;return s}function Re(e,t,o,r){let n=R.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),Te.every(a=>i[a].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&R.delete(e),!0):!1}function ht(){for(let[e,t]of R.entries())for(let o in t)for(let r of Te)for(let n of t[o]?.[r].keys()??[])Re(e,o,n,r)}var ae=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);R.has(o)||R.set(o,{});let i=R.get(o);if(!i[t]){let l=o[t];i[t]={o:l,b:new Map,i:new Map,a:new Map};let v=(S,V,W)=>{let Nt=yt(t,o,V,S,W);return n&&s(),Nt},N=new Proxy(l,{apply:(S,V,W)=>v(V,W,!1),construct:(S,V)=>v(l,V,!0),get:(S,V,W)=>V=="toString"?l.toString.bind(l):Reflect.get(S,V,W)});Reflect.defineProperty(o,t,{value:N,configurable:!0,writable:!0})||(o[t]=N)}let a=Symbol(),s=()=>Re(o,t,a,e);return i[t][e].set(a,r),s};var $t=ae("b"),Gt=ae("i"),w=ae("a");var vt={..._e};var Ee={};b(Ee,{all:()=>D,find:()=>Ht,getAssetByID:()=>Wt,getAssetByName:()=>Kt,getAssetIDByName:()=>c,patchAssets:()=>Pe});var D={};function Pe(){let e=w("registerAsset",z,(t,o)=>{let r=t[0];D[r.name]={...r,id:o}});for(let t=1;;t++){let o=z.getAssetByID(t);if(!o)break;D[o.name]||(D[o.name]={...o,id:t})}return e}var Ht=e=>Object.values(D).find(e),Kt=e=>D[e],Wt=e=>z.getAssetByID(e),c=e=>D[e]?.id;var De={};b(De,{showToast:()=>u});function u(e,t){return be.open({content:e,source:t})}var zt=d("setLogFn").default,Jt=new zt("Vendetta"),h=Jt;var x;function Ie(e){if(x!==void 0&&x.readyState!==WebSocket.CLOSED&&x.close(),e===""){u("Invalid debugger URL!",c("Small"));return}x=new WebSocket(`ws://${e}`),x.addEventListener("open",()=>u("Connected to debugger.",c("Check"))),x.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),x.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),u("An error occurred with the debugger connection!",c("Small"))})}function Fe(){let e=w("nativeLoggingHook",globalThis,t=>{x?.readyState===WebSocket.OPEN&&x.send(JSON.stringify({message:t[0],level:t[1]})),h.log(t[0])});return()=>{x&&x.close(),e()}}var ce="97176f9";function Me(){let e=m.NativeModules.InfoDictionaryManager,t=m.NativeModules.DCDDeviceManager,o=window.HermesInternal.getRuntimeProperties(),r=o["OSS Release Version"],n="for RN ",i=m.Platform.constants,a=i.reactNativeVersion;return{vendetta:{version:ce,loader:window.__vendetta_loader?.name??"Unknown"},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:r.startsWith(n)?r.substring(n.length):`${a.major}.${a.minor}.${a.patch}`},hermes:{version:r,buildType:o.Build,bytecodeVersion:o["Bytecode Version"]},...m.Platform.select({android:{os:{name:"Android",version:i.Release,sdk:i.Version}},ios:{os:{name:i.systemName,version:i.osVersion}}}),...m.Platform.select({android:{device:{manufacturer:i.Manufacturer,brand:i.Brand,model:i.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var Ve={};b(Ve,{patchCommands:()=>Ne,registerCommand:()=>qt});var J=[];function Ne(){let e=w("getBuiltInCommands",ie,(t,o)=>o.concat(J));return()=>{J=[],e()}}function qt(e){let t=ie.getBuiltInCommands(1,!0,!1);t.sort(function(r,n){return parseInt(n.id)-parseInt(r.id)});let o=t[t.length-1];return e.id=(parseInt(o.id,10)-1).toString(),J.push(e),()=>J=J.filter(({id:r})=>r!==e.id)}var He={};b(He,{evalPlugin:()=>Rt,fetchPlugin:()=>ke,getSettings:()=>Ge,initPlugins:()=>$e,installPlugin:()=>Ue,plugins:()=>f,removePlugin:()=>je,startPlugin:()=>Q,stopPlugin:()=>X});var Oe={};b(Oe,{awaitSyncWrapper:()=>Be,createFileBackend:()=>Le,createMMKVBackend:()=>$,createProxy:()=>Tt,createStorage:()=>L,useProxy:()=>_,wrapSync:()=>G});var Qt=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL"});function Ce(){return{listeners:Object.values(Qt).reduce((e,t)=>(e[t]=new Set,e),{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){let o=(r,n)=>{this.off(r,o),t(r,n)};this.on(e,o)},emit(e,t){for(let o of this.listeners[e])o(e,t)}}}var bt=m.NativeModules.MMKVManager,q=m.NativeModules.DCDFileManager,wt=m.Platform.select({default:e=>e,ios:e=>`Documents/${e}`}),$=e=>({get:async function(){return JSON.parse(await bt.getItem(e)??"{}")},set:t=>bt.setItem(e,JSON.stringify(t))}),Le=e=>{let t;return{get:async function(){let o=`${q.getConstants().DocumentsDirPath}/${e}`;return!t&&!await q.fileExists(o)?(t=!0,q.writeFile("documents",wt(e),"{}","utf8")):JSON.parse(await q.readFile(o,"utf8"))},set:o=>void q.writeFile("documents",wt(e),JSON.stringify(o),"utf8")}};var Qo=m.NativeModules.MMKVManager,xt=Symbol("emitter accessor"),St=Symbol("wrapSync promise accessor");function Tt(e={}){let t=Ce();function o(r,n){return new Proxy(r,{get(i,a){if(a===xt)return t;let s=[...n,a],l=i[a];return l!=null?(t.emit("GET",{path:s,value:l}),typeof l=="object"?o(l,s):l):l},set(i,a,s){return i[a]=s,t.emit("SET",{path:[...n,a],value:s}),!0},deleteProperty(i,a){let s=delete i[a];return s&&t.emit("DEL",{path:[...n,a]}),s}})}return{proxy:o(e,[]),emitter:t}}function _(e){let t=e[xt],[,o]=React.useReducer(r=>~r,0);return React.useEffect(()=>{let r=()=>o();return t.on("SET",r),t.on("DEL",r),()=>{t.off("SET",r),t.off("DEL",r)}},[]),e}async function L(e){let t=await e.get(),{proxy:o,emitter:r}=Tt(t),n=()=>e.set(o);return r.on("SET",n),r.on("DEL",n),o}function G(e){let t,o=[],r=n=>t?n():o.push(n);return e.then(n=>{t=n,o.forEach(i=>i())}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(n=>[n,(i,...a)=>Reflect[n](t??i,...a)])),get(n,i,a){return i===St?r:Reflect.get(t??n,i,a)}})}var Be=e=>new Promise(t=>e[St](t));async function H(e,t){let o=await fetch(e,t);if(!o.ok)throw new Error("Request returned non-ok");return o}var f=G(L($("VENDETTA_PLUGINS"))),C={};async function ke(e){e.endsWith("/")||(e+="/");let t=f[e],o;try{o=await(await H(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;if(t?.manifest.hash!==o.hash){try{r=await(await H(e+(o.main||"index.js"),{cache:"no-store"})).text()}catch{throw new Error(`Failed to fetch JS for ${e}`)}if(r.length===0)throw new Error(`Failed to fetch JS for ${e}`)}f[e]={id:e,manifest:o,enabled:t?.enabled??!1,update:t?.update??!0,js:r??t.js}}async function Ue(e,t=!0){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in f)throw new Error("Plugin already installed");await ke(e),t&&await Q(e)}async function Rt(e){let t={...window.vendetta,plugin:{manifest:e.manifest,storage:await L($(e.id))}},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}async function Q(e){e.endsWith("/")||(e+="/");let t=f[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=await Rt(t);C[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){h.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{C[t.id]?.onUnload?.()}catch(r){h.error(`Plugin ${t.id} errored whilst unloading`,r)}delete C[e],t.enabled=!1}}function X(e,t=!0){e.endsWith("/")||(e+="/");let o=f[e],r=C[e];if(!o)throw new Error("Attempted to stop non-existent plugin");if(!r)throw new Error("Attempted to stop a non-started plugin");try{C[o.id]?.onUnload?.()}catch(n){h.error(`Plugin ${o.id} errored whilst unloading`,n)}delete C[e],t&&(o.enabled=!1)}function je(e){e.endsWith("/")||(e+="/"),f[e].enabled&&X(e),delete f[e]}async function $e(){await Be(f);let e=Object.keys(f);return await Promise.allSettled(e.filter(t=>f[t].enabled&&f[t].update).map(t=>ke(t))),await Promise.allSettled(e.filter(t=>f[t].enabled).map(t=>Q(t))),Xt}var Xt=()=>Object.keys(C).forEach(e=>X(e,!1)),Ge=e=>C[e]?.settings;function Y(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function a(s,l,{walkable:v=[],ignore:N=[]}={}){if(i+=1,!(i>n)){if(typeof l=="string"){if(s.hasOwnProperty(l))return s[l]}else if(l(s))return s;if(s){if(Array.isArray(s))for(let O of s){let S=a(O,l,{walkable:v,ignore:N});if(S)return S}else if(typeof s=="object"){for(let O of Object.keys(s))if(!(v!=null&&v.includes(O))&&!N.includes(O))try{let S=a(s[O],l,{walkable:v,ignore:N});if(S)return S}catch{}}}}}return a(e,t,{walkable:o,ignore:r})}var le=(e,t)=>Y(e,t,{walkable:["props","children","child","sibling"]});var We={};b(We,{Forms:()=>p,General:()=>Z,Search:()=>Ke,Summary:()=>K});function K({label:e,icon:t,noPadding:o=!1,children:r}){let[n,i]=React.useState(!0);return React.createElement(React.Fragment,null,React.createElement(p.FormRow,{label:e,leading:t&&React.createElement(p.FormRow.Icon,{source:c(t)}),trailing:React.createElement(p.FormRow.Arrow,{style:{transform:[{rotate:`${n?180:90}deg`}]},source:c("down_arrow")}),onPress:()=>i(!n)}),!n&&React.createElement(React.Fragment,null,React.createElement(p.FormDivider,null),React.createElement(m.View,{style:!o&&{paddingHorizontal:15}},r)))}var p=d("Form","FormSection"),Z=d("Button","Text","View"),Ke=j("StaticSearchBarContainer");var g=G(L($("VENDETTA_SETTINGS"))),T=G(L(Le("vendetta_loader.json")));var{FormRow:I,FormSection:Yt,FormDivider:_t}=p;function ze(){let e=E.useNavigation();return _(g),React.createElement(Yt,{key:"Vendetta",title:"Vendetta"},React.createElement(I,{label:"General",leading:React.createElement(I.Icon,{source:c("settings")}),trailing:I.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(_t,null),React.createElement(I,{label:"Plugins",leading:React.createElement(I.Icon,{source:c("debug")}),trailing:I.Arrow,onPress:()=>e.push("VendettaPlugins")}),g.developerSettings&&React.createElement(React.Fragment,null,React.createElement(_t,null),React.createElement(I,{label:"Developer",leading:React.createElement(I.Icon,{source:c("ic_progress_wrench_24px")}),trailing:I.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var Qe={};b(Qe,{DISCORD_SERVER:()=>Je,GITHUB:()=>qe});var Je="n9QQ4XhhJP",qe="https://github.com/vendetta-mod";function F(e){try{we.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}var{FormRow:Pt,FormText:Zt}=p;function me({label:e,version:t,icon:o}){return React.createElement(Pt,{label:e,leading:React.createElement(Pt.Icon,{source:c(o)}),trailing:React.createElement(Zt,null,t),onPress:()=>{F(`${e} - ${t}`),u("Copied version to clipboard.",c("toast_copy_link"))}})}var{FormRow:M,FormSwitchRow:eo,FormSection:Xe,FormDivider:ee}=p,y=Me();function Ye(){_(g);let e=[{label:"Vendetta",version:y.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${y.discord.version} (${y.discord.build})`,icon:"Discord"},{label:"React",version:y.react.version,icon:"ic_category_16px"},{label:"React Native",version:y.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:y.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Loader",version:y.vendetta.loader,icon:"ic_download_24px"},{label:"Operating System",version:`${y.os.name} ${y.os.version}`,icon:"ic_cog_24px"},...y.os.sdk?[{label:"SDK",version:y.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:y.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:y.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:y.device.model,icon:"ic_phonelink_24px"},{label:m.Platform.select({android:"Codename",ios:"Machine ID"}),version:y.device.codename,icon:"ic_compose_24px"}];return React.createElement(m.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(Xe,{title:"Links",titleStyleType:"no_border"},React.createElement(M,{label:"Discord Server",leading:React.createElement(M.Icon,{source:c("Discord")}),trailing:M.Arrow,onPress:()=>xe.acceptInviteAndTransitionToInviteChannel({inviteKey:Je})}),React.createElement(ee,null),React.createElement(M,{label:"GitHub",leading:React.createElement(M.Icon,{source:c("img_account_sync_github_white")}),trailing:M.Arrow,onPress:()=>ve.openURL(qe)})),React.createElement(Xe,{title:"Actions"},React.createElement(M,{label:"Reload Discord",leading:React.createElement(M.Icon,{source:c("ic_message_retry")}),onPress:()=>m.NativeModules.BundleUpdaterManager.reload()}),React.createElement(ee,null),React.createElement(eo,{label:"Developer Settings",leading:React.createElement(M.Icon,{source:c("ic_progress_wrench_24px")}),value:g.developerSettings,onValueChange:o=>{g.developerSettings=o}})),React.createElement(Xe,{title:"Info"},React.createElement(K,{label:"Versions",icon:"ic_information_filled_24px"},e.map((o,r)=>React.createElement(React.Fragment,null,React.createElement(me,{label:o.label,version:o.version,icon:o.icon}),r!==e.length-1&&React.createElement(ee,null)))),React.createElement(ee,null),React.createElement(K,{label:"Platform",icon:"ic_mobile_device"},t.map((o,r)=>React.createElement(React.Fragment,null,React.createElement(me,{label:o.label,version:o.version,icon:o.icon}),r!==t.length-1&&React.createElement(ee,null))))))}var to=d("SemanticColorsByThemeTable"),Ze=to?.SemanticColor??k.ThemeColorMap,{FormRow:et,FormSwitch:oo}=p,{TouchableOpacity:de,Image:pe}=Z,B=P.createThemedStyleSheet({card:{backgroundColor:Ze?.BACKGROUND_SECONDARY,borderRadius:5,margin:10,marginTop:0},header:{backgroundColor:Ze?.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{justifyContent:"flex-end",flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:Ze?.INTERACTIVE_NORMAL}});function tt({plugin:e}){let t=Ge(e.id),o=E.useNavigation(),[r,n]=React.useState(!1);return r?null:React.createElement(m.View,{style:B.card},React.createElement(et,{style:B.header,label:`${e.manifest.name} by ${e.manifest.authors.map(i=>i.name).join(", ")}`,leading:React.createElement(et.Icon,{source:c(e.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(oo,{value:e.enabled,onValueChange:i=>{i?Q(e.id):X(e.id)}})}),React.createElement(et,{label:e.manifest.description,trailing:React.createElement(m.View,{style:B.actions},React.createElement(de,{onPress:()=>{je(e.id),n(!0)}},React.createElement(pe,{style:B.icon,source:c("ic_message_delete")})),React.createElement(de,{onPress:()=>{F(e.id),u("Copied plugin URL to clipboard.",c("toast_copy_link"))}},React.createElement(pe,{style:B.icon,source:c("copy")})),React.createElement(de,{onPress:()=>{e.update=!e.update,u(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,c("toast_image_saved"))}},React.createElement(pe,{style:B.icon,source:c(e.update?"Check":"Small")})),t&&React.createElement(de,{onPress:()=>o.push("VendettaCustomPage",{title:e.manifest.name,render:t})},React.createElement(pe,{style:B.icon,source:c("settings")})))}))}var{FormInput:ro,FormRow:Et}=p;function ot(){_(f);let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(ro,{value:e,onChange:o=>t(o),placeholder:"https://example.com/",title:"PLUGIN URL"}),React.createElement(Et,{label:"Install plugin",leading:React.createElement(Et.Icon,{source:c("ic_add_18px")}),onPress:()=>{Ue(e).then(()=>{t("")}).catch(o=>{u(o.message,c("Small"))})}}),React.createElement(m.FlatList,{style:{marginTop:10},data:Object.values(f),renderItem:({item:o})=>React.createElement(tt,{plugin:o}),keyExtractor:o=>o.id}))}var{FormSection:rt,FormRow:A,FormSwitchRow:Dt,FormInput:It,FormDivider:ue}=p,{Text:sn}=Z,an=P.createThemedStyleSheet({code:{fontFamily:k.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,fontSize:12}});function nt(){let e=E.useNavigation();return _(g),_(T),React.createElement(m.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(rt,{title:"Debug",titleStyleType:"no_border"},React.createElement(It,{value:g.debuggerUrl,onChange:t=>g.debuggerUrl=t,placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(ue,null),React.createElement(A,{label:"Connect to debug websocket",leading:React.createElement(A.Icon,{source:c("copy")}),onPress:()=>Ie(g.debuggerUrl)}),window.__vendetta_rdc&&React.createElement(React.Fragment,null,React.createElement(ue,null),React.createElement(A,{label:"Connect to React DevTools",leading:React.createElement(A.Icon,{source:c("ic_badge_staff")}),onPress:()=>{try{window.__vendetta_rdc?.connectToDevTools({host:g.debuggerUrl.split(":")?.[0],resolveRNStyle:m.StyleSheet.flatten})}catch(t){h.error("Failed to connect to React DevTools!",t),u("Failed to connect to React DevTools!",c("Small"))}}}))),window.__vendetta_loader?.features.loaderConfig&&React.createElement(rt,{title:"Loader config"},React.createElement(Dt,{label:"Load from custom url",subLabel:"Load Vendetta from a custom endpoint.",leading:React.createElement(A.Icon,{source:c("copy")}),value:T.customLoadUrl.enabled,onValueChange:t=>{T.customLoadUrl.enabled=t}}),React.createElement(ue,null),T.customLoadUrl.enabled&&React.createElement(React.Fragment,null,React.createElement(It,{value:T.customLoadUrl.url,onChange:t=>T.customLoadUrl.url=t,placeholder:"http://localhost:4040/vendetta.js",title:"VENDETTA URL"}),React.createElement(ue,null)),window.__vendetta_loader.features.devtools&&React.createElement(Dt,{label:"Load React DevTools",subLabel:`Version: ${window.__vendetta_loader.features.devtools.version}`,leading:React.createElement(A.Icon,{source:c("ic_badge_staff")}),value:T.loadReactDevTools,onValueChange:t=>{T.loadReactDevTools=t}})),React.createElement(rt,{title:"Other"},React.createElement(A,{label:"Asset Browser",leading:React.createElement(A.Icon,{source:c("ic_media_upload")}),trailing:A.Arrow,onPress:()=>e.push("VendettaAssetBrowser")})))}var{FormRow:no}=p,io=P.createThemedStyleSheet({asset:{width:32,height:32}});function it({asset:e}){return React.createElement(no,{label:`${e.name} - ${e.id}`,trailing:React.createElement(m.Image,{source:e.id,style:io.asset}),onPress:()=>{F(e.name),u("Copied asset name to clipboard.",c("toast_copy_link"))}})}var{FormDivider:so}=p,ao=P.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function st(){let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(Ke,{style:ao.search,onChangeText:o=>t(o),placeholder:"Search"}),React.createElement(m.FlatList,{data:Object.values(D).filter(o=>o.name.includes(e)||o.id.toString()===e),renderItem:({item:o})=>React.createElement(React.Fragment,null,React.createElement(it,{asset:o}),React.createElement(so,null)),keyExtractor:o=>o.name}))}var co=j("getScreens",!1),lo=j("UserSettingsOverviewWrapper",!1);function at(){let e=new Array;return e.push(w("default",co,(t,o)=>({...o,VendettaSettings:{title:"Vendetta",render:Ye},VendettaPlugins:{title:"Plugins",render:ot},VendettaDeveloper:{title:"Developer",render:nt},VendettaAssetBrowser:{title:"Asset Browser",render:st},VendettaCustomPage:{title:"Vendetta Page",render:({render:r,...n})=>{let i=E.useNavigation();return React.useEffect(()=>n&&i.setOptions(n)),React.createElement(r,null)}}}))),w("default",lo,(t,o)=>{let r=le(o.props.children,n=>n.type&&n.type.name==="UserSettingsOverview");e.push(w("renderSupportAndAcknowledgements",r.type.prototype,(n,{props:{children:i}})=>{let a=i.findIndex(s=>s?.type?.name==="UploadLogsButton");a!==-1&&i.splice(a,1)})),e.push(w("render",r.type.prototype,(n,{props:{children:i}})=>{let a=[ne.Messages.BILLING_SETTINGS,ne.Messages.PREMIUM_SETTINGS],s=i.findIndex(l=>a.includes(l.props.title));i.splice(s===-1?4:s,0,React.createElement(ze,null))}))},!0),()=>e.forEach(t=>t())}var mo=d("updateTheme","overrideTheme"),Ft=d("setAMOLEDThemeEnabled"),Mt=re("ThemeStore"),po=re("UnsyncedUserSettingsStore");function At(){let e=Mt.theme||"dark";mo.overrideTheme(e),Ft&&po.useAMOLEDTheme===2&&Ft.setAMOLEDThemeEnabled(!0),se.unsubscribe("I18N_LOAD_START",At)}function ct(){try{Mt&&se.subscribe("I18N_LOAD_START",At)}catch(e){h.error("Failed to fix theme...",e)}}var mt={};b(mt,{copyText:()=>F,findInReactTree:()=>le,findInTree:()=>Y,safeFetch:()=>H,unfreeze:()=>lt});function lt(e){return Object.isFrozen(e)?Object.assign({},e):e}function fe(e,...t){let o={...e};return t.forEach(r=>delete o[r]),o}async function dt(e){return{patcher:fe(vt,"unpatchAll"),metro:{...he,common:{...Se}},constants:Qe,utils:mt,debug:fe(Ae,"versionHash","patchLogHook"),ui:{components:We,toasts:De,assets:Ee},plugins:fe(He,"initPlugins"),commands:fe(Ve,"patchCommands"),storage:Oe,settings:g,loader:{identity:window.__vendetta_loader,config:T},logger:h,version:ce,unload:()=>{e.filter(t=>typeof t=="function").forEach(t=>t()),delete window.vendetta}}}console.log("Hello from Vendetta!");async function uo(){try{let e=await Promise.all([Fe(),Pe(),Ne(),ct(),at()]);window.vendetta=await dt(e),e.push(await $e()),h.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}}uo();})();
//# sourceURL=Vendetta