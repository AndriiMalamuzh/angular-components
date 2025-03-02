import{a as B}from"./chunk-EVZ6LSJ2.js";import{a as _,b as T,d as y}from"./chunk-YC4A6MOR.js";import{e as A}from"./chunk-DILYXV3L.js";import{a as S}from"./chunk-FEDDO43E.js";import{Aa as m,Db as E,Ga as r,Ka as s,Pa as n,Q as c,Qa as i,Ra as p,Ua as d,cb as x,da as f,ea as b,ka as l,la as h,ua as C,vb as v,wa as u}from"./chunk-VG3QAJPC.js";import"./chunk-FDERIQAA.js";var g=class t{el=c(b);renderer=c(h);badge=f();constructor(){v(()=>{this.updateBadge()})}updateBadge(){let a=this.el.nativeElement.querySelector(".badge-content");a&&this.renderer.removeChild(this.el.nativeElement,a),this.el.nativeElement.classList.add("badge");let e=this.renderer.createElement("span");this.renderer.addClass(e,"badge-content");let o=this.renderer.createText(this.badge());this.renderer.appendChild(e,o),this.renderer.appendChild(this.el.nativeElement,e)}static \u0275fac=function(e){return new(e||t)};static \u0275dir=u({type:t,selectors:[["","badge",""]],inputs:{badge:[1,"badge"]}})};function M(t,a){if(t&1&&(n(0,"pre"),p(1,"code",14),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.exampleHtml)}}function O(t,a){if(t&1&&(n(0,"pre"),p(1,"code",14),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.exampleTs)}}function I(t,a){if(t&1&&(n(0,"pre"),p(1,"code",14),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.exampleScss)}}function j(t,a){if(t&1&&(n(0,"pre"),p(1,"code",14),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.codeTs)}}function F(t,a){if(t&1&&(n(0,"pre"),p(1,"code",14),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.codeScss)}}var H=class t{http=c(E);fileContents={exampleHtml:"",exampleTs:"",exampleScss:"",codeTs:"",codeScss:""};ngOnInit(){let a={"/badge/example-html.txt":"exampleHtml","/badge/example-ts.txt":"exampleTs","/badge/example-scss.txt":"exampleScss","/badge/ts.txt":"codeTs","/badge/scss.txt":"codeScss"};for(let[e,o]of Object.entries(a))this.loadFile(e,o)}loadFile(a,e){this.http.get(`${S.publicUrl}files${a}`,{responseType:"text"}).subscribe({next:o=>this.fileContents[e]=o,error:o=>console.error(`Error loading file ${a}`,o)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-badge-example"]],decls:26,vars:5,consts:[[2,"margin-top","0"],["label","Example"],[1,"icons"],["badge","1",1,"icon"],["name","phone"],["badge","5",1,"icon"],["name","bell"],["badge","10",1,"icon"],["name","mail"],["label","HTML"],["label","TS"],["label","SCSS"],["label","badge.directive.ts"],["label","badge.scss"],[3,"highlightAuto"]],template:function(e,o){e&1&&(n(0,"h2",0),x(1,"Example"),i(),n(2,"app-example")(3,"app-tab-group")(4,"app-tab",1)(5,"div",2)(6,"div",3),p(7,"app-icon",4),i(),n(8,"div",5),p(9,"app-icon",6),i(),n(10,"div",7),p(11,"app-icon",8),i()()(),n(12,"app-tab",9),m(13,M,2,1,"pre"),i(),n(14,"app-tab",10),m(15,O,2,1,"pre"),i(),n(16,"app-tab",11),m(17,I,2,1,"pre"),i()()(),n(18,"h2"),x(19,"Code"),i(),n(20,"app-example")(21,"app-tab-group")(22,"app-tab",12),m(23,j,2,1,"pre"),i(),n(24,"app-tab",13),m(25,F,2,1,"pre"),i()()()),e&2&&(l(13),s(o.fileContents.exampleHtml?13:-1),l(2),s(o.fileContents.exampleTs?15:-1),l(2),s(o.fileContents.exampleScss?17:-1),l(6),s(o.fileContents.codeTs?23:-1),l(2),s(o.fileContents.codeScss?25:-1))},dependencies:[_,y,T,B,g,A],styles:[".icons[_ngcontent-%COMP%]{display:flex;gap:30px}.icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:100%;background:#dedede}"]})};export{H as BadgeExampleComponent};
