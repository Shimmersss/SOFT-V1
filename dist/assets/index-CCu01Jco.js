import{m as X,p as Y,s as Z,q as l,v as w,x,y as p,d as g,z as E,A as F,D as _,E as tt,G as et,H as M,I as T,J as it,K as ot,O as nt,P,Q as b,R as rt,o as d,c as f,S as j,a as t,_ as st,t as u,b as m,w as v,u as a,N as k,F as z,r as y,f as $,h as S,T as lt,j as at}from"./index-BxtL9i4V.js";import{R as ct,B as dt}from"./RocketOutline-DSCgvLe1.js";import{P as ut}from"./PeopleOutline-DkL_p3r6.js";import{N as I,a as N}from"./Grid-CXr98Uuh.js";let R=!1;function ht(){if(X&&window.CSS&&!R&&(R=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function mt(e){const{textColor3:n,infoColor:s,errorColor:h,successColor:r,warningColor:c,textColor1:o,textColor2:i,railColor:C,fontWeightStrong:O,fontSize:B}=e;return Object.assign(Object.assign({},Z),{contentFontSize:B,titleFontWeight:O,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${s}`,circleBorderError:`2px solid ${h}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${c}`,iconColor:n,iconColorInfo:s,iconColorError:h,iconColorSuccess:r,iconColorWarning:c,titleTextColor:o,contentTextColor:i,metaTextColor:n,lineColor:C})}const pt={common:Y,self:mt},V=1.25,vt=l("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${V};
`,[w("horizontal",`
 flex-direction: row;
 `,[x(">",[l("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[w("dashed-line-type",[x(">",[l("timeline-item-timeline",[p("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),x(">",[l("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[x(">",[p("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),l("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[p("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),w("right-placement",[l("timeline-item",[l("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),w("left-placement",[l("timeline-item",[l("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 left: 0;
 `)])]),l("timeline-item",`
 position: relative;
 `,[x("&:last-child",[l("timeline-item-timeline",[p("line",`
 display: none;
 `)]),l("timeline-item-content",[p("meta",`
 margin-bottom: 0;
 `)])]),l("timeline-item-content",[p("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),p("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),p("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),w("dashed-line-type",[l("timeline-item-timeline",[p("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),l("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${V} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[p("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),p("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),p("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ft=Object.assign(Object.assign({},F.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),H=tt("n-timeline"),_t=g({name:"Timeline",props:ft,setup(e,{slots:n}){const{mergedClsPrefixRef:s}=E(e),h=F("Timeline","-timeline",vt,pt,e,s);return et(H,{props:e,mergedThemeRef:h,mergedClsPrefixRef:s}),()=>{const{value:r}=s;return _("div",{class:[`${r}-timeline`,e.horizontal&&`${r}-timeline--horizontal`,`${r}-timeline--${e.size}-size`,!e.horizontal&&`${r}-timeline--${e.itemPlacement}-placement`]},n)}}}),gt={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},kt=g({name:"TimelineItem",props:gt,slots:Object,setup(e){const n=it(H);n||ot("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),ht();const{inlineThemeDisabled:s}=E(),h=P(()=>{const{props:{size:c,iconSize:o},mergedThemeRef:i}=n,{type:C}=e,{self:{titleTextColor:O,contentTextColor:B,metaTextColor:W,lineColor:A,titleFontWeight:D,contentFontSize:K,[b("iconSize",c)]:L,[b("titleMargin",c)]:G,[b("titleFontSize",c)]:q,[b("circleBorder",C)]:J,[b("iconColor",C)]:Q},common:{cubicBezierEaseInOut:U}}=i.value;return{"--n-bezier":U,"--n-circle-border":J,"--n-icon-color":Q,"--n-content-font-size":K,"--n-content-text-color":B,"--n-line-color":A,"--n-meta-text-color":W,"--n-title-font-size":q,"--n-title-font-weight":D,"--n-title-margin":G,"--n-title-text-color":O,"--n-icon-size":rt(o)||L}}),r=s?nt("timeline-item",P(()=>{const{props:{size:c,iconSize:o}}=n,{type:i}=e;return`${c[0]}${o||"a"}${i[0]}`}),h,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:s?void 0:h,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:s,$slots:h}=this;return s==null||s(),_("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},_("div",{class:`${e}-timeline-item-timeline`},_("div",{class:`${e}-timeline-item-timeline__line`}),M(h.icon,r=>r?_("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},r):_("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),_("div",{class:`${e}-timeline-item-content`},M(h.header,r=>r||this.title?_("div",{class:`${e}-timeline-item-content__title`},r||this.title):null),_("div",{class:`${e}-timeline-item-content__content`},T(h.default,()=>[this.content])),_("div",{class:`${e}-timeline-item-content__meta`},T(h.footer,()=>[this.time]))))}}),wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},xt=j('<path d="M304 384v-24c0-29 31.54-56.43 52-76c28.84-27.57 44-64.61 44-108c0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108c20.35 19.21 52 46.7 52 76v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 480h64"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 432h96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 384V256"></path><path d="M294 240s-21.51 16-38 16s-38-16-38-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',5),bt=[xt],Ct=g({name:"BulbOutline",render:function(n,s){return d(),f("svg",wt,bt)}}),zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},yt=j('<rect x="32" y="80" width="448" height="256" rx="16" ry="16" transform="rotate(180 256 208)" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 384h384"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 432h320"></path><circle cx="256" cy="208" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M480 160a80 80 0 0 1-80-80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M32 160a80 80 0 0 0 80-80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M480 256a80 80 0 0 0-80 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M32 256a80 80 0 0 1 80 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',8),$t=[yt],St=g({name:"CashOutline",render:function(n,s){return d(),f("svg",zt,$t)}}),jt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ot=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M160 368L32 256l128-112"},null,-1),Bt=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 368l128-112l-128-112"},null,-1),Mt=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M304 96l-96 320"},null,-1),Tt=[Ot,Bt,Mt],Pt=g({name:"CodeSlashOutline",render:function(n,s){return d(),f("svg",jt,Tt)}}),It={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Nt=t("path",{d:"M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Rt=[Nt],Vt=g({name:"HeartOutline",render:function(n,s){return d(),f("svg",It,Rt)}}),Et={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ft=t("path",{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 0 1-6.14-.32a124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25z",fill:"currentColor"},null,-1),Ht=t("path",{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z",fill:"currentColor"},null,-1),Wt=[Ft,Ht],At=g({name:"PersonCircleOutline",render:function(n,s){return d(),f("svg",Et,Wt)}}),Dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Kt=j('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 464h160"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 464V336"></path><path d="M384 224c0-50.64-.08-134.63-.12-160a16 16 0 0 0-16-16l-223.79.26a16 16 0 0 0-16 15.95c0 30.58-.13 129.17-.13 159.79c0 64.28 83 112 128 112S384 288.28 384 224z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M128 96H48v16c0 55.22 33.55 112 80 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M384 96h80v16c0 55.22-33.55 112-80 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',5),Lt=[Kt],Gt=g({name:"TrophyOutline",render:function(n,s){return d(),f("svg",Dt,Lt)}}),qt={class:"about-page"},Jt={class:"section"},Qt={class:"container"},Ut={class:"section__title"},Xt={class:"section",style:{background:"#f5f5f5"}},Yt={class:"container"},Zt={class:"section__title"},te={class:"timeline-content"},ee={class:"section"},ie={class:"container"},oe={class:"section__title"},ne={class:"org-chart"},re={class:"org-level"},se={class:"org-box ceo"},le={class:"org-level"},ae={class:"org-box cto"},ce={class:"org-box coo"},de={class:"org-box cfo"},ue={class:"section",style:{background:"#f5f5f5"}},he={class:"container"},me={class:"section__title"},pe={class:"team-card"},ve={class:"team-avatar"},fe=["src","alt"],_e={class:"team-position"},ge={class:"team-bio"},ke={class:"section"},we={class:"container"},xe={class:"section__title"},be={class:"honor-card"},Ce={class:"section",style:{background:"#f5f5f5"}},ze={class:"container"},ye={class:"section__title"},$e={class:"culture-grid"},Se={__name:"index",setup(e){const n=$([{year:"2014",title:"公司成立",description:"公司正式成立，专注于企业级软件开发"},{year:"2016",title:"业务扩张",description:"业务范围扩展到云计算和数据分析领域"},{year:"2018",title:"获得投资",description:"获得A轮融资，加速产品研发和市场拓展"},{year:"2020",title:"战略升级",description:"全面升级战略布局，推出AI解决方案"},{year:"2022",title:"行业领先",description:"成为行业领军企业，服务客户超过500家"},{year:"2024",title:"创新发展",description:"持续创新，引领行业发展新趋势"}]),s=$([{id:1,name:"张三",position:"创始人 & CEO",bio:"15年行业经验，曾任职于多家知名科技公司",avatar:"https://picsum.photos/150/150"},{id:2,name:"李四",position:"CTO",bio:"技术专家，拥有多项专利技术",avatar:"https://picsum.photos/150/150"},{id:3,name:"王五",position:"COO",bio:"运营专家，擅长团队管理和业务拓展",avatar:"https://picsum.photos/150/150"},{id:4,name:"赵六",position:"技术总监",bio:"全栈工程师，精通多种技术栈",avatar:"https://picsum.photos/150/150"}]),h=$([{id:1,title:"最佳服务商奖",year:"2023"},{id:2,title:"技术创新奖",year:"2022"},{id:3,title:"优秀企业奖",year:"2021"},{id:4,title:"行业领袖奖",year:"2020"}]),r=$([{id:1,title:"客户至上",description:"以客户需求为中心，提供优质服务",icon:Vt,color:"#ff4d4f"},{id:2,title:"创新驱动",description:"持续创新，引领行业技术发展",icon:Ct,color:"#1890ff"},{id:3,title:"追求卓越",description:"精益求精，打造高品质产品",icon:ct,color:"#52c41a"},{id:4,title:"团队合作",description:"团结协作，共创辉煌",icon:ut,color:"#faad14"}]);return(c,o)=>(d(),f("div",qt,[t("section",Jt,[t("div",Qt,[t("h2",Ut,u(c.$t("about.intro")),1),o[0]||(o[0]=j('<div class="intro-content" data-v-a77b5f4d><div class="intro-text" data-v-a77b5f4d><p data-v-a77b5f4d>公司成立于2014年，是一家专注于企业级解决方案的科技公司。我们拥有一支经验丰富、技术精湛的团队，致力于为客户提供高质量、创新性的技术解决方案。</p><p data-v-a77b5f4d>经过多年的发展，公司已经成为行业内的领军企业，服务了众多知名企业客户。我们的使命是通过技术创新，帮助客户实现数字化转型，提升核心竞争力。</p><div class="intro-stats" data-v-a77b5f4d><div class="stat-item" data-v-a77b5f4d><div class="stat-number" data-v-a77b5f4d>10+</div><div class="stat-label" data-v-a77b5f4d>年行业经验</div></div><div class="stat-item" data-v-a77b5f4d><div class="stat-number" data-v-a77b5f4d>500+</div><div class="stat-label" data-v-a77b5f4d>服务客户</div></div><div class="stat-item" data-v-a77b5f4d><div class="stat-number" data-v-a77b5f4d>100+</div><div class="stat-label" data-v-a77b5f4d>技术团队</div></div><div class="stat-item" data-v-a77b5f4d><div class="stat-number" data-v-a77b5f4d>50+</div><div class="stat-label" data-v-a77b5f4d>成功案例</div></div></div></div><div class="intro-image" data-v-a77b5f4d><img src="https://picsum.photos/600/400?random=1" alt="公司简介" data-v-a77b5f4d></div></div>',1))])]),t("section",Xt,[t("div",Yt,[t("h2",Zt,u(c.$t("about.history")),1),m(a(_t),null,{default:v(()=>[(d(!0),f(z,null,y(n.value,i=>(d(),S(a(kt),{key:i.year,title:i.year},{default:v(()=>[t("div",te,[t("h3",null,u(i.title),1),t("p",null,u(i.description),1)])]),_:2},1032,["title"]))),128))]),_:1})])]),t("section",ee,[t("div",ie,[t("h2",oe,u(c.$t("about.organization")),1),t("div",ne,[t("div",re,[t("div",se,[m(a(k),{size:"40"},{default:v(()=>[m(a(At))]),_:1}),o[1]||(o[1]=t("h4",null,"CEO",-1)),o[2]||(o[2]=t("p",null,"首席执行官",-1))])]),t("div",le,[t("div",ae,[m(a(k),{size:"32"},{default:v(()=>[m(a(Pt))]),_:1}),o[3]||(o[3]=t("h4",null,"CTO",-1)),o[4]||(o[4]=t("p",null,"技术总监",-1))]),t("div",ce,[m(a(k),{size:"32"},{default:v(()=>[m(a(dt))]),_:1}),o[5]||(o[5]=t("h4",null,"COO",-1)),o[6]||(o[6]=t("p",null,"运营总监",-1))]),t("div",de,[m(a(k),{size:"32"},{default:v(()=>[m(a(St))]),_:1}),o[7]||(o[7]=t("h4",null,"CFO",-1)),o[8]||(o[8]=t("p",null,"财务总监",-1))])])])])]),t("section",ue,[t("div",he,[t("h2",me,u(c.$t("about.team")),1),m(a(I),{"x-gap":24,"y-gap":24,cols:4},{default:v(()=>[(d(!0),f(z,null,y(s.value,i=>(d(),S(a(N),{key:i.id},{default:v(()=>[t("div",pe,[t("div",ve,[t("img",{src:i.avatar,alt:i.name},null,8,fe)]),t("h3",null,u(i.name),1),t("p",_e,u(i.position),1),t("p",ge,u(i.bio),1)])]),_:2},1024))),128))]),_:1})])]),t("section",ke,[t("div",we,[t("h2",xe,u(c.$t("about.honors")),1),m(a(I),{"x-gap":24,"y-gap":24,cols:4},{default:v(()=>[(d(!0),f(z,null,y(h.value,i=>(d(),S(a(N),{key:i.id},{default:v(()=>[t("div",be,[m(a(k),{size:"48",color:"#ffd700"},{default:v(()=>[m(a(Gt))]),_:1}),t("h3",null,u(i.title),1),t("p",null,u(i.year),1)])]),_:2},1024))),128))]),_:1})])]),t("section",Ce,[t("div",ze,[t("h2",ye,u(c.$t("about.culture")),1),t("div",$e,[(d(!0),f(z,null,y(r.value,i=>(d(),f("div",{key:i.id,class:"culture-item"},[t("div",{class:"culture-icon",style:lt({backgroundColor:i.color})},[m(a(k),{size:"32",color:"#fff"},{default:v(()=>[(d(),S(at(i.icon)))]),_:2},1024)],4),t("h3",null,u(i.title),1),t("p",null,u(i.description),1)]))),128))])])])]))}},Te=st(Se,[["__scopeId","data-v-a77b5f4d"]]);export{Te as default};
