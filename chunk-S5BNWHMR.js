import{a as h,b as u,c as E,d as S}from"./chunk-6EVR62KZ.js";import{b}from"./chunk-EWMY6R36.js";import{Ba as r,Fa as i,Ga as n,Ha as s,Ka as c,O as x,Sa as d,ha as o,hb as C,nb as g,oa as f,sa as a,ya as m}from"./chunk-P2SAVIEI.js";import"./chunk-FDERIQAA.js";function _(t,p){if(t&1&&(i(0,"pre"),s(1,"code",6),n()),t&2){let e=c();o(),m("highlightAuto",e.fileContents.exampleHtml)}}function T(t,p){if(t&1&&(i(0,"pre"),s(1,"code",6),n()),t&2){let e=c();o(),m("highlightAuto",e.fileContents.exampleScss)}}function y(t,p){if(t&1&&(i(0,"pre"),s(1,"code",6),n()),t&2){let e=c();o(),m("highlightAuto",e.fileContents.codeTs)}}function R(t,p){if(t&1&&(i(0,"pre"),s(1,"code",6),n()),t&2){let e=c();o(),m("highlightAuto",e.fileContents.codeScss)}}var v=class t{fileContents={exampleHtml:"",exampleScss:"",codeTs:"",codeScss:""};http=x(C);ngOnInit(){let p={"/ripple/example-html.txt":"exampleHtml","/ripple/example-scss.txt":"exampleScss","/ripple/ts.txt":"codeTs","/ripple/scss.txt":"codeScss"};for(let[e,l]of Object.entries(p))this.loadFile(e,l)}loadFile(p,e){this.http.get(`${g.publicUrl}files${p}`,{responseType:"text"}).subscribe({next:l=>this.fileContents[e]=l,error:l=>console.error(`Error loading file ${p}`,l)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-ripple-example"]],decls:19,vars:4,consts:[["label","Example"],["ripple","",1,"square"],["label","HTML"],["label","SCSS"],["label","ripple.directive.ts"],["label","ripple.scss"],[3,"highlightAuto"]],template:function(e,l){e&1&&(i(0,"h2"),d(1,"Example"),n(),i(2,"app-example")(3,"app-tab-group")(4,"app-tab",0)(5,"div",1),d(6,"Click me!"),n()(),i(7,"app-tab",2),a(8,_,2,1,"pre"),n(),i(9,"app-tab",3),a(10,T,2,1,"pre"),n()()(),i(11,"h2"),d(12,"Code"),n(),i(13,"app-example")(14,"app-tab-group")(15,"app-tab",4),a(16,y,2,1,"pre"),n(),i(17,"app-tab",5),a(18,R,2,1,"pre"),n()()()),e&2&&(o(8),r(l.fileContents.exampleHtml?8:-1),o(2),r(l.fileContents.exampleScss?10:-1),o(6),r(l.fileContents.codeTs?16:-1),o(2),r(l.fileContents.codeScss?18:-1))},dependencies:[h,S,u,b,E],styles:[".square[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:300px;height:300px;cursor:pointer;font-size:20px;background:#f4f4f4}"]})};export{v as RippleExampleComponent};
