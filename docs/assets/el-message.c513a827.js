import{Z as H,o as V,u as R,K as p,Y as B,s as m,x as M,L as U,e as S,w as N,d as q,v as A,M as n,y as E,I as f,C as Z,T as j,J,O as te,a1 as oe,a0 as _,i as K,ak as ae,r as k,al as L,V as re,p as le,z as C,B as T,ac as D,ab as ie,F as ue,af as ce,N as de,am as pe,an as me,ao as O,f as F,ap as Y,aq as G,ar as fe,as as P,at as ge}from"./index.27160b6b.js";import{b as ye,a as ve,E as Ce,u as he}from"./index.515c8d6a.js";import{m as be}from"./index.c3910631.js";const Te=H({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Ne=["textContent"],we={name:"ElBadge"},ke=V({...we,props:Te,setup(s,{expose:t}){const e=s,a=R("badge"),o=p(()=>e.isDot?"":B(e.value)&&B(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:o}),(l,u)=>(m(),M("div",{class:f(n(a).b())},[U(l.$slots,"default"),S(j,{name:`${n(a).namespace.value}-zoom-in-center`,persisted:""},{default:N(()=>[q(E("sup",{class:f([n(a).e("content"),n(a).em("content",l.type),n(a).is("fixed",!!l.$slots.default),n(a).is("dot",l.isDot)]),textContent:Z(n(o))},null,10,Ne),[[A,!l.hidden&&(n(o)||l.isDot)]])]),_:1},8,["name"])],2))}});var Be=J(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Me=te(Be),Q=["success","info","warning","error"],i=be({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:"",id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:K?document.body:void 0}),Ee=H({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:oe,default:i.icon},id:{type:String,default:i.id},message:{type:_([String,Object,Function]),default:i.message},onClose:{type:_(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:Q,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),Se={destroy:()=>!0},c=ae([]),ze=s=>{const t=c.findIndex(o=>o.id===s),e=c[t];let a;return t>0&&(a=c[t-1]),{current:e,prev:a}},xe=s=>{const{prev:t}=ze(s);return t?t.vm.exposeProxy.bottom:0},Ie=["id"],$e=["innerHTML"],_e={name:"ElMessage"},Le=V({..._e,props:Ee,emits:Se,setup(s,{expose:t}){const e=s,{Close:a}=pe,o=R("message"),l=k(),u=k(!1),g=k(0);let d;const h=p(()=>e.type?e.type==="error"?"danger":e.type:"info"),z=p(()=>{const r=e.type;return{[o.bm("icon",r)]:r&&L[r]}}),v=p(()=>e.icon||L[e.type]||""),X=p(()=>xe(e.id)),x=p(()=>e.offset+X.value),ee=p(()=>g.value+x.value),se=p(()=>({top:`${x.value}px`,zIndex:e.zIndex}));function w(){e.duration!==0&&({stop:d}=me(()=>{b()},e.duration))}function I(){d==null||d()}function b(){u.value=!1}function ne({code:r}){r===Ce.esc&&b()}return re(()=>{w(),u.value=!0}),le(()=>e.repeatNum,()=>{I(),w()}),ye(document,"keydown",ne),ve(l,()=>{g.value=l.value.getBoundingClientRect().height}),t({visible:u,bottom:ee,close:b}),(r,$)=>(m(),C(j,{name:n(o).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:$[0]||($[0]=Ve=>r.$emit("destroy")),persisted:""},{default:N(()=>[q(E("div",{id:r.id,ref_key:"messageRef",ref:l,class:f([n(o).b(),{[n(o).m(r.type)]:r.type&&!r.icon},n(o).is("center",r.center),n(o).is("closable",r.showClose),r.customClass]),style:de(n(se)),role:"alert",onMouseenter:I,onMouseleave:w},[r.repeatNum>1?(m(),C(n(Me),{key:0,value:r.repeatNum,type:n(h),class:f(n(o).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),n(v)?(m(),C(n(D),{key:1,class:f([n(o).e("icon"),n(z)])},{default:N(()=>[(m(),C(ie(n(v))))]),_:1},8,["class"])):T("v-if",!0),U(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(m(),M(ue,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),E("p",{class:f(n(o).e("content")),innerHTML:r.message},null,10,$e)],2112)):(m(),M("p",{key:0,class:f(n(o).e("content"))},Z(r.message),3))]),r.showClose?(m(),C(n(D),{key:2,class:f(n(o).e("closeBtn")),onClick:ce(b,["stop"])},{default:N(()=>[S(n(a))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,Ie),[[A,u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var De=J(Le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Oe=1;const W=s=>{const t=!s||F(s)||Y(s)||G(s)?{message:s}:s,e={...i,...t};if(F(e.appendTo)){let a=document.querySelector(e.appendTo);fe(a)||(a=document.body),e.appendTo=a}return e},Fe=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Pe=({appendTo:s,...t},e)=>{const{nextZIndex:a}=he(),o=`message_${Oe++}`,l=t.onClose,u=document.createElement("div"),g={...t,zIndex:a()+t.zIndex,id:o,onClose:()=>{l==null||l(),Fe(v)},onDestroy:()=>{P(null,u)}},d=S(De,g,G(g.message)||Y(g.message)?{default:g.message}:null);d.appContext=e||y._context,P(d,u),s.appendChild(u.firstElementChild);const h=d.component,v={id:o,vnode:d,vm:h,handler:{close:()=>{h.exposeProxy.visible=!1}},props:d.component.props};return v},y=(s={},t)=>{if(!K)return{close:()=>{}};if(B(O.max)&&c.length>=O.max)return{close:()=>{}};const e=W(s);if(e.grouping&&c.length){const o=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const a=Pe(e,t);return c.push(a),a.handler};Q.forEach(s=>{y[s]=(t={},e)=>{const a=W(t);return y({...a,type:s},e)}});function He(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}y.closeAll=He;y._context=null;const Ae=ge(y,"$message");export{Ae as E};
