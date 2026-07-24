import{a as St,b as ae,c as Nt}from"./chunk-DAT4MTUT.js";import{a as Tt}from"./chunk-R2AGOHPO.js";import{d as Vt,g as De}from"./chunk-D4D2WZ4A.js";import{b as At,d as It,e as Et,f as kt}from"./chunk-7CPHSMVR.js";import{S as Ft,T as $,U as S,W as N,X as k,Y as u,Z as X,a as We,f as Ct,g as bt,i as Dt,j as Mt,k as L,q as xt,v as wt}from"./chunk-2XGPUUNU.js";import{$ as ct,$a as B,A as lt,Ab as ye,Cb as F,D as dt,Eb as M,Fb as j,Gb as R,Hb as mt,Ib as He,J as je,Jb as $e,Ma as l,Nb as _e,O as Re,Ob as vt,P as y,Q as T,Qb as _,Rb as v,S as g,Sb as H,Ta as Ue,Tb as oe,U as a,Ua as I,Ub as ze,Vb as C,Wb as yt,Yb as Ce,Z as fe,Za as h,Zb as be,_ as he,_a as O,_b as z,aa as Le,ab as pt,bb as E,bc as W,cb as m,cc as p,d as et,db as G,e as tt,ea as ge,fb as ft,fc as _t,gc as A,ia as P,j as nt,kb as U,l as it,la as te,lb as me,ma as ut,mb as ve,mc as Q,na as f,nb as ne,o as Z,ob as ie,p as rt,pa as Ge,pb as re,qb as d,rb as o,sb as s,t as ot,tb as D,u as at,xb as ht,y as st,yb as gt}from"./chunk-SVNPKW3C.js";import{a as b,b as w}from"./chunk-IFGU66OU.js";var Gt=(()=>{class e{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,i){this._renderer=n,this._elementRef=i}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(i){return new(i||e)(I(Ue),I(Ge))};static \u0275dir=B({type:e})}return e})(),Sn=(()=>{class e extends Gt{static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275dir=B({type:e,features:[m]})}return e})(),Ut=new g("");var Nn={provide:Ut,useExisting:Re(()=>Fe),multi:!0};function kn(){let e=We()?We().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Tn=new g(""),Fe=(()=>{class e extends Gt{_compositionMode;_composing=!1;constructor(n,i,r){super(n,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!kn())}writeValue(n){let i=n??"";this.setProperty("value",i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(i){return new(i||e)(I(Ue),I(Ge),I(Tn,8))};static \u0275dir=B({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&F("input",function(V){return r._handleInput(V.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(V){return r._compositionEnd(V.target.value)})},standalone:!1,features:[C([Nn]),m]})}return e})();var Pn=new g(""),On=new g("");function Ht(e){return e!=null}function $t(e){return ft(e)?nt(e):e}function zt(e){let t={};return e.forEach(n=>{t=n!=null?b(b({},t),n):t}),Object.keys(t).length===0?null:t}function Wt(e,t){return t.map(n=>n(e))}function Bn(e){return!e.validate}function qt(e){return e.map(t=>Bn(t)?t:n=>t.validate(n))}function jn(e){if(!e)return null;let t=e.filter(Ht);return t.length==0?null:function(n){return zt(Wt(n,t))}}function Yt(e){return e!=null?jn(qt(e)):null}function Rn(e){if(!e)return null;let t=e.filter(Ht);return t.length==0?null:function(n){let i=Wt(n,t).map($t);return at(i).pipe(Z(zt))}}function Zt(e){return e!=null?Rn(qt(e)):null}function Pt(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Qt(e){return e._rawValidators}function Xt(e){return e._rawAsyncValidators}function qe(e){return e?Array.isArray(e)?e:[e]:[]}function xe(e,t){return Array.isArray(e)?e.includes(t):e===t}function Ot(e,t){let n=qe(t);return qe(e).forEach(r=>{xe(n,r)||n.push(r)}),n}function Bt(e,t){return qe(t).filter(n=>!xe(e,n))}var Ye=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Yt(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Zt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}};var q=class extends Ye{_parent=null;name=null;valueAccessor=null},Ze=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Jt=(()=>{class e extends Ze{constructor(n){super(n)}static \u0275fac=function(i){return new(i||e)(I(q,2))};static \u0275dir=B({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&vt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[m]})}return e})();var se="VALID",Me="INVALID",J="PENDING",le="DISABLED",Y=class{},Ve=class extends Y{value;source;constructor(t,n){super(),this.value=t,this.source=n}},de=class extends Y{pristine;source;constructor(t,n){super(),this.pristine=t,this.source=n}},ce=class extends Y{touched;source;constructor(t,n){super(),this.touched=t,this.source=n}},K=class extends Y{status;source;constructor(t,n){super(),this.status=t,this.source=n}};var Qe=class extends Y{source;constructor(t){super(),this.source=t}};function Ln(e){return(Ae(e)?e.validators:e)||null}function Gn(e){return Array.isArray(e)?Yt(e):e||null}function Un(e,t){return(Ae(t)?t.asyncValidators:e)||null}function Hn(e){return Array.isArray(e)?Zt(e):e||null}function Ae(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Xe=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,n){this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return W(this.statusReactive)}set status(t){W(()=>this.statusReactive.set(t))}_status=p(()=>this.statusReactive());statusReactive=P(void 0);get valid(){return this.status===se}get invalid(){return this.status===Me}get pending(){return this.status===J}get disabled(){return this.status===le}get enabled(){return this.status!==le}errors;get pristine(){return W(this.pristineReactive)}set pristine(t){W(()=>this.pristineReactive.set(t))}_pristine=p(()=>this.pristineReactive());pristineReactive=P(!0);get dirty(){return!this.pristine}get touched(){return W(this.touchedReactive)}set touched(t){W(()=>this.touchedReactive.set(t))}_touched=p(()=>this.touchedReactive());touchedReactive=P(!1);get untouched(){return!this.touched}_events=new et;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ot(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ot(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Bt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Bt(t,this._rawAsyncValidators))}hasValidator(t){return xe(this._rawValidators,t)}hasAsyncValidator(t){return xe(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let n=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(w(b({},t),{sourceControl:i})),n&&t.emitEvent!==!1&&this._events.next(new ce(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(t))}markAsUntouched(t={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),n&&t.emitEvent!==!1&&this._events.next(new ce(!1,i))}markAsDirty(t={}){let n=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(w(b({},t),{sourceControl:i})),n&&t.emitEvent!==!1&&this._events.next(new de(!1,i))}markAsPristine(t={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),n&&t.emitEvent!==!1&&this._events.next(new de(!0,i))}markAsPending(t={}){this.status=J;let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new K(this.status,n)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(w(b({},t),{sourceControl:n}))}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=le,this.errors=null,this._forEachChild(r=>{r.disable(w(b({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ve(this.value,i)),this._events.next(new K(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(w(b({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=se,this._forEachChild(i=>{i.enable(w(b({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(w(b({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,n){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},n),this._parent?._updateTouched({},n))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===se||this.status===J)&&this._runAsyncValidator(i,t.emitEvent)}let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ve(this.value,n)),this._events.next(new K(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(w(b({},t),{sourceControl:n}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?le:se}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,n){if(this.asyncValidator){this.status=J,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:t!==!1};let i=$t(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(t,n){let i=n?this.get(n):this;return i?.errors?i.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,n,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new K(this.status,n)),this._parent&&this._parent._updateControlsErrors(t,n,i)}_initObservables(){this.valueChanges=new ge,this.statusChanges=new ge}_calculateStatus(){return this._allControlsDisabled()?le:this.errors?Me:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(J)?J:this._anyControlsHaveStatus(Me)?Me:se}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,n),r&&this._events.next(new de(this.pristine,n))}_updateTouched(t={},n){this.touched=this._anyControlsTouched(),this._events.next(new ce(this.touched,n)),t.onlySelf||this._parent?._updateTouched(t,n)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Ae(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Gn(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Hn(this._rawAsyncValidators)}};var Je=new g("",{factory:()=>Ie}),Ie="always";function $n(e,t,n=Ie){Wn(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),Yn(e,t),Qn(e,t),Zn(e,t),zn(e,t)}function jt(e,t,n=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),qn(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function we(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function zn(e,t){if(t.valueAccessor.setDisabledState){let n=i=>{t.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function Wn(e,t){let n=Qt(e);t.validator!==null?e.setValidators(Pt(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let i=Xt(e);t.asyncValidator!==null?e.setAsyncValidators(Pt(i,t.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();we(t._rawValidators,r),we(t._rawAsyncValidators,r)}function qn(e,t){let n=!1;if(e!==null){if(t.validator!==null){let r=Qt(e);if(Array.isArray(r)&&r.length>0){let c=r.filter(V=>V!==t.validator);c.length!==r.length&&(n=!0,e.setValidators(c))}}if(t.asyncValidator!==null){let r=Xt(e);if(Array.isArray(r)&&r.length>0){let c=r.filter(V=>V!==t.asyncValidator);c.length!==r.length&&(n=!0,e.setAsyncValidators(c))}}}let i=()=>{};return we(t._rawValidators,i),we(t._rawAsyncValidators,i),n}function Yn(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Kt(e,t)})}function Zn(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Kt(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function Kt(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Qn(e,t){let n=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function Xn(e,t){if(!e.hasOwnProperty("model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function Jn(e){return Object.getPrototypeOf(e.constructor)===Sn}function Kn(e,t){if(!t)return null;Array.isArray(t);let n,i,r;return t.forEach(c=>{c.constructor===Fe?n=c:Jn(c)?i=c:r=c}),r||i||n||null}function Rt(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Lt(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var en=class extends Xe{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,n,i){super(Ln(n),Un(i,n)),this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ae(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Lt(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),n.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,n?.emitEvent!==!1&&this._events.next(new Qe(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Rt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Rt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Lt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var tn=new g(""),ei={provide:q,useExisting:Re(()=>Ke)},Ke=(()=>{class e extends q{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(n){}model;update=new ge;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(n,i,r,c,V){super(),this._ngModelWarningConfig=c,this.callSetDisabledState=V,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=Kn(this,r)}ngOnChanges(n){if(this._isControlChanged(n)){let i=n.form.previousValue;i&&jt(i,this,!1),$n(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Xn(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&jt(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||e)(I(Pn,10),I(On,10),I(Ut,10),I(tn,8),I(Je,8))};static \u0275dir=B({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[C([ei]),m,ut]})}return e})();var nn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=T({})}return e})();var rn=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:Je,useValue:n.callSetDisabledState??Ie}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=T({imports:[nn]})}return e})(),on=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:tn,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:Je,useValue:n.callSetDisabledState??Ie}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=O({type:e});static \u0275inj=T({imports:[nn]})}return e})();var an=`
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
`;var ni=["*"],ii=`
    ${an}

    /* For Optimus */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,ri={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},sn=(()=>{class e extends S{name="floatlabel";style=ii;classes=ri;static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var ln=new g("FLOATLABEL_INSTANCE"),dn=(()=>{class e extends k{componentName="FloatLabel";_componentStyle=a(sn);$pcFloatLabel=a(ln,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(i,r){i&2&&_(r.cx("root"))},inputs:{variant:"variant"},features:[C([sn,{provide:ln,useExisting:e},{provide:N,useExisting:e}]),E([u]),m],ngContentSelectors:ni,decls:1,vars:0,template:function(i,r){i&1&&(j(),R(0))},dependencies:[L,$,X],encapsulation:2,changeDetection:0})}return e})();var cn=`
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
`;var oi=["*"],ai={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},un=(()=>{class e extends S{name="iconfield";style=cn;classes=ai;static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var pn=new g("ICONFIELD_INSTANCE"),fn=(()=>{class e extends k{componentName="IconField";hostName="";_componentStyle=a(un);$pcIconField=a(pn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(i,r){i&2&&_(r.cn(r.cx("root"),r.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[C([un,{provide:pn,useExisting:e},{provide:N,useExisting:e}]),E([u]),m],ngContentSelectors:oi,decls:1,vars:0,template:function(i,r){i&1&&(j(),R(0))},dependencies:[L,X],encapsulation:2,changeDetection:0})}return e})();var si=["*"],li={root:"p-inputicon"},hn=(()=>{class e extends S{name="inputicon";classes=li;static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),gn=new g("INPUTICON_INSTANCE"),mn=(()=>{class e extends k{componentName="InputIcon";hostName="";styleClass;_componentStyle=a(hn);$pcInputIcon=a(gn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(i,r){i&2&&_(r.cn(r.cx("root"),r.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[C([hn,{provide:gn,useExisting:e},{provide:N,useExisting:e}]),E([u]),m],ngContentSelectors:si,decls:1,vars:0,template:function(i,r){i&1&&(j(),R(0))},dependencies:[L,$,X],encapsulation:2,changeDetection:0})}return e})();var vn=(()=>{class e extends k{modelValue=P(void 0);$filled=p(()=>wt(this.modelValue()));writeModelValue(n){this.modelValue.set(n)}static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275dir=B({type:e,features:[m]})}return e})();var yn=`
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
`;var di=`
    ${yn}

    /* For Optimus */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,ci={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},_n=(()=>{class e extends S{name="inputtext";style=di;classes=ci;static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Cn=new g("INPUTTEXT_INSTANCE"),bn=(()=>{class e extends vn{componentName="InputText";hostName="";ptInputText=A();pInputTextPT=A();pInputTextUnstyled=A();bindDirectiveInstance=a(u,{self:!0});$pcInputText=a(Cn,{optional:!0,skipSelf:!0})??void 0;ngControl=a(q,{optional:!0,self:!0});pcFluid=a(At,{optional:!0,host:!0,skipSelf:!0});pSize;variant=A();fluid=A(void 0,{transform:Q});invalid=A(void 0,{transform:Q});$variant=p(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=a(_n);constructor(){super(),te(()=>{let n=this.ptInputText()||this.pInputTextPT();n&&this.directivePT.set(n)}),te(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(i){return new(i||e)};static \u0275dir=B({type:e,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(i,r){i&1&&F("input",function(){return r.onInput()}),i&2&&(U("data-p",r.dataP),_(r.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[C([_n,{provide:Cn,useExisting:e},{provide:N,useExisting:e}]),E([u]),m]})}return e})();var Dn=`
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
`;var ui=["icon"],pi=["*"];function fi(e,t){if(e&1&&D(0,"span",4),e&2){let n=M(2);_(n.cx("icon")),d("ngClass",n.icon)("pBind",n.ptm("icon"))}}function hi(e,t){if(e&1&&(ht(0),G(1,fi,1,4,"span",3),gt()),e&2){let n=M();l(),d("ngIf",n.icon)}}function gi(e,t){}function mi(e,t){e&1&&G(0,gi,0,0,"ng-template")}function vi(e,t){if(e&1&&(o(0,"span",2),G(1,mi,1,0,null,5),s()),e&2){let n=M();_(n.cx("icon")),d("pBind",n.ptm("icon")),l(),d("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)}}var yi={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},Mn=(()=>{class e extends S{name="tag";style=Dn;classes=yi;static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var xn=new g("TAG_INSTANCE"),Ee=(()=>{class e extends k{componentName="Tag";$pcTag=a(xn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=a(Mn);onAfterContentInit(){this.templates?.forEach(n=>{n.getType()==="icon"&&(this._iconTemplate=n.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-tag"]],contentQueries:function(i,r,c){if(i&1&&mt(c,ui,4)(c,Ft,4),i&2){let V;He(V=$e())&&(r.iconTemplate=V.first),He(V=$e())&&(r.templates=V)}},hostVars:3,hostBindings:function(i,r){i&2&&(U("data-p",r.dataP),_(r.cn(r.cx("root"),r.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",Q]},features:[C([Mn,{provide:xn,useExisting:e},{provide:N,useExisting:e}]),E([u]),m],ngContentSelectors:pi,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(i,r){i&1&&(j(),R(0),G(1,hi,2,1,"ng-container",0)(2,vi,2,4,"span",1),o(3,"span",2),v(4),s()),i&2&&(l(),d("ngIf",!r.iconTemplate&&!r._iconTemplate),l(),d("ngIf",r.iconTemplate||r._iconTemplate),l(),_(r.cx("label")),d("pBind",r.ptm("label")),l(),H(r.value))},dependencies:[L,Ct,bt,Dt,$,u],encapsulation:2,changeDetection:0})}return e})();var Se=class e{transform(t,n=", "){return t==null||!Array.isArray(t)?null:t.filter(r=>typeof r=="string").join(n)}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=pt({name:"join",type:e,pure:!0})};var Ne=class e{TAG_CONFIG={angular:{background:"#a51e24",textColor:"#FFFFFF"},primeng:{background:"#a51e24",textColor:"#FFFFFF"},typescript:{background:"#007acc",textColor:"#FFFFFF"},node:{background:"#3e863d",textColor:"#FFFFFF"},obsidian:{background:"#582bac",textColor:"#FFFFFF"},markdown:{background:"#196989",textColor:"#FFFFFF"}};value=A.required();currentConfig=p(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:"rgba(51,51,51,0.88)",textColor:"#FFFFFF"});tagClick=_t();static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["app-article-tag"]],inputs:{value:[1,"value"]},outputs:{tagClick:"tagClick"},decls:1,vars:9,consts:[["severity","info",3,"click","value"]],template:function(n,i){n&1&&(o(0,"p-tag",0),F("click",function(){return i.tagClick.emit(i.value())}),s()),n&2&&(_e("border-radius","20px")("font-weight","500")("background-color",i.currentConfig().background)("color",i.currentConfig().textColor),d("value",i.value()))},dependencies:[Ee],encapsulation:2,changeDetection:0})};var Vn={files:[{fileName:"angular-coding-standard.md",title:"Typescript / Angular 20+ Coding Standards",cover:"angular-coding-standard.png",subtitle:"My personal collection of standards for building robust, responsive Angular applications using PrimeNG.",date:"2025-08-27T05:01:00.000Z",tags:["typescript","angular","PrimeNG"]},{fileName:"networking-1-lessons-learned.md",title:"Networking 1 - Lessons Learned",cover:"networking-1-lessons-learned.jpg",subtitle:"Problems I faced while setting up IP Passthrough for my local network and how I solved them.",date:"2025-08-27T05:00:00.000Z",tags:["networking"]},{fileName:"hello-blog.md",title:"Hello Blog",cover:"hello-blog.png",subtitle:"Testing blog post, please ignore. Explains how populating this blog works.",date:"2025-08-26T05:00:00.000Z",tags:["markdown","angular","obsidian","node"]}]};var ee=class e{articleSource=p(()=>this.#e().articleSource);searchControl=p(()=>this.#e().searchControl);selectedTags=p(()=>this.#e().selectedTags);#e=P({searchControl:new en,articleSource:Vn.files,selectedTags:new Set});toggleTagSelection(t){return this.#e().selectedTags.has(t)?this.removeTag(t):this.addTag(t)}addTag(t){this.#e.update(n=>w(b({},n),{selectedTags:new Set([...n.selectedTags,t])}))}removeTag(t){this.#e.update(n=>{let i=new Set(n.selectedTags);return i.delete(t),w(b({},n),{selectedTags:i})})}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})};var pe=class e{#e=a(ee);control=this.#e.searchControl;featured=p(()=>this.articles().find(t=>t.tags.includes("featured"))||this.articles()[0]);others=p(()=>this.articles().filter(t=>t.title!==this.featured().title));articles=p(()=>this.#e.articleSource().map(t=>this.formatFile(t)));filterList=p(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=p(()=>[...this.#e.selectedTags()]);searchValue=ae(this.control().valueChanges.pipe(lt(300),dt(),Z(t=>t?.toLowerCase()?.trim())));filteredArticles=p(()=>{let t=this.searchValue(),n=this.selectedTags();return this.others().filter(i=>this.includesSearchValue(i,t)&&this.includesTag(i.tags,n))});allTags=p(()=>[...new Set(this.articles().flatMap(t=>t.tags))]);toggleTagSelection(t){this.#e.toggleTagSelection(t)}formatFile(t){return w(b({},t),{date:new Date(t.date).toDateString(),routerLink:t.fileName.replace(".md","")})}includesSearchValue(t,n){return n?t.title.toLowerCase().includes(n)||t.subtitle.toLowerCase().includes(n)||t.tags.some(i=>i.toLowerCase().includes(n)):!0}includesTag(t,n){return n?.length?n.every(i=>t.map(r=>r.toLowerCase()).includes(i.toLowerCase())):!0}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};function _i(e,t){if(e&1&&(o(0,"div",20),D(1,"img",21),o(2,"p-tag",22),v(3,"\u2728 Featured"),s()()),e&2){let n=M();l(),d("alt",ze(n.facade.featured().title))("ngSrc","blog/"+n.facade.featured().cover)}}function Ci(e,t){if(e&1&&v(0),e&2){let n=M();oe(" ",n.facade.featured().title||"Article"," ")}}function bi(e,t){if(e&1){let n=ye();o(0,"app-article-tag",25),F("tagClick",function(r){fe(n);let c=M(2);return he(c.facade.toggleTagSelection(r))}),s()}if(e&2){let n=t.$implicit;d("value",n)}}function Di(e,t){if(e&1&&(o(0,"div",23)(1,"div",24),ie(2,bi,1,1,"app-article-tag",17,ne),s(),o(4,"div"),v(5),s()()),e&2){let n=M();l(2),re(n.facade.featured().tags),l(3),H(n.facade.featured().date)}}function Mi(e,t){if(e&1){let n=ye();o(0,"app-article-tag",25),F("tagClick",function(r){fe(n);let c=M();return he(c.facade.toggleTagSelection(r))}),s()}if(e&2){let n=t.$implicit;d("value",n)}}function xi(e,t){if(e&1&&(o(0,"div")(1,"span",26),v(2),Ce(3,"join"),s()()),e&2){let n=M();l(2),oe("Filter by: ",be(3,1,n.facade.filterList()))}}function Vi(e,t){if(e&1&&(o(0,"div",27),D(1,"img",21),s()),e&2){let n=M().$implicit;l(),d("alt",ze(n.title))("ngSrc","blog/"+n.cover)}}function wi(e,t){if(e&1&&v(0),e&2){let n=M().$implicit;H(n.title||"Article")}}function Fi(e,t){if(e&1){let n=ye();o(0,"app-article-tag",25),F("tagClick",function(r){fe(n);let c=M(3);return he(c.facade.toggleTagSelection(r))}),s()}if(e&2){let n=t.$implicit;d("value",n)}}function Ai(e,t){if(e&1&&(o(0,"div",23)(1,"div",24),ie(2,Fi,1,1,"app-article-tag",17,ne),s(),o(4,"div"),v(5),s()()),e&2){let n=M().$implicit;l(2),re(n.tags),l(3),H(n.date)}}function Ii(e,t){if(e&1&&(o(0,"p-card",19),G(1,Vi,2,3,"ng-template",null,0,z)(3,wi,1,1,"ng-template",null,1,z)(5,Ai,6,1,"ng-template",null,2,z),o(7,"p",9),v(8),s()()),e&2){let n=t.$implicit;d("routerLink",n.routerLink),l(8),H(n.subtitle)}}var Te=class e{facade=a(pe);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["app-chittylog-container"]],features:[C([ee,pe])],decls:36,vars:4,consts:[["header",""],["title",""],["subtitle",""],[1,"page-container"],[1,"title","white"],[1,"title","gradient"],[1,"subtitle"],[1,"w-95"],[1,"card","featured",3,"routerLink"],[1,"multiline-ellipsis"],[1,"search-container"],["variant","in"],[1,"pi","pi-search"],["pInputText","","id","search_articles",1,"search-input",3,"formControl"],["for","search_articles"],[1,"tag-search-container"],[1,"tag-container"],[1,"clickable",3,"value"],[1,"card-container"],[1,"card",3,"routerLink"],[1,"box","featured"],["fill","",1,"img-fill",3,"alt","ngSrc"],[1,"featured-tag-overlay"],[1,"display-flex","flex-col","row-gap-2"],[1,"display-flex","flex-row","col-gap-2"],[1,"clickable",3,"tagClick","value"],[1,"text-sm"],[1,"box"]],template:function(n,i){n&1&&(o(0,"div",3)(1,"h1")(2,"span",4),v(3,"Chitty"),s(),o(4,"span",5),v(5,"blog"),s()(),o(6,"h3",6),v(7," Guides, updates, and random thoughts directly from me \u{1F30C} "),s(),o(8,"div",7)(9,"p-card",8),G(10,_i,4,3,"ng-template",null,0,z)(12,Ci,1,1,"ng-template",null,1,z)(14,Di,6,1,"ng-template",null,2,z),o(16,"p",9),v(17),s()()(),o(18,"div",10)(19,"p-floatlabel",11)(20,"p-iconfield"),D(21,"p-inputicon",12)(22,"input",13),s(),o(23,"label",14),v(24,"Search articles..."),s()()(),o(25,"div",15)(26,"div")(27,"p"),v(28,"Search by tag:"),s()(),o(29,"div",16),ie(30,Mi,1,1,"app-article-tag",17,ne),s()(),me(32,xi,4,3,"div"),o(33,"div",18),ie(34,Ii,9,2,"p-card",19,ne),s()()),n&2&&(l(9),d("routerLink",i.facade.featured().routerLink),l(8),H(i.facade.featured().subtitle),l(5),d("formControl",i.facade.control()),l(8),re(i.facade.allTags()),l(2),ve(i.facade.filterList().length?32:-1),l(2),re(i.facade.filteredArticles()))},dependencies:[Tt,xt,De,dn,fn,mn,bn,rn,Fe,Jt,on,Ke,Ne,Ee,Se],styles:['.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4bb,#b48);-webkit-background-clip:text;background-clip:text;color:transparent}.box.featured[_ngcontent-%COMP%]{height:22rem;position:relative}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.featured-tag-overlay[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:10;background:linear-gradient(135deg,#8e44ad,#3498db);color:#fff;border-radius:20px;padding:.5rem 1rem;font-weight:700;font-size:1.05em;border:none;box-shadow:0 2px 8px #0000004d}@media(max-width:768px){.featured-tag-overlay[_ngcontent-%COMP%]{top:.75rem;left:.75rem;font-size:1.03em;padding:.4rem .8rem}}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media(max-width:768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.white[_ngcontent-%COMP%]{color:#cfcbc6}.subtitle[_ngcontent-%COMP%]{font-weight:100;font-size:1rem;color:#cacaca;text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media(max-width:768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card.featured[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #2ceaddb3}.card.featured[_ngcontent-%COMP%]:before{background:linear-gradient(0deg,transparent,transparent 30%,rgba(44,234,221,.3))}.card.featured[_ngcontent-%COMP%]{width:unset}.card[_ngcontent-%COMP%]{width:22rem;position:relative;overflow:hidden;transition:all .5s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);box-shadow:0 0 20px #bb448880}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(187,68,136,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0;z-index:1;pointer-events:none}.card[_ngcontent-%COMP%]:hover:before{opacity:1;transform:rotate(-45deg) translateY(100%)}'],changeDetection:0})};function wn(e){let t=a(Le);return ot(()=>e().then(n=>t.get(n)))}var Fn=`
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
`;var Ei={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},An=(()=>{class e extends S{name="progressspinner";style=Fn;classes=Ei;static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var In=new g("PROGRESSSPINNER_INSTANCE"),En=(()=>{class e extends k{componentName="ProgressSpinner";$pcProgressSpinner=a(In,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(u,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=a(An);static \u0275fac=(()=>{let n;return function(r){return(n||(n=f(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(i,r){i&2&&(U("aria-label",r.ariaLabel)("role","progressbar")("aria-busy",!0),_(r.cn(r.cx("root"),r.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[C([An,{provide:In,useExisting:e},{provide:N,useExisting:e}]),E([u]),m],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(i,r){i&1&&(ct(),o(0,"svg",0),D(1,"circle",1),s()),i&2&&(_(r.cx("spin")),_e("animation-duration",r.animationDuration),d("pBind",r.ptm("spin")),l(),_(r.cx("circle")),d("pBind",r.ptm("circle")),U("fill",r.fill)("stroke-width",r.strokeWidth))},dependencies:[L,$,u],encapsulation:2,changeDetection:0})}return e})();var Si=["*"];function Ni(e,t){e&1&&(o(0,"div",1)(1,"div",2),D(2,"p-progress-spinner"),s()())}var Pe=class e{showSpinner=new tt(!1);spinWhileUndefined=A();spinListener=te(()=>{this.spinWhileUndefined()?this.hide():this.show()});show(){this.showSpinner.next(!0)}hide(){this.showSpinner.next(!1)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["app-loading-spinner"]],inputs:{spinWhileUndefined:[1,"spinWhileUndefined"]},ngContentSelectors:Si,decls:4,vars:3,consts:[[1,"content"],[1,"overlay"],[1,"spinner"]],template:function(n,i){n&1&&(j(),o(0,"div",0),R(1),s(),me(2,Ni,3,0,"div",1),Ce(3,"async")),n&2&&(l(2),ve(be(3,1,i.showSpinner)?2:-1))},dependencies:[En,Mt],styles:["[_nghost-%COMP%]{display:flex;flex-flow:row nowrap;height:100%;flex:1;min-height:0}.overlay[_ngcontent-%COMP%]{box-sizing:border-box;flex:none;width:101%;margin-left:-100%;display:flex;flex-direction:column;justify-content:space-around;z-index:500;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.spinner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.spinner[_ngcontent-%COMP%]   p-progress-spinner[_ngcontent-%COMP%]{flex:1;min-height:0}.content[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column}"],changeDetection:0})};var Oe=class e{articleContent=A.required({transform:t=>this.stripFrontMatter(t)});stripFrontMatter(t){let n=/^---\s*[\s\S]*?\s*---/;return t.replace(n,"").trim()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["app-post-markdown"]],inputs:{articleContent:[1,"articleContent"]},decls:1,vars:1,consts:[["emoji","",1,"markdown",3,"data"]],template:function(n,i){n&1&&D(0,"markdown",0),n&2&&d("data",i.articleContent())},dependencies:[Nt],styles:[".markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:#2e2e2e;color:#b48;padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}"],changeDetection:0})};var ki=()=>["../"],Ti=()=>import("./chunk-JDVHRYPO.js").then(e=>e.ReadingTimeService),Be=class e{route=a(Vt);api=a(kt);timeEstimate=wn(Ti);shareButtonCopied=P(!1);shareButtonLabel=p(()=>this.shareButtonCopied()?"Copied!":"Share");article=ae(this.route.paramMap.pipe(Z(t=>t.get("postName")||""),je(t=>t?this.api.get(`blog/${t}.md`,{responseType:"text"}):it(()=>"No route param")),st(t=>(console.error(t),""))));timeToReadInMinutes=ae(rt([St(this.article),this.timeEstimate]).pipe(je(([t,n])=>n.getReadingTimeInMinutes(t||""))));downloadMarkdown(){if(this.article()){let t=this.article(),n=new Blob([t],{type:"text/markdown"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download="my-file.md",i.click(),URL.revokeObjectURL(i.href)}}copyCurrentUrl(){navigator.clipboard.writeText(window.location.href).then(()=>{}).catch(t=>{console.error("Failed to copy URL: ",t)})}handleShareClick(){this.copyCurrentUrl(),this.shareButtonCopied.set(!0),setTimeout(()=>{this.shareButtonCopied.set(!1)},2e3)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=h({type:e,selectors:[["app-post-container"]],decls:14,vars:9,consts:[["spinner",""],[1,"page-container"],[3,"spinWhileUndefined"],[1,"navigation-header"],["label","Back to Blog","icon","pi pi-chevron-left","severity","secondary",3,"routerLink","text"],[1,"action-buttons"],["icon","pi pi-share-alt","severity","secondary",3,"click","label","text"],["label","Download","icon","pi pi-download","severity","secondary",3,"click","text"],[1,"reading-time-container"],[1,"pi","pi-clock","reading-time-icon"],[1,"text-sm"],[1,"content-area"],[3,"articleContent"]],template:function(n,i){n&1&&(o(0,"div",1)(1,"app-loading-spinner",2,0)(3,"div",3),D(4,"p-button",4),o(5,"div",5)(6,"p-button",6),F("click",function(){return i.handleShareClick()}),s(),o(7,"p-button",7),F("click",function(){return i.downloadMarkdown()}),s()()(),o(8,"div",8),D(9,"i",9),o(10,"p",10),v(11),s()(),o(12,"div",11),D(13,"app-post-markdown",12),s()()()),n&2&&(l(),d("spinWhileUndefined",i.article()),l(3),d("routerLink",yt(8,ki))("text",!0),l(2),d("label",i.shareButtonLabel())("text",!0),l(),d("text",!0),l(4),oe("",i.timeToReadInMinutes()," min. read"),l(2),d("articleContent",i.article()||""))},dependencies:[Oe,Et,It,De,Pe],styles:[".page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}@media(max-width:768px){.page-container[_ngcontent-%COMP%]{padding:1.5rem .75rem}}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}@media(max-width:768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:center}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.reading-time-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.reading-time-icon[_ngcontent-%COMP%]{font-size:.875rem;color:#cfcbc6}"],changeDetection:0})};var ps=[{path:"",component:Te},{path:":postName",component:Be}];export{ps as CHITTYLOG_ROUTES};
