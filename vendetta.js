"use strict";(()=>{var Ct=Object.defineProperty;var b=(e,t)=>{for(var o in t)Ct(e,o,{get:t[o],enumerable:!0})};var Ve={};b(Ve,{connectToDebugger:()=>Ae,getDebugInfo:()=>Ne,patchLogHook:()=>Me,socket:()=>x,versionHash:()=>ce});var Te={};b(Te,{Flux:()=>$t,FluxDispatcher:()=>se,NavigationNative:()=>D,React:()=>Gt,ReactNative:()=>l,assets:()=>J,channels:()=>kt,clipboard:()=>xe,commands:()=>ie,constants:()=>k,i18n:()=>ne,invites:()=>Se,moment:()=>U,navigation:()=>Ut,navigationStack:()=>jt,stylesheet:()=>P,toasts:()=>we,url:()=>be});var ve={};b(ve,{find:()=>j,findAll:()=>he,findByDisplayName:()=>$,findByDisplayNameAll:()=>Ot,findByProps:()=>d,findByPropsAll:()=>Bt,findByStoreName:()=>re,modules:()=>ye});var oe=e=>Object.values(window.modules).find(t=>t?.publicModule.exports?.[e])?.publicModule?.exports;window.React=oe("createElement");var l=oe("Text"),k=oe("AbortCodes"),U=oe("isMoment");function ft(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t]?.publicModule?.exports;if(!o||o===window||o.proxygone===null){ft(t);continue}}var ut=(e,t=!1)=>o=>{let r=[],n=U?.locale();for(let i in e){let s=Number(i),a=e[s]?.publicModule?.exports;if(!e[s].isInitialized)try{__r(s),n&&n!==U.locale()&&U.locale(n)}catch{}if(!a){ft(s);continue}try{if(a.default&&a.__esModule&&o(a.default)){if(t)return a.default;r.push(a.default)}if(o(a)){if(t)return a;r.push(a)}}catch(m){console.error(`Failed to filter modules... ${m.stack||m.toString()}`)}}if(!t)return r},ye=window.modules,j=ut(ye,!0),he=ut(ye),gt=e=>t=>e.every(o=>t[o]!==void 0),yt=(e,t)=>t?o=>o?.name===e:o=>o?.default?.name===e,Lt=e=>t=>t.getName&&t.getName.length===0&&t.getName()===e,d=(...e)=>j(gt(e)),Bt=(...e)=>he(gt(e)),$=(e,t=!0)=>j(yt(e,t)),Ot=(e,t=!0)=>he(yt(e,t)),re=e=>j(Lt(e));var kt=d("getVoiceChannelId"),ne=d("Messages"),be=d("openURL"),we=j(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),P=d("createThemedStyleSheet"),xe=d("setString","getString","hasString"),J=d("registerAsset"),Se=d("acceptInviteAndTransitionToInviteChannel"),ie=d("getBuiltInCommands"),Ut=d("pushLazy"),jt=d("createStackNavigator"),D=d("NavigationContainer"),$t=d("connectStores"),se=d("_currentDispatchActionType"),Gt=window.React;var Pe={};b(Pe,{after:()=>w,before:()=>Ht,instead:()=>Kt,unpatchAll:()=>vt});var Re=["a","b","i"],R=new Map;function ht(e,t,o,r,n){let i=R.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let m of i.b.values()){let v=m.call(r,o);Array.isArray(v)&&(o=v)}let s=(...m)=>n?Reflect.construct(i.o,m,r):i.o.apply(r,m);for(let m of i.i.values()){let v=s;s=(...N)=>m.call(r,N,v)}let a=s(...o);for(let m of i.a.values())a=m.call(r,o,a)??a;return a}function _e(e,t,o,r){let n=R.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),Re.every(s=>i[s].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&R.delete(e),!0):!1}function vt(){for(let[e,t]of R.entries())for(let o in t)for(let r of Re)for(let n of t[o]?.[r].keys()??[])_e(e,o,n,r)}var ae=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);R.has(o)||R.set(o,{});let i=R.get(o);if(!i[t]){let m=o[t];i[t]={o:m,b:new Map,i:new Map,a:new Map};let v=(S,V,z)=>{let Vt=ht(t,o,V,S,z);return n&&a(),Vt},N=new Proxy(m,{apply:(S,V,z)=>v(V,z,!1),construct:(S,V)=>v(m,V,!0),get:(S,V,z)=>V=="toString"?m.toString.bind(m):Reflect.get(S,V,z)});Reflect.defineProperty(o,t,{value:N,configurable:!0,writable:!0})||(o[t]=N)}let s=Symbol(),a=()=>_e(o,t,s,e);return i[t][e].set(s,r),a};var Ht=ae("b"),Kt=ae("i"),w=ae("a");var bt={...Pe};var Ee={};b(Ee,{all:()=>E,find:()=>Wt,getAssetByID:()=>Jt,getAssetByName:()=>zt,getAssetIDByName:()=>c,patchAssets:()=>De});var E={};function De(){let e=w("registerAsset",J,(t,o)=>{let r=t[0];E[r.name]={...r,id:o}});for(let t=1;;t++){let o=J.getAssetByID(t);if(!o)break;E[o.name]||(E[o.name]={...o,id:t})}return e}var Wt=e=>Object.values(E).find(e),zt=e=>E[e],Jt=e=>J.getAssetByID(e),c=e=>E[e]?.id;var Ie={};b(Ie,{showToast:()=>f});function f(e,t){return we.open({content:e,source:t})}var Fe=d("setLogFn").default,qt=new Fe("Vendetta"),h=qt;var x;function Ae(e){if(x!==void 0&&x.readyState!==WebSocket.CLOSED&&x.close(),e===""){f("Invalid debugger URL!",c("Small"));return}x=new WebSocket(`ws://${e}`),x.addEventListener("open",()=>f("Connected to debugger.",c("Check"))),x.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),x.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),f("An error occurred with the debugger connection!",c("Small"))})}function Me(){let e=w("nativeLoggingHook",globalThis,t=>{x?.readyState===WebSocket.OPEN&&x.send(JSON.stringify({message:t[0],level:t[1]})),h.log(t[0])});return()=>{x&&x.close(),e()}}var ce="7755f97";function Ne(){let e=l.NativeModules.InfoDictionaryManager,t=l.NativeModules.DCDDeviceManager,o=window.HermesInternal.getRuntimeProperties(),r=o["OSS Release Version"],n="for RN ",i=l.Platform.constants,s=i.reactNativeVersion;return{vendetta:{version:ce,loader:window.__vendetta_loader?.name??"Unknown"},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:r.startsWith(n)?r.substring(n.length):`${s.major}.${s.minor}.${s.patch}`},hermes:{version:r,buildType:o.Build,bytecodeVersion:o["Bytecode Version"]},...l.Platform.select({android:{os:{name:"Android",version:i.Release,sdk:i.Version}},ios:{os:{name:i.systemName,version:i.osVersion}}}),...l.Platform.select({android:{device:{manufacturer:i.Manufacturer,brand:i.Brand,model:i.Model,codename:t.device}},ios:{device:{manufacturer:t.deviceManufacturer,brand:t.deviceBrand,model:t.deviceModel,codename:t.device}}})}}var Le={};b(Le,{patchCommands:()=>Ce,registerCommand:()=>Qt});var q=[];function Ce(){let e=w("getBuiltInCommands",ie,(t,o)=>o.concat(q));return()=>{q=[],e()}}function Qt(e){let t=ie.getBuiltInCommands(1,!0,!1);t.sort(function(r,n){return parseInt(n.id)-parseInt(r.id)});let o=t[t.length-1];return e.id=(parseInt(o.id,10)-1).toString(),q.push(e),()=>q=q.filter(({id:r})=>r!==e.id)}var Ke={};b(Ke,{evalPlugin:()=>_t,fetchPlugin:()=>le,getSettings:()=>He,initPlugins:()=>Ge,installPlugin:()=>je,plugins:()=>u,removePlugin:()=>$e,startPlugin:()=>X,stopPlugin:()=>Y});var Ue={};b(Ue,{awaitSyncWrapper:()=>ke,createFileBackend:()=>Oe,createMMKVBackend:()=>G,createProxy:()=>Rt,createStorage:()=>C,useProxy:()=>_,wrapSync:()=>H});var Xt=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL"});function Be(){return{listeners:Object.values(Xt).reduce((e,t)=>(e[t]=new Set,e),{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){let o=(r,n)=>{this.off(r,o),t(r,n)};this.on(e,o)},emit(e,t){for(let o of this.listeners[e])o(e,t)}}}var wt=l.NativeModules.MMKVManager,Q=l.NativeModules.DCDFileManager,xt=l.Platform.select({default:e=>e,ios:e=>`Documents/${e}`}),G=e=>({get:async function(){return JSON.parse(await wt.getItem(e)??"{}")},set:t=>wt.setItem(e,JSON.stringify(t))}),Oe=e=>{let t;return{get:async function(){let o=`${Q.getConstants().DocumentsDirPath}/${e}`;return!t&&!await Q.fileExists(o)?(t=!0,Q.writeFile("documents",xt(e),"{}","utf8")):JSON.parse(await Q.readFile(o,"utf8"))},set:o=>void Q.writeFile("documents",xt(e),JSON.stringify(o),"utf8")}};var Zo=l.NativeModules.MMKVManager,St=Symbol("emitter accessor"),Tt=Symbol("wrapSync promise accessor");function Rt(e={}){let t=Be();function o(r,n){return new Proxy(r,{get(i,s){if(s===St)return t;let a=[...n,s],m=i[s];return m!=null?(t.emit("GET",{path:a,value:m}),typeof m=="object"?o(m,a):m):m},set(i,s,a){return i[s]=a,t.emit("SET",{path:[...n,s],value:a}),!0},deleteProperty(i,s){let a=delete i[s];return a&&t.emit("DEL",{path:[...n,s]}),a}})}return{proxy:o(e,[]),emitter:t}}function _(e){let t=e[St],[,o]=React.useReducer(r=>~r,0);return React.useEffect(()=>{let r=()=>o();return t.on("SET",r),t.on("DEL",r),()=>{t.off("SET",r),t.off("DEL",r)}},[]),e}async function C(e){let t=await e.get(),{proxy:o,emitter:r}=Rt(t),n=()=>e.set(o);return r.on("SET",n),r.on("DEL",n),o}function H(e){let t,o=[],r=n=>t?n():o.push(n);return e.then(n=>{t=n,o.forEach(i=>i())}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(n=>[n,(i,...s)=>Reflect[n](t??i,...s)])),get(n,i,s){return i===Tt?r:Reflect.get(t??n,i,s)}})}var ke=e=>new Promise(t=>e[Tt](t));async function K(e,t){let o=await fetch(e,t);if(!o.ok)throw new Error("Request returned non-ok");return o}var u=H(C(G("VENDETTA_PLUGINS"))),L={};async function le(e){e.endsWith("/")||(e+="/");let t=u[e],o;try{o=await(await K(e+"manifest.json",{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;if(t?.manifest.hash!==o.hash)try{r=await(await K(e+(o.main||"index.js"),{cache:"no-store"})).text()}catch{}if(!r&&!t)throw new Error(`Failed to fetch JS for ${e}`);u[e]={id:e,manifest:o,enabled:t?.enabled??!1,update:t?.update??!0,js:r??t.js}}async function je(e,t=!0){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in u)throw new Error("Plugin already installed");await le(e),t&&await X(e)}async function _t(e){let t={...window.vendetta,plugin:{id:e.id,manifest:e.manifest,storage:await C(G(e.id))},logger:new Fe(`Vendetta \xBB ${e.manifest.name}`)},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}async function X(e){e.endsWith("/")||(e+="/");let t=u[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=await _t(t);L[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){h.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{L[t.id]?.onUnload?.()}catch(r){h.error(`Plugin ${t.id} errored whilst unloading`,r)}delete L[e],t.enabled=!1}}function Y(e,t=!0){e.endsWith("/")||(e+="/");let o=u[e],r=L[e];if(!o)throw new Error("Attempted to stop non-existent plugin");if(!r)throw new Error("Attempted to stop a non-started plugin");try{r.onUnload?.()}catch(n){h.error(`Plugin ${o.id} errored whilst unloading`,n)}delete L[e],t&&(o.enabled=!1)}function $e(e){e.endsWith("/")||(e+="/"),u[e].enabled&&Y(e),delete u[e]}async function Ge(){await ke(u);let e=Object.keys(u);return await Promise.allSettled(e.filter(t=>u[t].enabled&&u[t].update).map(t=>le(t))),await Promise.allSettled(e.filter(t=>u[t].enabled).map(t=>X(t))),e.filter(t=>!u[t].enabled&&u[t].update).forEach(t=>le(t)),Yt}var Yt=()=>Object.keys(L).forEach(e=>Y(e,!1)),He=e=>L[e]?.settings;function Z(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function s(a,m,{walkable:v=[],ignore:N=[]}={}){if(i+=1,!(i>n)){if(typeof m=="string"){if(a.hasOwnProperty(m))return a[m]}else if(m(a))return a;if(a){if(Array.isArray(a))for(let O of a){let S=s(O,m,{walkable:v,ignore:N});if(S)return S}else if(typeof a=="object"){for(let O of Object.keys(a))if(!(v!=null&&v.includes(O))&&!N.includes(O))try{let S=s(a[O],m,{walkable:v,ignore:N});if(S)return S}catch{}}}}}return s(e,t,{walkable:o,ignore:r})}var me=(e,t)=>Z(e,t,{walkable:["props","children","child","sibling"]});var ze={};b(ze,{Forms:()=>p,General:()=>ee,Search:()=>We,Summary:()=>W});function W({label:e,icon:t,noPadding:o=!1,children:r}){let[n,i]=React.useState(!0);return React.createElement(React.Fragment,null,React.createElement(p.FormRow,{label:e,leading:t&&React.createElement(p.FormRow.Icon,{source:c(t)}),trailing:React.createElement(p.FormRow.Arrow,{style:{transform:[{rotate:`${n?180:90}deg`}]},source:c("down_arrow")}),onPress:()=>i(!n)}),!n&&React.createElement(React.Fragment,null,React.createElement(p.FormDivider,null),React.createElement(l.View,{style:!o&&{paddingHorizontal:15}},r)))}var p=d("Form","FormSection"),ee=d("Button","Text","View"),We=$("StaticSearchBarContainer");var g=H(C(G("VENDETTA_SETTINGS"))),T=H(C(Oe("vendetta_loader.json")));var{FormRow:I,FormSection:Zt,FormDivider:Pt}=p;function Je(){let e=D.useNavigation();return _(g),React.createElement(Zt,{key:"Vendetta",title:"Vendetta"},React.createElement(I,{label:"General",leading:React.createElement(I.Icon,{source:c("settings")}),trailing:I.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(Pt,null),React.createElement(I,{label:"Plugins",leading:React.createElement(I.Icon,{source:c("debug")}),trailing:I.Arrow,onPress:()=>e.push("VendettaPlugins")}),g.developerSettings&&React.createElement(React.Fragment,null,React.createElement(Pt,null),React.createElement(I,{label:"Developer",leading:React.createElement(I.Icon,{source:c("ic_progress_wrench_24px")}),trailing:I.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var Xe={};b(Xe,{DISCORD_SERVER:()=>qe,GITHUB:()=>Qe});var qe="n9QQ4XhhJP",Qe="https://github.com/vendetta-mod";function F(e){try{xe.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}var{FormRow:Dt,FormText:eo}=p;function de({label:e,version:t,icon:o}){return React.createElement(Dt,{label:e,leading:React.createElement(Dt.Icon,{source:c(o)}),trailing:React.createElement(eo,null,t),onPress:()=>{F(`${e} - ${t}`),f("Copied version to clipboard.",c("toast_copy_link"))}})}var{FormRow:A,FormSwitchRow:to,FormSection:Ye,FormDivider:te}=p,y=Ne();function Ze(){_(g);let e=[{label:"Vendetta",version:y.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${y.discord.version} (${y.discord.build})`,icon:"Discord"},{label:"React",version:y.react.version,icon:"ic_category_16px"},{label:"React Native",version:y.react.nativeVersion,icon:"mobile"},{label:"Bytecode",version:y.hermes.bytecodeVersion,icon:"ic_server_security_24px"}],t=[{label:"Loader",version:y.vendetta.loader,icon:"ic_download_24px"},{label:"Operating System",version:`${y.os.name} ${y.os.version}`,icon:"ic_cog_24px"},...y.os.sdk?[{label:"SDK",version:y.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:y.device.manufacturer,icon:"ic_badge_staff"},{label:"Brand",version:y.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:y.device.model,icon:"ic_phonelink_24px"},{label:l.Platform.select({android:"Codename",ios:"Machine ID"}),version:y.device.codename,icon:"ic_compose_24px"}];return React.createElement(l.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(Ye,{title:"Links",titleStyleType:"no_border"},React.createElement(A,{label:"Discord Server",leading:React.createElement(A.Icon,{source:c("Discord")}),trailing:A.Arrow,onPress:()=>Se.acceptInviteAndTransitionToInviteChannel({inviteKey:qe})}),React.createElement(te,null),React.createElement(A,{label:"GitHub",leading:React.createElement(A.Icon,{source:c("img_account_sync_github_white")}),trailing:A.Arrow,onPress:()=>be.openURL(Qe)})),React.createElement(Ye,{title:"Actions"},React.createElement(A,{label:"Reload Discord",leading:React.createElement(A.Icon,{source:c("ic_message_retry")}),onPress:()=>l.NativeModules.BundleUpdaterManager.reload()}),React.createElement(te,null),React.createElement(to,{label:"Developer Settings",leading:React.createElement(A.Icon,{source:c("ic_progress_wrench_24px")}),value:g.developerSettings,onValueChange:o=>{g.developerSettings=o}})),React.createElement(Ye,{title:"Info"},React.createElement(W,{label:"Versions",icon:"ic_information_filled_24px"},e.map((o,r)=>React.createElement(React.Fragment,null,React.createElement(de,{label:o.label,version:o.version,icon:o.icon}),r!==e.length-1&&React.createElement(te,null)))),React.createElement(te,null),React.createElement(W,{label:"Platform",icon:"ic_mobile_device"},t.map((o,r)=>React.createElement(React.Fragment,null,React.createElement(de,{label:o.label,version:o.version,icon:o.icon}),r!==t.length-1&&React.createElement(te,null))))))}var oo=d("SemanticColorsByThemeTable"),et=oo?.SemanticColor??k.ThemeColorMap,ro=d("show","openLazy","close"),{FormRow:tt,FormSwitch:no}=p,{TouchableOpacity:pe,Image:fe}=ee,B=P.createThemedStyleSheet({card:{backgroundColor:et?.BACKGROUND_SECONDARY,borderRadius:5,marginHorizontal:10,marginBottom:10},header:{padding:0,backgroundColor:et?.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:et?.INTERACTIVE_NORMAL}});function ot({plugin:e}){let t=He(e.id),o=D.useNavigation(),[r,n]=React.useState(!1);return r?null:React.createElement(l.View,{style:B.card},React.createElement(tt,{style:B.header,label:`${e.manifest.name} by ${e.manifest.authors.map(i=>i.name).join(", ")}`,leading:React.createElement(tt.Icon,{source:c(e.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement(no,{style:l.Platform.OS==="android"&&{marginVertical:-15},value:e.enabled,onValueChange:i=>{try{i?X(e.id):Y(e.id)}catch(s){f(s.message,c("Small"))}}})}),React.createElement(tt,{label:e.manifest.description,trailing:React.createElement(l.View,{style:B.actions},React.createElement(pe,{onPress:()=>ro.show({title:"Wait!",body:`Are you sure you wish to delete ${e.manifest.name}?`,confirmText:"Delete",cancelText:"Cancel",confirmColor:"red",onConfirm:()=>{try{$e(e.id),n(!0)}catch(i){f(i.message,c("Small"))}}})},React.createElement(fe,{style:B.icon,source:c("ic_message_delete")})),React.createElement(pe,{onPress:()=>{F(e.id),f("Copied plugin URL to clipboard.",c("toast_copy_link"))}},React.createElement(fe,{style:B.icon,source:c("copy")})),React.createElement(pe,{onPress:()=>{e.update=!e.update,f(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,c("toast_image_saved"))}},React.createElement(fe,{style:B.icon,source:c(e.update?"Check":"Small")})),t&&React.createElement(pe,{onPress:()=>o.push("VendettaCustomPage",{title:e.manifest.name,render:t})},React.createElement(fe,{style:B.icon,source:c("settings")})))}))}var{FormInput:io,FormRow:Et}=p;function rt(){_(u);let[e,t]=React.useState("");return React.createElement(l.View,{style:{flex:1}},React.createElement(io,{value:e,onChange:o=>t(o),placeholder:"https://example.com/",title:"PLUGIN URL"}),React.createElement(Et,{label:"Install plugin",leading:React.createElement(Et.Icon,{source:c("ic_add_24px")}),onPress:()=>{je(e).then(()=>{t("")}).catch(o=>{f(o.message,c("Small"))})}}),React.createElement(l.FlatList,{style:{marginTop:10},data:Object.values(u),renderItem:({item:o})=>React.createElement(ot,{plugin:o}),keyExtractor:o=>o.id}))}var{FormSection:nt,FormRow:M,FormSwitchRow:It,FormInput:Ft,FormDivider:ue}=p,{Text:ln}=ee,mn=P.createThemedStyleSheet({code:{fontFamily:k.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,fontSize:12}});function it(){let e=D.useNavigation();return _(g),_(T),React.createElement(l.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},React.createElement(nt,{title:"Debug",titleStyleType:"no_border"},React.createElement(Ft,{value:g.debuggerUrl,onChange:t=>g.debuggerUrl=t,placeholder:"127.0.0.1:9090",title:"DEBUGGER URL"}),React.createElement(ue,null),React.createElement(M,{label:"Connect to debug websocket",leading:React.createElement(M.Icon,{source:c("copy")}),onPress:()=>Ae(g.debuggerUrl)}),window.__vendetta_rdc&&React.createElement(React.Fragment,null,React.createElement(ue,null),React.createElement(M,{label:"Connect to React DevTools",leading:React.createElement(M.Icon,{source:c("ic_badge_staff")}),onPress:()=>{try{window.__vendetta_rdc?.connectToDevTools({host:g.debuggerUrl.split(":")?.[0],resolveRNStyle:l.StyleSheet.flatten})}catch(t){h.error("Failed to connect to React DevTools!",t),f("Failed to connect to React DevTools!",c("Small"))}}}))),window.__vendetta_loader?.features.loaderConfig&&React.createElement(nt,{title:"Loader config"},React.createElement(It,{label:"Load from custom url",subLabel:"Load Vendetta from a custom endpoint.",leading:React.createElement(M.Icon,{source:c("copy")}),value:T.customLoadUrl.enabled,onValueChange:t=>{T.customLoadUrl.enabled=t}}),React.createElement(ue,null),T.customLoadUrl.enabled&&React.createElement(React.Fragment,null,React.createElement(Ft,{value:T.customLoadUrl.url,onChange:t=>T.customLoadUrl.url=t,placeholder:"http://localhost:4040/vendetta.js",title:"VENDETTA URL"}),React.createElement(ue,null)),window.__vendetta_loader.features.devtools&&React.createElement(It,{label:"Load React DevTools",subLabel:`Version: ${window.__vendetta_loader.features.devtools.version}`,leading:React.createElement(M.Icon,{source:c("ic_badge_staff")}),value:T.loadReactDevTools,onValueChange:t=>{T.loadReactDevTools=t}})),React.createElement(nt,{title:"Other"},React.createElement(M,{label:"Asset Browser",leading:React.createElement(M.Icon,{source:c("ic_media_upload")}),trailing:M.Arrow,onPress:()=>e.push("VendettaAssetBrowser")})))}var{FormRow:so}=p,ao=P.createThemedStyleSheet({asset:{width:32,height:32}});function st({asset:e}){return React.createElement(so,{label:`${e.name} - ${e.id}`,trailing:React.createElement(l.Image,{source:e.id,style:ao.asset}),onPress:()=>{F(e.name),f("Copied asset name to clipboard.",c("toast_copy_link"))}})}var{FormDivider:co}=p,lo=P.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function at(){let[e,t]=React.useState("");return React.createElement(l.View,{style:{flex:1}},React.createElement(We,{style:lo.search,onChangeText:o=>t(o),placeholder:"Search"}),React.createElement(l.FlatList,{data:Object.values(E).filter(o=>o.name.includes(e)||o.id.toString()===e),renderItem:({item:o})=>React.createElement(React.Fragment,null,React.createElement(st,{asset:o}),React.createElement(co,null)),keyExtractor:o=>o.name}))}var mo=$("getScreens",!1),po=$("UserSettingsOverviewWrapper",!1);function ct(){let e=new Array;return e.push(w("default",mo,(t,o)=>({...o,VendettaSettings:{title:"Vendetta",render:Ze},VendettaPlugins:{title:"Plugins",render:rt},VendettaDeveloper:{title:"Developer",render:it},VendettaAssetBrowser:{title:"Asset Browser",render:at},VendettaCustomPage:{title:"Vendetta Page",render:({render:r,...n})=>{let i=D.useNavigation();return React.useEffect(()=>n&&i.setOptions(n)),React.createElement(r,null)}}}))),w("default",po,(t,o)=>{let r=me(o.props.children,n=>n.type&&n.type.name==="UserSettingsOverview");e.push(w("renderSupportAndAcknowledgements",r.type.prototype,(n,{props:{children:i}})=>{let s=i.findIndex(a=>a?.type?.name==="UploadLogsButton");s!==-1&&i.splice(s,1)})),e.push(w("render",r.type.prototype,(n,{props:{children:i}})=>{let s=[ne.Messages.BILLING_SETTINGS,ne.Messages.PREMIUM_SETTINGS],a=i.findIndex(m=>s.includes(m.props.title));i.splice(a===-1?4:a,0,React.createElement(Je,null))}))},!0),()=>e.forEach(t=>t())}var fo=d("updateTheme","overrideTheme"),At=d("setAMOLEDThemeEnabled"),Mt=re("ThemeStore"),uo=re("UnsyncedUserSettingsStore");function Nt(){let e=Mt.theme||"dark";fo.overrideTheme(e),At&&uo.useAMOLEDTheme===2&&At.setAMOLEDThemeEnabled(!0),se.unsubscribe("I18N_LOAD_START",Nt)}function lt(){try{Mt&&se.subscribe("I18N_LOAD_START",Nt)}catch(e){h.error("Failed to fix theme...",e)}}var dt={};b(dt,{copyText:()=>F,findInReactTree:()=>me,findInTree:()=>Z,safeFetch:()=>K,unfreeze:()=>mt});function mt(e){return Object.isFrozen(e)?Object.assign({},e):e}function ge(e,...t){let o={...e};return t.forEach(r=>delete o[r]),o}async function pt(e){return{patcher:ge(bt,"unpatchAll"),metro:{...ve,common:{...Te}},constants:Xe,utils:dt,debug:ge(Ve,"versionHash","patchLogHook"),ui:{components:ze,toasts:Ie,assets:Ee},plugins:ge(Ke,"initPlugins"),commands:ge(Le,"patchCommands"),storage:Ue,settings:g,loader:{identity:window.__vendetta_loader,config:T},logger:h,version:ce,unload:()=>{e.filter(t=>typeof t=="function").forEach(t=>t()),delete window.vendetta}}}console.log("Hello from Vendetta!");async function go(){try{let e=await Promise.all([Me(),De(),Ce(),lt(),ct()]);window.vendetta=await pt(e),e.push(await Ge()),h.log("Vendetta is ready!")}catch(e){alert(`Vendetta failed to initialize... ${e.stack||e.toString()}`)}}go();})();
//# sourceURL=Vendetta