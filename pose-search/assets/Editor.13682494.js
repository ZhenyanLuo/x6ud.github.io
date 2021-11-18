var te=Object.defineProperty;var ae=(e,t,a)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var N=(e,t,a)=>(ae(e,typeof t!="symbol"?t+"":t,a),a);import{L as se,R as oe,N as ne}from"./NormalizedLandmarksCanvas.bd1866de.js";import{h as D,j as ie,k as G,l as K,m as j,o as F,p as re,r as le,u as de,v as ue,w as ce,x as he,G as O,D as me,R as pe,I as _e,y as ve,S as ge}from"./SkeletonModelCanvas.c30fe34c.js";import{d as z,o as y,c as $,a as n,g as m,i as V,j as fe,q as Y,k as S,l as r,v as we,m as ye,J as ke,y as Ce,K as be,L as Ne,r as _,w as c,M as xe,F as H,D as X,s as Z,t as P,O as Le,P as Se,Q as Pe,n as Ue,u as x}from"./vendor.c4a19e19.js";import{_ as J}from"./index.b762845a.js";import{P as Re,a as W,g as ze,d as Me,l as qe}from"./PhotoDatabase.116a3c6d.js";const $e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Te=n("path",{d:"M608 112c-167.9 0-304 136.1-304 304c0 70.3 23.9 135 63.9 186.5l-41.1 41.1l-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3l-44.9 44.9l-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3l-65.3 65.3a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 0 0 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8c-43.1-43-66.8-100.3-66.8-161.2c0-60.9 23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8c60.9 0 118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2c0 60.9-23.7 118.2-66.8 161.2z",fill:"currentColor"},null,-1);var Ee=z({name:"KeyOutlined",render:function(t,a){return y(),$("svg",$e,[Te])}});const Ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ae=n("path",{d:"M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80s-35.8-80-80-80z",fill:"currentColor"},null,-1);var Ge=z({name:"SaveFilled",render:function(t,a){return y(),$("svg",Ie,[Ae])}});const Ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},je=n("path",{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",fill:"currentColor"},null,-1);var Be=z({name:"SearchOutlined",render:function(t,a){return y(),$("svg",Ke,[je])}});const Q=[0,1,0];class De{constructor(){N(this,"_matrix",new Float32Array(16));N(this,"_position",new Float32Array([0,0,0]));N(this,"_quaternion",D(new Float32Array(4),0,0,0));N(this,"_scale",new Float32Array([1,1,1]));N(this,"matrixNeedsUpdate",!0)}updateMatrix(){ie(this._matrix,this._quaternion,this._position,this._scale),this.matrixNeedsUpdate=!1}get matrix(){return this.matrixNeedsUpdate&&this.updateMatrix(),this._matrix}set matrix(t){this._matrix.set(t),G(this._position,this._matrix),K(this._quaternion,this._matrix),j(this._scale,this._matrix),this.matrixNeedsUpdate=!1}get x(){return this._position[0]}set x(t){t!==this._position[0]&&(this._position[0]=t,this.matrixNeedsUpdate=!0)}get y(){return this._position[1]}set y(t){t!==this._position[1]&&(this._position[1]=t,this.matrixNeedsUpdate=!0)}get z(){return this._position[2]}set z(t){t!==this._position[2]&&(this._position[2]=t,this.matrixNeedsUpdate=!0)}get position(){return this._position}set position(t){F(t,this._position)||(this._position.set(t),this.matrixNeedsUpdate=!0)}get scaleX(){return this._scale[0]}set scaleX(t){t!==this._scale[0]&&(this._scale[0]=t,this.matrixNeedsUpdate=!0)}get scaleY(){return this._scale[1]}set scaleY(t){t!==this._scale[1]&&(this._scale[1]=t,this.matrixNeedsUpdate=!0)}get scaleZ(){return this._scale[2]}set scaleZ(t){t!==this._scale[2]&&(this._scale[2]=t,this.matrixNeedsUpdate=!0)}get scale(){return this._scale}set scale(t){F(t,this._scale)||(this._scale.set(t),this.matrixNeedsUpdate=!0)}get quaternion(){return this._quaternion}set quaternion(t){re(t,this._quaternion)||(this._quaternion.set(t),this.matrixNeedsUpdate=!0)}setRotationDegrees(t,a,s){D(this._quaternion,t,a,s),this.matrixNeedsUpdate=!0}rotateX(t){le(this._quaternion,this._quaternion,t),this.matrixNeedsUpdate=!0}rotateY(t){de(this._quaternion,this._quaternion,t),this.matrixNeedsUpdate=!0}rotateZ(t){ue(this._quaternion,this._quaternion,t),this.matrixNeedsUpdate=!0}lookAt(t,a,s=Q){ce(this._matrix,t,a,s),G(this._position,this._matrix),K(this._quaternion,this._matrix),j(this._scale,this._matrix),this.matrixNeedsUpdate=!0}targetTo(t,a,s=Q){he(this._matrix,t,a,s),G(this._position,this._matrix),K(this._quaternion,this._matrix),j(this._scale,this._matrix),this.matrixNeedsUpdate=!0}}function f(...e){const t=[];for(let a=0,s=e.length;a<s-1;++a)t.push(e[a]),t.push(e[a+1]);return t}class Fe extends De{constructor(){super(...arguments);N(this,"geometry",new O(O.TYPE_LINES))}setLandmarks(t,a){this.dispose(t);const s=this.geometry,l=[];for(let d of a)l.push({a_position:[d.point[0],d.point[1],d.point[2]],a_color:[d.visibility,0,1-d.visibility,1]});const o=[...f(8,6,5,4,0,1,2,3,7),...f(10,9),...f(12,24,23,11,12),...f(12,14,16),...f(11,13,15),...f(24,26,28),...f(23,25,27),...f(16,18,20,16,22),...f(15,17,19,15,21),...f(28,32,30,28),...f(27,29,31,27)];s.setVertices(l),s.indices=o}dispose(t){t.disposeGeometry(this.geometry)}render(t){t.uniform("u_mMatrix",this.matrix),t.drawGeometry(this.geometry)}}var Oe=`#version 300 es\r
\r
precision highp float;\r
\r
in vec4 v_color;\r
\r
uniform vec4 u_color;\r
\r
out vec4 outColor;\r
\r
void main() {\r
    outColor = v_color * u_color;\r
}\r
`,Ve=`#version 300 es\r
\r
in vec3 a_position;\r
in vec4 a_color;\r
\r
uniform mat4 u_pvMatrix;\r
uniform mat4 u_mMatrix;\r
\r
out vec4 v_color;\r
\r
void main() {\r
    gl_Position = u_pvMatrix * u_mMatrix * vec4(a_position, 1.0);\r
    v_color = a_color;\r
}\r
`,Ye=z({props:{landmarks:Array},setup(e){const t=m(),a=m();let s,l;const o=new me,d=new _e;d.callback=function(i){o.onInput(i),p()};const v=new Fe;V(function(){d.setup(a.value),s=new pe(a.value),l=s.createShader(Ve,Oe),p()}),fe(function(){d.unload(a.value),s.deleteShader(l),v.dispose(s)}),Y(()=>e.landmarks,function(){o.zoom=1,o.rotateX=0,o.rotateY=0,ve(o.target,0,0,0),o.update(),p()});function p(){var C;const i=t.value.getBoundingClientRect(),w=i.width,g=i.height;s.resizeCanvas(w,g),o.fitViewport(w,g),s.clearColor(242/255,242/255,242/255,1),s.clear(!0,!0,!1),s.blendMode(s.BLEND_MODE_PIGMENT),((C=e.landmarks)==null?void 0:C.length)&&(s.depthTest(!1),s.useShader(l),s.uniform("u_color",[1,1,1,1]),s.uniform("u_pvMatrix",o.pvMatrix),v.setLandmarks(s,e.landmarks),v.render(s))}return{container:t,canvas:a}}});const He={class:"world-landmarks-canvas",ref:"container"},Xe={ref:"canvas"};function Ze(e,t,a,s,l,o){return y(),S("div",He,[r("canvas",Xe,null,512)],512)}var Je=J(Ye,[["render",Ze]]);async function We(e,t,a,s){const l=new URLSearchParams({client_id:e,query:t,page:a+"",per_page:s+""}),o=await fetch("https://api.unsplash.com/search/photos/?"+l.toString());if(!o.ok)throw new Error(o.statusText);const d=await o.json();return{total:d.total,pages:d.total_pages,photos:d.results}}async function Qe(e,t){const a=new URLSearchParams({client_id:e}),s=await fetch("https://api.unsplash.com/photos/"+t+"?"+a.toString());if(!s.ok)throw new Error(s.statusText);const l=await s.json();return{id:l.id,width:l.width,height:l.height,tags:l.tags.map(o=>o.title),link:l.links.html,urls:l.urls,author:{name:l.user.name,username:l.user.username}}}const ee="unsplash-access-key";var et=z({components:{NButton:we,NIcon:ye,NInput:ke,NRadio:Ce,NTag:be,KeyOutlined:Ee,SearchOutlined:Be,LeftOutlined:se,RightOutlined:oe,SaveFilled:Ge,NormalizedLandmarksCanvas:ne,WorldLandmarksCanvas:Je,SkeletonModelCanvas:ge},setup:function(){const e=new Re,t=m(0),a=m(!1),s=m(localStorage.getItem(ee)||""),l=m(""),o=m(1),d=m(20),v=m(!1),p=m(),i=m(new W),w=m(!1),g=m(!1),C=m(!1);Ne(),V(async function(){try{a.value=!0,await e.init(),t.value=e.countRecords()}finally{a.value=!1}}),Y(s,function(h){localStorage.setItem(ee,h)});async function L(){try{v.value=!0,p.value=await We(s.value,l.value,o.value,d.value)}finally{v.value=!1}}async function T(){o.value=1,await L()}async function E(){o.value=Math.max(o.value-1,1),await L()}async function R(){var h;o.value=Math.min(o.value+1,((h=p.value)==null?void 0:h.pages)||1),await L()}async function I(){var b;const h=Number(prompt("Jump to page",o.value+""));!h||(o.value=Math.max(Math.min(Number(h),((b=p.value)==null?void 0:b.pages)||1),1)||o.value,await L())}async function A(h){const b=e.queryPhotoById(h);if(b)w.value=!0,i.value=b;else{w.value=!1,C.value=!1;const k=await Qe(s.value,h);i.value=new W,i.value.id=k.id,i.value.width=k.width,i.value.height=k.height,i.value.full=k.urls.full,i.value.regular=k.urls.regular,i.value.authorName=k.author.name,i.value.authorUsername=k.author.username,i.value.gender=ze(k.tags),i.value.tags=k.tags}}async function M(){try{g.value=!0;const h=await Me(await qe(i.value.regular));i.value.normalizedLandmarks=h.normalizedLandmarks,i.value.worldLandmarks=h.worldLandmarks}finally{C.value=!0,g.value=!1}}function q(){try{a.value=!0,e.addPhoto(i.value),w.value=!0,t.value+=1}finally{a.value=!1}}async function u(){try{a.value=!0,await e.saveToFile()}finally{a.value=!1}}function B(h){const b=Number(h.target.value);w.value&&e.updatePhotoGender(i.value.id,b),i.value.gender=b}return{numOfRecords:t,dbLoading:a,accessKey:s,keywords:l,page:o,perPage:d,searchLoading:v,searchResult:p,photo:i,recordInserted:w,modelRunning:g,modelHasBeenRun:C,onSearch:T,prevPage:E,nextPage:R,jumpToPage:I,selectPhoto:A,runModel:M,addRecord:q,saveDatabase:u,onPhotoGenderChange:B}}});const U=e=>(Le("data-v-3591ac7c"),e=e(),Se(),e),tt={class:"container rows"},at={class:"cols"},st={class:"cols",style:{height:"56px"}},ot={class:"photos cols fill"},nt=["onClick"],it={class:"cols fill"},rt={class:"rows",style:{width:"280px"}},lt={class:"rows",style:{width:"280px",overflow:"auto"}},dt={class:"form"},ut={class:"form-item"},ct=U(()=>r("label",null,"ID",-1)),ht={class:"form-item"},mt=U(()=>r("label",null,"Author",-1)),pt={class:"form-item"},_t=U(()=>r("label",null,"Size",-1)),vt={class:"value"},gt={class:"form-item"},ft=U(()=>r("label",null,"Gender",-1)),wt={class:"value"},yt=x(" Unmarked "),kt=x(" Male "),Ct=x(" Female "),bt={key:0,class:"form-item"},Nt=U(()=>r("label",null,"Tags",-1)),xt={class:"value"},Lt={class:"cols",style:{"justify-content":"flex-end"}},St=x(" Run Model "),Pt=x(" Add Record "),Ut={class:"cols",style:{"align-items":"center","font-size":"12px",color:"#999"}},Rt=U(()=>r("div",{class:"fill"},null,-1)),zt={style:{"margin-right":".5em"}},Mt=x(" Save data.db ");function qt(e,t,a,s,l,o){var M,q;const d=_("key-outlined"),v=_("n-icon"),p=_("n-input"),i=_("search-outlined"),w=_("left-outlined"),g=_("n-button"),C=_("right-outlined"),L=_("normalized-landmarks-canvas"),T=_("world-landmarks-canvas"),E=_("skeleton-model-canvas"),R=_("n-radio"),I=_("n-tag"),A=_("save-filled");return y(),S("div",tt,[r("div",at,[n(p,{placeholder:"Unsplash Access Key",title:"Unsplash Access Key",style:{width:"140px"},size:"small",value:e.accessKey,"onUpdate:value":t[0]||(t[0]=u=>e.accessKey=u)},{prefix:c(()=>[n(v,null,{default:c(()=>[n(d)]),_:1})]),_:1},8,["value"]),n(p,{placeholder:"Keywords",title:"Keywords",size:"small",value:e.keywords,"onUpdate:value":t[1]||(t[1]=u=>e.keywords=u),disabled:!e.accessKey,loading:e.searchLoading,onKeypress:xe(e.onSearch,["enter"])},{prefix:c(()=>[n(v,null,{default:c(()=>[n(i)]),_:1})]),_:1},8,["value","disabled","loading","onKeypress"])]),r("div",st,[n(g,{title:"Prev Page",style:{height:"100%"},size:"tiny",disabled:!e.searchResult||e.page===1,loading:e.searchLoading,onClick:e.prevPage},{icon:c(()=>[n(v,null,{default:c(()=>[n(w)]),_:1})]),_:1},8,["disabled","loading","onClick"]),r("div",ot,[e.searchResult?(y(!0),S(H,{key:0},X(e.searchResult.photos,u=>(y(),S("div",{class:Pe(["photo",{selected:u.id===e.photo.id}]),style:Ue({"background-image":`url(${u.urls.thumb})`}),onClick:B=>e.selectPhoto(u.id)},null,14,nt))),256)):Z("",!0),r("div",{class:"pages",onDblclick:t[2]||(t[2]=(...u)=>e.jumpToPage&&e.jumpToPage(...u))},P(e.page)+"/"+P(((M=e.searchResult)==null?void 0:M.pages)||0),33)]),n(g,{title:"Next Page",style:{height:"100%"},size:"tiny",disabled:!e.searchResult||e.page>=e.searchResult.pages,loading:e.searchLoading,onClick:e.nextPage},{icon:c(()=>[n(v,null,{default:c(()=>[n(C)]),_:1})]),_:1},8,["disabled","loading","onClick"])]),r("div",it,[n(L,{class:"fill","img-url":e.photo.regular,landmarks:e.photo.normalizedLandmarks},null,8,["img-url","landmarks"]),r("div",rt,[n(T,{style:{width:"280px",height:"280px"},landmarks:e.photo.worldLandmarks},null,8,["landmarks"]),n(E,{style:{width:"280px",height:"280px"},landmarks:e.photo.worldLandmarks,readonly:""},null,8,["landmarks"])]),r("div",lt,[r("div",dt,[r("div",ut,[ct,n(p,{class:"value",placeholder:"",size:"small",readonly:"",value:e.photo.id,"onUpdate:value":t[3]||(t[3]=u=>e.photo.id=u)},null,8,["value"])]),r("div",ht,[mt,n(p,{class:"value",placeholder:"",size:"small",readonly:"",value:e.photo.authorName,"onUpdate:value":t[4]||(t[4]=u=>e.photo.authorName=u)},null,8,["value"])]),r("div",pt,[_t,r("div",vt,P(e.photo.width)+"\xD7"+P(e.photo.height),1)]),r("div",gt,[ft,r("div",wt,[n(R,{name:"gender",checked:!e.photo.gender,value:0,disabled:!e.photo.id,onChange:e.onPhotoGenderChange},{default:c(()=>[yt]),_:1},8,["checked","disabled","onChange"]),n(R,{name:"gender",checked:e.photo.gender===1,value:1,disabled:!e.photo.id,onChange:e.onPhotoGenderChange},{default:c(()=>[kt]),_:1},8,["checked","disabled","onChange"]),n(R,{name:"gender",checked:e.photo.gender===2,value:2,disabled:!e.photo.id,onChange:e.onPhotoGenderChange},{default:c(()=>[Ct]),_:1},8,["checked","disabled","onChange"])])]),((q=e.photo.tags)==null?void 0:q.length)?(y(),S("div",bt,[Nt,r("div",xt,[(y(!0),S(H,null,X(e.photo.tags,u=>(y(),$(I,{size:"small"},{default:c(()=>[x(P(u),1)]),_:2},1024))),256))])])):Z("",!0)]),r("div",Lt,[n(g,{disabled:!e.photo.id||!!e.photo.normalizedLandmarks.length||e.modelRunning||e.modelHasBeenRun,loading:e.modelRunning,onClick:e.runModel},{default:c(()=>[St]),_:1},8,["disabled","loading","onClick"]),n(g,{disabled:!e.photo.id||!e.photo.normalizedLandmarks.length||e.recordInserted||e.dbLoading,onClick:e.addRecord},{default:c(()=>[Pt]),_:1},8,["disabled","onClick"])])])]),r("div",Ut,[Rt,r("div",zt,"Num of Records: "+P(e.numOfRecords),1),n(g,{size:"tiny",type:"primary",loading:e.dbLoading,onClick:e.saveDatabase},{icon:c(()=>[n(A)]),default:c(()=>[Mt]),_:1},8,["loading","onClick"])])])}var Kt=J(et,[["render",qt],["__scopeId","data-v-3591ac7c"]]);export{Kt as default};
//# sourceMappingURL=Editor.13682494.js.map