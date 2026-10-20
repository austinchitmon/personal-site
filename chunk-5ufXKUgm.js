import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{At as Yf,B as Kp,Bn as qf,Bt as ar$1,Cn as lh,Ct as Wl,Dn as mc,Dt as Xc,Et as XI,Fn as ph,Gn as sh,H as N,Hn as rp,It as _o,L as KE,Lt as ae$1,M as Ie$1,Mt as Z,Nt as Zf,O as HI,On as nE,Pn as pc,Pt as _,Qn as tu,Qt as eE,R as KI,Rn as pp,St as WE,T as GE,V as Le$1,Vn as rE,W as Np,Wt as ch,Xn as to,Y as Pe$1,Z as QI,Zt as du,_ as Ee$1,_n as jI,_t as VI,a as Ay,an as fp,ar as vc,at as Si$1,b as FE,cn as gn$1,d as Cv,dr as yI,et as Qg,f as DI,fr as yc,gn as jE,h as Dv,hn as ip,hr as yl,ir as vI,it as Sg,j as IE,k as HL,kn as ni$1,kt as Yc,ln as hI,m as Dp,mt as Ul,n as $I,nn as fI,o as BI,on as fr,pt as Uf,rt as SE,s as BL,t as $E,tt as Re$1,un as ha,ut as TI,w as G,xn as lc,yn as kE,yr as zL,z as Kf,zn as qL}from"./chunk-BgznnxaQ.js";import{A as ge,E as dn$1,G as x,H as vl,J as zd,M as is,T as de$1,c as Kr,d as Ot,f as Pi$1,h as Re$2,j as hn$1,p as Pn$1,q as z,t as C,v as Vi$1,x as _r,y as Y,z as qr}from"./chunk-8Kp1C-g2.js";import{a as dr$1,i as He,o as K$1,r as Cn$1,s as Zt$1}from"./main-A3FNTKDS.js";import{t as Ae$1}from"./chunk-B0T6RB7Y.js";var Jt=(()=>{class e{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,i){this._renderer=n,this._elementRef=i}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty(`disabled`,n)}static ɵfac=function(i){return new(i||e)(fr(ha),fr(ar$1))};static ɵdir=yI({type:e})}return e})();var Zn=(()=>{class e extends Jt{static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵdir=yI({type:e,features:[Uf]})}return e})();var Kt=new N(``);var Xn={provide:Kt,useExisting:to(()=>Ne),multi:!0};function Qn(){let e=Ot()?Ot().getUserAgent():``;return/android (\d+)/.test(e.toLowerCase())}var Jn=new N(``);var Ne=(()=>{class e extends Jt{_compositionMode;_composing=!1;constructor(n,i,r){super(n,i),this._compositionMode=r,this._compositionMode??=!Qn()}writeValue(n){let i=n??``;this.setProperty(`value`,i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static ɵfac=function(i){return new(i||e)(fr(ha),fr(ar$1),fr(Jn,8))};static ɵdir=yI({type:e,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&rp(`input`,function(v){return r._handleInput(v.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(v){return r._compositionEnd(v.target.value)})},standalone:!1,features:[FE([Xn]),Uf]})}return e})();function nt(e){return e==null||it(e)===0}function it(e){return e==null?null:Array.isArray(e)||typeof e==`string`?e.length:e instanceof Set?e.size:null}var en=new N(``);var Kn=new N(``);var ei=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Xe=class{static min(t){return ti(t)}static max(t){return ni(t)}static required(t){return tn(t)}static requiredTrue(t){return ii(t)}static email(t){return ri(t)}static minLength(t){return oi(t)}static maxLength(t){return si(t)}static pattern(t){return ai(t)}static nullValidator(t){return Ae()}static compose(t){return ln(t)}static composeAsync(t){return cn(t)}};function ti(e){return t=>{if(t.value==null||e==null)return null;let n=parseFloat(t.value);return!isNaN(n)&&n<e?{min:{min:e,actual:t.value}}:null}}function ni(e){return t=>{if(t.value==null||e==null)return null;let n=parseFloat(t.value);return!isNaN(n)&&n>e?{max:{max:e,actual:t.value}}:null}}function tn(e){return nt(e.value)?{required:!0}:null}function ii(e){return e.value===!0?null:{required:!0}}function ri(e){return nt(e.value)||ei.test(e.value)?null:{email:!0}}function oi(e){return t=>{let n=t.value?.length??it(t.value);return n===null||n===0?null:n<e?{minlength:{requiredLength:e,actualLength:n}}:null}}function si(e){return t=>{let n=t.value?.length??it(t.value);return n!==null&&n>e?{maxlength:{requiredLength:e,actualLength:n}}:null}}function ai(e){if(!e)return Ae;let t,n;return typeof e==`string`?(n=``,e.charAt(0)!==`^`&&(n+=`^`),n+=e,e.charAt(e.length-1)!==`$`&&(n+=`$`),t=new RegExp(n)):(n=e.toString(),t=e),i=>{if(nt(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Ae(e){return null}function nn(e){return e!=null}function rn(e){return lc(e)?Ie$1(e):e}function on(e){let t={};return e.forEach(n=>{t=n!=null?r(r({},t),n):t}),Object.keys(t).length===0?null:t}function sn(e,t){return t.map(n=>n(e))}function li(e){return!e.validate}function an(e){return e.map(t=>li(t)?t:n=>t.validate(n))}function ln(e){if(!e)return null;let t=e.filter(nn);return t.length==0?null:function(n){return on(sn(n,t))}}function dn(e){return e!=null?ln(an(e)):null}function cn(e){if(!e)return null;let t=e.filter(nn);return t.length==0?null:function(n){return lh(sn(n,t).map(rn)).pipe(Ee$1(on))}}function un(e){return e!=null?cn(an(e)):null}function Wt(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function pn(e){return e._rawValidators}function fn(e){return e._rawAsyncValidators}function Qe(e){return e?Array.isArray(e)?e:[e]:[]}function Ee(e,t){return Array.isArray(e)?e.includes(t):e===t}function qt(e,t){let n=Qe(t);return Qe(e).forEach(r=>{Ee(n,r)||n.push(r)}),n}function Yt(e,t){return Qe(t).filter(n=>!Ee(e,n))}var Je=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=dn(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=un(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}};var ae=`VALID`;var Fe=`INVALID`;var K=`PENDING`;var le=`DISABLED`;var X=class{};var Ie=class extends X{value;source;constructor(t,n){super(),this.value=t,this.source=n}};var de=class extends X{pristine;source;constructor(t,n){super(),this.pristine=t,this.source=n}};var ce=class extends X{touched;source;constructor(t,n){super(),this.touched=t,this.source=n}};var ee=class extends X{status;source;constructor(t,n){super(),this.status=t,this.source=n}};var ue=class extends X{source;constructor(t){super(),this.source=t}};function di(e){return(ke(e)?e.validators:e)||null}function ci(e){return Array.isArray(e)?dn(e):e||null}function ui(e,t){return(ke(t)?t.asyncValidators:e)||null}function pi(e){return Array.isArray(e)?un(e):e||null}function ke(e){return e!=null&&!Array.isArray(e)&&typeof e==`object`}var Ke=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=_o(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,n){this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Np(this.statusReactive)}set status(t){Np(()=>this.statusReactive.set(t))}_status=KE(()=>this.statusReactive());statusReactive=_o(void 0);get valid(){return this.status===ae}get invalid(){return this.status===Fe}get pending(){return this.status===K}get disabled(){return this.status===le}get enabled(){return this.status!==le}errors;get pristine(){return Np(this.pristineReactive)}set pristine(t){Np(()=>this.pristineReactive.set(t))}_pristine=KE(()=>this.pristineReactive());pristineReactive=_o(!0);get dirty(){return!this.pristine}get touched(){return Np(this.touchedReactive)}set touched(t){Np(()=>this.touchedReactive.set(t))}_touched=KE(()=>this.touchedReactive());touchedReactive=_o(!1);get untouched(){return!this.touched}_events=new Z;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(qt(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(qt(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Yt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Yt(t,this._rawAsyncValidators))}hasValidator(t){return Ee(this._rawValidators,t)}hasAsyncValidator(t){return Ee(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let n=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(s(r({},t),{sourceControl:i})),n&&t.emitEvent!==!1&&this._events.next(new ce(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(t))}markAsUntouched(t={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),n&&t.emitEvent!==!1&&this._events.next(new ce(!1,i))}markAsDirty(t={}){let n=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(s(r({},t),{sourceControl:i})),n&&t.emitEvent!==!1&&this._events.next(new de(!1,i))}markAsPristine(t={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),n&&t.emitEvent!==!1&&this._events.next(new de(!0,i))}markAsPending(t={}){this.status=K;let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ee(this.status,n)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(s(r({},t),{sourceControl:n}))}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=le,this.errors=null,this._forEachChild(r$1=>{r$1.disable(s(r({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ie(this.value,i)),this._events.next(new ee(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(s(r({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=ae,this._forEachChild(i=>{i.enable(s(r({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(s(r({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,n){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},n),this._parent?._updateTouched({},n))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ae||this.status===K)&&this._runAsyncValidator(i,t.emitEvent)}let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ie(this.value,n)),this._events.next(new ee(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(s(r({},t),{sourceControl:n}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?le:ae}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,n){if(this.asyncValidator){this.status=K,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:t!==!1};let i=rn(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(`.`)),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(t,n){let i=n?this.get(n):this;return i?.errors?i.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,n,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new ee(this.status,n)),this._parent&&this._parent._updateControlsErrors(t,n,i)}_initObservables(){this.valueChanges=new Re$1,this.statusChanges=new Re$1}_calculateStatus(){return this._allControlsDisabled()?le:this.errors?Fe:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(K)?K:this._anyControlsHaveStatus(Fe)?Fe:ae}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,n),r&&this._events.next(new de(this.pristine,n))}_updateTouched(t={},n){this.touched=this._anyControlsTouched(),this._events.next(new ce(this.touched,n)),t.onlySelf||this._parent?._updateTouched(t,n)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ke(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ci(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=pi(this._rawAsyncValidators)}_updateHasRequiredValidator(){Np(()=>this._hasRequired.set(this.hasValidator(Xe.required)))}};function fi(e){return e.tagName===`INPUT`||e.tagName===`SELECT`||e.tagName===`TEXTAREA`}function hi(e,t,n,i){switch(n){case`name`:e.setAttribute(t,n,i);break;case`disabled`:case`readonly`:case`required`:i?e.setAttribute(t,n,``):e.removeAttribute(t,n);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?e.setAttribute(t,n,i.toString()):e.removeAttribute(t,n);break}}var et=class{kind;context;control;message;constructor({kind:t,context:n,control:i}){this.kind=t,this.context=n,this.control=i}};var gi=(()=>{class e{_validator=Ae;_onChange;_enabled;ngOnChanges(n){if(this.inputName in n){let i=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Ae,this._onChange?.()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}static ɵfac=function(i){return new(i||e)};static ɵdir=yI({type:e,features:[Sg]})}return e})();var mi={provide:en,useExisting:to(()=>hn),multi:!0};var hn=(()=>{class e extends gi{required;inputName=`required`;normalizeInput=zL;createValidator=n=>tn;enabled(n){return n}static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵdir=yI({type:e,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&Zf(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[FE([mi]),Uf]})}return e})();var vi=new N(``);var rt=new N(``,{factory:()=>Te});var Te=`always`;function yi(e,t,n=Te){Ci(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n===`always`)&&t.valueAccessor.setDisabledState?.(e.disabled),Di(e,t),Vi(e,t),Mi(e,t),_i(e,t)}function Zt(e,t,n=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),bi(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Se(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function _i(e,t){if(t.valueAccessor.setDisabledState){let n=i=>{t.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function Ci(e,t){let n=pn(e);t.validator!==null?e.setValidators(Wt(n,t.validator)):typeof n==`function`&&e.setValidators([n]);let i=fn(e);t.asyncValidator!==null?e.setAsyncValidators(Wt(i,t.asyncValidator)):typeof i==`function`&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();Se(t._rawValidators,r),Se(t._rawAsyncValidators,r)}function bi(e,t){let n=!1;if(e!==null){if(t.validator!==null){let r=pn(e);if(Array.isArray(r)&&r.length>0){let a=r.filter(v=>v!==t.validator);a.length!==r.length&&(n=!0,e.setValidators(a))}}if(t.asyncValidator!==null){let r=fn(e);if(Array.isArray(r)&&r.length>0){let a=r.filter(v=>v!==t.asyncValidator);a.length!==r.length&&(n=!0,e.setAsyncValidators(a))}}}let i=()=>{};return Se(t._rawValidators,i),Se(t._rawAsyncValidators,i),n}function Di(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn===`change`&&gn(e,t)})}function Mi(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn===`blur`&&e._pendingChange&&gn(e,t),e.updateOn!==`submit`&&e.markAsTouched()})}function gn(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Vi(e,t){let n=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function xi(e,t){if(!e.hasOwnProperty(`model`))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function wi(e){return Object.getPrototypeOf(e.constructor)===Zn}function Fi(e,t){if(!t)return null;let n,i,r;return t.forEach(a=>{a.constructor===Ne?n=a:wi(a)?i=a:r=a}),r||i||n||null}var Ai={provide:vi,useFactory:()=>{let e=_(W,{self:!0});return{setParseErrors:t=>{e.setParseErrorSource(t)},set onReset(t){e.onReset=t}}}};var W=class extends Je{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof ue&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Fi(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,n,i){super(),this.injector=t,this.renderer=n,this.rawValueAccessors=i,this.injector?.get(Pe$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(qL);if(!this.control||!t)return;let n=t.markForCheck.bind(t);this.subscription=new G,this.subscription.add(this.control.valueChanges.subscribe(n)),this.subscription.add(this.control.statusChanges.subscribe(n)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof ue&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),t.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=fi(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof hn))}ngControlUpdate(t,n){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,t.setCustomControlModelInput(i.value)),this.bindControlProperty(t,r,`touched`,i.touched),this.bindControlProperty(t,r,`dirty`,i.dirty),this.bindControlProperty(t,r,`valid`,i.valid),this.bindControlProperty(t,r,`invalid`,i.invalid),this.bindControlProperty(t,r,`pending`,i.pending),this.bindControlProperty(t,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(t,r,`required`,this.isRequired);let a=i.errors;if(r.errors!==a){r.errors=a;let v=this._convertErrors(a);t.setInputOnDirectives(`errors`,v)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,n,i,r){if(n[i]===r)return;n[i]=r;let a=t.setInputOnDirectives(i,r);this.isNativeFormElement&&!a&&(i===`disabled`||i===`required`)&&this.renderer&&hi(this.renderer,t.nativeElement,i,r)}_convertErrors(t){if(t===null)return[];let n=this.control;return Object.entries(t).map(([i,r])=>new et({context:r,kind:i,control:n}))}setParseErrorSource(t){if(t===void 0)return;let n=null,i=KE(()=>{let r=t();return r.length===0?null:r.reduce((a,v)=>(a[v.kind]=v,a),{})});this.parseErrorsValidator=(()=>n).bind(this),du(()=>{n=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var tt=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var mn=(()=>{class e extends tt{constructor(n){super(n)}static ɵfac=function(i){return new(i||e)(fr(W,2))};static ɵdir=yI({type:e,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&pp(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[Uf]})}return e})();function Xt(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Qt(e){return typeof e==`object`&&e!==null&&Object.keys(e).length===2&&`value`in e&&`disabled`in e}var vn=class extends Ke{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,n,i){super(di(n),ui(i,n)),this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ke(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Qt(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){Np(()=>{this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)})}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),n.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,n?.emitEvent!==!1&&this._events.next(new ue(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Xt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Xt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Qt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var yn=new N(``);var Ei={provide:W,useExisting:to(()=>ot)};var ot=(()=>{class e extends W{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(n){}model;update=new Re$1;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(n,i,r,a,v,qn,Yn){super(Yn,qn,r),this._ngModelWarningConfig=a,this.callSetDisabledState=v,this._setValidators(n),this._setAsyncValidators(i)}ngOnChanges(n){if(this._isControlChanged(n)){let i=n.form.previousValue;i&&(Zt(i,this,!1),this.removeParseErrorsValidator(i)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,yi(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}xi(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Zt(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty(`form`)}ɵngControlCreate(n){super.ngControlCreate(n)}ɵngControlUpdate(n){super.ngControlUpdate(n,!0)}static ɵfac=function(i){return new(i||e)(fr(en,10),fr(Kn,10),fr(Kt,10),fr(yn,8),fr(rt,8),fr(ha,8),fr(Le$1,8))};static ɵdir=yI({type:e,selectors:[[``,`formControl`,``]],inputs:{form:[0,`formControl`,`form`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},exportAs:[`ngForm`],standalone:!1,features:[FE([Ei,Ai]),Uf,Sg,DI(null)]})}return e})();var _n=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=hI({type:e});static ɵinj=yl({})}return e})();var Cn=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:rt,useValue:n.callSetDisabledState??Te}]}}static ɵfac=function(i){return new(i||e)};static ɵmod=hI({type:e});static ɵinj=yl({imports:[_n]})}return e})();var bn=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:yn,useValue:n.warnOnNgModelWithFormControl??`always`},{provide:rt,useValue:n.callSetDisabledState??Te}]}}static ɵfac=function(i){return new(i||e)};static ɵmod=hI({type:e});static ɵinj=yl({imports:[_n]})}return e})();var Dn=`
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
`;var Si=[`*`];var Ni=`
    ${Dn}

    /* For Optimus */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`;var ki={root:({instance:e})=>[`p-floatlabel`,{"p-floatlabel-over":e.variant===`over`,"p-floatlabel-on":e.variant===`on`,"p-floatlabel-in":e.variant===`in`}]};var Mn=(()=>{class e extends z{name=`floatlabel`;style=Ni;classes=ki;static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵprov=ae$1({token:e,factory:e.ɵfac})}return e})();var Vn=new N(`FLOATLABEL_INSTANCE`);var xn=(()=>{class e extends Y{componentName=`FloatLabel`;_componentStyle=_(Mn);$pcFloatLabel=_(Vn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}variant=`over`;static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵcmp=fI({type:e,selectors:[[`p-floatlabel`],[`p-floatLabel`],[`p-float-label`]],hostVars:2,hostBindings:function(i,r){i&2&&IE(r.cx(`root`))},inputs:{variant:`variant`},features:[FE([Mn,{provide:Vn,useExisting:e},{provide:ge,useExisting:e}]),TI([x]),Uf],ngContentSelectors:Si,decls:1,vars:0,template:function(i,r){i&1&&(XI(),eE(0))},dependencies:[de$1,Re$2,Vi$1],encapsulation:2})}return e})();var wn=`
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
`;var Ti=[`*`];var Pi={root:({instance:e})=>[`p-iconfield`,{"p-iconfield-left":e.iconPosition==`left`,"p-iconfield-right":e.iconPosition==`right`}]};var Fn=(()=>{class e extends z{name=`iconfield`;style=wn;classes=Pi;static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵprov=ae$1({token:e,factory:e.ɵfac})}return e})();var An=new N(`ICONFIELD_INSTANCE`);var En=(()=>{class e extends Y{componentName=`IconField`;hostName=``;_componentStyle=_(Fn);$pcIconField=_(An,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}iconPosition=`left`;styleClass;static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵcmp=fI({type:e,selectors:[[`p-iconfield`],[`p-iconField`],[`p-icon-field`]],hostVars:2,hostBindings:function(i,r){i&2&&IE(r.cn(r.cx(`root`),r.styleClass))},inputs:{hostName:`hostName`,iconPosition:`iconPosition`,styleClass:`styleClass`},features:[FE([Fn,{provide:An,useExisting:e},{provide:ge,useExisting:e}]),TI([x]),Uf],ngContentSelectors:Ti,decls:1,vars:0,template:function(i,r){i&1&&(XI(),eE(0))},dependencies:[de$1,Vi$1],encapsulation:2})}return e})();var Oi=[`*`];var Ri={root:`p-inputicon`};var In=(()=>{class e extends z{name=`inputicon`;classes=Ri;static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵprov=ae$1({token:e,factory:e.ɵfac})}return e})();var Sn=new N(`INPUTICON_INSTANCE`);var Nn=(()=>{class e extends Y{componentName=`InputIcon`;hostName=``;styleClass;_componentStyle=_(In);$pcInputIcon=_(Sn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵcmp=fI({type:e,selectors:[[`p-inputicon`],[`p-inputIcon`]],hostVars:2,hostBindings:function(i,r){i&2&&IE(r.cn(r.cx(`root`),r.styleClass))},inputs:{hostName:`hostName`,styleClass:`styleClass`},features:[FE([In,{provide:Sn,useExisting:e},{provide:ge,useExisting:e}]),TI([x]),Uf],ngContentSelectors:Oi,decls:1,vars:0,template:function(i,r){i&1&&(XI(),eE(0))},dependencies:[de$1,Re$2,Vi$1],encapsulation:2})}return e})();var kn=(()=>{class e extends Y{modelValue=_o(void 0);$filled=KE(()=>C(this.modelValue()));writeModelValue(n){this.modelValue.set(n)}static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵdir=yI({type:e,features:[Uf]})}return e})();var Bi=`
    
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
`;var ji={root:({instance:e})=>[`p-inputtext p-component`,{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize===`small`,"p-inputtext-lg":e.pSize===`large`,"p-invalid":e.invalid(),"p-variant-filled":e.$variant()===`filled`,"p-inputtext-fluid":e.hasFluid}]};var Pn=(()=>{class e extends z{name=`inputtext`;style=Bi;classes=ji;static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵprov=ae$1({token:e,factory:e.ɵfac})}return e})();var On=new N(`INPUTTEXT_INSTANCE`);var Rn=(()=>{class e extends kn{componentName=`InputText`;hostName=``;ptInputText=BL();pInputTextPT=BL();pInputTextUnstyled=BL();bindDirectiveInstance=_(x,{self:!0});$pcInputText=_(On,{optional:!0,skipSelf:!0})??void 0;ngControl=_(W,{optional:!0,self:!0});pcFluid=_(Pn$1,{optional:!0,host:!0,skipSelf:!0});pSize;variant=BL();fluid=BL(void 0,{transform:zL});invalid=BL(void 0,{transform:zL});$variant=KE(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=_(Pn);constructor(){super(),du(()=>{let n=this.ptInputText()||this.pInputTextPT();n&&this.directivePT.set(n)}),du(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize]:this.pSize})}static ɵfac=function(i){return new(i||e)};static ɵdir=yI({type:e,selectors:[[``,`pInputText`,``]],hostVars:3,hostBindings:function(i,r){i&1&&rp(`input`,function(){return r.onInput()}),i&2&&(Zf(`data-p`,r.dataP),IE(r.cx(`root`)))},inputs:{hostName:`hostName`,ptInputText:[1,`ptInputText`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:`pSize`,variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[FE([Pn,{provide:On,useExisting:e},{provide:ge,useExisting:e}]),TI([x]),Uf]})}return e})();var Bn=`
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
`;var Li=[`icon`];var Gi=[`*`];function Ui(e,t){if(e&1&&Kf(0,`span`,4),e&2){let n=KI(2);IE(n.cx(`icon`)),Yf(`ngClass`,n.icon)(`pBind`,n.ptm(`icon`))}}function Hi(e,t){if(e&1&&(mc(0),qf(1,Ui,1,4,`span`,3),yc()),e&2){let n=KI();Ay(),Yf(`ngIf`,n.icon)}}function $i(e,t){}function zi(e,t){e&1&&qf(0,$i,0,0,`ng-template`)}function Wi(e,t){if(e&1&&(ni$1(0,`span`,2),qf(1,zi,1,0,null,5),pc()),e&2){let n=KI();IE(n.cx(`icon`)),Yf(`pBind`,n.ptm(`icon`)),Ay(),Yf(`ngTemplateOutlet`,n.iconTemplate||n._iconTemplate)}}var qi={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var jn=(()=>{class e extends z{name=`tag`;style=Bn;classes=qi;static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵprov=ae$1({token:e,factory:e.ɵfac})}return e})();var Ln=new N(`TAG_INSTANCE`);var Pe=(()=>{class e extends Y{componentName=`Tag`;$pcTag=_(Ln,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=_(jn);onAfterContentInit(){this.templates?.forEach(n=>{n.getType()===`icon`&&(this._iconTemplate=n.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵcmp=fI({type:e,selectors:[[`p-tag`]],contentQueries:function(i,r,a){if(i&1&&ip(a,Li,4)(a,Pi$1,4),i&2){let v;nE(v=rE())&&(r.iconTemplate=v.first),nE(v=rE())&&(r.templates=v)}},hostVars:3,hostBindings:function(i,r){i&2&&(Zf(`data-p`,r.dataP),IE(r.cn(r.cx(`root`),r.styleClass)))},inputs:{styleClass:`styleClass`,severity:`severity`,value:`value`,icon:`icon`,rounded:[2,`rounded`,`rounded`,zL]},features:[FE([jn,{provide:Ln,useExisting:e},{provide:ge,useExisting:e}]),TI([x]),Uf],ngContentSelectors:Gi,decls:5,vars:6,consts:[[4,`ngIf`],[3,`class`,`pBind`,4,`ngIf`],[3,`pBind`],[3,`class`,`ngClass`,`pBind`,4,`ngIf`],[3,`ngClass`,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,r){i&1&&(XI(),eE(0),qf(1,Hi,2,1,`ng-container`,0)(2,Wi,2,4,`span`,1),ni$1(3,`span`,2),SE(4),pc()),i&2&&(Ay(),Yf(`ngIf`,!r.iconTemplate&&!r._iconTemplate),Ay(),Yf(`ngIf`,r.iconTemplate||r._iconTemplate),Ay(),IE(r.cx(`label`)),Yf(`pBind`,r.ptm(`label`)),Ay(),Dp(r.value))},dependencies:[de$1,Kr,dn$1,hn$1,Re$2,x],encapsulation:2})}return e})();var Oe=class e{transform(t,n=`, `){return t==null||!Array.isArray(t)?null:t.filter(r=>typeof r==`string`).join(n)}static ɵfac=function(n){return new(n||e)};static ɵpipe=vI({name:`join`,type:e,pure:!0})};var Re=class e{TAG_CONFIG={angular:{background:`#a51e24`,textColor:`#FFFFFF`},primeng:{background:`#a51e24`,textColor:`#FFFFFF`},typescript:{background:`#007acc`,textColor:`#FFFFFF`},node:{background:`#3e863d`,textColor:`#FFFFFF`},obsidian:{background:`#582bac`,textColor:`#FFFFFF`},markdown:{background:`#196989`,textColor:`#FFFFFF`}};value=BL.required();currentConfig=KE(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:`rgba(51,51,51,0.88)`,textColor:`#FFFFFF`});tagClick=HL();static ɵfac=function(n){return new(n||e)};static ɵcmp=fI({type:e,selectors:[[`app-article-tag`]],inputs:{value:[1,`value`]},outputs:{tagClick:`tagClick`},decls:1,vars:9,consts:[[`severity`,`info`,3,`click`,`value`]],template:function(n,i){n&1&&(ni$1(0,`p-tag`,0),rp(`click`,function(){return i.tagClick.emit(i.value())}),pc()),n&2&&(fp(`border-radius`,`20px`)(`font-weight`,`500`)(`background-color`,i.currentConfig().background)(`color`,i.currentConfig().textColor),Yf(`value`,i.value()))},dependencies:[Pe],encapsulation:2})};var Gn={files:[{fileName:`angular-coding-standard.md`,title:`Typescript / Angular 20+ Coding Standards`,cover:`angular-coding-standard.png`,subtitle:`My personal collection of standards for building robust, responsive Angular applications using PrimeNG.`,date:`2025-08-27T05:01:00.000Z`,tags:[`typescript`,`angular`,`PrimeNG`]},{fileName:`networking-1-lessons-learned.md`,title:`Networking 1 - Lessons Learned`,cover:`networking-1-lessons-learned.jpg`,subtitle:`Problems I faced while setting up IP Passthrough for my local network and how I solved them.`,date:`2025-08-27T05:00:00.000Z`,tags:[`networking`]},{fileName:`hello-blog.md`,title:`Hello Blog`,cover:`hello-blog.png`,subtitle:`Testing blog post, please ignore. Explains how populating this blog works.`,date:`2025-08-26T05:00:00.000Z`,tags:[`markdown`,`angular`,`obsidian`,`node`]}]};var te=class e{articleSource=KE(()=>this.#e().articleSource);searchControl=KE(()=>this.#e().searchControl);selectedTags=KE(()=>this.#e().selectedTags);#e=_o({searchControl:new vn,articleSource:Gn.files,selectedTags:new Set});toggleTagSelection(t){return this.#e().selectedTags.has(t)?this.removeTag(t):this.addTag(t)}addTag(t){this.#e.update(n=>s(r({},n),{selectedTags:new Set([...n.selectedTags,t])}))}removeTag(t){this.#e.update(n=>{let i=new Set(n.selectedTags);return i.delete(t),s(r({},n),{selectedTags:i})})}static ɵfac=function(n){return new(n||e)};static ɵprov=ae$1({token:e,factory:e.ɵfac})};var fe=class e{#e=_(te);control=this.#e.searchControl;featured=KE(()=>this.articles().find(t=>t.tags.includes(`featured`))||this.articles()[0]);others=KE(()=>this.articles().filter(t=>t.title!==this.featured().title));articles=KE(()=>this.#e.articleSource().map(t=>this.formatFile(t)));filterList=KE(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=KE(()=>[...this.#e.selectedTags()]);searchValue=He(this.control().valueChanges.pipe(ph(300),Yc(),Ee$1(t=>t?.toLowerCase()?.trim())));filteredArticles=KE(()=>{let t=this.searchValue(),n=this.selectedTags();return this.others().filter(i=>this.includesSearchValue(i,t)&&this.includesTag(i.tags,n))});allTags=KE(()=>[...new Set(this.articles().flatMap(t=>t.tags))]);toggleTagSelection(t){this.#e.toggleTagSelection(t)}formatFile(t){return s(r({},t),{date:new Date(t.date).toDateString(),routerLink:t.fileName.replace(`.md`,``)})}includesSearchValue(t,n){return n?t.title.toLowerCase().includes(n)||t.subtitle.toLowerCase().includes(n)||t.tags.some(i=>i.toLowerCase().includes(n)):!0}includesTag(t,n){return n?.length?n.every(i=>t.map(r=>r.toLowerCase()).includes(i.toLowerCase())):!0}static ɵfac=function(n){return new(n||e)};static ɵprov=ae$1({token:e,factory:e.ɵfac,providedIn:`root`})};function Yi(e,t){if(e&1&&(ni$1(0,`div`,20),Kf(1,`img`,21),ni$1(2,`p-tag`,22),SE(3,`✨ Featured`),pc()()),e&2){let n=KI();Ay(),Yf(`alt`,kE(n.facade.featured().title))(`ngSrc`,`blog/`+n.facade.featured().cover)}}function Zi(e,t){if(e&1&&SE(0),e&2)vc(` `,KI().facade.featured().title||`Article`,` `)}function Xi(e,t){if(e&1){let n=QI();ni$1(0,`app-article-tag`,25),rp(`tagClick`,function(r){Ul(n);return Wl(KI(2).facade.toggleTagSelection(r))}),pc()}if(e&2){let n=t.$implicit;Yf(`value`,n)}}function Qi(e,t){if(e&1&&(ni$1(0,`div`,23)(1,`div`,24),BI(2,Xi,1,1,`app-article-tag`,17,HI),pc(),ni$1(4,`div`),SE(5),pc()()),e&2){let n=KI();Ay(2),$I(n.facade.featured().tags),Ay(3),Dp(n.facade.featured().date)}}function Ji(e,t){if(e&1){let n=QI();ni$1(0,`app-article-tag`,25),rp(`tagClick`,function(r){Ul(n);return Wl(KI().facade.toggleTagSelection(r))}),pc()}if(e&2){let n=t.$implicit;Yf(`value`,n)}}function Ki(e,t){if(e&1&&(ni$1(0,`div`)(1,`span`,26),SE(2),$E(3,`join`),pc()()),e&2){let n=KI();Ay(2),vc(`Filter by: `,WE(3,1,n.facade.filterList()))}}function er(e,t){if(e&1&&(ni$1(0,`div`,27),Kf(1,`img`,21),pc()),e&2){let n=KI().$implicit;Ay(),Yf(`alt`,kE(n.title))(`ngSrc`,`blog/`+n.cover)}}function tr(e,t){if(e&1&&SE(0),e&2){let n=KI().$implicit;Dp(n.title||`Article`)}}function nr(e,t){if(e&1){let n=QI();ni$1(0,`app-article-tag`,25),rp(`tagClick`,function(r){Ul(n);return Wl(KI(3).facade.toggleTagSelection(r))}),pc()}if(e&2){let n=t.$implicit;Yf(`value`,n)}}function ir(e,t){if(e&1&&(ni$1(0,`div`,23)(1,`div`,24),BI(2,nr,1,1,`app-article-tag`,17,HI),pc(),ni$1(4,`div`),SE(5),pc()()),e&2){let n=KI().$implicit;Ay(2),$I(n.tags),Ay(3),Dp(n.date)}}function rr(e,t){if(e&1&&(ni$1(0,`p-card`,19),qf(1,er,2,3,`ng-template`,null,0,GE)(3,tr,1,1,`ng-template`,null,1,GE)(5,ir,6,1,`ng-template`,null,2,GE),ni$1(7,`p`,9),SE(8),pc()()),e&2){let n=t.$implicit;Yf(`routerLink`,n.routerLink),Ay(8),Dp(n.subtitle)}}var je=class e{facade=_(fe);static ɵfac=function(n){return new(n||e)};static ɵcmp=fI({type:e,selectors:[[`app-chittylog-container`]],features:[FE([te,fe])],decls:36,vars:4,consts:[[`header`,``],[`title`,``],[`subtitle`,``],[1,`page-container`],[1,`title`,`white`],[1,`title`,`gradient`],[1,`subtitle`],[1,`w-95`],[1,`card`,`featured`,3,`routerLink`],[1,`multiline-ellipsis`],[1,`search-container`],[`variant`,`in`],[1,`pi`,`pi-search`],[`pInputText`,``,`id`,`search_articles`,1,`search-input`,3,`formControl`],[`for`,`search_articles`],[1,`tag-search-container`],[1,`tag-container`],[1,`clickable`,3,`value`],[1,`card-container`],[1,`card`,3,`routerLink`],[1,`box`,`featured`],[`fill`,``,1,`img-fill`,3,`alt`,`ngSrc`],[1,`featured-tag-overlay`],[1,`display-flex`,`flex-col`,`row-gap-2`],[1,`display-flex`,`flex-row`,`col-gap-2`],[1,`clickable`,3,`tagClick`,`value`],[1,`text-sm`],[1,`box`]],template:function(n,i){n&1&&(ni$1(0,`div`,3)(1,`h1`)(2,`span`,4),SE(3,`Chitty`),pc(),ni$1(4,`span`,5),SE(5,`blog`),pc()(),ni$1(6,`h3`,6),SE(7,` Guides, updates, and random thoughts directly from me 🌌 `),pc(),ni$1(8,`div`,7)(9,`p-card`,8),qf(10,Yi,4,3,`ng-template`,null,0,GE)(12,Zi,1,1,`ng-template`,null,1,GE)(14,Qi,6,1,`ng-template`,null,2,GE),ni$1(16,`p`,9),SE(17),pc()()(),ni$1(18,`div`,10)(19,`p-floatlabel`,11)(20,`p-iconfield`),Kf(21,`p-inputicon`,12)(22,`input`,13),Dv(),pc(),ni$1(23,`label`,14),SE(24,`Search articles...`),pc()()(),ni$1(25,`div`,15)(26,`div`)(27,`p`),SE(28,`Search by tag:`),pc()(),ni$1(29,`div`,16),BI(30,Ji,1,1,`app-article-tag`,17,HI),pc()(),jI(32,Ki,4,3,`div`),ni$1(33,`div`,18),BI(34,rr,9,2,`p-card`,19,HI),pc()()),n&2&&(Ay(9),Yf(`routerLink`,i.facade.featured().routerLink),Ay(8),Dp(i.facade.featured().subtitle),Ay(5),Yf(`formControl`,i.facade.control()),Cv(),Ay(8),$I(i.facade.allTags()),Ay(2),VI(i.facade.filterList().length?32:-1),Ay(2),$I(i.facade.filteredArticles()))},dependencies:[Ae$1,vl,Zt$1,xn,En,Nn,Rn,Cn,Ne,mn,bn,ot,Re,Pe,Oe],styles:[`.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4bb,#b48);-webkit-background-clip:text;background-clip:text;color:transparent}.box.featured[_ngcontent-%COMP%]{height:22rem;position:relative}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.featured-tag-overlay[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:10;background:linear-gradient(135deg,#8e44ad,#3498db);color:#fff;border-radius:20px;padding:.5rem 1rem;font-weight:700;font-size:1.05em;border:none;box-shadow:0 2px 8px #0000004d}@media(max-width:768px){.featured-tag-overlay[_ngcontent-%COMP%]{top:.75rem;left:.75rem;font-size:1.03em;padding:.4rem .8rem}}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media(max-width:768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.white[_ngcontent-%COMP%]{color:#cfcbc6}.subtitle[_ngcontent-%COMP%]{font-weight:100;font-size:1rem;color:#cacaca;text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media(max-width:768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card.featured[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #2ceaddb3}.card.featured[_ngcontent-%COMP%]:before{background:linear-gradient(0deg,transparent,transparent 30%,rgba(44,234,221,.3))}.card.featured[_ngcontent-%COMP%]{width:unset}.card[_ngcontent-%COMP%]{width:22rem;position:relative;overflow:hidden;transition:all .5s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);box-shadow:0 0 20px #bb448880}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(187,68,136,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0;z-index:1;pointer-events:none}.card[_ngcontent-%COMP%]:hover:before{opacity:1;transform:rotate(-45deg) translateY(100%)}`]})};function Un(e){let t=_(Le$1);return ch(()=>e().then(n=>t.get(n)))}var Hn=`
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
`;var or={root:()=>[`p-progressspinner`],spin:`p-progressspinner-spin`,circle:`p-progressspinner-circle`};var $n=(()=>{class e extends z{name=`progressspinner`;style=Hn;classes=or;static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵprov=ae$1({token:e,factory:e.ɵfac})}return e})();var zn=new N(`PROGRESSSPINNER_INSTANCE`);var Wn=(()=>{class e extends Y{componentName=`ProgressSpinner`;$pcProgressSpinner=_(zn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(x,{self:!0});styleClass;strokeWidth=`2`;fill=`none`;animationDuration=`2s`;ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=_($n);static ɵfac=(()=>{let n;return function(r){return(n||(n=Qg(e)))(r||e)}})();static ɵcmp=fI({type:e,selectors:[[`p-progressSpinner`],[`p-progress-spinner`],[`p-progressspinner`]],hostVars:5,hostBindings:function(i,r){i&2&&(Zf(`aria-label`,r.ariaLabel)(`role`,`progressbar`)(`aria-busy`,!0),IE(r.cn(r.cx(`root`),r.styleClass)))},inputs:{styleClass:`styleClass`,strokeWidth:`strokeWidth`,fill:`fill`,animationDuration:`animationDuration`,ariaLabel:`ariaLabel`},features:[FE([$n,{provide:zn,useExisting:e},{provide:ge,useExisting:e}]),TI([x]),Uf],decls:2,vars:10,consts:[[`viewBox`,`25 25 50 50`,3,`pBind`],[`cx`,`50`,`cy`,`50`,`r`,`20`,`stroke-miterlimit`,`10`,3,`pBind`]],template:function(i,r){i&1&&(tu(),ni$1(0,`svg`,0),Kf(1,`circle`,1),pc()),i&2&&(IE(r.cx(`spin`)),fp(`animation-duration`,r.animationDuration),Yf(`pBind`,r.ptm(`spin`)),Ay(),IE(r.cx(`circle`)),Yf(`pBind`,r.ptm(`circle`)),Zf(`fill`,r.fill)(`stroke-width`,r.strokeWidth))},dependencies:[de$1,Re$2,x],encapsulation:2})}return e})();var sr=[`*`];function ar(e,t){e&1&&(ni$1(0,`div`,1)(1,`div`,2),Kf(2,`p-progress-spinner`),pc()())}var Le=class e{showSpinner=new gn$1(!1);spinWhileUndefined=BL();spinListener=du(()=>{this.spinWhileUndefined()?this.hide():this.show()});show(){this.showSpinner.next(!0)}hide(){this.showSpinner.next(!1)}static ɵfac=function(n){return new(n||e)};static ɵcmp=fI({type:e,selectors:[[`app-loading-spinner`]],inputs:{spinWhileUndefined:[1,`spinWhileUndefined`]},ngContentSelectors:sr,decls:4,vars:3,consts:[[1,`content`],[1,`overlay`],[1,`spinner`]],template:function(n,i){n&1&&(XI(),ni$1(0,`div`,0),eE(1),pc(),jI(2,ar,3,0,`div`,1),$E(3,`async`)),n&2&&(Ay(2),VI(WE(3,1,i.showSpinner)?2:-1))},dependencies:[Wn,qr],styles:[`[_nghost-%COMP%]{display:flex;flex-flow:row nowrap;height:100%;flex:1;min-height:0}.overlay[_ngcontent-%COMP%]{box-sizing:border-box;flex:none;width:101%;margin-left:-100%;display:flex;flex-direction:column;justify-content:space-around;z-index:500;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.spinner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.spinner[_ngcontent-%COMP%]   p-progress-spinner[_ngcontent-%COMP%]{flex:1;min-height:0}.content[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column}`]})};var Ge=class e{articleContent=BL.required({transform:t=>this.stripFrontMatter(t)});stripFrontMatter(t){return t.replace(/^---\s*[\s\S]*?\s*---/,``).trim()}static ɵfac=function(n){return new(n||e)};static ɵcmp=fI({type:e,selectors:[[`app-post-markdown`]],inputs:{articleContent:[1,`articleContent`]},decls:1,vars:1,consts:[[`emoji`,``,1,`markdown`,3,`data`]],template:function(n,i){n&1&&Kf(0,`markdown`,0),n&2&&Yf(`data`,i.articleContent())},dependencies:[dr$1],styles:[`.markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:#2e2e2e;color:#b48;padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}`]})};var lr=()=>[`../`];var dr=()=>import(`./chunk-BGjH5zqg.js`).then(e=>e.ReadingTimeService);var Ue=class e{route=_(K$1);api=_(_r);timeEstimate=Un(dr);shareButtonCopied=_o(!1);shareButtonLabel=KE(()=>this.shareButtonCopied()?`Copied!`:`Share`);article=He(this.route.paramMap.pipe(Ee$1(t=>t.get(`postName`)||``),Xc(t=>t?this.api.get(`blog/${t}.md`,{responseType:`text`}):Kp(()=>`No route param`)),Si$1(t=>(console.error(t),``))));timeToReadInMinutes=He(sh([Cn$1(this.article),this.timeEstimate]).pipe(Xc(([t,n])=>n.getReadingTimeInMinutes(t||``))));downloadMarkdown(){if(this.article()){let t=this.article(),n=new Blob([t],{type:`text/markdown`}),i=document.createElement(`a`);i.href=URL.createObjectURL(n),i.download=`my-file.md`,i.click(),URL.revokeObjectURL(i.href)}}copyCurrentUrl(){navigator.clipboard.writeText(window.location.href).then(()=>{}).catch(t=>{console.error(`Failed to copy URL: `,t)})}handleShareClick(){this.copyCurrentUrl(),this.shareButtonCopied.set(!0),setTimeout(()=>{this.shareButtonCopied.set(!1)},2e3)}static ɵfac=function(n){return new(n||e)};static ɵcmp=fI({type:e,selectors:[[`app-post-container`]],decls:14,vars:9,consts:[[`spinner`,``],[1,`page-container`],[3,`spinWhileUndefined`],[1,`navigation-header`],[`label`,`Back to Blog`,`icon`,`pi pi-chevron-left`,`severity`,`secondary`,3,`routerLink`,`text`],[1,`action-buttons`],[`icon`,`pi pi-share-alt`,`severity`,`secondary`,3,`click`,`label`,`text`],[`label`,`Download`,`icon`,`pi pi-download`,`severity`,`secondary`,3,`click`,`text`],[1,`reading-time-container`],[1,`pi`,`pi-clock`,`reading-time-icon`],[1,`text-sm`],[1,`content-area`],[3,`articleContent`]],template:function(n,i){n&1&&(ni$1(0,`div`,1)(1,`app-loading-spinner`,2,0)(3,`div`,3),Kf(4,`p-button`,4),ni$1(5,`div`,5)(6,`p-button`,6),rp(`click`,function(){return i.handleShareClick()}),pc(),ni$1(7,`p-button`,7),rp(`click`,function(){return i.downloadMarkdown()}),pc()()(),ni$1(8,`div`,8),Kf(9,`i`,9),ni$1(10,`p`,10),SE(11),pc()(),ni$1(12,`div`,11),Kf(13,`app-post-markdown`,12),pc()()()),n&2&&(Ay(),Yf(`spinWhileUndefined`,i.article()),Ay(3),Yf(`routerLink`,jE(8,lr))(`text`,!0),Ay(2),Yf(`label`,i.shareButtonLabel())(`text`,!0),Ay(),Yf(`text`,!0),Ay(4),vc(``,i.timeToReadInMinutes(),` min. read`),Ay(2),Yf(`articleContent`,i.article()||``))},dependencies:[Ge,zd,is,Zt$1,Le],styles:[`.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}@media(max-width:768px){.page-container[_ngcontent-%COMP%]{padding:1.5rem .75rem}}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}@media(max-width:768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:center}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.reading-time-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.reading-time-icon[_ngcontent-%COMP%]{font-size:.875rem;color:#cfcbc6}`]})};var La=[{path:``,component:je},{path:`:postName`,component:Ue}];export{La as CHITTYLOG_ROUTES};