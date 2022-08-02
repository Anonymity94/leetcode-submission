import{m as q,a4 as w,aJ as E,d as g,R as U,s as h,q as b,aK as I,aL as X,o as c,t as j,w as _,D as v,A as y,y as u,X as x,B as C,J as k,L as D,u as Q,h as i,a0 as V,_ as W,r as Y,aM as Z,i as m,k as z,aN as M,H as F,an as O,C as A,aG as ee,aH as te,F as B,G as N,j as se}from"./index.97c3f828.js";import{r as ne,E as ae}from"./el-row.0dfab43d.js";const le=q({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:w([Number,Object]),default:()=>E({})},sm:{type:w([Number,Object]),default:()=>E({})},md:{type:w([Number,Object]),default:()=>E({})},lg:{type:w([Number,Object]),default:()=>E({})},xl:{type:w([Number,Object]),default:()=>E({})}}),ce={name:"ElCol"},re=g({...ce,props:le,setup(e){const t=e,{gutter:s}=U(ne,{gutter:h(()=>0)}),a=b("col"),r=h(()=>{const n={};return s.value&&(n.paddingLeft=n.paddingRight=`${s.value/2}px`),n}),o=h(()=>{const n=[];return["span","offset","pull","push"].forEach(l=>{const f=t[l];I(f)&&(l==="span"?n.push(a.b(`${t[l]}`)):f>0&&n.push(a.b(`${l}-${t[l]}`)))}),["xs","sm","md","lg","xl"].forEach(l=>{I(t[l])?n.push(a.b(`${l}-${t[l]}`)):X(t[l])&&Object.entries(t[l]).forEach(([f,S])=>{n.push(f!=="span"?a.b(`${l}-${f}-${S}`):a.b(`${l}-${S}`))})}),s.value&&n.push(a.is("guttered")),n});return(n,d)=>(c(),j(C(n.tag),{class:y([u(a).b(),u(o)]),style:x(u(r))},{default:_(()=>[v(n.$slots,"default")]),_:3},8,["class","style"]))}});var oe=k(re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const ue=D(oe),ie={name:"ElContainer"},de=g({...ie,props:{direction:{type:String}},setup(e){const t=e,s=Q(),a=b("container"),r=h(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:s&&s.default?s.default().some(n=>{const d=n.type.name;return d==="ElHeader"||d==="ElFooter"}):!1);return(o,n)=>(c(),i("section",{class:y([u(a).b(),u(a).is("vertical",u(r))])},[v(o.$slots,"default")],2))}});var _e=k(de,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const pe={name:"ElAside"},fe=g({...pe,props:{width:{type:String,default:null}},setup(e){const t=e,s=b("aside"),a=h(()=>t.width?s.cssVarBlock({width:t.width}):{});return(r,o)=>(c(),i("aside",{class:y(u(s).b()),style:x(u(a))},[v(r.$slots,"default")],6))}});var R=k(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const me={name:"ElFooter"},he=g({...me,props:{height:{type:String,default:null}},setup(e){const t=e,s=b("footer"),a=h(()=>t.height?s.cssVarBlock({height:t.height}):{});return(r,o)=>(c(),i("footer",{class:y(u(s).b()),style:x(u(a))},[v(r.$slots,"default")],6))}});var L=k(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const ge={name:"ElHeader"},be=g({...ge,props:{height:{type:String,default:null}},setup(e){const t=e,s=b("header"),a=h(()=>t.height?s.cssVarBlock({height:t.height}):{});return(r,o)=>(c(),i("header",{class:y(u(s).b()),style:x(u(a))},[v(r.$slots,"default")],6))}});var T=k(be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const ve={name:"ElMain"},ye=g({...ve,setup(e){const t=b("main");return(s,a)=>(c(),i("main",{class:y(u(t).b())},[v(s.$slots,"default")],2))}});var G=k(ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const ke=D(_e,{Aside:R,Footer:L,Header:T,Main:G});V(R);V(L);const $e=V(T),we=V(G);const Ee=e=>(ee("data-v-34d1ba4b"),e=e(),te(),e),Ne={class:"page"},xe=Ee(()=>se("h2",null,"\u603B\u699C",-1)),Se={key:1,class:"text-ellipsis"};var J=(e=>(e[e["#c2cdf0"]=0]="#c2cdf0",e[e["#fbd3d0"]=1]="#fbd3d0",e[e["#e4f7d2"]=2]="#e4f7d2",e[e["#f7e9bc"]=3]="#f7e9bc",e[e["#c4e4f5"]=4]="#c4e4f5",e[e["#e8e8e8"]=5]="#e8e8e8",e[e["#e8d5cb"]=6]="#e8d5cb",e[e["#c0ebe5"]=7]="#c0ebe5",e[e["#dbcef5"]=8]="#dbcef5",e[e["#e5edca"]=9]="#e5edca",e))(J||{});const Be=g({__name:"Ranking",setup(e){const t=Y([]),s=async()=>{const r=await z.get(`/data/common/award-ranking.json?v=${+new Date}`);t.value=r.data.sort((o,n)=>n.weeks.length-o.weeks.length).map(o=>({...o,level:o.weeks.length,levelText:M(o.weeks.length)}))};function a(r){return J[r%10]}return s(),(r,o)=>{const n=$e,d=ue,H=ae,l=we,f=Z,S=ke;return c(),i("div",Ne,[m(S,null,{default:_(()=>[m(n,null,{default:_(()=>[xe]),_:1}),t.value.length?(c(),j(l,{key:0},{default:_(()=>[(c(!0),i(F,null,O(t.value,(p,K)=>(c(),j(H,{gutter:20,key:p.userId,class:"row"},{default:_(()=>[m(d,{span:1},{default:_(()=>[B(N(K+1),1)]),_:2},1024),m(d,{span:2,title:p.userName,class:"text-ellipsis"},{default:_(()=>[B(N(p.userName),1)]),_:2},1032,["title"]),m(d,{span:2},{default:_(()=>[B(N(p.levelText),1)]),_:2},1024),m(d,{span:2},{default:_(()=>[B(N(p.weeks.length?`\u5DF2\u575A\u6301 ${p.weeks.length} \u5468`:""),1)]),_:2},1024),m(d,{span:17},{default:_(()=>[p.weeks.length?(c(),i("div",Se,[(c(!0),i(F,null,O((p.weeks||[]).sort(($,P)=>P-$),$=>(c(),i("span",{class:"weeks",style:x({backgroundColor:a($)}),key:$}," \u7B2C"+N($)+"\u5468 ",5))),128))])):(c(),i(F,{key:0},[],64))]),_:2},1024)]),_:2},1024))),128))]),_:1})):A("",!0),t.value.length?A("",!0):(c(),j(f,{key:1,class:"emptyBox",description:"\u6682\u65E0\u5339\u914D\u7684\u6570\u636E"}))]),_:1})])}}});var Fe=W(Be,[["__scopeId","data-v-34d1ba4b"]]);export{Fe as default};
