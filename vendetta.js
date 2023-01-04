"use strict";(()=>{var _e=Object.defineProperty;var D=(e,t)=>{for(var o in t)_e(e,o,{get:t[o],enumerable:!0})};var j={};D(j,{after:()=>b,before:()=>Me,instead:()=>Ne,unpatchAll:()=>he});var U=["a","b","i"],h=new Map;function ye(e,t,o,r,n){let i=h.get(t)?.[e];if(!i)return n?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let l of i.b.values()){let f=l.call(r,o);Array.isArray(f)&&(o=f)}let c=(...l)=>n?Reflect.construct(i.o,l,r):i.o.apply(r,l);for(let l of i.i.values()){let f=c;c=(...I)=>l.call(r,I,f)}let s=c(...o);for(let l of i.a.values())s=l.call(r,o,s)??s;return s}function $(e,t,o,r){let n=h.get(e),i=n?.[t];return i?.[r].has(o)?(i[r].delete(o),U.every(c=>i[c].size===0)&&(Reflect.defineProperty(e,t,{value:i.o,writable:!0,configurable:!0})||(e[t]=i.o),delete n[t]),Object.keys(n).length==0&&h.delete(e),!0):!1}function he(){for(let[e,t]of h.entries())for(let o in t)for(let r of U)for(let n of t[o]?.[r].keys()??[])$(e,o,n,r)}var N=e=>(t,o,r,n=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);h.has(o)||h.set(o,{});let i=h.get(o);if(!i[t]){let l=o[t];i[t]={o:l,b:new Map,i:new Map,a:new Map};let f=(g,P,k)=>{let Ee=ye(t,o,P,g,k);return n&&s(),Ee},I=new Proxy(l,{apply:(g,P,k)=>f(P,k,!1),construct:(g,P)=>f(l,P,!0),get:(g,P,k)=>P=="toString"?l.toString.bind(l):Reflect.get(g,P,k)});Reflect.defineProperty(o,t,{value:I,configurable:!0,writable:!0})||(o[t]=I)}let c=Symbol(),s=()=>$(o,t,c,e);return i[t][e].set(c,r),s};var Me=N("b"),Ne=N("i"),b=N("a");var be={...j};var z={};D(z,{filterModules:()=>H,find:()=>E,findAll:()=>J,findByDisplayName:()=>O,findByDisplayNameAll:()=>Le,findByProps:()=>p,findByPropsAll:()=>Oe,modules:()=>W});function we(e){Object.defineProperty(window.modules,e,{value:window.modules[e],enumerable:!1,configurable:!0,writable:!0})}for(let e in window.modules){let t=Number(e),o=window.modules[t].publicModule.exports;if(!o||o===window||o.proxygone===null){we(t);continue}}window.React=Object.values(window.modules).find(e=>e.publicModule.exports.createElement).publicModule.exports;var G=Object.values(window.modules).find(e=>e.publicModule.exports.isMoment).publicModule.exports,H=(e,t=!1)=>o=>{let r=[],n=G?.locale();for(let i in e){let c=Number(i),s=e[c].publicModule.exports;if(!e[c].isInitialized)try{__r(c),n&&n!==G.locale()&&G.locale(n)}catch{}if(!s){we(c);continue}try{if(s.default&&s.__esModule&&o(s.default)){if(t)return s.default;r.push(s.default)}if(o(s)){if(t)return s;r.push(s)}}catch(l){console.error(`Failed to getModule... ${l.stack||l.toString()}`)}}if(!t)return r},W=window.modules,E=H(W,!0),J=H(W),xe=e=>t=>e.every(o=>t[o]!==void 0),Se=(e,t)=>t?o=>o.name===e:o=>o?.default?.name===e,p=(...e)=>E(xe(e)),Oe=(...e)=>J(xe(e)),O=(e,t=!0)=>E(Se(e,t)),Le=(e,t=!0)=>J(Se(e,t));var Ve=p("setLogFn").default,Ce=new Ve("Vendetta"),S=Ce;var Ue=p("setString","getString");function v(e){try{Ue.setString(e)}catch{throw new Error("Failed to set clipboard content.")}}function _(e,t,{walkable:o=[],ignore:r=[],maxDepth:n=100}={}){let i=0;function c(s,l,{walkable:f=[],ignore:I=[]}={}){if(i+=1,!(i>n)){if(typeof l=="string"){if(s.hasOwnProperty(l))return s[l]}else if(l(s))return s;if(!!s){if(Array.isArray(s))for(let T of s){let g=c(T,l,{walkable:f,ignore:I});if(g)return g}else if(typeof s=="object"){for(let T of Object.keys(s))if(!(f!=null&&f.includes(T))&&!I.includes(T))try{let g=c(s[T],l,{walkable:f,ignore:I});if(g)return g}catch{}}}}}return c(e,t,{walkable:o,ignore:r})}function M(e,t){return _(e,t,{walkable:["props","children","child","sibling"]})}var Q={};D(Q,{DISCORD_SERVER:()=>K,GITHUB:()=>Y});var K="https://discord.gg/n9QQ4XhhJP",Y="https://github.com/vendetta-mod";var q={};D(q,{AsyncStorage:()=>He,React:()=>Ge,ReactNative:()=>d,channels:()=>je,constants:()=>$e,i18n:()=>L,stylesheet:()=>w,toasts:()=>X,url:()=>V});var $e=p("API_HOST"),je=p("getVoiceChannelId"),L=p("Messages"),V=p("openURL"),X=E(e=>e.open&&e.close&&!e.startDrag&&!e.init&&!e.openReplay&&!e.setAlwaysOnTop),w=p("createThemedStyleSheet"),Ge=p("createElement"),d=p("Text","Image"),He=p("setItem");var Z={};D(Z,{Forms:()=>m});var m=p("FormSection");var ee={};D(ee,{showToast:()=>y});function y(e,t){return X.open({content:e,source:t})}var te=p("registerAsset"),x={};function oe(){try{b("registerAsset",te,(e,t)=>{let o=e[0];x[o.name]={...o,id:t}});for(let e=1;;e++){let t=te.getAssetByID(e);if(!t)break;x[t.name]||(x[t.name]={...t,id:e})}}catch{}}var Re=e=>Object.values(x).find(e),Ae=e=>x[e],Ie=e=>te.getAssetByID(e),a=e=>x[e]?.id;var{FormRow:R,FormSection:We}=m;function re({navigation:e}){return React.createElement(We,{key:"Vendetta",title:"Vendetta"},React.createElement(R,{label:"General",leading:()=>React.createElement(R.Icon,{source:a("settings")}),trailing:R.Arrow,onPress:()=>e.push("VendettaSettings")}),React.createElement(R,{label:"Plugins",leading:()=>React.createElement(R.Icon,{source:a("debug")}),trailing:R.Arrow,onPress:()=>e.push("VendettaPlugins")}),React.createElement(R,{label:"Asset Browser",leading:()=>React.createElement(R.Icon,{source:a("grid")}),trailing:R.Arrow,onPress:()=>e.push("VendettaAssetBrowser")}))}var A,Je=eval;function C(e){if(A!==void 0&&A.readyState!==WebSocket.CLOSED&&A.close(),e===""){y("Invalid debugger URL!",a("Small"));return}A=new WebSocket(`ws://${e}`),A.addEventListener("open",()=>y("Connected to debugger.",a("Check"))),A.addEventListener("message",t=>{try{Je(t.data)}catch(o){console.error(o)}}),A.addEventListener("error",t=>{console.log(`Debugger error: ${t.message}`),y("An error occurred with the debugger connection!",a("Small"))})}function Pe(){b("nativeLoggingHook",globalThis,(e,t)=>{A?.readyState===WebSocket.OPEN&&A.send(JSON.stringify({message:e[0],level:e[1]})),S.log(e[0])})}var{FormRow:ve,FormText:ze}=m;function ne({label:e,version:t,icon:o}){return React.createElement(ve,{label:e,leading:()=>React.createElement(ve.Icon,{source:a(o)}),trailing:()=>React.createElement(ze,null,t),onPress:()=>{v(`${e} - ${t}`),y("Copied version to clipboard.",a("toast_copy_link"))}})}var{FormRow:u,FormSection:se,FormInput:Ke}=m,ie=window.HermesInternal.getRuntimeProperties(),ae=d.Platform.constants.reactNativeVersion;function le(){let[e,t]=React.useState(""),o=[{label:"Discord",version:d.NativeModules.InfoDictionaryManager.Version,icon:"Discord"},{label:"React",version:React.version,icon:"ic_category_16px"},{label:"React Native",version:`${ae.major||0}.${ae.minor||0}.${ae.patch||0}`,icon:"mobile"},{label:"Hermes",version:`${ie["OSS Release Version"]} ${ie.Build} | Bytecode ${ie["Bytecode Version"]}`,icon:"ic_hammer_and_chisel_24px"}];return React.createElement(d.ScrollView,null,React.createElement(se,{title:"Links",android_noDivider:!0},React.createElement(u,{label:"Discord Server",leading:()=>React.createElement(u.Icon,{source:a("Discord")}),trailing:u.Arrow,onPress:()=>V.openURL(K)}),React.createElement(u,{label:"GitHub",leading:()=>React.createElement(u.Icon,{source:a("img_account_sync_github_white")}),trailing:u.Arrow,onPress:()=>V.openURL(Y)})),React.createElement(se,{title:"Debug"},React.createElement(Ke,{value:e,onChange:r=>t(r),title:"DEBUGGER URL"}),React.createElement(u,{label:"Connect to debug websocket",leading:()=>React.createElement(u.Icon,{source:a("copy")}),trailing:u.Arrow,onPress:()=>C(e)}),React.createElement(u,{label:"Reload Discord",leading:()=>React.createElement(u.Icon,{source:a("ic_message_retry")}),trailing:u.Arrow,onPress:()=>d.NativeModules.BundleUpdaterManager.reload()})),React.createElement(se,{title:"Versions"},o.map(r=>React.createElement(ne,{label:r.label,version:r.version,icon:r.icon}))))}var F={},B={};async function Fe(e){e.endsWith("/")||(e+="/");let t=e.split("://")[1];if(typeof e!="string"||e in F)throw new Error("Plugin ID invalid or taken");let o;try{o=await(await fetch(new URL("manifest.json",e),{cache:"no-store"})).json()}catch{throw new Error(`Failed to fetch manifest for ${e}`)}let r;try{r=await(await fetch(new URL("plugin.js",e),{cache:"no-store"})).text()}catch{throw new Error(`Failed to fetch JS for ${e}`)}if(r.length===0)throw new Error(`Failed to fetch JS for ${e}`);F[t]={id:t,manifest:o,enabled:!1,js:r}}function Ye(e){let t=Object.assign({},window.vendetta),o=`vendetta=>{return ${e.js}}
//# sourceURL=${e.id}`,r=(0,eval)(o)(t),n=typeof r=="function"?r():r;return n.default||n}function Te(e){let t=F[e];if(!t)throw new Error("Attempted to start non-existent plugin");try{let o=Ye(t);B[e]=o,o.onLoad?.(),t.enabled=!0}catch(o){S.error(`Plugin ${t.id} errored whilst loading, and will be unloaded`,o);try{B[t.id]?.onUnload?.()}catch(r){S.error(`Plugin ${t.id} errored whilst unloading`,r)}delete B[e],t.enabled=!1}}function De(e){let t=F[e],o=B[e];if(!t)throw new Error("Attempted to stop non-existent plugin");if(!o)throw new Error("Attempted to stop a non-started plugin");try{B[t.id]?.onUnload?.()}catch(r){S.error(`Plugin ${t.id} errored whilst unloading`,r)}delete B[e],t.enabled=!1}var{FormRow:ce,FormSwitch:Qe}=m,Be=w.createThemedStyleSheet({card:{backgroundColor:w.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:5,margin:10},header:{backgroundColor:w.ThemeColorMap.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5}});function pe({plugin:e}){let[t,o]=React.useState(e.enabled);return React.createElement(d.View,{style:Be.card},React.createElement(ce,{style:Be.header,label:`${e.manifest.name} by ${e.manifest.author}`,leading:React.createElement(ce.Icon,{source:a(e.manifest.icon||"ic_application_command_24px")}),trailing:React.createElement(Qe,{value:e.enabled,onValueChange:r=>{r?Te(e.id):De(e.id),o(r)}})}),React.createElement(ce,{label:e.manifest.description}))}var{FormInput:Xe,FormRow:de,FormText:qe}=m,ke=w.createThemedStyleSheet({disclaimer:{backgroundColor:w.ThemeColorMap.BACKGROUND_SECONDARY,padding:10},disclaimerText:{textAlign:"center"}});function me(){let[e,t]=React.useState(""),[o,r]=React.useState(F);return React.createElement(React.Fragment,null,React.createElement(Xe,{value:e,onChange:n=>t(n),title:"PLUGIN URL"}),React.createElement(de,{label:"Install plugin",leading:()=>React.createElement(de.Icon,{source:a("add_white")}),trailing:de.Arrow,onPress:()=>{Fe(e).then(()=>{t(""),r(F)}).catch(n=>{y(n.message,a("Small"))})}}),React.createElement(d.FlatList,{data:Object.values(o),renderItem:({item:n})=>React.createElement(pe,{plugin:n}),keyExtractor:n=>n.id}),React.createElement(d.View,{style:ke.disclaimer},React.createElement(qe,{style:ke.disclaimerText},"Plugins are currently non-permanent whilst I find a storage solution.")))}var{FormRow:Ze}=m,et=w.createThemedStyleSheet({asset:{width:32,height:32}});function fe({asset:e}){return React.createElement(Ze,{label:`${e.name} - ${e.id}`,trailing:()=>React.createElement(d.Image,{source:e.id,style:et.asset}),onPress:()=>{v(e.name),y("Copied asset name to clipboard.",a("toast_copy_link"))}})}var{FormInput:tt}=m;function ue(){let[e,t]=React.useState("");return React.createElement(React.Fragment,null,React.createElement(tt,{value:e,onChange:o=>t(o),title:"SEARCH"}),React.createElement(d.FlatList,{data:Object.values(x).filter(o=>o.name.includes(e)),renderItem:({item:o})=>React.createElement(fe,{asset:o}),keyExtractor:o=>o.name}))}var ot=O("getScreens",!1),rt=O("UserSettingsOverviewWrapper",!1);function ge(){b("default",ot,(e,t)=>({...t,VendettaSettings:{title:"Vendetta",render:le},VendettaPlugins:{title:"Plugins",render:me},VendettaAssetBrowser:{title:"Asset Browser",render:ue}})),b("default",rt,(e,t)=>{let o=M(t.props.children,r=>r.type&&r.type.name==="UserSettingsOverview");b("renderSupportAndAcknowledgements",o.type.prototype,(r,{props:{children:n}})=>{let i=n.findIndex(c=>c?.type?.name==="UploadLogsButton");i!==-1&&n.splice(i,1)}),b("render",o.type.prototype,(r,{props:{children:n}})=>{let i=[L.Messages.BILLING_SETTINGS,L.Messages.PREMIUM_SETTINGS],c=n.findIndex(s=>i.includes(s.props.title));n.splice(c===-1?4:c,0,React.createElement(re,{navigation:o.props.navigation}))})},!0)}console.log("Hello from Vendetta!");async function nt(){let e=!1;try{window.vendetta={patcher:be,metro:{...z,common:{...q}},constants:{...Q},utils:{copyText:v,findInReactTree:M,findInTree:_},debug:{connectToDebugger:C},ui:{components:{...Z},toasts:{...ee},assets:{all:x,find:Re,getAssetByID:Ie,getAssetByName:Ae,getAssetIDByName:a}},logger:S},ge(),oe(),Pe()}catch(t){e=!0,alert(`Vendetta failed to initialize...
${t.stack||t.toString()}`)}e||S.log("Vendetta is ready!")}nt();})();
//# sourceURL=Vendetta