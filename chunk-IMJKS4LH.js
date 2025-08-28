import{c as ft,e as fe,h as ge,i as yt}from"./chunk-IUZVISTG.js";import{a as Dt}from"./chunk-M4V4KDZ2.js";import{A as _t,C as Ct,D as bt,a as Ne,f as ut,g as ue,h as pe,i as R,o as pt,r as ht,s as gt,t as mt,u as vt,v as he,w as U,x as S,z as T}from"./chunk-NU7ZDCEL.js";import{$ as u,$a as m,$b as z,Ab as ke,Bb as tt,Cb as G,D as qe,Db as v,Eb as B,F as We,Fb as w,Gb as x,Hb as A,Ib as E,J as Qe,Lb as nt,Mb as it,Nb as rt,Ob as f,Pb as V,Qa as o,Qb as H,R as Ye,Rb as ot,Sb as at,Tb as C,Ua as Te,Ub as st,V as Ae,Va as F,W as _,Wb as lt,X as k,Xb as ct,Yb as de,Z as $,a as y,ab as O,ac as h,b as D,bb as P,cb as Xe,db as g,dc as dt,ea as Ee,eb as b,ec as I,fa as Ie,gb as ae,jb as Je,jc as L,l as Le,ma as N,o as Ue,ob as Ke,pb as et,q as $e,qa as Ze,qb as se,ra as p,rb as le,sb as ce,t as W,ta as Se,tb as c,ub as l,vb as d,wb as j,xb as K,yb as ee,z as ze,zb as Q}from"./chunk-Y2PX7POD.js";var Et=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(F(Te),F(Se))};static \u0275dir=P({type:e})}return e})(),fn=(()=>{class e extends Et{static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=P({type:e,features:[g]})}return e})(),It=new $("");var hn={provide:It,useExisting:Ae(()=>Ce),multi:!0};function gn(){let e=Ne()?Ne().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var mn=new $(""),Ce=(()=>{class e extends Et{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!gn())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(F(Te),F(Se),F(mn,8))};static \u0275dir=P({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&G("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[C([hn]),g]})}return e})();var vn=new $(""),yn=new $("");function St(e){return e!=null}function Tt(e){return Je(e)?Ue(e):e}function kt(e){let n={};return e.forEach(t=>{n=t!=null?y(y({},n),t):n}),Object.keys(n).length===0?null:n}function Nt(e,n){return n.map(t=>t(e))}function _n(e){return!e.validate}function Ot(e){return e.map(n=>_n(n)?n:t=>n.validate(t))}function Cn(e){if(!e)return null;let n=e.filter(St);return n.length==0?null:function(t){return kt(Nt(t,n))}}function Pt(e){return e!=null?Cn(Ot(e)):null}function bn(e){if(!e)return null;let n=e.filter(St);return n.length==0?null:function(t){let i=Nt(t,n).map(Tt);return ze(i).pipe(W(kt))}}function jt(e){return e!=null?bn(Ot(e)):null}function Vt(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Bt(e){return e._rawValidators}function Rt(e){return e._rawAsyncValidators}function Oe(e){return e?Array.isArray(e)?e:[e]:[]}function ve(e,n){return Array.isArray(e)?e.includes(n):e===n}function Mt(e,n){let t=Oe(n);return Oe(e).forEach(r=>{ve(t,r)||t.push(r)}),t}function Ft(e,n){return Oe(n).filter(t=>!ve(e,t))}var Pe=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Pt(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=jt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}};var q=class extends Pe{_parent=null;name=null;valueAccessor=null},je=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Dn={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Xi=D(y({},Dn),{"[class.ng-submitted]":"isSubmitted"}),Gt=(()=>{class e extends je{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(F(q,2))};static \u0275dir=P({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&it("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[g]})}return e})();var te="VALID",me="INVALID",Y="PENDING",ne="DISABLED",X=class{},ye=class extends X{value;source;constructor(n,t){super(),this.value=n,this.source=t}},ie=class extends X{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},re=class extends X{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},Z=class extends X{status;source;constructor(n,t){super(),this.status=n,this.source=t}};function Vn(e){return(be(e)?e.validators:e)||null}function Mn(e){return Array.isArray(e)?Pt(e):e||null}function Fn(e,n){return(be(n)?n.asyncValidators:e)||null}function wn(e){return Array.isArray(e)?jt(e):e||null}function be(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Be=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return z(this.statusReactive)}set status(n){z(()=>this.statusReactive.set(n))}_status=h(()=>this.statusReactive());statusReactive=N(void 0);get valid(){return this.status===te}get invalid(){return this.status===me}get pending(){return this.status==Y}get disabled(){return this.status===ne}get enabled(){return this.status!==ne}errors;get pristine(){return z(this.pristineReactive)}set pristine(n){z(()=>this.pristineReactive.set(n))}_pristine=h(()=>this.pristineReactive());pristineReactive=N(!0);get dirty(){return!this.pristine}get touched(){return z(this.touchedReactive)}set touched(n){z(()=>this.touchedReactive.set(n))}_touched=h(()=>this.touchedReactive());touchedReactive=N(!1);get untouched(){return!this.touched}_events=new Le;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Mt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Mt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ft(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ft(n,this._rawAsyncValidators))}hasValidator(n){return ve(this._rawValidators,n)}hasAsyncValidator(n){return ve(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(D(y({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new re(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new re(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(D(y({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new ie(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new ie(!0,i))}markAsPending(n={}){this.status=Y;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Z(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(D(y({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ne,this.errors=null,this._forEachChild(r=>{r.disable(D(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ye(this.value,i)),this._events.next(new Z(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(y({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=te,this._forEachChild(i=>{i.enable(D(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(D(y({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===te||this.status===Y)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ye(this.value,t)),this._events.next(new Z(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(D(y({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ne:te}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=Y,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let i=Tt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Z(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new ae,this.statusChanges=new ae}_calculateStatus(){return this._allControlsDisabled()?ne:this.errors?me:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Y)?Y:this._anyControlsHaveStatus(me)?me:te}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),r&&this._events.next(new ie(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new re(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){be(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Mn(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=wn(this._rawAsyncValidators)}};var Re=new $("",{providedIn:"root",factory:()=>De}),De="always";function xn(e,n,t=De){En(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),Sn(e,n),kn(e,n),Tn(e,n),An(e,n)}function wt(e,n,t=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),In(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function _e(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function An(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function En(e,n){let t=Bt(e);n.validator!==null?e.setValidators(Vt(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=Rt(e);n.asyncValidator!==null?e.setAsyncValidators(Vt(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();_e(n._rawValidators,r),_e(n._rawAsyncValidators,r)}function In(e,n){let t=!1;if(e!==null){if(n.validator!==null){let r=Bt(e);if(Array.isArray(r)&&r.length>0){let a=r.filter(s=>s!==n.validator);a.length!==r.length&&(t=!0,e.setValidators(a))}}if(n.asyncValidator!==null){let r=Rt(e);if(Array.isArray(r)&&r.length>0){let a=r.filter(s=>s!==n.asyncValidator);a.length!==r.length&&(t=!0,e.setAsyncValidators(a))}}}let i=()=>{};return _e(n._rawValidators,i),_e(n._rawAsyncValidators,i),t}function Sn(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Ht(e,n)})}function Tn(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Ht(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function Ht(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function kn(e,n){let t=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Nn(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function On(e){return Object.getPrototypeOf(e.constructor)===fn}function Pn(e,n){if(!n)return null;Array.isArray(n);let t,i,r;return n.forEach(a=>{a.constructor===Ce?t=a:On(a)?i=a:r=a}),r||i||t||null}function xt(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function At(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Lt=class extends Be{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(Vn(t),Fn(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),be(t)&&(t.nonNullable||t.initialValueIsDefault)&&(At(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){xt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){xt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){At(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Ut=new $(""),jn={provide:q,useExisting:Ae(()=>Ge)},Ge=(()=>{class e extends q{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new ae;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,a,s){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=s,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Pn(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&wt(i,this,!1),xn(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Nn(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&wt(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||e)(F(vn,10),F(yn,10),F(It,10),F(Ut,8),F(Re,8))};static \u0275dir=P({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[C([jn]),g,Ze]})}return e})();var $t=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=k({})}return e})();var zt=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Re,useValue:t.callSetDisabledState??De}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=k({imports:[$t]})}return e})(),qt=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Ut,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Re,useValue:t.callSetDisabledState??De}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=k({imports:[$t]})}return e})();var Wt=`
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
`;var Gn=["header"],Hn=["title"],Ln=["subtitle"],Un=["content"],$n=["footer"],zn=["*",[["p-header"]],[["p-footer"]]],qn=["*","p-header","p-footer"];function Wn(e,n){e&1&&Q(0)}function Qn(e,n){if(e&1&&(l(0,"div"),w(1,1),b(2,Wn,1,0,"ng-container",1),d()),e&2){let t=v();f(t.cx("header")),o(2),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Yn(e,n){if(e&1&&(K(0),V(1),ee()),e&2){let t=v(2);o(),H(t.header)}}function Zn(e,n){e&1&&Q(0)}function Xn(e,n){if(e&1&&(l(0,"div"),b(1,Yn,2,1,"ng-container",2)(2,Zn,1,0,"ng-container",1),d()),e&2){let t=v();f(t.cx("title")),o(),c("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),o(),c("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Jn(e,n){if(e&1&&(K(0),V(1),ee()),e&2){let t=v(2);o(),H(t.subheader)}}function Kn(e,n){e&1&&Q(0)}function ei(e,n){if(e&1&&(l(0,"div"),b(1,Jn,2,1,"ng-container",2)(2,Kn,1,0,"ng-container",1),d()),e&2){let t=v();f(t.cx("subtitle")),o(),c("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),o(),c("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function ti(e,n){e&1&&Q(0)}function ni(e,n){e&1&&Q(0)}function ii(e,n){if(e&1&&(l(0,"div"),w(1,2),b(2,ni,1,0,"ng-container",1),d()),e&2){let t=v();f(t.cx("footer")),o(2),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ri=`
    ${Wt}

    .p-card {
        display: block;
    }
`,oi={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Qt=(()=>{class e extends S{name="card";theme=ri;classes=oi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Yt=(()=>{class e extends T{header;subheader;set style(t){gt(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=N(null);_componentStyle=u(Qt);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-card"]],contentQueries:function(i,r,a){if(i&1&&(x(a,mt,5),x(a,vt,5),x(a,Gn,4),x(a,Hn,4),x(a,Ln,4),x(a,Un,4),x(a,$n,4),x(a,he,4)),i&2){let s;A(s=E())&&(r.headerFacet=s.first),A(s=E())&&(r.footerFacet=s.first),A(s=E())&&(r.headerTemplate=s.first),A(s=E())&&(r.titleTemplate=s.first),A(s=E())&&(r.subtitleTemplate=s.first),A(s=E())&&(r.contentTemplate=s.first),A(s=E())&&(r.footerTemplate=s.first),A(s=E())&&(r.templates=s)}},hostVars:5,hostBindings:function(i,r){i&2&&(tt("data-pc-name","card"),rt(r._style()),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[C([Qt]),g],ngContentSelectors:qn,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,r){i&1&&(B(zn),b(0,Qn,3,3,"div",0),l(1,"div"),b(2,Xn,3,4,"div",0)(3,ei,3,4,"div",0),l(4,"div"),w(5),b(6,ti,1,0,"ng-container",1),d(),b(7,ii,3,3,"div",0),d()),i&2&&(c("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),o(),f(r.cx("body")),o(),c("ngIf",r.header||r.titleTemplate||r._titleTemplate),o(),c("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),o(),f(r.cx("content")),o(2),c("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),o(),c("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[R,ue,pe,U],encapsulation:2,changeDetection:0})}return e})();var Zt=`
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
`;var ai=["*"],si=`
    ${Zt}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,li={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},Xt=(()=>{class e extends S{name="floatlabel";theme=si;classes=li;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Jt=(()=>{class e extends T{_componentStyle=u(Xt);variant="over";static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cx("root"))},inputs:{variant:"variant"},features:[C([Xt]),g],ngContentSelectors:ai,decls:1,vars:0,template:function(i,r){i&1&&(B(),w(0))},dependencies:[R,U],encapsulation:2,changeDetection:0})}return e})();var Kt=`
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
`;var ci=["*"],di={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},en=(()=>{class e extends S{name="iconfield";theme=Kt;classes=di;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var tn=(()=>{class e extends T{iconPosition="left";styleClass;_componentStyle=u(en);static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[C([en]),g],ngContentSelectors:ci,decls:1,vars:0,template:function(i,r){i&1&&(B(),w(0))},dependencies:[R],encapsulation:2,changeDetection:0})}return e})();var ui=["*"],pi={root:"p-inputicon"},nn=(()=>{class e extends S{name="inputicon";classes=pi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})(),rn=(()=>{class e extends T{styleClass;_componentStyle=u(nn);static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{styleClass:"styleClass"},features:[C([nn]),g],ngContentSelectors:ui,decls:1,vars:0,template:function(i,r){i&1&&(B(),w(0))},dependencies:[R,U],encapsulation:2,changeDetection:0})}return e})();var on=(()=>{class e extends T{required=I(void 0,{transform:L});invalid=I(void 0,{transform:L});disabled=I(void 0,{transform:L});name=I();modelValue=N(void 0);$filled=h(()=>ht(this.modelValue()));writeModelValue(t,i){this.modelValue.set(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=P({type:e,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[g]})}return e})();var an=`
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
`;var fi=`
    ${an}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,hi={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},sn=(()=>{class e extends S{name="inputtext";theme=fi;classes=hi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var ln=(()=>{class e extends on{ngControl=u(q,{optional:!0,self:!0});pcFluid=u(_t,{optional:!0,host:!0,skipSelf:!0});pSize;variant=I();fluid=I(void 0,{transform:L});$variant=h(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=u(sn);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value,t)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=P({type:e,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(i,r){i&1&&G("input",function(s){return r.onInput(s)}),i&2&&f(r.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"]},features:[C([sn]),g]})}return e})();var Ve=class e{transform(n,t=", "){return n==null||!Array.isArray(n)?null:n.filter(r=>typeof r=="string").join(t)}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=Xe({name:"join",type:e,pure:!0})};var cn=`
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
`;var gi=["icon"],mi=["*"];function vi(e,n){if(e&1&&j(0,"span",3),e&2){let t=v(2);f(t.cx("icon")),c("ngClass",t.icon)}}function yi(e,n){if(e&1&&(K(0),b(1,vi,1,3,"span",2),ee()),e&2){let t=v();o(),c("ngIf",t.icon)}}function _i(e,n){}function Ci(e,n){e&1&&b(0,_i,0,0,"ng-template")}function bi(e,n){if(e&1&&(l(0,"span"),b(1,Ci,1,0,null,4),d()),e&2){let t=v();f(t.cx("icon")),o(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var Di={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},dn=(()=>{class e extends S{name="tag";theme=cn;classes=Di;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var un=(()=>{class e extends T{styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=u(dn);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-tag"]],contentQueries:function(i,r,a){if(i&1&&(x(a,gi,4),x(a,he,4)),i&2){let s;A(s=E())&&(r.iconTemplate=s.first),A(s=E())&&(r.templates=s)}},hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",L]},features:[C([dn]),g],ngContentSelectors:mi,decls:5,vars:5,consts:[[4,"ngIf"],[3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(i,r){i&1&&(B(),w(0),b(1,yi,2,1,"ng-container",0)(2,bi,2,3,"span",1),l(3,"span"),V(4),d()),i&2&&(o(),c("ngIf",!r.iconTemplate&&!r._iconTemplate),o(),c("ngIf",r.iconTemplate||r._iconTemplate),o(),f(r.cx("label")),o(),H(r.value))},dependencies:[R,ut,ue,pe,U],encapsulation:2,changeDetection:0})}return e})();var Me=class e{TAG_CONFIG={angular:{background:"#a51e24",textColor:"#FFFFFF"},primeng:{background:"#a51e24",textColor:"#FFFFFF"},typescript:{background:"#007acc",textColor:"#FFFFFF"},node:{background:"#3e863d",textColor:"#FFFFFF"},obsidian:{background:"#582bac",textColor:"#FFFFFF"},markdown:{background:"#196989",textColor:"#FFFFFF"}};value=I.required();currentConfig=h(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:"rgba(51,51,51,0.88)",textColor:"#FFFFFF"});tagClick=dt();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-article-tag"]],inputs:{value:[1,"value"]},outputs:{tagClick:"tagClick"},decls:1,vars:9,consts:[["severity","info",3,"click","value"]],template:function(t,i){t&1&&(l(0,"p-tag",0),G("click",function(){return i.tagClick.emit(i.value())}),d()),t&2&&(nt("border-radius","20px")("font-weight","500")("background-color",i.currentConfig().background)("color",i.currentConfig().textColor),c("value",i.value()))},dependencies:[un],encapsulation:2,changeDetection:0})};var pn={files:[{fileName:"angular-coding-standard.md",title:"Typescript / Angular 20+ Coding Standards",cover:"angular-coding-standard.png",subtitle:"My personal collection of standards for building robust, responsive Angular applications using PrimeNG.",date:"2025-08-27T05:01:00.000Z",tags:["typescript","angular","PrimeNG"]},{fileName:"networking-1-lessons-learned.md",title:"Networking 1 - Lessons Learned",cover:"networking-1-lessons-learned.jpg",subtitle:"Problems I faced while setting up IP Passthrough for my local network and how I solved them.",date:"2025-08-27T05:00:00.000Z",tags:["networking"]},{fileName:"hello-blog.md",title:"Hello Blog",cover:"hello-blog.png",subtitle:"Testing blog post, please ignore. Explains how populating this blog works.",date:"2025-08-26T05:00:00.000Z",tags:["markdown","angular","obsidian","node"]}]};var J=class e{articleSource=h(()=>this.#e().articleSource);searchControl=h(()=>this.#e().searchControl);selectedTags=h(()=>(console.log("selectedTags store ran"),this.#e().selectedTags));#e=N({searchControl:new Lt,articleSource:pn.files,selectedTags:new Set});toggleTagSelection(n){return this.#e().selectedTags.has(n)?this.removeTag(n):this.addTag(n)}addTag(n){this.#e.update(t=>D(y({},t),{selectedTags:new Set([...t.selectedTags,n])}))}removeTag(n){this.#e.update(t=>{let i=new Set(t.selectedTags);return i.delete(n),D(y({},t),{selectedTags:i})})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=_({token:e,factory:e.\u0275fac})};var oe=class e{#e=u(J);control=this.#e.searchControl;articles=h(()=>this.#e.articleSource().map(n=>this.formatFile(n)));filterList=h(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=h(()=>[...this.#e.selectedTags()]);searchValue=ge(this.control().valueChanges.pipe(We(300),Qe(),W(n=>n?.toLowerCase()?.trim())));filteredArticles=h(()=>{let n=this.searchValue(),t=this.selectedTags();return this.articles().filter(i=>this.includesSearchValue(i,n)&&this.includesTag(i.tags,t))});allTags=h(()=>[...new Set(this.articles().flatMap(n=>n.tags))]);toggleTagSelection(n){this.#e.toggleTagSelection(n)}formatFile(n){return D(y({},n),{date:new Date(n.date).toDateString(),routerLink:n.fileName.replace(".md","")})}includesSearchValue(n,t){return t?n.title.toLowerCase().includes(t)||n.subtitle.toLowerCase().includes(t)||n.tags.some(i=>i.toLowerCase().includes(t)):!0}includesTag(n,t){return t?.length?t.every(i=>n.map(r=>r.toLowerCase()).includes(i.toLowerCase())):!0}static \u0275fac=function(t){return new(t||e)};static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})};function Vi(e,n){if(e&1){let t=ke();l(0,"app-article-tag",17),G("tagClick",function(r){Ee(t);let a=v();return Ie(a.facade.toggleTagSelection(r))}),d()}if(e&2){let t=n.$implicit;c("value",t)}}function Mi(e,n){if(e&1&&(l(0,"div")(1,"span",18),V(2),lt(3,"join"),d()()),e&2){let t=v();o(2),ot("Filter by: ",ct(3,1,t.facade.filterList()))}}function Fi(e,n){if(e&1&&(l(0,"div",20),j(1,"img",21),d()),e&2){let t=v().$implicit;o(),c("alt",at(t.title))("ngSrc","blog/"+t.cover)}}function wi(e,n){if(e&1&&V(0),e&2){let t=v().$implicit;H(t.title||"Article")}}function xi(e,n){if(e&1){let t=ke();l(0,"app-article-tag",17),G("tagClick",function(r){Ee(t);let a=v(3);return Ie(a.facade.toggleTagSelection(r))}),d()}if(e&2){let t=n.$implicit;c("value",t)}}function Ai(e,n){if(e&1&&(l(0,"div",22)(1,"div",23),le(2,xi,1,1,"app-article-tag",14,se),d(),l(4,"div"),V(5),d()()),e&2){let t=v().$implicit;o(2),ce(t.tags),o(3),H(t.date)}}function Ei(e,n){if(e&1&&(l(0,"p-card",16),b(1,Fi,2,3,"ng-template",null,0,de)(3,wi,1,1,"ng-template",null,1,de)(5,Ai,6,1,"ng-template",null,2,de),l(7,"p",19),V(8),d()()),e&2){let t=n.$implicit;c("routerLink",t.routerLink),o(8),H(t.subtitle)}}var Fe=class e{facade=u(oe);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-chittylog-container"]],features:[C([J,oe])],decls:26,vars:2,consts:[["header",""],["title",""],["subtitle",""],[1,"page-container"],[1,"title","white"],[1,"title","gradient"],[1,"subtitle"],[1,"search-container"],["variant","in"],[1,"pi","pi-search"],["pInputText","","id","search_articles",1,"search-input",3,"formControl"],["for","search_articles"],[1,"tag-search-container"],[1,"tag-container"],[1,"clickable",3,"value"],[1,"card-container"],[1,"card",3,"routerLink"],[1,"clickable",3,"tagClick","value"],[1,"text-sm"],[1,"multiline-ellipsis"],[1,"box"],["fill","",1,"img-fill",3,"alt","ngSrc"],[1,"display-flex","flex-col","row-gap-2"],[1,"display-flex","flex-row","col-gap-2"]],template:function(t,i){if(t&1&&(l(0,"div",3)(1,"h1")(2,"span",4),V(3,"Chitty"),d(),l(4,"span",5),V(5,"blog"),d()(),l(6,"h3",6),V(7," Guides, updates, and random thoughts directly from me \u{1F30C} "),d(),l(8,"div",7)(9,"p-floatlabel",8)(10,"p-iconfield"),j(11,"p-inputicon",9)(12,"input",10),d(),l(13,"label",11),V(14,"Search articles..."),d()()(),l(15,"div",12)(16,"div")(17,"p"),V(18,"Search by tag:"),d()(),l(19,"div",13),le(20,Vi,1,1,"app-article-tag",14,se),d()(),Ke(22,Mi,4,3,"div"),l(23,"div",15),le(24,Ei,9,2,"p-card",16,se),d()()),t&2){let r;o(12),c("formControl",i.facade.control()),o(8),ce(i.facade.allTags()),o(2),et((r=i.facade.filterList())!=null&&r.length?22:-1),o(2),ce(i.facade.filteredArticles())}},dependencies:[Yt,pt,fe,Jt,tn,rn,ln,zt,Ce,Gt,qt,Ge,Me,Ve],styles:['.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4bb,#b48);-webkit-background-clip:text;background-clip:text;color:transparent}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media (max-width: 768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.white[_ngcontent-%COMP%]{color:#cfcbc6}.subtitle[_ngcontent-%COMP%]{font-weight:100;font-size:1rem;color:#cacaca;text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media (max-width: 768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card[_ngcontent-%COMP%]{width:22rem;position:relative;overflow:hidden;transition:all .5s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);box-shadow:0 0 20px #bb448880}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(187,68,136,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0;z-index:1;pointer-events:none}.card[_ngcontent-%COMP%]:hover:before{opacity:1;transform:rotate(-45deg) translateY(100%)}']})};var we=class e{articleContent=I.required({transform:n=>this.stripFrontMatter(n)});stripFrontMatter(n){let t=/^---\s*[\s\S]*?\s*---/;return n.replace(t,"").trim()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-post-markdown"]],inputs:{articleContent:[1,"articleContent"]},decls:1,vars:1,consts:[["emoji","",1,"markdown",3,"data"]],template:function(t,i){t&1&&j(0,"markdown",0),t&2&&c("data",i.articleContent())},dependencies:[yt],styles:[".markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:#2e2e2e;color:#b48;padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}"],changeDetection:0})};var Ii=()=>["../"],xe=class e{route=u(ft);api=u(Dt);article=ge(this.route.paramMap.pipe(W(n=>n.get("postName")||""),Ye(n=>n?this.api.get(`blog/${n}.md`,{responseType:"text"}):$e(()=>"No route param")),qe(n=>(console.error(n),""))));static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-post-container"]],decls:5,vars:4,consts:[[1,"page-container"],[1,"navigation-header"],["label","Back to Blog","icon","pi pi-chevron-left","severity","secondary",3,"routerLink","text"],[1,"content-area"],[3,"articleContent"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),j(2,"p-button",2),d(),l(3,"div",3),j(4,"app-post-markdown",4),d()()),t&2&&(o(2),c("routerLink",st(3,Ii))("text",!0),o(2),c("articleContent",i.article()||""))},dependencies:[we,bt,Ct,fe],styles:[".page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:1.5rem}@media (max-width: 768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}"],changeDetection:0})};var Ga=[{path:"",component:Fe},{path:":postName",component:xe}];export{Ga as CHITTYLOG_ROUTES};
