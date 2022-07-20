import{t as he,u as de,r as w,a as xe,c as ke,b as U,h as L,w as j,d as fe,v as Te,e as D,T as Ee,i as Ie,n as z,f as ve,g as O,j as J,k as me,l as we,m as Ce,_ as $e,o as Se,p as G,q as R,s as E,x as S,y as T,z as M,F as ee,A as te,B as V,C as y,D as ge,E as je,G as Be,H as Le,I as Oe}from"./index.c2b06a4d.js";import{E as Ne}from"./el-empty.94bd7297.js";import{E as De,a as Ae,b as Fe}from"./el-input.ebd90f32.js";import{c as P,g as Re,d as Ve}from"./index.c3910631.js";import{E as ne}from"./el-message.388ab775.js";import{u as Pe}from"./index.67796b82.js";import"./index.5ba30626.js";function We(e){let t;const n=de("loading"),a=w(!1),r=xe({...e,originalPosition:"",originalOverflow:"",visible:!1});function s(o){r.text=o}function d(){const o=r.parent;if(!o.vLoadingAddClassList){let v=o.getAttribute("loading-number");v=Number.parseInt(v)-1,v?o.setAttribute("loading-number",v.toString()):(U(o,n.bm("parent","relative")),o.removeAttribute("loading-number")),U(o,n.bm("parent","hidden"))}u(),b.unmount()}function u(){var o,v;(v=(o=i.$el)==null?void 0:o.parentNode)==null||v.removeChild(i.$el)}function g(){var o;if(e.beforeClose&&!e.beforeClose())return;const v=r.parent;v.vLoadingAddClassList=void 0,a.value=!0,clearTimeout(t),t=window.setTimeout(()=>{a.value&&(a.value=!1,d())},400),r.visible=!1,(o=e.closed)==null||o.call(e)}function f(){!a.value||(a.value=!1,d())}const b=ke({name:"ElLoading",setup(){return()=>{const o=r.spinner||r.svg,v=L("svg",{class:"circular",viewBox:r.svgViewBox?r.svgViewBox:"25 25 50 50",...o?{innerHTML:o}:{}},[L("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),B=r.text?L("p",{class:n.b("text")},[r.text]):void 0;return L(Ee,{name:n.b("fade"),onAfterLeave:f},{default:j(()=>[fe(D("div",{style:{backgroundColor:r.background||""},class:[n.b("mask"),r.customClass,r.fullscreen?"is-fullscreen":""]},[L("div",{class:n.b("spinner")},[v,B])]),[[Te,r.visible]])])})}}}),i=b.mount(document.createElement("div"));return{...he(r),setText:s,removeElLoadingChild:u,close:g,handleAfterLeave:f,vm:i,get $el(){return i.$el}}}let W;const Ue=function(e={}){if(!Ie)return;const t=Ge(e);if(t.fullscreen&&W)return W;const n=We({...t,closed:()=>{var r;(r=t.closed)==null||r.call(t),t.fullscreen&&(W=void 0)}});Me(t,t.parent,n),re(t,t.parent,n),t.parent.vLoadingAddClassList=()=>re(t,t.parent,n);let a=t.parent.getAttribute("loading-number");return a?a=`${Number.parseInt(a)+1}`:a="1",t.parent.setAttribute("loading-number",a),t.parent.appendChild(n.$el),z(()=>n.visible.value=t.visible),t.fullscreen&&(W=n),n},Ge=e=>{var t,n,a,r;let s;return ve(e.target)?s=(t=document.querySelector(e.target))!=null?t:document.body:s=e.target||document.body,{parent:s===document.body||e.body?document.body:s,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:s===document.body&&((n=e.fullscreen)!=null?n:!0),lock:(a=e.lock)!=null?a:!1,customClass:e.customClass||"",visible:(r=e.visible)!=null?r:!0,target:s}},Me=async(e,t,n)=>{const{nextZIndex:a}=Pe(),r={};if(e.fullscreen)n.originalPosition.value=O(document.body,"position"),n.originalOverflow.value=O(document.body,"overflow"),r.zIndex=a();else if(e.parent===document.body){n.originalPosition.value=O(document.body,"position"),await z();for(const s of["top","left"]){const d=s==="top"?"scrollTop":"scrollLeft";r[s]=`${e.target.getBoundingClientRect()[s]+document.body[d]+document.documentElement[d]-Number.parseInt(O(document.body,`margin-${s}`),10)}px`}for(const s of["height","width"])r[s]=`${e.target.getBoundingClientRect()[s]}px`}else n.originalPosition.value=O(t,"position");for(const[s,d]of Object.entries(r))n.$el.style[s]=d},re=(e,t,n)=>{const a=de("loading");n.originalPosition.value!=="absolute"&&n.originalPosition.value!=="fixed"?J(t,a.bm("parent","relative")):U(t,a.bm("parent","relative")),e.fullscreen&&e.lock?J(t,a.bm("parent","hidden")):U(t,a.bm("parent","hidden"))},Q=Symbol("ElLoading"),ae=(e,t)=>{var n,a,r,s;const d=t.instance,u=i=>me(t.value)?t.value[i]:void 0,g=i=>{const o=ve(i)&&(d==null?void 0:d[i])||i;return o&&w(o)},f=i=>g(u(i)||e.getAttribute(`element-loading-${we(i)}`)),I=(n=u("fullscreen"))!=null?n:t.modifiers.fullscreen,b={text:f("text"),svg:f("svg"),svgViewBox:f("svgViewBox"),spinner:f("spinner"),background:f("background"),customClass:f("customClass"),fullscreen:I,target:(a=u("target"))!=null?a:I?void 0:e,body:(r=u("body"))!=null?r:t.modifiers.body,lock:(s=u("lock"))!=null?s:t.modifiers.lock};e[Q]={options:b,instance:Ue(b)}},qe=(e,t)=>{for(const n of Object.keys(t))Ce(t[n])&&(t[n].value=e[n])},Qe={mounted(e,t){t.value&&ae(e,t)},updated(e,t){const n=e[Q];t.oldValue!==t.value&&(t.value&&!t.oldValue?ae(e,t):t.value&&t.oldValue?me(t.value)&&qe(t.value,n.options):n==null||n.instance.close())},unmounted(e){var t;(t=e[Q])==null||t.instance.close()}};function ze(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var be=ze,He=typeof P=="object"&&P&&P.Object===Object&&P,Ye=He,Ze=Ye,Ke=typeof self=="object"&&self&&self.Object===Object&&self,Xe=Ze||Ke||Function("return this")(),pe=Xe,Je=pe,et=function(){return Je.Date.now()},tt=et,nt=/\s/;function rt(e){for(var t=e.length;t--&&nt.test(e.charAt(t)););return t}var at=rt,st=at,ot=/^\s+/;function lt(e){return e&&e.slice(0,st(e)+1).replace(ot,"")}var ut=lt,it=pe,ct=it.Symbol,_e=ct,se=_e,ye=Object.prototype,dt=ye.hasOwnProperty,ft=ye.toString,N=se?se.toStringTag:void 0;function vt(e){var t=dt.call(e,N),n=e[N];try{e[N]=void 0;var a=!0}catch{}var r=ft.call(e);return a&&(t?e[N]=n:delete e[N]),r}var mt=vt,gt=Object.prototype,bt=gt.toString;function pt(e){return bt.call(e)}var _t=pt,oe=_e,yt=mt,ht=_t,xt="[object Null]",kt="[object Undefined]",le=oe?oe.toStringTag:void 0;function Tt(e){return e==null?e===void 0?kt:xt:le&&le in Object(e)?yt(e):ht(e)}var Et=Tt;function It(e){return e!=null&&typeof e=="object"}var wt=It,Ct=Et,$t=wt,St="[object Symbol]";function jt(e){return typeof e=="symbol"||$t(e)&&Ct(e)==St}var Bt=jt,Lt=ut,ue=be,Ot=Bt,ie=0/0,Nt=/^[-+]0x[0-9a-f]+$/i,Dt=/^0b[01]+$/i,At=/^0o[0-7]+$/i,Ft=parseInt;function Rt(e){if(typeof e=="number")return e;if(Ot(e))return ie;if(ue(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ue(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Lt(e);var n=Dt.test(e);return n||At.test(e)?Ft(e.slice(2),n?2:8):Nt.test(e)?ie:+e}var Vt=Rt,Pt=be,q=tt,ce=Vt,Wt="Expected a function",Ut=Math.max,Gt=Math.min;function Mt(e,t,n){var a,r,s,d,u,g,f=0,I=!1,b=!1,i=!0;if(typeof e!="function")throw new TypeError(Wt);t=ce(t)||0,Pt(n)&&(I=!!n.leading,b="maxWait"in n,s=b?Ut(ce(n.maxWait)||0,t):s,i="trailing"in n?!!n.trailing:i);function o(c){var k=a,C=r;return a=r=void 0,f=c,d=e.apply(C,k),d}function v(c){return f=c,u=setTimeout($,t),I?o(c):d}function B(c){var k=c-g,C=c-f,F=t-k;return b?Gt(F,s-C):F}function A(c){var k=c-g,C=c-f;return g===void 0||k>=t||k<0||b&&C>=s}function $(){var c=q();if(A(c))return l(c);u=setTimeout($,B(c))}function l(c){return u=void 0,i&&a?o(c):(a=r=void 0,d)}function m(){u!==void 0&&clearTimeout(u),f=0,a=g=r=u=void 0}function h(){return u===void 0?d:l(q())}function x(){var c=q(),k=A(c);if(a=arguments,r=this,g=c,k){if(u===void 0)return v(g);if(b)return clearTimeout(u),u=setTimeout($,t),o(g)}return u===void 0&&(u=setTimeout($,t)),d}return x.cancel=m,x.flush=h,x}var qt=Mt;const Qt={class:"daily-box"},zt={class:"l-box"},Ht=["onClick"],Yt={class:"user-name"},Zt={key:0,class:"r-box"},Kt={class:"r-top"},Xt=ge("\u529B\u6263\u4E3B\u9875 "),Jt={class:"d-time"},en={class:"c-bold"},tn=Se({__name:"Daily",setup(e){const t=w([]);let n=[];const a=w(""),r=w(),s=w(""),d=w(!1),u=je(),g=Be();G(()=>u.params.userId,l=>{l&&(a.value=l)});const f=w(),I=async()=>{var l;try{const m=(await R.get(`/data/common/user.json?v=${Date.now()}`)).data;if(t.value=m,n=m,m.length===0)return;if(u.params.userId){a.value=u.params.userId;const h=m.findIndex(x=>x.userId===a.value);h>-1&&(await z(),(l=f.value)==null||l.setScrollTop(40*h))}else a.value=m[0].userId}catch{ne.error("\u83B7\u53D6\u8BB0\u5F55\u5931\u8D25")}},b=R.CancelToken;let i=null;const o=async()=>{try{const l=(await R.get(`/data/records/${a.value}.json?v=${Date.now()}`,{cancelToken:new b(function(h){i=h})})).data;d.value=!1,r.value=l}catch(l){if(l instanceof R.AxiosError&&l.code==="ERR_CANCELED")return;ne.error("\u83B7\u53D6\u8BB0\u5F55\u5931\u8D25")}};I();const v=l=>{l.userId!=a.value&&(d.value=!0,i==null||i(),g.push(`/daily/${l.userId}`))},B=qt(()=>{t.value=n.filter(l=>l.userName.indexOf(s.value)>-1||l.userId.indexOf(s.value)>-1)},400,{leading:!0});G(s,l=>{if(!l){t.value=n;return}B()}),G(a,()=>{o()});const A=l=>{const m=Re(l),h=new Date(m[3]).getFullYear(),x=Ve(l).isoWeek();return`${h}\u5E74\u7B2C${x}\u5468`},$=l=>["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"][new Date(l).getDay()];return(l,m)=>{var H,Y,Z,K;const h=De,x=Le,c=Ae,k=Fe,C=Ne,F=Qe;return E(),S("div",Qt,[T("div",zt,[D(h,{class:"c-input",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0\u6216\u7528\u6237id",modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=p=>s.value=p),clearable:""},null,8,["modelValue"]),t.value.length>0?(E(),M(c,{key:0,class:"user-list",ref_key:"scrollbarRef",ref:f},{default:j(()=>[(E(!0),S(ee,null,te(t.value,p=>(E(),S("div",{class:Oe(["user",{active:a.value===p.userId}]),key:p.userId,onClick:_=>v(p)},[T("span",Yt,y(p.userName+"("+p.userId+")"),1),D(x,{class:"c-link",type:"primary",target:"_blank",underline:!1,href:(p.lcus?"https://leetcode.com/u/":"https://leetcode.cn/u/")+p.userId},{default:j(()=>[ge("\u529B\u6263\u4E3B\u9875 "+y(p.lcus?"\u{1F1FA}\u{1F1F8}":"\u{1F1E8}\u{1F1F3}"),1)]),_:2},1032,["href"])],10,Ht))),128))]),_:1},512)):V("",!0)]),a.value&&t.value.length>0?fe((E(),S("div",Zt,[T("div",Kt,[T("h2",null,[T("span",null,y(((H=r.value)==null?void 0:H.userName)+"("+((Y=r.value)==null?void 0:Y.userId)+")")+"\u7684AC\u8BB0\u5F55",1),D(x,{style:{"margin-left":"20px"},href:(Z=r.value)==null?void 0:Z.homepage,type:"primary",target:"_blank"},{default:j(()=>[Xt]),_:1},8,["href"])])]),T("span",Jt,"\u66F4\u65B0\u4E8E: "+y((K=r.value)==null?void 0:K.updatedAt),1),D(c,{class:"r-scroll"},{default:j(()=>{var p;return[(E(!0),S(ee,null,te((p=r.value)==null?void 0:p.logs,(_,X)=>(E(),S("div",{key:X},[new Date(_.date).getDay()===0||X===0?(E(),M(k,{key:0,"content-position":"left"},{default:j(()=>[T("span",en,y(A(_.date)),1)]),_:2},1024)):V("",!0),T("p",null,"## "+y(_.date)+"("+y($(_.date))+")",1),T("p",null,"\u65B0\u9898("+y(_.questionIds.length)+"): "+y(_.questionIds.length>0?_.questionIds.join(""):"\u65E0"),1),T("p",null," \u590D\u4E60("+y(_.reviewQuestionIds?_.reviewQuestionIds.length:0)+"): "+y(_.reviewQuestionIds&&_.reviewQuestionIds.length>0?_.reviewQuestionIds.join(""):"\u65E0"),1)]))),128))]}),_:1})])),[[F,d.value]]):V("",!0),t.value.length===0?(E(),M(C,{key:1,class:"emptyBox",description:"\u6682\u65E0\u5339\u914D\u7684\u6570\u636E"})):V("",!0)])}}});var cn=$e(tn,[["__scopeId","data-v-06dad4ea"]]);export{cn as default};
