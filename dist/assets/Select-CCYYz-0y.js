import{b8 as ze,P as T,f as B,G as Ge,d as he,J as ut,D as s,aY as vt,aU as io,ak as ao,ah as Ze,b9 as so,ba as co,b0 as ct,aj as uo,bb as ho,al as nt,a2 as te,bc as Le,bd as lt,X as Oe,be as kt,q as L,y as _,x as se,a9 as zt,z as Ae,A as Ce,bf as fo,aa as Ot,O as He,Q as Y,aV as Pe,bg as ht,aJ as It,v as Z,a8 as ke,aN as Tt,H as Xe,bh as vo,aD as go,I as bo,ad as ft,bi as po,Z as Ne,bj as mo,a0 as Pt,b3 as Fe,bk as Co,p as wo,bl as yo,bm as j,aW as xo,$ as ge,bn as gt,E as So,bo as Ro,bp as ko,bq as bt,F as zo,a3 as Oo,ac as Io,br as To,aG as Po,aH as Fo,aI as Mo,af as dt,aK as Bo,b4 as _o,aM as pt,ab as mt,aO as $o,aQ as Eo,bs as Lo,aL as No,aR as Ao,a$ as Ho,a1 as Do}from"./index-BxtL9i4V.js";function Ct(e){return e&-e}class Ft{constructor(o,n){this.l=o,this.min=n;const l=new Array(o+1);for(let r=0;r<o+1;++r)l[r]=0;this.ft=l}add(o,n){if(n===0)return;const{l,ft:r}=this;for(o+=1;o<=l;)r[o]+=n,o+=Ct(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:n,min:l,l:r}=this;if(o>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=o*l;for(;o>0;)d+=n[o],o-=Ct(o);return d}getBound(o){let n=0,l=this.l;for(;l>n;){const r=Math.floor((n+l)/2),d=this.sum(r);if(d>o){l=r;continue}else if(d<o){if(n===r)return this.sum(n+1)<=o?n+1:r;n=r}else return r}return n}}let qe;function Vo(){return typeof document>"u"?!1:(qe===void 0&&("matchMedia"in window?qe=window.matchMedia("(pointer:coarse)").matches:qe=!1),qe)}let rt;function wt(){return typeof document>"u"?1:(rt===void 0&&(rt="chrome"in window?window.devicePixelRatio:1),rt)}const Mt="VVirtualListXScroll";function Wo({columnsRef:e,renderColRef:o,renderItemWithColsRef:n}){const l=B(0),r=B(0),d=T(()=>{const p=e.value;if(p.length===0)return null;const y=new Ft(p.length,0);return p.forEach((m,P)=>{y.add(P,m.width)}),y}),h=ze(()=>{const p=d.value;return p!==null?Math.max(p.getBound(r.value)-1,0):0}),i=p=>{const y=d.value;return y!==null?y.sum(p):0},b=ze(()=>{const p=d.value;return p!==null?Math.min(p.getBound(r.value+l.value)+1,e.value.length-1):0});return Ge(Mt,{startIndexRef:h,endIndexRef:b,columnsRef:e,renderColRef:o,renderItemWithColsRef:n,getLeft:i}),{listWidthRef:l,scrollLeftRef:r}}const yt=he({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:o,columnsRef:n,getLeft:l,renderColRef:r,renderItemWithColsRef:d}=ut(Mt);return{startIndex:e,endIndex:o,columns:n,renderCol:r,renderItemWithCols:d,getLeft:l}},render(){const{startIndex:e,endIndex:o,columns:n,renderCol:l,renderItemWithCols:r,getLeft:d,item:h}=this;if(r!=null)return r({itemIndex:this.index,startColIndex:e,endColIndex:o,allColumns:n,item:h,getLeft:d});if(l!=null){const i=[];for(let b=e;b<=o;++b){const p=n[b];i.push(l({column:p,left:d(b),item:h}))}return i}return null}}),jo=nt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[nt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[nt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Ko=he({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=uo();jo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:ao,ssr:o}),Ze(()=>{const{defaultScrollIndex:u,defaultScrollKey:x}=e;u!=null?O({index:u}):x!=null&&O({key:x})});let n=!1,l=!1;so(()=>{if(n=!1,!l){l=!0;return}O({top:z.value,left:h.value})}),co(()=>{n=!0,l||(l=!0)});const r=ze(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let u=0;return e.columns.forEach(x=>{u+=x.width}),u}),d=T(()=>{const u=new Map,{keyField:x}=e;return e.items.forEach((E,N)=>{u.set(E[x],N)}),u}),{scrollLeftRef:h,listWidthRef:i}=Wo({columnsRef:te(e,"columns"),renderColRef:te(e,"renderCol"),renderItemWithColsRef:te(e,"renderItemWithCols")}),b=B(null),p=B(void 0),y=new Map,m=T(()=>{const{items:u,itemSize:x,keyField:E}=e,N=new Ft(u.length,x);return u.forEach((D,q)=>{const A=D[E],K=y.get(A);K!==void 0&&N.add(q,K)}),N}),P=B(0),z=B(0),C=ze(()=>Math.max(m.value.getBound(z.value-ct(e.paddingTop))-1,0)),w=T(()=>{const{value:u}=p;if(u===void 0)return[];const{items:x,itemSize:E}=e,N=C.value,D=Math.min(N+Math.ceil(u/E+1),x.length-1),q=[];for(let A=N;A<=D;++A)q.push(x[A]);return q}),O=(u,x)=>{if(typeof u=="number"){X(u,x,"auto");return}const{left:E,top:N,index:D,key:q,position:A,behavior:K,debounce:U=!0}=u;if(E!==void 0||N!==void 0)X(E,N,K);else if(D!==void 0)V(D,K,U);else if(q!==void 0){const re=d.value.get(q);re!==void 0&&V(re,K,U)}else A==="bottom"?X(0,Number.MAX_SAFE_INTEGER,K):A==="top"&&X(0,0,K)};let k,R=null;function V(u,x,E){const{value:N}=m,D=N.sum(u)+ct(e.paddingTop);if(!E)b.value.scrollTo({left:0,top:D,behavior:x});else{k=u,R!==null&&window.clearTimeout(R),R=window.setTimeout(()=>{k=void 0,R=null},16);const{scrollTop:q,offsetHeight:A}=b.value;if(D>q){const K=N.get(u);D+K<=q+A||b.value.scrollTo({left:0,top:D+K-A,behavior:x})}else b.value.scrollTo({left:0,top:D,behavior:x})}}function X(u,x,E){b.value.scrollTo({left:u,top:x,behavior:E})}function W(u,x){var E,N,D;if(n||e.ignoreItemResize||oe(x.target))return;const{value:q}=m,A=d.value.get(u),K=q.get(A),U=(D=(N=(E=x.borderBoxSize)===null||E===void 0?void 0:E[0])===null||N===void 0?void 0:N.blockSize)!==null&&D!==void 0?D:x.contentRect.height;if(U===K)return;U-e.itemSize===0?y.delete(u):y.set(u,U-e.itemSize);const ie=U-K;if(ie===0)return;q.add(A,ie);const a=b.value;if(a!=null){if(k===void 0){const v=q.sum(A);a.scrollTop>v&&a.scrollBy(0,ie)}else if(A<k)a.scrollBy(0,ie);else if(A===k){const v=q.sum(A);U+v>a.scrollTop+a.offsetHeight&&a.scrollBy(0,ie)}J()}P.value++}const H=!Vo();let ne=!1;function le(u){var x;(x=e.onScroll)===null||x===void 0||x.call(e,u),(!H||!ne)&&J()}function ce(u){var x;if((x=e.onWheel)===null||x===void 0||x.call(e,u),H){const E=b.value;if(E!=null){if(u.deltaX===0&&(E.scrollTop===0&&u.deltaY<=0||E.scrollTop+E.offsetHeight>=E.scrollHeight&&u.deltaY>=0))return;u.preventDefault(),E.scrollTop+=u.deltaY/wt(),E.scrollLeft+=u.deltaX/wt(),J(),ne=!0,ho(()=>{ne=!1})}}}function de(u){if(n||oe(u.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(u.contentRect.height===p.value)return}else if(u.contentRect.height===p.value&&u.contentRect.width===i.value)return;p.value=u.contentRect.height,i.value=u.contentRect.width;const{onResize:x}=e;x!==void 0&&x(u)}function J(){const{value:u}=b;u!=null&&(z.value=u.scrollTop,h.value=u.scrollLeft)}function oe(u){let x=u;for(;x!==null;){if(x.style.display==="none")return!0;x=x.parentElement}return!1}return{listHeight:p,listStyle:{overflow:"auto"},keyToIndex:d,itemsStyle:T(()=>{const{itemResizable:u}=e,x=Le(m.value.sum());return P.value,[e.itemsStyle,{boxSizing:"content-box",width:Le(r.value),height:u?"":x,minHeight:u?x:"",paddingTop:Le(e.paddingTop),paddingBottom:Le(e.paddingBottom)}]}),visibleItemsStyle:T(()=>(P.value,{transform:`translateY(${Le(m.value.sum(C.value))})`})),viewportItems:w,listElRef:b,itemsElRef:B(null),scrollTo:O,handleListResize:de,handleListScroll:le,handleListWheel:ce,handleItemResize:W}},render(){const{itemResizable:e,keyField:o,keyToIndex:n,visibleItemsTag:l}=this;return s(vt,{onResize:this.handleListResize},{default:()=>{var r,d;return s("div",io(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?s("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[s(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:h,renderItemWithCols:i}=this;return this.viewportItems.map(b=>{const p=b[o],y=n.get(p),m=h!=null?s(yt,{index:y,item:b}):void 0,P=i!=null?s(yt,{index:y,item:b}):void 0,z=this.$slots.default({item:b,renderedCols:m,renderedItemWithCols:P,index:y})[0];return e?s(vt,{key:p,onResize:C=>this.handleItemResize(p,C)},{default:()=>z}):(z.key=p,z)})}})]):(d=(r=this.$slots).empty)===null||d===void 0?void 0:d.call(r)])}})}});function Bt(e,o){o&&(Ze(()=>{const{value:n}=e;n&&lt.registerHandler(n,o)}),Oe(e,(n,l)=>{l&&lt.unregisterHandler(l)},{deep:!1}),kt(()=>{const{value:n}=e;n&&lt.unregisterHandler(n)}))}function xt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function it(e){const o=e.filter(n=>n!==void 0);if(o.length!==0)return o.length===1?o[0]:n=>{e.forEach(l=>{l&&l(n)})}}const Uo=he({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),qo=he({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Go=he({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Xo=L("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[_("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[se("+",[_("description",`
 margin-top: 8px;
 `)])]),_("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),_("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Yo=Object.assign(Object.assign({},Ce.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Zo=he({name:"Empty",props:Yo,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n,mergedComponentPropsRef:l}=Ae(e),r=Ce("Empty","-empty",Xo,fo,e,o),{localeRef:d}=Ot("Empty"),h=T(()=>{var y,m,P;return(y=e.description)!==null&&y!==void 0?y:(P=(m=l==null?void 0:l.value)===null||m===void 0?void 0:m.Empty)===null||P===void 0?void 0:P.description}),i=T(()=>{var y,m;return((m=(y=l==null?void 0:l.value)===null||y===void 0?void 0:y.Empty)===null||m===void 0?void 0:m.renderIcon)||(()=>s(qo,null))}),b=T(()=>{const{size:y}=e,{common:{cubicBezierEaseInOut:m},self:{[Y("iconSize",y)]:P,[Y("fontSize",y)]:z,textColor:C,iconColor:w,extraTextColor:O}}=r.value;return{"--n-icon-size":P,"--n-font-size":z,"--n-bezier":m,"--n-text-color":C,"--n-icon-color":w,"--n-extra-text-color":O}}),p=n?He("empty",T(()=>{let y="";const{size:m}=e;return y+=m[0],y}),b,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:i,localizedDescription:T(()=>h.value||d.value.description),cssVars:n?void 0:b,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:n}=this;return n==null||n(),s("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${o}-empty__icon`},e.icon?e.icon():s(zt,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${o}-empty__extra`},e.extra()):null)}}),St=he({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:n,nodePropsRef:l}=ut(ht);return{labelField:n,nodeProps:l,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:n,nodeProps:l,tmNode:{rawNode:r}}=this,d=l==null?void 0:l(r),h=o?o(r,!1):Pe(r[this.labelField],r,!1),i=s("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d==null?void 0:d.class]}),h);return r.render?r.render({node:i,option:r}):n?n({node:i,option:r,selected:!1}):i}});function Jo(e,o){return s(It,{name:"fade-in-scale-up-transition"},{default:()=>e?s(zt,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>s(Uo)}):null})}const Rt=he({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:n,multipleRef:l,valueSetRef:r,renderLabelRef:d,renderOptionRef:h,labelFieldRef:i,valueFieldRef:b,showCheckmarkRef:p,nodePropsRef:y,handleOptionClick:m,handleOptionMouseEnter:P}=ut(ht),z=ze(()=>{const{value:k}=n;return k?e.tmNode.key===k.key:!1});function C(k){const{tmNode:R}=e;R.disabled||m(k,R)}function w(k){const{tmNode:R}=e;R.disabled||P(k,R)}function O(k){const{tmNode:R}=e,{value:V}=z;R.disabled||V||P(k,R)}return{multiple:l,isGrouped:ze(()=>{const{tmNode:k}=e,{parent:R}=k;return R&&R.rawNode.type==="group"}),showCheckmark:p,nodeProps:y,isPending:z,isSelected:ze(()=>{const{value:k}=o,{value:R}=l;if(k===null)return!1;const V=e.tmNode.rawNode[b.value];if(R){const{value:X}=r;return X.has(V)}else return k===V}),labelField:i,renderLabel:d,renderOption:h,handleMouseMove:O,handleMouseEnter:w,handleClick:C}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:n,isPending:l,isGrouped:r,showCheckmark:d,nodeProps:h,renderOption:i,renderLabel:b,handleClick:p,handleMouseEnter:y,handleMouseMove:m}=this,P=Jo(n,e),z=b?[b(o,n),d&&P]:[Pe(o[this.labelField],o,n),d&&P],C=h==null?void 0:h(o),w=s("div",Object.assign({},C,{class:[`${e}-base-select-option`,o.class,C==null?void 0:C.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:d}],style:[(C==null?void 0:C.style)||"",o.style||""],onClick:it([p,C==null?void 0:C.onClick]),onMouseenter:it([y,C==null?void 0:C.onMouseenter]),onMousemove:it([m,C==null?void 0:C.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},z));return o.render?o.render({node:w,option:o,selected:n}):i?i({node:w,option:o,selected:n}):w}}),Qo=L("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[L("scrollbar",`
 max-height: var(--n-height);
 `),L("virtual-list",`
 max-height: var(--n-height);
 `),L("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[_("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),L("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),L("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),_("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),_("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),_("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),_("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),L("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Z("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),se("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),se("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Z("pending",[se("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Z("selected",`
 color: var(--n-option-text-color-active);
 `,[se("&::before",`
 background-color: var(--n-option-color-active);
 `),Z("pending",[se("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 `,[ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),Z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),_("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Tt({enterScale:"0.5"})])])]),en=he({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:n,mergedComponentPropsRef:l}=Ae(e),r=ft("InternalSelectMenu",n,o),d=Ce("InternalSelectMenu","-internal-select-menu",Qo,po,e,te(e,"clsPrefix")),h=B(null),i=B(null),b=B(null),p=T(()=>e.treeMate.getFlattenedNodes()),y=T(()=>mo(p.value)),m=B(null);function P(){const{treeMate:a}=e;let v=null;const{value:G}=e;G===null?v=a.getFirstAvailableNode():(e.multiple?v=a.getNode((G||[])[(G||[]).length-1]):v=a.getNode(G),(!v||v.disabled)&&(v=a.getFirstAvailableNode())),N(v||null)}function z(){const{value:a}=m;a&&!e.treeMate.getNode(a.key)&&(m.value=null)}let C;Oe(()=>e.show,a=>{a?C=Oe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?P():z(),Pt(D)):z()},{immediate:!0}):C==null||C()},{immediate:!0}),kt(()=>{C==null||C()});const w=T(()=>ct(d.value.self[Y("optionHeight",e.size)])),O=T(()=>Fe(d.value.self[Y("padding",e.size)])),k=T(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),R=T(()=>{const a=p.value;return a&&a.length===0}),V=T(()=>{var a,v;return(v=(a=l==null?void 0:l.value)===null||a===void 0?void 0:a.Select)===null||v===void 0?void 0:v.renderEmpty});function X(a){const{onToggle:v}=e;v&&v(a)}function W(a){const{onScroll:v}=e;v&&v(a)}function H(a){var v;(v=b.value)===null||v===void 0||v.sync(),W(a)}function ne(){var a;(a=b.value)===null||a===void 0||a.sync()}function le(){const{value:a}=m;return a||null}function ce(a,v){v.disabled||N(v,!1)}function de(a,v){v.disabled||X(v)}function J(a){var v;Ne(a,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,a)}function oe(a){var v;Ne(a,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,a)}function u(a){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,a),!e.focusable&&a.preventDefault()}function x(){const{value:a}=m;a&&N(a.getNext({loop:!0}),!0)}function E(){const{value:a}=m;a&&N(a.getPrev({loop:!0}),!0)}function N(a,v=!1){m.value=a,v&&D()}function D(){var a,v;const G=m.value;if(!G)return;const ue=y.value(G.key);ue!==null&&(e.virtualScroll?(a=i.value)===null||a===void 0||a.scrollTo({index:ue}):(v=b.value)===null||v===void 0||v.scrollTo({index:ue,elSize:w.value}))}function q(a){var v,G;!((v=h.value)===null||v===void 0)&&v.contains(a.target)&&((G=e.onFocus)===null||G===void 0||G.call(e,a))}function A(a){var v,G;!((v=h.value)===null||v===void 0)&&v.contains(a.relatedTarget)||(G=e.onBlur)===null||G===void 0||G.call(e,a)}Ge(ht,{handleOptionMouseEnter:ce,handleOptionClick:de,valueSetRef:k,pendingTmNodeRef:m,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),Ge(Co,h),Ze(()=>{const{value:a}=b;a&&a.sync()});const K=T(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:v},self:{height:G,borderRadius:ue,color:we,groupHeaderTextColor:fe,actionDividerColor:ae,optionTextColorPressed:ye,optionTextColor:be,optionTextColorDisabled:pe,optionTextColorActive:Me,optionOpacityDisabled:Be,optionCheckColor:Se,actionTextColor:Re,optionColorPending:_e,optionColorActive:$e,loadingColor:Ee,loadingSize:Ie,optionColorActivePending:Te,[Y("optionFontSize",a)]:ve,[Y("optionHeight",a)]:c,[Y("optionPadding",a)]:g}}=d.value;return{"--n-height":G,"--n-action-divider-color":ae,"--n-action-text-color":Re,"--n-bezier":v,"--n-border-radius":ue,"--n-color":we,"--n-option-font-size":ve,"--n-group-header-text-color":fe,"--n-option-check-color":Se,"--n-option-color-pending":_e,"--n-option-color-active":$e,"--n-option-color-active-pending":Te,"--n-option-height":c,"--n-option-opacity-disabled":Be,"--n-option-text-color":be,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":pe,"--n-option-text-color-pressed":ye,"--n-option-padding":g,"--n-option-padding-left":Fe(g,"left"),"--n-option-padding-right":Fe(g,"right"),"--n-loading-color":Ee,"--n-loading-size":Ie}}),{inlineThemeDisabled:U}=e,re=U?He("internal-select-menu",T(()=>e.size[0]),K,e):void 0,ie={selfRef:h,next:x,prev:E,getPendingTmNode:le};return Bt(h,e.onResize),Object.assign({mergedTheme:d,mergedClsPrefix:o,rtlEnabled:r,virtualListRef:i,scrollbarRef:b,itemSize:w,padding:O,flattenedNodes:p,empty:R,mergedRenderEmpty:V,virtualListContainer(){const{value:a}=i;return a==null?void 0:a.listElRef},virtualListContent(){const{value:a}=i;return a==null?void 0:a.itemsElRef},doScroll:W,handleFocusin:q,handleFocusout:A,handleKeyUp:J,handleKeyDown:oe,handleMouseDown:u,handleVirtualListResize:ne,handleVirtualListScroll:H,cssVars:U?void 0:K,themeClass:re==null?void 0:re.themeClass,onRender:re==null?void 0:re.onRender},ie)},render(){const{$slots:e,virtualScroll:o,clsPrefix:n,mergedTheme:l,themeClass:r,onRender:d}=this;return d==null||d(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,r,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Xe(e.header,h=>h&&s("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?s("div",{class:`${n}-base-select-menu__loading`},s(vo,{clsPrefix:n,strokeWidth:20})):this.empty?s("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},bo(e.empty,()=>{var h;return[((h=this.mergedRenderEmpty)===null||h===void 0?void 0:h.call(this))||s(Zo,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})]})):s(go,Object.assign({ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},this.scrollbarProps),{default:()=>o?s(Ko,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?s(St,{key:h.key,clsPrefix:n,tmNode:h}):h.ignored?null:s(Rt,{clsPrefix:n,key:h.key,tmNode:h})}):s("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?s(St,{key:h.key,clsPrefix:n,tmNode:h}):s(Rt,{clsPrefix:n,key:h.key,tmNode:h})))}),Xe(e.action,h=>h&&[s("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},h),s(Go,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function tn(e){const{textColor2:o,primaryColorHover:n,primaryColorPressed:l,primaryColor:r,infoColor:d,successColor:h,warningColor:i,errorColor:b,baseColor:p,borderColor:y,opacityDisabled:m,tagColor:P,closeIconColor:z,closeIconColorHover:C,closeIconColorPressed:w,borderRadiusSmall:O,fontSizeMini:k,fontSizeTiny:R,fontSizeSmall:V,fontSizeMedium:X,heightMini:W,heightTiny:H,heightSmall:ne,heightMedium:le,closeColorHover:ce,closeColorPressed:de,buttonColor2Hover:J,buttonColor2Pressed:oe,fontWeightStrong:u}=e;return Object.assign(Object.assign({},yo),{closeBorderRadius:O,heightTiny:W,heightSmall:H,heightMedium:ne,heightLarge:le,borderRadius:O,opacityDisabled:m,fontSizeTiny:k,fontSizeSmall:R,fontSizeMedium:V,fontSizeLarge:X,fontWeightStrong:u,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:p,colorCheckable:"#0000",colorHoverCheckable:J,colorPressedCheckable:oe,colorChecked:r,colorCheckedHover:n,colorCheckedPressed:l,border:`1px solid ${y}`,textColor:o,color:P,colorBordered:"rgb(250, 250, 252)",closeIconColor:z,closeIconColorHover:C,closeIconColorPressed:w,closeColorHover:ce,closeColorPressed:de,borderPrimary:`1px solid ${j(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:j(r,{alpha:.12}),colorBorderedPrimary:j(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:j(r,{alpha:.12}),closeColorPressedPrimary:j(r,{alpha:.18}),borderInfo:`1px solid ${j(d,{alpha:.3})}`,textColorInfo:d,colorInfo:j(d,{alpha:.12}),colorBorderedInfo:j(d,{alpha:.1}),closeIconColorInfo:d,closeIconColorHoverInfo:d,closeIconColorPressedInfo:d,closeColorHoverInfo:j(d,{alpha:.12}),closeColorPressedInfo:j(d,{alpha:.18}),borderSuccess:`1px solid ${j(h,{alpha:.3})}`,textColorSuccess:h,colorSuccess:j(h,{alpha:.12}),colorBorderedSuccess:j(h,{alpha:.1}),closeIconColorSuccess:h,closeIconColorHoverSuccess:h,closeIconColorPressedSuccess:h,closeColorHoverSuccess:j(h,{alpha:.12}),closeColorPressedSuccess:j(h,{alpha:.18}),borderWarning:`1px solid ${j(i,{alpha:.35})}`,textColorWarning:i,colorWarning:j(i,{alpha:.15}),colorBorderedWarning:j(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:j(i,{alpha:.12}),closeColorPressedWarning:j(i,{alpha:.18}),borderError:`1px solid ${j(b,{alpha:.23})}`,textColorError:b,colorError:j(b,{alpha:.1}),colorBorderedError:j(b,{alpha:.08}),closeIconColorError:b,closeIconColorHoverError:b,closeIconColorPressedError:b,closeColorHoverError:j(b,{alpha:.12}),closeColorPressedError:j(b,{alpha:.18})})}const on={common:wo,self:tn},nn={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},ln=L("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Z("strong",`
 font-weight: var(--n-font-weight-strong);
 `),_("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),_("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),_("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),_("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Z("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[_("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),_("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Z("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Z("icon, avatar",[Z("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Z("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Z("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ke("disabled",[se("&:hover","background-color: var(--n-color-hover-checkable);",[ke("checked","color: var(--n-text-color-hover-checkable);")]),se("&:active","background-color: var(--n-color-pressed-checkable);",[ke("checked","color: var(--n-text-color-pressed-checkable);")])]),Z("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ke("disabled",[se("&:hover","background-color: var(--n-color-checked-hover);"),se("&:active","background-color: var(--n-color-checked-pressed);")])])])]),rn=Object.assign(Object.assign(Object.assign({},Ce.props),nn),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),an=So("n-tag"),at=he({name:"Tag",props:rn,slots:Object,setup(e){const o=B(null),{mergedBorderedRef:n,mergedClsPrefixRef:l,inlineThemeDisabled:r,mergedRtlRef:d,mergedComponentPropsRef:h}=Ae(e),i=T(()=>{var w,O;return e.size||((O=(w=h==null?void 0:h.value)===null||w===void 0?void 0:w.Tag)===null||O===void 0?void 0:O.size)||"medium"}),b=Ce("Tag","-tag",ln,on,e,l);Ge(an,{roundRef:te(e,"round")});function p(){if(!e.disabled&&e.checkable){const{checked:w,onCheckedChange:O,onUpdateChecked:k,"onUpdate:checked":R}=e;k&&k(!w),R&&R(!w),O&&O(!w)}}function y(w){if(e.triggerClickOnClose||w.stopPropagation(),!e.disabled){const{onClose:O}=e;O&&ge(O,w)}}const m={setTextContent(w){const{value:O}=o;O&&(O.textContent=w)}},P=ft("Tag",d,l),z=T(()=>{const{type:w,color:{color:O,textColor:k}={}}=e,R=i.value,{common:{cubicBezierEaseInOut:V},self:{padding:X,closeMargin:W,borderRadius:H,opacityDisabled:ne,textColorCheckable:le,textColorHoverCheckable:ce,textColorPressedCheckable:de,textColorChecked:J,colorCheckable:oe,colorHoverCheckable:u,colorPressedCheckable:x,colorChecked:E,colorCheckedHover:N,colorCheckedPressed:D,closeBorderRadius:q,fontWeightStrong:A,[Y("colorBordered",w)]:K,[Y("closeSize",R)]:U,[Y("closeIconSize",R)]:re,[Y("fontSize",R)]:ie,[Y("height",R)]:a,[Y("color",w)]:v,[Y("textColor",w)]:G,[Y("border",w)]:ue,[Y("closeIconColor",w)]:we,[Y("closeIconColorHover",w)]:fe,[Y("closeIconColorPressed",w)]:ae,[Y("closeColorHover",w)]:ye,[Y("closeColorPressed",w)]:be}}=b.value,pe=Fe(W);return{"--n-font-weight-strong":A,"--n-avatar-size-override":`calc(${a} - 8px)`,"--n-bezier":V,"--n-border-radius":H,"--n-border":ue,"--n-close-icon-size":re,"--n-close-color-pressed":be,"--n-close-color-hover":ye,"--n-close-border-radius":q,"--n-close-icon-color":we,"--n-close-icon-color-hover":fe,"--n-close-icon-color-pressed":ae,"--n-close-icon-color-disabled":we,"--n-close-margin-top":pe.top,"--n-close-margin-right":pe.right,"--n-close-margin-bottom":pe.bottom,"--n-close-margin-left":pe.left,"--n-close-size":U,"--n-color":O||(n.value?K:v),"--n-color-checkable":oe,"--n-color-checked":E,"--n-color-checked-hover":N,"--n-color-checked-pressed":D,"--n-color-hover-checkable":u,"--n-color-pressed-checkable":x,"--n-font-size":ie,"--n-height":a,"--n-opacity-disabled":ne,"--n-padding":X,"--n-text-color":k||G,"--n-text-color-checkable":le,"--n-text-color-checked":J,"--n-text-color-hover-checkable":ce,"--n-text-color-pressed-checkable":de}}),C=r?He("tag",T(()=>{let w="";const{type:O,color:{color:k,textColor:R}={}}=e;return w+=O[0],w+=i.value[0],k&&(w+=`a${gt(k)}`),R&&(w+=`b${gt(R)}`),n.value&&(w+="c"),w}),z,e):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:P,mergedClsPrefix:l,contentRef:o,mergedBordered:n,handleClick:p,handleCloseClick:y,cssVars:r?void 0:z,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender})},render(){var e,o;const{mergedClsPrefix:n,rtlEnabled:l,closable:r,color:{borderColor:d}={},round:h,onRender:i,$slots:b}=this;i==null||i();const p=Xe(b.avatar,m=>m&&s("div",{class:`${n}-tag__avatar`},m)),y=Xe(b.icon,m=>m&&s("div",{class:`${n}-tag__icon`},m));return s("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:l,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:h,[`${n}-tag--avatar`]:p,[`${n}-tag--icon`]:y,[`${n}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},y||p,s("span",{class:`${n}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&r?s(xo,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:h,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?s("div",{class:`${n}-tag__border`,style:{borderColor:d}}):null)}}),sn=se([L("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[L("base-loading",`
 color: var(--n-loading-color);
 `),L("base-selection-tags","min-height: var(--n-height);"),_("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),_("state-border",`
 z-index: 1;
 border-color: #0000;
 `),L("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[_("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),L("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[_("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),L("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[_("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),L("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),L("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[L("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[_("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),_("render-label",`
 color: var(--n-text-color);
 `)]),ke("disabled",[se("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Z("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Z("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),L("base-selection-label","background-color: var(--n-color-active);"),L("base-selection-tags","background-color: var(--n-color-active);")])]),Z("disabled","cursor: not-allowed;",[_("arrow",`
 color: var(--n-arrow-color-disabled);
 `),L("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[L("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),_("render-label",`
 color: var(--n-text-color-disabled);
 `)]),L("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),L("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),L("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[_("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),_("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Z(`${e}-status`,[_("state-border",`border: var(--n-border-${e});`),ke("disabled",[se("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Z("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),L("base-selection-label",`background-color: var(--n-color-active-${e});`),L("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Z("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),L("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),L("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[se("&:last-child","padding-right: 0;"),L("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[_("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),cn=he({name:"InternalSelection",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:n}=Ae(e),l=ft("InternalSelection",n,o),r=B(null),d=B(null),h=B(null),i=B(null),b=B(null),p=B(null),y=B(null),m=B(null),P=B(null),z=B(null),C=B(!1),w=B(!1),O=B(!1),k=Ce("InternalSelection","-internal-selection",sn,To,e,te(e,"clsPrefix")),R=T(()=>e.clearable&&!e.disabled&&(O.value||e.active)),V=T(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Pe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),X=T(()=>{const c=e.selectedOption;if(c)return c[e.labelField]}),W=T(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function H(){var c;const{value:g}=r;if(g){const{value:Q}=d;Q&&(Q.style.width=`${g.offsetWidth}px`,e.maxTagCount!=="responsive"&&((c=P.value)===null||c===void 0||c.sync({showAllItemsBeforeCalculate:!1})))}}function ne(){const{value:c}=z;c&&(c.style.display="none")}function le(){const{value:c}=z;c&&(c.style.display="inline-block")}Oe(te(e,"active"),c=>{c||ne()}),Oe(te(e,"pattern"),()=>{e.multiple&&Pt(H)});function ce(c){const{onFocus:g}=e;g&&g(c)}function de(c){const{onBlur:g}=e;g&&g(c)}function J(c){const{onDeleteOption:g}=e;g&&g(c)}function oe(c){const{onClear:g}=e;g&&g(c)}function u(c){const{onPatternInput:g}=e;g&&g(c)}function x(c){var g;(!c.relatedTarget||!(!((g=h.value)===null||g===void 0)&&g.contains(c.relatedTarget)))&&ce(c)}function E(c){var g;!((g=h.value)===null||g===void 0)&&g.contains(c.relatedTarget)||de(c)}function N(c){oe(c)}function D(){O.value=!0}function q(){O.value=!1}function A(c){!e.active||!e.filterable||c.target!==d.value&&c.preventDefault()}function K(c){J(c)}const U=B(!1);function re(c){if(c.key==="Backspace"&&!U.value&&!e.pattern.length){const{selectedOptions:g}=e;g!=null&&g.length&&K(g[g.length-1])}}let ie=null;function a(c){const{value:g}=r;if(g){const Q=c.target.value;g.textContent=Q,H()}e.ignoreComposition&&U.value?ie=c:u(c)}function v(){U.value=!0}function G(){U.value=!1,e.ignoreComposition&&u(ie),ie=null}function ue(c){var g;w.value=!0,(g=e.onPatternFocus)===null||g===void 0||g.call(e,c)}function we(c){var g;w.value=!1,(g=e.onPatternBlur)===null||g===void 0||g.call(e,c)}function fe(){var c,g;if(e.filterable)w.value=!1,(c=p.value)===null||c===void 0||c.blur(),(g=d.value)===null||g===void 0||g.blur();else if(e.multiple){const{value:Q}=i;Q==null||Q.blur()}else{const{value:Q}=b;Q==null||Q.blur()}}function ae(){var c,g,Q;e.filterable?(w.value=!1,(c=p.value)===null||c===void 0||c.focus()):e.multiple?(g=i.value)===null||g===void 0||g.focus():(Q=b.value)===null||Q===void 0||Q.focus()}function ye(){const{value:c}=d;c&&(le(),c.focus())}function be(){const{value:c}=d;c&&c.blur()}function pe(c){const{value:g}=y;g&&g.setTextContent(`+${c}`)}function Me(){const{value:c}=m;return c}function Be(){return d.value}let Se=null;function Re(){Se!==null&&window.clearTimeout(Se)}function _e(){e.active||(Re(),Se=window.setTimeout(()=>{W.value&&(C.value=!0)},100))}function $e(){Re()}function Ee(c){c||(Re(),C.value=!1)}Oe(W,c=>{c||(C.value=!1)}),Ze(()=>{Io(()=>{const c=p.value;c&&(e.disabled?c.removeAttribute("tabindex"):c.tabIndex=w.value?-1:0)})}),Bt(h,e.onResize);const{inlineThemeDisabled:Ie}=e,Te=T(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:g},self:{fontWeight:Q,borderRadius:Je,color:Qe,placeholderColor:et,textColor:De,paddingSingle:Ve,paddingMultiple:We,caretColor:tt,colorDisabled:ot,textColorDisabled:je,placeholderColorDisabled:xe,colorActive:t,boxShadowFocus:f,boxShadowActive:S,boxShadowHover:M,border:I,borderFocus:F,borderHover:$,borderActive:ee,arrowColor:me,arrowColorDisabled:$t,loadingColor:Et,colorActiveWarning:Lt,boxShadowFocusWarning:Nt,boxShadowActiveWarning:At,boxShadowHoverWarning:Ht,borderWarning:Dt,borderFocusWarning:Vt,borderHoverWarning:Wt,borderActiveWarning:jt,colorActiveError:Kt,boxShadowFocusError:Ut,boxShadowActiveError:qt,boxShadowHoverError:Gt,borderError:Xt,borderFocusError:Yt,borderHoverError:Zt,borderActiveError:Jt,clearColor:Qt,clearColorHover:eo,clearColorPressed:to,clearSize:oo,arrowSize:no,[Y("height",c)]:lo,[Y("fontSize",c)]:ro}}=k.value,Ke=Fe(Ve),Ue=Fe(We);return{"--n-bezier":g,"--n-border":I,"--n-border-active":ee,"--n-border-focus":F,"--n-border-hover":$,"--n-border-radius":Je,"--n-box-shadow-active":S,"--n-box-shadow-focus":f,"--n-box-shadow-hover":M,"--n-caret-color":tt,"--n-color":Qe,"--n-color-active":t,"--n-color-disabled":ot,"--n-font-size":ro,"--n-height":lo,"--n-padding-single-top":Ke.top,"--n-padding-multiple-top":Ue.top,"--n-padding-single-right":Ke.right,"--n-padding-multiple-right":Ue.right,"--n-padding-single-left":Ke.left,"--n-padding-multiple-left":Ue.left,"--n-padding-single-bottom":Ke.bottom,"--n-padding-multiple-bottom":Ue.bottom,"--n-placeholder-color":et,"--n-placeholder-color-disabled":xe,"--n-text-color":De,"--n-text-color-disabled":je,"--n-arrow-color":me,"--n-arrow-color-disabled":$t,"--n-loading-color":Et,"--n-color-active-warning":Lt,"--n-box-shadow-focus-warning":Nt,"--n-box-shadow-active-warning":At,"--n-box-shadow-hover-warning":Ht,"--n-border-warning":Dt,"--n-border-focus-warning":Vt,"--n-border-hover-warning":Wt,"--n-border-active-warning":jt,"--n-color-active-error":Kt,"--n-box-shadow-focus-error":Ut,"--n-box-shadow-active-error":qt,"--n-box-shadow-hover-error":Gt,"--n-border-error":Xt,"--n-border-focus-error":Yt,"--n-border-hover-error":Zt,"--n-border-active-error":Jt,"--n-clear-size":oo,"--n-clear-color":Qt,"--n-clear-color-hover":eo,"--n-clear-color-pressed":to,"--n-arrow-size":no,"--n-font-weight":Q}}),ve=Ie?He("internal-selection",T(()=>e.size[0]),Te,e):void 0;return{mergedTheme:k,mergedClearable:R,mergedClsPrefix:o,rtlEnabled:l,patternInputFocused:w,filterablePlaceholder:V,label:X,selected:W,showTagsPanel:C,isComposing:U,counterRef:y,counterWrapperRef:m,patternInputMirrorRef:r,patternInputRef:d,selfRef:h,multipleElRef:i,singleElRef:b,patternInputWrapperRef:p,overflowRef:P,inputTagElRef:z,handleMouseDown:A,handleFocusin:x,handleClear:N,handleMouseEnter:D,handleMouseLeave:q,handleDeleteOption:K,handlePatternKeyDown:re,handlePatternInputInput:a,handlePatternInputBlur:we,handlePatternInputFocus:ue,handleMouseEnterCounter:_e,handleMouseLeaveCounter:$e,handleFocusout:E,handleCompositionEnd:G,handleCompositionStart:v,onPopoverUpdateShow:Ee,focus:ae,focusInput:ye,blur:fe,blurInput:be,updateCounter:pe,getCounter:Me,getTail:Be,renderLabel:e.renderLabel,cssVars:Ie?void 0:Te,themeClass:ve==null?void 0:ve.themeClass,onRender:ve==null?void 0:ve.onRender}},render(){const{status:e,multiple:o,size:n,disabled:l,filterable:r,maxTagCount:d,bordered:h,clsPrefix:i,ellipsisTagPopoverProps:b,onRender:p,renderTag:y,renderLabel:m}=this;p==null||p();const P=d==="responsive",z=typeof d=="number",C=P||z,w=s(Ro,null,{default:()=>s(ko,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var k,R;return(R=(k=this.$slots).arrow)===null||R===void 0?void 0:R.call(k)}})});let O;if(o){const{labelField:k}=this,R=u=>s("div",{class:`${i}-base-selection-tag-wrapper`,key:u.value},y?y({option:u,handleClose:()=>{this.handleDeleteOption(u)}}):s(at,{size:n,closable:!u.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(u)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>m?m(u,!0):Pe(u[k],u,!0)})),V=()=>(z?this.selectedOptions.slice(0,d):this.selectedOptions).map(R),X=r?s("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,W=P?()=>s("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(at,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let H;if(z){const u=this.selectedOptions.length-d;u>0&&(H=s("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},s(at,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${u}`})))}const ne=P?r?s(bt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:V,counter:W,tail:()=>X}):s(bt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:V,counter:W}):z&&H?V().concat(H):V(),le=C?()=>s("div",{class:`${i}-base-selection-popover`},P?V():this.selectedOptions.map(R)):void 0,ce=C?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},b):null,J=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},s("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,oe=r?s("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},ne,P?null:X,w):s("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:l?void 0:0},ne,w);O=s(zo,null,C?s(Oo,Object.assign({},ce,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>oe,default:le}):oe,J)}else if(r){const k=this.pattern||this.isComposing,R=this.active?!k:!this.selected,V=this.active?!1:this.selected;O=s("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:xt(this.label)},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),V?s("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},s("div",{class:`${i}-base-selection-overlay__wrapper`},y?y({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Pe(this.label,this.selectedOption,!0))):null,R?s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,w)}else O=s("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${i}-base-selection-input`,title:xt(this.label),key:"input"},s("div",{class:`${i}-base-selection-input__content`},y?y({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Pe(this.label,this.selectedOption,!0))):s("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),w);return s("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,h?s("div",{class:`${i}-base-selection__border`}):null,h?s("div",{class:`${i}-base-selection__state-border`}):null)}});function Ye(e){return e.type==="group"}function _t(e){return e.type==="ignored"}function st(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function dn(e,o){return{getIsGroup:Ye,getIgnored:_t,getKey(l){return Ye(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[o]}}}function un(e,o,n,l){if(!o)return e;function r(d){if(!Array.isArray(d))return[];const h=[];for(const i of d)if(Ye(i)){const b=r(i[l]);b.length&&h.push(Object.assign({},i,{[l]:b}))}else{if(_t(i))continue;o(n,i)&&h.push(i)}return h}return r(e)}function hn(e,o,n){const l=new Map;return e.forEach(r=>{Ye(r)?r[n].forEach(d=>{l.set(d[o],d)}):l.set(r[o],r)}),l}const fn=se([L("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),L("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Tt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),vn=Object.assign(Object.assign({},Ce.props),{to:dt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),bn=he({name:"Select",props:vn,slots:Object,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:n,namespaceRef:l,inlineThemeDisabled:r,mergedComponentPropsRef:d}=Ae(e),h=Ce("Select","-select",fn,Lo,e,o),i=B(e.defaultValue),b=te(e,"value"),p=mt(b,i),y=B(!1),m=B(""),P=Ho(e,["items","options"]),z=B([]),C=B([]),w=T(()=>C.value.concat(z.value).concat(P.value)),O=T(()=>{const{filter:t}=e;if(t)return t;const{labelField:f,valueField:S}=e;return(M,I)=>{if(!I)return!1;const F=I[f];if(typeof F=="string")return st(M,F);const $=I[S];return typeof $=="string"?st(M,$):typeof $=="number"?st(M,String($)):!1}}),k=T(()=>{if(e.remote)return P.value;{const{value:t}=w,{value:f}=m;return!f.length||!e.filterable?t:un(t,O.value,f,e.childrenField)}}),R=T(()=>{const{valueField:t,childrenField:f}=e,S=dn(t,f);return Do(k.value,S)}),V=T(()=>hn(w.value,e.valueField,e.childrenField)),X=B(!1),W=mt(te(e,"show"),X),H=B(null),ne=B(null),le=B(null),{localeRef:ce}=Ot("Select"),de=T(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:ce.value.placeholder}),J=[],oe=B(new Map),u=T(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:f,valueField:S}=e;return M=>({[f]:String(M),[S]:M})}return t===!1?!1:f=>Object.assign(t(f),{value:f})});function x(t){const f=e.remote,{value:S}=oe,{value:M}=V,{value:I}=u,F=[];return t.forEach($=>{if(M.has($))F.push(M.get($));else if(f&&S.has($))F.push(S.get($));else if(I){const ee=I($);ee&&F.push(ee)}}),F}const E=T(()=>{if(e.multiple){const{value:t}=p;return Array.isArray(t)?x(t):[]}return null}),N=T(()=>{const{value:t}=p;return!e.multiple&&!Array.isArray(t)?t===null?null:x([t])[0]||null:null}),D=$o(e,{mergedSize:t=>{var f,S;const{size:M}=e;if(M)return M;const{mergedSize:I}=t||{};if(I!=null&&I.value)return I.value;const F=(S=(f=d==null?void 0:d.value)===null||f===void 0?void 0:f.Select)===null||S===void 0?void 0:S.size;return F||"medium"}}),{mergedSizeRef:q,mergedDisabledRef:A,mergedStatusRef:K}=D;function U(t,f){const{onChange:S,"onUpdate:value":M,onUpdateValue:I}=e,{nTriggerFormChange:F,nTriggerFormInput:$}=D;S&&ge(S,t,f),I&&ge(I,t,f),M&&ge(M,t,f),i.value=t,F(),$()}function re(t){const{onBlur:f}=e,{nTriggerFormBlur:S}=D;f&&ge(f,t),S()}function ie(){const{onClear:t}=e;t&&ge(t)}function a(t){const{onFocus:f,showOnFocus:S}=e,{nTriggerFormFocus:M}=D;f&&ge(f,t),M(),S&&fe()}function v(t){const{onSearch:f}=e;f&&ge(f,t)}function G(t){const{onScroll:f}=e;f&&ge(f,t)}function ue(){var t;const{remote:f,multiple:S}=e;if(f){const{value:M}=oe;if(S){const{valueField:I}=e;(t=E.value)===null||t===void 0||t.forEach(F=>{M.set(F[I],F)})}else{const I=N.value;I&&M.set(I[e.valueField],I)}}}function we(t){const{onUpdateShow:f,"onUpdate:show":S}=e;f&&ge(f,t),S&&ge(S,t),X.value=t}function fe(){A.value||(we(!0),X.value=!0,e.filterable&&We())}function ae(){we(!1)}function ye(){m.value="",C.value=J}const be=B(!1);function pe(){e.filterable&&(be.value=!0)}function Me(){e.filterable&&(be.value=!1,W.value||ye())}function Be(){A.value||(W.value?e.filterable?We():ae():fe())}function Se(t){var f,S;!((S=(f=le.value)===null||f===void 0?void 0:f.selfRef)===null||S===void 0)&&S.contains(t.relatedTarget)||(y.value=!1,re(t),ae())}function Re(t){a(t),y.value=!0}function _e(){y.value=!0}function $e(t){var f;!((f=H.value)===null||f===void 0)&&f.$el.contains(t.relatedTarget)||(y.value=!1,re(t),ae())}function Ee(){var t;(t=H.value)===null||t===void 0||t.focus(),ae()}function Ie(t){var f;W.value&&(!((f=H.value)===null||f===void 0)&&f.$el.contains(No(t))||ae())}function Te(t){if(!Array.isArray(t))return[];if(u.value)return Array.from(t);{const{remote:f}=e,{value:S}=V;if(f){const{value:M}=oe;return t.filter(I=>S.has(I)||M.has(I))}else return t.filter(M=>S.has(M))}}function ve(t){c(t.rawNode)}function c(t){if(A.value)return;const{tag:f,remote:S,clearFilterAfterSelect:M,valueField:I}=e;if(f&&!S){const{value:F}=C,$=F[0]||null;if($){const ee=z.value;ee.length?ee.push($):z.value=[$],C.value=J}}if(S&&oe.value.set(t[I],t),e.multiple){const F=Te(p.value),$=F.findIndex(ee=>ee===t[I]);if(~$){if(F.splice($,1),f&&!S){const ee=g(t[I]);~ee&&(z.value.splice(ee,1),M&&(m.value=""))}}else F.push(t[I]),M&&(m.value="");U(F,x(F))}else{if(f&&!S){const F=g(t[I]);~F?z.value=[z.value[F]]:z.value=J}Ve(),ae(),U(t[I],t)}}function g(t){return z.value.findIndex(S=>S[e.valueField]===t)}function Q(t){W.value||fe();const{value:f}=t.target;m.value=f;const{tag:S,remote:M}=e;if(v(f),S&&!M){if(!f){C.value=J;return}const{onCreate:I}=e,F=I?I(f):{[e.labelField]:f,[e.valueField]:f},{valueField:$,labelField:ee}=e;P.value.some(me=>me[$]===F[$]||me[ee]===F[ee])||z.value.some(me=>me[$]===F[$]||me[ee]===F[ee])?C.value=J:C.value=[F]}}function Je(t){t.stopPropagation();const{multiple:f,tag:S,remote:M,clearCreatedOptionsOnClear:I}=e;!f&&e.filterable&&ae(),S&&!M&&I&&(z.value=J),ie(),f?U([],[]):U(null,null)}function Qe(t){!Ne(t,"action")&&!Ne(t,"empty")&&!Ne(t,"header")&&t.preventDefault()}function et(t){G(t)}function De(t){var f,S,M,I,F;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((f=H.value)===null||f===void 0)&&f.isComposing)){if(W.value){const $=(S=le.value)===null||S===void 0?void 0:S.getPendingTmNode();$?ve($):e.filterable||(ae(),Ve())}else if(fe(),e.tag&&be.value){const $=C.value[0];if($){const ee=$[e.valueField],{value:me}=p;e.multiple&&Array.isArray(me)&&me.includes(ee)||c($)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;W.value&&((M=le.value)===null||M===void 0||M.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;W.value?(I=le.value)===null||I===void 0||I.next():fe();break;case"Escape":W.value&&(Ao(t),ae()),(F=H.value)===null||F===void 0||F.focus();break}}function Ve(){var t;(t=H.value)===null||t===void 0||t.focus()}function We(){var t;(t=H.value)===null||t===void 0||t.focusInput()}function tt(){var t;W.value&&((t=ne.value)===null||t===void 0||t.syncPosition())}ue(),Oe(te(e,"options"),ue);const ot={focus:()=>{var t;(t=H.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=H.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=H.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=H.value)===null||t===void 0||t.blurInput()}},je=T(()=>{const{self:{menuBoxShadow:t}}=h.value;return{"--n-menu-box-shadow":t}}),xe=r?He("select",void 0,je,e):void 0;return Object.assign(Object.assign({},ot),{mergedStatus:K,mergedClsPrefix:o,mergedBordered:n,namespace:l,treeMate:R,isMounted:Eo(),triggerRef:H,menuRef:le,pattern:m,uncontrolledShow:X,mergedShow:W,adjustedTo:dt(e),uncontrolledValue:i,mergedValue:p,followerRef:ne,localizedPlaceholder:de,selectedOption:N,selectedOptions:E,mergedSize:q,mergedDisabled:A,focused:y,activeWithoutMenuOpen:be,inlineThemeDisabled:r,onTriggerInputFocus:pe,onTriggerInputBlur:Me,handleTriggerOrMenuResize:tt,handleMenuFocus:_e,handleMenuBlur:$e,handleMenuTabOut:Ee,handleTriggerClick:Be,handleToggle:ve,handleDeleteOption:c,handlePatternInput:Q,handleClear:Je,handleTriggerBlur:Se,handleTriggerFocus:Re,handleKeydown:De,handleMenuAfterLeave:ye,handleMenuClickOutside:Ie,handleMenuScroll:et,handleMenuKeydown:De,handleMenuMousedown:Qe,mergedTheme:h,cssVars:r?void 0:je,themeClass:xe==null?void 0:xe.themeClass,onRender:xe==null?void 0:xe.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(Po,null,{default:()=>[s(Fo,null,{default:()=>s(cn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,o;return[(o=(e=this.$slots).arrow)===null||o===void 0?void 0:o.call(e)]}})}),s(Mo,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===dt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(It,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,o,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Bo(s(en,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(o=this.menuProps)===null||o===void 0?void 0:o.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var l,r;return[(r=(l=this.$slots).empty)===null||r===void 0?void 0:r.call(l)]},header:()=>{var l,r;return[(r=(l=this.$slots).header)===null||r===void 0?void 0:r.call(l)]},action:()=>{var l,r;return[(r=(l=this.$slots).action)===null||r===void 0?void 0:r.call(l)]}}),this.displayDirective==="show"?[[_o,this.mergedShow],[pt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[pt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Go as F,en as N,Ko as V,bn as a,at as b,dn as c,it as m};
