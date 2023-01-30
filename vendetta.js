"use strict";(()=>{var It=Object.defineProperty;var N=(e,t)=>{for(var o in t)It(e,o,{get:t[o],enumerable:!0})};var ye={};N(ye,{after:()=>S,before:()=>Pt,instead:()=>Et,unpatchAll:()=>Xe});var ue=["a","b","i"],x=new Map;function ze(e,t,o,r,n){let i=x.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let l of i.b.values()){let v=l.call(r,o);Array.isArray(v)&&(o=v)}let c=(...l)=>n?Reflect.construct(i.o,l,r):i.o.apply(r,l);for(let l of i.i.values()){let v=c;c=(...D)=>l.call(r,D,v)}let s=c(...o);for(let l of i.a.values())s=l.call(r,o,s)??s;return s}function ge(e,t,o,r){let n=x.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),ue.every(c=>i[c].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&x.delete(e),!0):!1}function Xe(){for(let[e,t]of x.entries())for(let o in t)for(let r of ue)for(let n of t[o]?.[r].keys()??[])ge(e,o,n,r)}var X=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);x.has(o)||x.set(o,{});let i=x.get(o);if(!i[t]){let l=o[t];i[t]={o:l,b:new Map,i:new Map,a:new Map};let v=(w,_,$)=>{let Rt=ze(t,o,_,w,$);return n&&s(),Rt},D=new Proxy(l,{apply:(w,_,$)=>v(_,$,!1),construct:(w,_)=>v(l,_,!0),get:(w,_,$)=>_=="toString"?l.toString.bind(l):Reflect.get(w,_,$)});Reflect.defineProperty(o,t,{value:D,configurable:!0,writable:!0})||(o[t]=D)}let c=Symbol(),s=()=>ge(o,t,c,e);return i[t][e].set(c,r),s};var Pt=X("b"),Et=X("i"),S=X("a");var Qe={...ye};var Se={};N(Se,{filterModules:()=>he,find:()=>L,findAll:()=>ve,findByDisplayName:()=>k,findByDisplayNameAll:()=>Dt,findByProps:()=>p,findByPropsAll:()=>At,findByStoreName:()=>ee,modules:()=>be});var Q=e=>Object.values(window.modules).find(t=>t.publicModule.exports?.[e]).publicModule.exports;window.React=Q("createElement");var m=Q("Text"),q=Q("ThemeColorMap"),Z=Q("isMoment");function qe(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t].publicModule.exports;if(!o||o===window||o.proxygone===null){qe(t);continue}}var he=(e,t=!1)=>o=>{let r=[],n=Z?.locale();for(let i in e){let c=Number(i),s=e[c].publicModule.exports;if(!e[c].isInitialized)try{__r(c),n&&n!==Z.locale()&&Z.locale(n)}catch{}if(!s){qe(c);continue}try{if(s.default&&s.__esModule&&o(s.default)){if(t)return s.default;r.push(s.default)}if(o(s)){if(t)return s;r.push(s)}}catch(l){console.error(`Failed to getModule... ${l.stack||l.toString()}`)}}if(!t)return r},be=window.modules,L=he(be,!0),ve=he(be),Ze=e=>t=>e.every(o=>t[o]!==void 0),et=(e,t)=>t?o=>o.name===e:o=>o?.default?.name===e,p=(...e)=>L(Ze(e)),At=(...e)=>ve(Ze(e)),k=(e,t=!0)=>L(et(e,t)),Dt=(e,t=!0)=>ve(et(e,t)),ee=e=>L(t=>t.getName?.()===e);var _t=p("setLogFn").default,Nt=new _t("Vendetta"),h=Nt;var Ee={};N(Ee,{Flux:()=>Ct,FluxDispatcher:()=>oe,NavigationNative:()=>Pe,React:()=>Ft,ReactNative:()=>m,assets:()=>j,channels:()=>Mt,clipboard:()=>Te,constants:()=>q,i18n:()=>te,invites:()=>Re,navigation:()=>M,navigationStack:()=>Ie,stylesheet:()=>d,toasts:()=>xe,url:()=>we});var Mt=p("getVoiceChannelId"),te=p("Messages"),we=p("openURL"),xe=L(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),d=p("createThemedStyleSheet"),Te=p("setString","getString","hasString"),j=p("registerAsset"),Re=p("acceptInviteAndTransitionToInviteChannel"),M=p("pushLazy"),Ie=p("createStackNavigator"),Pe=p("NavigationContainer"),Ct=p("connectStores"),oe=p("_currentDispatchActionType"),Ft=window.React;function R(e){try{Te.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}function G(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function c(s,l,{walkable:v=[],ignore:D=[]}={}){if(i+=1,!(i>n)){if(typeof l=="string"){if(s.hasOwnProperty(l))return s[l]}else if(l(s))return s;if(s){if(Array.isArray(s))for(let B of s){let w=c(B,l,{walkable:v,ignore:D});if(w)return w}else if(typeof s=="object"){for(let B of Object.keys(s))if(!(v!=null&&v.includes(B))&&!D.includes(B))try{let w=c(s[B],l,{walkable:v,ignore:D});if(w)return w}catch{}}}}}return c(e,t,{walkable:o,ignore:r})}var re=(e,t)=>G(e,t,{walkable:["props","children","child","sibling"]});var _e={};N(_e,{DISCORD_SERVER:()=>Ae,GITHUB:()=>De});var Ae="n9QQ4XhhJP",De="https://github.com/vendetta-mod";var Me={};N(Me,{Forms:()=>f,General:()=>H,Search:()=>Ne});var f=p("Form","FormSection"),H=p("Button","Text","View"),Ne=k("StaticSearchBarContainer");var Ce={};N(Ce,{showToast:()=>u});function u(e,t){return xe.open({content:e,source:t})}var Be={};N(Be,{awaitSyncWrapper:()=>Oe,createProxy:()=>nt,createStorage:()=>V,useProxy:()=>I,wrapSync:()=>K});var Ot=Object.freeze({GET:"GET",SET:"SET",DEL:"DEL"});function Fe(){return{listeners:Object.values(Ot).reduce((e,t)=>(e[t]=new Set,e),{}),on(e,t){this.listeners[e].has(t)||this.listeners[e].add(t)},off(e,t){this.listeners[e].delete(t)},once(e,t){let o=(r,n)=>{this.off(r,o),t(r,n)};this.on(e,o)},emit(e,t){for(let o of this.listeners[e])o(e,t)}}}var tt=m.NativeModules.MMKVManager,ot=Symbol("emitter accessor"),rt=Symbol("wrapSync promise accessor");function nt(e={}){let t=Fe();function o(r,n){return new Proxy(r,{get(i,c){if(c===ot)return t;let s=[...n,c],l=i[c];return l!=null?(t.emit("GET",{path:s,value:l}),typeof l=="object"?o(l,s):l):l},set(i,c,s){return i[c]=s,t.emit("SET",{path:[...n,c],value:s}),!0},deleteProperty(i,c){let s=delete i[c];return s&&t.emit("DEL",{path:[...n,c]}),s}})}return{proxy:o(e,[]),emitter:t}}function I(e){let t=e[ot],[,o]=React.useReducer(r=>~r,0);return React.useEffect(()=>{let r=()=>o();return t.on("SET",r),t.on("DEL",r),()=>{t.off("SET",r),t.off("DEL",r)}},[]),e}async function V(e){let t=JSON.parse(await tt.getItem(e)??"{}"),{proxy:o,emitter:r}=nt(t),n=()=>tt.setItem(e,JSON.stringify(o));return r.on("SET",n),r.on("DEL",n),o}function K(e){let t,o=[],r=n=>t?n():o.push(n);return e.then(n=>{t=n,o.forEach(i=>i())}),new Proxy({},{...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map(n=>[n,(i,...c)=>Reflect[n](t??i,...c)])),get(n,i,c){return i===rt?r:Reflect.get(t??n,i,c)}})}var Oe=e=>new Promise(t=>e[rt](t));var T={};function it(){try{S("registerAsset",j,(e,t)=>{let o=e[0];T[o.name]={...o,id:t}});for(let e=1;;e++){let t=j.getAssetByID(e);if(!t)break;T[t.name]||(T[t.name]={...t,id:e})}}catch{}}var st=e=>Object.values(T).find(e),at=e=>T[e],ct=e=>j.getAssetByID(e),a=e=>T[e]?.id;var y=K(V("VENDETTA_SETTINGS"));var{FormRow:P,FormSection:Bt,FormDivider:lt}=f;function Le({navigation:e}){return I(y),React.createElement(Bt,{key:"Vendetta",title:"Vendetta"},React.createElement(P,{label:"General",leading:React.createElement(P.Icon,{source:a("settings")}),trailing:P.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(lt,null),React.createElement(P,{label:"Plugins",leading:React.createElement(P.Icon,{source:a("debug")}),trailing:P.Arrow,onPress:()=>e.push("VendettaPlugins")}),y.developerSettings&&React.createElement(React.Fragment,null,React.createElement(lt,null),React.createElement(P,{label:"Developer",leading:React.createElement(P.Icon,{source:a("ic_progress_wrench_24px")}),trailing:P.Arrow,onPress:()=>e.push("VendettaDeveloper")})))}var E;function ne(e){if(E!==void 0&&E.readyState!==WebSocket.CLOSED&&E.close(),e===""){u("Invalid debugger URL!",a("Small"));return}E=new WebSocket(`ws://${e}`),E.addEventListener("open",()=>u("Connected to debugger.",a("Check"))),E.addEventListener("message",t=>{try{(0,eval)(t.data)}catch(o){console.error(o)}}),E.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),u("An error occurred with the debugger connection!",a("Small"))})}function mt(){S("nativeLoggingHook",globalThis,(e,t)=>{E?.readyState===WebSocket.OPEN&&E.send(JSON.stringify({message:e[0],level:e[1]})),h.log(e[0])})}var ke="473205a";function pt(){let e=m.NativeModules.InfoDictionaryManager,t=window.HermesInternal.getRuntimeProperties(),o=m.Platform.constants,r=o.reactNativeVersion,n=m.NativeModules.DCDDeviceManager;return{vendetta:{version:ke},discord:{version:e.Version,build:e.Build},react:{version:React.version,nativeVersion:`${r.major||0}.${r.minor||0}.${r.patch||0}`},hermes:{version:t["OSS Release Version"],buildType:t.Build,bytecodeVersion:t["Bytecode Version"]},...m.Platform.select({android:{os:{name:"Android",version:o.Release,sdk:o.Version}},ios:{os:{name:o.systemName,version:o.osVersion}}}),...m.Platform.select({android:{device:{manufacturer:o.Manufacturer,brand:o.Brand,model:o.Model,codename:n.device}},ios:{device:{manufacturer:n.deviceManufacturer,brand:n.deviceBrand,model:n.deviceModel,codename:n.device}}})}}var{FormRow:dt,FormText:Lt}=f;function ie({label:e,version:t,icon:o}){return React.createElement(dt,{label:e,leading:React.createElement(dt.Icon,{source:a(o)}),trailing:React.createElement(Lt,null,t),onPress:()=>{R(`${e} - ${t}`),u("Copied version to clipboard.",a("toast_copy_link"))}})}var{FormRow:A,FormSwitchRow:kt,FormSection:se,FormDivider:ae}=f,g=pt();function Ve(){I(y);let e=[{label:"Vendetta",version:g.vendetta.version,icon:"ic_progress_wrench_24px"},{label:"Discord",version:`${g.discord.version} (${g.discord.build})`,icon:"Discord"},{label:"React",version:g.react.version,icon:"ic_category_16px"},{label:"React Native",version:g.react.nativeVersion,icon:"mobile"},{label:"Hermes",version:`${g.hermes.version} ${g.hermes.buildType} (Bytecode ${g.hermes.bytecodeVersion})`,icon:"ic_server_security_24px"}],t=[{label:"Operating System",version:`${g.os.name} ${g.os.version}`,icon:"ic_cog_24px"},...g.os.sdk?[{label:"SDK",version:g.os.sdk,icon:"ic_profile_badge_verified_developer_color"}]:[],{label:"Manufacturer",version:g.device.manufacturer,icon:"ic_hammer_and_chisel_24px"},{label:"Brand",version:g.device.brand,icon:"ic_settings_boost_24px"},{label:"Model",version:g.device.model,icon:"ic_phonelink_24px"},{label:m.Platform.select({android:"Codename",ios:"Machine ID"}),version:g.device.codename,icon:"ic_compose_24px"}];return React.createElement(m.ScrollView,null,React.createElement(se,{title:"Links"},React.createElement(A,{label:"Discord Server",leading:React.createElement(A.Icon,{source:a("Discord")}),trailing:A.Arrow,onPress:()=>Re.acceptInviteAndTransitionToInviteChannel({inviteKey:Ae})}),React.createElement(ae,null),React.createElement(A,{label:"GitHub",leading:React.createElement(A.Icon,{source:a("img_account_sync_github_white")}),trailing:A.Arrow,onPress:()=>we.openURL(De)})),React.createElement(se,{title:"Versions"},e.map(o=>React.createElement(React.Fragment,null,React.createElement(ie,{label:o.label,version:o.version,icon:o.icon}),React.createElement(ae,null)))),React.createElement(se,{title:"Platform Info"},t.map(o=>React.createElement(React.Fragment,null,React.createElement(ie,{label:o.label,version:o.version,icon:o.icon}),React.createElement(ae,null)))),React.createElement(se,{title:"Actions"},React.createElement(A,{label:"Reload Discord",leading:React.createElement(A.Icon,{source:a("ic_message_retry")}),onPress:()=>m.NativeModules.BundleUpdaterManager.reload()}),React.createElement(ae,null),React.createElement(kt,{label:"Developer Settings",leading:React.createElement(A.Icon,{source:a("ic_progress_wrench_24px")}),value:y.developerSettings,onValueChange:o=>{y.developerSettings=o}})))}var U=d.createThemedStyleSheet({container:{backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:1},card:{backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:d.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:d.ThemeColorMap.HEADER_PRIMARY},headerTitle:{fontFamily:q.Fonts.PRIMARY_BOLD,color:d.ThemeColorMap.HEADER_PRIMARY},backIcon:{tintColor:d.ThemeColorMap.INTERACTIVE_ACTIVE,marginLeft:15,marginRight:20}}),ft=Ie.createStackNavigator(),{TouchableOpacity:Vt,Image:Ut}=H;function J({name:e,children:t}){return React.createElement(Pe.NavigationContainer,{independent:!0},React.createElement(ft.Navigator,{initialRouteName:e,style:U.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:U.card,headerStyle:U.header,headerTitleContainerStyle:U.headerTitleContainer}},React.createElement(ft.Screen,{name:e,component:t,options:{headerTitleStyle:U.headerTitle,headerLeft:()=>React.createElement(Vt,{onPress:()=>M.pop()},React.createElement(Ut,{style:U.backIcon,source:a("back-icon")}))}})))}var b=K(V("VENDETTA_PLUGINS")),C={};async function W(e,t=!0){if(e.endsWith("/")||(e+="/"),typeof e!="string"||e in b)throw new Error("Plugin ID invalid or taken");let o;try{o=await(await fetch(new URL("manifest.json",e),{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;try{r=await(await fetch(new URL(o.main||"index.js",e),{cache:"no-store"})).text()}catch{throw new Error(`Failed to fetch JS for ${e}`)}if(r.length===0)throw new Error(`Failed to fetch JS for ${e}`);b[e]={id:e,manifest:o,enabled:!1,update:!0,js:r},t&&await ce(e)}async function Ue(e){let t={...window.vendetta,plugin:{manifest:e.manifest,storage:await V(e.id),showSettings:()=>$e(e)}},o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}async function ce(e){let t=b[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=await Ue(t);C[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){h.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{C[t.id]?.onUnload?.()}catch(r){h.error(`Plugin ${t.id} errored whilst unloading`,r)}delete C[e],t.enabled=!1}}function Y(e){let t=b[e],o=C[e];if(!t)throw new Error("Attempted to stop non-existent plugin");if(!o)throw new Error("Attempted to stop a non-started plugin");try{C[t.id]?.onUnload?.()}catch(r){h.error(`Plugin ${t.id} errored whilst unloading`,r)}delete C[e],t.enabled=!1}function le(e){b[e].enabled&&Y(e),delete b[e]}async function ut(){await Oe(b);let e=Object.keys(b);await Promise.allSettled(e.map(t=>W(t,!1)));for(let t of e.filter(o=>b[o].enabled))ce(t)}var z=e=>C[e]?.settings;function $e(e){let t=z(e.id);if(!t)return h.error(`Plugin ${e.id} is not loaded or has no settings`);M.push(J,{name:e.manifest.name,children:t})}var{FormRow:je,FormSwitch:$t}=f,{TouchableOpacity:me,Image:pe}=H,F=d.createThemedStyleSheet({card:{backgroundColor:d.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:5,margin:10,marginTop:0},header:{backgroundColor:d.ThemeColorMap.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{justifyContent:"flex-end",flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:d.ThemeColorMap.INTERACTIVE_NORMAL}});function Ge({plugin:e}){let[t,o]=React.useState(!1);return t?null:React.createElement(m.View,{style:F.card},React.createElement(je,{style:F.header,label:`${e.manifest.name} by ${e.manifest.authors.map(r=>r.name).join(", ")}`,leading:React.createElement(je.Icon,{source:a(e.manifest.vendetta?.icon||"ic_application_command_24px")}),trailing:React.createElement($t,{value:e.enabled,onValueChange:r=>{r?ce(e.id):Y(e.id)}})}),React.createElement(je,{label:e.manifest.description,trailing:React.createElement(m.View,{style:F.actions},React.createElement(me,{onPress:()=>{le(e.id),o(!0)}},React.createElement(pe,{style:F.icon,source:a("ic_message_delete")})),React.createElement(me,{onPress:()=>{R(e.id),u("Copied plugin URL to clipboard.",a("toast_copy_link"))}},React.createElement(pe,{style:F.icon,source:a("copy")})),React.createElement(me,{onPress:()=>{e.update=!e.update,u(`${e.update?"Enabled":"Disabled"} updates for ${e.manifest.name}.`,a("toast_image_saved"))}},React.createElement(pe,{style:F.icon,source:a(e.update?"Check":"Small")})),z(e.id)&&React.createElement(me,{onPress:()=>$e(e)},React.createElement(pe,{style:F.icon,source:a("settings")})))}))}var{FormInput:jt,FormRow:gt}=f;function He(){I(b);let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(jt,{value:e,onChange:o=>t(o),title:"PLUGIN URL"}),React.createElement(gt,{label:"Install plugin",leading:React.createElement(gt.Icon,{source:a("ic_add_perk_24px")}),onPress:()=>{W(e).then(()=>{t("")}).catch(o=>{u(o.message,a("Small"))})}}),React.createElement(m.FlatList,{style:{marginTop:10},data:Object.values(b),renderItem:({item:o})=>React.createElement(Ge,{plugin:o}),keyExtractor:o=>o.id}))}var{FormRow:Gt}=f,Ht=d.createThemedStyleSheet({asset:{width:32,height:32}});function Ke({asset:e}){return React.createElement(Gt,{label:`${e.name} - ${e.id}`,trailing:React.createElement(m.Image,{source:e.id,style:Ht.asset}),onPress:()=>{R(e.name),u("Copied asset name to clipboard.",a("toast_copy_link"))}})}var{FormDivider:Kt}=f,Jt=d.createThemedStyleSheet({search:{margin:0,padding:15,borderBottomWidth:0,background:"none",backgroundColor:"none"}});function Je(){let[e,t]=React.useState("");return React.createElement(m.View,{style:{flex:1}},React.createElement(Ne,{style:Jt.search,onChangeText:o=>t(o),placeholder:"Search..."}),React.createElement(m.FlatList,{data:Object.values(T).filter(o=>o.name.includes(e)),renderItem:({item:o})=>React.createElement(React.Fragment,null,React.createElement(Ke,{asset:o}),React.createElement(Kt,null)),keyExtractor:o=>o.name}))}var{FormSection:yt,FormRow:O,FormInput:Wt,FormDivider:ht}=f;function We(){return I(y),React.createElement(m.View,{style:{flex:1}},React.createElement(yt,{title:"Debug"},React.createElement(Wt,{value:y.debuggerUrl,onChange:e=>{y.debuggerUrl=e},title:"DEBUGGER URL"}),React.createElement(ht,null),React.createElement(O,{label:"Connect to debug websocket",leading:React.createElement(O.Icon,{source:a("copy")}),onPress:()=>ne(y.debuggerUrl)}),React.createElement(ht,null),window.__vendetta_rdc&&React.createElement(O,{label:"Connect to React DevTools",leading:React.createElement(O.Icon,{source:a("ic_badge_staff")}),onPress:()=>{try{window.__vendetta_rdc?.connectToDevTools({host:y.debuggerUrl.split(":")?.[0],resolveRNStyle:m.StyleSheet.flatten})}catch(e){h.error("Failed to connect to React DevTools!",e),u("Failed to connect to React DevTools!",a("Small"))}}})),React.createElement(yt,{title:"Other"},React.createElement(O,{label:"Asset Browser",leading:React.createElement(O.Icon,{source:a("ic_media_upload")}),trailing:O.Arrow,onPress:()=>M.push(J,{name:"Asset Browser",children:Je})})))}var Yt=k("getScreens",!1),zt=k("UserSettingsOverviewWrapper",!1),de=[];function Ye(){S("default",Yt,(e,t)=>({...t,VendettaSettings:{title:"Vendetta",render:Ve},VendettaPlugins:{title:"Plugins",render:He},VendettaDeveloper:{title:"Developer",render:We}})),S("default",zt,(e,t)=>{for(let r of de)r();de=[];let o=re(t.props.children,r=>r.type&&r.type.name==="UserSettingsOverview");de.push(S("renderSupportAndAcknowledgements",o.type.prototype,(r,{props:{children:n}})=>{let i=n.findIndex(c=>c?.type?.name==="UploadLogsButton");i!==-1&&n.splice(i,1)})),de.push(S("render",o.type.prototype,(r,{props:{children:n}})=>{let i=[te.Messages.BILLING_SETTINGS,te.Messages.PREMIUM_SETTINGS],c=n.findIndex(s=>i.includes(s.props.title));n.splice(c===-1?4:c,0,React.createElement(Le,{navigation:o.props.navigation}))}))})}var Xt=p("updateTheme","overrideTheme"),bt=p("setAMOLEDThemeEnabled"),vt=ee("ThemeStore"),Qt=ee("UnsyncedUserSettingsStore");function St(){let e=vt.theme||"dark";Xt.overrideTheme(e),bt&&Qt.useAMOLEDTheme===2&&bt.setAMOLEDThemeEnabled(!0),oe.unsubscribe("I18N_LOAD_START",St)}function wt(){try{vt&&oe.subscribe("I18N_LOAD_START",St)}catch(e){h.error("Failed to fix theme...",e)}}var xt=p("getBuiltInCommands"),fe=[];S("getBuiltInCommands",xt,(e,t)=>t.concat(fe));function Tt(e){let t=xt.getBuiltInCommands(1,!0,!1);t.sort(function(r,n){return parseInt(n.id)-parseInt(r.id)});let o=t[t.length-1];return e.id=(parseInt(o.id,10)-1).toString(),fe.push(e),()=>fe=fe.filter(({id:r})=>r!==e.id)}console.log("Hello from Vendetta!");async function qt(){let e=!1;try{window.vendetta={patcher:Qe,metro:{...Se,common:{...Ee}},constants:{..._e},utils:{copyText:R,findInReactTree:re,findInTree:G},debug:{connectToDebugger:ne},ui:{components:{...Me},toasts:{...Ce},assets:{all:T,find:st,getAssetByID:ct,getAssetByName:at,getAssetIDByName:a}},plugins:{plugins:b,fetchPlugin:W,evalPlugin:Ue,stopPlugin:Y,removePlugin:le,getSettings:z},commands:{registerCommand:Tt},storage:{...Be},settings:y,logger:h,version:ke},mt(),it(),wt(),ut(),Ye()}catch(t){e=!0,alert(`Vendetta failed to initialize... ${t.stack||t.toString()}`)}e||h.log("Vendetta is ready!")}qt();})();
//# sourceURL=Vendetta