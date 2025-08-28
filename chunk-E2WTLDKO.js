import{c as mt,e as ge,h as bt,i as te,j as Dt}from"./chunk-4FJET3BO.js";import{a as xt}from"./chunk-LH45YIJX.js";import{A as Vt,C as Mt,D as Ft,a as je,f as ht,g as fe,h as he,i as R,o as gt,r as vt,s as yt,t as _t,u as Ct,v as me,w as U,x as S,z as T}from"./chunk-SOEV3D5C.js";import{$ as Se,$a as D,$b as I,A as Je,Ab as x,Bb as w,Cb as A,Db as E,E as Ke,Gb as at,Hb as st,Ib as lt,Jb as f,Kb as C,La as o,Lb as H,M as Ee,Mb as ue,Nb as ct,Ob as b,Pa as Ne,Pb as dt,Q as Ie,Qa as F,R as _,Rb as ut,S as O,Sb as pt,Tb as pe,U as $,W as u,Wa as m,Wb as z,Xa as P,Xb as h,Ya as j,Za as tt,_a as g,_b as ft,aa as Te,bb as se,ca as ke,eb as nt,ec as L,f as ze,ha as N,j as qe,jb as it,kb as rt,l as We,la as et,lb as le,ma as p,mb as ce,nb as de,o as W,oa as Oe,ob as d,p as Qe,pb as s,qb as c,rb as k,sb as K,t as Ye,tb as ee,u as Ze,ub as Q,vb as Pe,wb as ot,xb as G,y as Xe,yb as v,zb as B}from"./chunk-S7SLWEGX.js";import{a as y,b as V}from"./chunk-EQDQRRRY.js";var kt=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(F(Ne),F(Oe))};static \u0275dir=j({type:e})}return e})(),yn=(()=>{class e extends kt{static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=j({type:e,features:[g]})}return e})(),Ot=new $("");var _n={provide:Ot,useExisting:Ie(()=>be),multi:!0};function Cn(){let e=je()?je().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var bn=new $(""),be=(()=>{class e extends kt{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Cn())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(F(Ne),F(Oe),F(bn,8))};static \u0275dir=j({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&G("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},standalone:!1,features:[b([_n]),g]})}return e})();var Dn=new $(""),Vn=new $("");function Nt(e){return e!=null}function Pt(e){return nt(e)?qe(e):e}function jt(e){let n={};return e.forEach(t=>{n=t!=null?y(y({},n),t):n}),Object.keys(n).length===0?null:n}function Bt(e,n){return n.map(t=>t(e))}function Mn(e){return!e.validate}function Rt(e){return e.map(n=>Mn(n)?n:t=>n.validate(t))}function Fn(e){if(!e)return null;let n=e.filter(Nt);return n.length==0?null:function(t){return jt(Bt(t,n))}}function Gt(e){return e!=null?Fn(Rt(e)):null}function xn(e){if(!e)return null;let n=e.filter(Nt);return n.length==0?null:function(t){let i=Bt(t,n).map(Pt);return Ze(i).pipe(W(jt))}}function Ht(e){return e!=null?xn(Rt(e)):null}function wt(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Lt(e){return e._rawValidators}function Ut(e){return e._rawAsyncValidators}function Be(e){return e?Array.isArray(e)?e:[e]:[]}function ye(e,n){return Array.isArray(e)?e.includes(n):e===n}function At(e,n){let t=Be(n);return Be(e).forEach(r=>{ye(t,r)||t.push(r)}),t}function Et(e,n){return Be(n).filter(t=>!ye(e,t))}var Re=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Gt(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Ht(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}};var q=class extends Re{_parent=null;name=null;valueAccessor=null},Ge=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},wn={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},nr=V(y({},wn),{"[class.ng-submitted]":"isSubmitted"}),$t=(()=>{class e extends Ge{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(F(q,2))};static \u0275dir=j({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&st("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[g]})}return e})();var ne="VALID",ve="INVALID",Y="PENDING",ie="DISABLED",X=class{},_e=class extends X{value;source;constructor(n,t){super(),this.value=n,this.source=t}},re=class extends X{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},oe=class extends X{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},Z=class extends X{status;source;constructor(n,t){super(),this.status=n,this.source=t}};function An(e){return(De(e)?e.validators:e)||null}function En(e){return Array.isArray(e)?Gt(e):e||null}function In(e,n){return(De(n)?n.asyncValidators:e)||null}function Sn(e){return Array.isArray(e)?Ht(e):e||null}function De(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var He=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return z(this.statusReactive)}set status(n){z(()=>this.statusReactive.set(n))}_status=h(()=>this.statusReactive());statusReactive=N(void 0);get valid(){return this.status===ne}get invalid(){return this.status===ve}get pending(){return this.status==Y}get disabled(){return this.status===ie}get enabled(){return this.status!==ie}errors;get pristine(){return z(this.pristineReactive)}set pristine(n){z(()=>this.pristineReactive.set(n))}_pristine=h(()=>this.pristineReactive());pristineReactive=N(!0);get dirty(){return!this.pristine}get touched(){return z(this.touchedReactive)}set touched(n){z(()=>this.touchedReactive.set(n))}_touched=h(()=>this.touchedReactive());touchedReactive=N(!1);get untouched(){return!this.touched}_events=new ze;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(At(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(At(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Et(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Et(n,this._rawAsyncValidators))}hasValidator(n){return ye(this._rawValidators,n)}hasAsyncValidator(n){return ye(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(V(y({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new oe(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new oe(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(V(y({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new re(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new re(!0,i))}markAsPending(n={}){this.status=Y;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Z(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(V(y({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ie,this.errors=null,this._forEachChild(r=>{r.disable(V(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new _e(this.value,i)),this._events.next(new Z(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(y({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ne,this._forEachChild(i=>{i.enable(V(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(V(y({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ne||this.status===Y)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new _e(this.value,t)),this._events.next(new Z(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(V(y({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ie:ne}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=Y,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let i=Pt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Z(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new se,this.statusChanges=new se}_calculateStatus(){return this._allControlsDisabled()?ie:this.errors?ve:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Y)?Y:this._anyControlsHaveStatus(ve)?ve:ne}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),r&&this._events.next(new re(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new oe(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){De(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=En(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Sn(this._rawAsyncValidators)}};var Le=new $("",{providedIn:"root",factory:()=>Ve}),Ve="always";function Tn(e,n,t=Ve){On(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),Pn(e,n),Bn(e,n),jn(e,n),kn(e,n)}function It(e,n,t=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),Nn(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Ce(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function kn(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function On(e,n){let t=Lt(e);n.validator!==null?e.setValidators(wt(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=Ut(e);n.asyncValidator!==null?e.setAsyncValidators(wt(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();Ce(n._rawValidators,r),Ce(n._rawAsyncValidators,r)}function Nn(e,n){let t=!1;if(e!==null){if(n.validator!==null){let r=Lt(e);if(Array.isArray(r)&&r.length>0){let a=r.filter(l=>l!==n.validator);a.length!==r.length&&(t=!0,e.setValidators(a))}}if(n.asyncValidator!==null){let r=Ut(e);if(Array.isArray(r)&&r.length>0){let a=r.filter(l=>l!==n.asyncValidator);a.length!==r.length&&(t=!0,e.setAsyncValidators(a))}}}let i=()=>{};return Ce(n._rawValidators,i),Ce(n._rawAsyncValidators,i),t}function Pn(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&zt(e,n)})}function jn(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&zt(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function zt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Bn(e,n){let t=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Rn(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function Gn(e){return Object.getPrototypeOf(e.constructor)===yn}function Hn(e,n){if(!n)return null;Array.isArray(n);let t,i,r;return n.forEach(a=>{a.constructor===be?t=a:Gn(a)?i=a:r=a}),r||i||t||null}function St(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function Tt(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var qt=class extends He{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(An(t),In(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),De(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Tt(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){St(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){St(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Tt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Wt=new $(""),Ln={provide:q,useExisting:Ie(()=>Ue)},Ue=(()=>{class e extends q{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new se;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,a,l){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=l,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Hn(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&It(i,this,!1),Tn(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Rn(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&It(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||e)(F(Dn,10),F(Vn,10),F(Ot,10),F(Wt,8),F(Le,8))};static \u0275dir=j({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[b([Ln]),g,et]})}return e})();var Qt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=O({})}return e})();var Yt=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Le,useValue:t.callSetDisabledState??Ve}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=O({imports:[Qt]})}return e})(),Zt=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Wt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Le,useValue:t.callSetDisabledState??Ve}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=P({type:e});static \u0275inj=O({imports:[Qt]})}return e})();var Xt=`
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
`;var zn=["header"],qn=["title"],Wn=["subtitle"],Qn=["content"],Yn=["footer"],Zn=["*",[["p-header"]],[["p-footer"]]],Xn=["*","p-header","p-footer"];function Jn(e,n){e&1&&Q(0)}function Kn(e,n){if(e&1&&(s(0,"div"),x(1,1),D(2,Jn,1,0,"ng-container",1),c()),e&2){let t=v();f(t.cx("header")),o(2),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function ei(e,n){if(e&1&&(K(0),C(1),ee()),e&2){let t=v(2);o(),H(t.header)}}function ti(e,n){e&1&&Q(0)}function ni(e,n){if(e&1&&(s(0,"div"),D(1,ei,2,1,"ng-container",2)(2,ti,1,0,"ng-container",1),c()),e&2){let t=v();f(t.cx("title")),o(),d("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),o(),d("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function ii(e,n){if(e&1&&(K(0),C(1),ee()),e&2){let t=v(2);o(),H(t.subheader)}}function ri(e,n){e&1&&Q(0)}function oi(e,n){if(e&1&&(s(0,"div"),D(1,ii,2,1,"ng-container",2)(2,ri,1,0,"ng-container",1),c()),e&2){let t=v();f(t.cx("subtitle")),o(),d("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),o(),d("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function ai(e,n){e&1&&Q(0)}function si(e,n){e&1&&Q(0)}function li(e,n){if(e&1&&(s(0,"div"),x(1,2),D(2,si,1,0,"ng-container",1),c()),e&2){let t=v();f(t.cx("footer")),o(2),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ci=`
    ${Xt}

    .p-card {
        display: block;
    }
`,di={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Jt=(()=>{class e extends S{name="card";theme=ci;classes=di;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Kt=(()=>{class e extends T{header;subheader;set style(t){yt(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=N(null);_componentStyle=u(Jt);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-card"]],contentQueries:function(i,r,a){if(i&1&&(w(a,_t,5),w(a,Ct,5),w(a,zn,4),w(a,qn,4),w(a,Wn,4),w(a,Qn,4),w(a,Yn,4),w(a,me,4)),i&2){let l;A(l=E())&&(r.headerFacet=l.first),A(l=E())&&(r.footerFacet=l.first),A(l=E())&&(r.headerTemplate=l.first),A(l=E())&&(r.titleTemplate=l.first),A(l=E())&&(r.subtitleTemplate=l.first),A(l=E())&&(r.contentTemplate=l.first),A(l=E())&&(r.footerTemplate=l.first),A(l=E())&&(r.templates=l)}},hostVars:5,hostBindings:function(i,r){i&2&&(ot("data-pc-name","card"),lt(r._style()),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[b([Jt]),g],ngContentSelectors:Xn,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,r){i&1&&(B(Zn),D(0,Kn,3,3,"div",0),s(1,"div"),D(2,ni,3,4,"div",0)(3,oi,3,4,"div",0),s(4,"div"),x(5),D(6,ai,1,0,"ng-container",1),c(),D(7,li,3,3,"div",0),c()),i&2&&(d("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),o(),f(r.cx("body")),o(),d("ngIf",r.header||r.titleTemplate||r._titleTemplate),o(),d("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),o(),f(r.cx("content")),o(2),d("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),o(),d("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[R,fe,he,U],encapsulation:2,changeDetection:0})}return e})();var en=`
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
`;var ui=["*"],pi=`
    ${en}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,fi={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},tn=(()=>{class e extends S{name="floatlabel";theme=pi;classes=fi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var nn=(()=>{class e extends T{_componentStyle=u(tn);variant="over";static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cx("root"))},inputs:{variant:"variant"},features:[b([tn]),g],ngContentSelectors:ui,decls:1,vars:0,template:function(i,r){i&1&&(B(),x(0))},dependencies:[R,U],encapsulation:2,changeDetection:0})}return e})();var rn=`
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
`;var hi=["*"],gi={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},on=(()=>{class e extends S{name="iconfield";theme=rn;classes=gi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var an=(()=>{class e extends T{iconPosition="left";styleClass;_componentStyle=u(on);static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[b([on]),g],ngContentSelectors:hi,decls:1,vars:0,template:function(i,r){i&1&&(B(),x(0))},dependencies:[R],encapsulation:2,changeDetection:0})}return e})();var mi=["*"],vi={root:"p-inputicon"},sn=(()=>{class e extends S{name="inputicon";classes=vi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})(),ln=(()=>{class e extends T{styleClass;_componentStyle=u(sn);static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{styleClass:"styleClass"},features:[b([sn]),g],ngContentSelectors:mi,decls:1,vars:0,template:function(i,r){i&1&&(B(),x(0))},dependencies:[R,U],encapsulation:2,changeDetection:0})}return e})();var cn=(()=>{class e extends T{required=I(void 0,{transform:L});invalid=I(void 0,{transform:L});disabled=I(void 0,{transform:L});name=I();modelValue=N(void 0);$filled=h(()=>vt(this.modelValue()));writeModelValue(t,i){this.modelValue.set(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=j({type:e,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[g]})}return e})();var dn=`
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
`;var yi=`
    ${dn}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,_i={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},un=(()=>{class e extends S{name="inputtext";theme=yi;classes=_i;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var pn=(()=>{class e extends cn{ngControl=u(q,{optional:!0,self:!0});pcFluid=u(Vt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=I();fluid=I(void 0,{transform:L});$variant=h(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=u(un);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value,t)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=j({type:e,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(i,r){i&1&&G("input",function(l){return r.onInput(l)}),i&2&&f(r.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"]},features:[b([un]),g]})}return e})();var Me=class e{transform(n,t=", "){return n==null||!Array.isArray(n)?null:n.filter(r=>typeof r=="string").join(t)}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=tt({name:"join",type:e,pure:!0})};var fn=`
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
`;var Ci=["icon"],bi=["*"];function Di(e,n){if(e&1&&k(0,"span",3),e&2){let t=v(2);f(t.cx("icon")),d("ngClass",t.icon)}}function Vi(e,n){if(e&1&&(K(0),D(1,Di,1,3,"span",2),ee()),e&2){let t=v();o(),d("ngIf",t.icon)}}function Mi(e,n){}function Fi(e,n){e&1&&D(0,Mi,0,0,"ng-template")}function xi(e,n){if(e&1&&(s(0,"span"),D(1,Fi,1,0,null,4),c()),e&2){let t=v();f(t.cx("icon")),o(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var wi={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},hn=(()=>{class e extends S{name="tag";theme=fn;classes=wi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var gn=(()=>{class e extends T{styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=u(hn);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=m({type:e,selectors:[["p-tag"]],contentQueries:function(i,r,a){if(i&1&&(w(a,Ci,4),w(a,me,4)),i&2){let l;A(l=E())&&(r.iconTemplate=l.first),A(l=E())&&(r.templates=l)}},hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",L]},features:[b([hn]),g],ngContentSelectors:bi,decls:5,vars:5,consts:[[4,"ngIf"],[3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(i,r){i&1&&(B(),x(0),D(1,Vi,2,1,"ng-container",0)(2,xi,2,3,"span",1),s(3,"span"),C(4),c()),i&2&&(o(),d("ngIf",!r.iconTemplate&&!r._iconTemplate),o(),d("ngIf",r.iconTemplate||r._iconTemplate),o(),f(r.cx("label")),o(),H(r.value))},dependencies:[R,ht,fe,he,U],encapsulation:2,changeDetection:0})}return e})();var Fe=class e{TAG_CONFIG={angular:{background:"#a51e24",textColor:"#FFFFFF"},primeng:{background:"#a51e24",textColor:"#FFFFFF"},typescript:{background:"#007acc",textColor:"#FFFFFF"},node:{background:"#3e863d",textColor:"#FFFFFF"},obsidian:{background:"#582bac",textColor:"#FFFFFF"},markdown:{background:"#196989",textColor:"#FFFFFF"}};value=I.required();currentConfig=h(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:"rgba(51,51,51,0.88)",textColor:"#FFFFFF"});tagClick=ft();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-article-tag"]],inputs:{value:[1,"value"]},outputs:{tagClick:"tagClick"},decls:1,vars:9,consts:[["severity","info",3,"click","value"]],template:function(t,i){t&1&&(s(0,"p-tag",0),G("click",function(){return i.tagClick.emit(i.value())}),c()),t&2&&(at("border-radius","20px")("font-weight","500")("background-color",i.currentConfig().background)("color",i.currentConfig().textColor),d("value",i.value()))},dependencies:[gn],encapsulation:2,changeDetection:0})};var mn={files:[{fileName:"angular-coding-standard.md",title:"Typescript / Angular 20+ Coding Standards",cover:"angular-coding-standard.png",subtitle:"My personal collection of standards for building robust, responsive Angular applications using PrimeNG.",date:"2025-08-27T05:01:00.000Z",tags:["typescript","angular","PrimeNG"]},{fileName:"networking-1-lessons-learned.md",title:"Networking 1 - Lessons Learned",cover:"networking-1-lessons-learned.jpg",subtitle:"Problems I faced while setting up IP Passthrough for my local network and how I solved them.",date:"2025-08-27T05:00:00.000Z",tags:["networking"]},{fileName:"hello-blog.md",title:"Hello Blog",cover:"hello-blog.png",subtitle:"Testing blog post, please ignore. Explains how populating this blog works.",date:"2025-08-26T05:00:00.000Z",tags:["markdown","angular","obsidian","node"]}]};var J=class e{articleSource=h(()=>this.#e().articleSource);searchControl=h(()=>this.#e().searchControl);selectedTags=h(()=>(console.log("selectedTags store ran"),this.#e().selectedTags));#e=N({searchControl:new qt,articleSource:mn.files,selectedTags:new Set});toggleTagSelection(n){return this.#e().selectedTags.has(n)?this.removeTag(n):this.addTag(n)}addTag(n){this.#e.update(t=>V(y({},t),{selectedTags:new Set([...t.selectedTags,n])}))}removeTag(n){this.#e.update(t=>{let i=new Set(t.selectedTags);return i.delete(n),V(y({},t),{selectedTags:i})})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=_({token:e,factory:e.\u0275fac})};var ae=class e{#e=u(J);control=this.#e.searchControl;articles=h(()=>this.#e.articleSource().map(n=>this.formatFile(n)));filterList=h(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=h(()=>[...this.#e.selectedTags()]);searchValue=te(this.control().valueChanges.pipe(Je(300),Ke(),W(n=>n?.toLowerCase()?.trim())));filteredArticles=h(()=>{let n=this.searchValue(),t=this.selectedTags();return this.articles().filter(i=>this.includesSearchValue(i,n)&&this.includesTag(i.tags,t))});allTags=h(()=>[...new Set(this.articles().flatMap(n=>n.tags))]);toggleTagSelection(n){this.#e.toggleTagSelection(n)}formatFile(n){return V(y({},n),{date:new Date(n.date).toDateString(),routerLink:n.fileName.replace(".md","")})}includesSearchValue(n,t){return t?n.title.toLowerCase().includes(t)||n.subtitle.toLowerCase().includes(t)||n.tags.some(i=>i.toLowerCase().includes(t)):!0}includesTag(n,t){return t?.length?t.every(i=>n.map(r=>r.toLowerCase()).includes(i.toLowerCase())):!0}static \u0275fac=function(t){return new(t||e)};static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})};function Ai(e,n){if(e&1){let t=Pe();s(0,"app-article-tag",17),G("tagClick",function(r){Se(t);let a=v();return Te(a.facade.toggleTagSelection(r))}),c()}if(e&2){let t=n.$implicit;d("value",t)}}function Ei(e,n){if(e&1&&(s(0,"div")(1,"span",18),C(2),ut(3,"join"),c()()),e&2){let t=v();o(2),ue("Filter by: ",pt(3,1,t.facade.filterList()))}}function Ii(e,n){if(e&1&&(s(0,"div",20),k(1,"img",21),c()),e&2){let t=v().$implicit;o(),d("alt",ct(t.title))("ngSrc","blog/"+t.cover)}}function Si(e,n){if(e&1&&C(0),e&2){let t=v().$implicit;H(t.title||"Article")}}function Ti(e,n){if(e&1){let t=Pe();s(0,"app-article-tag",17),G("tagClick",function(r){Se(t);let a=v(3);return Te(a.facade.toggleTagSelection(r))}),c()}if(e&2){let t=n.$implicit;d("value",t)}}function ki(e,n){if(e&1&&(s(0,"div",22)(1,"div",23),ce(2,Ti,1,1,"app-article-tag",14,le),c(),s(4,"div"),C(5),c()()),e&2){let t=v().$implicit;o(2),de(t.tags),o(3),H(t.date)}}function Oi(e,n){if(e&1&&(s(0,"p-card",16),D(1,Ii,2,3,"ng-template",null,0,pe)(3,Si,1,1,"ng-template",null,1,pe)(5,ki,6,1,"ng-template",null,2,pe),s(7,"p",19),C(8),c()()),e&2){let t=n.$implicit;d("routerLink",t.routerLink),o(8),H(t.subtitle)}}var xe=class e{facade=u(ae);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-chittylog-container"]],features:[b([J,ae])],decls:26,vars:2,consts:[["header",""],["title",""],["subtitle",""],[1,"page-container"],[1,"title","white"],[1,"title","gradient"],[1,"subtitle"],[1,"search-container"],["variant","in"],[1,"pi","pi-search"],["pInputText","","id","search_articles",1,"search-input",3,"formControl"],["for","search_articles"],[1,"tag-search-container"],[1,"tag-container"],[1,"clickable",3,"value"],[1,"card-container"],[1,"card",3,"routerLink"],[1,"clickable",3,"tagClick","value"],[1,"text-sm"],[1,"multiline-ellipsis"],[1,"box"],["fill","",1,"img-fill",3,"alt","ngSrc"],[1,"display-flex","flex-col","row-gap-2"],[1,"display-flex","flex-row","col-gap-2"]],template:function(t,i){t&1&&(s(0,"div",3)(1,"h1")(2,"span",4),C(3,"Chitty"),c(),s(4,"span",5),C(5,"blog"),c()(),s(6,"h3",6),C(7," Guides, updates, and random thoughts directly from me \u{1F30C} "),c(),s(8,"div",7)(9,"p-floatlabel",8)(10,"p-iconfield"),k(11,"p-inputicon",9)(12,"input",10),c(),s(13,"label",11),C(14,"Search articles..."),c()()(),s(15,"div",12)(16,"div")(17,"p"),C(18,"Search by tag:"),c()(),s(19,"div",13),ce(20,Ai,1,1,"app-article-tag",14,le),c()(),it(22,Ei,4,3,"div"),s(23,"div",15),ce(24,Oi,9,2,"p-card",16,le),c()()),t&2&&(o(12),d("formControl",i.facade.control()),o(8),de(i.facade.allTags()),o(2),rt(i.facade.filterList().length?22:-1),o(2),de(i.facade.filteredArticles()))},dependencies:[Kt,gt,ge,nn,an,ln,pn,Yt,be,$t,Zt,Ue,Fe,Me],styles:['.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4bb,#b48);-webkit-background-clip:text;background-clip:text;color:transparent}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media (max-width: 768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.white[_ngcontent-%COMP%]{color:#cfcbc6}.subtitle[_ngcontent-%COMP%]{font-weight:100;font-size:1rem;color:#cacaca;text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media (max-width: 768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card[_ngcontent-%COMP%]{width:22rem;position:relative;overflow:hidden;transition:all .5s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);box-shadow:0 0 20px #bb448880}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(187,68,136,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0;z-index:1;pointer-events:none}.card[_ngcontent-%COMP%]:hover:before{opacity:1;transform:rotate(-45deg) translateY(100%)}']})};function vn(e){let n=u(ke);return Ye(()=>e().then(t=>n.get(t)))}var we=class e{articleContent=I.required({transform:n=>this.stripFrontMatter(n)});stripFrontMatter(n){let t=/^---\s*[\s\S]*?\s*---/;return n.replace(t,"").trim()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-post-markdown"]],inputs:{articleContent:[1,"articleContent"]},decls:1,vars:1,consts:[["emoji","",1,"markdown",3,"data"]],template:function(t,i){t&1&&k(0,"markdown",0),t&2&&d("data",i.articleContent())},dependencies:[Dt],styles:[".markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:#2e2e2e;color:#b48;padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}"],changeDetection:0})};var Ni=()=>["../"],Pi=()=>import("./chunk-VHWWJDBY.js").then(e=>e.ReadingTimeService),Ae=class e{route=u(mt);api=u(xt);timeEstimate=vn(Pi);article=te(this.route.paramMap.pipe(W(n=>n.get("postName")||""),Ee(n=>n?this.api.get(`blog/${n}.md`,{responseType:"text"}):We(()=>"No route param")),Xe(n=>(console.error(n),""))));timeToReadInMinutes=te(Qe([bt(this.article),this.timeEstimate]).pipe(Ee(([n,t])=>t.getReadingTimeInMinutes(n||""))));static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-post-container"]],decls:9,vars:5,consts:[[1,"page-container"],[1,"navigation-header"],["label","Back to Blog","icon","pi pi-chevron-left","severity","secondary",3,"routerLink","text"],[1,"reading-time-container"],[1,"pi","pi-clock","reading-time-icon"],[1,"text-sm"],[1,"content-area"],[3,"articleContent"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"div",1),k(2,"p-button",2),c(),s(3,"div",3),k(4,"i",4),s(5,"p",5),C(6),c()(),s(7,"div",6),k(8,"app-post-markdown",7),c()()),t&2&&(o(2),d("routerLink",dt(4,Ni))("text",!0),o(4),ue("",i.timeToReadInMinutes()," min. read"),o(2),d("articleContent",i.article()||""))},dependencies:[we,Ft,Mt,ge],styles:[".page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:1.5rem}@media (max-width: 768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.reading-time-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.reading-time-icon[_ngcontent-%COMP%]{font-size:.875rem;color:#cfcbc6}"],changeDetection:0})};var Xa=[{path:"",component:xe},{path:":postName",component:Ae}];export{Xa as CHITTYLOG_ROUTES};
