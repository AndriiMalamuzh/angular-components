import{Da as S,F as c,H as f,K as p,N as E,Q as r,R as A,Y as H,ab as k,ba as R,ca as y,da as F,ea as m,f as b,fa as P,g as l,ga as N,h as g,ib as B,j as o,kb as _,m as M,mb as U,n as u,qb as x,t as w,ta as L,u as d,ua as D,v as O,wb as C}from"./chunk-I5IPIK7Z.js";import{e as s}from"./chunk-FDERIQAA.js";var I=new E("HIGHLIGHT_OPTIONS");function re(t){return A([{provide:I,useValue:t}])}var h=function(t){return t.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",t.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",t.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",t.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",t.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",t}(h||{}),V=(()=>{class t{constructor(){this.document=r(U),this.isPlatformBrowser=x(r(P)),this.options=r(I,{optional:!0}),this._ready=new b(null),this.ready=M(this._ready.asObservable().pipe(d(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(c(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(f(i=>{i.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),l)),O(e=>(console.error("[HLJS] ",e),this._ready.error(e),l))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return o(()=>h.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return o(()=>h.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return o(()=>h.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return o(()=>h.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(c(e=>this._loadLanguages(e)))}return o(()=>h.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){let i=Object.entries(this.options.languages).map(([n,W])=>T(W()).pipe(f(v=>e.registerLanguage(n,v))));return w(i).pipe(u(()=>e))}loadCoreLibrary(){return T(this.options.coreLibraryLoader())}loadFullLibrary(){return T(this.options.fullLibraryLoader())}loadLineNumbers(){return g(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),T=t=>g(t).pipe(d(a=>!!a?.default),u(a=>a.default)),z=(()=>{class t{constructor(){this.loader=r(V),this.options=r(I,{optional:!0}),this.hljsSignal=m(null),this.hljs=B(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,i){return s(this,null,function*(){return(yield this.loader.ready).highlight(e,i)})}highlightAuto(e,i){return s(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,i)})}highlightElement(e){return s(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return s(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return s(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,i){return s(this,null,function*(){(yield this.loader.ready).registerLanguage(e,i)})}unregisterLanguage(e){return s(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(n,W){return s(this,arguments,function*(e,{languageName:i}){(yield this.loader.ready).registerAliases(e,{languageName:i})})}listLanguages(){return s(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return s(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return s(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return s(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,i){return s(this,null,function*(){let n=yield this.loader.ready;n.lineNumbersBlock&&n.lineNumbersBlock(e,i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),j;function q(){if(!j)try{j=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:t=>t})}catch{}return j}function Y(t){return q()?.createHTML(t)||t}var G=(()=>{class t{constructor(){this._hljs=r(z),this._nativeElement=r(F).nativeElement,this._sanitizer=r(C),_({write:()=>{let e=this.code();this.setTextContent(e||""),e&&this.highlightElement(e)}}),_({write:()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}})}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=Y(this._sanitizer.sanitize(N.HTML,e)||""))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=L({type:t})}}return t})();var oe=(()=>{class t extends G{constructor(){super(...arguments),this.code=y(null,{alias:"highlightAuto"}),this.highlightResult=m(null),this.languages=y(),this.highlighted=R()}highlightElement(e){return s(this,null,function*(){let i=yield this._hljs.highlightAuto(e,this.languages());this.highlightResult.set(i)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=H(t)))(n||t)}})()}static{this.\u0275dir=L({type:t,selectors:[["","highlightAuto",""]],hostVars:2,hostBindings:function(i,n){i&2&&S("hljs",!0)},inputs:{code:[1,"highlightAuto","code"],languages:[1,"languages"]},outputs:{highlighted:"highlighted"},features:[k([{provide:G,useExisting:t}]),D]})}}return t})();export{re as a,oe as b};
