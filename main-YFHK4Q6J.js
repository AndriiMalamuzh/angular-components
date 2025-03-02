import{a as q}from"./chunk-YDKRRJEK.js";import{a as z,b as R,c as B,d as $}from"./chunk-AXLZEKVE.js";import{a as g}from"./chunk-EVZ6LSJ2.js";import{b as U}from"./chunk-DILYXV3L.js";import"./chunk-FEDDO43E.js";import{Bb as H,Eb as A,Fb as L,Ga as c,Gb as j,Ja as u,K as w,Na as D,Oa as E,Pa as o,Q as s,Qa as r,Ra as p,Ta as l,cb as v,da as P,db as T,fa as I,jb as N,ka as d,kb as h,pb as F,ua as a}from"./chunk-VG3QAJPC.js";import"./chunk-FDERIQAA.js";var Z=[{path:"",loadComponent:()=>import("./chunk-3XIEMSLO.js").then(e=>e.HomepageComponent)},{path:"badge",loadComponent:()=>import("./chunk-7NOHLOW7.js").then(e=>e.BadgeExampleComponent)},{path:"button",loadComponent:()=>import("./chunk-UUHBGKWV.js").then(e=>e.ButtonExampleComponent)},{path:"checkbox",loadComponent:()=>import("./chunk-6DKGI3J3.js").then(e=>e.CheckboxExampleComponent)},{path:"form-field",loadComponent:()=>import("./chunk-GRCLVLRQ.js").then(e=>e.FormFieldExampleComponent)},{path:"icon",loadComponent:()=>import("./chunk-C4BBEJGI.js").then(e=>e.IconExampleComponent)},{path:"input",loadComponent:()=>import("./chunk-44PGBBGS.js").then(e=>e.InputExampleComponent)},{path:"radio-button",loadComponent:()=>import("./chunk-HOZ4QH5C.js").then(e=>e.RadioExampleComponent)},{path:"ripple",loadComponent:()=>import("./chunk-FPZXM57D.js").then(e=>e.RippleExampleComponent)},{path:"select",loadComponent:()=>import("./chunk-S4VZ6HAB.js").then(e=>e.SelectExampleComponent)},{path:"slide-toggle",loadComponent:()=>import("./chunk-W6M6QQWJ.js").then(e=>e.SlideToggleExampleComponent)},{path:"tabs",loadComponent:()=>import("./chunk-W3WX33HU.js").then(e=>e.TabsExampleComponent)}];var G={providers:[F({eventCoalescing:!0}),$(Z),A(L()),U({coreLibraryLoader:()=>import("./chunk-ZL4FTUGN.js"),lineNumbersLoader:()=>import("./chunk-GRPIRCAI.js"),languages:{typescript:()=>import("./chunk-FPA3GB2X.js"),css:()=>import("./chunk-ETQCJQ4G.js"),xml:()=>import("./chunk-XCX5WJED.js")}})]};var m=class e{isOpenSignal=I(!1);onOpenSidebar(){document.body.classList.add("no-scroll"),this.isOpenSignal.set(!0)}onCloseSidebar(){document.body.classList.remove("no-scroll"),this.isOpenSignal.set(!1)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})};var f=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-title"]],decls:2,vars:0,consts:[[1,"main-title"]],template:function(t,i){t&1&&(o(0,"h2",0),v(1,"Angular Components"),r())},styles:[".main-title[_ngcontent-%COMP%]{margin:0;font-size:18px;line-height:1;text-transform:uppercase}"]})};var y=class e{sidebarService=s(m);onClose(){this.sidebarService.onCloseSidebar()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-sidebar-header"]],decls:4,vars:1,consts:[[1,"sidebar-header"],["type","button",1,"sidebar-header__button",3,"click"],["name","close",3,"size"]],template:function(t,i){t&1&&(o(0,"div",0),p(1,"app-title"),o(2,"button",1),l("click",function(){return i.onClose()}),p(3,"app-icon",2),r()()),t&2&&(d(3),c("size",30))},dependencies:[f,g],styles:[".sidebar-header[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 575px){.sidebar-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}.sidebar-header__button[_ngcontent-%COMP%]{padding:0;margin:0;background:none;border:none}}"]})};var J=e=>({opened:e}),x=class e{sidebarService=s(m);isOpen=this.sidebarService.isOpenSignal;onCloseSidebar(){this.sidebarService.onCloseSidebar()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-sidebar-overlay"]],decls:1,vars:4,consts:[[1,"sidebar-overlay",3,"click"]],template:function(t,i){t&1&&(o(0,"div",0),l("click",function(){return i.onCloseSidebar()}),r()),t&2&&u(h(2,J,i.isOpen()))},styles:[".sidebar-overlay[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 991px){.sidebar-overlay[_ngcontent-%COMP%]{display:block;opacity:0;visibility:hidden;position:fixed;inset:0;background:#00000080;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);z-index:999998;transition:.3s ease-in-out}.sidebar-overlay.opened[_ngcontent-%COMP%]{opacity:1;visibility:visible}}"]})};var K=()=>({exact:!0}),S=class e{sidebarService=s(m);item=P.required();onCloseSidebar(){this.sidebarService.onCloseSidebar()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-sidebar-item"]],inputs:{item:[1,"item"]},decls:2,vars:4,consts:[["routerLinkActive","active",1,"sidebar-item",3,"click","routerLink","routerLinkActiveOptions"]],template:function(t,i){t&1&&(o(0,"a",0),l("click",function(){return i.onCloseSidebar()}),v(1),r()),t&2&&(c("routerLink",i.item().link)("routerLinkActiveOptions",N(3,K)),d(),T(i.item().title))},dependencies:[R,B],styles:[".sidebar-item[_ngcontent-%COMP%]{display:block;font-size:16px;color:#333;padding:15px;text-decoration:none;border-radius:100px}.sidebar-item.active[_ngcontent-%COMP%]{background:rgba(var(--color-primary-rgb),.15);color:var(--color-primary)}@media (hover: hover){.sidebar-item[_ngcontent-%COMP%]:hover{background:#eee}}"]})};var Q=e=>({opened:e}),V=(e,n)=>n.title;function W(e,n){if(e&1&&p(0,"app-sidebar-item",1),e&2){let t=n.$implicit;c("item",t)}}var _=class e{sidebarService=s(m);menu=q;isOpen=this.sidebarService.isOpenSignal;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-sidebar"]],decls:5,vars:4,consts:[[1,"sidebar"],[3,"item"]],template:function(t,i){t&1&&(o(0,"div",0),p(1,"app-sidebar-header"),D(2,W,1,1,"app-sidebar-item",1,V),r(),p(4,"app-sidebar-overlay")),t&2&&(u(h(2,Q,i.isOpen())),d(2),E(i.menu))},dependencies:[H,y,x,S],styles:[".sidebar[_ngcontent-%COMP%]{position:sticky;top:0;padding:16px 8px;background:#fff;width:var(--sidebar-width);height:100vh;overflow:auto;border-right:1px solid #CCC;z-index:999999;-ms-overflow-style:none;scrollbar-width:none}.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}@media screen and (max-width: 991px){.sidebar[_ngcontent-%COMP%]{position:fixed;left:calc(0px - var(--sidebar-width));transition:.3s ease-in-out}.sidebar.opened[_ngcontent-%COMP%]{left:0}}@media screen and (max-width: 575px){.sidebar[_ngcontent-%COMP%]{width:100%;left:-100%}}"]})};var M=class e{sidebarService=s(m);onOpenSidebar(){this.sidebarService.onOpenSidebar()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-header"]],decls:4,vars:1,consts:[[1,"header"],["type","button",1,"header__button",3,"click"],["name","menu",3,"size"]],template:function(t,i){t&1&&(o(0,"div",0)(1,"button",1),l("click",function(){return i.onOpenSidebar()}),p(2,"app-icon",2),r(),p(3,"app-title"),r()),t&2&&(d(2),c("size",30))},dependencies:[g,f],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:15px 30px;border-bottom:1px solid #CCC;z-index:1}.header__button[_ngcontent-%COMP%]{display:none;padding:0;margin:0;background:none;border:none}@media screen and (max-width: 991px){.header__button[_ngcontent-%COMP%]{display:block}}@media screen and (max-width: 575px){.header[_ngcontent-%COMP%]{padding:15px}}"]})};var O=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-root"]],decls:6,vars:0,consts:[[1,"main"],[1,"wrap"],[1,"content"]],template:function(t,i){t&1&&(o(0,"main",0),p(1,"app-sidebar"),o(2,"div",1),p(3,"app-header"),o(4,"div",2),p(5,"router-outlet"),r()()())},dependencies:[_,M,z],styles:[".main[_ngcontent-%COMP%]{display:flex}.wrap[_ngcontent-%COMP%]{width:calc(100% - var(--sidebar-width))}.content[_ngcontent-%COMP%]{padding:30px;width:100%;overflow:hidden}@media screen and (max-width: 991px){.wrap[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 575px){.content[_ngcontent-%COMP%]{padding:15px}}"]})};j(O,G).catch(e=>console.error(e));
