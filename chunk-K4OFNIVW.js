import{c as At,f as Ee,j as Bt}from"./chunk-LQ66WF5X.js";import{a as Ot,b as pe}from"./chunk-4VSQFTJQ.js";import{G as St,H as Tt,I as Se,J as z,K as E,M as S,N as T,P as p,Q as q,R as Nt,T as kt,U as Pt,V as jt,a as Ke,f as Vt,g as Ae,h as Ie,i as wt,j as L,p as Ft,s as It,t as Et}from"./chunk-KLJ5D3BW.js";import{$ as vt,$a as U,A as mt,Ab as K,Bb as Me,D as gt,Db as N,Fb as v,Gb as B,Hb as I,Ib as xe,J as qe,Jb as j,Kb as R,Na as o,Nb as Ve,O as Qe,Ob as Ct,P as C,Pb as Dt,Q as G,Qb as f,Rb as b,S as y,Sb as H,Tb as ue,U as d,Ua as Xe,Ub as Je,Va as O,Vb as D,Wb as Mt,Yb as we,Z as ye,Zb as Fe,_ as _e,_a as g,_b as Q,aa as Ye,ab as $,bb as _t,bc as Y,cb as A,cc as m,d as st,db as _,e as lt,ea as be,eb as M,gb as bt,hc as xt,ia as P,ic as k,j as dt,l as ct,la as oe,lb as W,ma as yt,mb as Ce,na as h,nb as De,nc as ee,o as J,ob as ae,p as ut,pa as Ze,pb as se,qb as le,rb as a,sb as s,t as pt,tb as l,u as ft,ub as V,y as ht,yb as de,zb as ce}from"./chunk-R7Q3L57I.js";import{a as x,b as F}from"./chunk-IFGU66OU.js";var zt=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(O(Xe),O(Ze))};static \u0275dir=$({type:e})}return e})(),Rn=(()=>{class e extends zt{static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275dir=$({type:e,features:[_]})}return e})(),Wt=new y("");var Ln={provide:Wt,useExisting:Qe(()=>Oe),multi:!0};function Gn(){let e=Ke()?Ke().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Un=new y(""),Oe=(()=>{class e extends zt{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Gn())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(O(Xe),O(Ze),O(Un,8))};static \u0275dir=$({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&N("input",function(u){return r._handleInput(u.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(u){return r._compositionEnd(u.target.value)})},standalone:!1,features:[D([Ln]),_]})}return e})();var Hn=new y(""),$n=new y("");function qt(e){return e!=null}function Qt(e){return bt(e)?dt(e):e}function Yt(e){let n={};return e.forEach(t=>{n=t!=null?x(x({},n),t):n}),Object.keys(n).length===0?null:n}function Zt(e,n){return n.map(t=>t(e))}function zn(e){return!e.validate}function Xt(e){return e.map(n=>zn(n)?n:t=>n.validate(t))}function Wn(e){if(!e)return null;let n=e.filter(qt);return n.length==0?null:function(t){return Yt(Zt(t,n))}}function Jt(e){return e!=null?Wn(Xt(e)):null}function qn(e){if(!e)return null;let n=e.filter(qt);return n.length==0?null:function(t){let i=Zt(t,n).map(Qt);return ft(i).pipe(J(Yt))}}function Kt(e){return e!=null?qn(Xt(e)):null}function Rt(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function en(e){return e._rawValidators}function tn(e){return e._rawAsyncValidators}function et(e){return e?Array.isArray(e)?e:[e]:[]}function Ne(e,n){return Array.isArray(e)?e.includes(n):e===n}function Lt(e,n){let t=et(n);return et(e).forEach(r=>{Ne(t,r)||t.push(r)}),t}function Gt(e,n){return et(n).filter(t=>!Ne(e,t))}var tt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Jt(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Kt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}};var Z=class extends tt{_parent=null;name=null;valueAccessor=null},nt=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var nn=(()=>{class e extends nt{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(O(Z,2))};static \u0275dir=$({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Ct("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[_]})}return e})();var fe="VALID",Te="INVALID",te="PENDING",he="DISABLED",X=class{},ke=class extends X{value;source;constructor(n,t){super(),this.value=n,this.source=t}},me=class extends X{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},ge=class extends X{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},ne=class extends X{status;source;constructor(n,t){super(),this.status=n,this.source=t}};var it=class extends X{source;constructor(n){super(),this.source=n}};function Qn(e){return(Be(e)?e.validators:e)||null}function Yn(e){return Array.isArray(e)?Jt(e):e||null}function Zn(e,n){return(Be(n)?n.asyncValidators:e)||null}function Xn(e){return Array.isArray(e)?Kt(e):e||null}function Be(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var rt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Y(this.statusReactive)}set status(n){Y(()=>this.statusReactive.set(n))}_status=m(()=>this.statusReactive());statusReactive=P(void 0);get valid(){return this.status===fe}get invalid(){return this.status===Te}get pending(){return this.status===te}get disabled(){return this.status===he}get enabled(){return this.status!==he}errors;get pristine(){return Y(this.pristineReactive)}set pristine(n){Y(()=>this.pristineReactive.set(n))}_pristine=m(()=>this.pristineReactive());pristineReactive=P(!0);get dirty(){return!this.pristine}get touched(){return Y(this.touchedReactive)}set touched(n){Y(()=>this.touchedReactive.set(n))}_touched=m(()=>this.touchedReactive());touchedReactive=P(!1);get untouched(){return!this.touched}_events=new st;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Lt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Lt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Gt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Gt(n,this._rawAsyncValidators))}hasValidator(n){return Ne(this._rawValidators,n)}hasAsyncValidator(n){return Ne(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(F(x({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new ge(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new ge(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(F(x({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new me(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new me(!0,i))}markAsPending(n={}){this.status=te;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ne(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(F(x({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=he,this.errors=null,this._forEachChild(r=>{r.disable(F(x({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ke(this.value,i)),this._events.next(new ne(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(F(x({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=fe,this._forEachChild(i=>{i.enable(F(x({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(F(x({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===fe||this.status===te)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ke(this.value,t)),this._events.next(new ne(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(F(x({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?he:fe}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=te,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let i=Qt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(n,t){let i=t?this.get(t):this;return i?.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ne(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new be,this.statusChanges=new be}_calculateStatus(){return this._allControlsDisabled()?he:this.errors?Te:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(te)?te:this._anyControlsHaveStatus(Te)?Te:fe}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,t),r&&this._events.next(new me(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new ge(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Be(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Yn(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Xn(this._rawAsyncValidators)}};var ot=new y("",{factory:()=>je}),je="always";function Jn(e,n,t=je){ei(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),ni(e,n),ri(e,n),ii(e,n),Kn(e,n)}function Ut(e,n,t=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),ti(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Pe(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Kn(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function ei(e,n){let t=en(e);n.validator!==null?e.setValidators(Rt(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=tn(e);n.asyncValidator!==null?e.setAsyncValidators(Rt(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();Pe(n._rawValidators,r),Pe(n._rawAsyncValidators,r)}function ti(e,n){let t=!1;if(e!==null){if(n.validator!==null){let r=en(e);if(Array.isArray(r)&&r.length>0){let c=r.filter(u=>u!==n.validator);c.length!==r.length&&(t=!0,e.setValidators(c))}}if(n.asyncValidator!==null){let r=tn(e);if(Array.isArray(r)&&r.length>0){let c=r.filter(u=>u!==n.asyncValidator);c.length!==r.length&&(t=!0,e.setAsyncValidators(c))}}}let i=()=>{};return Pe(n._rawValidators,i),Pe(n._rawAsyncValidators,i),t}function ni(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&rn(e,n)})}function ii(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&rn(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function rn(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function ri(e,n){let t=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function oi(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function ai(e){return Object.getPrototypeOf(e.constructor)===Rn}function si(e,n){if(!n)return null;Array.isArray(n);let t,i,r;return n.forEach(c=>{c.constructor===Oe?t=c:ai(c)?i=c:r=c}),r||i||t||null}function Ht(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function $t(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var on=class extends rt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(Qn(t),Zn(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Be(t)&&(t.nonNullable||t.initialValueIsDefault)&&($t(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new it(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ht(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ht(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){$t(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var an=new y(""),li={provide:Z,useExisting:Qe(()=>at)},at=(()=>{class e extends Z{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new be;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,c,u){super(),this._ngModelWarningConfig=c,this.callSetDisabledState=u,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=si(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&Ut(i,this,!1),Jn(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}oi(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ut(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||e)(O(Hn,10),O($n,10),O(Wt,10),O(an,8),O(ot,8))};static \u0275dir=$({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[D([li]),_,yt]})}return e})();var sn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=G({})}return e})();var ln=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:ot,useValue:t.callSetDisabledState??je}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=G({imports:[sn]})}return e})(),dn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:an,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ot,useValue:t.callSetDisabledState??je}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=G({imports:[sn]})}return e})();var cn=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ui=["header"],pi=["title"],fi=["subtitle"],hi=["content"],mi=["footer"],gi=["*",[["p-header"]],[["p-footer"]]],vi=["*","p-header","p-footer"];function yi(e,n){e&1&&K(0)}function _i(e,n){if(e&1&&(s(0,"div",1),I(1,1),M(2,yi,1,0,"ng-container",2),l()),e&2){let t=v();f(t.cx("header")),a("pBind",t.ptm("header")),o(2),a("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function bi(e,n){if(e&1&&(de(0),b(1),ce()),e&2){let t=v(2);o(),H(t.header)}}function Ci(e,n){e&1&&K(0)}function Di(e,n){if(e&1&&(s(0,"div",1),M(1,bi,2,1,"ng-container",3)(2,Ci,1,0,"ng-container",2),l()),e&2){let t=v();f(t.cx("title")),a("pBind",t.ptm("title")),o(),a("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),o(),a("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Mi(e,n){if(e&1&&(de(0),b(1),ce()),e&2){let t=v(2);o(),H(t.subheader)}}function xi(e,n){e&1&&K(0)}function Vi(e,n){if(e&1&&(s(0,"div",1),M(1,Mi,2,1,"ng-container",3)(2,xi,1,0,"ng-container",2),l()),e&2){let t=v();f(t.cx("subtitle")),a("pBind",t.ptm("subtitle")),o(),a("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),o(),a("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function wi(e,n){e&1&&K(0)}function Fi(e,n){e&1&&K(0)}function Ai(e,n){if(e&1&&(s(0,"div",1),I(1,2),M(2,Fi,1,0,"ng-container",2),l()),e&2){let t=v();f(t.cx("footer")),a("pBind",t.ptm("footer")),o(2),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Ii=`
    ${cn}

    .p-card {
        display: block;
    }
`,Ei={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},un=(()=>{class e extends E{name="card";style=Ii;classes=Ei;static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var pn=new y("CARD_INSTANCE"),fn=(()=>{class e extends T{componentName="Card";$pcCard=d(pn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(p,{self:!0});_componentStyle=d(un);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){Et(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(i=>{this.el.nativeElement.style[i]=t[i]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=P(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275cmp=g({type:e,selectors:[["p-card"]],contentQueries:function(i,r,c){if(i&1&&xe(c,St,5)(c,Tt,5)(c,ui,4)(c,pi,4)(c,fi,4)(c,hi,4)(c,mi,4)(c,Se,4),i&2){let u;j(u=R())&&(r.headerFacet=u.first),j(u=R())&&(r.footerFacet=u.first),j(u=R())&&(r.headerTemplate=u.first),j(u=R())&&(r.titleTemplate=u.first),j(u=R())&&(r.subtitleTemplate=u.first),j(u=R())&&(r.contentTemplate=u.first),j(u=R())&&(r.footerTemplate=u.first),j(u=R())&&(r.templates=u)}},hostVars:4,hostBindings:function(i,r){i&2&&(Dt(r._style()),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[D([un,{provide:pn,useExisting:e},{provide:S,useExisting:e}]),A([p]),_],ngContentSelectors:vi,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,r){i&1&&(B(gi),M(0,_i,3,4,"div",0),s(1,"div",1),M(2,Di,3,5,"div",0)(3,Vi,3,5,"div",0),s(4,"div",1),I(5),M(6,wi,1,0,"ng-container",2),l(),M(7,Ai,3,4,"div",0),l()),i&2&&(a("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),o(),f(r.cx("body")),a("pBind",r.ptm("body")),o(),a("ngIf",r.header||r.titleTemplate||r._titleTemplate),o(),a("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),o(),f(r.cx("content")),a("pBind",r.ptm("content")),o(2),a("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),o(),a("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[L,Ae,Ie,z,q,p],encapsulation:2,changeDetection:0})}return e})();var hn=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var Si=["*"],Ti=`
    ${hn}

    /* For Optimus */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,Ni={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},mn=(()=>{class e extends E{name="floatlabel";style=Ti;classes=Ni;static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var gn=new y("FLOATLABEL_INSTANCE"),vn=(()=>{class e extends T{componentName="FloatLabel";_componentStyle=d(mn);$pcFloatLabel=d(gn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(p,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275cmp=g({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cx("root"))},inputs:{variant:"variant"},features:[D([mn,{provide:gn,useExisting:e},{provide:S,useExisting:e}]),A([p]),_],ngContentSelectors:Si,decls:1,vars:0,template:function(i,r){i&1&&(B(),I(0))},dependencies:[L,z,q],encapsulation:2,changeDetection:0})}return e})();var yn=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var ki=["*"],Pi={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},_n=(()=>{class e extends E{name="iconfield";style=yn;classes=Pi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var bn=new y("ICONFIELD_INSTANCE"),Cn=(()=>{class e extends T{componentName="IconField";hostName="";_componentStyle=d(_n);$pcIconField=d(bn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(p,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275cmp=g({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[D([_n,{provide:bn,useExisting:e},{provide:S,useExisting:e}]),A([p]),_],ngContentSelectors:ki,decls:1,vars:0,template:function(i,r){i&1&&(B(),I(0))},dependencies:[L,q],encapsulation:2,changeDetection:0})}return e})();var Oi=["*"],Bi={root:"p-inputicon"},Dn=(()=>{class e extends E{name="inputicon";classes=Bi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),Mn=new y("INPUTICON_INSTANCE"),xn=(()=>{class e extends T{componentName="InputIcon";hostName="";styleClass;_componentStyle=d(Dn);$pcInputIcon=d(Mn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(p,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275cmp=g({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[D([Dn,{provide:Mn,useExisting:e},{provide:S,useExisting:e}]),A([p]),_],ngContentSelectors:Oi,decls:1,vars:0,template:function(i,r){i&1&&(B(),I(0))},dependencies:[L,z,q],encapsulation:2,changeDetection:0})}return e})();var Vn=(()=>{class e extends T{modelValue=P(void 0);$filled=m(()=>It(this.modelValue()));writeModelValue(t){this.modelValue.set(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275dir=$({type:e,features:[_]})}return e})();var wn=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var ji=`
    ${wn}

    /* For Optimus */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Ri={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},Fn=(()=>{class e extends E{name="inputtext";style=ji;classes=Ri;static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var An=new y("INPUTTEXT_INSTANCE"),In=(()=>{class e extends Vn{componentName="InputText";hostName="";ptInputText=k();pInputTextPT=k();pInputTextUnstyled=k();bindDirectiveInstance=d(p,{self:!0});$pcInputText=d(An,{optional:!0,skipSelf:!0})??void 0;ngControl=d(Z,{optional:!0,self:!0});pcFluid=d(Nt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=k();fluid=k(void 0,{transform:ee});invalid=k(void 0,{transform:ee});$variant=m(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=d(Fn);constructor(){super(),oe(()=>{let t=this.ptInputText()||this.pInputTextPT();t&&this.directivePT.set(t)}),oe(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(i){return new(i||e)};static \u0275dir=$({type:e,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(i,r){i&1&&N("input",function(){return r.onInput()}),i&2&&(W("data-p",r.dataP),f(r.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[D([Fn,{provide:An,useExisting:e},{provide:S,useExisting:e}]),A([p]),_]})}return e})();var En=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Li=["icon"],Gi=["*"];function Ui(e,n){if(e&1&&V(0,"span",4),e&2){let t=v(2);f(t.cx("icon")),a("ngClass",t.icon)("pBind",t.ptm("icon"))}}function Hi(e,n){if(e&1&&(de(0),M(1,Ui,1,4,"span",3),ce()),e&2){let t=v();o(),a("ngIf",t.icon)}}function $i(e,n){}function zi(e,n){e&1&&M(0,$i,0,0,"ng-template")}function Wi(e,n){if(e&1&&(s(0,"span",2),M(1,zi,1,0,null,5),l()),e&2){let t=v();f(t.cx("icon")),a("pBind",t.ptm("icon")),o(),a("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var qi={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},Sn=(()=>{class e extends E{name="tag";style=En;classes=qi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Tn=new y("TAG_INSTANCE"),Re=(()=>{class e extends T{componentName="Tag";$pcTag=d(Tn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(p,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=d(Sn);onAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="icon"&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tag"]],contentQueries:function(i,r,c){if(i&1&&xe(c,Li,4)(c,Se,4),i&2){let u;j(u=R())&&(r.iconTemplate=u.first),j(u=R())&&(r.templates=u)}},hostVars:3,hostBindings:function(i,r){i&2&&(W("data-p",r.dataP),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",ee]},features:[D([Sn,{provide:Tn,useExisting:e},{provide:S,useExisting:e}]),A([p]),_],ngContentSelectors:Gi,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(i,r){i&1&&(B(),I(0),M(1,Hi,2,1,"ng-container",0)(2,Wi,2,4,"span",1),s(3,"span",2),b(4),l()),i&2&&(o(),a("ngIf",!r.iconTemplate&&!r._iconTemplate),o(),a("ngIf",r.iconTemplate||r._iconTemplate),o(),f(r.cx("label")),a("pBind",r.ptm("label")),o(),H(r.value))},dependencies:[L,Vt,Ae,Ie,z,p],encapsulation:2,changeDetection:0})}return e})();var Le=class e{transform(n,t=", "){return n==null||!Array.isArray(n)?null:n.filter(r=>typeof r=="string").join(t)}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=_t({name:"join",type:e,pure:!0})};var Ge=class e{TAG_CONFIG={angular:{background:"#a51e24",textColor:"#FFFFFF"},primeng:{background:"#a51e24",textColor:"#FFFFFF"},typescript:{background:"#007acc",textColor:"#FFFFFF"},node:{background:"#3e863d",textColor:"#FFFFFF"},obsidian:{background:"#582bac",textColor:"#FFFFFF"},markdown:{background:"#196989",textColor:"#FFFFFF"}};value=k.required();currentConfig=m(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:"rgba(51,51,51,0.88)",textColor:"#FFFFFF"});tagClick=xt();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-article-tag"]],inputs:{value:[1,"value"]},outputs:{tagClick:"tagClick"},decls:1,vars:9,consts:[["severity","info",3,"click","value"]],template:function(t,i){t&1&&(s(0,"p-tag",0),N("click",function(){return i.tagClick.emit(i.value())}),l()),t&2&&(Ve("border-radius","20px")("font-weight","500")("background-color",i.currentConfig().background)("color",i.currentConfig().textColor),a("value",i.value()))},dependencies:[Re],encapsulation:2,changeDetection:0})};var Nn={files:[{fileName:"angular-coding-standard.md",title:"Typescript / Angular 20+ Coding Standards",cover:"angular-coding-standard.png",subtitle:"My personal collection of standards for building robust, responsive Angular applications using PrimeNG.",date:"2025-08-27T05:01:00.000Z",tags:["typescript","angular","PrimeNG"]},{fileName:"networking-1-lessons-learned.md",title:"Networking 1 - Lessons Learned",cover:"networking-1-lessons-learned.jpg",subtitle:"Problems I faced while setting up IP Passthrough for my local network and how I solved them.",date:"2025-08-27T05:00:00.000Z",tags:["networking"]},{fileName:"hello-blog.md",title:"Hello Blog",cover:"hello-blog.png",subtitle:"Testing blog post, please ignore. Explains how populating this blog works.",date:"2025-08-26T05:00:00.000Z",tags:["markdown","angular","obsidian","node"]}]};var re=class e{articleSource=m(()=>this.#e().articleSource);searchControl=m(()=>this.#e().searchControl);selectedTags=m(()=>this.#e().selectedTags);#e=P({searchControl:new on,articleSource:Nn.files,selectedTags:new Set});toggleTagSelection(n){return this.#e().selectedTags.has(n)?this.removeTag(n):this.addTag(n)}addTag(n){this.#e.update(t=>F(x({},t),{selectedTags:new Set([...t.selectedTags,n])}))}removeTag(n){this.#e.update(t=>{let i=new Set(t.selectedTags);return i.delete(n),F(x({},t),{selectedTags:i})})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=C({token:e,factory:e.\u0275fac})};var ve=class e{#e=d(re);control=this.#e.searchControl;featured=m(()=>this.articles().find(n=>n.tags.includes("featured"))||this.articles()[0]);others=m(()=>this.articles().filter(n=>n.title!==this.featured().title));articles=m(()=>this.#e.articleSource().map(n=>this.formatFile(n)));filterList=m(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=m(()=>[...this.#e.selectedTags()]);searchValue=pe(this.control().valueChanges.pipe(mt(300),gt(),J(n=>n?.toLowerCase()?.trim())));filteredArticles=m(()=>{let n=this.searchValue(),t=this.selectedTags();return this.others().filter(i=>this.includesSearchValue(i,n)&&this.includesTag(i.tags,t))});allTags=m(()=>[...new Set(this.articles().flatMap(n=>n.tags))]);toggleTagSelection(n){this.#e.toggleTagSelection(n)}formatFile(n){return F(x({},n),{date:new Date(n.date).toDateString(),routerLink:n.fileName.replace(".md","")})}includesSearchValue(n,t){return t?n.title.toLowerCase().includes(t)||n.subtitle.toLowerCase().includes(t)||n.tags.some(i=>i.toLowerCase().includes(t)):!0}includesTag(n,t){return t?.length?t.every(i=>n.map(r=>r.toLowerCase()).includes(i.toLowerCase())):!0}static \u0275fac=function(t){return new(t||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})};function Qi(e,n){if(e&1&&(s(0,"div",20),V(1,"img",21),s(2,"p-tag",22),b(3,"\u2728 Featured"),l()()),e&2){let t=v();o(),a("alt",Je(t.facade.featured().title))("ngSrc","blog/"+t.facade.featured().cover)}}function Yi(e,n){if(e&1&&b(0),e&2){let t=v();ue(" ",t.facade.featured().title||"Article"," ")}}function Zi(e,n){if(e&1){let t=Me();s(0,"app-article-tag",25),N("tagClick",function(r){ye(t);let c=v(2);return _e(c.facade.toggleTagSelection(r))}),l()}if(e&2){let t=n.$implicit;a("value",t)}}function Xi(e,n){if(e&1&&(s(0,"div",23)(1,"div",24),se(2,Zi,1,1,"app-article-tag",17,ae),l(),s(4,"div"),b(5),l()()),e&2){let t=v();o(2),le(t.facade.featured().tags),o(3),H(t.facade.featured().date)}}function Ji(e,n){if(e&1){let t=Me();s(0,"app-article-tag",25),N("tagClick",function(r){ye(t);let c=v();return _e(c.facade.toggleTagSelection(r))}),l()}if(e&2){let t=n.$implicit;a("value",t)}}function Ki(e,n){if(e&1&&(s(0,"div")(1,"span",26),b(2),we(3,"join"),l()()),e&2){let t=v();o(2),ue("Filter by: ",Fe(3,1,t.facade.filterList()))}}function er(e,n){if(e&1&&(s(0,"div",27),V(1,"img",21),l()),e&2){let t=v().$implicit;o(),a("alt",Je(t.title))("ngSrc","blog/"+t.cover)}}function tr(e,n){if(e&1&&b(0),e&2){let t=v().$implicit;H(t.title||"Article")}}function nr(e,n){if(e&1){let t=Me();s(0,"app-article-tag",25),N("tagClick",function(r){ye(t);let c=v(3);return _e(c.facade.toggleTagSelection(r))}),l()}if(e&2){let t=n.$implicit;a("value",t)}}function ir(e,n){if(e&1&&(s(0,"div",23)(1,"div",24),se(2,nr,1,1,"app-article-tag",17,ae),l(),s(4,"div"),b(5),l()()),e&2){let t=v().$implicit;o(2),le(t.tags),o(3),H(t.date)}}function rr(e,n){if(e&1&&(s(0,"p-card",19),M(1,er,2,3,"ng-template",null,0,Q)(3,tr,1,1,"ng-template",null,1,Q)(5,ir,6,1,"ng-template",null,2,Q),s(7,"p",9),b(8),l()()),e&2){let t=n.$implicit;a("routerLink",t.routerLink),o(8),H(t.subtitle)}}var He=class e{facade=d(ve);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-chittylog-container"]],features:[D([re,ve])],decls:36,vars:4,consts:[["header",""],["title",""],["subtitle",""],[1,"page-container"],[1,"title","white"],[1,"title","gradient"],[1,"subtitle"],[1,"w-95"],[1,"card","featured",3,"routerLink"],[1,"multiline-ellipsis"],[1,"search-container"],["variant","in"],[1,"pi","pi-search"],["pInputText","","id","search_articles",1,"search-input",3,"formControl"],["for","search_articles"],[1,"tag-search-container"],[1,"tag-container"],[1,"clickable",3,"value"],[1,"card-container"],[1,"card",3,"routerLink"],[1,"box","featured"],["fill","",1,"img-fill",3,"alt","ngSrc"],[1,"featured-tag-overlay"],[1,"display-flex","flex-col","row-gap-2"],[1,"display-flex","flex-row","col-gap-2"],[1,"clickable",3,"tagClick","value"],[1,"text-sm"],[1,"box"]],template:function(t,i){t&1&&(s(0,"div",3)(1,"h1")(2,"span",4),b(3,"Chitty"),l(),s(4,"span",5),b(5,"blog"),l()(),s(6,"h3",6),b(7," Guides, updates, and random thoughts directly from me \u{1F30C} "),l(),s(8,"div",7)(9,"p-card",8),M(10,Qi,4,3,"ng-template",null,0,Q)(12,Yi,1,1,"ng-template",null,1,Q)(14,Xi,6,1,"ng-template",null,2,Q),s(16,"p",9),b(17),l()()(),s(18,"div",10)(19,"p-floatlabel",11)(20,"p-iconfield"),V(21,"p-inputicon",12)(22,"input",13),l(),s(23,"label",14),b(24,"Search articles..."),l()()(),s(25,"div",15)(26,"div")(27,"p"),b(28,"Search by tag:"),l()(),s(29,"div",16),se(30,Ji,1,1,"app-article-tag",17,ae),l()(),Ce(32,Ki,4,3,"div"),s(33,"div",18),se(34,rr,9,2,"p-card",19,ae),l()()),t&2&&(o(9),a("routerLink",i.facade.featured().routerLink),o(8),H(i.facade.featured().subtitle),o(5),a("formControl",i.facade.control()),o(8),le(i.facade.allTags()),o(2),De(i.facade.filterList().length?32:-1),o(2),le(i.facade.filteredArticles()))},dependencies:[fn,Ft,Ee,vn,Cn,xn,In,ln,Oe,nn,dn,at,Ge,Re,Le],styles:['.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4bb,#b48);-webkit-background-clip:text;background-clip:text;color:transparent}.box.featured[_ngcontent-%COMP%]{height:22rem;position:relative}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.featured-tag-overlay[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:10;background:linear-gradient(135deg,#8e44ad,#3498db);color:#fff;border-radius:20px;padding:.5rem 1rem;font-weight:700;font-size:1.05em;border:none;box-shadow:0 2px 8px #0000004d}@media(max-width:768px){.featured-tag-overlay[_ngcontent-%COMP%]{top:.75rem;left:.75rem;font-size:1.03em;padding:.4rem .8rem}}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media(max-width:768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.white[_ngcontent-%COMP%]{color:#cfcbc6}.subtitle[_ngcontent-%COMP%]{font-weight:100;font-size:1rem;color:#cacaca;text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media(max-width:768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card.featured[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #2ceaddb3}.card.featured[_ngcontent-%COMP%]:before{background:linear-gradient(0deg,transparent,transparent 30%,rgba(44,234,221,.3))}.card.featured[_ngcontent-%COMP%]{width:unset}.card[_ngcontent-%COMP%]{width:22rem;position:relative;overflow:hidden;transition:all .5s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);box-shadow:0 0 20px #bb448880}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(187,68,136,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0;z-index:1;pointer-events:none}.card[_ngcontent-%COMP%]:hover:before{opacity:1;transform:rotate(-45deg) translateY(100%)}'],changeDetection:0})};function kn(e){let n=d(Ye);return pt(()=>e().then(t=>n.get(t)))}var Pn=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var or={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},On=(()=>{class e extends E{name="progressspinner";style=Pn;classes=or;static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Bn=new y("PROGRESSSPINNER_INSTANCE"),jn=(()=>{class e extends T{componentName="ProgressSpinner";$pcProgressSpinner=d(Bn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(p,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=d(On);static \u0275fac=(()=>{let t;return function(r){return(t||(t=h(e)))(r||e)}})();static \u0275cmp=g({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(i,r){i&2&&(W("aria-label",r.ariaLabel)("role","progressbar")("aria-busy",!0),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[D([On,{provide:Bn,useExisting:e},{provide:S,useExisting:e}]),A([p]),_],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(i,r){i&1&&(vt(),s(0,"svg",0),V(1,"circle",1),l()),i&2&&(f(r.cx("spin")),Ve("animation-duration",r.animationDuration),a("pBind",r.ptm("spin")),o(),f(r.cx("circle")),a("pBind",r.ptm("circle")),W("fill",r.fill)("stroke-width",r.strokeWidth))},dependencies:[L,z,p],encapsulation:2,changeDetection:0})}return e})();var ar=["*"];function sr(e,n){e&1&&(s(0,"div",1)(1,"div",2),V(2,"p-progress-spinner"),l()())}var $e=class e{showSpinner=new lt(!1);spinWhileUndefined=k();spinListener=oe(()=>{this.spinWhileUndefined()?this.hide():this.show()});show(){this.showSpinner.next(!0)}hide(){this.showSpinner.next(!1)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-loading-spinner"]],inputs:{spinWhileUndefined:[1,"spinWhileUndefined"]},ngContentSelectors:ar,decls:4,vars:3,consts:[[1,"content"],[1,"overlay"],[1,"spinner"]],template:function(t,i){t&1&&(B(),s(0,"div",0),I(1),l(),Ce(2,sr,3,0,"div",1),we(3,"async")),t&2&&(o(2),De(Fe(3,1,i.showSpinner)?2:-1))},dependencies:[jn,wt],styles:["[_nghost-%COMP%]{display:flex;flex-flow:row nowrap;height:100%;flex:1;min-height:0}.overlay[_ngcontent-%COMP%]{box-sizing:border-box;flex:none;width:101%;margin-left:-100%;display:flex;flex-direction:column;justify-content:space-around;z-index:500;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.spinner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.spinner[_ngcontent-%COMP%]   p-progress-spinner[_ngcontent-%COMP%]{flex:1;min-height:0}.content[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column}"],changeDetection:0})};var ze=class e{articleContent=k.required({transform:n=>this.stripFrontMatter(n)});stripFrontMatter(n){let t=/^---\s*[\s\S]*?\s*---/;return n.replace(t,"").trim()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-post-markdown"]],inputs:{articleContent:[1,"articleContent"]},decls:1,vars:1,consts:[["emoji","",1,"markdown",3,"data"]],template:function(t,i){t&1&&V(0,"markdown",0),t&2&&a("data",i.articleContent())},dependencies:[Bt],styles:[".markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:#2e2e2e;color:#b48;padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}"],changeDetection:0})};var lr=()=>["../"],dr=()=>import("./chunk-4G5RJFI6.js").then(e=>e.ReadingTimeService),We=class e{route=d(At);api=d(jt);timeEstimate=kn(dr);shareButtonCopied=P(!1);shareButtonLabel=m(()=>this.shareButtonCopied()?"Copied!":"Share");article=pe(this.route.paramMap.pipe(J(n=>n.get("postName")||""),qe(n=>n?this.api.get(`blog/${n}.md`,{responseType:"text"}):ct(()=>"No route param")),ht(n=>(console.error(n),""))));timeToReadInMinutes=pe(ut([Ot(this.article),this.timeEstimate]).pipe(qe(([n,t])=>t.getReadingTimeInMinutes(n||""))));downloadMarkdown(){if(this.article()){let n=this.article(),t=new Blob([n],{type:"text/markdown"}),i=document.createElement("a");i.href=URL.createObjectURL(t),i.download="my-file.md",i.click(),URL.revokeObjectURL(i.href)}}copyCurrentUrl(){navigator.clipboard.writeText(window.location.href).then(()=>{}).catch(n=>{console.error("Failed to copy URL: ",n)})}handleShareClick(){this.copyCurrentUrl(),this.shareButtonCopied.set(!0),setTimeout(()=>{this.shareButtonCopied.set(!1)},2e3)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-post-container"]],decls:14,vars:9,consts:[["spinner",""],[1,"page-container"],[3,"spinWhileUndefined"],[1,"navigation-header"],["label","Back to Blog","icon","pi pi-chevron-left","severity","secondary",3,"routerLink","text"],[1,"action-buttons"],["icon","pi pi-share-alt","severity","secondary",3,"click","label","text"],["label","Download","icon","pi pi-download","severity","secondary",3,"click","text"],[1,"reading-time-container"],[1,"pi","pi-clock","reading-time-icon"],[1,"text-sm"],[1,"content-area"],[3,"articleContent"]],template:function(t,i){t&1&&(s(0,"div",1)(1,"app-loading-spinner",2,0)(3,"div",3),V(4,"p-button",4),s(5,"div",5)(6,"p-button",6),N("click",function(){return i.handleShareClick()}),l(),s(7,"p-button",7),N("click",function(){return i.downloadMarkdown()}),l()()(),s(8,"div",8),V(9,"i",9),s(10,"p",10),b(11),l()(),s(12,"div",11),V(13,"app-post-markdown",12),l()()()),t&2&&(o(),a("spinWhileUndefined",i.article()),o(3),a("routerLink",Mt(8,lr))("text",!0),o(2),a("label",i.shareButtonLabel())("text",!0),o(),a("text",!0),o(4),ue("",i.timeToReadInMinutes()," min. read"),o(2),a("articleContent",i.article()||""))},dependencies:[ze,Pt,kt,Ee,$e],styles:[".page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}@media(max-width:768px){.page-container[_ngcontent-%COMP%]{padding:1.5rem .75rem}}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}@media(max-width:768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:center}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.reading-time-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.reading-time-icon[_ngcontent-%COMP%]{font-size:.875rem;color:#cfcbc6}"],changeDetection:0})};var ol=[{path:"",component:He},{path:":postName",component:We}];export{ol as CHITTYLOG_ROUTES};
