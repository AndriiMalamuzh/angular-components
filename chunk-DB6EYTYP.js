import{a as B}from"./chunk-S3VYYS5G.js";import{a as _,b as T,d as y}from"./chunk-6EVR62KZ.js";import{b as O}from"./chunk-EWMY6R36.js";import{Ba as s,Fa as n,Ga as i,Ha as p,Ka as d,O as c,S as f,Sa as x,aa as h,ba as C,ha as l,hb as E,ja as b,nb as S,oa as u,pa as v,sa as m,ya as r}from"./chunk-P2SAVIEI.js";import"./chunk-FDERIQAA.js";var g=class t{badge=h();el=c(C);renderer=c(b);ngOnChanges(){this.updateBadge()}updateBadge(){let a=this.el.nativeElement.querySelector(".badge-content");a&&this.renderer.removeChild(this.el.nativeElement,a),this.el.nativeElement.classList.add("badge");let e=this.renderer.createElement("span");this.renderer.addClass(e,"badge-content");let o=this.renderer.createText(this.badge());this.renderer.appendChild(e,o),this.renderer.appendChild(this.el.nativeElement,e)}static \u0275fac=function(e){return new(e||t)};static \u0275dir=v({type:t,selectors:[["","badge",""]],inputs:{badge:[1,"badge"]},features:[f]})};function D(t,a){if(t&1&&(n(0,"pre"),p(1,"code",13),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.exampleHtml)}}function M(t,a){if(t&1&&(n(0,"pre"),p(1,"code",13),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.exampleTs)}}function F(t,a){if(t&1&&(n(0,"pre"),p(1,"code",13),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.exampleScss)}}function I(t,a){if(t&1&&(n(0,"pre"),p(1,"code",13),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.codeTs)}}function j(t,a){if(t&1&&(n(0,"pre"),p(1,"code",13),i()),t&2){let e=d();l(),r("highlightAuto",e.fileContents.codeScss)}}var A=class t{fileContents={exampleHtml:"",exampleTs:"",exampleScss:"",codeTs:"",codeScss:""};http=c(E);ngOnInit(){let a={"/badge/example-html.txt":"exampleHtml","/badge/example-ts.txt":"exampleTs","/badge/example-scss.txt":"exampleScss","/badge/ts.txt":"codeTs","/badge/scss.txt":"codeScss"};for(let[e,o]of Object.entries(a))this.loadFile(e,o)}loadFile(a,e){this.http.get(`${S.publicUrl}files${a}`,{responseType:"text"}).subscribe({next:o=>this.fileContents[e]=o,error:o=>console.error(`Error loading file ${a}`,o)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-badge-example"]],decls:26,vars:5,consts:[["label","Example"],[1,"icons"],["badge","1",1,"icon"],["name","phone"],["badge","5",1,"icon"],["name","bell"],["badge","10",1,"icon"],["name","mail"],["label","HTML"],["label","TS"],["label","SCSS"],["label","badge.directive.ts"],["label","badge.scss"],[3,"highlightAuto"]],template:function(e,o){e&1&&(n(0,"h2"),x(1,"Example"),i(),n(2,"app-example")(3,"app-tab-group")(4,"app-tab",0)(5,"div",1)(6,"div",2),p(7,"app-icon",3),i(),n(8,"div",4),p(9,"app-icon",5),i(),n(10,"div",6),p(11,"app-icon",7),i()()(),n(12,"app-tab",8),m(13,D,2,1,"pre"),i(),n(14,"app-tab",9),m(15,M,2,1,"pre"),i(),n(16,"app-tab",10),m(17,F,2,1,"pre"),i()()(),n(18,"h2"),x(19,"Code"),i(),n(20,"app-example")(21,"app-tab-group")(22,"app-tab",11),m(23,I,2,1,"pre"),i(),n(24,"app-tab",12),m(25,j,2,1,"pre"),i()()()),e&2&&(l(13),s(o.fileContents.exampleHtml?13:-1),l(2),s(o.fileContents.exampleTs?15:-1),l(2),s(o.fileContents.exampleScss?17:-1),l(6),s(o.fileContents.codeTs?23:-1),l(2),s(o.fileContents.codeScss?25:-1))},dependencies:[_,y,T,B,g,O],styles:[".icons[_ngcontent-%COMP%]{display:flex;gap:30px}.icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:100%;background:#dedede}"]})};export{A as BadgeExampleComponent};
