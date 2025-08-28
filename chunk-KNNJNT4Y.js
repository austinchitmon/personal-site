import{$ as f,$a as U,Aa as wn,Ba as Bt,Bb as On,C as bn,Cb as W,Da as Tn,Db as Q,E as yn,Eb as ee,Fb as je,Gb as ze,Hb as He,Ib as jt,Jb as Rn,K as Dn,Kb as vt,Lb as Et,Nb as V,Ob as St,Pb as Ct,Qa as P,R as vn,Ra as _n,Sa as mt,Sb as x,U as Y,Ua as Te,Ub as zt,Va as J,W as b,X as z,Xa as $t,Ya as An,Yb as Ht,Z as L,Zb as Vt,_ as B,_b as Ve,a as C,aa as ft,ab as H,ac as q,bb as T,bc as Wt,ca as En,cb as A,cc as We,da as Sn,db as be,dc as Ln,fb as bt,fc as E,ga as ht,gb as Ut,gc as Ge,ha as gt,i as mn,ia as N,jb as Fn,l as pt,ma as re,mb as ae,p as kt,pa as Cn,qa as me,ra as S,sb as _,t as Ue,ta as se,tb as _e,ub as Ae,vb as le,wb as yt,xa as we,xb as Dt,yb as In}from"./chunk-PE3ZV6QS.js";var xn=null;function wt(){return xn}function co(t){xn??=t}var Gt=class{},Kt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>f(Mn),providedIn:"platform"})}return t})();var Mn=(()=>{class t extends Kt{_location;_history;_doc=f(N);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return wt().getBaseHref(this._doc)}onPopState(e){let n=wt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=wt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function kn(t,o){return t?o?t.endsWith("/")?o.startsWith("/")?t+o.slice(1):t+o:o.startsWith("/")?t+o:`${t}/${o}`:t:o}function Nn(t){let o=t.search(/#|\?|$/);return t[o-1]==="/"?t.slice(0,o-1)+t.slice(o):t}function ue(t){return t&&t[0]!=="?"?`?${t}`:t}var Tt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>f($n),providedIn:"root"})}return t})(),Bn=new L(""),$n=(()=>{class t extends Tt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(N).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return kn(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+ue(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,r){let s=this.prepareExternalUrl(i+ue(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,r){let s=this.prepareExternalUrl(i+ue(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(B(Kt),B(Bn,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Un=(()=>{class t{_subject=new pt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ho(Nn(Pn(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+ue(n))}normalize(e){return t.stripTrailingSlash(fo(this._basePath,Pn(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ue(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ue(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=ue;static joinWithSlash=kn;static stripTrailingSlash=Nn;static \u0275fac=function(n){return new(n||t)(B(Tt))};static \u0275prov=b({token:t,factory:()=>po(),providedIn:"root"})}return t})();function po(){return new Un(B(Tt))}function fo(t,o){if(!t||!o.startsWith(t))return o;let e=o.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:o}function Pn(t){return t.replace(/\/index.html$/,"")}function ho(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Yt=(()=>{class t{_viewContainer;_context=new _t;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){jn(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){jn(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(J($t),J(mt))};static \u0275dir=T({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),_t=class{$implicit=null;ngIf=null};function jn(t,o){if(t&&!t.createEmbeddedView)throw new Y(2020,!1)}var qt=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,r]=e.split("."),s=i.indexOf("-")===-1?void 0:_n.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(J(se),J(Ln),J(Te))};static \u0275dir=T({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Zt=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(J($t))};static \u0275dir=T({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[me]})}return t})();var Z=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=z({})}return t})();function Xt(t,o){o=encodeURIComponent(o);for(let e of t.split(";")){let n=e.indexOf("="),[i,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===o)return decodeURIComponent(r)}return null}var Ke=class{};var yo="browser",Do="server";function At(t){return t===yo}function Hn(t){return t===Do}var Vn=t=>t.src,vo=new L("",{providedIn:"root",factory:()=>Vn});var zn=/^((\s*\d+w\s*(,|$)){1,})$/;var Eo=[1,2],So=640;var Co=1920,wo=1080;var ka=(()=>{class t{imageLoader=f(vo);config=To(f(Bt));renderer=f(Te);imgElement=f(se).nativeElement;injector=f(gt);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){}ngOnInit(){An("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&zn.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0)}}callImageLoader(e){let n=e;return this.loaderParams&&(n.loaderParams=this.loaderParams),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=zn.test(this.ngSrcset);return this.ngSrcset.split(",").filter(i=>i!=="").map(i=>{i=i.trim();let r=e?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:r})} ${i}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(r=>r>=So)),n.map(r=>`${this.callImageLoader({src:this.ngSrc,width:r})} ${r}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i&&this.setHostAttribute("srcset",i),i}getFixedSrcset(){return Eo.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Co||this.height>wo),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Vn&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0})})`:typeof e=="string"?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let s=this.injector.get(We);i(),r(),this.placeholder=!1,s.markForCheck()},i=this.renderer.listen(e,"load",n),r=this.renderer.listen(e,"error",n);_o(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=T({type:t,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,i){n&2&&vt("position",i.fill?"absolute":null)("width",i.fill?"100%":null)("height",i.fill?"100%":null)("inset",i.fill?"0":null)("background-size",i.placeholder?"cover":null)("background-position",i.placeholder?"50% 50%":null)("background-repeat",i.placeholder?"no-repeat":null)("background-image",i.placeholder?i.generatePlaceholder(i.placeholder):null)("filter",i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",Ao],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",Ge],height:[2,"height","height",Ge],loading:"loading",priority:[2,"priority","priority",E],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",E],fill:[2,"fill","fill",E],placeholder:[2,"placeholder","placeholder",Fo],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[me]})}return t})();function To(t){let o={};return t.breakpoints&&(o.breakpoints=t.breakpoints.sort((e,n)=>e-n)),Object.assign({},wn,t,o)}function _o(t,o){t.complete&&t.naturalWidth&&o()}function Ao(t){return typeof t=="string"?t:Tn(t)}function Fo(t){return typeof t=="string"&&t!=="true"&&t!=="false"&&t!==""?t:E(t)}function Fe(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Fe(...n)]:Object.entries(n).map(([s,l])=>l?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Gn(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function ye(t,o){if(t&&o){let e=n=>{Gn(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Ie(t,o){if(t&&o){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Kn(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Wn(t){return t?Math.abs(t.scrollLeft):0}function Yn(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Jt(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function Qt(t,o={}){if(Jt(t)){let e=(n,i)=>{var r,s;let l=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((a,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")a.push(u);else if(c==="object"){let d=Array.isArray(u)?e(n,u):Object.entries(u).map(([h,p])=>n==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);a=d.length?a.concat(d.filter(h=>!!h)):a}}return a},l)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?Qt(t,i):(i=n==="class"?[...new Set(e("class",i))].join(" ").trim():n==="style"?e("style",i).join(";").trim():i,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=i),t.setAttribute(n,i))}})}}function Oe(t,o){return Jt(t)?t.matches(o)?t:t.querySelector(o):null}function en(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function qn(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||Wn(document.documentElement)||Wn(document.body)||0)}}return{top:"auto",left:"auto"}}function Zn(t,o){if(t){let e=t.offsetHeight;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function tn(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function Xn(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function Jn(t,o="",e){Jt(t)&&e!==null&&e!==void 0&&t.setAttribute(o,e)}function Qn(){let t=new Map;return{on(o,e){let n=t.get(o);return n?n.push(e):n=[e],t.set(o,n),this},off(o,e){let n=t.get(o);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(o,e){let n=t.get(o);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}function ce(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function nn(t,o,e=new WeakSet){if(t===o)return!0;if(!t||!o||typeof t!="object"||typeof o!="object"||e.has(t)||e.has(o))return!1;e.add(t).add(o);let n=Array.isArray(t),i=Array.isArray(o),r,s,l;if(n&&i){if(s=t.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!nn(t[r],o[r],e))return!1;return!0}if(n!=i)return!1;let a=t instanceof Date,u=o instanceof Date;if(a!=u)return!1;if(a&&u)return t.getTime()==o.getTime();let c=t instanceof RegExp,d=o instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==o.toString();let h=Object.keys(t);if(s=h.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,h[r]))return!1;for(r=s;r--!==0;)if(l=h[r],!nn(t[l],o[l],e))return!1;return!0}function Oo(t,o){return nn(t,o)}function ni(t){return typeof t=="function"&&"call"in t&&"apply"in t}function w(t){return!ce(t)}function ei(t,o){if(!t||!o)return null;try{let e=t[o];if(w(e))return e}catch{}if(Object.keys(t).length){if(ni(o))return o(t);if(o.indexOf(".")===-1)return t[o];{let e=o.split("."),n=t;for(let i=0,r=e.length;i<r;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function Ga(t,o,e){return e?ei(t,e)===ei(o,e):Oo(t,o)}function de(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function $(t,...o){return ni(t)?t(...o):t}function De(t,o=!0){return typeof t=="string"&&(o||t!=="")}function ti(t){return De(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Ft(t,o="",e={}){let n=ti(o).split("."),i=n.shift();if(i){if(de(t)){let r=Object.keys(t).find(s=>ti(s)===i)||"";return Ft($(t[r],e),n.join("."),e)}return}return $(t,e)}function ii(t){return w(t)&&!isNaN(t)}function X(t,o){if(o){let e=o.test(t);return o.lastIndex=0,e}return!1}function ve(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function It(t){return De(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,e)=>e===0?o:"-"+o.toLowerCase()).toLowerCase():t}var Ot={};function Ye(t="pui_id_"){return Object.hasOwn(Ot,t)||(Ot[t]=0),Ot[t]++,`${t}${Ot[t]}`}var oi=["*"];var F=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Za=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=U({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:oi,decls:1,vars:0,template:function(n,i){n&1&&(Q(),ee(0))},encapsulation:2})}return t})(),Xa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=U({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:oi,decls:1,vars:0,template:function(n,i){n&1&&(Q(),ee(0))},encapsulation:2})}return t})(),ri=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(J(mt))};static \u0275dir=T({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),pe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=z({imports:[Z]})}return t})();var Ro=Object.defineProperty,Lo=Object.defineProperties,No=Object.getOwnPropertyDescriptors,Rt=Object.getOwnPropertySymbols,ai=Object.prototype.hasOwnProperty,li=Object.prototype.propertyIsEnumerable,si=(t,o,e)=>o in t?Ro(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,K=(t,o)=>{for(var e in o||(o={}))ai.call(o,e)&&si(t,e,o[e]);if(Rt)for(var e of Rt(o))li.call(o,e)&&si(t,e,o[e]);return t},on=(t,o)=>Lo(t,No(o)),te=(t,o)=>{var e={};for(var n in t)ai.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Rt)for(var n of Rt(t))o.indexOf(n)<0&&li.call(t,n)&&(e[n]=t[n]);return e};var Po=Qn(),j=Po,rn=/{([^}]*)}/g,xo=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Mo=/var\([^)]+\)/g;function ko(t){return de(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function Bo(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function sn(t="",o=""){return Bo(`${De(t,!1)&&De(o,!1)?`${t}-`:t}${o}`)}function ui(t="",o=""){return`--${sn(t,o)}`}function $o(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function ci(t,o="",e="",n=[],i){if(De(t)){let r=t.trim();if($o(r))return;if(X(r,rn)){let s=r.replaceAll(rn,l=>{let a=l.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>X(u,c)));return`var(${ui(e,It(a.join("-")))}${w(i)?`, ${i}`:""})`});return X(s.replace(Mo,"0"),xo)?`calc(${s})`:s}return r}else if(ii(t))return t}function Uo(t,o,e){De(o,!1)&&t.push(`${o}:${e};`)}function Re(t,o){return t?`${t}{${o}}`:""}function di(t,o){if(t.indexOf("dt(")===-1)return t;function e(s,l){let a=[],u=0,c="",d=null,h=0;for(;u<=s.length;){let p=s[u];if((p==='"'||p==="'"||p==="`")&&s[u-1]!=="\\"&&(d=d===p?null:p),!d&&(p==="("&&h++,p===")"&&h--,(p===","||u===s.length)&&h===0)){let m=c.trim();m.startsWith("dt(")?a.push(di(m,l)):a.push(n(m)),c="",u++;continue}p!==void 0&&(c+=p),u++}return a}function n(s){let l=s[0];if((l==='"'||l==="'"||l==="`")&&s[s.length-1]===l)return s.slice(1,-1);let a=Number(s);return isNaN(a)?s:a}let i=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let l=r.pop();r.length===0&&i.push([l,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[l,a]=i[s],u=t.slice(l+3,a),c=e(u,o),d=o(...c);t=t.slice(0,l)+d+t.slice(a+1)}return t}var ne=(...t)=>jo(v.getTheme(),...t),jo=(t={},o,e,n)=>{if(o){let{variable:i,options:r}=v.defaults||{},{prefix:s,transform:l}=t?.options||r||{},a=X(o,rn)?o:`{${o}}`;return n==="value"||ce(n)&&l==="strict"?v.getTokenValue(o):ci(a,void 0,s,[i.excludedKeyRegex],e)}return""};function Le(t,...o){if(t instanceof Array){let e=t.reduce((n,i,r)=>{var s;return n+i+((s=$(o[r],{dt:ne}))!=null?s:"")},"");return di(e,ne)}return $(t,{dt:ne})}function zo(t,o={}){let e=v.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=o,s=[],l=[],a=[{node:t,path:n}];for(;a.length;){let{node:c,path:d}=a.pop();for(let h in c){let p=c[h],m=ko(p),g=X(h,r)?sn(d):sn(d,It(h));if(de(m))a.push({node:m,path:g});else{let y=ui(g),I=ci(m,g,n,[r]);Uo(l,y,I);let R=g;n&&R.startsWith(n+"-")&&(R=R.slice(n.length+1)),s.push(R.replace(/-/g,"."))}}}let u=l.join("");return{value:l,tokens:s,declarations:u,css:Re(i,u)}}var G={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=o.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,o){return zo(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s,l,a,u,c,d;let{preset:h,options:p}=o,m,g,y,I,R,D,oe;if(w(h)&&p.transform!=="strict"){let{primitive:Se,semantic:Ce,extend:Qe}=h,ke=Ce||{},{colorScheme:et}=ke,tt=te(ke,["colorScheme"]),nt=Qe||{},{colorScheme:it}=nt,Be=te(nt,["colorScheme"]),$e=et||{},{dark:ot}=$e,rt=te($e,["dark"]),st=it||{},{dark:at}=st,lt=te(st,["dark"]),ut=w(Se)?this._toVariables({primitive:Se},p):{},ct=w(tt)?this._toVariables({semantic:tt},p):{},dt=w(rt)?this._toVariables({light:rt},p):{},pn=w(ot)?this._toVariables({dark:ot},p):{},fn=w(Be)?this._toVariables({semantic:Be},p):{},hn=w(lt)?this._toVariables({light:lt},p):{},gn=w(at)?this._toVariables({dark:at},p):{},[Gi,Ki]=[(r=ut.declarations)!=null?r:"",ut.tokens],[Yi,qi]=[(s=ct.declarations)!=null?s:"",ct.tokens||[]],[Zi,Xi]=[(l=dt.declarations)!=null?l:"",dt.tokens||[]],[Ji,Qi]=[(a=pn.declarations)!=null?a:"",pn.tokens||[]],[eo,to]=[(u=fn.declarations)!=null?u:"",fn.tokens||[]],[no,io]=[(c=hn.declarations)!=null?c:"",hn.tokens||[]],[oo,ro]=[(d=gn.declarations)!=null?d:"",gn.tokens||[]];m=this.transformCSS(t,Gi,"light","variable",p,n,i),g=Ki;let so=this.transformCSS(t,`${Yi}${Zi}`,"light","variable",p,n,i),ao=this.transformCSS(t,`${Ji}`,"dark","variable",p,n,i);y=`${so}${ao}`,I=[...new Set([...qi,...Xi,...Qi])];let lo=this.transformCSS(t,`${eo}${no}color-scheme:light`,"light","variable",p,n,i),uo=this.transformCSS(t,`${oo}color-scheme:dark`,"dark","variable",p,n,i);R=`${lo}${uo}`,D=[...new Set([...to,...io,...ro])],oe=$(h.css,{dt:ne})}return{primitive:{css:m,tokens:g},semantic:{css:y,tokens:I},global:{css:R,tokens:D},style:oe}},getPreset({name:t="",preset:o={},options:e,params:n,set:i,defaults:r,selector:s}){var l,a,u;let c,d,h;if(w(o)&&e.transform!=="strict"){let p=t.replace("-directive",""),m=o,{colorScheme:g,extend:y,css:I}=m,R=te(m,["colorScheme","extend","css"]),D=y||{},{colorScheme:oe}=D,Se=te(D,["colorScheme"]),Ce=g||{},{dark:Qe}=Ce,ke=te(Ce,["dark"]),et=oe||{},{dark:tt}=et,nt=te(et,["dark"]),it=w(R)?this._toVariables({[p]:K(K({},R),Se)},e):{},Be=w(ke)?this._toVariables({[p]:K(K({},ke),nt)},e):{},$e=w(Qe)?this._toVariables({[p]:K(K({},Qe),tt)},e):{},[ot,rt]=[(l=it.declarations)!=null?l:"",it.tokens||[]],[st,at]=[(a=Be.declarations)!=null?a:"",Be.tokens||[]],[lt,ut]=[(u=$e.declarations)!=null?u:"",$e.tokens||[]],ct=this.transformCSS(p,`${ot}${st}`,"light","variable",e,i,r,s),dt=this.transformCSS(p,lt,"dark","variable",e,i,r,s);c=`${ct}${dt}`,d=[...new Set([...rt,...at,...ut])],h=$(I,{dt:ne})}return{css:c,tokens:d,style:h}},getPresetC({name:t="",theme:o={},params:e,set:n,defaults:i}){var r;let{preset:s,options:l}=o,a=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:a,options:l,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s;let l=t.replace("-directive",""),{preset:a,options:u}=o,c=((r=a?.components)==null?void 0:r[l])||((s=a?.directives)==null?void 0:s[l]);return this.getPreset({name:l,preset:c,options:u,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,n){let{cssLayer:i}=o;return i?`@layer ${$(i.order||i.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){let s=this.getCommon({name:t,theme:o,params:e,set:i,defaults:r}),l=Object.entries(n).reduce((a,[u,c])=>a.push(`${u}="${c}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[u,c])=>{if(de(c)&&Object.hasOwn(c,"css")){let d=ve(c.css),h=`${u}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${h}" ${l}>${d}</style>`)}return a},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){var s;let l={name:t,theme:o,params:e,set:i,defaults:r},a=(s=t.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,h])=>c.push(`${d}="${h}"`)&&c,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${ve(a)}</style>`:""},createTokens(t={},o,e="",n="",i={}){return{}},getTokenValue(t,o,e){var n;let i=(l=>l.split(".").filter(a=>!X(a.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[i])==null?void 0:n.computed(r)].flat().filter(l=>l);return s.length===1?s[0].value:s.reduce((l={},a)=>{let u=a,{colorScheme:c}=u,d=te(u,["colorScheme"]);return l[c]=d,l},void 0)},getSelectorRule(t,o,e,n){return e==="class"||e==="attr"?Re(w(o)?`${t}${o},${t} ${o}`:t,n):Re(t,Re(o??":root",n))},transformCSS(t,o,e,n,i={},r,s,l){if(w(o)){let{cssLayer:a}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);o=e==="dark"?u.reduce((c,{type:d,selector:h})=>(w(h)&&(c+=h.includes("[CSS]")?h.replace("[CSS]",o):this.getSelectorRule(h,l,d,o)),c),""):Re(l??":root",o)}if(a){let u={name:"primeui",order:"primeui"};de(a)&&(u.name=$(a.name,{name:t,type:n})),w(u.name)&&(o=Re(`@layer ${u.name}`,o),r?.layerNames(u.name))}return o}return""}},v={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=on(K({},o),{options:K(K({},this.defaults.options),o.options)}),this._tokens=G.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),j.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=on(K({},this.theme),{preset:t}),this._tokens=G.createTokens(t,this.defaults),this.clearLoadedStyleNames(),j.emit("preset:change",t),j.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=on(K({},this.theme),{options:t}),this.clearLoadedStyleNames(),j.emit("options:change",t),j.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return G.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return G.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPresetD(e)},getCustomPreset(t="",o,e,n){let i={name:t,preset:o,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return G.getPreset(i)},getLayerOrderCSS(t=""){return G.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",n){return G.transformCSS(t,o,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return G.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return G.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),j.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&j.emit("theme:load"))}};var pi=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var Ho=0,fi=(()=>{class t{document=f(N);use(e,n={}){let i=!1,r=e,s=null,{immediate:l=!0,manual:a=!1,name:u=`style_${++Ho}`,id:c=void 0,media:d=void 0,nonce:h=void 0,first:p=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=e,Qt(s,{type:"text/css",media:d,nonce:h});let g=this.document.head;p&&g.firstChild?g.insertBefore(s,g.firstChild):g.appendChild(s),Jn(s,"data-primeng-style-id",u)}return s.textContent!==r&&(s.textContent=r),{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ne={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Vo=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,O=(()=>{class t{name="base";useStyle=f(fi);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},i=r=>r)=>{let r=i(Le`${$(e,{dt:ne})}`);return r?this.useStyle.use(ve(r),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(i="")=>v.transformCSS(e.name||this.name,`${i}${Le`${n}`}`));loadGlobalCSS=(e={})=>this.load(Vo,e);loadGlobalTheme=(e={},n="")=>this.load(pi,e,(i="")=>v.transformCSS(e.name||this.name,`${i}${Le`${n}`}`));getCommonTheme=e=>v.getCommon(this.name,e);getComponentTheme=e=>v.getComponent(this.name,e);getDirectiveTheme=e=>v.getDirective(this.name,e);getPresetTheme=(e,n,i)=>v.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>v.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=$(this.css,{dt:ne}),r=ve(Le`${i}${e}`),s=Object.entries(n).reduce((l,[a,u])=>l.push(`${a}="${u}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>v.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[v.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Le`${$(this.theme,{dt:ne})}`,l=ve(v.transformCSS(r,s)),a=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${a}>${l}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wo=(()=>{class t{theme=re(void 0);csp=re({nonce:void 0});isThemeChanged=!1;document=f(N);baseStyle=f(O);constructor(){Ve(()=>{j.on("theme:change",e=>{Ht(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Ve(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){v.clearLoadedStyleNames(),j.clear()}onThemeChange(e){v.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!v.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,C({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},s),r),v.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),an=(()=>{class t extends Wo{ripple=re(!1);platformId=f(we);inputStyle=re(null);inputVariant=re(null);overlayAppendTo=re("self");overlayOptions={};csp=re({nonce:void 0});filterMatchModeOptions={text:[F.STARTS_WITH,F.CONTAINS,F.NOT_CONTAINS,F.ENDS_WITH,F.EQUALS,F.NOT_EQUALS],numeric:[F.EQUALS,F.NOT_EQUALS,F.LESS_THAN,F.LESS_THAN_OR_EQUAL_TO,F.GREATER_THAN,F.GREATER_THAN_OR_EQUAL_TO],date:[F.DATE_IS,F.DATE_IS_NOT,F.DATE_BEFORE,F.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new pt;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:l,overlayOptions:a,translation:u,filterMatchModeOptions:c,overlayAppendTo:d}=e||{};n&&this.csp.set(n),d&&this.overlayAppendTo.set(d),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),a&&(this.overlayOptions=a),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),l&&this.setThemeConfig({theme:l,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Go=new L("PRIME_NG_CONFIG");function Fl(...t){let o=t?.map(n=>({provide:Go,useValue:n,multi:!1})),e=Fn(()=>{let n=f(an);t?.forEach(i=>n.setConfig(i))});return ft([...o,e])}var hi=(()=>{class t extends O{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),k=(()=>{class t{document=f(N);platformId=f(we);el=f(se);injector=f(gt);cd=f(We);renderer=f(Te);config=f(an);baseComponentStyle=f(hi);baseStyle=f(O);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Ye("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return Ft(e,n,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Hn(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>j.off("theme:change",e))}_loadStyles(){let e=()=>{Ne.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Ne.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Ne.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ne.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!v.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,C({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,C({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},this.styleOptions),r),v.setLoadedStyleName("common")}if(!v.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,C({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(C({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),v.setLoadedStyleName(this.componentStyle?.name)}if(!v.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,C({name:"layer-order",first:!0},this.styleOptions)),v.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,C({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Ne.clearLoadedStyleNames(),j.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return Fe(this._getOptionValue(this.$style?.classes,e,C({instance:this},n)))}sx(e="",n=!0,i={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,C({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Fe;static \u0275fac=function(n){return new(n||t)};static \u0275dir=T({type:t,inputs:{dt:"dt"},features:[x([hi,O]),me]})}return t})();var gi=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=D=>{if(D)return getComputedStyle(D).getPropertyValue("position")==="relative"?D:r(D.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},m,g,y="top";a.top+l+s.height>d.height?(m=a.top-p.top-s.height,y="bottom",a.top+m<0&&(m=-1*a.top)):(m=l+a.top-p.top,y="top");let I=a.left+s.width-d.width,R=a.left-p.left;if(s.width>d.width?g=(a.left-p.left)*-1:I>0?g=R-I:g=a.left-p.left,e.style.top=m+"px",e.style.left=g+"px",e.style.transformOrigin=y,i){let D=Kn(/-anchor-gutter$/)?.value;e.style.marginTop=y==="bottom"?`calc(${D??"2px"} * -1)`:D??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,l=r.width,a=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),m,g;c.top+a+s>p.height?(m=c.top+d-s,e.style.transformOrigin="bottom",m<0&&(m=d)):(m=a+c.top+d,e.style.transformOrigin="top"),c.left+l>p.width?g=Math.max(0,c.left+h+u-l):g=c.left+h,e.style.top=m+"px",e.style.left=g+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return r.test(a.getPropertyValue("overflow"))||r.test(a.getPropertyValue("overflowX"))||r.test(a.getPropertyValue("overflowY"))};for(let l of i){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let u=a.split(",");for(let c of u){let d=this.findSingle(l,c);d&&s(d)&&n.push(d)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-r-l,d=e.scrollTop,h=e.clientHeight,p=this.getOuterHeight(n);c<0?e.scrollTop=d+c:c+p>h&&(e.scrollTop=d+c-h+p)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,l=r/s;let a=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(a)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,l=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let l=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((a,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")a.push(u);else if(c==="object"){let d=Array.isArray(u)?i(r,u):Object.entries(u).map(([h,p])=>r==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);a=d.length?a.concat(d.filter(h=>!!h)):a}}return a},l)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let l=r.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var mi=(()=>{class t extends k{autofocus=!1;focused=!1;platformId=f(we);document=f(N);host=f(se);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){At(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=gi.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275dir=T({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[A]})}return t})();var bi=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Ko=`
    ${bi}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Yo={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":w(t.value())&&String(t.value()).length===1,"p-badge-dot":ce(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},yi=(()=>{class t extends O{name="badge";theme=Ko;classes=Yo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ln=(()=>{class t extends k{styleClass=q();badgeSize=q();size=q();severity=q();value=q();badgeDisabled=q(!1,{transform:E});_componentStyle=f(yi);static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=U({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(V(i.cn(i.cx("root"),i.styleClass())),vt("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[x([yi]),A],decls:1,vars:1,template:function(n,i){n&1&&St(0),n&2&&Ct(i.value())},dependencies:[Z,pe],encapsulation:2,changeDetection:0})}return t})(),Di=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=z({imports:[ln,pe,pe]})}return t})();var vi=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Zo=["*"],Xo={root:"p-fluid"},Ei=(()=>{class t extends O{name="fluid";classes=Xo;theme=vi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var un=(()=>{class t extends k{_componentStyle=f(Ei);static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=U({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&V(i.cx("root"))},features:[x([Ei]),A],ngContentSelectors:Zo,decls:1,vars:0,template:function(n,i){n&1&&(Q(),ee(0))},dependencies:[Z],encapsulation:2,changeDetection:0})}return t})();var Jo=["*"],Qo=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Si=(()=>{class t extends O{name="baseicon";css=Qo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ci=(()=>{class t extends k{spin=!1;_componentStyle=f(Si);getClassNames(){return Fe("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=U({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&V(i.getClassNames())},inputs:{spin:[2,"spin","spin",E]},features:[x([Si]),A],ngContentSelectors:Jo,decls:1,vars:0,template:function(n,i){n&1&&(Q(),ee(0))},encapsulation:2,changeDetection:0})}return t})();var er=["data-p-icon","spinner"],wi=(()=>{class t extends Ci{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ye()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=U({type:t,selectors:[["","data-p-icon","spinner"]],features:[A],attrs:er,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ht(),_e(0,"g"),le(1,"path",0),Ae(),_e(2,"defs")(3,"clipPath",1),le(4,"rect",2),Ae()()),n&2&&(ae("clip-path",i.pathId),P(3),_("id",i.pathId))},encapsulation:2})}return t})();var Ti=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var tr=`
    ${Ti}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,nr={root:"p-ink"},_i=(()=>{class t extends O{name="ripple";theme=tr;classes=nr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Ai=(()=>{class t extends k{zone=f(Ut);_componentStyle=f(_i);animationListener;mouseDownListener;timeout;constructor(){super(),Ve(()=>{At(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Ie(n,"p-ink-active"),!en(n)&&!tn(n)){let l=Math.max(Yn(this.el.nativeElement),Zn(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let i=qn(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-tn(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-en(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),ye(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&Ie(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Ie(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Ie(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Xn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=T({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[x([_i]),A]})}return t})();var Fi=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var ir=["content"],or=["loadingicon"],rr=["icon"],sr=["*"],Ri=t=>({class:t});function ar(t,o){t&1&&In(0)}function lr(t,o){if(t&1&&le(0,"span"),t&2){let e=W(3);V(e.cx("loadingIcon")),ae("aria-hidden",!0)("data-pc-section","loadingicon")}}function ur(t,o){if(t&1&&(ht(),le(0,"svg",7)),t&2){let e=W(3);V(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),_("spin",!0),ae("aria-hidden",!0)("data-pc-section","loadingicon")}}function cr(t,o){if(t&1&&(yt(0),be(1,lr,1,4,"span",3)(2,ur,1,5,"svg",6),Dt()),t&2){let e=W(2);P(),_("ngIf",e.loadingIcon),P(),_("ngIf",!e.loadingIcon)}}function dr(t,o){}function pr(t,o){if(t&1&&be(0,dr,0,0,"ng-template",8),t&2){let e=W(2);_("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function fr(t,o){if(t&1&&(yt(0),be(1,cr,3,2,"ng-container",2)(2,pr,1,1,null,5),Dt()),t&2){let e=W();P(),_("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),P(),_("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",zt(3,Ri,e.cx("loadingIcon")))}}function hr(t,o){if(t&1&&le(0,"span"),t&2){let e=W(2);V(e.cx("icon")),ae("data-pc-section","icon")}}function gr(t,o){}function mr(t,o){if(t&1&&be(0,gr,0,0,"ng-template",8),t&2){let e=W(2);_("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function br(t,o){if(t&1&&(yt(0),be(1,hr,1,3,"span",3)(2,mr,1,1,null,5),Dt()),t&2){let e=W();P(),_("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),P(),_("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",zt(3,Ri,e.cx("icon")))}}function yr(t,o){if(t&1&&(_e(0,"span"),St(1),Ae()),t&2){let e=W();V(e.cx("label")),ae("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),P(),Ct(e.label)}}function Dr(t,o){if(t&1&&le(0,"p-badge",9),t&2){let e=W();_("value",e.badge)("severity",e.badgeSeverity)}}var vr={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},he=(()=>{class t extends O{name="button";theme=Fi;classes=vr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var fe={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Ii=(()=>{class t extends k{_componentStyle=f(he);static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275dir=T({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&Et("p-button-label",!0)},features:[x([he]),A]})}return t})(),Oi=(()=>{class t extends k{_componentStyle=f(he);static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275dir=T({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&Et("p-button-icon",!0)},features:[x([he]),A]})}return t})(),yc=(()=>{class t extends k{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Wt(Oi);labelSignal=Wt(Ii);isIconOnly=Vt(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=q(void 0,{transform:E});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(fe);pcFluid=f(un,{optional:!0,host:!0,skipSelf:!0});isTextButton=Vt(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=f(he);ngAfterViewInit(){super.ngAfterViewInit(),ye(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let e=[fe.button,fe.component];return this.icon&&!this.label&&ce(this.htmlElement.textContent)&&e.push(fe.iconOnly),this.loading&&(e.push(fe.disabled,fe.loading),!this.icon&&this.label&&e.push(fe.labelOnly),this.icon&&!this.label&&!ce(this.htmlElement.textContent)&&e.push(fe.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>e.some(r=>i===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Oe(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Oe(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let i=this.label?"p-button-icon-"+this.iconPos:null;i&&ye(n,i);let r=this.getIconClass();r&&ye(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Oe(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Oe(this.htmlElement,".p-button-icon"),n=Oe(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275dir=T({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&(jt(r,i.iconSignal,Oi,5),jt(r,i.labelSignal,Ii,5)),n&2&&Rn(2)},hostVars:4,hostBindings:function(n,i){n&2&&Et("p-button-icon-only",i.isIconOnly())("p-button-text",i.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",E],rounded:[2,"rounded","rounded",E],text:[2,"text","text",E],outlined:[2,"outlined","outlined",E],size:"size",plain:[2,"plain","plain",E],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[x([he]),A]})}return t})(),Er=(()=>{class t extends k{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=q(void 0,{transform:E});onClick=new bt;onFocus=new bt;onBlur=new bt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=f(un,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=f(he);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=S(t)))(i||t)}})();static \u0275cmp=U({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(je(r,ir,5),je(r,or,5),je(r,rr,5),je(r,ri,4)),n&2){let s;ze(s=He())&&(i.contentTemplate=s.first),ze(s=He())&&(i.loadingIconTemplate=s.first),ze(s=He())&&(i.iconTemplate=s.first),ze(s=He())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",E],loading:[2,"loading","loading",E],loadingIcon:"loadingIcon",raised:[2,"raised","raised",E],rounded:[2,"rounded","rounded",E],text:[2,"text","text",E],plain:[2,"plain","plain",E],severity:"severity",outlined:[2,"outlined","outlined",E],link:[2,"link","link",E],tabindex:[2,"tabindex","tabindex",Ge],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",E],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[x([he]),A],ngContentSelectors:sr,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(Q(),_e(0,"button",0),On("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),ee(1),be(2,ar,1,0,"ng-container",1)(3,fr,3,5,"ng-container",2)(4,br,3,5,"ng-container",2)(5,yr,2,5,"span",3)(6,Dr,1,2,"p-badge",4),Ae()),n&2&&(V(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),_("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),ae("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),P(2),_("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),P(),_("ngIf",i.loading),P(),_("ngIf",!i.loading),P(),_("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),P(),_("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[Z,Yt,Zt,qt,Ai,mi,wi,Di,ln,pe],encapsulation:2,changeDetection:0})}return t})(),Dc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=z({imports:[Z,Er,pe,pe]})}return t})();var xe=class{},qe=class{},ge=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(o){o?typeof o=="string"?this.lazyInit=()=>{this.headers=new Map,o.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),r=e.slice(n+1).trim();this.addHeaderEntry(i,r)}})}:typeof Headers<"u"&&o instanceof Headers?(this.headers=new Map,o.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(o).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(o){return this.init(),this.headers.has(o.toLowerCase())}get(o){this.init();let e=this.headers.get(o.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(o){return this.init(),this.headers.get(o.toLowerCase())||null}append(o,e){return this.clone({name:o,value:e,op:"a"})}set(o,e){return this.clone({name:o,value:e,op:"s"})}delete(o,e){return this.clone({name:o,value:e,op:"d"})}maybeSetNormalizedName(o,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,o)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(o=>this.applyUpdate(o)),this.lazyUpdate=null))}copyFrom(o){o.init(),Array.from(o.headers.keys()).forEach(e=>{this.headers.set(e,o.headers.get(e)),this.normalizedNames.set(e,o.normalizedNames.get(e))})}clone(o){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([o]),e}applyUpdate(o){let e=o.name.toLowerCase();switch(o.op){case"a":case"s":let n=o.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(o.name,e);let i=(o.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let r=o.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(l=>r.indexOf(l)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(o,e){let n=o.toLowerCase();this.maybeSetNormalizedName(o,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(o,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),i=o.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(o,i)}forEach(o){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>o(this.normalizedNames.get(e),this.headers.get(e)))}};var Nt=class{encodeKey(o){return Li(o)}encodeValue(o){return Li(o)}decodeKey(o){return decodeURIComponent(o)}decodeValue(o){return decodeURIComponent(o)}};function Sr(t,o){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let r=i.indexOf("="),[s,l]=r==-1?[o.decodeKey(i),""]:[o.decodeKey(i.slice(0,r)),o.decodeValue(i.slice(r+1))],a=e.get(s)||[];a.push(l),e.set(s,a)}),e}var Cr=/%(\d[a-f0-9])/gi,wr={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Li(t){return encodeURIComponent(t).replace(Cr,(o,e)=>wr[e]??o)}function Lt(t){return`${t}`}var ie=class t{map;encoder;updates=null;cloneFrom=null;constructor(o={}){if(this.encoder=o.encoder||new Nt,o.fromString){if(o.fromObject)throw new Y(2805,!1);this.map=Sr(o.fromString,this.encoder)}else o.fromObject?(this.map=new Map,Object.keys(o.fromObject).forEach(e=>{let n=o.fromObject[e],i=Array.isArray(n)?n.map(Lt):[Lt(n)];this.map.set(e,i)})):this.map=null}has(o){return this.init(),this.map.has(o)}get(o){this.init();let e=this.map.get(o);return e?e[0]:null}getAll(o){return this.init(),this.map.get(o)||null}keys(){return this.init(),Array.from(this.map.keys())}append(o,e){return this.clone({param:o,value:e,op:"a"})}appendAll(o){let e=[];return Object.keys(o).forEach(n=>{let i=o[n];Array.isArray(i)?i.forEach(r=>{e.push({param:n,value:r,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(o,e){return this.clone({param:o,value:e,op:"s"})}delete(o,e){return this.clone({param:o,value:e,op:"d"})}toString(){return this.init(),this.keys().map(o=>{let e=this.encoder.encodeKey(o);return this.map.get(o).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(o=>o!=="").join("&")}clone(o){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(o),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(o=>this.map.set(o,this.cloneFrom.map.get(o))),this.updates.forEach(o=>{switch(o.op){case"a":case"s":let e=(o.op==="a"?this.map.get(o.param):void 0)||[];e.push(Lt(o.value)),this.map.set(o.param,e);break;case"d":if(o.value!==void 0){let n=this.map.get(o.param)||[],i=n.indexOf(Lt(o.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(o.param,n):this.map.delete(o.param)}else{this.map.delete(o.param);break}}}),this.cloneFrom=this.updates=null)}};var Pt=class{map=new Map;set(o,e){return this.map.set(o,e),this}get(o){return this.map.has(o)||this.map.set(o,o.defaultValue()),this.map.get(o)}delete(o){return this.map.delete(o),this}has(o){return this.map.has(o)}keys(){return this.map.keys()}};function Tr(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ni(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Pi(t){return typeof Blob<"u"&&t instanceof Blob}function xi(t){return typeof FormData<"u"&&t instanceof FormData}function _r(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Mi="Content-Type",ki="Accept",Bi="X-Request-URL",$i="text/plain",Ui="application/json",Ar=`${Ui}, ${$i}, */*`,Pe=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;keepalive=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(o,e,n,i){this.url=e,this.method=o.toUpperCase();let r;if(Tr(this.method)||i?(this.body=n!==void 0?n:null,r=i):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new ge,this.context??=new Pt,!this.params)this.params=new ie,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let l=e.indexOf("?"),a=l===-1?"?":l<e.length-1?"&":"";this.urlWithParams=e+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ni(this.body)||Pi(this.body)||xi(this.body)||_r(this.body)?this.body:this.body instanceof ie?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||xi(this.body)?null:Pi(this.body)?this.body.type||null:Ni(this.body)?null:typeof this.body=="string"?$i:this.body instanceof ie?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ui:null}clone(o={}){let e=o.method||this.method,n=o.url||this.url,i=o.responseType||this.responseType,r=o.keepalive??this.keepalive,s=o.transferCache??this.transferCache,l=o.body!==void 0?o.body:this.body,a=o.withCredentials??this.withCredentials,u=o.reportProgress??this.reportProgress,c=o.headers||this.headers,d=o.params||this.params,h=o.context??this.context;return o.setHeaders!==void 0&&(c=Object.keys(o.setHeaders).reduce((p,m)=>p.set(m,o.setHeaders[m]),c)),o.setParams&&(d=Object.keys(o.setParams).reduce((p,m)=>p.set(m,o.setParams[m]),d)),new t(e,n,l,{params:d,headers:c,context:h,reportProgress:u,responseType:i,withCredentials:a,transferCache:s,keepalive:r})}},Ee=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Ee||{}),Me=class{headers;status;statusText;url;ok;type;constructor(o,e=200,n="OK"){this.headers=o.headers||new ge,this.status=o.status!==void 0?o.status:e,this.statusText=o.statusText||n,this.url=o.url||null,this.ok=this.status>=200&&this.status<300}},xt=class t extends Me{constructor(o={}){super(o)}type=Ee.ResponseHeader;clone(o={}){return new t({headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},Ze=class t extends Me{body;constructor(o={}){super(o),this.body=o.body!==void 0?o.body:null}type=Ee.Response;clone(o={}){return new t({body:o.body!==void 0?o.body:this.body,headers:o.headers||this.headers,status:o.status!==void 0?o.status:this.status,statusText:o.statusText||this.statusText,url:o.url||this.url||void 0})}},Xe=class extends Me{name="HttpErrorResponse";message;error;ok=!1;constructor(o){super(o,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${o.url||"(unknown url)"}`:this.message=`Http failure response for ${o.url||"(unknown url)"}: ${o.status} ${o.statusText}`,this.error=o.error||null}},Fr=200,Ir=204;function cn(t,o){return{body:o,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache,keepalive:t.keepalive}}var ji=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let r;if(e instanceof Pe)r=e;else{let a;i.headers instanceof ge?a=i.headers:a=new ge(i.headers);let u;i.params&&(i.params instanceof ie?u=i.params:u=new ie({fromObject:i.params})),r=new Pe(e,n,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:u,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive})}let s=kt(r).pipe(yn(a=>this.handler.handle(a)));if(e instanceof Pe||i.observe==="events")return s;let l=s.pipe(bn(a=>a instanceof Ze));switch(i.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(Ue(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Y(2806,!1);return a.body}));case"blob":return l.pipe(Ue(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Y(2807,!1);return a.body}));case"text":return l.pipe(Ue(a=>{if(a.body!==null&&typeof a.body!="string")throw new Y(2808,!1);return a.body}));case"json":default:return l.pipe(Ue(a=>a.body))}case"response":return l;default:throw new Y(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new ie().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,cn(i,n))}post(e,n,i={}){return this.request("POST",e,cn(i,n))}put(e,n,i={}){return this.request("PUT",e,cn(i,n))}static \u0275fac=function(n){return new(n||t)(B(xe))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Or=new L("");function Rr(t,o){return o(t)}function Lr(t,o,e){return(n,i)=>Sn(e,()=>o(n,r=>t(r,i)))}var zi=new L(""),Hi=new L(""),Vi=new L("",{providedIn:"root",factory:()=>!0});var Mt=(()=>{class t extends xe{backend;injector;chain=null;pendingTasks=f(Cn);contributeToStability=f(Vi);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(zi),...this.injector.get(Hi,[])]));this.chain=n.reduceRight((i,r)=>Lr(i,r,this.injector),Rr)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(Dn(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(B(qe),B(En))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Nr=/^\)\]\}',?\n/,Pr=RegExp(`^${Bi}:`,"m");function xr(t){return"responseURL"in t&&t.responseURL?t.responseURL:Pr.test(t.getAllResponseHeaders())?t.getResponseHeader(Bi):null}var dn=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new Y(-2800,!1);e.keepalive;let n=this.xhrFactory;return kt(null).pipe(vn(()=>new mn(r=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((g,y)=>s.setRequestHeader(g,y.join(","))),e.headers.has(ki)||s.setRequestHeader(ki,Ar),!e.headers.has(Mi)){let g=e.detectContentTypeHeader();g!==null&&s.setRequestHeader(Mi,g)}if(e.responseType){let g=e.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let l=e.serializeBody(),a=null,u=()=>{if(a!==null)return a;let g=s.statusText||"OK",y=new ge(s.getAllResponseHeaders()),I=xr(s)||e.url;return a=new xt({headers:y,status:s.status,statusText:g,url:I}),a},c=()=>{let{headers:g,status:y,statusText:I,url:R}=u(),D=null;y!==Ir&&(D=typeof s.response>"u"?s.responseText:s.response),y===0&&(y=D?Fr:0);let oe=y>=200&&y<300;if(e.responseType==="json"&&typeof D=="string"){let Se=D;D=D.replace(Nr,"");try{D=D!==""?JSON.parse(D):null}catch(Ce){D=Se,oe&&(oe=!1,D={error:Ce,text:D})}}oe?(r.next(new Ze({body:D,headers:g,status:y,statusText:I,url:R||void 0})),r.complete()):r.error(new Xe({error:D,headers:g,status:y,statusText:I,url:R||void 0}))},d=g=>{let{url:y}=u(),I=new Xe({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:y||void 0});r.error(I)},h=!1,p=g=>{h||(r.next(u()),h=!0);let y={type:Ee.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),e.responseType==="text"&&s.responseText&&(y.partialText=s.responseText),r.next(y)},m=g=>{let y={type:Ee.UploadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),r.next(y)};return s.addEventListener("load",c),s.addEventListener("error",d),s.addEventListener("timeout",d),s.addEventListener("abort",d),e.reportProgress&&(s.addEventListener("progress",p),l!==null&&s.upload&&s.upload.addEventListener("progress",m)),s.send(l),r.next({type:Ee.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",c),s.removeEventListener("timeout",d),e.reportProgress&&(s.removeEventListener("progress",p),l!==null&&s.upload&&s.upload.removeEventListener("progress",m)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(B(Ke))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Wi=new L(""),Mr="XSRF-TOKEN",kr=new L("",{providedIn:"root",factory:()=>Mr}),Br="X-XSRF-TOKEN",$r=new L("",{providedIn:"root",factory:()=>Br}),Je=class{},Ur=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Xt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(B(N),B(kr))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function jr(t,o){let e=t.url.toLowerCase();if(!f(Wi)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return o(t);let n=f(Je).getToken(),i=f($r);return n!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,n)})),o(t)}function zr(...t){let o=[ji,dn,Mt,{provide:xe,useExisting:Mt},{provide:qe,useFactory:()=>f(Or,{optional:!0})??f(dn)},{provide:zi,useValue:jr,multi:!0},{provide:Wi,useValue:!0},{provide:Je,useClass:Ur}];for(let e of t)o.push(...e.\u0275providers);return ft(o)}export{wt as a,co as b,Gt as c,Tt as d,Un as e,Yt as f,Zt as g,Z as h,Xt as i,Ke as j,yo as k,At as l,Hn as m,ka as n,ji as o,zr as p,w as q,Ga as r,Za as s,Xa as t,ri as u,pe as v,O as w,Fl as x,k as y,un as z,yc as A,Er as B,Dc as C};
