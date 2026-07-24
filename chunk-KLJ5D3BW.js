import{$ as Et,$a as K,Aa as Kn,Ab as ti,Cb as ni,Db as ii,E as jn,Fb as te,Gb as fe,Hb as ge,Ib as ri,J as Hn,Jb as Xe,Kb as qe,Lb as oi,M as J,Mb as si,N as Dt,Na as H,Nb as _t,Oa as Yn,Ob as At,P as D,Pb as ai,Q as G,Qa as Zn,Qb as Y,Ra as Xn,Rb as It,S as E,Sa as St,Sb as Ft,T as j,U as d,Ua as pe,V as vt,Va as V,Vb as z,X as Yt,Xa as Jt,Xb as on,Y as Vn,_a as Z,aa as Oe,ab as F,ba as x,bb as qn,bc as Je,c as Bn,ca as Zt,cb as he,cc as le,d as yt,db as k,ea as Ct,eb as Ae,fa as Xt,gb as Jn,ha as zn,hb as Qn,ia as $,ib as ei,ic as S,jc as sn,k as Kt,ka as Wn,kc as Le,la as L,lb as ae,lc as li,ma as Pe,na as I,nc as w,o as Ye,oc as Qe,pa as ee,rb as P,sb as Qt,ta as Re,tb as en,ub as Ze,vb as tn,wa as Gn,wb as nn,x as $n,xa as qt,xb as rn,yb as wt,z as Un,zb as Tt}from"./chunk-R7Q3L57I.js";import{a as b,b as _e,c as Gt}from"./chunk-IFGU66OU.js";var ui=null;function Ot(){return ui}function Xr(t){ui??=t}var an=class{},Ne=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>d(ci),providedIn:"platform"})}return t})();var ci=(()=>{class t extends Ne{_location;_history;_doc=d(x);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ot().getBaseHref(this._doc)}onPopState(e){let n=Ot().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Ot().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function hi(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function di(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function ve(t){return t&&t[0]!=="?"?`?${t}`:t}var Pt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>d(Jr),providedIn:"root"})}return t})(),qr=new E(""),Jr=(()=>{class t extends Pt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??d(x).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return hi(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+ve(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let s=this.prepareExternalUrl(i+ve(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,o){let s=this.prepareExternalUrl(i+ve(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(j(Ne),j(qr,8))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fi=(()=>{class t{_subject=new yt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=to(di(pi(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+ve(n))}normalize(e){return t.stripTrailingSlash(eo(this._basePath,pi(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ve(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ve(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=ve;static joinWithSlash=hi;static stripTrailingSlash=di;static \u0275fac=function(n){return new(n||t)(j(Pt))};static \u0275prov=D({token:t,factory:()=>Qr(),providedIn:"root"})}return t})();function Qr(){return new fi(j(Pt))}function eo(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function pi(t){return t.replace(/\/index\.html$/,"")}function to(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var ln=/\s+/,gi=[],no=(()=>{class t{_ngEl;_renderer;initialClasses=gi;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(ln):gi}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(ln):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(ln).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||t)(V(ee),V(pe))};static \u0275dir=F({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var dn=(()=>{class t{_viewContainer;_context=new Rt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){mi(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){mi(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(V(Jt),V(St))};static \u0275dir=F({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Rt=class{$implicit=null;ngIf=null};function mi(t,r){if(t&&!t.createEmbeddedView)throw new J(2020,!1)}var pn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,o]=e.split("."),s=i.indexOf("-")===-1?void 0:Yn.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(V(ee),V(li),V(pe))};static \u0275dir=F({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),hn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(Oe);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(V(Jt))};static \u0275dir=F({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Pe]})}return t})();function io(t,r){return new J(2100,!1)}var un=class{createSubscription(r,e,n){return Je(()=>r.subscribe({next:e,error:n}))}dispose(r){Je(()=>r.unsubscribe())}},cn=class{createSubscription(r,e,n){return r.then(i=>e?.(i),i=>n?.(i)),{unsubscribe:()=>{e=null,n=null}}}dispose(r){r.unsubscribe()}},ro=new cn,oo=new un,so=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=d(zn);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Jn(e))return ro;if(Qn(e))return oo;throw io(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(V(Le,16))};static \u0275pipe=qn({name:"async",type:t,pure:!1})}return t})();var ue=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({})}return t})();function fn(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var et=class{};var lo="browser",uo="server";function Me(t){return t===lo}function mn(t){return t===uo}var Rl=(()=>{class t{static \u0275prov=D({token:t,providedIn:"root",factory:()=>new gn(d(x),window)})}return t})(),gn=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r,e){this.window.scrollTo(_e(b({},e),{left:r[0],top:r[1]}))}scrollToAnchor(r,e){let n=co(this.document,r);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(r){try{this.window.history.scrollRestoration=r}catch{console.warn(Dt(2400,!1))}}scrollToElement(r,e){let n=r.getBoundingClientRect(),i=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(_e(b({},e),{left:i-s[0],top:o-s[1]}))}};function co(t,r){let e=t.getElementById(r)||t.getElementsByName(r)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let o=i.shadowRoot;if(o){let s=o.getElementById(r)||o.querySelector(`[name="${r}"]`);if(s)return s}i=n.nextNode()}}return null}var Di=t=>t.src,po=new E("",{factory:()=>Di});var bi=/^((\s*\d+w\s*(,|$)){1,})$/;var ho=[1,2],fo=640;var go=1920,mo=1080;var Ll=(()=>{class t{imageLoader=d(po);config=bo(d(qt));renderer=d(pe);imgElement=d(ee).nativeElement;injector=d(Oe);destroyRef=d(Zt);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){Xn("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&bi.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let n=e;this.loaderParams&&(n.loaderParams=this.loaderParams);let i=this.getAspectRatio();return i!==null&&n.width&&(n.height=Math.round(n.width/i)),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=bi.test(this.ngSrcset);return this.ngSrcset.split(",").filter(i=>i!=="").map(i=>{i=i.trim();let o=e?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${i}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(o=>o>=fo)),n.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i&&this.setHostAttribute("srcset",i),i}getFixedSrcset(){return ho.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>go||this.height>mo),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Di&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url("${yi(this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0}))}")`:typeof e=="string"?`url("${yi(e)}")`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let s=this.injector.get(Le);i(),o(),this.placeholder=!1,s.markForCheck()},i=this.renderer.listen(e,"load",n),o=this.renderer.listen(e,"error",n);this.destroyRef.onDestroy(()=>{i(),o()}),yo(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,i){n&2&&_t("position",i.fill?"absolute":null)("width",i.fill?"100%":null)("height",i.fill?"100%":null)("inset",i.fill?"0":null)("background-size",i.placeholder?"cover":null)("background-position",i.placeholder?"50% 50%":null)("background-repeat",i.placeholder?"no-repeat":null)("background-image",i.placeholder?i.generatePlaceholder(i.placeholder):null)("filter",i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",Do],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",Qe],height:[2,"height","height",Qe],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",w],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",w],fill:[2,"fill","fill",w],placeholder:[2,"placeholder","placeholder",vo],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[Pe]})}return t})();function bo(t){let r={};return t.breakpoints&&(r.breakpoints=t.breakpoints.sort((e,n)=>e-n)),Object.assign({},Gn,t,r)}function yo(t,r){t.complete&&t.naturalWidth&&r()}function Do(t){return typeof t=="string"?t:Kn(t)}function yi(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function vo(t){return typeof t=="string"&&t!=="true"&&t!=="false"&&t!==""?t:w(t)}function Ee(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")r.push(n);else if(i==="object"){let o=Array.isArray(n)?[Ee(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);r=o.length?r.concat(o.filter(s=>!!s)):r}}return r.join(" ").trim()}}function ce(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function bn(t,r,e=new WeakSet){if(t===r)return!0;if(!t||!r||typeof t!="object"||typeof r!="object"||e.has(t)||e.has(r))return!1;e.add(t).add(r);let n=Array.isArray(t),i=Array.isArray(r),o,s,a;if(n&&i){if(s=t.length,s!=r.length)return!1;for(o=s;o--!==0;)if(!bn(t[o],r[o],e))return!1;return!0}if(n!=i)return!1;let l=t instanceof Date,u=r instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==r.getTime();let c=t instanceof RegExp,p=r instanceof RegExp;if(c!=p)return!1;if(c&&p)return t.toString()==r.toString();let f=Object.keys(t);if(s=f.length,s!==Object.keys(r).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,f[o]))return!1;for(o=s;o--!==0;)if(a=f[o],!bn(t[a],r[a],e))return!1;return!0}function Co(t,r){return bn(t,r)}function Lt(t){return typeof t=="function"&&"call"in t&&"apply"in t}function T(t){return!ce(t)}function vi(t,r){if(!t||!r)return null;try{let e=t[r];if(T(e))return e}catch{}if(Object.keys(t).length){if(Lt(r))return r(t);if(r.indexOf(".")===-1)return t[r];{let e=r.split("."),n=t;for(let i=0,o=e.length;i<o;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function Ei(t,r,e){return e?vi(t,e)===vi(r,e):Co(t,r)}function me(t,r=!0){return t instanceof Object&&t.constructor===Object&&(r||Object.keys(t).length!==0)}function R(t,...r){return Lt(t)?t(...r):t}function Q(t,r=!0){return typeof t=="string"&&(r||t!=="")}function Ce(t){return Q(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Nt(t,r="",e={}){let n=Ce(r).split("."),i=n.shift();if(i){if(me(t)){let o=Object.keys(t).find(s=>Ce(s)===i)||"";return Nt(R(t[o],e),n.join("."),e)}return}return R(t,e)}function yn(t,r=!0){return Array.isArray(t)&&(r||t.length!==0)}function Ci(t){return T(t)&&!isNaN(t)}function ne(t,r){if(r){let e=r.test(t);return r.lastIndex=0,e}return!1}function Ie(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Mt(t){return Q(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function Si(t,r){return t?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}function nt(t,r){if(t&&r){let e=n=>{Si(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function xe(t,r){if(t&&r){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function wi(t){for(let r of document?.styleSheets)try{for(let e of r?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function jl(){let t=window,r=document,e=r.documentElement,n=r.getElementsByTagName("body")[0],i=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:i,height:o}}function Dn(t){return t?Math.abs(t.scrollLeft):0}function Hl(){let t=document.documentElement;return(window.pageXOffset||Dn(t))-(t.clientLeft||0)}function Vl(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Ti(t,r){if(t instanceof HTMLElement){let e=t.offsetWidth;if(r){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function So(t){if(t){let r=t.parentNode;return r&&r instanceof ShadowRoot&&r.host&&(r=r.host),r}return null}function wo(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&So(t))}function tt(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function _i(t){if(tt(t))return t;if(!t||typeof t!="object")return;let r=t;return r=t.nativeElement,r=R(r),tt(r)?r:void 0}function To(t,r){var e,n,i;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return r?.nextElementSibling;case"@prev":return r?.previousElementSibling;case"@first":return r?.firstElementChild;case"@last":return r?.lastElementChild;case"@child":return(e=r?.children)==null?void 0:e[0];case"@parent":return r?.parentElement;case"@grandparent":return(n=r?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((i=r?.children)==null?void 0:i[parseInt(a[1],10)])||null:document.querySelector(t)||null}let o=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=_i(o);return wo(s)?s:o?.nodeType===9?o:void 0}}}function Wl(t,r){let e=To(t,r);if(e)e.appendChild(r);else throw new Error("Cannot append "+r+" to "+t)}function xt(t,r={}){if(tt(t)){let e=(i,o)=>{var s,a;let l=(s=t?.$attrs)!=null&&s[i]?[(a=t?.$attrs)==null?void 0:a[i]]:[];return[o].flat().reduce((u,c)=>{if(c!=null){let p=typeof c;if(p==="string"||p==="number")u.push(c);else if(p==="object"){let f=Array.isArray(c)?e(i,c):Object.entries(c).map(([h,m])=>i==="style"&&(m||m===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?h:void 0);u=f.length?u.concat(f.filter(h=>!!h)):u}}return u},l)},n=i=>{e("style",i).forEach(o=>{let s=o.indexOf(":");if(s<0)return;let a=o.slice(0,s).trim(),l=o.slice(s+1).trim();a&&t.style.setProperty(a,l)})};Object.entries(r).forEach(([i,o])=>{if(o!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),o):i==="p-bind"||i==="pBind"?xt(t,o):i==="style"?(n(o),(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=t.style.cssText)):(o=i==="class"?[...new Set(e("class",o))].join(" ").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=o),t.setAttribute(i,o))}})}}function kt(t,r={},...e){if(t){let n=document.createElement(t);return xt(n,r),n.append(...e),n}}function Gl(t,r){if(t){t.style.opacity="0";let e=+new Date,n="0",i=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/r}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(i):setTimeout(i,16))};i()}}function ke(t,r){return tt(t)?t.matches(r)?t:t.querySelector(r):null}function vn(t){if(t){let r=t.offsetHeight,e=getComputedStyle(t);return r-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),r}return 0}function Ai(t){if(t){let r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||Dn(document.documentElement)||Dn(document.body)||0)}}return{top:"auto",left:"auto"}}function Ii(t,r){if(t){let e=t.offsetHeight;if(r){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function En(t){if(t){let r=t.offsetWidth,e=getComputedStyle(t);return r-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),r}return 0}function Fi(t){var r;t&&("remove"in Element.prototype?t.remove():(r=t.parentNode)==null||r.removeChild(t))}function Kl(t,r){let e=_i(t);if(e)e.removeChild(r);else throw new Error("Cannot remove "+r+" from "+t)}function Oi(t,r="",e){if(tt(t)&&e!==null&&e!==void 0){if(r==="style"){typeof e=="string"?t.style.cssText=e:typeof e=="object"&&Object.entries(e).forEach(([n,i])=>{if(i==null)return;let o=n.startsWith("--")?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();t.style.setProperty(o,String(i))});return}t.setAttribute(r,e)}}function Pi(){let t=new Map;return{on(r,e){let n=t.get(r);return n?n.push(e):n=[e],t.set(r,n),this},off(r,e){let n=t.get(r);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(r,e){let n=t.get(r);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}var _o=Object.defineProperty,Ri=Object.getOwnPropertySymbols,Ao=Object.prototype.hasOwnProperty,Io=Object.prototype.propertyIsEnumerable,Li=(t,r,e)=>r in t?_o(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Ni=(t,r)=>{for(var e in r||(r={}))Ao.call(r,e)&&Li(t,e,r[e]);if(Ri)for(var e of Ri(r))Io.call(r,e)&&Li(t,e,r[e]);return t};function Mi(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")r.push(n);else if(i==="object"){let o=Array.isArray(n)?[Mi(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);r=o.length?r.concat(o.filter(s=>!!s)):r}}return r.join(" ").trim()}}function Fo(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Oo({skipUndefined:t=!1},...r){return r?.reduce((e,n={})=>{for(let i in n){let o=n[i];if(!(t&&o===void 0))if(i==="style")e.style=Ni(Ni({},e.style),n.style);else if(i==="class"||i==="className")e[i]=Mi(e[i],n[i]);else if(Fo(o)){let s=e[i];e[i]=s?(...a)=>{s(...a),o(...a)}:o}else e[i]=o}return e},{})}function Cn(...t){return Oo({skipUndefined:!1},...t)}var Bt={};function it(t="pui_id_"){return Object.hasOwn(Bt,t)||(Bt[t]=0),Bt[t]++,`${t}${Bt[t]}`}var xi=["*"];var B=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Ql=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Z({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:xi,decls:1,vars:0,template:function(n,i){n&1&&(fe(),ge(0))},encapsulation:2})}return t})(),eu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Z({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:xi,decls:1,vars:0,template:function(n,i){n&1&&(fe(),ge(0))},encapsulation:2})}return t})(),ki=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(V(St))};static \u0275dir=F({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Se=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({imports:[ue]})}return t})();var Po=Object.defineProperty,Ro=Object.defineProperties,Lo=Object.getOwnPropertyDescriptors,$t=Object.getOwnPropertySymbols,Ui=Object.prototype.hasOwnProperty,ji=Object.prototype.propertyIsEnumerable,Bi=(t,r,e)=>r in t?Po(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,re=(t,r)=>{for(var e in r||(r={}))Ui.call(r,e)&&Bi(t,e,r[e]);if($t)for(var e of $t(r))ji.call(r,e)&&Bi(t,e,r[e]);return t},Sn=(t,r)=>Ro(t,Lo(r)),be=(t,r)=>{var e={};for(var n in t)Ui.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&$t)for(var n of $t(t))r.indexOf(n)<0&&ji.call(t,n)&&(e[n]=t[n]);return e};var No=Pi(),X=No,rt=/{([^}]*)}/g,Hi=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Vi=/var\([^)]+\)/g;function $i(t){return Q(t)?t.replace(/[A-Z]/g,(r,e)=>e===0?r:"."+r.toLowerCase()).toLowerCase():t}function Mo(t){return me(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function xo(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function wn(t="",r=""){return xo(`${Q(t,!1)&&Q(r,!1)?`${t}-`:t}${r}`)}function zi(t="",r=""){return`--${wn(t,r)}`}function ko(t=""){let r=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(r+e)%2!==0}function Wi(t,r="",e="",n=[],i){if(Q(t)){let o=t.trim();if(ko(o))return;if(ne(o,rt)){let s=o.replaceAll(rt,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>ne(u,c)));return`var(${zi(e,Mt(l.join("-")))}${T(i)?`, ${i}`:""})`});return ne(s.replace(Vi,"0"),Hi)?`calc(${s})`:s}return o}else if(Ci(t))return t}function Bo(t,r,e){Q(r,!1)&&t.push(`${r}:${e};`)}function Be(t,r){return t?`${t}{${r}}`:""}function Gi(t,r){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,c="",p=null,f=0;for(;u<=s.length;){let h=s[u];if((h==='"'||h==="'"||h==="`")&&s[u-1]!=="\\"&&(p=p===h?null:h),!p&&(h==="("&&f++,h===")"&&f--,(h===","||u===s.length)&&f===0)){let m=c.trim();m.startsWith("dt(")?l.push(Gi(m,a)):l.push(n(m)),c="",u++;continue}h!==void 0&&(c+=h),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let i=[],o=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")o.push(s),s+=2;else if(t[s]===")"&&o.length>0){let a=o.pop();o.length===0&&i.push([a,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[a,l]=i[s],u=t.slice(a+3,l),c=e(u,r),p=r(...c);t=t.slice(0,a)+p+t.slice(l+1)}return t}var ye=(...t)=>$o(_.getTheme(),...t),$o=(t={},r,e,n)=>{if(r){let{variable:i,options:o}=_.defaults||{},{prefix:s,transform:a}=t?.options||o||{},l=ne(r,rt)?r:`{${r}}`;return n==="value"||ce(n)&&a==="strict"?_.getTokenValue(r):Wi(l,void 0,s,[i.excludedKeyRegex],e)}return""};function $e(t,...r){if(t instanceof Array){let e=t.reduce((n,i,o)=>{var s;return n+i+((s=R(r[o],{dt:ye}))!=null?s:"")},"");return Gi(e,ye)}return R(t,{dt:ye})}function Uo(t,r={}){let e=_.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=r,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:p}=l.pop();for(let f in c){let h=c[f],m=Mo(h),v=ne(f,o)?wn(p):wn(p,Mt(f));if(me(m))l.push({node:m,path:v});else{let g=zi(v),y=Wi(m,v,n,[o]);Bo(a,g,y);let C=v;n&&C.startsWith(n+"-")&&(C=C.slice(n.length+1)),s.push(C.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Be(i,u)}}var ie={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let r=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=r.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,r){return Uo(t,{prefix:r?.prefix})},getCommon({name:t="",theme:r={},params:e,set:n,defaults:i}){var o,s,a,l,u,c,p;let{preset:f,options:h}=r,m,v,g,y,C,O,A;if(T(f)&&h.transform!=="strict"){let{primitive:oe,semantic:se,extend:q}=f,We=se||{},{colorScheme:st}=We,at=be(We,["colorScheme"]),lt=q||{},{colorScheme:ut}=lt,Ge=be(lt,["colorScheme"]),Ke=st||{},{dark:ct}=Ke,dt=be(Ke,["dark"]),pt=ut||{},{dark:ht}=pt,ft=be(pt,["dark"]),gt=T(oe)?this._toVariables({primitive:oe},h):{},mt=T(at)?this._toVariables({semantic:at},h):{},bt=T(dt)?this._toVariables({light:dt},h):{},Nn=T(ct)?this._toVariables({dark:ct},h):{},Mn=T(Ge)?this._toVariables({semantic:Ge},h):{},xn=T(ft)?this._toVariables({light:ft},h):{},kn=T(ht)?this._toVariables({dark:ht},h):{},[Rr,Lr]=[(o=gt.declarations)!=null?o:"",gt.tokens],[Nr,Mr]=[(s=mt.declarations)!=null?s:"",mt.tokens||[]],[xr,kr]=[(a=bt.declarations)!=null?a:"",bt.tokens||[]],[Br,$r]=[(l=Nn.declarations)!=null?l:"",Nn.tokens||[]],[Ur,jr]=[(u=Mn.declarations)!=null?u:"",Mn.tokens||[]],[Hr,Vr]=[(c=xn.declarations)!=null?c:"",xn.tokens||[]],[zr,Wr]=[(p=kn.declarations)!=null?p:"",kn.tokens||[]];m=this.transformCSS(t,Rr,"light","variable",h,n,i),v=Lr;let Gr=this.transformCSS(t,`${Nr}${xr}`,"light","variable",h,n,i),Kr=this.transformCSS(t,`${Br}`,"dark","variable",h,n,i);g=`${Gr}${Kr}`,y=[...new Set([...Mr,...kr,...$r])];let Yr=this.transformCSS(t,`${Ur}${Hr}color-scheme:light`,"light","variable",h,n,i),Zr=this.transformCSS(t,`${zr}color-scheme:dark`,"dark","variable",h,n,i);C=`${Yr}${Zr}`,O=[...new Set([...jr,...Vr,...Wr])],A=R(f.css,{dt:ye})}return{primitive:{css:m,tokens:v},semantic:{css:g,tokens:y},global:{css:C,tokens:O},style:A}},getPreset({name:t="",preset:r={},options:e,params:n,set:i,defaults:o,selector:s}){var a,l,u;let c,p,f;if(T(r)&&e.transform!=="strict"){let h=t.replace("-directive",""),m=r,{colorScheme:v,extend:g,css:y}=m,C=be(m,["colorScheme","extend","css"]),O=g||{},{colorScheme:A}=O,oe=be(O,["colorScheme"]),se=v||{},{dark:q}=se,We=be(se,["dark"]),st=A||{},{dark:at}=st,lt=be(st,["dark"]),ut=T(C)?this._toVariables({[h]:re(re({},C),oe)},e):{},Ge=T(We)?this._toVariables({[h]:re(re({},We),lt)},e):{},Ke=T(q)?this._toVariables({[h]:re(re({},q),at)},e):{},[ct,dt]=[(a=ut.declarations)!=null?a:"",ut.tokens||[]],[pt,ht]=[(l=Ge.declarations)!=null?l:"",Ge.tokens||[]],[ft,gt]=[(u=Ke.declarations)!=null?u:"",Ke.tokens||[]],mt=this.transformCSS(h,`${ct}${pt}`,"light","variable",e,i,o,s),bt=this.transformCSS(h,ft,"dark","variable",e,i,o,s);c=`${mt}${bt}`,p=[...new Set([...dt,...ht,...gt])],f=R(y,{dt:ye})}return{css:c,tokens:p,style:f}},getPresetC({name:t="",theme:r={},params:e,set:n,defaults:i}){var o;let{preset:s,options:a}=r,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:r={},params:e,set:n,defaults:i}){var o,s;let a=t.replace("-directive",""),{preset:l,options:u}=r,c=((o=l?.components)==null?void 0:o[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,r){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?r.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:r.options.darkModeSelector):[]},getLayerOrder(t,r={},e,n){let{cssLayer:i}=r;return i?`@layer ${R(i.order||i.name||"optimus",e)}`:""},getCommonStyleSheet({name:t="",theme:r={},params:e,props:n={},set:i,defaults:o}){let s=this.getCommon({name:t,theme:r,params:e,set:i,defaults:o}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(me(c)&&Object.hasOwn(c,"css")){let p=Ie(c.css),f=`${u}-variables`;l.push(`<style type="text/css" data-optimus-style-id="${f}" ${a}>${p}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:r={},params:e,props:n={},set:i,defaults:o}){var s;let a={name:t,theme:r,params:e,set:i,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[p,f])=>c.push(`${p}="${f}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-optimus-style-id="${t}-variables" ${u}>${Ie(l)}</style>`:""},createTokens(t={},r,e="",n="",i={}){let o=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&rt.test(this.value)){let p=this.value.trim().replace(rt,f=>{var h;let m=f.slice(1,-1),v=this.tokens[m];if(!v)return console.warn(`Token not found for path: ${m}`),"__UNRESOLVED__";let g=v.computed(a,l,u);return Array.isArray(g)&&g.length===2?`light-dark(${g[0].value},${g[1].value})`:(h=g?.value)!=null?h:"__UNRESOLVED__"});c=Hi.test(p.replace(Vi,"0"))?`calc(${p})`:p}return ce(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,p])=>{let f=ne(c,r.variable.excludedKeyRegex)?l:l?`${l}.${$i(c)}`:$i(c),h=u?`${u}.${c}`:c;me(p)?s(p,f,h):(i[f]||(i[f]={paths:[],computed:(m,v={},g=[])=>{if(i[f].paths.length===1)return i[f].paths[0].computed(i[f].paths[0].scheme,v.binding,g);if(m&&m!=="none")for(let y=0;y<i[f].paths.length;y++){let C=i[f].paths[y];if(C.scheme===m)return C.computed(m,v.binding,g)}return i[f].paths.map(y=>y.computed(y.scheme,v[y.scheme],g))}}),i[f].paths.push({path:h,value:p,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:o,tokens:i}))})};return s(t,e,n),i},getTokenValue(t,r,e){var n;let i=(a=>a.split(".").filter(l=>!ne(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(r),o=r.includes("colorScheme.light")?"light":r.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[i])==null?void 0:n.computed(o)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,p=be(u,["colorScheme"]);return a[c]=p,a},void 0)},getSelectorRule(t,r,e,n){return e==="class"||e==="attr"?Be(T(r)?`${t}${r},${t} ${r}`:t,n):Be(t,Be(r??":root,:host",n))},transformCSS(t,r,e,n,i={},o,s,a){if(T(r)){let{cssLayer:l}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);r=e==="dark"?u.reduce((c,{type:p,selector:f})=>(T(f)&&(c+=f.includes("[CSS]")?f.replace("[CSS]",r):this.getSelectorRule(f,a,p,r)),c),""):Be(a??":root,:host",r)}if(l){let u={name:"optimus",order:"optimus"};me(l)&&(u.name=R(l.name,{name:t,type:n})),T(u.name)&&(r=Be(`@layer ${u.name}`,r),o?.layerNames(u.name))}return r}return""}},_={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:r}=t;r&&(this._theme=Sn(re({},r),{options:re(re({},this.defaults.options),r.options)}),this._tokens=ie.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),X.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Sn(re({},this.theme),{preset:t}),this._tokens=ie.createTokens(t,this.defaults),this.clearLoadedStyleNames(),X.emit("preset:change",t),X.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Sn(re({},this.theme),{options:t}),this.clearLoadedStyleNames(),X.emit("options:change",t),X.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ie.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",r){return ie.getCommon({name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ie.getPresetC(e)},getDirective(t="",r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ie.getPresetD(e)},getCustomPreset(t="",r,e,n){let i={name:t,preset:r,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ie.getPreset(i)},getLayerOrderCSS(t=""){return ie.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",r,e="style",n){return ie.transformCSS(t,r,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",r,e={}){return ie.getCommonStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,r,e={}){return ie.getStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:r}){this._loadingStyles.size&&(this._loadingStyles.delete(r),X.emit(`theme:${r}:load`,t),!this._loadingStyles.size&&X.emit("theme:load"))}};var Ki=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
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
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var jo=0,Yi=(()=>{class t{document=d(x);use(e,n={}){let i=!1,o=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++jo}`,id:c=void 0,media:p=void 0,nonce:f=void 0,first:h=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-optimus-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),s){if(!s.isConnected){o=e;let v=this.document.head;Oi(s,"nonce",f),h&&v.firstChild?v.insertBefore(s,v.firstChild):v.appendChild(s),xt(s,{type:"text/css",media:p,nonce:f,"data-optimus-style-id":u})}s.textContent!==o&&(s.textContent=o)}return{id:c,name:u,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ue={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ho=`
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
`,U=(()=>{class t{name="base";useStyle=d(Yi);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},i=o=>o)=>{let o=i($e`${R(e,{dt:ye})}`);return o?this.useStyle.use(Ie(o),b({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(i="")=>_.transformCSS(e.name||this.name,`${i}${$e`${n}`}`));loadBaseCSS=(e={})=>this.load(Ho,e);loadBaseStyle=(e={},n="")=>this.load(Ki,e,(i="")=>_.transformCSS(e.name||this.name,`${i}${$e`${n}`}`));getCommonTheme=e=>_.getCommon(this.name,e);getComponentTheme=e=>_.getComponent(this.name,e);getPresetTheme=(e,n,i)=>_.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>_.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=R(this.css,{dt:ye}),o=Ie($e`${i}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-optimus-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>_.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[_.getStyleSheet(this.name,e,n)];if(this.style){let o=this.name==="base"?"global-style":`${this.name}-style`,s=$e`${R(this.style,{dt:ye})}`,a=Ie(_.transformCSS(o,s)),l=Object.entries(n).reduce((u,[c,p])=>u.push(`${c}="${p}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-optimus-style-id="${o}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vo=(()=>{class t{theme=$(void 0);csp=$({nonce:void 0});isThemeChanged=!1;document=d(x);baseStyle=d(U);constructor(){L(()=>{X.on("theme:change",e=>{Je(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),L(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){_.clearLoadedStyleNames(),X.clear()}onThemeChange(e){_.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!_.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,b({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,b({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(b({name:"global-style"},s),o),_.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Tn=(()=>{class t extends Vo{ripple=$(!1);platformId=d(Re);inputStyle=$(null);inputVariant=$(null);overlayAppendTo=$("self");overlayOptions={};csp=$({nonce:void 0});unstyled=$(void 0);pt=$(void 0);ptOptions=$(void 0);filterMatchModeOptions={text:[B.STARTS_WITH,B.CONTAINS,B.NOT_CONTAINS,B.ENDS_WITH,B.EQUALS,B.NOT_EQUALS],numeric:[B.EQUALS,B.NOT_EQUALS,B.LESS_THAN,B.LESS_THAN_OR_EQUAL_TO,B.GREATER_THAN,B.GREATER_THAN_OR_EQUAL_TO],date:[B.DATE_IS,B.DATE_IS_NOT,B.DATE_BEFORE,B.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new yt;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=b(b({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:o,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:p,zIndex:f,ptOptions:h,pt:m,unstyled:v}=e||{};n&&this.csp.set(n),p&&this.overlayAppendTo.set(p),i&&this.ripple.set(i),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),f&&(this.zIndex=f),m&&this.pt.set(m),h&&this.ptOptions.set(h),v&&this.unstyled.set(v),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zo=new E("OPTIMUS_CONFIG");function Ou(...t){let r=t?.map(n=>({provide:zo,useValue:n,multi:!1})),e=ei(()=>{let n=d(Tn);t?.forEach(i=>n.setConfig(i))});return vt([...r,e])}var Zi=(()=>{class t extends U{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),de=new E("PARENT_INSTANCE"),W=(()=>{class t{document=d(x);platformId=d(Re);el=d(ee);injector=d(Oe);cd=d(Le);renderer=d(pe);config=d(Tn);$parentInstance=d(de,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=d(Zi);baseStyle=d(U);scopedStyleEl;parent=this.$params.parent;cn=Ee;_themeScopedListener;themeChangeListenerMap=new Map;dt=S();unstyled=S();pt=S();ptOptions=S();$attrSelector=it("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=$(void 0);directiveUnstyled=$(void 0);$unstyled=le(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=le(()=>R(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>R(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||R(e,this.$params))}get $style(){return b(b({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){L(e=>{this.document&&!mn(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),L(e=>{this.document&&!mn(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return Lt(e)?e(...n):Cn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",i={}){return Nt(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),o=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),o?.(...n)}}_load(){Ue.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),Ue.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);T(e)&&this.baseStyle.load(e,b({name:"global"},this.$styleOptions))}_loadCoreStyles(){!Ue.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),Ue.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!_.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:o}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,b({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,b({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(b({name:"global-style"},this.$styleOptions),o),_.setLoadedStyleName("common")}if(!_.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,b({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(b({name:`${this.$style?.name}-style`},this.$styleOptions),n),_.setLoadedStyleName(this.$style?.name)}if(!_.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,b({name:"layer-order",first:!0},this.$styleOptions)),_.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,b({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),Ue.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),X.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(X.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",i={},o=!0){let s=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=o?s?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,c=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,_e(b({},i),{global:u||{}})),p=this._getPTDatasets(n);return a||!a&&c?l?this._mergeProps(l,u,c,p):b(b(b({},u),c),p):b(b({},c),p)}_getPTDatasets(e=""){let n="data-pc-",i=e==="root"&&T(this.$pt()?.["data-pc-section"]);return e!=="transition"&&_e(b({},e==="root"&&_e(b({[`${n}name`]:Ce(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:Ce(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:Ce(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,i){let o=this._getOptionValue(e,n,i);return Q(o)||yn(o)?{class:o}:o}_getPT(e,n="",i){let o=(s,a=!1)=>{let l=i?i(s):s,u=Ce(n),c=Ce(this.$hostName||this.$name);return(a?u!==c?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)}_usePT(e,n,i,o){let s=a=>n?.call(this,a,i,o);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),c=s(e.value);return u===void 0&&c===void 0?void 0:Q(c)?c:Q(u)?u:a||!a&&c?l?this._mergeProps(l,u,c):b(b({},u),c):c}return s(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,b(b({},this.$params),n))}ptms(e,n={}){return e.reduce((i,o)=>(i=Cn(i,this.ptm(o,n))||{},i),{})}ptmo(e={},n="",i={}){return this._getPTValue(e,n,b({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:Ee(this._getOptionValue(this.$style.classes,e,b(b({},this.$params),n)))}sx(e="",n=!0,i={}){if(n){let o=this._getOptionValue(this.$style.inlineStyles,e,b(b({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,b(b({},this.$params),i));return b(b({},s),o)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[z([Zi,U]),Pe]})}return t})();var _n=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let o=0;o<i.length;o++)e.classList.add(i[o])}else{let i=n.split(" ");for(let o=0;o<i.length;o++)e.className+=" "+i[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var o=0;o<n.length;o++){if(n[o]==e)return i;n[o].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<i.length;s++){if(i[s]==e)return o;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let o=O=>{if(O)return getComputedStyle(O).getPropertyValue("position")==="relative"?O:o(O.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),p=this.getViewport(),h=o(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},m,v,g="top";l.top+a+s.height>p.height?(m=l.top-h.top-s.height,g="bottom",l.top+m<0&&(m=-1*l.top)):(m=a+l.top-h.top,g="top");let y=l.left+s.width-p.width,C=l.left-h.left;if(s.width>p.width?v=(l.left-h.left)*-1:y>0?v=C-y:v=l.left-h.left,e.style.top=m+"px",e.style.left=v+"px",e.style.transformOrigin=g,i){let O=wi(/-anchor-gutter$/)?.value;e.style.marginTop=g==="bottom"?`calc(${O??"2px"} * -1)`:O??""}}static absolutePosition(e,n,i=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,a=o.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),p=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),h=this.getViewport(),m,v;c.top+l+s>h.height?(m=c.top+p-s,e.style.transformOrigin="bottom",m<0&&(m=p)):(m=l+c.top+p,e.style.transformOrigin="top"),c.left+a>h.width?v=Math.max(0,c.left+f+u-a):v=c.left+f,e.style.top=m+"px",e.style.left=v+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),o=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return o.test(l.getPropertyValue("overflow"))||o.test(l.getPropertyValue("overflowX"))||o.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let p=this.findSingle(a,c);p&&s(p)&&n.push(p)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-o-a,p=e.scrollTop,f=e.clientHeight,h=this.getOuterHeight(n);c<0?e.scrollTop=p+c:c+h>f&&(e.scrollTop=p+c-f+h)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=o,i=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,o=50,s=n,a=o/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||o.clientWidth,a=e.innerHeight||i.clientHeight||o.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let o=getComputedStyle(i);if(this.isVisible(i)&&o.display!="none"&&o.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),o=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?o=i.length-1:o=s-1:s!=-1&&s!==i.length-1&&(o=s+1)}return i[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...i),o}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(o,s)=>{let a=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let p=Array.isArray(u)?i(o,u):Object.entries(u).map(([f,h])=>o==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);l=p.length?l.concat(p.filter(f=>!!f)):l}}return l},a)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let a=o.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(i("class",s))].join(" ").trim():o==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var Xi=class{element;listener;scrollableParents;constructor(r,e=()=>{}){this.element=r,this.listener=e}bindScrollListener(){this.scrollableParents=_n.getScrollableParents(this.element);for(let r=0;r<this.scrollableParents.length;r++)this.scrollableParents[r].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let r=0;r<this.scrollableParents.length;r++)this.scrollableParents[r].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var qi=(()=>{class t extends W{autofocus=!1;focused=!1;platformId=d(Re);document=d(x);host=d(ee);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Me(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=_n.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=F({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[k]})}return t})();var N=(()=>{class t{el;renderer;pBind=S(void 0);_attrs=$(void 0);attrs=le(()=>this._attrs()||this.pBind());styles=le(()=>this.attrs()?.style);classes=le(()=>Ee(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,L(()=>{let a=this.attrs()||{},{style:i,class:o}=a,s=Gt(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let c=l.slice(2).toLowerCase();if(!this.listeners.some(p=>p.eventName===c)){let p=this.renderer.listen(this.el.nativeElement,c,u);this.listeners.push({eventName:c,unlisten:p})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Ei(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(V(ee),V(pe))};static \u0275dir=F({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(ai(i.styles()),Y(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),Ji=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({})}return t})();var Qi=`
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
`;var Wo=`
    ${Qi}

    /* For Optimus (directive)*/
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
`,Go={root:({instance:t})=>{let r=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":T(r)&&String(r).length===1,"p-badge-dot":ce(r),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},er=(()=>{class t extends U{name="badge";style=Wo;classes=Go;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var tr=new E("BADGE_INSTANCE");var In=(()=>{class t extends W{componentName="Badge";$pcBadge=d(tr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=S();badgeSize=S();size=S();severity=S();value=S();badgeDisabled=S(!1,{transform:w});_componentStyle=d(er);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=Z({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(ae("data-p",i.dataP),Y(i.cn(i.cx("root"),i.styleClass())),_t("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[z([er,{provide:tr,useExisting:t},{provide:de,useExisting:t}]),he([N]),k],decls:1,vars:1,template:function(n,i){n&1&&It(0),n&2&&Ft(i.value())},dependencies:[ue,Se,Ji],encapsulation:2,changeDetection:0})}return t})(),nr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({imports:[In,Se,Se]})}return t})();var Yo=["*"],Zo={root:"p-fluid"},ir=(()=>{class t extends U{name="fluid";classes=Zo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var rr=new E("FLUID_INSTANCE"),Fn=(()=>{class t extends W{componentName="Fluid";$pcFluid=d(rr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(N,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=d(ir);static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=Z({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&Y(i.cx("root"))},features:[z([ir,{provide:rr,useExisting:t},{provide:de,useExisting:t}]),he([N]),k],ngContentSelectors:Yo,decls:1,vars:0,template:function(n,i){n&1&&(fe(),ge(0))},dependencies:[ue],encapsulation:2,changeDetection:0})}return t})();var Xo=["*"],qo=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
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
`,or=(()=>{class t extends U{name="baseicon";css=qo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sr=(()=>{class t extends W{spin=!1;_componentStyle=d(or);getClassNames(){return Ee("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=Z({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&Y(i.getClassNames())},inputs:{spin:[2,"spin","spin",w]},features:[z([or]),k],ngContentSelectors:Xo,decls:1,vars:0,template:function(n,i){n&1&&(fe(),ge(0))},encapsulation:2,changeDetection:0})}return t})();var Jo=["data-p-icon","spinner"],ar=(()=>{class t extends sr{pathId;onInit(){this.pathId="url(#"+it()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=Z({type:t,selectors:[["","data-p-icon","spinner"]],features:[k],attrs:Jo,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Et(),tn(0,"g"),rn(1,"path",0),nn(),tn(2,"defs")(3,"clipPath",1),rn(4,"rect",2),nn()()),n&2&&(ae("clip-path",i.pathId),H(3),ni("id",i.pathId))},encapsulation:2})}return t})();var lr=`
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
`;var Qo=`
    ${lr}

    /* For Optimus */
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
`,es={root:"p-ink"},ur=(()=>{class t extends U{name="ripple";style=Qo;classes=es;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var cr=(()=>{class t extends W{componentName="Ripple";zone=d(Xt);_componentStyle=d(ur);animationListener;mouseDownListener;timeout;constructor(){super(),L(()=>{Me(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&xe(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!vn(n)&&!En(n)){let a=Math.max(Ti(this.el.nativeElement),Ii(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=Ai(this.el.nativeElement),o=e.pageX-i.left+this.document.body.scrollTop-En(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-vn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),!this.$unstyled()&&nt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&xe(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&xe(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&xe(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Fi(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[z([ur]),k]})}return t})();var dr=`
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
        content: "\xA0";
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
`;var ts=["content"],ns=["loadingicon"],is=["icon"],rs=["*"],yr=(t,r)=>({class:t,pt:r});function os(t,r){t&1&&ti(0)}function ss(t,r){if(t&1&&Ze(0,"span",7),t&2){let e=te(3);Y(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),P("pBind",e.ptm("loadingIcon")),ae("aria-hidden",!0)}}function as(t,r){if(t&1&&(Et(),Ze(0,"svg",8)),t&2){let e=te(3);Y(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),P("pBind",e.ptm("loadingIcon"))("spin",!0),ae("aria-hidden",!0)}}function ls(t,r){if(t&1&&(wt(0),Ae(1,ss,1,4,"span",3)(2,as,1,5,"svg",6),Tt()),t&2){let e=te(2);H(),P("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),H(),P("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function us(t,r){}function cs(t,r){if(t&1&&Ae(0,us,0,0,"ng-template",9),t&2){let e=te(2);P("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ds(t,r){if(t&1&&(wt(0),Ae(1,ls,3,2,"ng-container",2)(2,cs,1,1,null,5),Tt()),t&2){let e=te();H(),P("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),H(),P("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",on(3,yr,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function ps(t,r){if(t&1&&Ze(0,"span",7),t&2){let e=te(2);Y(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),P("pBind",e.ptm("icon")),ae("data-p",e.dataIconP)}}function hs(t,r){}function fs(t,r){if(t&1&&Ae(0,hs,0,0,"ng-template",9),t&2){let e=te(2);P("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function gs(t,r){if(t&1&&(wt(0),Ae(1,ps,1,4,"span",3)(2,fs,1,1,null,5),Tt()),t&2){let e=te();H(),P("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),H(),P("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",on(3,yr,e.cx("icon"),e.ptm("icon")))}}function ms(t,r){if(t&1&&(Qt(0,"span",7),It(1),en()),t&2){let e=te();Y(e.cx("label")),P("pBind",e.ptm("label")),ae("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),H(),Ft(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function bs(t,r){if(t&1&&Ze(0,"p-badge",10),t&2){let e=te();P("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var ys={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,r])=>!!r).reduce((r,[e])=>r+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},je=(()=>{class t extends U{name="button";style=dr;classes=ys;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var pr=new E("BUTTON_INSTANCE"),hr=new E("BUTTON_DIRECTIVE_INSTANCE"),fr=new E("BUTTON_LABEL_INSTANCE"),gr=new E("BUTTON_ICON_INSTANCE"),we={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},mr=(()=>{class t extends W{componentName="ButtonLabel";ptButtonLabel=S();pButtonLabelPT=S();pButtonLabelUnstyled=S();$pcButtonLabel=d(fr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(N,{self:!0});constructor(){super(),L(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&At("p-button-label",!i.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[z([je,{provide:fr,useExisting:t},{provide:de,useExisting:t}]),he([N]),k]})}return t})(),br=(()=>{class t extends W{componentName="ButtonIcon";ptButtonIcon=S();pButtonIconPT=S();pButtonUnstyled=S();$pcButtonIcon=d(gr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(N,{self:!0});constructor(){super(),L(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&At("p-button-icon",!i.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[z([je,{provide:gr,useExisting:t},{provide:de,useExisting:t}]),he([N]),k]})}return t})(),_d=(()=>{class t extends W{componentName="Button";$pcButtonDirective=d(hr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(N,{self:!0});_componentStyle=d(je);ptButtonDirective=S();pButtonPT=S();pButtonUnstyled=S();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),L(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),L(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=S(void 0,{transform:w});iconSignal=sn(br);labelSignal=sn(mr);isIconOnly=le(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(we);pcFluid=d(Fn,{optional:!0,host:!0,skipSelf:!0});isTextButton=le(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
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
    </svg>`;onAfterViewInit(){!this.$unstyled()&&nt(this.htmlElement,this.getStyleClass().join(" ")),Me(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[we.button,we.component];return this.icon&&!this.label&&ce(this.htmlElement.textContent)&&e.push(we.iconOnly),this.loading&&(e.push(we.disabled,we.loading),!this.icon&&this.label&&e.push(we.labelOnly),this.icon&&!this.label&&!ce(this.htmlElement.textContent)&&e.push(we.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>e.some(o=>i===`p-button-${o}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!ke(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let n=kt("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!ke(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,i=!this.$unstyled()&&this.getIconClass(),o=kt("span",{class:this.cn(this.cx("icon"),n,i),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(o.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(o,this.htmlElement.firstChild)}}updateLabel(){let e=ke(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=ke(this.htmlElement,'[data-pc-section="buttonicon"]'),n=ke(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e&&!this.$unstyled()?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=F({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,o){n&1&&oi(o,i.iconSignal,br,5)(o,i.labelSignal,mr,5),n&2&&si(2)},hostVars:4,hostBindings:function(n,i){n&2&&At("p-button-icon-only",!i.$unstyled()&&i.isIconOnly())("p-button-text",!i.$unstyled()&&i.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",w],plain:[2,"plain","plain",w],raised:[2,"raised","raised",w],size:"size",outlined:[2,"outlined","outlined",w],rounded:[2,"rounded","rounded",w],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[z([je,{provide:hr,useExisting:t},{provide:de,useExisting:t}]),he([N]),k]})}return t})(),Ds=(()=>{class t extends W{componentName="Button";hostName="";$pcButton=d(pr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(N,{self:!0});_componentStyle=d(je);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=S(void 0,{transform:w});onClick=new Ct;onFocus=new Ct;onBlur=new Ct;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=d(Fn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=Z({type:t,selectors:[["p-button"]],contentQueries:function(n,i,o){if(n&1&&ri(o,ts,5)(o,ns,5)(o,is,5)(o,ki,4),n&2){let s;Xe(s=qe())&&(i.contentTemplate=s.first),Xe(s=qe())&&(i.loadingIconTemplate=s.first),Xe(s=qe())&&(i.iconTemplate=s.first),Xe(s=qe())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",w],raised:[2,"raised","raised",w],rounded:[2,"rounded","rounded",w],text:[2,"text","text",w],plain:[2,"plain","plain",w],outlined:[2,"outlined","outlined",w],link:[2,"link","link",w],tabindex:[2,"tabindex","tabindex",Qe],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",w],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",w],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[z([je,{provide:pr,useExisting:t},{provide:de,useExisting:t}]),he([N]),k],ngContentSelectors:rs,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(fe(),Qt(0,"button",0),ii("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),ge(1),Ae(2,os,1,0,"ng-container",1)(3,ds,3,6,"ng-container",2)(4,gs,3,6,"ng-container",2)(5,ms,2,6,"span",3)(6,bs,1,4,"p-badge",4),en()),n&2&&(Y(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),P("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),ae("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),H(2),P("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),H(),P("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),H(),P("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),H(),P("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),H(),P("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[ue,dn,hn,pn,cr,qi,ar,nr,In,Se,N],encapsulation:2,changeDetection:0})}return t})(),Ad=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=G({imports:[ue,Ds,Se,Se]})}return t})();var Te=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var jt=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},Ht=class{encodeKey(r){return Dr(r)}encodeValue(r){return Dr(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function vs(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var Es=/%(\d[a-f0-9])/gi,Cs={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Dr(t){return encodeURIComponent(t).replace(Es,(r,e)=>Cs[e]??r)}function Ut(t){return`${t}`}var De=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Ht,r.fromString){if(r.fromObject)throw new J(2805,!1);this.map=vs(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(Ut):[Ut(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(Ut(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(Ut(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Ss(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function vr(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Er(t){return typeof Blob<"u"&&t instanceof Blob}function Cr(t){return typeof FormData<"u"&&t instanceof FormData}function ws(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Sr="Content-Type",wr="Accept",Tr="text/plain",_r="application/json",Ts=`${_r}, ${Tr}, */*`,He=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(Ss(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new J(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Te,this.context??=new jt,!this.params)this.params=new De,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||vr(this.body)||Er(this.body)||Cr(this.body)||ws(this.body)?this.body:this.body instanceof De?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Cr(this.body)?null:Er(this.body)?this.body.type||null:vr(this.body)?null:typeof this.body=="string"?Tr:this.body instanceof De?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?_r:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,s=r.priority||this.priority,a=r.cache||this.cache,l=r.mode||this.mode,u=r.redirect||this.redirect,c=r.credentials||this.credentials,p=r.referrer??this.referrer,f=r.integrity||this.integrity,h=r.referrerPolicy||this.referrerPolicy,m=r.transferCache??this.transferCache,v=r.timeout??this.timeout,g=r.body!==void 0?r.body:this.body,y=r.withCredentials??this.withCredentials,C=r.reportProgress??this.reportProgress,O=r.headers||this.headers,A=r.params||this.params,oe=r.context??this.context;return r.setHeaders!==void 0&&(O=Object.keys(r.setHeaders).reduce((se,q)=>se.set(q,r.setHeaders[q]),O)),r.setParams&&(A=Object.keys(r.setParams).reduce((se,q)=>se.set(q,r.setParams[q]),A)),new t(e,n,g,{params:A,headers:O,context:oe,reportProgress:C,responseType:i,withCredentials:y,transferCache:m,keepalive:o,cache:a,priority:s,timeout:v,mode:l,redirect:u,credentials:c,referrer:p,integrity:f,referrerPolicy:h})}},Fe=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Fe||{}),ze=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new Te,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},Vt=class t extends ze{constructor(r={}){super(r)}type=Fe.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},ot=class t extends ze{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=Fe.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},Ve=class extends ze{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},_s=200,As=204;var Is=new E("");var Fs=/^\)\]\}',?\n/;var Pn=(()=>{class t{xhrFactory;tracingService=d(Zn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new J(-2800,!1);let n=this.xhrFactory;return Kt(null).pipe(Hn(()=>new Bn(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((g,y)=>s.setRequestHeader(g,y.join(","))),e.headers.has(wr)||s.setRequestHeader(wr,Ts),!e.headers.has(Sr)){let g=e.detectContentTypeHeader();g!==null&&s.setRequestHeader(Sr,g)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let a=e.serializeBody(),l=null,u=()=>{if(l!==null)return l;let g=s.statusText||"OK",y=new Te(s.getAllResponseHeaders()),C=s.responseURL||e.url;return l=new Vt({headers:y,status:s.status,statusText:g,url:C}),l},c=this.maybePropagateTrace(()=>{let{headers:g,status:y,statusText:C,url:O}=u(),A=null;y!==As&&(A=typeof s.response>"u"?s.responseText:s.response),y===0&&(y=A?_s:0);let oe=y>=200&&y<300;if(e.responseType==="json"&&typeof A=="string"){let se=A;A=A.replace(Fs,"");try{A=A!==""?JSON.parse(A):null}catch(q){A=se,oe&&(oe=!1,A={error:q,text:A})}}oe?(o.next(new ot({body:A,headers:g,status:y,statusText:C,url:O||void 0})),o.complete()):o.error(new Ve({error:A,headers:g,status:y,statusText:C,url:O||void 0}))}),p=this.maybePropagateTrace(g=>{let{url:y}=u(),C=new Ve({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:y||void 0});o.error(C)}),f=p;e.timeout&&(f=this.maybePropagateTrace(g=>{let{url:y}=u(),C=new Ve({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:y||void 0});o.error(C)}));let h=!1,m=this.maybePropagateTrace(g=>{h||(o.next(u()),h=!0);let y={type:Fe.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),e.responseType==="text"&&s.responseText&&(y.partialText=s.responseText),o.next(y)}),v=this.maybePropagateTrace(g=>{let y={type:Fe.UploadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),o.next(y)});return s.addEventListener("load",c),s.addEventListener("error",p),s.addEventListener("timeout",f),s.addEventListener("abort",p),e.reportProgress&&(s.addEventListener("progress",m),a!==null&&s.upload&&s.upload.addEventListener("progress",v)),s.send(a),o.next({type:Fe.Sent}),()=>{s.removeEventListener("error",p),s.removeEventListener("abort",p),s.removeEventListener("load",c),s.removeEventListener("timeout",f),e.reportProgress&&(s.removeEventListener("progress",m),a!==null&&s.upload&&s.upload.removeEventListener("progress",v)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(j(et))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Os(t,r){return r(t)}function Ps(t,r,e){return(n,i)=>Vn(e,()=>r(n,o=>t(o,i)))}var Ar=new E("",{factory:()=>[]}),Ir=new E(""),Fr=new E("",{factory:()=>!0});var Rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=j(Pn),i},providedIn:"root"})}return t})();var zt=(()=>{class t{backend;injector;chain=null;pendingTasks=d(Wn);contributeToStability=d(Fr);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Ar),...this.injector.get(Ir,[])]));this.chain=n.reduceRight((i,o)=>Ps(i,o,this.injector),Os)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(jn(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(j(Rn),j(Yt))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ln=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=j(zt),i},providedIn:"root"})}return t})();function On(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Wt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof He)o=e;else{let l;i.headers instanceof Te?l=i.headers:l=new Te(i.headers);let u;i.params&&(i.params instanceof De?u=i.params:u=new De({fromObject:i.params})),o=new He(e,n,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:u,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=Kt(o).pipe(Un(l=>this.handler.handle(l)));if(e instanceof He||i.observe==="events")return s;let a=s.pipe($n(l=>l instanceof ot));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(Ye(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new J(2806,!1);return l.body}));case"blob":return a.pipe(Ye(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new J(2807,!1);return l.body}));case"text":return a.pipe(Ye(l=>{if(l.body!==null&&typeof l.body!="string")throw new J(2808,!1);return l.body}));default:return a.pipe(Ye(l=>l.body))}case"response":return a;default:throw new J(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new De().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,On(i,n))}post(e,n,i={}){return this.request("POST",e,On(i,n))}put(e,n,i={}){return this.request("PUT",e,On(i,n))}static \u0275fac=function(n){return new(n||t)(j(Ln))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rs=new E("",{factory:()=>!0}),Ls="XSRF-TOKEN",Ns=new E("",{factory:()=>Ls}),Ms="X-XSRF-TOKEN",xs=new E("",{factory:()=>Ms}),ks=(()=>{class t{cookieName=d(Ns);doc=d(x);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=fn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Or=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=j(ks),i},providedIn:"root"})}return t})();function Bs(t,r){if(!d(Rs)||t.method==="GET"||t.method==="HEAD")return r(t);try{let i=d(Ne).href,{origin:o}=new URL(i),{origin:s}=new URL(t.url,o);if(o!==s)return r(t)}catch{return r(t)}let e=d(Or).getToken(),n=d(xs);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function $s(...t){let r=[Wt,zt,{provide:Ln,useExisting:zt},{provide:Rn,useFactory:()=>d(Is,{optional:!0})??d(Pn)},{provide:Ar,useValue:Bs,multi:!0}];for(let e of t)r.push(...e.\u0275providers);return vt(r)}var Pr=class t{http=d(Wt);get(r,e){return this.http.get(r,e)}post(r,e,n){return this.http.post(r,e,n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})};export{Ot as a,Xr as b,an as c,Pt as d,fi as e,no as f,dn as g,hn as h,so as i,ue as j,fn as k,et as l,lo as m,Me as n,Rl as o,Ll as p,Wt as q,$s as r,T as s,Ei as t,Si as u,jl as v,Hl as w,Vl as x,Ti as y,Wl as z,kt as A,Gl as B,ke as C,Ii as D,Kl as E,it as F,Ql as G,eu as H,ki as I,Se as J,U as K,Ou as L,de as M,W as N,Xi as O,N as P,Ji as Q,Fn as R,_d as S,Ds as T,Ad as U,Pr as V};
