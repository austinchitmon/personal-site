import{$ as x,$a as Qn,$b as se,Ab as ri,Bb as oi,C as Vn,Db as Q,Eb as pe,Fb as fe,Gb as si,H as zn,Hb as qe,Ib as Je,Jb as ai,K as q,Kb as li,L as Et,La as j,Lb as It,Ma as Xn,Mb as Ft,N as D,Nb as ui,O as W,Oa as qn,Ob as K,Pa as Jn,Pb as Ot,Q as E,Qa as Tt,Qb as Pt,R as U,S as d,Sa as ce,T as Ct,Ta as H,Tb as V,V as Xt,Va as en,Vb as an,W as Wn,Ya as Y,Z as St,Za as G,_ as Fe,_a as I,_b as Qe,aa as qt,ab as de,bb as M,c as Un,ca as wt,cb as Ae,d as vt,da as Jt,eb as ei,fa as Gn,fb as ti,fc as S,ga as B,gb as ni,gc as ln,i as Zt,ia as Kn,ic as Le,ja as L,jb as oe,jc as ci,ka as Oe,la as _,lc as w,m as Ze,mc as et,na as J,pb as O,qb as tn,ra as Pe,rb as nn,sb as Xe,tb as rn,ua as Yn,ub as on,v as jn,va as Qt,vb as sn,wb as At,x as Hn,xb as _t,ya as Zn,yb as ii}from"./chunk-22S2KD2W.js";import{a as b,b as Te,c as Yt}from"./chunk-OSQMNGTH.js";var di=null;function Lt(){return di}function Qr(t){di??=t}var un=class{},Re=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>d(pi),providedIn:"platform"})}return t})();var pi=(()=>{class t extends Re{_location;_history;_doc=d(x);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Lt().getBaseHref(this._doc)}onPopState(e){let n=Lt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Lt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function gi(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function fi(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function be(t){return t&&t[0]!=="?"?`?${t}`:t}var Rt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:()=>d(to),providedIn:"root"})}return t})(),eo=new E(""),to=(()=>{class t extends Rt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??d(x).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return gi(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+be(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let s=this.prepareExternalUrl(i+be(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,o){let s=this.prepareExternalUrl(i+be(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(U(Re),U(eo,8))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mi=(()=>{class t{_subject=new vt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ro(fi(hi(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+be(n))}normalize(e){return t.stripTrailingSlash(io(this._basePath,hi(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+be(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+be(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=be;static joinWithSlash=gi;static stripTrailingSlash=fi;static \u0275fac=function(n){return new(n||t)(U(Rt))};static \u0275prov=D({token:t,factory:()=>no(),providedIn:"root"})}return t})();function no(){return new mi(U(Rt))}function io(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function hi(t){return t.replace(/\/index\.html$/,"")}function ro(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var cn=/\s+/,bi=[],oo=(()=>{class t{_ngEl;_renderer;initialClasses=bi;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(cn):bi}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(cn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(cn).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||t)(H(J),H(ce))};static \u0275dir=I({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var fn=(()=>{class t{_viewContainer;_context=new Nt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){yi(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){yi(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(H(en),H(Tt))};static \u0275dir=I({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Nt=class{$implicit=null;ngIf=null};function yi(t,r){if(t&&!t.createEmbeddedView)throw new q(2020,!1)}var hn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,o]=e.split("."),s=i.indexOf("-")===-1?void 0:Xn.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(H(J),H(ci),H(ce))};static \u0275dir=I({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),gn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(Fe);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(H(en))};static \u0275dir=I({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Oe]})}return t})();function so(t,r){return new q(2100,!1)}var dn=class{createSubscription(r,e,n){return Qe(()=>r.subscribe({next:e,error:n}))}dispose(r){Qe(()=>r.unsubscribe())}},pn=class{createSubscription(r,e,n){return r.then(i=>e?.(i),i=>n?.(i)),{unsubscribe:()=>{e=null,n=null}}}dispose(r){r.unsubscribe()}},ao=new pn,lo=new dn,uo=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=d(Gn);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(ei(e))return ao;if(ti(e))return lo;throw so(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(H(Le,16))};static \u0275pipe=Qn({name:"async",type:t,pure:!1})}return t})();var ae=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();function mn(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var tt=class{};var fo="browser",ho="server";function Ne(t){return t===fo}function yn(t){return t===ho}var xl=(()=>{class t{static \u0275prov=D({token:t,providedIn:"root",factory:()=>new bn(d(x),window)})}return t})(),bn=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r,e){this.window.scrollTo(Te(b({},e),{left:r[0],top:r[1]}))}scrollToAnchor(r,e){let n=go(this.document,r);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(r){try{this.window.history.scrollRestoration=r}catch(e){console.warn(Et(2400,!1))}}scrollToElement(r,e){let n=r.getBoundingClientRect(),i=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(Te(b({},e),{left:i-s[0],top:o-s[1]}))}};function go(t,r){let e=t.getElementById(r)||t.getElementsByName(r)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let o=i.shadowRoot;if(o){let s=o.getElementById(r)||o.querySelector(`[name="${r}"]`);if(s)return s}i=n.nextNode()}}return null}var Ei=t=>t.src,mo=new E("",{factory:()=>Ei});var Di=/^((\s*\d+w\s*(,|$)){1,})$/;var bo=[1,2],yo=640;var Do=1920,vo=1080;var Ml=(()=>{class t{imageLoader=d(mo);config=Eo(d(Qt));renderer=d(ce);imgElement=d(J).nativeElement;injector=d(Fe);destroyRef=d(qt);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){Jn("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&Di.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let n=e;this.loaderParams&&(n.loaderParams=this.loaderParams);let i=this.getAspectRatio();return i!==null&&n.width&&(n.height=Math.round(n.width/i)),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=Di.test(this.ngSrcset);return this.ngSrcset.split(",").filter(i=>i!=="").map(i=>{i=i.trim();let o=e?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${i}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(o=>o>=yo)),n.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i&&this.setHostAttribute("srcset",i),i}getFixedSrcset(){return bo.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Do||this.height>vo),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Ei&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url("${vi(this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0}))}")`:typeof e=="string"?`url("${vi(e)}")`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let s=this.injector.get(Le);i(),o(),this.placeholder=!1,s.markForCheck()},i=this.renderer.listen(e,"load",n),o=this.renderer.listen(e,"error",n);this.destroyRef.onDestroy(()=>{i(),o()}),Co(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,i){n&2&&It("position",i.fill?"absolute":null)("width",i.fill?"100%":null)("height",i.fill?"100%":null)("inset",i.fill?"0":null)("background-size",i.placeholder?"cover":null)("background-position",i.placeholder?"50% 50%":null)("background-repeat",i.placeholder?"no-repeat":null)("background-image",i.placeholder?i.generatePlaceholder(i.placeholder):null)("filter",i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",So],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",et],height:[2,"height","height",et],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",w],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",w],fill:[2,"fill","fill",w],placeholder:[2,"placeholder","placeholder",wo],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[Oe]})}return t})();function Eo(t){let r={};return t.breakpoints&&(r.breakpoints=t.breakpoints.sort((e,n)=>e-n)),Object.assign({},Yn,t,r)}function Co(t,r){t.complete&&t.naturalWidth&&r()}function So(t){return typeof t=="string"?t:Zn(t)}function vi(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function wo(t){return typeof t=="string"&&t!=="true"&&t!=="false"&&t!==""?t:w(t)}function ye(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")r.push(n);else if(i==="object"){let o=Array.isArray(n)?[ye(...n)]:Object.entries(n).map(([s,l])=>l?s:void 0);r=o.length?r.concat(o.filter(s=>!!s)):r}}return r.join(" ").trim()}}function xe(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Dn(t,r,e=new WeakSet){if(t===r)return!0;if(!t||!r||typeof t!="object"||typeof r!="object"||e.has(t)||e.has(r))return!1;e.add(t).add(r);let n=Array.isArray(t),i=Array.isArray(r),o,s,l;if(n&&i){if(s=t.length,s!=r.length)return!1;for(o=s;o--!==0;)if(!Dn(t[o],r[o],e))return!1;return!0}if(n!=i)return!1;let a=t instanceof Date,u=r instanceof Date;if(a!=u)return!1;if(a&&u)return t.getTime()==r.getTime();let c=t instanceof RegExp,p=r instanceof RegExp;if(c!=p)return!1;if(c&&p)return t.toString()==r.toString();let h=Object.keys(t);if(s=h.length,s!==Object.keys(r).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,h[o]))return!1;for(o=s;o--!==0;)if(l=h[o],!Dn(t[l],r[l],e))return!1;return!0}function Ao(t,r){return Dn(t,r)}function xt(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Me(t){return!xe(t)}function Ci(t,r){if(!t||!r)return null;try{let e=t[r];if(Me(e))return e}catch(e){}if(Object.keys(t).length){if(xt(r))return r(t);if(r.indexOf(".")===-1)return t[r];{let e=r.split("."),n=t;for(let i=0,o=e.length;i<o;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function Si(t,r,e){return e?Ci(t,e)===Ci(r,e):Ao(t,r)}function _o(t,r=!0){return t instanceof Object&&t.constructor===Object&&(r||Object.keys(t).length!==0)}function le(t,...r){return xt(t)?t(...r):t}function nt(t,r=!0){return typeof t=="string"&&(r||t!=="")}function De(t){return nt(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function vn(t,r="",e={}){let n=De(r).split("."),i=n.shift();if(i){if(_o(t)){let o=Object.keys(t).find(s=>De(s)===i)||"";return vn(le(t[o],e),n.join("."),e)}return}return le(t,e)}function wi(t,r=!0){return Array.isArray(t)&&(r||t.length!==0)}function Mt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Ai(t,r){return t?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}function it(t,r){if(t&&r){let e=n=>{Ai(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function ke(t,r){if(t&&r){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[r].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function _i(t){for(let r of document?.styleSheets)try{for(let e of r?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch(e){}return null}function Ti(t){return t?Math.abs(t.scrollLeft):0}function Ii(t,r){if(t instanceof HTMLElement){let e=t.offsetWidth;if(r){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function En(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function kt(t,r={}){if(En(t)){let e=(i,o)=>{var s,l;let a=(s=t?.$attrs)!=null&&s[i]?[(l=t?.$attrs)==null?void 0:l[i]]:[];return[o].flat().reduce((u,c)=>{if(c!=null){let p=typeof c;if(p==="string"||p==="number")u.push(c);else if(p==="object"){let h=Array.isArray(c)?e(i,c):Object.entries(c).map(([f,m])=>i==="style"&&(m||m===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?f:void 0);u=h.length?u.concat(h.filter(f=>!!f)):u}}return u},a)},n=i=>{e("style",i).forEach(o=>{let s=o.indexOf(":");if(s<0)return;let l=o.slice(0,s).trim(),a=o.slice(s+1).trim();l&&t.style.setProperty(l,a)})};Object.entries(r).forEach(([i,o])=>{if(o!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),o):i==="p-bind"||i==="pBind"?kt(t,o):i==="style"?(n(o),(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=t.style.cssText)):(o=i==="class"?[...new Set(e("class",o))].join(" ").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=o),t.setAttribute(i,o))}})}}function Bt(t,r={},...e){if(t){let n=document.createElement(t);return kt(n,r),n.append(...e),n}}function Be(t,r){return En(t)?t.matches(r)?t:t.querySelector(r):null}function Cn(t){if(t){let r=t.offsetHeight,e=getComputedStyle(t);return r-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),r}return 0}function Fi(t){if(t){let r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||Ti(document.documentElement)||Ti(document.body)||0)}}return{top:"auto",left:"auto"}}function Oi(t,r){if(t){let e=t.offsetHeight;if(r){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Sn(t){if(t){let r=t.offsetWidth,e=getComputedStyle(t);return r-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),r}return 0}function Pi(t){var r;t&&("remove"in Element.prototype?t.remove():(r=t.parentNode)==null||r.removeChild(t))}function Li(t,r="",e){if(En(t)&&e!==null&&e!==void 0){if(r==="style"){typeof e=="string"?t.style.cssText=e:typeof e=="object"&&Object.entries(e).forEach(([n,i])=>{if(i==null)return;let o=n.startsWith("--")?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();t.style.setProperty(o,String(i))});return}t.setAttribute(r,e)}}var Io=Object.defineProperty,Ri=Object.getOwnPropertySymbols,Fo=Object.prototype.hasOwnProperty,Oo=Object.prototype.propertyIsEnumerable,Ni=(t,r,e)=>r in t?Io(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,xi=(t,r)=>{for(var e in r||(r={}))Fo.call(r,e)&&Ni(t,e,r[e]);if(Ri)for(var e of Ri(r))Oo.call(r,e)&&Ni(t,e,r[e]);return t};function Mi(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")r.push(n);else if(i==="object"){let o=Array.isArray(n)?[Mi(...n)]:Object.entries(n).map(([s,l])=>l?s:void 0);r=o.length?r.concat(o.filter(s=>!!s)):r}}return r.join(" ").trim()}}function Po(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Lo({skipUndefined:t=!1},...r){return r?.reduce((e,n={})=>{for(let i in n){let o=n[i];if(!(t&&o===void 0))if(i==="style")e.style=xi(xi({},e.style),n.style);else if(i==="class"||i==="className")e[i]=Mi(e[i],n[i]);else if(Po(o)){let s=e[i];e[i]=s?(...l)=>{s(...l),o(...l)}:o}else e[i]=o}return e},{})}function wn(...t){return Lo({skipUndefined:!1},...t)}var $t={};function rt(t="pui_id_"){return Object.hasOwn($t,t)||($t[t]=0),$t[t]++,`${t}${$t[t]}`}var ki=["*"];var k=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Yl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Y({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:ki,decls:1,vars:0,template:function(n,i){n&1&&(pe(),fe(0))},encapsulation:2})}return t})(),Zl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Y({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:ki,decls:1,vars:0,template:function(n,i){n&1&&(pe(),fe(0))},encapsulation:2})}return t})(),Bi=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(H(Tt))};static \u0275dir=I({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ve=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[ae]})}return t})();function ot(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Ro(t){return typeof t=="function"&&"call"in t&&"apply"in t}function P(t){return!ot(t)}function Ee(t,r=!0){return t instanceof Object&&t.constructor===Object&&(r||Object.keys(t).length!==0)}function Ce(t,...r){return Ro(t)?t(...r):t}function _e(t,r=!0){return typeof t=="string"&&(r||t!=="")}function $i(t){return P(t)&&!isNaN(t)}function ee(t,r){if(r){let e=r.test(t);return r.lastIndex=0,e}return!1}function Tn(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Ut(t){return _e(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function Ui(){let t=new Map;return{on(r,e){let n=t.get(r);return n?n.push(e):n=[e],t.set(r,n),this},off(r,e){let n=t.get(r);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(r,e){let n=t.get(r);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}var No=Object.defineProperty,xo=Object.defineProperties,Mo=Object.getOwnPropertyDescriptors,jt=Object.getOwnPropertySymbols,Vi=Object.prototype.hasOwnProperty,zi=Object.prototype.propertyIsEnumerable,ji=(t,r,e)=>r in t?No(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,ne=(t,r)=>{for(var e in r||(r={}))Vi.call(r,e)&&ji(t,e,r[e]);if(jt)for(var e of jt(r))zi.call(r,e)&&ji(t,e,r[e]);return t},An=(t,r)=>xo(t,Mo(r)),he=(t,r)=>{var e={};for(var n in t)Vi.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&jt)for(var n of jt(t))r.indexOf(n)<0&&zi.call(t,n)&&(e[n]=t[n]);return e};var ko=Ui(),Z=ko,st=/{([^}]*)}/g,Wi=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Gi=/var\([^)]+\)/g;function Hi(t){return _e(t)?t.replace(/[A-Z]/g,(r,e)=>e===0?r:"."+r.toLowerCase()).toLowerCase():t}function Bo(t){return Ee(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function $o(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function _n(t="",r=""){return $o(`${_e(t,!1)&&_e(r,!1)?`${t}-`:t}${r}`)}function Ki(t="",r=""){return`--${_n(t,r)}`}function Uo(t=""){let r=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(r+e)%2!==0}function Yi(t,r="",e="",n=[],i){if(_e(t)){let o=t.trim();if(Uo(o))return;if(ee(o,st)){let s=o.replaceAll(st,l=>{let a=l.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>ee(u,c)));return`var(${Ki(e,Ut(a.join("-")))}${P(i)?`, ${i}`:""})`});return ee(s.replace(Gi,"0"),Wi)?`calc(${s})`:s}return o}else if($i(t))return t}function jo(t,r,e){_e(r,!1)&&t.push(`${r}:${e};`)}function $e(t,r){return t?`${t}{${r}}`:""}function Zi(t,r){if(t.indexOf("dt(")===-1)return t;function e(s,l){let a=[],u=0,c="",p=null,h=0;for(;u<=s.length;){let f=s[u];if((f==='"'||f==="'"||f==="`")&&s[u-1]!=="\\"&&(p=p===f?null:f),!p&&(f==="("&&h++,f===")"&&h--,(f===","||u===s.length)&&h===0)){let m=c.trim();m.startsWith("dt(")?a.push(Zi(m,l)):a.push(n(m)),c="",u++;continue}f!==void 0&&(c+=f),u++}return a}function n(s){let l=s[0];if((l==='"'||l==="'"||l==="`")&&s[s.length-1]===l)return s.slice(1,-1);let a=Number(s);return isNaN(a)?s:a}let i=[],o=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")o.push(s),s+=2;else if(t[s]===")"&&o.length>0){let l=o.pop();o.length===0&&i.push([l,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[l,a]=i[s],u=t.slice(l+3,a),c=e(u,r),p=r(...c);t=t.slice(0,l)+p+t.slice(a+1)}return t}var ge=(...t)=>Ho(T.getTheme(),...t),Ho=(t={},r,e,n)=>{if(r){let{variable:i,options:o}=T.defaults||{},{prefix:s,transform:l}=t?.options||o||{},a=ee(r,st)?r:`{${r}}`;return n==="value"||ot(n)&&l==="strict"?T.getTokenValue(r):Yi(a,void 0,s,[i.excludedKeyRegex],e)}return""};function Ue(t,...r){if(t instanceof Array){let e=t.reduce((n,i,o)=>{var s;return n+i+((s=Ce(r[o],{dt:ge}))!=null?s:"")},"");return Zi(e,ge)}return Ce(t,{dt:ge})}function Vo(t,r={}){let e=T.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=r,s=[],l=[],a=[{node:t,path:n}];for(;a.length;){let{node:c,path:p}=a.pop();for(let h in c){let f=c[h],m=Bo(f),v=ee(h,o)?_n(p):_n(p,Ut(h));if(Ee(m))a.push({node:m,path:v});else{let g=Ki(v),y=Yi(m,v,n,[o]);jo(l,g,y);let C=v;n&&C.startsWith(n+"-")&&(C=C.slice(n.length+1)),s.push(C.replace(/-/g,"."))}}}let u=l.join("");return{value:l,tokens:s,declarations:u,css:$e(i,u)}}var te={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let r=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=r.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,r){return Vo(t,{prefix:r?.prefix})},getCommon({name:t="",theme:r={},params:e,set:n,defaults:i}){var o,s,l,a,u,c,p;let{preset:h,options:f}=r,m,v,g,y,C,F,A;if(P(h)&&f.transform!=="strict"){let{primitive:ie,semantic:re,extend:X}=h,Ge=re||{},{colorScheme:lt}=Ge,ut=he(Ge,["colorScheme"]),ct=X||{},{colorScheme:dt}=ct,Ke=he(ct,["colorScheme"]),Ye=lt||{},{dark:pt}=Ye,ft=he(Ye,["dark"]),ht=dt||{},{dark:gt}=ht,mt=he(ht,["dark"]),bt=P(ie)?this._toVariables({primitive:ie},f):{},yt=P(ut)?this._toVariables({semantic:ut},f):{},Dt=P(ft)?this._toVariables({light:ft},f):{},Mn=P(pt)?this._toVariables({dark:pt},f):{},kn=P(Ke)?this._toVariables({semantic:Ke},f):{},Bn=P(mt)?this._toVariables({light:mt},f):{},$n=P(gt)?this._toVariables({dark:gt},f):{},[xr,Mr]=[(o=bt.declarations)!=null?o:"",bt.tokens],[kr,Br]=[(s=yt.declarations)!=null?s:"",yt.tokens||[]],[$r,Ur]=[(l=Dt.declarations)!=null?l:"",Dt.tokens||[]],[jr,Hr]=[(a=Mn.declarations)!=null?a:"",Mn.tokens||[]],[Vr,zr]=[(u=kn.declarations)!=null?u:"",kn.tokens||[]],[Wr,Gr]=[(c=Bn.declarations)!=null?c:"",Bn.tokens||[]],[Kr,Yr]=[(p=$n.declarations)!=null?p:"",$n.tokens||[]];m=this.transformCSS(t,xr,"light","variable",f,n,i),v=Mr;let Zr=this.transformCSS(t,`${kr}${$r}`,"light","variable",f,n,i),Xr=this.transformCSS(t,`${jr}`,"dark","variable",f,n,i);g=`${Zr}${Xr}`,y=[...new Set([...Br,...Ur,...Hr])];let qr=this.transformCSS(t,`${Vr}${Wr}color-scheme:light`,"light","variable",f,n,i),Jr=this.transformCSS(t,`${Kr}color-scheme:dark`,"dark","variable",f,n,i);C=`${qr}${Jr}`,F=[...new Set([...zr,...Gr,...Yr])],A=Ce(h.css,{dt:ge})}return{primitive:{css:m,tokens:v},semantic:{css:g,tokens:y},global:{css:C,tokens:F},style:A}},getPreset({name:t="",preset:r={},options:e,params:n,set:i,defaults:o,selector:s}){var l,a,u;let c,p,h;if(P(r)&&e.transform!=="strict"){let f=t.replace("-directive",""),m=r,{colorScheme:v,extend:g,css:y}=m,C=he(m,["colorScheme","extend","css"]),F=g||{},{colorScheme:A}=F,ie=he(F,["colorScheme"]),re=v||{},{dark:X}=re,Ge=he(re,["dark"]),lt=A||{},{dark:ut}=lt,ct=he(lt,["dark"]),dt=P(C)?this._toVariables({[f]:ne(ne({},C),ie)},e):{},Ke=P(Ge)?this._toVariables({[f]:ne(ne({},Ge),ct)},e):{},Ye=P(X)?this._toVariables({[f]:ne(ne({},X),ut)},e):{},[pt,ft]=[(l=dt.declarations)!=null?l:"",dt.tokens||[]],[ht,gt]=[(a=Ke.declarations)!=null?a:"",Ke.tokens||[]],[mt,bt]=[(u=Ye.declarations)!=null?u:"",Ye.tokens||[]],yt=this.transformCSS(f,`${pt}${ht}`,"light","variable",e,i,o,s),Dt=this.transformCSS(f,mt,"dark","variable",e,i,o,s);c=`${yt}${Dt}`,p=[...new Set([...ft,...gt,...bt])],h=Ce(y,{dt:ge})}return{css:c,tokens:p,style:h}},getPresetC({name:t="",theme:r={},params:e,set:n,defaults:i}){var o;let{preset:s,options:l}=r,a=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:a,options:l,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:r={},params:e,set:n,defaults:i}){var o,s;let l=t.replace("-directive",""),{preset:a,options:u}=r,c=((o=a?.components)==null?void 0:o[l])||((s=a?.directives)==null?void 0:s[l]);return this.getPreset({name:l,preset:c,options:u,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,r){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?r.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:r.options.darkModeSelector):[]},getLayerOrder(t,r={},e,n){let{cssLayer:i}=r;return i?`@layer ${Ce(i.order||i.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:r={},params:e,props:n={},set:i,defaults:o}){let s=this.getCommon({name:t,theme:r,params:e,set:i,defaults:o}),l=Object.entries(n).reduce((a,[u,c])=>a.push(`${u}="${c}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[u,c])=>{if(Ee(c)&&Object.hasOwn(c,"css")){let p=Tn(c.css),h=`${u}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${h}" ${l}>${p}</style>`)}return a},[]).join("")},getStyleSheet({name:t="",theme:r={},params:e,props:n={},set:i,defaults:o}){var s;let l={name:t,theme:r,params:e,set:i,defaults:o},a=(s=t.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,u=Object.entries(n).reduce((c,[p,h])=>c.push(`${p}="${h}"`)&&c,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Tn(a)}</style>`:""},createTokens(t={},r,e="",n="",i={}){let o=function(l,a={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:l,path:this.path,paths:a,value:void 0};u.push(this.path),a.name=this.path,a.binding||(a.binding={});let c=this.value;if(typeof this.value=="string"&&st.test(this.value)){let p=this.value.trim().replace(st,h=>{var f;let m=h.slice(1,-1),v=this.tokens[m];if(!v)return console.warn(`Token not found for path: ${m}`),"__UNRESOLVED__";let g=v.computed(l,a,u);return Array.isArray(g)&&g.length===2?`light-dark(${g[0].value},${g[1].value})`:(f=g?.value)!=null?f:"__UNRESOLVED__"});c=Wi.test(p.replace(Gi,"0"))?`calc(${p})`:p}return ot(a.binding)&&delete a.binding,u.pop(),{colorScheme:l,path:this.path,paths:a,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(l,a,u)=>{Object.entries(l).forEach(([c,p])=>{let h=ee(c,r.variable.excludedKeyRegex)?a:a?`${a}.${Hi(c)}`:Hi(c),f=u?`${u}.${c}`:c;Ee(p)?s(p,h,f):(i[h]||(i[h]={paths:[],computed:(m,v={},g=[])=>{if(i[h].paths.length===1)return i[h].paths[0].computed(i[h].paths[0].scheme,v.binding,g);if(m&&m!=="none")for(let y=0;y<i[h].paths.length;y++){let C=i[h].paths[y];if(C.scheme===m)return C.computed(m,v.binding,g)}return i[h].paths.map(y=>y.computed(y.scheme,v[y.scheme],g))}}),i[h].paths.push({path:f,value:p,scheme:f.includes("colorScheme.light")?"light":f.includes("colorScheme.dark")?"dark":"none",computed:o,tokens:i}))})};return s(t,e,n),i},getTokenValue(t,r,e){var n;let i=(l=>l.split(".").filter(a=>!ee(a.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(r),o=r.includes("colorScheme.light")?"light":r.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[i])==null?void 0:n.computed(o)].flat().filter(l=>l);return s.length===1?s[0].value:s.reduce((l={},a)=>{let u=a,{colorScheme:c}=u,p=he(u,["colorScheme"]);return l[c]=p,l},void 0)},getSelectorRule(t,r,e,n){return e==="class"||e==="attr"?$e(P(r)?`${t}${r},${t} ${r}`:t,n):$e(t,$e(r??":root,:host",n))},transformCSS(t,r,e,n,i={},o,s,l){if(P(r)){let{cssLayer:a}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);r=e==="dark"?u.reduce((c,{type:p,selector:h})=>(P(h)&&(c+=h.includes("[CSS]")?h.replace("[CSS]",r):this.getSelectorRule(h,l,p,r)),c),""):$e(l??":root,:host",r)}if(a){let u={name:"primeui",order:"primeui"};Ee(a)&&(u.name=Ce(a.name,{name:t,type:n})),P(u.name)&&(r=$e(`@layer ${u.name}`,r),o?.layerNames(u.name))}return r}return""}},T={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:r}=t;r&&(this._theme=An(ne({},r),{options:ne(ne({},this.defaults.options),r.options)}),this._tokens=te.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Z.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=An(ne({},this.theme),{preset:t}),this._tokens=te.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Z.emit("preset:change",t),Z.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=An(ne({},this.theme),{options:t}),this.clearLoadedStyleNames(),Z.emit("options:change",t),Z.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return te.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",r){return te.getCommon({name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return te.getPresetC(e)},getDirective(t="",r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return te.getPresetD(e)},getCustomPreset(t="",r,e,n){let i={name:t,preset:r,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return te.getPreset(i)},getLayerOrderCSS(t=""){return te.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",r,e="style",n){return te.transformCSS(t,r,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",r,e={}){return te.getCommonStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,r,e={}){return te.getStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:r}){this._loadingStyles.size&&(this._loadingStyles.delete(r),Z.emit(`theme:${r}:load`,t),!this._loadingStyles.size&&Z.emit("theme:load"))}};var Xi=`
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
`;var zo=0,qi=(()=>{class t{document=d(x);use(e,n={}){let i=!1,o=e,s=null,{immediate:l=!0,manual:a=!1,name:u=`style_${++zo}`,id:c=void 0,media:p=void 0,nonce:h=void 0,first:f=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),s){if(!s.isConnected){o=e;let v=this.document.head;Li(s,"nonce",h),f&&v.firstChild?v.insertBefore(s,v.firstChild):v.appendChild(s),kt(s,{type:"text/css",media:p,nonce:h,"data-primeng-style-id":u})}s.textContent!==o&&(s.textContent=o)}return{id:c,name:u,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var je={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Wo=`
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
`,$=(()=>{class t{name="base";useStyle=d(qi);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},i=o=>o)=>{let o=i(Ue`${le(e,{dt:ge})}`);return o?this.useStyle.use(Mt(o),b({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(i="")=>T.transformCSS(e.name||this.name,`${i}${Ue`${n}`}`));loadBaseCSS=(e={})=>this.load(Wo,e);loadBaseStyle=(e={},n="")=>this.load(Xi,e,(i="")=>T.transformCSS(e.name||this.name,`${i}${Ue`${n}`}`));getCommonTheme=e=>T.getCommon(this.name,e);getComponentTheme=e=>T.getComponent(this.name,e);getPresetTheme=(e,n,i)=>T.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>T.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=le(this.css,{dt:ge}),o=Mt(Ue`${i}${e}`),s=Object.entries(n).reduce((l,[a,u])=>l.push(`${a}="${u}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>T.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[T.getStyleSheet(this.name,e,n)];if(this.style){let o=this.name==="base"?"global-style":`${this.name}-style`,s=Ue`${le(this.style,{dt:ge})}`,l=Mt(T.transformCSS(o,s)),a=Object.entries(n).reduce((u,[c,p])=>u.push(`${c}="${p}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${o}" ${a}>${l}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Go=(()=>{class t{theme=B(void 0);csp=B({nonce:void 0});isThemeChanged=!1;document=d(x);baseStyle=d($);constructor(){L(()=>{Z.on("theme:change",e=>{Qe(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),L(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){T.clearLoadedStyleNames(),Z.clear()}onThemeChange(e){T.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!T.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,b({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,b({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(b({name:"global-style"},s),o),T.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),In=(()=>{class t extends Go{ripple=B(!1);platformId=d(Pe);inputStyle=B(null);inputVariant=B(null);overlayAppendTo=B("self");overlayOptions={};csp=B({nonce:void 0});unstyled=B(void 0);pt=B(void 0);ptOptions=B(void 0);filterMatchModeOptions={text:[k.STARTS_WITH,k.CONTAINS,k.NOT_CONTAINS,k.ENDS_WITH,k.EQUALS,k.NOT_EQUALS],numeric:[k.EQUALS,k.NOT_EQUALS,k.LESS_THAN,k.LESS_THAN_OR_EQUAL_TO,k.GREATER_THAN,k.GREATER_THAN_OR_EQUAL_TO],date:[k.DATE_IS,k.DATE_IS_NOT,k.DATE_BEFORE,k.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new vt;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=b(b({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:o,inputVariant:s,theme:l,overlayOptions:a,translation:u,filterMatchModeOptions:c,overlayAppendTo:p,zIndex:h,ptOptions:f,pt:m,unstyled:v}=e||{};n&&this.csp.set(n),p&&this.overlayAppendTo.set(p),i&&this.ripple.set(i),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),a&&(this.overlayOptions=a),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),h&&(this.zIndex=h),m&&this.pt.set(m),f&&this.ptOptions.set(f),v&&this.unstyled.set(v),l&&this.setThemeConfig({theme:l,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ko=new E("PRIME_NG_CONFIG");function Fu(...t){let r=t?.map(n=>({provide:Ko,useValue:n,multi:!1})),e=ni(()=>{let n=d(In);t?.forEach(i=>n.setConfig(i))});return Ct([...r,e])}var Ji=(()=>{class t extends ${name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ue=new E("PARENT_INSTANCE"),z=(()=>{class t{document=d(x);platformId=d(Pe);el=d(J);injector=d(Fe);cd=d(Le);renderer=d(ce);config=d(In);$parentInstance=d(ue,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=d(Ji);baseStyle=d($);scopedStyleEl;parent=this.$params.parent;cn=ye;_themeScopedListener;themeChangeListenerMap=new Map;dt=S();unstyled=S();pt=S();ptOptions=S();$attrSelector=rt("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=B(void 0);directiveUnstyled=B(void 0);$unstyled=se(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=se(()=>le(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>le(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||le(e,this.$params))}get $style(){return b(b({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){L(e=>{this.document&&!yn(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),L(e=>{this.document&&!yn(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return xt(e)?e(...n):wn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",i={}){return vn(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),o=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),o?.(...n)}}_load(){je.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),je.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Me(e)&&this.baseStyle.load(e,b({name:"global"},this.$styleOptions))}_loadCoreStyles(){!je.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),je.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!T.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:o}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,b({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,b({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,b({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(b({name:"global-style"},this.$styleOptions),o),T.setLoadedStyleName("common")}if(!T.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,b({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(b({name:`${this.$style?.name}-style`},this.$styleOptions),n),T.setLoadedStyleName(this.$style?.name)}if(!T.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,b({name:"layer-order",first:!0},this.$styleOptions)),T.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,b({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),je.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),Z.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Z.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",i={},o=!0){let s=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:l=!0,mergeProps:a=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=o?s?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,c=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,Te(b({},i),{global:u||{}})),p=this._getPTDatasets(n);return l||!l&&c?a?this._mergeProps(a,u,c,p):b(b(b({},u),c),p):b(b({},c),p)}_getPTDatasets(e=""){let n="data-pc-",i=e==="root"&&Me(this.$pt()?.["data-pc-section"]);return e!=="transition"&&Te(b({},e==="root"&&Te(b({[`${n}name`]:De(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:De(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:De(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,i){let o=this._getOptionValue(e,n,i);return nt(o)||wi(o)?{class:o}:o}_getPT(e,n="",i){let o=(s,l=!1)=>{let a=i?i(s):s,u=De(n),c=De(this.$hostName||this.$name);return(l?u!==c?a?.[u]:void 0:a?.[u])??a};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)}_usePT(e,n,i,o){let s=l=>n?.call(this,l,i,o);if(e?.hasOwnProperty("_usept")){let{mergeSections:l=!0,mergeProps:a=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),c=s(e.value);return u===void 0&&c===void 0?void 0:nt(c)?c:nt(u)?u:l||!l&&c?a?this._mergeProps(a,u,c):b(b({},u),c):c}return s(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,b(b({},this.$params),n))}ptms(e,n={}){return e.reduce((i,o)=>(i=wn(i,this.ptm(o,n))||{},i),{})}ptmo(e={},n="",i={}){return this._getPTValue(e,n,b({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:ye(this._getOptionValue(this.$style.classes,e,b(b({},this.$params),n)))}sx(e="",n=!0,i={}){if(n){let o=this._getOptionValue(this.$style.inlineStyles,e,b(b({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,b(b({},this.$params),i));return b(b({},s),o)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[V([Ji,$]),Oe]})}return t})();var Qi=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let o=0;o<i.length;o++)e.classList.add(i[o])}else{let i=n.split(" ");for(let o=0;o<i.length;o++)e.className+=" "+i[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var o=0;o<n.length;o++){if(n[o]==e)return i;n[o].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<i.length;s++){if(i[s]==e)return o;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let o=F=>{if(F)return getComputedStyle(F).getPropertyValue("position")==="relative"?F:o(F.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),p=this.getViewport(),f=o(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},m,v,g="top";a.top+l+s.height>p.height?(m=a.top-f.top-s.height,g="bottom",a.top+m<0&&(m=-1*a.top)):(m=l+a.top-f.top,g="top");let y=a.left+s.width-p.width,C=a.left-f.left;if(s.width>p.width?v=(a.left-f.left)*-1:y>0?v=C-y:v=a.left-f.left,e.style.top=m+"px",e.style.left=v+"px",e.style.transformOrigin=g,i){let F=_i(/-anchor-gutter$/)?.value;e.style.marginTop=g==="bottom"?`calc(${F??"2px"} * -1)`:F??""}}static absolutePosition(e,n,i=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,l=o.width,a=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),p=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),f=this.getViewport(),m,v;c.top+a+s>f.height?(m=c.top+p-s,e.style.transformOrigin="bottom",m<0&&(m=p)):(m=a+c.top+p,e.style.transformOrigin="top"),c.left+l>f.width?v=Math.max(0,c.left+h+u-l):v=c.left+h,e.style.top=m+"px",e.style.left=v+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),o=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return o.test(a.getPropertyValue("overflow"))||o.test(a.getPropertyValue("overflowX"))||o.test(a.getPropertyValue("overflowY"))};for(let l of i){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let u=a.split(",");for(let c of u){let p=this.findSingle(l,c);p&&s(p)&&n.push(p)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-o-l,p=e.scrollTop,h=e.clientHeight,f=this.getOuterHeight(n);c<0?e.scrollTop=p+c:c+f>h&&(e.scrollTop=p+c-h+f)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=o,i=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,o=50,s=n,l=o/s;let a=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(a)),e.style.opacity=i},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||o.clientWidth,l=e.innerHeight||i.clientHeight||o.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(e){}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of i){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let o=getComputedStyle(i);if(this.isVisible(i)&&o.display!="none"&&o.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),o=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?o=i.length-1:o=s-1:s!=-1&&s!==i.length-1&&(o=s+1)}return i[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...i),o}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(o,s)=>{let l=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((a,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")a.push(u);else if(c==="object"){let p=Array.isArray(u)?i(o,u):Object.entries(u).map(([h,f])=>o==="style"&&(f||f===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?h:void 0);a=p.length?a.concat(p.filter(h=>!!h)):a}}return a},l)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let l=o.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(i("class",s))].join(" ").trim():o==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var er=(()=>{class t extends z{autofocus=!1;focused=!1;platformId=d(Pe);document=d(x);host=d(J);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ne(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Qi.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275dir=I({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[M]})}return t})();var R=(()=>{class t{el;renderer;pBind=S(void 0);_attrs=B(void 0);attrs=se(()=>this._attrs()||this.pBind());styles=se(()=>this.attrs()?.style);classes=se(()=>ye(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,L(()=>{let l=this.attrs()||{},{style:i,class:o}=l,s=Yt(l,["style","class"]);for(let[a,u]of Object.entries(s))if(a.startsWith("on")&&typeof u=="function"){let c=a.slice(2).toLowerCase();if(!this.listeners.some(p=>p.eventName===c)){let p=this.renderer.listen(this.el.nativeElement,c,u);this.listeners.push({eventName:c,unlisten:p})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,a):(this.renderer.setAttribute(this.el.nativeElement,a,u.toString()),a in this.el.nativeElement&&(this.el.nativeElement[a]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Si(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(H(J),H(ce))};static \u0275dir=I({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(ui(i.styles()),K(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),tr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();var nr=`
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
`;var Yo=`
    ${nr}

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
`,Zo={root:({instance:t})=>{let r=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":Me(r)&&String(r).length===1,"p-badge-dot":xe(r),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},ir=(()=>{class t extends ${name="badge";style=Yo;classes=Zo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var rr=new E("BADGE_INSTANCE");var On=(()=>{class t extends z{componentName="Badge";$pcBadge=d(rr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(R,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=S();badgeSize=S();size=S();severity=S();value=S();badgeDisabled=S(!1,{transform:w});_componentStyle=d(ir);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=Y({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(oe("data-p",i.dataP),K(i.cn(i.cx("root"),i.styleClass())),It("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[V([ir,{provide:rr,useExisting:t},{provide:ue,useExisting:t}]),de([R]),M],decls:1,vars:1,template:function(n,i){n&1&&Ot(0),n&2&&Pt(i.value())},dependencies:[ae,ve,tr],encapsulation:2,changeDetection:0})}return t})(),or=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[On,ve,ve]})}return t})();var qo=["*"],Jo={root:"p-fluid"},sr=(()=>{class t extends ${name="fluid";classes=Jo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var ar=new E("FLUID_INSTANCE"),Pn=(()=>{class t extends z{componentName="Fluid";$pcFluid=d(ar,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(R,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=d(sr);static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=Y({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&K(i.cx("root"))},features:[V([sr,{provide:ar,useExisting:t},{provide:ue,useExisting:t}]),de([R]),M],ngContentSelectors:qo,decls:1,vars:0,template:function(n,i){n&1&&(pe(),fe(0))},dependencies:[ae],encapsulation:2,changeDetection:0})}return t})();var Qo=["*"],es=`
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
`,lr=(()=>{class t extends ${name="baseicon";css=es;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ur=(()=>{class t extends z{spin=!1;_componentStyle=d(lr);getClassNames(){return ye("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=Y({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&K(i.getClassNames())},inputs:{spin:[2,"spin","spin",w]},features:[V([lr]),M],ngContentSelectors:Qo,decls:1,vars:0,template:function(n,i){n&1&&(pe(),fe(0))},encapsulation:2,changeDetection:0})}return t})();var ts=["data-p-icon","spinner"],cr=(()=>{class t extends ur{pathId;onInit(){this.pathId="url(#"+rt()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=Y({type:t,selectors:[["","data-p-icon","spinner"]],features:[M],attrs:ts,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(St(),rn(0,"g"),sn(1,"path",0),on(),rn(2,"defs")(3,"clipPath",1),sn(4,"rect",2),on()()),n&2&&(oe("clip-path",i.pathId),j(3),ri("id",i.pathId))},encapsulation:2})}return t})();var dr=`
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
`;var ns=`
    ${dr}

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
`,is={root:"p-ink"},pr=(()=>{class t extends ${name="ripple";style=ns;classes=is;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var fr=(()=>{class t extends z{componentName="Ripple";zone=d(Jt);_componentStyle=d(pr);animationListener;mouseDownListener;timeout;constructor(){super(),L(()=>{Ne(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&ke(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Cn(n)&&!Sn(n)){let l=Math.max(Ii(this.el.nativeElement),Oi(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let i=Fi(this.el.nativeElement),o=e.pageX-i.left+this.document.body.scrollTop-Sn(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Cn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),!this.$unstyled()&&it(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&(!this.$unstyled()&&ke(l,"p-ink-active"),l.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&ke(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&ke(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Pi(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[V([pr]),M]})}return t})();var hr=`
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
`;var rs=["content"],os=["loadingicon"],ss=["icon"],as=["*"],Er=(t,r)=>({class:t,pt:r});function ls(t,r){t&1&&ii(0)}function us(t,r){if(t&1&&Xe(0,"span",7),t&2){let e=Q(3);K(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),O("pBind",e.ptm("loadingIcon")),oe("aria-hidden",!0)}}function cs(t,r){if(t&1&&(St(),Xe(0,"svg",8)),t&2){let e=Q(3);K(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),O("pBind",e.ptm("loadingIcon"))("spin",!0),oe("aria-hidden",!0)}}function ds(t,r){if(t&1&&(At(0),Ae(1,us,1,4,"span",3)(2,cs,1,5,"svg",6),_t()),t&2){let e=Q(2);j(),O("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),j(),O("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function ps(t,r){}function fs(t,r){if(t&1&&Ae(0,ps,0,0,"ng-template",9),t&2){let e=Q(2);O("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function hs(t,r){if(t&1&&(At(0),Ae(1,ds,3,2,"ng-container",2)(2,fs,1,1,null,5),_t()),t&2){let e=Q();j(),O("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),j(),O("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",an(3,Er,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function gs(t,r){if(t&1&&Xe(0,"span",7),t&2){let e=Q(2);K(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),O("pBind",e.ptm("icon")),oe("data-p",e.dataIconP)}}function ms(t,r){}function bs(t,r){if(t&1&&Ae(0,ms,0,0,"ng-template",9),t&2){let e=Q(2);O("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function ys(t,r){if(t&1&&(At(0),Ae(1,gs,1,4,"span",3)(2,bs,1,1,null,5),_t()),t&2){let e=Q();j(),O("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),j(),O("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",an(3,Er,e.cx("icon"),e.ptm("icon")))}}function Ds(t,r){if(t&1&&(tn(0,"span",7),Ot(1),nn()),t&2){let e=Q();K(e.cx("label")),O("pBind",e.ptm("label")),oe("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),j(),Pt(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function vs(t,r){if(t&1&&Xe(0,"p-badge",10),t&2){let e=Q();O("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Es={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,r])=>!!r).reduce((r,[e])=>r+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},He=(()=>{class t extends ${name="button";style=hr;classes=Es;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var gr=new E("BUTTON_INSTANCE"),mr=new E("BUTTON_DIRECTIVE_INSTANCE"),br=new E("BUTTON_LABEL_INSTANCE"),yr=new E("BUTTON_ICON_INSTANCE"),Se={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Dr=(()=>{class t extends z{componentName="ButtonLabel";ptButtonLabel=S();pButtonLabelPT=S();pButtonLabelUnstyled=S();$pcButtonLabel=d(br,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(R,{self:!0});constructor(){super(),L(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&Ft("p-button-label",!i.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[V([He,{provide:br,useExisting:t},{provide:ue,useExisting:t}]),de([R]),M]})}return t})(),vr=(()=>{class t extends z{componentName="ButtonIcon";ptButtonIcon=S();pButtonIconPT=S();pButtonUnstyled=S();$pcButtonIcon=d(yr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(R,{self:!0});constructor(){super(),L(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&Ft("p-button-icon",!i.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[V([He,{provide:yr,useExisting:t},{provide:ue,useExisting:t}]),de([R]),M]})}return t})(),Td=(()=>{class t extends z{componentName="Button";$pcButtonDirective=d(mr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(R,{self:!0});_componentStyle=d(He);ptButtonDirective=S();pButtonPT=S();pButtonUnstyled=S();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),L(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),L(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),L(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=S(void 0,{transform:w});iconSignal=ln(vr);labelSignal=ln(Dr);isIconOnly=se(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Se);pcFluid=d(Pn,{optional:!0,host:!0,skipSelf:!0});isTextButton=se(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
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
    </svg>`;onAfterViewInit(){!this.$unstyled()&&it(this.htmlElement,this.getStyleClass().join(" ")),Ne(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[Se.button,Se.component];return this.icon&&!this.label&&xe(this.htmlElement.textContent)&&e.push(Se.iconOnly),this.loading&&(e.push(Se.disabled,Se.loading),!this.icon&&this.label&&e.push(Se.labelOnly),this.icon&&!this.label&&!xe(this.htmlElement.textContent)&&e.push(Se.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>e.some(o=>i===`p-button-${o}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Be(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let n=Bt("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Be(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,i=!this.$unstyled()&&this.getIconClass(),o=Bt("span",{class:this.cn(this.cx("icon"),n,i),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(o.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(o,this.htmlElement.firstChild)}}updateLabel(){let e=Be(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Be(this.htmlElement,'[data-pc-section="buttonicon"]'),n=Be(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e&&!this.$unstyled()?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,o){n&1&&ai(o,i.iconSignal,vr,5)(o,i.labelSignal,Dr,5),n&2&&li(2)},hostVars:4,hostBindings:function(n,i){n&2&&Ft("p-button-icon-only",!i.$unstyled()&&i.isIconOnly())("p-button-text",!i.$unstyled()&&i.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",w],plain:[2,"plain","plain",w],raised:[2,"raised","raised",w],size:"size",outlined:[2,"outlined","outlined",w],rounded:[2,"rounded","rounded",w],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[V([He,{provide:mr,useExisting:t},{provide:ue,useExisting:t}]),de([R]),M]})}return t})(),Cs=(()=>{class t extends z{componentName="Button";hostName="";$pcButton=d(gr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(R,{self:!0});_componentStyle=d(He);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=S(void 0,{transform:w});onClick=new wt;onFocus=new wt;onBlur=new wt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=d(Pn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=Y({type:t,selectors:[["p-button"]],contentQueries:function(n,i,o){if(n&1&&si(o,rs,5)(o,os,5)(o,ss,5)(o,Bi,4),n&2){let s;qe(s=Je())&&(i.contentTemplate=s.first),qe(s=Je())&&(i.loadingIconTemplate=s.first),qe(s=Je())&&(i.iconTemplate=s.first),qe(s=Je())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",w],raised:[2,"raised","raised",w],rounded:[2,"rounded","rounded",w],text:[2,"text","text",w],plain:[2,"plain","plain",w],outlined:[2,"outlined","outlined",w],link:[2,"link","link",w],tabindex:[2,"tabindex","tabindex",et],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",w],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",w],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[V([He,{provide:gr,useExisting:t},{provide:ue,useExisting:t}]),de([R]),M],ngContentSelectors:as,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(pe(),tn(0,"button",0),oi("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),fe(1),Ae(2,ls,1,0,"ng-container",1)(3,hs,3,6,"ng-container",2)(4,ys,3,6,"ng-container",2)(5,Ds,2,6,"span",3)(6,vs,1,4,"p-badge",4),nn()),n&2&&(K(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),O("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),oe("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),j(2),O("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),j(),O("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),j(),O("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),j(),O("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),j(),O("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[ae,fn,gn,hn,fr,er,cr,or,On,ve,R],encapsulation:2,changeDetection:0})}return t})(),Ad=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[ae,Cs,ve,ve]})}return t})();var we=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(l=>o.indexOf(l)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var Vt=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},zt=class{encodeKey(r){return Cr(r)}encodeValue(r){return Cr(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Ss(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,l]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],a=e.get(s)||[];a.push(l),e.set(s,a)}),e}var ws=/%(\d[a-f0-9])/gi,Ts={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Cr(t){return encodeURIComponent(t).replace(ws,(r,e)=>Ts[e]??r)}function Ht(t){return`${t}`}var me=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new zt,r.fromString){if(r.fromObject)throw new q(2805,!1);this.map=Ss(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(Ht):[Ht(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(Ht(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(Ht(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function As(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Sr(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function wr(t){return typeof Blob<"u"&&t instanceof Blob}function Tr(t){return typeof FormData<"u"&&t instanceof FormData}function _s(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Ar="Content-Type",_r="Accept",Ir="text/plain",Fr="application/json",Is=`${Fr}, ${Ir}, */*`,Ve=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(As(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new q(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new we,this.context??=new Vt,!this.params)this.params=new me,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let l=e.indexOf("?"),a=l===-1?"?":l<e.length-1?"&":"";this.urlWithParams=e+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Sr(this.body)||wr(this.body)||Tr(this.body)||_s(this.body)?this.body:this.body instanceof me?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Tr(this.body)?null:wr(this.body)?this.body.type||null:Sr(this.body)?null:typeof this.body=="string"?Ir:this.body instanceof me?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Fr:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,s=r.priority||this.priority,l=r.cache||this.cache,a=r.mode||this.mode,u=r.redirect||this.redirect,c=r.credentials||this.credentials,p=r.referrer??this.referrer,h=r.integrity||this.integrity,f=r.referrerPolicy||this.referrerPolicy,m=r.transferCache??this.transferCache,v=r.timeout??this.timeout,g=r.body!==void 0?r.body:this.body,y=r.withCredentials??this.withCredentials,C=r.reportProgress??this.reportProgress,F=r.headers||this.headers,A=r.params||this.params,ie=r.context??this.context;return r.setHeaders!==void 0&&(F=Object.keys(r.setHeaders).reduce((re,X)=>re.set(X,r.setHeaders[X]),F)),r.setParams&&(A=Object.keys(r.setParams).reduce((re,X)=>re.set(X,r.setParams[X]),A)),new t(e,n,g,{params:A,headers:F,context:ie,reportProgress:C,responseType:i,withCredentials:y,transferCache:m,keepalive:o,cache:l,priority:s,timeout:v,mode:a,redirect:u,credentials:c,referrer:p,integrity:h,referrerPolicy:f})}},Ie=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Ie||{}),We=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new we,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},Wt=class t extends We{constructor(r={}){super(r)}type=Ie.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},at=class t extends We{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=Ie.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},ze=class extends We{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Fs=200,Os=204;var Ps=new E("");var Ls=/^\)\]\}',?\n/;var Rn=(()=>{class t{xhrFactory;tracingService=d(qn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new q(-2800,!1);let n=this.xhrFactory;return Zt(null).pipe(zn(()=>new Un(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((g,y)=>s.setRequestHeader(g,y.join(","))),e.headers.has(_r)||s.setRequestHeader(_r,Is),!e.headers.has(Ar)){let g=e.detectContentTypeHeader();g!==null&&s.setRequestHeader(Ar,g)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let l=e.serializeBody(),a=null,u=()=>{if(a!==null)return a;let g=s.statusText||"OK",y=new we(s.getAllResponseHeaders()),C=s.responseURL||e.url;return a=new Wt({headers:y,status:s.status,statusText:g,url:C}),a},c=this.maybePropagateTrace(()=>{let{headers:g,status:y,statusText:C,url:F}=u(),A=null;y!==Os&&(A=typeof s.response>"u"?s.responseText:s.response),y===0&&(y=A?Fs:0);let ie=y>=200&&y<300;if(e.responseType==="json"&&typeof A=="string"){let re=A;A=A.replace(Ls,"");try{A=A!==""?JSON.parse(A):null}catch(X){A=re,ie&&(ie=!1,A={error:X,text:A})}}ie?(o.next(new at({body:A,headers:g,status:y,statusText:C,url:F||void 0})),o.complete()):o.error(new ze({error:A,headers:g,status:y,statusText:C,url:F||void 0}))}),p=this.maybePropagateTrace(g=>{let{url:y}=u(),C=new ze({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:y||void 0});o.error(C)}),h=p;e.timeout&&(h=this.maybePropagateTrace(g=>{let{url:y}=u(),C=new ze({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:y||void 0});o.error(C)}));let f=!1,m=this.maybePropagateTrace(g=>{f||(o.next(u()),f=!0);let y={type:Ie.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),e.responseType==="text"&&s.responseText&&(y.partialText=s.responseText),o.next(y)}),v=this.maybePropagateTrace(g=>{let y={type:Ie.UploadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),o.next(y)});return s.addEventListener("load",c),s.addEventListener("error",p),s.addEventListener("timeout",h),s.addEventListener("abort",p),e.reportProgress&&(s.addEventListener("progress",m),l!==null&&s.upload&&s.upload.addEventListener("progress",v)),s.send(l),o.next({type:Ie.Sent}),()=>{s.removeEventListener("error",p),s.removeEventListener("abort",p),s.removeEventListener("load",c),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",m),l!==null&&s.upload&&s.upload.removeEventListener("progress",v)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(U(tt))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Rs(t,r){return r(t)}function Ns(t,r,e){return(n,i)=>Wn(e,()=>r(n,o=>t(o,i)))}var Or=new E("",{factory:()=>[]}),Pr=new E(""),Lr=new E("",{factory:()=>!0});var Nn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=U(Rn),i},providedIn:"root"})}return t})();var Gt=(()=>{class t{backend;injector;chain=null;pendingTasks=d(Kn);contributeToStability=d(Lr);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Or),...this.injector.get(Pr,[])]));this.chain=n.reduceRight((i,o)=>Ns(i,o,this.injector),Rs)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(Vn(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(U(Nn),U(Xt))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=U(Gt),i},providedIn:"root"})}return t})();function Ln(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Kt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof Ve)o=e;else{let a;i.headers instanceof we?a=i.headers:a=new we(i.headers);let u;i.params&&(i.params instanceof me?u=i.params:u=new me({fromObject:i.params})),o=new Ve(e,n,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:u,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=Zt(o).pipe(Hn(a=>this.handler.handle(a)));if(e instanceof Ve||i.observe==="events")return s;let l=s.pipe(jn(a=>a instanceof at));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return l.pipe(Ze(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new q(2806,!1);return a.body}));case"blob":return l.pipe(Ze(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new q(2807,!1);return a.body}));case"text":return l.pipe(Ze(a=>{if(a.body!==null&&typeof a.body!="string")throw new q(2808,!1);return a.body}));default:return l.pipe(Ze(a=>a.body))}case"response":return l;default:throw new q(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new me().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,Ln(i,n))}post(e,n,i={}){return this.request("POST",e,Ln(i,n))}put(e,n,i={}){return this.request("PUT",e,Ln(i,n))}static \u0275fac=function(n){return new(n||t)(U(xn))};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xs=new E("",{factory:()=>!0}),Ms="XSRF-TOKEN",ks=new E("",{factory:()=>Ms}),Bs="X-XSRF-TOKEN",$s=new E("",{factory:()=>Bs}),Us=(()=>{class t{cookieName=d(ks);doc=d(x);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=mn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=D({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=U(Us),i},providedIn:"root"})}return t})();function js(t,r){if(!d(xs)||t.method==="GET"||t.method==="HEAD")return r(t);try{let i=d(Re).href,{origin:o}=new URL(i),{origin:s}=new URL(t.url,o);if(o!==s)return r(t)}catch(i){return r(t)}let e=d(Rr).getToken(),n=d($s);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function Hs(...t){let r=[Kt,Gt,{provide:xn,useExisting:Gt},{provide:Nn,useFactory:()=>d(Ps,{optional:!0})??d(Rn)},{provide:Or,useValue:js,multi:!0}];for(let e of t)r.push(...e.\u0275providers);return Ct(r)}var Nr=class t{http=d(Kt);get(r,e){return this.http.get(r,e)}post(r,e,n){return this.http.post(r,e,n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})};export{Lt as a,Qr as b,un as c,Rt as d,mi as e,oo as f,fn as g,gn as h,uo as i,ae as j,mn as k,tt as l,fo as m,Ne as n,xl as o,Ml as p,Kt as q,Hs as r,Me as s,Si as t,Yl as u,Zl as v,Bi as w,ve as x,$ as y,Fu as z,ue as A,z as B,R as C,tr as D,Pn as E,Td as F,Cs as G,Ad as H,Nr as I};
