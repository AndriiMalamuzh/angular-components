import{$a as F,Ha as f,Ia as S,Ja as k,La as I,Ma as P,Na as r,Oa as a,Q as C,Qa as $,Ra as b,Sa as h,Ta as c,Ua as p,V as v,W as _,Za as N,_a as j,bb as O,da as y,ea as D,fa as d,hb as B,ka as g,la as T,pa as w,ta as s,va as M,za as E}from"./chunk-CXWNPTJP.js";var V=["*"],G=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=s({type:n,selectors:[["app-example"]],ngContentSelectors:V,decls:2,vars:0,consts:[[1,"example"]],template:function(e,t){e&1&&(c(),r(0,"div",0),p(1),a())},styles:[".example[_ngcontent-%COMP%]{border:1px solid #CCC;border-radius:15px;overflow:hidden}"]})};var q=["*"];function Q(n,o){n&1&&(r(0,"div",0),p(1),a())}var m=class n{label=y.required();active=d(!1);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=s({type:n,selectors:[["app-tab"]],inputs:{label:[1,"label"]},ngContentSelectors:q,decls:1,vars:1,consts:[[1,"tab-content"]],template:function(e,t){e&1&&(c(),E(0,Q,2,0,"div",0)),e&2&&S(t.active()?0:-1)},styles:[".tab-content[_ngcontent-%COMP%]{padding:15px}"],changeDetection:0})};var u=class n{el=C(D);renderer=C(T);className="ripple-wrap";onClick(o){let e=this.el.nativeElement.getBoundingClientRect(),t=this.renderer.createElement("span");this.renderer.addClass(t,"ripple");let i=Math.sqrt(e.width**2+e.height**2)*2,l=o.clientX-e.left-i/2,A=o.clientY-e.top-i/2;this.renderer.setStyle(t,"width",`${i}px`),this.renderer.setStyle(t,"height",`${i}px`),this.renderer.setStyle(t,"top",`${A}px`),this.renderer.setStyle(t,"left",`${l}px`),this.renderer.appendChild(this.el.nativeElement,t),setTimeout(()=>{this.renderer.removeChild(this.el.nativeElement,t)},1e3)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=M({type:n,selectors:[["","ripple",""]],hostVars:2,hostBindings:function(e,t){e&1&&b("click",function(l){return t.onClick(l)}),e&2&&f(t.className)}})};var X=["*"],Y=n=>({active:n});function z(n,o){if(n&1){let e=$();r(0,"button",2),b("click",function(){let i=v(e).$index,l=h();return _(l.selectTab(i))}),F(1),a()}if(n&2){let e=o.$implicit,t=o.$index,i=h();f(B(3,Y,i.selectedIndex()===t)),g(),O(" ",e.label()," ")}}var H=class n{tabs=w(m);selectedIndex=d(0);ngAfterContentInit(){this.tabs()?.length&&this.selectTab(0)}selectTab(o){this.selectedIndex.set(o),this.tabs().forEach((e,t)=>e.active.set(t===o))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=s({type:n,selectors:[["app-tab-group"]],contentQueries:function(e,t,i){e&1&&N(i,t.tabs,m,4),e&2&&j()},ngContentSelectors:X,decls:4,vars:0,consts:[[1,"tab-buttons"],["type","button","ripple","",1,"tab-button",3,"class"],["type","button","ripple","",1,"tab-button",3,"click"]],template:function(e,t){e&1&&(c(),r(0,"div",0),I(1,z,2,5,"button",1,k),a(),p(3)),e&2&&(g(),P(t.tabs()))},dependencies:[u],styles:['.tab-buttons[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid #CCC;overflow:auto;-ms-overflow-style:none;scrollbar-width:none}.tab-buttons[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.tab-button[_ngcontent-%COMP%]{position:relative;height:48px;min-width:90px;padding:0 15px;font-size:14px;text-align:center;background:none;border:none;cursor:pointer;flex-shrink:0}.tab-button.active[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background:var(--color-primary)}@media (hover: hover){.tab-button[_ngcontent-%COMP%]:hover{background:#f4f4f4}}'],changeDetection:0})};export{G as a,m as b,u as c,H as d};
