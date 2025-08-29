import{c as xt,e as xe,i as It,j as oe,k as kt}from"./chunk-2IP72DGC.js";import{a as Pt}from"./chunk-XBHECNZJ.js";import{B as A,C as Tt,E as Ot,F as Nt,a as qe,f as Mt,g as Ve,h as we,i as Vt,j,q as wt,t as Ft,u as At,v as St,w as Et,x as Fe,y as L,z as F}from"./chunk-NWIUWWNB.js";import{$a as pt,$b as m,A as st,Ab as I,Bb as _,Cb as k,Db as x,E as lt,Eb as T,F as ct,Fb as O,Gb as N,Ib as mt,Jb as gt,Kb as _e,Lb as yt,Mb as vt,N as pe,Na as o,Nb as f,Ob as b,P as He,Pb as H,Qb as Ce,Ra as We,Rb as _t,S as Ue,Sa as E,Sb as v,T as y,Tb as Ct,U as B,Vb as be,W as $,Wb as De,Xb as Me,Y as u,Ya as h,Za as R,_a as G,_b as z,ab as g,ba as Q,bb as D,ca as Y,cc as bt,da as dt,db as fe,dc as P,ea as $e,ec as Dt,f as ue,g as et,gb as ft,j as tt,ja as S,jc as U,l as nt,lb as te,mb as he,na as ut,nb as me,o as q,oa as p,ob as ge,p as it,pb as ye,qa as ze,qb as ve,rb as d,sb as a,t as rt,tb as s,u as ot,ub as w,vb as ne,wb as ie,xb as Z,y as at,yb as re,zb as ht}from"./chunk-MN4WSEMX.js";import{a as C,b as V}from"./chunk-EQDQRRRY.js";var Ut=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(E(We),E(ze))};static \u0275dir=G({type:e})}return e})(),In=(()=>{class e extends Ut{static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=G({type:e,features:[g]})}return e})(),$t=new $("");var kn={provide:$t,useExisting:Ue(()=>ke),multi:!0};function Tn(){let e=qe()?qe().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var On=new $(""),ke=(()=>{class e extends Ut{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Tn())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(E(We),E(ze),E(On,8))};static \u0275dir=G({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&I("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},standalone:!1,features:[v([kn]),g]})}return e})();var Nn=new $(""),Pn=new $("");function zt(e){return e!=null}function Wt(e){return ft(e)?tt(e):e}function qt(e){let n={};return e.forEach(t=>{n=t!=null?C(C({},n),t):n}),Object.keys(n).length===0?null:n}function Qt(e,n){return n.map(t=>t(e))}function jn(e){return!e.validate}function Yt(e){return e.map(n=>jn(n)?n:t=>n.validate(t))}function Bn(e){if(!e)return null;let n=e.filter(zt);return n.length==0?null:function(t){return qt(Qt(t,n))}}function Zt(e){return e!=null?Bn(Yt(e)):null}function Rn(e){if(!e)return null;let n=e.filter(zt);return n.length==0?null:function(t){let i=Qt(t,n).map(Wt);return ot(i).pipe(q(qt))}}function Xt(e){return e!=null?Rn(Yt(e)):null}function jt(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Jt(e){return e._rawValidators}function Kt(e){return e._rawAsyncValidators}function Qe(e){return e?Array.isArray(e)?e:[e]:[]}function Se(e,n){return Array.isArray(e)?e.includes(n):e===n}function Bt(e,n){let t=Qe(n);return Qe(e).forEach(r=>{Se(t,r)||t.push(r)}),t}function Rt(e,n){return Qe(n).filter(t=>!Se(e,t))}var Ye=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Zt(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Xt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}};var W=class extends Ye{_parent=null;name=null;valueAccessor=null},Ze=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Gn={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},vr=V(C({},Gn),{"[class.ng-submitted]":"isSubmitted"}),en=(()=>{class e extends Ze{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(E(W,2))};static \u0275dir=G({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&yt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[g]})}return e})();var ae="VALID",Ae="INVALID",X="PENDING",se="DISABLED",K=class{},Ee=class extends K{value;source;constructor(n,t){super(),this.value=n,this.source=t}},le=class extends K{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},ce=class extends K{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},J=class extends K{status;source;constructor(n,t){super(),this.status=n,this.source=t}};function Ln(e){return(Te(e)?e.validators:e)||null}function Hn(e){return Array.isArray(e)?Zt(e):e||null}function Un(e,n){return(Te(n)?n.asyncValidators:e)||null}function $n(e){return Array.isArray(e)?Xt(e):e||null}function Te(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Xe=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return z(this.statusReactive)}set status(n){z(()=>this.statusReactive.set(n))}_status=m(()=>this.statusReactive());statusReactive=S(void 0);get valid(){return this.status===ae}get invalid(){return this.status===Ae}get pending(){return this.status==X}get disabled(){return this.status===se}get enabled(){return this.status!==se}errors;get pristine(){return z(this.pristineReactive)}set pristine(n){z(()=>this.pristineReactive.set(n))}_pristine=m(()=>this.pristineReactive());pristineReactive=S(!0);get dirty(){return!this.pristine}get touched(){return z(this.touchedReactive)}set touched(n){z(()=>this.touchedReactive.set(n))}_touched=m(()=>this.touchedReactive());touchedReactive=S(!1);get untouched(){return!this.touched}_events=new ue;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Bt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Bt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Rt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Rt(n,this._rawAsyncValidators))}hasValidator(n){return Se(this._rawValidators,n)}hasAsyncValidator(n){return Se(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(V(C({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new ce(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new ce(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(V(C({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new le(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new le(!0,i))}markAsPending(n={}){this.status=X;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new J(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(V(C({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=se,this.errors=null,this._forEachChild(r=>{r.disable(V(C({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ee(this.value,i)),this._events.next(new J(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(C({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ae,this._forEachChild(i=>{i.enable(V(C({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(V(C({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ae||this.status===X)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ee(this.value,t)),this._events.next(new J(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(V(C({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?se:ae}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=X,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let i=Wt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new J(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new fe,this.statusChanges=new fe}_calculateStatus(){return this._allControlsDisabled()?se:this.errors?Ae:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(X)?X:this._anyControlsHaveStatus(Ae)?Ae:ae}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),r&&this._events.next(new le(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new ce(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Te(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Hn(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=$n(this._rawAsyncValidators)}};var Je=new $("",{providedIn:"root",factory:()=>Oe}),Oe="always";function zn(e,n,t=Oe){qn(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),Yn(e,n),Xn(e,n),Zn(e,n),Wn(e,n)}function Gt(e,n,t=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),Qn(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Ie(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Wn(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function qn(e,n){let t=Jt(e);n.validator!==null?e.setValidators(jt(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=Kt(e);n.asyncValidator!==null?e.setAsyncValidators(jt(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();Ie(n._rawValidators,r),Ie(n._rawAsyncValidators,r)}function Qn(e,n){let t=!1;if(e!==null){if(n.validator!==null){let r=Jt(e);if(Array.isArray(r)&&r.length>0){let l=r.filter(c=>c!==n.validator);l.length!==r.length&&(t=!0,e.setValidators(l))}}if(n.asyncValidator!==null){let r=Kt(e);if(Array.isArray(r)&&r.length>0){let l=r.filter(c=>c!==n.asyncValidator);l.length!==r.length&&(t=!0,e.setAsyncValidators(l))}}}let i=()=>{};return Ie(n._rawValidators,i),Ie(n._rawAsyncValidators,i),t}function Yn(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&tn(e,n)})}function Zn(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&tn(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function tn(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Xn(e,n){let t=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Jn(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function Kn(e){return Object.getPrototypeOf(e.constructor)===In}function ei(e,n){if(!n)return null;Array.isArray(n);let t,i,r;return n.forEach(l=>{l.constructor===ke?t=l:Kn(l)?i=l:r=l}),r||i||t||null}function Lt(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function Ht(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var nn=class extends Xe{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(Ln(t),Un(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Te(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ht(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Lt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Lt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Ht(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var rn=new $(""),ti={provide:W,useExisting:Ue(()=>Ke)},Ke=(()=>{class e extends W{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new fe;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,l,c){super(),this._ngModelWarningConfig=l,this.callSetDisabledState=c,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=ei(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&Gt(i,this,!1),zn(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Jn(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Gt(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||e)(E(Nn,10),E(Pn,10),E($t,10),E(rn,8),E(Je,8))};static \u0275dir=G({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[v([ti]),g,ut]})}return e})();var on=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=R({type:e});static \u0275inj=B({})}return e})();var an=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Je,useValue:t.callSetDisabledState??Oe}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=R({type:e});static \u0275inj=B({imports:[on]})}return e})(),sn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:rn,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Je,useValue:t.callSetDisabledState??Oe}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=R({type:e});static \u0275inj=B({imports:[on]})}return e})();var ln=`
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
`;var ri=["header"],oi=["title"],ai=["subtitle"],si=["content"],li=["footer"],ci=["*",[["p-header"]],[["p-footer"]]],di=["*","p-header","p-footer"];function ui(e,n){e&1&&Z(0)}function pi(e,n){if(e&1&&(a(0,"div"),x(1,1),D(2,ui,1,0,"ng-container",1),s()),e&2){let t=_();f(t.cx("header")),o(2),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function fi(e,n){if(e&1&&(ne(0),b(1),ie()),e&2){let t=_(2);o(),H(t.header)}}function hi(e,n){e&1&&Z(0)}function mi(e,n){if(e&1&&(a(0,"div"),D(1,fi,2,1,"ng-container",2)(2,hi,1,0,"ng-container",1),s()),e&2){let t=_();f(t.cx("title")),o(),d("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),o(),d("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function gi(e,n){if(e&1&&(ne(0),b(1),ie()),e&2){let t=_(2);o(),H(t.subheader)}}function yi(e,n){e&1&&Z(0)}function vi(e,n){if(e&1&&(a(0,"div"),D(1,gi,2,1,"ng-container",2)(2,yi,1,0,"ng-container",1),s()),e&2){let t=_();f(t.cx("subtitle")),o(),d("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),o(),d("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function _i(e,n){e&1&&Z(0)}function Ci(e,n){e&1&&Z(0)}function bi(e,n){if(e&1&&(a(0,"div"),x(1,2),D(2,Ci,1,0,"ng-container",1),s()),e&2){let t=_();f(t.cx("footer")),o(2),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Di=`
    ${ln}

    .p-card {
        display: block;
    }
`,Mi={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},cn=(()=>{class e extends F{name="card";theme=Di;classes=Mi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var dn=(()=>{class e extends A{header;subheader;set style(t){At(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=S(null);_componentStyle=u(cn);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-card"]],contentQueries:function(i,r,l){if(i&1&&(T(l,St,5),T(l,Et,5),T(l,ri,4),T(l,oi,4),T(l,ai,4),T(l,si,4),T(l,li,4),T(l,Fe,4)),i&2){let c;O(c=N())&&(r.headerFacet=c.first),O(c=N())&&(r.footerFacet=c.first),O(c=N())&&(r.headerTemplate=c.first),O(c=N())&&(r.titleTemplate=c.first),O(c=N())&&(r.subtitleTemplate=c.first),O(c=N())&&(r.contentTemplate=c.first),O(c=N())&&(r.footerTemplate=c.first),O(c=N())&&(r.templates=c)}},hostVars:5,hostBindings:function(i,r){i&2&&(ht("data-pc-name","card"),vt(r._style()),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[v([cn]),g],ngContentSelectors:di,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,r){i&1&&(k(ci),D(0,pi,3,3,"div",0),a(1,"div"),D(2,mi,3,4,"div",0)(3,vi,3,4,"div",0),a(4,"div"),x(5),D(6,_i,1,0,"ng-container",1),s(),D(7,bi,3,3,"div",0),s()),i&2&&(d("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),o(),f(r.cx("body")),o(),d("ngIf",r.header||r.titleTemplate||r._titleTemplate),o(),d("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),o(),f(r.cx("content")),o(2),d("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),o(),d("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[j,Ve,we,L],encapsulation:2,changeDetection:0})}return e})();var un=`
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
`;var Vi=["*"],wi=`
    ${un}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,xi={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},pn=(()=>{class e extends F{name="floatlabel";theme=wi;classes=xi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var fn=(()=>{class e extends A{_componentStyle=u(pn);variant="over";static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cx("root"))},inputs:{variant:"variant"},features:[v([pn]),g],ngContentSelectors:Vi,decls:1,vars:0,template:function(i,r){i&1&&(k(),x(0))},dependencies:[j,L],encapsulation:2,changeDetection:0})}return e})();var hn=`
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
`;var Fi=["*"],Ai={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},mn=(()=>{class e extends F{name="iconfield";theme=hn;classes=Ai;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var gn=(()=>{class e extends A{iconPosition="left";styleClass;_componentStyle=u(mn);static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[v([mn]),g],ngContentSelectors:Fi,decls:1,vars:0,template:function(i,r){i&1&&(k(),x(0))},dependencies:[j],encapsulation:2,changeDetection:0})}return e})();var Si=["*"],Ei={root:"p-inputicon"},yn=(()=>{class e extends F{name="inputicon";classes=Ei;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})(),vn=(()=>{class e extends A{styleClass;_componentStyle=u(yn);static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{styleClass:"styleClass"},features:[v([yn]),g],ngContentSelectors:Si,decls:1,vars:0,template:function(i,r){i&1&&(k(),x(0))},dependencies:[j,L],encapsulation:2,changeDetection:0})}return e})();var _n=(()=>{class e extends A{required=P(void 0,{transform:U});invalid=P(void 0,{transform:U});disabled=P(void 0,{transform:U});name=P();modelValue=S(void 0);$filled=m(()=>Ft(this.modelValue()));writeModelValue(t,i){this.modelValue.set(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=G({type:e,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[g]})}return e})();var Cn=`
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
`;var Ii=`
    ${Cn}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,ki={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},bn=(()=>{class e extends F{name="inputtext";theme=Ii;classes=ki;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Dn=(()=>{class e extends _n{ngControl=u(W,{optional:!0,self:!0});pcFluid=u(Tt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=P();fluid=P(void 0,{transform:U});$variant=m(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=u(bn);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value,t)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275dir=G({type:e,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(i,r){i&1&&I("input",function(c){return r.onInput(c)}),i&2&&f(r.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"]},features:[v([bn]),g]})}return e})();var Ne=class e{transform(n,t=", "){return n==null||!Array.isArray(n)?null:n.filter(r=>typeof r=="string").join(t)}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=pt({name:"join",type:e,pure:!0})};var Mn=`
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
`;var Ti=["icon"],Oi=["*"];function Ni(e,n){if(e&1&&w(0,"span",3),e&2){let t=_(2);f(t.cx("icon")),d("ngClass",t.icon)}}function Pi(e,n){if(e&1&&(ne(0),D(1,Ni,1,3,"span",2),ie()),e&2){let t=_();o(),d("ngIf",t.icon)}}function ji(e,n){}function Bi(e,n){e&1&&D(0,ji,0,0,"ng-template")}function Ri(e,n){if(e&1&&(a(0,"span"),D(1,Bi,1,0,null,4),s()),e&2){let t=_();f(t.cx("icon")),o(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var Gi={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},Vn=(()=>{class e extends F{name="tag";theme=Mn;classes=Gi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var wn=(()=>{class e extends A{styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=u(Vn);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-tag"]],contentQueries:function(i,r,l){if(i&1&&(T(l,Ti,4),T(l,Fe,4)),i&2){let c;O(c=N())&&(r.iconTemplate=c.first),O(c=N())&&(r.templates=c)}},hostVars:2,hostBindings:function(i,r){i&2&&f(r.cn(r.cx("root"),r.styleClass))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",U]},features:[v([Vn]),g],ngContentSelectors:Oi,decls:5,vars:5,consts:[[4,"ngIf"],[3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(i,r){i&1&&(k(),x(0),D(1,Pi,2,1,"ng-container",0)(2,Ri,2,3,"span",1),a(3,"span"),b(4),s()),i&2&&(o(),d("ngIf",!r.iconTemplate&&!r._iconTemplate),o(),d("ngIf",r.iconTemplate||r._iconTemplate),o(),f(r.cx("label")),o(),H(r.value))},dependencies:[j,Mt,Ve,we,L],encapsulation:2,changeDetection:0})}return e})();var Pe=class e{TAG_CONFIG={angular:{background:"#a51e24",textColor:"#FFFFFF"},primeng:{background:"#a51e24",textColor:"#FFFFFF"},typescript:{background:"#007acc",textColor:"#FFFFFF"},node:{background:"#3e863d",textColor:"#FFFFFF"},obsidian:{background:"#582bac",textColor:"#FFFFFF"},markdown:{background:"#196989",textColor:"#FFFFFF"}};value=P.required();currentConfig=m(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:"rgba(51,51,51,0.88)",textColor:"#FFFFFF"});tagClick=bt();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-article-tag"]],inputs:{value:[1,"value"]},outputs:{tagClick:"tagClick"},decls:1,vars:9,consts:[["severity","info",3,"click","value"]],template:function(t,i){t&1&&(a(0,"p-tag",0),I("click",function(){return i.tagClick.emit(i.value())}),s()),t&2&&(_e("border-radius","20px")("font-weight","500")("background-color",i.currentConfig().background)("color",i.currentConfig().textColor),d("value",i.value()))},dependencies:[wn],encapsulation:2,changeDetection:0})};var xn={files:[{fileName:"angular-coding-standard.md",title:"Typescript / Angular 20+ Coding Standards",cover:"angular-coding-standard.png",subtitle:"My personal collection of standards for building robust, responsive Angular applications using PrimeNG.",date:"2025-08-27T05:01:00.000Z",tags:["typescript","angular","PrimeNG"]},{fileName:"networking-1-lessons-learned.md",title:"Networking 1 - Lessons Learned",cover:"networking-1-lessons-learned.jpg",subtitle:"Problems I faced while setting up IP Passthrough for my local network and how I solved them.",date:"2025-08-27T05:00:00.000Z",tags:["networking"]},{fileName:"hello-blog.md",title:"Hello Blog",cover:"hello-blog.png",subtitle:"Testing blog post, please ignore. Explains how populating this blog works.",date:"2025-08-26T05:00:00.000Z",tags:["markdown","angular","obsidian","node"]}]};var ee=class e{articleSource=m(()=>this.#e().articleSource);searchControl=m(()=>this.#e().searchControl);selectedTags=m(()=>(console.log("selectedTags store ran"),this.#e().selectedTags));#e=S({searchControl:new nn,articleSource:xn.files,selectedTags:new Set});toggleTagSelection(n){return this.#e().selectedTags.has(n)?this.removeTag(n):this.addTag(n)}addTag(n){this.#e.update(t=>V(C({},t),{selectedTags:new Set([...t.selectedTags,n])}))}removeTag(n){this.#e.update(t=>{let i=new Set(t.selectedTags);return i.delete(n),V(C({},t),{selectedTags:i})})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac})};var de=class e{#e=u(ee);control=this.#e.searchControl;articles=m(()=>this.#e.articleSource().map(n=>this.formatFile(n)));filterList=m(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=m(()=>[...this.#e.selectedTags()]);searchValue=oe(this.control().valueChanges.pipe(st(300),ct(),q(n=>n?.toLowerCase()?.trim())));filteredArticles=m(()=>{let n=this.searchValue(),t=this.selectedTags();return this.articles().filter(i=>this.includesSearchValue(i,n)&&this.includesTag(i.tags,t))});allTags=m(()=>[...new Set(this.articles().flatMap(n=>n.tags))]);toggleTagSelection(n){this.#e.toggleTagSelection(n)}formatFile(n){return V(C({},n),{date:new Date(n.date).toDateString(),routerLink:n.fileName.replace(".md","")})}includesSearchValue(n,t){return t?n.title.toLowerCase().includes(t)||n.subtitle.toLowerCase().includes(t)||n.tags.some(i=>i.toLowerCase().includes(t)):!0}includesTag(n,t){return t?.length?t.every(i=>n.map(r=>r.toLowerCase()).includes(i.toLowerCase())):!0}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};function Li(e,n){if(e&1){let t=re();a(0,"app-article-tag",17),I("tagClick",function(r){Q(t);let l=_();return Y(l.facade.toggleTagSelection(r))}),s()}if(e&2){let t=n.$implicit;d("value",t)}}function Hi(e,n){if(e&1&&(a(0,"div")(1,"span",18),b(2),be(3,"join"),s()()),e&2){let t=_();o(2),Ce("Filter by: ",De(3,1,t.facade.filterList()))}}function Ui(e,n){if(e&1&&(a(0,"div",20),w(1,"img",21),s()),e&2){let t=_().$implicit;o(),d("alt",_t(t.title))("ngSrc","blog/"+t.cover)}}function $i(e,n){if(e&1&&b(0),e&2){let t=_().$implicit;H(t.title||"Article")}}function zi(e,n){if(e&1){let t=re();a(0,"app-article-tag",17),I("tagClick",function(r){Q(t);let l=_(3);return Y(l.facade.toggleTagSelection(r))}),s()}if(e&2){let t=n.$implicit;d("value",t)}}function Wi(e,n){if(e&1&&(a(0,"div",22)(1,"div",23),ye(2,zi,1,1,"app-article-tag",14,ge),s(),a(4,"div"),b(5),s()()),e&2){let t=_().$implicit;o(2),ve(t.tags),o(3),H(t.date)}}function qi(e,n){if(e&1&&(a(0,"p-card",16),D(1,Ui,2,3,"ng-template",null,0,Me)(3,$i,1,1,"ng-template",null,1,Me)(5,Wi,6,1,"ng-template",null,2,Me),a(7,"p",19),b(8),s()()),e&2){let t=n.$implicit;d("routerLink",t.routerLink),o(8),H(t.subtitle)}}var Be=class e{facade=u(de);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-chittylog-container"]],features:[v([ee,de])],decls:26,vars:2,consts:[["header",""],["title",""],["subtitle",""],[1,"page-container"],[1,"title","white"],[1,"title","gradient"],[1,"subtitle"],[1,"search-container"],["variant","in"],[1,"pi","pi-search"],["pInputText","","id","search_articles",1,"search-input",3,"formControl"],["for","search_articles"],[1,"tag-search-container"],[1,"tag-container"],[1,"clickable",3,"value"],[1,"card-container"],[1,"card",3,"routerLink"],[1,"clickable",3,"tagClick","value"],[1,"text-sm"],[1,"multiline-ellipsis"],[1,"box"],["fill","",1,"img-fill",3,"alt","ngSrc"],[1,"display-flex","flex-col","row-gap-2"],[1,"display-flex","flex-row","col-gap-2"]],template:function(t,i){t&1&&(a(0,"div",3)(1,"h1")(2,"span",4),b(3,"Chitty"),s(),a(4,"span",5),b(5,"blog"),s()(),a(6,"h3",6),b(7," Guides, updates, and random thoughts directly from me \u{1F30C} "),s(),a(8,"div",7)(9,"p-floatlabel",8)(10,"p-iconfield"),w(11,"p-inputicon",9)(12,"input",10),s(),a(13,"label",11),b(14,"Search articles..."),s()()(),a(15,"div",12)(16,"div")(17,"p"),b(18,"Search by tag:"),s()(),a(19,"div",13),ye(20,Li,1,1,"app-article-tag",14,ge),s()(),he(22,Hi,4,3,"div"),a(23,"div",15),ye(24,qi,9,2,"p-card",16,ge),s()()),t&2&&(o(12),d("formControl",i.facade.control()),o(8),ve(i.facade.allTags()),o(2),me(i.facade.filterList().length?22:-1),o(2),ve(i.facade.filteredArticles()))},dependencies:[dn,wt,xe,fn,gn,vn,Dn,an,ke,en,sn,Ke,Pe,Ne],styles:['.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4bb,#b48);-webkit-background-clip:text;background-clip:text;color:transparent}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media (max-width: 768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.white[_ngcontent-%COMP%]{color:#cfcbc6}.subtitle[_ngcontent-%COMP%]{font-weight:100;font-size:1rem;color:#cacaca;text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media (max-width: 768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card[_ngcontent-%COMP%]{width:22rem;position:relative;overflow:hidden;transition:all .5s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);box-shadow:0 0 20px #bb448880}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(187,68,136,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0;z-index:1;pointer-events:none}.card[_ngcontent-%COMP%]:hover:before{opacity:1;transform:rotate(-45deg) translateY(100%)}']})};function Fn(e){let n=u($e);return rt(()=>e().then(t=>n.get(t)))}var An=`
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
`;var Qi={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Sn=(()=>{class e extends F{name="progressspinner";theme=An;classes=Qi;static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var En=(()=>{class e extends A{styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=u(Sn);static \u0275fac=(()=>{let t;return function(r){return(t||(t=p(e)))(r||e)}})();static \u0275cmp=h({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:7,hostBindings:function(i,r){i&2&&(te("aria-label",r.ariaLabel)("role","progressbar")("data-pc-name","progressspinner")("data-pc-section","root")("aria-busy",!0),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[v([Sn]),g],decls:2,vars:9,consts:[["viewBox","25 25 50 50"],["cx","50","cy","50","r","20","stroke-miterlimit","10"]],template:function(i,r){i&1&&(dt(),a(0,"svg",0),w(1,"circle",1),s()),i&2&&(f(r.cx("spin")),_e("animation-duration",r.animationDuration),te("data-pc-section","root"),o(),f(r.cx("circle")),te("fill",r.fill)("stroke-width",r.strokeWidth))},dependencies:[j,L],encapsulation:2,changeDetection:0})}return e})();var Yi=["*"];function Zi(e,n){e&1&&(a(0,"div",1)(1,"div",2),w(2,"p-progress-spinner"),s()())}var Re=class e{showSpinner=new et(!1);show(){this.showSpinner.next(!0)}hide(){this.showSpinner.next(!1)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-loading-spinner"]],ngContentSelectors:Yi,decls:4,vars:3,consts:[[1,"content"],[1,"overlay"],[1,"spinner"]],template:function(t,i){t&1&&(k(),a(0,"div",0),x(1),s(),he(2,Zi,3,0,"div",1),be(3,"async")),t&2&&(o(2),me(De(3,1,i.showSpinner)?2:-1))},dependencies:[En,Vt],styles:["[_nghost-%COMP%]{display:flex;flex-flow:row nowrap;height:100%;flex:1;min-height:0}.overlay[_ngcontent-%COMP%]{box-sizing:border-box;flex:none;width:101%;margin-left:-100%;display:flex;flex-direction:column;justify-content:space-around;z-index:500;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.spinner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.spinner[_ngcontent-%COMP%]   p-progress-spinner[_ngcontent-%COMP%]{flex:1;min-height:0}.content[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column}"],changeDetection:0})};var Ge=class e{articleContent=P.required({transform:n=>this.stripFrontMatter(n)});stripFrontMatter(n){let t=/^---\s*[\s\S]*?\s*---/;return n.replace(t,"").trim()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-post-markdown"]],inputs:{articleContent:[1,"articleContent"]},decls:1,vars:1,consts:[["emoji","",1,"markdown",3,"data"]],template:function(t,i){t&1&&w(0,"markdown",0),t&2&&d("data",i.articleContent())},dependencies:[kt],styles:[".markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:#2e2e2e;color:#b48;padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}"],changeDetection:0})};var Xi=["spinner"],Ji=()=>["../"],Ki=()=>import("./chunk-TTWWYC2A.js").then(e=>e.ReadingTimeService),Le=class e{spinner=Dt.required("spinner");route=u(xt);api=u(Pt);timeEstimate=Fn(Ki);viewReady=new ue;shareButtonCopied=S(!1);shareButtonLabel=m(()=>this.shareButtonCopied()?"Copied!":"Share");article=oe(this.viewReady.pipe(pe(()=>this.route.paramMap.pipe(He(()=>this.spinner().show()),q(n=>n.get("postName")||""),pe(n=>n?this.api.get(`blog/${n}.md`,{responseType:"text"}).pipe(lt(2e3)):nt(()=>"No route param")),at(n=>(console.error(n),"")),He(()=>this.spinner().hide())))));timeToReadInMinutes=oe(it([It(this.article),this.timeEstimate]).pipe(pe(([n,t])=>t.getReadingTimeInMinutes(n||""))));ngAfterViewInit(){console.log(this.spinner()),this.viewReady.next()}downloadMarkdown(){if(this.article()){let n=this.article(),t=new Blob([n],{type:"text/markdown"}),i=document.createElement("a");i.href=URL.createObjectURL(t),i.download="my-file.md",i.click(),URL.revokeObjectURL(i.href)}}copyCurrentUrl(){navigator.clipboard.writeText(window.location.href).then(()=>{}).catch(n=>{console.error("Failed to copy URL: ",n)})}handleShareClick(){this.copyCurrentUrl(),this.shareButtonCopied.set(!0),setTimeout(()=>{this.shareButtonCopied.set(!1)},2e3)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-post-container"]],viewQuery:function(t,i){t&1&&mt(i.spinner,Xi,5),t&2&&gt()},decls:14,vars:8,consts:[["spinner",""],[1,"page-container"],[1,"navigation-header"],["label","Back to Blog","icon","pi pi-chevron-left","severity","secondary",3,"routerLink","text"],[1,"action-buttons"],["icon","pi pi-share-alt","severity","secondary",3,"click","label","text"],["label","Download","icon","pi pi-download","severity","secondary",3,"click","text"],[1,"reading-time-container"],[1,"pi","pi-clock","reading-time-icon"],[1,"text-sm"],[1,"content-area"],[3,"articleContent"]],template:function(t,i){if(t&1){let r=re();a(0,"div",1)(1,"app-loading-spinner",null,0)(3,"div",2),w(4,"p-button",3),a(5,"div",4)(6,"p-button",5),I("click",function(){return Q(r),Y(i.handleShareClick())}),s(),a(7,"p-button",6),I("click",function(){return Q(r),Y(i.downloadMarkdown())}),s()()(),a(8,"div",7),w(9,"i",8),a(10,"p",9),b(11),s()(),a(12,"div",10),w(13,"app-post-markdown",11),s()()()}t&2&&(o(4),d("routerLink",Ct(7,Ji))("text",!0),o(2),d("label",i.shareButtonLabel())("text",!0),o(),d("text",!0),o(4),Ce("",i.timeToReadInMinutes()," min. read"),o(2),d("articleContent",i.article()||""))},dependencies:[Ge,Nt,Ot,xe,Re],styles:[".page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}@media (max-width: 768px){.page-container[_ngcontent-%COMP%]{padding:1.5rem .75rem}}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}@media (max-width: 768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:center}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.reading-time-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.reading-time-icon[_ngcontent-%COMP%]{font-size:.875rem;color:#cfcbc6}"],changeDetection:0})};var Ts=[{path:"",component:Be},{path:":postName",component:Le}];export{Ts as CHITTYLOG_ROUTES};
