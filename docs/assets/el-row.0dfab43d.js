import{m as u,d as i,q as p,s as a,Y as c,o as m,t as f,w as y,D as g,A as d,y as s,X as w,B as v,J as _,L as R}from"./index.97c3f828.js";const b=Symbol("rowContextKey"),C=["start","center","end","space-around","space-between","space-evenly"],S=["top","middle","bottom"],h=u({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:C,default:"start"},align:{type:String,values:S,default:"top"}}),j={name:"ElRow"},k=i({...j,props:h,setup(n){const e=n,o=p("row"),r=a(()=>e.gutter);c(b,{gutter:r});const l=a(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t});return(t,x)=>(m(),f(v(t.tag),{class:d([s(o).b(),s(o).is(`justify-${e.justify}`,t.justify!=="start"),s(o).is(`align-${e.align}`,t.align!=="top")]),style:w(s(l))},{default:y(()=>[g(t.$slots,"default")]),_:3},8,["class","style"]))}});var $=_(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const E=R($);export{E,b as r};
