import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{At as be,B as MI,Bn as rE,Bt as dE,C as GE,D as Hy,Dt as ap,En as nl,F as KE,Fn as ph,Ft as cP,Gn as sE,Ht as dr$1,I as KI,Jn as so,Jt as ep,Kn as sP,Mt as bp,N as Jc,Nn as ou,O as Ic,Pt as cE,Q as Rp,Qn as tp,R as Le$1,Rt as cp,S as G,Sn as mr,Sr as zl,St as _e,U as NE,Wn as sD,X as QI,Xn as tP,Xt as fc,Yn as tD,Yt as fE,Z as Ri$1,Zn as th,_ as Ee$1,_n as mc,_r as yp,_t as ZI,ar as wI,br as zI,cn as jE,cr as xo,d as D,dr as yc,en as gh,et as Rv,f as DI,gr as yn$1,gt as YI,h as Ec,hn as lp,ht as Y,i as AI,k as Ie$1,kn as oe,lr as xv,mt as Xf,on as hu,p as Dc,pn as lE,pt as XE,qn as si$1,qt as em,sr as xI,t as $E,tr as vc,tt as S,ur as ya,v as Eh,vt as Zf,w as Gl,wn as nP,xn as mp,xr as zf,xt as _I,y as El,yn as mh,yr as zE,z as Lg}from"./chunk-IXL62mWL.js";import{A as me,B as zi$1,C as cn$1,I as x,L as xd,M as pn$1,R as z,S as bl,T as es,f as On,h as Ri$2,i as C,l as It,m as Re,t as Ar,u as Jr,v as Y$1,w as de$1,y as Yr}from"./chunk-XuGcw35V.js";import{a as Zt$1,i as K,n as Ue,r as fr,t as An$1}from"./main-3S5RYH2G.js";import{t as Ae$1}from"./chunk-BwJxM12x.js";var en=(()=>{class t{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,i){this._renderer=n,this._elementRef=i}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty(`disabled`,n)}static ɵfac=function(i){return new(i||t)(mr(ya),mr(dr$1))};static ɵdir=_I({type:t})}return t})();var Jn=(()=>{class t extends en{static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵdir=_I({type:t,features:[zf]})}return t})();var tn=new S(``);var Kn={provide:tn,useExisting:so(()=>Ne),multi:!0};function ei(){let t=It()?It().getUserAgent():``;return/android (\d+)/.test(t.toLowerCase())}var ti=new S(``);var Ne=(()=>{class t extends en{_compositionMode;_composing=!1;constructor(n,i,r){super(n,i),this._compositionMode=r,this._compositionMode??=!ei()}writeValue(n){let i=n??``;this.setProperty(`value`,i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static ɵfac=function(i){return new(i||t)(mr(ya),mr(dr$1),mr(ti,8))};static ɵdir=_I({type:t,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&ap(`input`,function(y){return r._handleInput(y.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(y){return r._compositionEnd(y.target.value)})},standalone:!1,features:[GE([Kn]),zf]})}return t})();function tt(t){return t==null||nt(t)===0}function nt(t){return t==null?null:Array.isArray(t)||typeof t==`string`?t.length:t instanceof Set?t.size:null}var nn=new S(``);var ni=new S(``);var ii=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Ze=class{static min(e){return ri(e)}static max(e){return oi(e)}static required(e){return rn(e)}static requiredTrue(e){return si(e)}static email(e){return ai(e)}static minLength(e){return li(e)}static maxLength(e){return di(e)}static pattern(e){return ci(e)}static nullValidator(e){return Fe()}static compose(e){return cn(e)}static composeAsync(e){return pn(e)}};function ri(t){return e=>{if(e.value==null||t==null)return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function oi(t){return e=>{if(e.value==null||t==null)return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function rn(t){return tt(t.value)?{required:!0}:null}function si(t){return t.value===!0?null:{required:!0}}function ai(t){return tt(t.value)||ii.test(t.value)?null:{email:!0}}function li(t){return e=>{let n=e.value?.length??nt(e.value);return n===null||n===0?null:n<t?{minlength:{requiredLength:t,actualLength:n}}:null}}function di(t){return e=>{let n=e.value?.length??nt(e.value);return n!==null&&n>t?{maxlength:{requiredLength:t,actualLength:n}}:null}}function ci(t){if(!t)return Fe;let e,n;return typeof t==`string`?(n=``,t.charAt(0)!==`^`&&(n+=`^`),n+=t,t.charAt(t.length-1)!==`$`&&(n+=`$`),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(tt(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Fe(t){return null}function on(t){return t!=null}function sn(t){return fc(t)?Ie$1(t):t}function an(t){let e={};return t.forEach(n=>{e=n!=null?r(r({},e),n):e}),Object.keys(e).length===0?null:e}function ln(t,e){return e.map(n=>n(t))}function ui(t){return!t.validate}function dn(t){return t.map(e=>ui(e)?e:n=>e.validate(n))}function cn(t){if(!t)return null;let e=t.filter(on);return e.length==0?null:function(n){return an(ln(n,e))}}function un(t){return t!=null?cn(dn(t)):null}function pn(t){if(!t)return null;let e=t.filter(on);return e.length==0?null:function(n){return mh(ln(n,e).map(sn)).pipe(Ee$1(an))}}function fn(t){return t!=null?pn(dn(t)):null}function Yt(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function hn(t){return t._rawValidators}function gn(t){return t._rawAsyncValidators}function Xe(t){return t?Array.isArray(t)?t:[t]:[]}function Ee(t,e){return Array.isArray(t)?t.includes(e):t===e}function Zt(t,e){let n=Xe(e);return Xe(t).forEach(r=>{Ee(n,r)||n.push(r)}),n}function Xt(t,e){return Xe(e).filter(n=>!Ee(t,n))}var Qe=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=un(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=fn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}};var ae=`VALID`;var Ae=`INVALID`;var ee=`PENDING`;var le=`DISABLED`;var Q=class{};var Se=class extends Q{value;source;constructor(e,n){super(),this.value=e,this.source=n}};var de=class extends Q{pristine;source;constructor(e,n){super(),this.pristine=e,this.source=n}};var ce=class extends Q{touched;source;constructor(e,n){super(),this.touched=e,this.source=n}};var te=class extends Q{status;source;constructor(e,n){super(),this.status=e,this.source=n}};var ue=class extends Q{source;constructor(e){super(),this.source=e}};function pi(t){return(ke(t)?t.validators:t)||null}function fi(t){return Array.isArray(t)?un(t):t||null}function hi(t,e){return(ke(e)?e.asyncValidators:t)||null}function gi(t){return Array.isArray(t)?fn(t):t||null}function ke(t){return t!=null&&!Array.isArray(t)&&typeof t==`object`}var Je=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=xo(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,n){this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Rp(this.statusReactive)}set status(e){Rp(()=>this.statusReactive.set(e))}_status=sD(()=>this.statusReactive());statusReactive=xo(void 0);get valid(){return this.status===ae}get invalid(){return this.status===Ae}get pending(){return this.status===ee}get disabled(){return this.status===le}get enabled(){return this.status!==le}errors;get pristine(){return Rp(this.pristineReactive)}set pristine(e){Rp(()=>this.pristineReactive.set(e))}_pristine=sD(()=>this.pristineReactive());pristineReactive=xo(!0);get dirty(){return!this.pristine}get touched(){return Rp(this.touchedReactive)}set touched(e){Rp(()=>this.touchedReactive.set(e))}_touched=sD(()=>this.touchedReactive());touchedReactive=xo(!1);get untouched(){return!this.touched}_events=new Y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Zt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Zt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Xt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Xt(e,this._rawAsyncValidators))}hasValidator(e){return Ee(this._rawValidators,e)}hasAsyncValidator(e){return Ee(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(s(r({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new ce(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new ce(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(s(r({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new de(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new de(!0,i))}markAsPending(e={}){this.status=ee;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new te(this.status,n)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(s(r({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=le,this.errors=null,this._forEachChild(r$1=>{r$1.disable(s(r({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Se(this.value,i)),this._events.next(new te(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(s(r({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=ae,this._forEachChild(i=>{i.enable(s(r({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(s(r({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},n),this._parent?._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ae||this.status===ee)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Se(this.value,n)),this._events.next(new te(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(s(r({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?le:ae}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=ee,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:e!==!1};let i=sn(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(`.`)),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i?.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new te(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new Le$1,this.statusChanges=new Le$1}_calculateStatus(){return this._allControlsDisabled()?le:this.errors?Ae:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ee)?ee:this._anyControlsHaveStatus(Ae)?Ae:ae}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,n),r&&this._events.next(new de(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new ce(this.touched,n)),e.onlySelf||this._parent?._updateTouched(e,n)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ke(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=fi(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=gi(this._rawAsyncValidators)}_updateHasRequiredValidator(){Rp(()=>this._hasRequired.set(this.hasValidator(Ze.required)))}};function mi(t){return t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`}function vi(t,e,n,i){switch(n){case`name`:t.setAttribute(e,n,i);break;case`disabled`:case`readonly`:case`required`:i?t.setAttribute(e,n,``):t.removeAttribute(e,n);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?t.setAttribute(e,n,i.toString()):t.removeAttribute(e,n);break}}var Ke=class{kind;context;control;message;constructor({kind:e,context:n,control:i}){this.kind=e,this.context=n,this.control=i}};var yi=(()=>{class t{_validator=Fe;_onChange;_enabled;ngOnChanges(n){if(this.inputName in n){let i=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Fe,this._onChange?.()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}static ɵfac=function(i){return new(i||t)};static ɵdir=_I({type:t,features:[Lg]})}return t})();var _i={provide:nn,useExisting:so(()=>mn),multi:!0};var mn=(()=>{class t extends yi{required;inputName=`required`;normalizeInput=cP;createValidator=n=>rn;enabled(n){return n}static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵdir=_I({type:t,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&Xf(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[GE([_i]),zf]})}return t})();var Ci=new S(``);var it=new S(``,{factory:()=>Te});var Te=`always`;function bi(t,e,n=Te){Mi(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n===`always`)&&e.valueAccessor.setDisabledState?.(t.disabled),xi(t,e),Ai(t,e),wi(t,e),Di(t,e)}function Qt(t,e,n=!0){let i=()=>{};e?.valueAccessor?.registerOnChange(i),e?.valueAccessor?.registerOnTouched(i),Vi(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Ie(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Di(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Mi(t,e){let n=hn(t);e.validator!==null?t.setValidators(Yt(n,e.validator)):typeof n==`function`&&t.setValidators([n]);let i=gn(t);e.asyncValidator!==null?t.setAsyncValidators(Yt(i,e.asyncValidator)):typeof i==`function`&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ie(e._rawValidators,r),Ie(e._rawAsyncValidators,r)}function Vi(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=hn(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(y=>y!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=gn(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(y=>y!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return Ie(e._rawValidators,i),Ie(e._rawAsyncValidators,i),n}function xi(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn===`change`&&vn(t,e)})}function wi(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn===`blur`&&t._pendingChange&&vn(t,e),t.updateOn!==`submit`&&t.markAsTouched()})}function vn(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ai(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Fi(t,e){if(!t.hasOwnProperty(`model`))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ei(t){return Object.getPrototypeOf(t.constructor)===Jn}function Si(t,e){if(!e)return null;let n,i,r;return e.forEach(s=>{s.constructor===Ne?n=s:Ei(s)?i=s:r=s}),r||i||n||null}var Ii={provide:Ci,useFactory:()=>{let t=D(W,{self:!0});return{setParseErrors:e=>{t.setParseErrorSource(e)},set onReset(e){t.onReset=e}}}};var W=class extends Qe{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof ue&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Si(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,n,i){super(),this.injector=e,this.renderer=n,this.rawValueAccessors=i,this.injector?.get(_e)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(sP);if(!this.control||!e)return;let n=e.markForCheck.bind(e);this.subscription=new G,this.subscription.add(this.control.valueChanges.subscribe(n)),this.subscription.add(this.control.statusChanges.subscribe(n)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof ue&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=mi(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof mn))}ngControlUpdate(e,n){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,e.setCustomControlModelInput(i.value)),this.bindControlProperty(e,r,`touched`,i.touched),this.bindControlProperty(e,r,`dirty`,i.dirty),this.bindControlProperty(e,r,`valid`,i.valid),this.bindControlProperty(e,r,`invalid`,i.invalid),this.bindControlProperty(e,r,`pending`,i.pending),this.bindControlProperty(e,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,`required`,this.isRequired);let s=i.errors;if(r.errors!==s){r.errors=s;let y=this._convertErrors(s);e.setInputOnDirectives(`errors`,y)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,n,i,r){if(n[i]===r)return;n[i]=r;let s=e.setInputOnDirectives(i,r);this.isNativeFormElement&&!s&&(i===`disabled`||i===`required`)&&this.renderer&&vi(this.renderer,e.nativeElement,i,r)}_convertErrors(e){if(e===null)return[];let n=this.control;return Object.entries(e).map(([i,r])=>new Ke({context:r,kind:i,control:n}))}setParseErrorSource(e){if(e===void 0)return;let n=null,i=sD(()=>{let r=e();return r.length===0?null:r.reduce((s,y)=>(s[y.kind]=y,s),{})});this.parseErrorsValidator=(()=>n).bind(this),hu(()=>{n=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var et=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var yn=(()=>{class t extends et{constructor(n){super(n)}static ɵfac=function(i){return new(i||t)(mr(W,2))};static ɵdir=_I({type:t,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&yp(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[zf]})}return t})();function Jt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Kt(t){return typeof t==`object`&&t!==null&&Object.keys(t).length===2&&`value`in t&&`disabled`in t}var _n=class extends Je{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,n,i){super(pi(n),hi(i,n)),this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ke(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Kt(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){Rp(()=>{this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)})}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),n.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,n?.emitEvent!==!1&&this._events.next(new ue(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Jt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Jt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Kt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Cn=new S(``);var Ni={provide:W,useExisting:so(()=>rt)};var rt=(()=>{class t extends W{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(n){}model;update=new Le$1;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(n,i,r,s,y,Xn,Qn){super(Qn,Xn,r),this._ngModelWarningConfig=s,this.callSetDisabledState=y,this._setValidators(n),this._setAsyncValidators(i)}ngOnChanges(n){if(this._isControlChanged(n)){let i=n.form.previousValue;i&&(Qt(i,this,!1),this.removeParseErrorsValidator(i)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,bi(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}Fi(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Qt(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty(`form`)}ɵngControlCreate(n){super.ngControlCreate(n)}ɵngControlUpdate(n){super.ngControlUpdate(n,!0)}static ɵfac=function(i){return new(i||t)(mr(nn,10),mr(ni,10),mr(tn,10),mr(Cn,8),mr(it,8),mr(ya,8),mr(be,8))};static ɵdir=_I({type:t,selectors:[[``,`formControl`,``]],inputs:{form:[0,`formControl`,`form`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},exportAs:[`ngForm`],standalone:!1,features:[GE([Ni,Ii]),zf,Lg,xI(null)]})}return t})();var bn=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=wI({type:t});static ɵinj=El({})}return t})();var Dn=(()=>{class t{static withConfig(n){return{ngModule:t,providers:[{provide:it,useValue:n.callSetDisabledState??Te}]}}static ɵfac=function(i){return new(i||t)};static ɵmod=wI({type:t});static ɵinj=El({imports:[bn]})}return t})();var Mn=(()=>{class t{static withConfig(n){return{ngModule:t,providers:[{provide:Cn,useValue:n.warnOnNgModelWithFormControl??`always`},{provide:it,useValue:n.callSetDisabledState??Te}]}}static ɵfac=function(i){return new(i||t)};static ɵmod=wI({type:t});static ɵinj=El({imports:[bn]})}return t})();var Vn=`
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
`;var Ti=[`*`];var Pi=`
    ${Vn}

    /* For Optimus */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`;var Oi={root:({instance:t})=>[`p-floatlabel`,{"p-floatlabel-over":t.variant===`over`,"p-floatlabel-on":t.variant===`on`,"p-floatlabel-in":t.variant===`in`}]};var xn=(()=>{class t extends z{name=`floatlabel`;style=Pi;classes=Oi;static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var wn=new S(`FLOATLABEL_INSTANCE`);var An=(()=>{class t extends Y$1{componentName=`FloatLabel`;_componentStyle=D(xn);$pcFloatLabel=D(wn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}variant=`over`;static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-floatlabel`],[`p-floatLabel`],[`p-float-label`]],hostVars:2,hostBindings:function(i,r){i&2&&NE(r.cx(`root`))},inputs:{variant:`variant`},features:[GE([xn,{provide:wn,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf],ngContentSelectors:Ti,decls:1,vars:0,template:function(i,r){i&1&&(cE(),lE(0))},dependencies:[de$1,Re,zi$1],encapsulation:2})}return t})();var Fn=`
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
`;var Ri=[`*`];var Bi={root:({instance:t})=>[`p-iconfield`,{"p-iconfield-left":t.iconPosition==`left`,"p-iconfield-right":t.iconPosition==`right`}]};var En=(()=>{class t extends z{name=`iconfield`;style=Fn;classes=Bi;static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var Sn=new S(`ICONFIELD_INSTANCE`);var In=(()=>{class t extends Y$1{componentName=`IconField`;hostName=``;_componentStyle=D(En);$pcIconField=D(Sn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}iconPosition=`left`;styleClass;static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-iconfield`],[`p-iconField`],[`p-icon-field`]],hostVars:2,hostBindings:function(i,r){i&2&&NE(r.cn(r.cx(`root`),r.styleClass))},inputs:{hostName:`hostName`,iconPosition:`iconPosition`,styleClass:`styleClass`},features:[GE([En,{provide:Sn,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf],ngContentSelectors:Ri,decls:1,vars:0,template:function(i,r){i&1&&(cE(),lE(0))},dependencies:[de$1,zi$1],encapsulation:2})}return t})();var ji=[`*`];var Li={root:`p-inputicon`};var Nn=(()=>{class t extends z{name=`inputicon`;classes=Li;static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var kn=new S(`INPUTICON_INSTANCE`);var Tn=(()=>{class t extends Y$1{componentName=`InputIcon`;hostName=``;styleClass;_componentStyle=D(Nn);$pcInputIcon=D(kn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-inputicon`],[`p-inputIcon`]],hostVars:2,hostBindings:function(i,r){i&2&&NE(r.cn(r.cx(`root`),r.styleClass))},inputs:{hostName:`hostName`,styleClass:`styleClass`},features:[GE([Nn,{provide:kn,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf],ngContentSelectors:ji,decls:1,vars:0,template:function(i,r){i&1&&(cE(),lE(0))},dependencies:[de$1,Re,zi$1],encapsulation:2})}return t})();var Pn=(()=>{class t extends Y$1{modelValue=xo(void 0);$filled=sD(()=>C(this.modelValue()));writeModelValue(n){this.modelValue.set(n)}static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵdir=_I({type:t,features:[zf]})}return t})();var Gi=`
    
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


    /* For Optimus */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var Ui={root:({instance:t})=>[`p-inputtext p-component`,{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize===`small`,"p-inputtext-lg":t.pSize===`large`,"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-inputtext-fluid":t.hasFluid}]};var Rn=(()=>{class t extends z{name=`inputtext`;style=Gi;classes=Ui;static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var Bn=new S(`INPUTTEXT_INSTANCE`);var jn=(()=>{class t extends Pn{componentName=`InputText`;hostName=``;ptInputText=nP();pInputTextPT=nP();pInputTextUnstyled=nP();bindDirectiveInstance=D(x,{self:!0});$pcInputText=D(Bn,{optional:!0,skipSelf:!0})??void 0;ngControl=D(W,{optional:!0,self:!0});pcFluid=D(On,{optional:!0,host:!0,skipSelf:!0});pSize;variant=nP();fluid=nP(void 0,{transform:cP});invalid=nP(void 0,{transform:cP});$variant=sD(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=D(Rn);constructor(){super(),hu(()=>{let n=this.ptInputText()||this.pInputTextPT();n&&this.directivePT.set(n)}),hu(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize]:this.pSize})}static ɵfac=function(i){return new(i||t)};static ɵdir=_I({type:t,selectors:[[``,`pInputText`,``]],hostVars:3,hostBindings:function(i,r){i&1&&ap(`input`,function(){return r.onInput()}),i&2&&(Xf(`data-p`,r.dataP),NE(r.cx(`root`)))},inputs:{hostName:`hostName`,ptInputText:[1,`ptInputText`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:`pSize`,variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[GE([Rn,{provide:Bn,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf]})}return t})();var Ln=`
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
`;var Hi=[`icon`];var $i=[`*`];function zi(t,e){if(t&1&&tp(0,`span`,4),t&2){let n=sE(2);NE(n.cx(`icon`)),ep(`ngClass`,n.icon)(`pBind`,n.ptm(`icon`))}}function Wi(t,e){if(t&1&&(Ic(0),Zf(1,zi,1,4,`span`,3),Ec()),t&2){let n=sE();Hy(),ep(`ngIf`,n.icon)}}function qi(t,e){}function Yi(t,e){t&1&&Zf(0,qi,0,0,`ng-template`)}function Zi(t,e){if(t&1&&(si$1(0,`span`,2),Zf(1,Yi,1,0,null,5),mc()),t&2){let n=sE();NE(n.cx(`icon`)),ep(`pBind`,n.ptm(`icon`)),Hy(),ep(`ngTemplateOutlet`,n.iconTemplate||n._iconTemplate)}}var Xi={root:({instance:t})=>[`p-tag p-component`,{"p-tag-info":t.severity===`info`,"p-tag-success":t.severity===`success`,"p-tag-warn":t.severity===`warn`,"p-tag-danger":t.severity===`danger`,"p-tag-secondary":t.severity===`secondary`,"p-tag-contrast":t.severity===`contrast`,"p-tag-rounded":t.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var Gn=(()=>{class t extends z{name=`tag`;style=Ln;classes=Xi;static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var Un=new S(`TAG_INSTANCE`);var Hn=(()=>{class t extends Y$1{componentName=`Tag`;$pcTag=D(Un,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=D(Gn);onAfterContentInit(){this.templates?.forEach(n=>{n.getType()===`icon`&&(this._iconTemplate=n.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-tag`]],contentQueries:function(i,r,s){if(i&1&&lp(s,Hi,4)(s,Ri$2,4),i&2){let y;dE(y=fE())&&(r.iconTemplate=y.first),dE(y=fE())&&(r.templates=y)}},hostVars:3,hostBindings:function(i,r){i&2&&(Xf(`data-p`,r.dataP),NE(r.cn(r.cx(`root`),r.styleClass)))},inputs:{styleClass:`styleClass`,severity:`severity`,value:`value`,icon:`icon`,rounded:[2,`rounded`,`rounded`,cP]},features:[GE([Gn,{provide:Un,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf],ngContentSelectors:$i,decls:5,vars:6,consts:[[4,`ngIf`],[3,`class`,`pBind`,4,`ngIf`],[3,`pBind`],[3,`class`,`ngClass`,`pBind`,4,`ngIf`],[3,`ngClass`,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,r){i&1&&(cE(),lE(0),Zf(1,Wi,2,1,`ng-container`,0)(2,Zi,2,4,`span`,1),si$1(3,`span`,2),jE(4),mc()),i&2&&(Hy(),ep(`ngIf`,!r.iconTemplate&&!r._iconTemplate),Hy(),ep(`ngIf`,r.iconTemplate||r._iconTemplate),Hy(),NE(r.cx(`label`)),ep(`pBind`,r.ptm(`label`)),Hy(),bp(r.value))},dependencies:[de$1,Yr,cn$1,pn$1,Re,x],encapsulation:2})}return t})();var Pe=class t{transform(e,n=`, `){return e==null||!Array.isArray(e)?null:e.filter(r=>typeof r==`string`).join(n)}static ɵfac=function(n){return new(n||t)};static ɵpipe=MI({name:`join`,type:t,pure:!0})};var Oe=class t{TAG_CONFIG={angular:{background:`var(--site-accent-soft)`,textColor:`var(--site-accent-on-soft)`},primeng:{background:`var(--site-accent-soft)`,textColor:`var(--site-accent-on-soft)`},typescript:{background:`var(--site-surface-alt)`,textColor:`var(--site-primary)`},node:{background:`var(--site-surface-alt)`,textColor:`var(--site-primary)`},obsidian:{background:`var(--site-sand)`,textColor:`var(--site-on-sand)`},markdown:{background:`var(--site-surface-alt)`,textColor:`var(--site-primary)`}};value=nP.required();selected=nP(!1);currentConfig=sD(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:`var(--site-sand)`,textColor:`var(--site-on-sand)`});tagClick=tP();onClick(e){e.stopPropagation(),this.tagClick.emit(this.value())}static ɵfac=function(n){return new(n||t)};static ɵcmp=DI({type:t,selectors:[[`app-article-tag`]],inputs:{value:[1,`value`],selected:[1,`selected`]},outputs:{tagClick:`tagClick`},decls:2,vars:7,consts:[[`type`,`button`,1,`article-tag`,3,`click`]],template:function(n,i){n&1&&(yc(0,`button`,0),cp(`click`,function(s){return i.onClick(s)}),jE(1),vc()),n&2&&(mp(`background-color`,i.currentConfig().background)(`color`,i.currentConfig().textColor),Xf(`aria-label`,`Filter by `+i.value())(`aria-pressed`,i.selected()),Hy(),Dc(` `,i.value(),` `))},styles:[`.article-tag[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:1.5rem;padding:.4rem .75rem;min-height:44px;font-size:.875rem;font-weight:500;cursor:pointer}.article-tag[_ngcontent-%COMP%]:hover{border-color:currentColor}.article-tag[aria-pressed=true][_ngcontent-%COMP%]{border-color:currentColor;text-decoration:underline;text-underline-offset:.2em}`]})};var $n={files:[{fileName:`angular-coding-standard.md`,title:`Typescript / Angular 20+ Coding Standards`,cover:`angular-coding-standard.png`,subtitle:`My personal collection of standards for building robust, responsive Angular applications using PrimeNG.`,date:`2025-08-27T05:01:00.000Z`,tags:[`typescript`,`angular`,`PrimeNG`]},{fileName:`networking-1-lessons-learned.md`,title:`Networking 1 - Lessons Learned`,cover:`networking-1-lessons-learned.jpg`,subtitle:`Problems I faced while setting up IP Passthrough for my local network and how I solved them.`,date:`2025-08-27T05:00:00.000Z`,tags:[`networking`]},{fileName:`hello-blog.md`,title:`Hello Blog`,cover:`hello-blog.png`,subtitle:`Testing blog post, please ignore. Explains how populating this blog works.`,date:`2025-08-26T05:00:00.000Z`,tags:[`markdown`,`angular`,`obsidian`,`node`]}]};var ne=class t{articleSource=sD(()=>this.#e().articleSource);searchControl=sD(()=>this.#e().searchControl);selectedTags=sD(()=>this.#e().selectedTags);#e=xo({searchControl:new _n,articleSource:$n.files,selectedTags:new Set});toggleTagSelection(e){return this.#e().selectedTags.has(e)?this.removeTag(e):this.addTag(e)}addTag(e){this.#e.update(n=>s(r({},n),{selectedTags:new Set([...n.selectedTags,e])}))}removeTag(e){this.#e.update(n=>{let i=new Set(n.selectedTags);return i.delete(e),s(r({},n),{selectedTags:i})})}static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:t.ɵfac})};var fe=class t{#e=D(ne);control=this.#e.searchControl;featured=sD(()=>this.articles().find(e=>e.tags.includes(`featured`))||this.articles()[0]);others=sD(()=>this.articles().filter(e=>e.title!==this.featured().title));articles=sD(()=>this.#e.articleSource().map(e=>this.formatFile(e)));filterList=sD(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=sD(()=>[...this.#e.selectedTags()]);searchValue=Ue(this.control().valueChanges.pipe(Eh(300),Jc(),Ee$1(e=>e?.toLowerCase()?.trim())));filteredArticles=sD(()=>{let e=this.searchValue(),n=this.selectedTags();return this.others().filter(i=>this.includesSearchValue(i,e)&&this.includesTag(i.tags,n))});allTags=sD(()=>[...new Set(this.articles().flatMap(e=>e.tags))]);toggleTagSelection(e){this.#e.toggleTagSelection(e)}formatFile(e){return s(r({},e),{date:new Date(e.date).toDateString(),routerLink:e.fileName.replace(`.md`,``)})}includesSearchValue(e,n){return n?e.title.toLowerCase().includes(n)||e.subtitle.toLowerCase().includes(n)||e.tags.some(i=>i.toLowerCase().includes(n)):!0}includesTag(e,n){return n?.length?n.every(i=>e.map(r=>r.toLowerCase()).includes(i.toLowerCase())):!0}static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})};function Qi(t,e){if(t&1&&(si$1(0,`div`,20),tp(1,`img`,21),si$1(2,`p-tag`,22),jE(3,`Featured`),mc()()),t&2){let n=sE();Hy(),ep(`alt`,$E(n.facade.featured().title))(`ngSrc`,`blog/`+n.facade.featured().cover)}}function Ji(t,e){if(t&1&&jE(0),t&2)Dc(` `,sE().facade.featured().title||`Article`,` `)}function Ki(t,e){if(t&1){let n=rE();si$1(0,`app-article-tag`,25),ap(`tagClick`,function(r){Gl(n);return zl(sE(2).facade.toggleTagSelection(r))}),mc()}if(t&2){let n=e.$implicit,i=sE(2);ep(`value`,n)(`selected`,i.facade.selectedTags().includes(n))}}function er(t,e){if(t&1&&(si$1(0,`div`,23)(1,`div`,24),YI(2,Ki,1,2,`app-article-tag`,17,ZI),mc(),si$1(4,`div`),jE(5),mc()()),t&2){let n=sE();Hy(2),KI(n.facade.featured().tags),Hy(3),bp(n.facade.featured().date)}}function tr(t,e){if(t&1){let n=rE();si$1(0,`app-article-tag`,25),ap(`tagClick`,function(r){Gl(n);return zl(sE().facade.toggleTagSelection(r))}),mc()}if(t&2){let n=e.$implicit,i=sE();ep(`value`,n)(`selected`,i.facade.selectedTags().includes(n))}}function nr(t,e){if(t&1&&(si$1(0,`div`)(1,`span`,26),jE(2),KE(3,`join`),mc()()),t&2){let n=sE();Hy(2),Dc(`Filter by: `,XE(3,1,n.facade.filterList()))}}function ir(t,e){if(t&1&&(si$1(0,`div`,27),tp(1,`img`,21),mc()),t&2){let n=sE().$implicit;Hy(),ep(`alt`,$E(n.title))(`ngSrc`,`blog/`+n.cover)}}function rr(t,e){if(t&1&&jE(0),t&2){let n=sE().$implicit;bp(n.title||`Article`)}}function or(t,e){if(t&1){let n=rE();si$1(0,`app-article-tag`,25),ap(`tagClick`,function(r){Gl(n);return zl(sE(3).facade.toggleTagSelection(r))}),mc()}if(t&2){let n=e.$implicit,i=sE(3);ep(`value`,n)(`selected`,i.facade.selectedTags().includes(n))}}function sr(t,e){if(t&1&&(si$1(0,`div`,23)(1,`div`,24),YI(2,or,1,2,`app-article-tag`,17,ZI),mc(),si$1(4,`div`),jE(5),mc()()),t&2){let n=sE().$implicit;Hy(2),KI(n.tags),Hy(3),bp(n.date)}}function ar(t,e){if(t&1&&(si$1(0,`p-card`,19),Zf(1,ir,2,3,`ng-template`,null,0,tD)(3,rr,1,1,`ng-template`,null,1,tD)(5,sr,6,1,`ng-template`,null,2,tD),si$1(7,`p`,9),jE(8),mc()()),t&2){let n=e.$implicit;ep(`routerLink`,n.routerLink),Hy(8),bp(n.subtitle)}}var Be=class t{facade=D(fe);static ɵfac=function(n){return new(n||t)};static ɵcmp=DI({type:t,selectors:[[`app-chittylog-container`]],features:[GE([ne,fe])],decls:36,vars:4,consts:[[`header`,``],[`title`,``],[`subtitle`,``],[1,`page-container`],[1,`title`,`heading-text`],[1,`title`,`gradient`],[1,`subtitle`],[1,`w-95`],[1,`card`,`featured`,3,`routerLink`],[1,`multiline-ellipsis`],[1,`search-container`],[`variant`,`in`],[1,`pi`,`pi-search`],[`pInputText`,``,`id`,`search_articles`,1,`search-input`,3,`formControl`],[`for`,`search_articles`],[1,`tag-search-container`],[1,`tag-container`],[1,`clickable`,3,`value`,`selected`],[1,`card-container`],[1,`card`,3,`routerLink`],[1,`box`,`featured`],[`fill`,``,1,`img-fill`,3,`alt`,`ngSrc`],[1,`featured-tag-overlay`],[1,`display-flex`,`flex-col`,`row-gap-2`],[1,`display-flex`,`flex-row`,`col-gap-2`],[1,`clickable`,3,`tagClick`,`value`,`selected`],[1,`text-sm`],[1,`box`]],template:function(n,i){n&1&&(si$1(0,`div`,3)(1,`h1`)(2,`span`,4),jE(3,`Chitty`),mc(),si$1(4,`span`,5),jE(5,`blog`),mc()(),si$1(6,`h3`,6),jE(7,` Guides, updates, and random thoughts directly from me `),mc(),si$1(8,`div`,7)(9,`p-card`,8),Zf(10,Qi,4,3,`ng-template`,null,0,tD)(12,Ji,1,1,`ng-template`,null,1,tD)(14,er,6,1,`ng-template`,null,2,tD),si$1(16,`p`,9),jE(17),mc()()(),si$1(18,`div`,10)(19,`p-floatlabel`,11)(20,`p-iconfield`),tp(21,`p-inputicon`,12)(22,`input`,13),xv(),mc(),si$1(23,`label`,14),jE(24,`Search articles...`),mc()()(),si$1(25,`div`,15)(26,`div`)(27,`p`),jE(28,`Search by tag:`),mc()(),si$1(29,`div`,16),YI(30,tr,1,2,`app-article-tag`,17,ZI),mc()(),zI(32,nr,4,3,`div`),si$1(33,`div`,18),YI(34,ar,9,2,`p-card`,19,ZI),mc()()),n&2&&(Hy(9),ep(`routerLink`,i.facade.featured().routerLink),Hy(8),bp(i.facade.featured().subtitle),Hy(5),ep(`formControl`,i.facade.control()),Rv(),Hy(8),KI(i.facade.allTags()),Hy(2),QI(i.facade.filterList().length?32:-1),Hy(2),KI(i.facade.filteredArticles()))},dependencies:[Ae$1,bl,Zt$1,An,In,Tn,jn,Dn,Ne,yn,Mn,rt,Oe,Hn,Pe],styles:[`.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:var(--%NS%site-accent-gradient);-webkit-background-clip:text;background-clip:text;color:transparent}@media(forced-colors:active){.gradient[_ngcontent-%COMP%]{background:none;color:CanvasText}}.box.featured[_ngcontent-%COMP%]{height:22rem;position:relative}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.featured-tag-overlay[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:10;background:var(--%NS%site-primary);color:var(--%NS%site-on-primary);border-radius:20px;padding:.5rem 1rem;font-weight:700;font-size:1.05em;border:none;box-shadow:var(--%NS%site-shadow)}@media(max-width:768px){.featured-tag-overlay[_ngcontent-%COMP%]{top:.75rem;left:.75rem;font-size:1.03em;padding:.4rem .8rem}}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media(max-width:768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.heading-text[_ngcontent-%COMP%]{color:var(--%NS%site-text)}.subtitle[_ngcontent-%COMP%]{font-weight:400;font-size:1rem;color:var(--%NS%site-text-muted);text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media(max-width:768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card[_ngcontent-%COMP%]{width:min(22rem,100%);position:relative;overflow:hidden;border:1px solid var(--%NS%site-border);border-radius:.75rem;transition:transform .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:translateY(-3px);box-shadow:var(--%NS%site-shadow-hover)}.card.featured[_ngcontent-%COMP%]{width:unset}`]})};function zn(t){let e=D(be);return gh(()=>t().then(n=>e.get(n)))}var Wn=`
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
`;var lr={root:()=>[`p-progressspinner`],spin:`p-progressspinner-spin`,circle:`p-progressspinner-circle`};var qn=(()=>{class t extends z{name=`progressspinner`;style=Wn;classes=lr;static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var Yn=new S(`PROGRESSSPINNER_INSTANCE`);var Zn=(()=>{class t extends Y$1{componentName=`ProgressSpinner`;$pcProgressSpinner=D(Yn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});styleClass;strokeWidth=`2`;fill=`none`;animationDuration=`2s`;ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=D(qn);static ɵfac=(()=>{let n;return function(r){return(n||(n=em(t)))(r||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-progressSpinner`],[`p-progress-spinner`],[`p-progressspinner`]],hostVars:5,hostBindings:function(i,r){i&2&&(Xf(`aria-label`,r.ariaLabel)(`role`,`progressbar`)(`aria-busy`,!0),NE(r.cn(r.cx(`root`),r.styleClass)))},inputs:{styleClass:`styleClass`,strokeWidth:`strokeWidth`,fill:`fill`,animationDuration:`animationDuration`,ariaLabel:`ariaLabel`},features:[GE([qn,{provide:Yn,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf],decls:2,vars:10,consts:[[`viewBox`,`25 25 50 50`,3,`pBind`],[`cx`,`50`,`cy`,`50`,`r`,`20`,`stroke-miterlimit`,`10`,3,`pBind`]],template:function(i,r){i&1&&(ou(),si$1(0,`svg`,0),tp(1,`circle`,1),mc()),i&2&&(NE(r.cx(`spin`)),mp(`animation-duration`,r.animationDuration),ep(`pBind`,r.ptm(`spin`)),Hy(),NE(r.cx(`circle`)),ep(`pBind`,r.ptm(`circle`)),Xf(`fill`,r.fill)(`stroke-width`,r.strokeWidth))},dependencies:[de$1,Re,x],encapsulation:2})}return t})();var dr=[`*`];function cr(t,e){t&1&&(si$1(0,`div`,1)(1,`div`,2),tp(2,`p-progress-spinner`),mc()())}var je=class t{showSpinner=new yn$1(!1);spinWhileUndefined=nP();spinListener=hu(()=>{this.spinWhileUndefined()?this.hide():this.show()});show(){this.showSpinner.next(!0)}hide(){this.showSpinner.next(!1)}static ɵfac=function(n){return new(n||t)};static ɵcmp=DI({type:t,selectors:[[`app-loading-spinner`]],inputs:{spinWhileUndefined:[1,`spinWhileUndefined`]},ngContentSelectors:dr,decls:4,vars:3,consts:[[1,`content`],[1,`overlay`],[1,`spinner`]],template:function(n,i){n&1&&(cE(),si$1(0,`div`,0),lE(1),mc(),zI(2,cr,3,0,`div`,1),KE(3,`async`)),n&2&&(Hy(2),QI(XE(3,1,i.showSpinner)?2:-1))},dependencies:[Zn,Jr],styles:[`[_nghost-%COMP%]{display:flex;flex-flow:row nowrap;height:100%;flex:1;min-height:0}.overlay[_ngcontent-%COMP%]{box-sizing:border-box;flex:none;width:101%;margin-left:-100%;display:flex;flex-direction:column;justify-content:space-around;z-index:500;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.spinner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.spinner[_ngcontent-%COMP%]   p-progress-spinner[_ngcontent-%COMP%]{flex:1;min-height:0}.content[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column}`]})};var Le=class t{articleContent=nP.required({transform:e=>this.stripFrontMatter(e)});stripFrontMatter(e){return e.replace(/^---\s*[\s\S]*?\s*---/,``).trim()}static ɵfac=function(n){return new(n||t)};static ɵcmp=DI({type:t,selectors:[[`app-post-markdown`]],inputs:{articleContent:[1,`articleContent`]},decls:1,vars:1,consts:[[1,`markdown`,3,`data`]],template:function(n,i){n&1&&tp(0,`markdown`,0),n&2&&ep(`data`,i.articleContent())},dependencies:[fr],styles:[`.markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:var(--%NS%site-code-background);color:var(--%NS%site-code-text);padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}`]})};var ur=()=>[`../`];var pr=()=>import(`./chunk-BGCmVSKE.js`).then(t=>t.ReadingTimeService);var Ge=class t{route=D(K);api=D(Ar);timeEstimate=zn(pr);shareButtonCopied=xo(!1);shareButtonLabel=sD(()=>this.shareButtonCopied()?`Copied!`:`Share`);article=Ue(this.route.paramMap.pipe(Ee$1(e=>e.get(`postName`)||``),nl(e=>e?this.api.get(`blog/${e}.md`,{responseType:`text`}):th(()=>`No route param`)),Ri$1(e=>(console.error(e),``))));timeToReadInMinutes=Ue(ph([An$1(this.article),this.timeEstimate]).pipe(nl(([e,n])=>n.getReadingTimeInMinutes(e||``))));downloadMarkdown(){if(this.article()){let e=this.article(),n=new Blob([e],{type:`text/markdown`}),i=document.createElement(`a`);i.href=URL.createObjectURL(n),i.download=`my-file.md`,i.click(),URL.revokeObjectURL(i.href)}}copyCurrentUrl(){navigator.clipboard.writeText(window.location.href).then(()=>{}).catch(e=>{console.error(`Failed to copy URL: `,e)})}handleShareClick(){this.copyCurrentUrl(),this.shareButtonCopied.set(!0),setTimeout(()=>{this.shareButtonCopied.set(!1)},2e3)}static ɵfac=function(n){return new(n||t)};static ɵcmp=DI({type:t,selectors:[[`app-post-container`]],decls:14,vars:9,consts:[[`spinner`,``],[1,`page-container`],[3,`spinWhileUndefined`],[1,`navigation-header`],[`label`,`Back to Blog`,`icon`,`pi pi-chevron-left`,`severity`,`secondary`,3,`routerLink`,`text`],[1,`action-buttons`],[`icon`,`pi pi-share-alt`,`severity`,`secondary`,3,`click`,`label`,`text`],[`label`,`Download`,`icon`,`pi pi-download`,`severity`,`secondary`,3,`click`,`text`],[1,`reading-time-container`],[1,`pi`,`pi-clock`,`reading-time-icon`],[1,`text-sm`],[1,`content-area`],[3,`articleContent`]],template:function(n,i){n&1&&(si$1(0,`div`,1)(1,`app-loading-spinner`,2,0)(3,`div`,3),tp(4,`p-button`,4),si$1(5,`div`,5)(6,`p-button`,6),ap(`click`,function(){return i.handleShareClick()}),mc(),si$1(7,`p-button`,7),ap(`click`,function(){return i.downloadMarkdown()}),mc()()(),si$1(8,`div`,8),tp(9,`i`,9),si$1(10,`p`,10),jE(11),mc()(),si$1(12,`div`,11),tp(13,`app-post-markdown`,12),mc()()()),n&2&&(Hy(),ep(`spinWhileUndefined`,i.article()),Hy(3),ep(`routerLink`,zE(8,ur))(`text`,!0),Hy(2),ep(`label`,i.shareButtonLabel())(`text`,!0),Hy(),ep(`text`,!0),Hy(4),Dc(``,i.timeToReadInMinutes(),` min. read`),Hy(2),ep(`articleContent`,i.article()||``))},dependencies:[Le,xd,es,Zt$1,je],styles:[`.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}@media(max-width:768px){.page-container[_ngcontent-%COMP%]{padding:1.5rem .75rem}}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}@media(max-width:768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:center}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.reading-time-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.reading-time-icon[_ngcontent-%COMP%]{font-size:.875rem;color:var(--%NS%site-text-muted)}`]})};var Ua=[{path:``,component:Be},{path:`:postName`,component:Ge}];export{Ua as CHITTYLOG_ROUTES};