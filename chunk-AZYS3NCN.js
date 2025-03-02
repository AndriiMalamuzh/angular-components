import{a as se,d as Q}from"./chunk-TYB6WNG6.js";import{a as oe}from"./chunk-EVZ6LSJ2.js";import{$a as u,Aa as _,Ga as J,Ha as T,Ia as K,J as A,Ja as V,Ka as k,Pa as r,Q as d,Qa as a,Ra as W,Sa as H,Ta as m,U as L,Ua as j,V as E,Va as p,W as S,Wa as s,Xa as X,ab as I,bb as b,ca as g,cb as R,da as C,db as Z,ea as M,fa as l,ib as ee,ka as f,kb as te,la as $,na as U,nb as ne,oa as P,pa as v,qa as Y,tb as ie,ua as c,vb as q,wa as G}from"./chunk-VG3QAJPC.js";var w=class i{el=d(M);focusEvent=g();blurEvent=g();inputEvent=g();className="form-field__input";setId(t){this.el.nativeElement.id=t}getValue(){return this.el.nativeElement.value}focus(){this.el.nativeElement.focus()}isDisabled(){return this.el.nativeElement.disabled}isRequired(){return this.el.nativeElement.required}onFocus(t){this.focusEvent.subscribe(t)}onBlur(t){this.blurEvent.subscribe(t)}onInput(t){this.inputEvent.subscribe(t)}handleFocus(){this.focusEvent.emit()}handleBlur(){this.blurEvent.emit()}handleInput(t){this.inputEvent.emit(t)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=G({type:i,selectors:[["","input",""]],hostVars:2,hostBindings:function(e,n){e&1&&m("focus",function(){return n.handleFocus()})("blur",function(){return n.handleBlur()})("input",function(O){return n.handleInput(O.target.value)}),e&2&&V(n.className)},outputs:{focusEvent:"focusEvent",blurEvent:"blurEvent",inputEvent:"inputEvent"}})};var le=["*"],x=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-form-field-error"]],ngContentSelectors:le,decls:1,vars:0,template:function(e,n){e&1&&(p(),s(0))},styles:["[_nghost-%COMP%]{display:block;margin-top:3px;font-size:12px;font-weight:500;color:var(--color-error)}"],changeDetection:0})};var ae=["*"],D=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-form-field-label"]],ngContentSelectors:ae,decls:1,vars:0,template:function(e,n){e&1&&(p(),s(0))},encapsulation:2,changeDetection:0})};var ce=["formFieldElement"],pe=[[["","form-field-prefix",""]],[["","input",""]],[["app-select"]],[["","form-field-suffix",""]],[["app-form-field-error"]],[["app-form-field-label"]],[["app-form-field-hint"]]],de=["[form-field-prefix]","[input]","app-select","[form-field-suffix]","app-form-field-error","app-form-field-label","app-form-field-hint"];function fe(i,t){i&1&&(r(0,"span",4),R(1,"*"),a())}function me(i,t){if(i&1&&(r(0,"label",3),s(1,5),_(2,fe,2,0,"span",4),a()),i&2){let e=j();X("for",e.inputId()),f(2),k(e.isRequired()?2:-1)}}function ue(i,t){i&1&&s(0,6)}var N=class i{formFieldElement=P("formFieldElement");inputDirective=v(w);selectComponent=v(h);errorComponent=v(x);labelComponent=v(D);ngControl=v(Q);inputId=l(`input-${crypto.randomUUID()}`);isFocused=l(!1);isHasValue=l(!1);isDisabled=l(!1);isRequired=l(!1);isTextarea=ie(()=>this.inputDirective()?.el?.nativeElement?.tagName?.toLowerCase()==="textarea");constructor(){q(()=>{this.selectComponent()&&this.isHasValue.set(!!this.selectComponent()?.selectedValues()?.length)})}ngAfterViewInit(){setTimeout(()=>{this.updateValues()}),this.ngControl()?.control&&(this.ngControl().control.valueChanges?.subscribe(t=>{this.isHasValue.set(!!t?.length)}),this.isHasValue.set(!!this.ngControl().control.value))}ngOnChanges(t){t.ngControl&&this.updateValues()}updateValues(){this.inputDirective()?(this.inputDirective().setId(this.inputId()),this.isDisabled.set(this.inputDirective().isDisabled()),this.isRequired.set(this.inputDirective().isRequired()),this.inputDirective().onFocus(()=>this.isFocused.set(!0)),this.inputDirective().onBlur(()=>this.isFocused.set(!1)),this.inputDirective().onInput(t=>this.isHasValue.set(t.length>0))):this.selectComponent()&&(this.isDisabled.set(this.selectComponent().disabled()),this.isRequired.set(this.selectComponent().required())),this.ngControl()?.control&&this.isHasValue.set(this.ngControl().control?.value?.length>0)}onFormFieldClick(){this.inputDirective()&&!this.isDisabled()&&this.inputDirective()?.focus(),this.selectComponent()&&!this.isDisabled()&&this.selectComponent().toggleDropdown()}get controlClasses(){return!this.ngControl()||!this.ngControl().control?"":[this.ngControl().control.touched?"ng-touched":"ng-untouched",this.ngControl().control.dirty?"ng-dirty":"ng-pristine",this.ngControl().control.invalid?"ng-invalid":"ng-valid"].filter(Boolean).join(" ")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-form-field"]],contentQueries:function(e,n,o){e&1&&(u(o,n.inputDirective,w,5),u(o,n.selectComponent,h,5),u(o,n.errorComponent,x,5),u(o,n.labelComponent,D,5),u(o,n.ngControl,Q,5)),e&2&&b(5)},viewQuery:function(e,n){e&1&&I(n.formFieldElement,ce,5),e&2&&b()},features:[L],ngContentSelectors:de,decls:10,vars:18,consts:[["formFieldElement",""],[1,"form-field",3,"click"],[1,"form-field__wrap"],[1,"form-field__label",3,"for"],[1,"form-field__required"]],template:function(e,n){if(e&1){let o=H();p(pe),r(0,"div",1,0),m("click",function(){return E(o),S(n.onFormFieldClick())}),s(2),r(3,"div",2),_(4,me,3,2,"label",3),s(5,1),s(6,2),a(),s(7,3),a(),_(8,ue,1,0),s(9,4)}if(e&2){let o;V(n.controlClasses),T("form-field--focused",n.isFocused()||((o=n.selectComponent())==null?null:o.isOpen()))("form-field--has-value",n.isFocused()||n.isHasValue())("form-field--disabled",n.isDisabled())("form-field--no-label",!n.labelComponent())("form-field--input",n.inputDirective())("form-field--textarea",n.isTextarea())("form-field--select",n.selectComponent()),f(4),k(n.labelComponent()?4:-1),f(4),k(n.errorComponent()?-1:8)}},styles:[".form-field__input{width:100%;padding:0;border:none;background:none;font-size:16px;outline:none;transform:translateY(7px)}  .form-field__input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px white inset!important}.form-field[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;height:46px;padding:0 10px;border:1px solid #CCC;border-radius:8px;gap:5px;background:#fff}.form-field[_ngcontent-%COMP%]:not(.form-field--disabled):hover{border-color:var(--color-primary)}.form-field--focused[_ngcontent-%COMP%]{border-color:var(--color-primary)}.form-field__wrap[_ngcontent-%COMP%]{position:relative;flex-grow:1;width:100%}.form-field__label[_ngcontent-%COMP%]{position:absolute;top:2px;left:0;width:100%;color:#757575;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:font-size .3s,top .3s;transform-origin:top left;font-size:16px;line-height:1;pointer-events:none;background:#fff;z-index:1;padding-bottom:10px}.form-field__required[_ngcontent-%COMP%]{color:#ec0000}.form-field--has-value[_ngcontent-%COMP%]   .form-field__label[_ngcontent-%COMP%]{top:-5px;font-size:12px;padding-bottom:0;background:none}.form-field--no-label[_ngcontent-%COMP%]     .form-field__input{transform:none}.form-field--input[_ngcontent-%COMP%]{cursor:text}.form-field.ng-touched.ng-invalid[_ngcontent-%COMP%]{border-color:var(--color-error)}.form-field.ng-touched.ng-invalid[_ngcontent-%COMP%]   .form-field__label[_ngcontent-%COMP%]{color:#ec0000}.form-field--textarea[_ngcontent-%COMP%]{height:auto;padding:10px}.form-field--textarea[_ngcontent-%COMP%]     textarea{resize:vertical;min-height:100px}.form-field--select[_ngcontent-%COMP%]{cursor:pointer}.form-field--disabled[_ngcontent-%COMP%]{opacity:.7;background:#f2f2f2}.form-field--disabled.form-field--input[_ngcontent-%COMP%], .form-field--disabled.form-field--select[_ngcontent-%COMP%]{cursor:auto}.form-field--disabled[_ngcontent-%COMP%]   .form-field__label[_ngcontent-%COMP%]{background:none}"],changeDetection:0})};var he=["optionsTemplate"],ge=[[["","select-search",""]],"*"],Ce=["[select-search]","*"],ve=i=>({transform:i});function _e(i,t){if(i&1){let e=H();r(0,"div",6)(1,"div",7),m("click",function(){E(e);let o=j();return S(o.onOverlayClick())}),a(),r(2,"div",8),s(3),r(4,"div",9),s(5,1),a()()()}}var h=class i{viewContainerRef=d(U);renderer=d($);formFieldComponent=d(N);optionsTemplate=P("optionsTemplate");options=Y(F);multiple=C(!1);disabled=C(!1);required=C(!1);selectChange=g();selectedValues=l("");selectedDisplayTexts=l([]);isOpen=l(!1);onChange=()=>{};onTouched=()=>{};constructor(){q(()=>{this.checkSelected()})}selectOption(t){if(!t.value()){this.selectedValues.set(""),this.isOpen.set(!1),this.closeDropdown();return}this.multiple()?this.selectedValues().includes(t.value())?(this.selectedValues.set(this.selectedValues().filter(e=>e!==t.value())),this.selectedDisplayTexts.set(this.selectedDisplayTexts().filter(e=>e!==t.el.nativeElement.innerText.trim())),t.isSelected.set(!1)):(this.selectedValues.update(e=>[...e,t.value()]),this.selectedDisplayTexts.update(e=>[...e,t.el.nativeElement.innerText.trim()]),t.isSelected.set(!0)):(this.selectedValues.set(t.value()),this.selectedDisplayTexts.set([t.el.nativeElement.innerText.trim()]),this.isOpen.set(!1),this.closeDropdown(),this.options().forEach(e=>e.isSelected.set(!1)),t.isSelected.set(!0)),this.onChange&&this.onChange(this.selectedValues()),this.onTouched&&this.onTouched(),this.selectChange.emit(this.selectedValues())}toggleDropdown(){this.isOpen.update(t=>!t),this.isOpen()?this.openDropdown():this.closeDropdown()}openDropdown(){let e=this.viewContainerRef.createEmbeddedView(this.optionsTemplate()).rootNodes[0];this.renderer.appendChild(document.body,e);let n=this.formFieldComponent.formFieldElement()?.nativeElement.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop,O=e.getBoundingClientRect().height,z=window.innerHeight-n.bottom,re=n.top;this.renderer.setStyle(e,"position","absolute"),this.renderer.setStyle(e,"left",`${n.left}px`),this.renderer.setStyle(e,"width",`${n.width}px`),z>=O||z>=re?this.renderer.setStyle(e,"top",`${n.bottom+o+5}px`):this.renderer.setStyle(e,"bottom",`${window.innerHeight-n.top-o+5}px`)}closeDropdown(){this.viewContainerRef.clear()}writeValue(t){this.multiple()?this.selectedValues.set(Array.isArray(t)?t:[]):(this.selectedValues.set(t??""),this.selectedDisplayTexts.set([])),this.checkSelected()}checkSelected(){this.options()&&this.options().forEach(t=>{this.selectedValues().includes(t.value())?(t.isSelected.set(!0),this.selectedDisplayTexts().includes(t.el.nativeElement.innerText.trim())||this.selectedDisplayTexts.update(e=>[...e,t.el.nativeElement.innerText.trim()])):t.isSelected.set(!1)})}onOverlayClick(){this.isOpen.set(!1),this.closeDropdown(),this.onTouched()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-select"]],contentQueries:function(e,n,o){e&1&&u(o,n.options,F,4),e&2&&b()},viewQuery:function(e,n){e&1&&I(n.optionsTemplate,he,5),e&2&&b()},inputs:{multiple:[1,"multiple"],disabled:[1,"disabled"],required:[1,"required"]},outputs:{selectChange:"selectChange"},features:[ee([{provide:se,useExisting:A(()=>i),multi:!0}])],ngContentSelectors:Ce,decls:8,vars:6,consts:[["selectElement",""],["optionsTemplate",""],[1,"select"],[1,"select__selected"],[1,"select__arrow"],["name","expand-more",3,"size"],[1,"select-options-wrap"],[1,"select-options-overlay",3,"click"],[1,"select-options"],[1,"select-options__list"]],template:function(e,n){e&1&&(p(ge),r(0,"div",2,0)(2,"div",3),R(3),a(),r(4,"div",4),W(5,"app-icon",5),a()(),_(6,_e,6,0,"ng-template",null,1,ne)),e&2&&(f(3),Z(n.selectedValues().length?n.selectedDisplayTexts().join(", "):""),f(),K(te(4,ve,n.isOpen()?"rotate(180deg)":"")),f(),J("size",20))},dependencies:[oe],styles:[".select[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between;z-index:1}.select__selected[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transform:translateY(7px);font-size:16px;flex-grow:1}.select-options-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:99999998}.select-options[_ngcontent-%COMP%]{position:relative;background:#fff;border:1px solid #ccc;border-radius:8px;overflow:hidden;z-index:99999999}.select-options[_ngcontent-%COMP%]     .select-options__search{padding:10px;border-bottom:1px solid #CCCCCC}.select-options[_ngcontent-%COMP%]     .select-options__search input{font-size:16px;height:40px;width:100%;padding:0 8px;border:1px solid #CCCCCC;border-radius:5px;outline:none}.select-options[_ngcontent-%COMP%]     .select-options__search input:hover{border-color:var(--color-primary)}.select-options[_ngcontent-%COMP%]     .select-options__search input:focus{border-color:var(--color-primary)}.select-options__list[_ngcontent-%COMP%]{max-height:200px;overflow-y:auto;overflow-x:hidden}.select-options__list[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.select-options__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border:3px solid transparent;background-clip:padding-box;border-radius:9999px;background-color:var(--color-primary)}.select-options__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#1565ae}"]})};var be=["*"],F=class i{select=d(h);el=d(M);value=C();isSelected=l(!1);onClick(){this.select.selectOption(this)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-option"]],hostBindings:function(e,n){e&1&&m("click",function(){return n.onClick()})},inputs:{value:[1,"value"]},ngContentSelectors:be,decls:2,vars:2,consts:[[1,"option"]],template:function(e,n){e&1&&(p(),r(0,"div",0),s(1),a()),e&2&&T("selected",n.isSelected())},styles:[".option[_ngcontent-%COMP%]{padding:16px;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;cursor:pointer}.option[_ngcontent-%COMP%]:hover{background:#f5f5f5}.option.selected[_ngcontent-%COMP%]{background:#1a7fdc26;color:var(--color-primary)}"]})};export{w as a,x as b,D as c,F as d,h as e,N as f};
