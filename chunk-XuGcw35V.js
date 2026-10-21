import{n as s,r as t,t as r}from"./chunk-C9yOwMO6.js";import{$ as Rt$1,$n as up,A as Ih,At as be$1,B as MI,Bt as dE,C as GE,Cr as zo$1,D as Hy,Dn as np,Dt as ap,En as nl,Ft as cP,Gn as sE,Gt as eh,Ht as dr$1,Jt as ep,K as On$1,Kn as sP,Kt as el,Ln as pu,Mt as bp,Nn as ou,O as Ic,On as oP,Ot as b,Pn as pE,Pt as cE,Q as Rp,Qn as tp,Qt as gD,R as Le$1,Sn as mr$1,St as _e$1,Tt as ae,U as NE,Un as rr$1,V as Me,Wn as sD,Xt as fc,Y as QE,Yt as fE,_ as Ee,_n as mc,_r as yp,a as Ai$1,an as ho$1,ar as wI,bt as _E,c as C$1,cn as jE,cr as xo$1,d as D,dr as yc,er as ur$1,f as DI,fr as yg,ft as We$1,h as Ec,hn as lp,ht as Y$1,i as AI,in as hn$1,it as So$1,jn as op,kn as oe,l as Ce,mn as lP,mr as yi$1,mt as Xf,nt as SI,on as hu,pn as lE,qn as si,qt as em,r as $s,rn as hg,s as Bf,sn as ip,tn as go,tr as vc,tt as S,ur as ya,vt as Zf,wn as nP,x as Ft,xn as mp,xr as zf,xt as _I,y as El,z as Lg}from"./chunk-IXL62mWL.js";var ui=null;function It(){return ui}function Hr(t){ui??=t}var sn=class{};var Ve=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:()=>D(ci),providedIn:`platform`})}return t})();var ci=(()=>{class t extends Ve{_location;_history;_doc=D(So$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return It().getBaseHref(this._doc)}onPopState(e){let n=It().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`popstate`,e,!1),()=>n.removeEventListener(`popstate`,e)}onHashChange(e){let n=It().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`hashchange`,e,!1),()=>n.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:()=>new t,providedIn:`platform`})}return t})();function hi(t,r){return t?r?t.endsWith(`/`)?r.startsWith(`/`)?t+r.slice(1):t+r:r.startsWith(`/`)?t+r:`${t}/${r}`:t:r}function di(t){let r=t.search(/#|\?|$/);return t[r-1]===`/`?t.slice(0,r-1)+t.slice(r):t}function Oe(t){return t&&t[0]!==`?`?`?${t}`:t}var Ot=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:()=>D(zr),providedIn:`root`})}return t})();var Vr=new S(``);var zr=(()=>{class t extends Ot{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??D(So$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return hi(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Oe(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let s=this.prepareExternalUrl(i+Oe(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,o){let s=this.prepareExternalUrl(i+Oe(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(n){return new(n||t)(Ce(Ve),Ce(Vr,8))};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var fi=(()=>{class t{_subject=new Y$1;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Kr(di(pi(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=``){return this.path()==this.normalize(e+Oe(n))}normalize(e){return t.stripTrailingSlash(Gr(this._basePath,pi(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n=``,i=null){this._locationStrategy.pushState(i,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Oe(n)),i)}replaceState(e,n=``,i=null){this._locationStrategy.replaceState(i,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Oe(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Oe;static joinWithSlash=hi;static stripTrailingSlash=di;static ɵfac=function(n){return new(n||t)(Ce(Ot))};static ɵprov=oe({token:t,factory:()=>Wr(),providedIn:`root`})}return t})();function Wr(){return new fi(Ce(Ot))}function Gr(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:r}function pi(t){return t.replace(/\/index\.html$/,``)}function Kr(t){if(new RegExp(`^(https?:)?//`).test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var an=/\s+/;var gi=[];var Yr=(()=>{class t{_ngEl;_renderer;initialClasses=gi;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(an):gi}set ngClass(e){this.rawClass=typeof e==`string`?e.trim().split(an):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(an).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static ɵfac=function(n){return new(n||t)(mr$1(dr$1),mr$1(ya))};static ɵdir=_I({type:t,selectors:[[``,`ngClass`,``]],inputs:{klass:[0,`class`,`klass`],ngClass:`ngClass`}})}return t})();var cn=(()=>{class t{_viewContainer;_context=new Pt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){mi(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){mi(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static ɵfac=function(n){return new(n||t)(mr$1(yi$1),mr$1(rr$1))};static ɵdir=_I({type:t,selectors:[[``,`ngIf`,``]],inputs:{ngIf:`ngIf`,ngIfThen:`ngIfThen`,ngIfElse:`ngIfElse`}})}return t})();var Pt=class{$implicit=null;ngIf=null};function mi(t,r){if(t&&!t.createEmbeddedView)throw new b(2020,!1)}var dn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,o]=e.split(`.`),s=i.indexOf(`-`)===-1?void 0:zo$1.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static ɵfac=function(n){return new(n||t)(mr$1(dr$1),mr$1(gD),mr$1(ya))};static ɵdir=_I({type:t,selectors:[[``,`ngStyle`,``]],inputs:{ngStyle:`ngStyle`}})}return t})();var pn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=D(be$1);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static ɵfac=function(n){return new(n||t)(mr$1(yi$1))};static ɵdir=_I({type:t,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[Lg]})}return t})();function Xr(t,r){return new b(2100,!1)}var ln=class{createSubscription(r,e,n){return Rp(()=>r.subscribe({next:e,error:n}))}dispose(r){Rp(()=>r.unsubscribe())}};var un=class{createSubscription(r,e,n){return r.then(i=>e?.(i),i=>n?.(i)),{unsubscribe:()=>{e=null,n=null}}}dispose(r){r.unsubscribe()}};var Zr=new un;var qr=new ln;var Jr=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=D(Rt$1);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(fc(e))return Zr;if(Bf(e))return qr;throw Xr(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(n){return new(n||t)(mr$1(sP,16))};static ɵpipe=MI({name:`async`,type:t,pure:!1})}return t})();var de=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=wI({type:t});static ɵinj=El({})}return t})();function hn(t,r){r=encodeURIComponent(r);for(let e of t.split(`;`)){let n=e.indexOf(`=`),[i,o]=n==-1?[e,``]:[e.slice(0,n),e.slice(n+1)];if(i.trim()!==r)continue;let s=o;try{s=decodeURIComponent(o)}catch{}return s.length>1&&s[0]===`"`&&s[s.length-1]===`"`&&(s=s.slice(1,-1)),s}return null}var Qr=(()=>{class t{build(){return new XMLHttpRequest}static ɵfac=function(n){return new(n||t)};static ɵprov=ur$1({token:t,factory:t.ɵfac})}return t})();var fn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Ce(Qr),i},providedIn:`root`})}return t})();var to=`browser`;var no=`server`;function ze(t){return t===to}function mn(t){return t===no}var ml=(()=>{class t{static ɵprov=oe({token:t,providedIn:`root`,factory:()=>new gn(D(So$1),window)})}return t})();var gn=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r$1,e){this.window.scrollTo(s(r({},e),{left:r$1[0],top:r$1[1]}))}scrollToAnchor(r,e){let n=io(this.document,r);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(r){try{this.window.history.scrollRestoration=r}catch{console.warn(On$1(2400,!1))}}scrollToElement(r$2,e){let n=r$2.getBoundingClientRect(),i=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,s$1=this.offset();this.window.scrollTo(s(r({},e),{left:i-s$1[0],top:o-s$1[1]}))}};function io(t,r){let e=t.getElementById(r)||t.getElementsByName(r)[0];if(e)return e;if(typeof t.createTreeWalker==`function`&&t.body&&typeof t.body.attachShadow==`function`){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let o=i.shadowRoot;if(o){let s=o.getElementById(r)||o.querySelector(`[name="${CSS.escape(r)}"]`);if(s)return s}i=n.nextNode()}}return null}function bi(t){return t.replace(/\\/g,`\\\\`).replace(/[\n\r\f\0]/g,``).replace(/"/g,`\\"`)}var Di=t=>t.src;var ro=new S(``,{factory:()=>Di});var yi=/^((\s*\d+w\s*(,|$)){1,})$/;var oo=[1,2];var so=640;var ao=1920;var lo=1080;var bl=(()=>{class t{imageLoader=D(ro);config=uo(D(yg));renderer=D(ya);imgElement=D(dr$1).nativeElement;injector=D(be$1);destroyRef=D(_e$1);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,`loading`)})}ngOnInit(){We$1(`NgOptimizedImage`),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||=`100vw`:(this.setHostAttribute(`width`,this.width.toString()),this.setHostAttribute(`height`,this.height.toString())),this.setHostAttribute(`loading`,this.getLoadingBehavior()),this.setHostAttribute(`fetchpriority`,this.getFetchPriority()),this.setHostAttribute(`decoding`,this.getDecoding()),this.setHostAttribute(`ng-img`,`true`);this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()===`lazy`?this.setHostAttribute(`sizes`,`auto, `+this.sizes):this.setHostAttribute(`sizes`,this.sizes):this.ngSrcset&&yi.test(this.ngSrcset)&&this.getLoadingBehavior()===`lazy`&&this.setHostAttribute(`sizes`,`auto, 100vw`)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let n=e;this.loaderParams&&(n.loaderParams=this.loaderParams);let i=this.getAspectRatio();return i!==null&&n.width&&(n.height=Math.round(n.width/i)),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?`eager`:`lazy`}getFetchPriority(){return this.priority?`high`:`auto`}getDecoding(){return this.priority?`sync`:this.decoding??`auto`}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=yi.test(this.ngSrcset);return this.ngSrcset.split(`,`).filter(i=>i!==``).map(i=>{i=i.trim();let o=e?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${i}`}).join(`, `)}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()===`100vw`&&(n=e.filter(o=>o>=so)),n.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(`, `)}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute(`src`,n);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i&&this.setHostAttribute(`srcset`,i),i}getFixedSrcset(){return oo.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(`, `)}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>ao||this.height>lo),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Di&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url("${bi(this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0}))}")`:typeof e==`string`?`url("${bi(e)}")`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty(`blur`)?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let s=this.injector.get(sP);i(),o(),this.placeholder=!1,s.markForCheck()},i=this.renderer.listen(e,`load`,n),o=this.renderer.listen(e,`error`,n);this.destroyRef.onDestroy(()=>{i(),o()}),co(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static ɵfac=function(n){return new(n||t)};static ɵdir=_I({type:t,selectors:[[`img`,`ngSrc`,``]],hostVars:18,hostBindings:function(n,i){n&2&&mp(`position`,i.fill?`absolute`:null)(`width`,i.fill?`100%`:null)(`height`,i.fill?`100%`:null)(`inset`,i.fill?`0`:null)(`background-size`,i.placeholder?`cover`:null)(`background-position`,i.placeholder?`50% 50%`:null)(`background-repeat`,i.placeholder?`no-repeat`:null)(`background-image`,i.placeholder?i.generatePlaceholder(i.placeholder):null)(`filter`,i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?`blur(15px)`:null)},inputs:{ngSrc:[2,`ngSrc`,`ngSrc`,po],ngSrcset:`ngSrcset`,sizes:`sizes`,width:[2,`width`,`width`,lP],height:[2,`height`,`height`,lP],decoding:`decoding`,loading:`loading`,priority:[2,`priority`,`priority`,cP],loaderParams:`loaderParams`,disableOptimizedSrcset:[2,`disableOptimizedSrcset`,`disableOptimizedSrcset`,cP],fill:[2,`fill`,`fill`,cP],placeholder:[2,`placeholder`,`placeholder`,ho],placeholderConfig:`placeholderConfig`,src:`src`,srcset:`srcset`},features:[Lg]})}return t})();function uo(t){let r={};return t.breakpoints&&(r.breakpoints=t.breakpoints.sort((e,n)=>e-n)),Object.assign({},pu,t,r)}function co(t,r){t.complete&&t.naturalWidth&&r()}function po(t){return typeof t==`string`?t:Ft(t)}function ho(t){return typeof t==`string`&&t!==`true`&&t!==`false`&&t!==``?t:cP(t)}function pe(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i===`string`||i===`number`)r.push(n);else if(i===`object`){let o=Array.isArray(n)?[pe(...n)]:Object.entries(n).map(([s,l])=>l?s:void 0);r=o.length?r.concat(o.filter(s=>!!s)):r}}return r.join(` `).trim()}}function fe(t){return t==null||t===``||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t==`object`&&Object.keys(t).length===0}function bn(t,r,e=new WeakSet){if(t===r)return!0;if(!t||!r||typeof t!=`object`||typeof r!=`object`||e.has(t)||e.has(r))return!1;e.add(t).add(r);let n=Array.isArray(t),i=Array.isArray(r),o,s,l;if(n&&i){if(s=t.length,s!=r.length)return!1;for(o=s;o--!==0;)if(!bn(t[o],r[o],e))return!1;return!0}if(n!=i)return!1;let a=t instanceof Date,u=r instanceof Date;if(a!=u)return!1;if(a&&u)return t.getTime()==r.getTime();let c=t instanceof RegExp,p=r instanceof RegExp;if(c!=p)return!1;if(c&&p)return t.toString()==r.toString();let h=Object.keys(t);if(s=h.length,s!==Object.keys(r).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,h[o]))return!1;for(o=s;o--!==0;)if(l=h[o],!bn(t[l],r[l],e))return!1;return!0}function vi(t,r){return bn(t,r)}function Be(t){return typeof t==`function`&&`call`in t&&`apply`in t}function C(t){return!fe(t)}function yn(t,r){if(!t||!r)return null;try{let e=t[r];if(C(e))return e}catch{}if(Object.keys(t).length){if(Be(r))return r(t);if(r.indexOf(`.`)===-1)return t[r];{let e=r.split(`.`),n=t;for(let i=0,o=e.length;i<o;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function Dn(t,r,e){return e?yn(t,e)===yn(r,e):vi(t,r)}function he(t,r=!0){return t instanceof Object&&t.constructor===Object&&(r||Object.keys(t).length!==0)}function Ei(t={},r$3={}){let e=r({},t);return Object.keys(r$3).forEach(n=>{let i=n;he(r$3[i])&&i in t&&he(t[i])?e[i]=Ei(t[i],r$3[i]):e[i]=r$3[i]}),e}function vn(...t){return t.reduce((r,e,n)=>n===0?e:Ei(r,e),{})}function N(t,...r){return Be(t)?t(...r):t}function ne(t,r=!0){return typeof t==`string`&&(r||t!==``)}function Te(t){return ne(t)?t.replace(/(-|_)/g,``).toLowerCase():t}function ot(t,r=``,e={}){let n=Te(r).split(`.`),i=n.shift();return i?he(t)?ot(N(t[Object.keys(t).find(o=>Te(o)===i)||``],e),n.join(`.`),e):void 0:N(t,e)}function Rt(t,r=!0){return Array.isArray(t)&&(r||t.length!==0)}function En(t){return C(t)&&!isNaN(t)}function ge(t,r){if(r){let e=r.test(t);return r.lastIndex=0,e}return!1}function Pe(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,``).replace(/ {2,}/g,` `).replace(/ ([{:}]) /g,`$1`).replace(/([;,]) /g,`$1`).replace(/ !/g,`!`).replace(/: /g,`:`).trim()}function Lt(t){return ne(t)?t.replace(/(_)/g,`-`).replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase():t}function Ci(t,r){return t?t.classList?t.classList.contains(r):RegExp(`(^| )`+r+`( |$)`,`gi`).test(t.className):!1}function st(t,r){if(t&&r){let e=n=>{Ci(t,n)||(t.classList?t.classList.add(n):t.className+=` `+n)};[r].flat().filter(Boolean).forEach(n=>n.split(` `).forEach(e))}}function We(t,r){if(t&&r){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(RegExp(`(^|\\b)`+n.split(` `).join(`|`)+`(\\b|$)`,`gi`),` `)};[r].flat().filter(Boolean).forEach(n=>n.split(` `).forEach(e))}}function wi(t){for(let r of document?.styleSheets)try{for(let e of r?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Si(t){return t?Math.abs(t.scrollLeft):0}function Ti(t,r){if(t instanceof HTMLElement){let e=t.offsetWidth;if(r){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Sn(t){return typeof Element<`u`?t instanceof Element:typeof t==`object`&&!!t&&t.nodeType===1&&typeof t.nodeName==`string`}function Nt(t,r={}){if(Sn(t)){let e=(i,o)=>{let s=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[o].flat().reduce((l,a)=>{if(a!=null){let u=typeof a;if(u===`string`||u===`number`)l.push(a);else if(u===`object`){let c=Array.isArray(a)?e(i,a):Object.entries(a).map(([p,h])=>i===`style`&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}:${h}`:h?p:void 0);l=c.length?l.concat(c.filter(p=>!!p)):l}}return l},s)},n=i=>{e(`style`,i).forEach(o=>{let s=o.indexOf(`:`);if(s<0)return;let l=o.slice(0,s).trim(),a=o.slice(s+1).trim();l&&t.style.setProperty(l,a)})};Object.entries(r).forEach(([i,o])=>{if(o!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),o):i===`p-bind`||i===`pBind`?Nt(t,o):i===`style`?(n(o),(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=t.style.cssText)):(o=i===`class`?[...new Set(e(`class`,o))].join(` `).trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=o),t.setAttribute(i,o))}})}}function xt(t,r={},...e){if(t){let n=document.createElement(t);return Nt(n,r),n.append(...e),n}}function Ge(t,r){return Sn(t)?t.matches(r)?t:t.querySelector(r):null}function Cn(t){if(t){let r=t.offsetHeight,e=getComputedStyle(t);return r-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),r}return 0}function _i(t){if(t){let r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||Si(document.documentElement)||Si(document.body)||0)}}return{top:`auto`,left:`auto`}}function Ai(t,r){if(t){let e=t.offsetHeight;if(r){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function wn(t){if(t){let r=t.offsetWidth,e=getComputedStyle(t);return r-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),r}return 0}function Fi(t){t&&(`remove`in Element.prototype?t.remove():t.parentNode?.removeChild(t))}function Ii(t,r=``,e){if(Sn(t)&&e!=null){if(r===`style`){typeof e==`string`?t.style.cssText=e:typeof e==`object`&&Object.entries(e).forEach(([n,i])=>{if(i==null)return;let o=n.startsWith(`--`)?n:n.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase();t.style.setProperty(o,String(i))});return}t.setAttribute(r,e)}}function Oi(){let t=new Map;return{on(r,e){let n=t.get(r);return n?n.push(e):n=[e],t.set(r,n),this},off(r,e){let n=t.get(r);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(r,e){let n=t.get(r);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}function mo({skipUndefined:t=!1},...r$4){return r$4?.reduce((e,n={})=>{for(let i in n){let o=n[i];if(!(t&&o===void 0))if(i===`style`)e.style=r(r({},e.style),n.style);else if(i===`class`||i===`className`)e[i]=pe(e[i],n[i]);else if(Be(o)){let s=e[i];e[i]=s?(...l)=>{s(...l),o(...l)}:o}else e[i]=o}return e},{})}function Tn(...t){return mo({skipUndefined:!1},...t)}var Mt={};function at(t=`pui_id_`){return Object.hasOwn(Mt,t)||(Mt[t]=0),Mt[t]++,`${t}${Mt[t]}`}var Pi=[`*`];var U=(()=>{class t{static STARTS_WITH=`startsWith`;static CONTAINS=`contains`;static NOT_CONTAINS=`notContains`;static ENDS_WITH=`endsWith`;static EQUALS=`equals`;static NOT_EQUALS=`notEquals`;static IN=`in`;static LESS_THAN=`lt`;static LESS_THAN_OR_EQUAL_TO=`lte`;static GREATER_THAN=`gt`;static GREATER_THAN_OR_EQUAL_TO=`gte`;static BETWEEN=`between`;static IS=`is`;static IS_NOT=`isNot`;static BEFORE=`before`;static AFTER=`after`;static DATE_IS=`dateIs`;static DATE_IS_NOT=`dateIsNot`;static DATE_BEFORE=`dateBefore`;static DATE_AFTER=`dateAfter`}return t})();var au=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=DI({type:t,selectors:[[`p-header`]],standalone:!1,ngContentSelectors:Pi,decls:1,vars:0,template:function(n,i){n&1&&(cE(),lE(0))},encapsulation:2,changeDetection:1})}return t})();var lu=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=DI({type:t,selectors:[[`p-footer`]],standalone:!1,ngContentSelectors:Pi,decls:1,vars:0,template:function(n,i){n&1&&(cE(),lE(0))},encapsulation:2,changeDetection:1})}return t})();var Ri=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static ɵfac=function(n){return new(n||t)(mr$1(rr$1))};static ɵdir=_I({type:t,selectors:[[``,`pTemplate`,``]],inputs:{type:`type`,name:[0,`pTemplate`,`name`]}})}return t})();var Re=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=wI({type:t});static ɵinj=El({imports:[de]})}return t})();function fu(...t){return vn(...t)}var ie=Oi();var lt=/{([^}]*)}/g;var Ni=/(\d+\s+[\+\-\*\/]\s+\d+)/g;var xi=/var\([^)]+\)/g;function Li(t){return ne(t)?t.replace(/[A-Z]/g,(r,e)=>e===0?r:`.`+r.toLowerCase()).toLowerCase():t}function bo(t){return he(t)&&t.hasOwnProperty(`$value`)&&t.hasOwnProperty(`$type`)?t.$value:t}function yo(t){return t.replaceAll(/ /g,``).replace(/[^\w]/g,`-`)}function _n(t=``,r=``){return yo(`${ne(t,!1)&&ne(r,!1)?`${t}-`:t}${r}`)}function Mi(t=``,r=``){return`--${_n(t,r)}`}function Do(t=``){return((t.match(/{/g)||[]).length+(t.match(/}/g)||[]).length)%2!=0}function ki(t,r=``,e=``,n=[],i){if(ne(t)){let o=t.trim();if(Do(o))return;if(ge(o,lt)){let s=o.replaceAll(lt,l=>`var(${Mi(e,Lt(l.replace(/{|}/g,``).split(`.`).filter(a=>!n.some(u=>ge(a,u))).join(`-`)))}${C(i)?`, ${i}`:``})`);return ge(s.replace(xi,`0`),Ni)?`calc(${s})`:s}return o}else if(En(t))return t}function vo(t,r,e){ne(r,!1)&&t.push(`${r}:${e};`)}function Ke(t,r){return t?`${t}{${r}}`:``}function Bi(t,r){if(t.indexOf(`dt(`)===-1)return t;function e(s,l){let a=[],u=0,c=``,p=null,h=0;for(;u<=s.length;){let g=s[u];if((g===`"`||g===`'`||g==="`")&&s[u-1]!==`\\`&&(p=p===g?null:g),!p&&(g===`(`&&h++,g===`)`&&h--,(g===`,`||u===s.length)&&h===0)){let m=c.trim();m.startsWith(`dt(`)?a.push(Bi(m,l)):a.push(n(m)),c=``,u++;continue}g!==void 0&&(c+=g),u++}return a}function n(s){let l=s[0];if((l===`"`||l===`'`||l==="`")&&s[s.length-1]===l)return s.slice(1,-1);let a=Number(s);return isNaN(a)?s:a}let i=[],o=[];for(let s=0;s<t.length;s++)if(t[s]===`d`&&t.slice(s,s+3)===`dt(`)o.push(s),s+=2;else if(t[s]===`)`&&o.length>0){let l=o.pop();o.length===0&&i.push([l,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[l,a]=i[s],u=r(...e(t.slice(l+3,a),r));t=t.slice(0,l)+u+t.slice(a+1)}return t}var _e=(...t)=>Eo(A.getTheme(),...t);var Eo=(t={},r,e,n)=>{if(r){let{variable:i,options:o}=A.defaults||{},{prefix:s,transform:l}=t?.options||o||{},a=ge(r,lt)?r:`{${r}}`;return n===`value`||fe(n)&&l===`strict`?A.getTokenValue(r):ki(a,void 0,s,[i.excludedKeyRegex],e)}return``};function Ye(t,...r){return t instanceof Array?Bi(t.reduce((e,n,i)=>e+n+(N(r[i],{dt:_e})??``),``),_e):N(t,{dt:_e})}function So(t,r={}){let e=A.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=r,s=[],l=[],a=[{node:t,path:n}];for(;a.length;){let{node:c,path:p}=a.pop();for(let h in c){let g=c[h],m=bo(g),b=ge(h,o)?_n(p):_n(p,Lt(h));if(he(m))a.push({node:m,path:b});else{vo(l,Mi(b),ki(m,b,n,[o]));let E=b;n&&E.startsWith(n+`-`)&&(E=E.slice(n.length+1)),s.push(E.replace(/-/g,`.`))}}}let u=l.join(``);return{value:l,tokens:s,declarations:u,css:Ke(i,u)}}var le={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:`class`,selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:`attr`,selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:`media`,selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:`system`,selector:`@media (prefers-color-scheme: dark)`,matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:`custom`,selector:t,matched:!0}}}},resolve(t){let r=Object.keys(this.rules).filter(e=>e!==`custom`).map(e=>this.rules[e]);return[t].flat().map(e=>r.map(n=>n.resolve(e)).find(n=>n.matched)??this.rules.custom.resolve(e))}},_toVariables(t,r){return So(t,{prefix:r?.prefix})},getCommon({name:t$1=``,theme:r={},params:e,set:n,defaults:i}){let{preset:o,options:s}=r,l,a,u,c,p,h,g;if(C(o)&&s.transform!==`strict`){let{primitive:D,semantic:v,extend:M}=o,m=v||{},{colorScheme:j}=m,w=t(m,[`colorScheme`]),b=M||{},{colorScheme:Q}=b,ee=t(b,[`colorScheme`]),E=j||{},{dark:H}=E,Ne=t(E,[`dark`]),F=Q||{},{dark:ve}=F,Fe=t(F,[`dark`]),xe=C(D)?this._toVariables({primitive:D},s):{},dt=C(w)?this._toVariables({semantic:w},s):{},pt=C(Ne)?this._toVariables({light:Ne},s):{},ht=C(H)?this._toVariables({dark:H},s):{},ft=C(ee)?this._toVariables({semantic:ee},s):{},kn=C(Fe)?this._toVariables({light:Fe},s):{},Bn=C(ve)?this._toVariables({dark:ve},s):{},[Fr,Ir]=[xe.declarations??``,xe.tokens],[Or,Pr]=[dt.declarations??``,dt.tokens||[]],[Rr,Lr]=[pt.declarations??``,pt.tokens||[]],[Nr,xr]=[ht.declarations??``,ht.tokens||[]],[Mr,kr]=[ft.declarations??``,ft.tokens||[]],[Br,$r]=[kn.declarations??``,kn.tokens||[]],[Ur,jr]=[Bn.declarations??``,Bn.tokens||[]];l=this.transformCSS(t$1,Fr,`light`,`variable`,s,n,i),a=Ir,u=`${this.transformCSS(t$1,`${Or}${Rr}`,`light`,`variable`,s,n,i)}${this.transformCSS(t$1,`${Nr}`,`dark`,`variable`,s,n,i)}`,c=[...new Set([...Pr,...Lr,...xr])],p=`${this.transformCSS(t$1,`${Mr}${Br}color-scheme:light`,`light`,`variable`,s,n,i)}${this.transformCSS(t$1,`${Ur}color-scheme:dark`,`dark`,`variable`,s,n,i)}`,h=[...new Set([...kr,...$r,...jr])],g=N(o.css,{dt:_e})}return{primitive:{css:l,tokens:a},semantic:{css:u,tokens:c},global:{css:p,tokens:h},style:g}},getPreset({name:t$2=``,preset:r$5={},options:e,params:n,set:i,defaults:o,selector:s}){let l,a,u;if(C(r$5)&&e.transform!==`strict`){let m=t$2.replace(`-directive`,``),c=r$5,{colorScheme:b,extend:E,css:F}=c,D=t(c,[`colorScheme`,`extend`,`css`]),p=E||{},{colorScheme:v}=p,M=t(p,[`colorScheme`]),h=b||{},{dark:j}=h,w=t(h,[`dark`]),g=v||{},{dark:Q}=g,ee=t(g,[`dark`]),H=C(D)?this._toVariables({[m]:r(r({},D),M)},e):{},Ne=C(w)?this._toVariables({[m]:r(r({},w),ee)},e):{},ve=C(j)?this._toVariables({[m]:r(r({},j),Q)},e):{},[Fe,xe]=[H.declarations??``,H.tokens||[]],[dt,pt]=[Ne.declarations??``,Ne.tokens||[]],[ht,ft]=[ve.declarations??``,ve.tokens||[]];l=`${this.transformCSS(m,`${Fe}${dt}`,`light`,`variable`,e,i,o,s)}${this.transformCSS(m,ht,`dark`,`variable`,e,i,o,s)}`,a=[...new Set([...xe,...pt,...ft])],u=N(F,{dt:_e})}return{css:l,tokens:a,style:u}},getPresetC({name:t=``,theme:r={},params:e,set:n,defaults:i}){let{preset:o,options:s}=r,l=o?.components?.[t];return this.getPreset({name:t,preset:l,options:s,params:e,set:n,defaults:i})},getPresetD({name:t=``,theme:r={},params:e,set:n,defaults:i}){let o=t.replace(`-directive`,``),{preset:s,options:l}=r,a=s?.components?.[o]||s?.directives?.[o];return this.getPreset({name:o,preset:a,options:l,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return t.darkModeSelector!==`none`&&t.darkModeSelector!==!1},getColorSchemeOption(t,r){return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?r.options.darkModeSelector:t.darkModeSelector??r.options.darkModeSelector):[]},getLayerOrder(t,r={},e,n){let{cssLayer:i}=r;return i?`@layer ${N(i.order||i.name||`optimus`,e)}`:``},getCommonStyleSheet({name:t=``,theme:r={},params:e,props:n={},set:i,defaults:o}){let s=this.getCommon({name:t,theme:r,params:e,set:i,defaults:o}),l=Object.entries(n).reduce((a,[u,c])=>a.push(`${u}="${c}"`)&&a,[]).join(` `);return Object.entries(s||{}).reduce((a,[u,c])=>{if(he(c)&&Object.hasOwn(c,`css`)){let p=Pe(c.css),h=`${u}-variables`;a.push(`<style type="text/css" data-optimus-style-id="${h}" ${l}>${p}</style>`)}return a},[]).join(``)},getStyleSheet({name:t=``,theme:r={},params:e,props:n={},set:i,defaults:o}){let s={name:t,theme:r,params:e,set:i,defaults:o},l=(t.includes(`-directive`)?this.getPresetD(s):this.getPresetC(s))?.css,a=Object.entries(n).reduce((u,[c,p])=>u.push(`${c}="${p}"`)&&u,[]).join(` `);return l?`<style type="text/css" data-optimus-style-id="${t}-variables" ${a}>${Pe(l)}</style>`:``},createTokens(t={},r,e=``,n=``,i={}){let o=function(l,a={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:l,path:this.path,paths:a,value:void 0};u.push(this.path),a.name=this.path,a.binding||={};let c=this.value;if(typeof this.value==`string`&&lt.test(this.value)){let p=this.value.trim().replace(lt,h=>{let g=h.slice(1,-1),m=this.tokens[g];if(!m)return console.warn(`Token not found for path: ${g}`),`__UNRESOLVED__`;let b=m.computed(l,a,u);return Array.isArray(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:b?.value??`__UNRESOLVED__`});c=Ni.test(p.replace(xi,`0`))?`calc(${p})`:p}return fe(a.binding)&&delete a.binding,u.pop(),{colorScheme:l,path:this.path,paths:a,value:c.includes(`__UNRESOLVED__`)?void 0:c}},s=(l,a,u)=>{Object.entries(l).forEach(([c,p])=>{let h=ge(c,r.variable.excludedKeyRegex)?a:a?`${a}.${Li(c)}`:Li(c),g=u?`${u}.${c}`:c;he(p)?s(p,h,g):(i[h]||(i[h]={paths:[],computed:(m,b={},E=[])=>{if(i[h].paths.length===1)return i[h].paths[0].computed(i[h].paths[0].scheme,b.binding,E);if(m&&m!==`none`)for(let F=0;F<i[h].paths.length;F++){let D=i[h].paths[F];if(D.scheme===m)return D.computed(m,b.binding,E)}return i[h].paths.map(F=>F.computed(F.scheme,b[F.scheme],E))}}),i[h].paths.push({path:g,value:p,scheme:g.includes(`colorScheme.light`)?`light`:g.includes(`colorScheme.dark`)?`dark`:`none`,computed:o,tokens:i}))})};return s(t,e,n),i},getTokenValue(t$3,r,e){let n=(s=>s.split(`.`).filter(l=>!ge(l.toLowerCase(),e.variable.excludedKeyRegex)).join(`.`))(r),i=r.includes(`colorScheme.light`)?`light`:r.includes(`colorScheme.dark`)?`dark`:void 0,o=[t$3[n]?.computed(i)].flat().filter(s=>s);return o.length===1?o[0].value:o.reduce((s={},l)=>{let c=l,{colorScheme:a}=c;return s[a]=t(c,[`colorScheme`]),s},void 0)},getSelectorRule(t,r,e,n){return e===`class`||e===`attr`?Ke(C(r)?`${t}${r},${t} ${r}`:t,n):Ke(t,Ke(r??`:root,:host`,n))},transformCSS(t,r,e,n,i={},o,s,l){if(C(r)){let{cssLayer:a}=i;if(n!==`style`){let u=this.getColorSchemeOption(i,s);r=e===`dark`?u.reduce((c,{type:p,selector:h})=>(C(h)&&(c+=h.includes(`[CSS]`)?h.replace(`[CSS]`,r):this.getSelectorRule(h,l,p,r)),c),``):Ke(l??`:root,:host`,r)}if(a){let u={name:`optimus`,order:`optimus`};he(a)&&(u.name=N(a.name,{name:t,type:n})),C(u.name)&&(r=Ke(`@layer ${u.name}`,r),o?.layerNames(u.name))}return r}return``}};var A={defaults:{variable:{prefix:`p`,selector:`:root,:host`,excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:`p`,darkModeSelector:`system`,cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:r$6}=t;r$6&&(this._theme=s(r({},r$6),{options:r(r({},this.defaults.options),r$6.options)}),this._tokens=le.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){return this.theme?.preset||{}},get options(){return this.theme?.options||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ie.emit(`theme:change`,t)},getPreset(){return this.preset},setPreset(t){this._theme=s(r({},this.theme),{preset:t}),this._tokens=le.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ie.emit(`preset:change`,t),ie.emit(`theme:change`,this.theme)},getOptions(){return this.options},setOptions(t){this._theme=s(r({},this.theme),{options:t}),this.clearLoadedStyleNames(),ie.emit(`options:change`,t),ie.emit(`theme:change`,this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return le.getTokenValue(this.tokens,t,this.defaults)},getCommon(t=``,r){return le.getCommon({name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t=``,r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return le.getPresetC(e)},getDirective(t=``,r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return le.getPresetD(e)},getCustomPreset(t=``,r,e,n){let i={name:t,preset:r,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return le.getPreset(i)},getLayerOrderCSS(t=``){return le.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t=``,r,e=`style`,n){return le.transformCSS(t,r,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t=``,r,e={}){return le.getCommonStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,r,e={}){return le.getStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:r}){this._loadingStyles.size&&(this._loadingStyles.delete(r),ie.emit(`theme:${r}:load`,t),!this._loadingStyles.size&&ie.emit(`theme:load`))}};var $i=`
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
`;var Co=0;var Ui=(()=>{class t{document=D(So$1);use(e,n={}){let o=e,s=null,{immediate:l=!0,manual:a=!1,name:u=`style_${++Co}`,id:c=void 0,media:p=void 0,nonce:h=void 0,first:g=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-optimus-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement(`style`),s){if(!s.isConnected){o=e;let b=this.document.head;Ii(s,`nonce`,h),g&&b.firstChild?b.insertBefore(s,b.firstChild):b.appendChild(s),Nt(s,{type:`text/css`,media:p,nonce:h,"data-optimus-style-id":u})}s.textContent!==o&&(s.textContent=o)}return{id:c,name:u,el:s,css:o}}}static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Xe={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}};var wo=`
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
`;var z=(()=>{class t{name=`base`;useStyle=D(Ui);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},i=o=>o)=>{let o=i(Ye`${N(e,{dt:_e})}`);return o?this.useStyle.use(Pe(o),r({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n=``)=>this.load(this.style,e,(i=``)=>A.transformCSS(e.name||this.name,`${i}${Ye`${n}`}`));loadBaseCSS=(e={})=>this.load(wo,e);loadBaseStyle=(e={},n=``)=>this.load($i,e,(i=``)=>A.transformCSS(e.name||this.name,`${i}${Ye`${n}`}`));getCommonTheme=e=>A.getCommon(this.name,e);getComponentTheme=e=>A.getComponent(this.name,e);getPresetTheme=(e,n,i)=>A.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>A.getLayerOrderCSS(this.name);getStyleSheet=(e=``,n={})=>{if(this.css){let o=Pe(Ye`${N(this.css,{dt:_e})}${e}`),s=Object.entries(n).reduce((l,[a,u])=>l.push(`${a}="${u}"`)&&l,[]).join(` `);return`<style type="text/css" data-optimus-style-id="${this.name}" ${s}>${o}</style>`}return``};getCommonThemeStyleSheet=(e,n={})=>A.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[A.getStyleSheet(this.name,e,n)];if(this.style){let o=this.name===`base`?`global-style`:`${this.name}-style`,s=Ye`${N(this.style,{dt:_e})}`,l=Pe(A.transformCSS(o,s)),a=Object.entries(n).reduce((u,[c,p])=>u.push(`${c}="${p}"`)&&u,[]).join(` `);i.push(`<style type="text/css" data-optimus-style-id="${o}" ${a}>${l}</style>`)}return i.join(``)};static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var To=(()=>{class t{theme=xo$1(void 0);csp=xo$1({nonce:void 0});isThemeChanged=!1;document=D(So$1);baseStyle=D(z);constructor(){hu(()=>{ie.on(`theme:change`,e=>{Rp(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),hu(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){A.clearLoadedStyleNames(),ie.clear()}onThemeChange(e){A.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!==`none`&&!A.isStyleNameLoaded(`common`)){let{primitive:e,semantic:n,global:i,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,r({name:`primitive-variables`},s)),this.baseStyle.load(n?.css,r({name:`semantic-variables`},s)),this.baseStyle.load(i?.css,r({name:`global-variables`},s)),this.baseStyle.loadBaseStyle(r({name:`global-style`},s),o),A.setLoadedStyleName(`common`)}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var An=(()=>{class t extends To{ripple=xo$1(!1);platformId=D(hg);inputStyle=xo$1(null);inputVariant=xo$1(null);overlayAppendTo=xo$1(`self`);overlayOptions={};csp=xo$1({nonce:void 0});unstyled=xo$1(void 0);pt=xo$1(void 0);ptOptions=xo$1(void 0);filterMatchModeOptions={text:[U.STARTS_WITH,U.CONTAINS,U.NOT_CONTAINS,U.ENDS_WITH,U.EQUALS,U.NOT_EQUALS],numeric:[U.EQUALS,U.NOT_EQUALS,U.LESS_THAN,U.LESS_THAN_OR_EQUAL_TO,U.GREATER_THAN,U.GREATER_THAN_OR_EQUAL_TO],date:[U.DATE_IS,U.DATE_IS_NOT,U.DATE_BEFORE,U.DATE_AFTER]};translation={startsWith:`Starts with`,contains:`Contains`,notContains:`Not contains`,endsWith:`Ends with`,equals:`Equals`,notEquals:`Not equals`,noFilter:`No Filter`,lt:`Less than`,lte:`Less than or equal to`,gt:`Greater than`,gte:`Greater than or equal to`,is:`Is`,isNot:`Is not`,before:`Before`,after:`After`,dateIs:`Date is`,dateIsNot:`Date is not`,dateBefore:`Date is before`,dateAfter:`Date is after`,clear:`Clear`,apply:`Apply`,matchAll:`Match All`,matchAny:`Match Any`,addRule:`Add Rule`,removeRule:`Remove Rule`,accept:`Yes`,reject:`No`,choose:`Choose`,completed:`Completed`,upload:`Upload`,cancel:`Cancel`,pending:`Pending`,fileSizeTypes:[`B`,`KB`,`MB`,`GB`,`TB`,`PB`,`EB`,`ZB`,`YB`],dayNames:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],dayNamesShort:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],dayNamesMin:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],monthNames:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],monthNamesShort:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],chooseYear:`Choose Year`,chooseMonth:`Choose Month`,chooseDate:`Choose Date`,prevDecade:`Previous Decade`,nextDecade:`Next Decade`,prevYear:`Previous Year`,nextYear:`Next Year`,prevMonth:`Previous Month`,nextMonth:`Next Month`,prevHour:`Previous Hour`,nextHour:`Next Hour`,prevMinute:`Previous Minute`,nextMinute:`Next Minute`,prevSecond:`Previous Second`,nextSecond:`Next Second`,am:`am`,pm:`pm`,dateFormat:`mm/dd/yy`,firstDayOfWeek:0,today:`Today`,weekHeader:`Wk`,weak:`Weak`,medium:`Medium`,strong:`Strong`,passwordPrompt:`Enter a password`,emptyMessage:`No results found`,searchMessage:`Search results are available`,selectionMessage:`{0} items selected`,emptySelectionMessage:`No selected item`,emptySearchMessage:`No results found`,emptyFilterMessage:`No results found`,fileChosenMessage:`Files`,noFileChosenMessage:`No file chosen`,aria:{trueLabel:`True`,falseLabel:`False`,nullLabel:`Not Selected`,star:`1 star`,stars:`{star} stars`,selectAll:`All items selected`,unselectAll:`All items unselected`,close:`Close`,previous:`Previous`,next:`Next`,navigation:`Navigation`,scrollTop:`Scroll Top`,moveTop:`Move Top`,moveUp:`Move Up`,moveDown:`Move Down`,moveBottom:`Move Bottom`,moveToTarget:`Move to Target`,moveToSource:`Move to Source`,moveAllToTarget:`Move All to Target`,moveAllToSource:`Move All to Source`,pageLabel:`{page}`,firstPageLabel:`First Page`,lastPageLabel:`Last Page`,nextPageLabel:`Next Page`,prevPageLabel:`Previous Page`,rowsPerPageLabel:`Rows per page`,previousPageLabel:`Previous Page`,jumpToPageDropdownLabel:`Jump to Page Dropdown`,jumpToPageInputLabel:`Jump to Page Input`,selectRow:`Row Selected`,unselectRow:`Row Unselected`,expandRow:`Row Expanded`,collapseRow:`Row Collapsed`,showFilterMenu:`Show Filter Menu`,hideFilterMenu:`Hide Filter Menu`,filterOperator:`Filter Operator`,filterConstraint:`Filter Constraint`,editRow:`Row Edit`,saveEdit:`Save Edit`,cancelEdit:`Cancel Edit`,listView:`List View`,gridView:`Grid View`,slide:`Slide`,slideNumber:`{slideNumber}`,zoomImage:`Zoom Image`,zoomIn:`Zoom In`,zoomOut:`Zoom Out`,rotateRight:`Rotate Right`,rotateLeft:`Rotate Left`,listLabel:`Option List`,selectColor:`Select a color`,removeLabel:`Remove`,browseFiles:`Browse Files`,maximizeLabel:`Maximize`,minimizeLabel:`Minimize`}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Y$1;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=r(r({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:o,inputVariant:s,theme:l,overlayOptions:a,translation:u,filterMatchModeOptions:c,overlayAppendTo:p,zIndex:h,ptOptions:g,pt:m,unstyled:b}=e||{};n&&this.csp.set(n),p&&this.overlayAppendTo.set(p),i&&this.ripple.set(i),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),a&&(this.overlayOptions=a),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),h&&(this.zIndex=h),m&&this.pt.set(m),g&&this.ptOptions.set(g),b&&this.unstyled.set(b),l&&this.setThemeConfig({theme:l,csp:n})}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var _o=new S(`OPTIMUS_CONFIG`);function Bu(...t){let r=t?.map(n=>({provide:_o,useValue:n,multi:!1})),e=SI(()=>{let n=D(An);t?.forEach(i=>n.setConfig(i))});return ho$1([...r,e])}var ji=(()=>{class t extends z{name=`common`;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var me=new S(`PARENT_INSTANCE`);var Y=(()=>{class t{document=D(So$1);platformId=D(hg);el=D(dr$1);injector=D(be$1);cd=D(sP);renderer=D(ya);config=D(An);$parentInstance=D(me,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=D(ji);baseStyle=D(z);scopedStyleEl;parent=this.$params.parent;cn=pe;_themeScopedListener;themeChangeListenerMap=new Map;dt=nP();unstyled=nP();pt=nP();ptOptions=nP();$attrSelector=at(`pc`);get $name(){return this.componentName||`UnknownComponent`}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=xo$1(void 0);directiveUnstyled=xo$1(void 0);$unstyled=sD(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=sD(()=>N(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>N(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||N(e,this.$params))}get $style(){return r(r({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){hu(e=>{this.document&&!mn(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(`_themeScopedListener`,this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener(`_themeScopedListener`)})}),hu(e=>{this.document&&!mn(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(`_loadCoreStyles`,this._loadCoreStyles))),e(()=>{this._offThemeChangeListener(`_loadCoreStyles`)})}),this._hook(`onBeforeInit`)}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook(`onInit`)}ngOnChanges(e){this.onChanges(e),this._hook(`onChanges`,e)}ngDoCheck(){this.onDoCheck(),this._hook(`onDoCheck`)}ngAfterContentInit(){this.onAfterContentInit(),this._hook(`onAfterContentInit`)}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook(`onAfterContentChecked`)}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,``),this.onAfterViewInit(),this._hook(`onAfterViewInit`)}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook(`onAfterViewChecked`)}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook(`onDestroy`)}_mergeProps(e,...n){return Be(e)?e(...n):Tn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n=``,i={}){return ot(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),o=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),o?.(...n)}}_load(){Xe.isStyleNameLoaded(`base`)||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),Xe.setLoadedStyleName(`base`)),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(`_load`,()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,`global.css`,this.$params);C(e)&&this.baseStyle.load(e,r({name:`global`},this.$styleOptions))}_loadCoreStyles(){!Xe.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),Xe.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()===`none`)){if(!A.isStyleNameLoaded(`common`)){let{primitive:e,semantic:n,global:i,style:o}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,r({name:`primitive-variables`},this.$styleOptions)),this.baseStyle.load(n?.css,r({name:`semantic-variables`},this.$styleOptions)),this.baseStyle.load(i?.css,r({name:`global-variables`},this.$styleOptions)),this.baseStyle.loadBaseStyle(r({name:`global-style`},this.$styleOptions),o),A.setLoadedStyleName(`common`)}if(!A.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,r({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(r({name:`${this.$style?.name}-style`},this.$styleOptions),n),A.setLoadedStyleName(this.$style?.name)}if(!A.isStyleNameLoaded(`layer-order`)){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,r({name:`layer-order`,first:!0},this.$styleOptions)),A.setLoadedStyleName(`layer-order`)}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,r({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),Xe.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),ie.on(`theme:change`,i)}_removeThemeListeners(){this._offThemeChangeListener(`_themeScopedListener`),this._offThemeChangeListener(`_loadCoreStyles`),this._offThemeChangeListener(`_load`)}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(ie.off(`theme:change`,this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n=``,i={},o=!0){let s$2=/./g.test(n)&&!!i[n.split(`.`)[0]],{mergeSections:l=!0,mergeProps:a=!1}=this._getPropValue(`ptOptions`)?.()||this.config?.ptOptions?.()||{},u=o?s$2?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,c=s$2?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,s(r({},i),{global:u||{}})),p=this._getPTDatasets(n);return l||!l&&c?a?this._mergeProps(a,u,c,p):r(r(r({},u),c),p):r(r({},c),p)}_getPTDatasets(e=``){let n=`data-pc-`,i=e===`root`&&C(this.$pt()?.[`data-pc-section`]);return e!==`transition`&&s(r({},e===`root`&&s(r({[`${n}name`]:Te(i?this.$pt()?.[`data-pc-section`]:this.$name)},i&&{[`${n}extend`]:Te(this.$name)}),{[`${this.$attrSelector}`]:``})),{[`${n}section`]:Te(e.includes(`.`)?e.split(`.`).at(-1)??``:e)})}_getPTClassValue(e,n,i){let o=this._getOptionValue(e,n,i);return ne(o)||Rt(o)?{class:o}:o}_getPT(e,n=``,i){let o=(s,l=!1)=>{let a=i?i(s):s,u=Te(n),c=Te(this.$hostName||this.$name);return(l?u!==c?a?.[u]:void 0:a?.[u])??a};return e?.hasOwnProperty(`_usept`)?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)}_usePT(e,n,i,o){let s=l=>n?.call(this,l,i,o);if(e?.hasOwnProperty(`_usept`)){let{mergeSections:l=!0,mergeProps:a=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),c=s(e.value);return u===void 0&&c===void 0?void 0:ne(c)?c:ne(u)?u:l||!l&&c?a?this._mergeProps(a,u,c):r(r({},u),c):c}return s(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e=``,n={}){return this._getPTValue(this.$pt(),e,r(r({},this.$params),n))}ptms(e,n={}){return e.reduce((i,o)=>(i=Tn(i,this.ptm(o,n))||{},i),{})}ptmo(e={},n=``,i={}){return this._getPTValue(e,n,r({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:pe(this._getOptionValue(this.$style.classes,e,r(r({},this.$params),n)))}sx(e=``,n=!0,i={}){if(n){let o=this._getOptionValue(this.$style.inlineStyles,e,r(r({},this.$params),i));return r(r({},this._getOptionValue(this.baseComponentStyle.inlineStyles,e,r(r({},this.$params),i))),o)}}static ɵfac=function(n){return new(n||t)};static ɵdir=_I({type:t,inputs:{dt:[1,`dt`],unstyled:[1,`unstyled`],pt:[1,`pt`],ptOptions:[1,`ptOptions`]},features:[GE([ji,z]),Lg]})}return t})();var Hi=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=` `+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(` `);for(let o=0;o<i.length;o++)e.classList.add(i[o])}else{let i=n.split(` `);for(let o=0;o<i.length;o++)e.className+=` `+i[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp(`(^|\\b)`+n.split(` `).join(`|`)+`(\\b|$)`,`gi`),` `))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(` `).forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp(`(^| )`+n+`( |$)`,`gi`).test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var o=0;o<n.length;o++){if(n[o]==e)return i;n[o].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<i.length;s++){if(i[s]==e)return o;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,i=`self`){i!==`self`&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i=`self`,o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i===`self`?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let o=v=>{if(v)return getComputedStyle(v).getPropertyValue(`position`)===`relative`?v:o(v.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),p=this.getViewport(),g=o(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},m,b,E=`top`;a.top+l+s.height>p.height?(m=a.top-g.top-s.height,E=`bottom`,a.top+m<0&&(m=-1*a.top)):(m=l+a.top-g.top,E=`top`);let F=a.left+s.width-p.width,D=a.left-g.left;if(s.width>p.width?b=(a.left-g.left)*-1:F>0?b=D-F:b=a.left-g.left,e.style.top=m+`px`,e.style.left=b+`px`,e.style.transformOrigin=E,i){let v=wi(/-anchor-gutter$/)?.value;e.style.marginTop=E===`bottom`?`calc(${v??`2px`} * -1)`:v??``}}static absolutePosition(e,n,i=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,l=o.width,a=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),p=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),g=this.getViewport(),m,b;c.top+a+s>g.height?(m=c.top+p-s,e.style.transformOrigin=`bottom`,m<0&&(m=p)):(m=a+c.top+p,e.style.transformOrigin=`top`),c.left+l>g.width?b=Math.max(0,c.left+h+u-l):b=c.left+h,e.style.top=m+`px`,e.style.left=b+`px`,i&&(e.style.marginTop=origin===`bottom`?`calc(var(--p-anchor-gutter) * -1)`:`calc(var(--p-anchor-gutter))`)}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),o=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return o.test(a.getPropertyValue(`overflow`))||o.test(a.getPropertyValue(`overflowX`))||o.test(a.getPropertyValue(`overflowY`))};for(let l of i){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let u=a.split(`,`);for(let c of u){let p=this.findSingle(l,c);p&&s(p)&&n.push(p)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility=`hidden`,e.style.display=`block`;let n=e.offsetHeight;return e.style.display=`none`,e.style.visibility=`visible`,n}static getHiddenElementOuterWidth(e){e.style.visibility=`hidden`,e.style.display=`block`;let n=e.offsetWidth;return e.style.display=`none`,e.style.visibility=`visible`,n}static getHiddenElementDimensions(e){let n={};return e.style.visibility=`hidden`,e.style.display=`block`,n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display=`none`,e.style.visibility=`visible`,n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue(`borderTopWidth`),o=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue(`paddingTop`),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-o-l,p=e.scrollTop,h=e.clientHeight,g=this.getOuterHeight(n);c<0?e.scrollTop=p+c:c+g>h&&(e.scrollTop=p+c-h+g)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,o=0,s=function(){o=+e.style.opacity.replace(`,`,`.`)+(new Date().getTime()-i)/n,e.style.opacity=o,i=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,o=50,l=o/n;let a=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(a)),e.style.opacity=i},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype;return(i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1}).call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let o=getComputedStyle(e);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,o=n.getElementsByTagName(`body`)[0];return{width:e.innerWidth||i.clientWidth||o.clientWidth,height:e.innerHeight||i.clientHeight||o.clientHeight}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw`Can't replace element`;return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent;if(e.indexOf(`MSIE `)>0)return!0;if(e.indexOf(`Trident/`)>0){e.indexOf(`rv:`);return!0}return e.indexOf(`Edge/`)>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw`Cannot append `+n+` to `+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw`Cannot remove `+e+` from `+n}static removeElement(e){`remove`in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement==`object`?e instanceof HTMLElement:e&&typeof e==`object`&&e!==null&&e.nodeType===1&&typeof e.nodeName==`string`}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement(`div`);n.className=`p-scrollbar-measure`,document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement(`div`);e.className=`p-scrollbar-measure`,document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf(`compatible`)<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||``,version:n[2]||`0`}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e==`number`&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<`u`&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=``){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=``){let i=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of i){let l=getComputedStyle(s);this.isVisible(s)&&l.display!=`none`&&l.visibility!=`hidden`&&o.push(s)}return o}static getFocusableElement(e,n=``){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let o=getComputedStyle(i);if(this.isVisible(i)&&o.display!=`none`&&o.visibility!=`hidden`)return i}return null}static getFirstFocusableElement(e,n=``){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),o=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?o=i.length-1:o=s-1:s!=-1&&s!==i.length-1&&(o=s+1)}return i[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case`document`:return document;case`window`:return window;case`@next`:return n?.nextElementSibling;case`@prev`:return n?.previousElementSibling;case`@parent`:return n?.parentElement;case`@grandparent`:return n?.parentElement?.parentElement;default:let i=typeof e;if(i===`string`)return document.querySelector(e);if(i===`object`&&e.hasOwnProperty(`nativeElement`))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i===`true`||i===`false`?i===`true`:i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e=`p-overflow-hidden`){document.body.style.setProperty(`--scrollbar-width`,this.calculateBodyScrollbarWidth()+`px`),this.addClass(document.body,e)}static unblockBodyScroll(e=`p-overflow-hidden`){document.body.style.removeProperty(`--scrollbar-width`),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...i),o}}static setAttribute(e,n=``,i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(o,s)=>{let l=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((a,u)=>{if(u!=null){let c=typeof u;if(c===`string`||c===`number`)a.push(u);else if(c===`object`){let p=Array.isArray(u)?i(o,u):Object.entries(u).map(([h,g])=>o===`style`&&(g||g===0)?`${h.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}:${g}`:g?h:void 0);a=p.length?a.concat(p.filter(h=>!!h)):a}}return a},l)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let l=o.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):o===`pBind`?this.setAttributes(e,s):(s=o===`class`?[...new Set(i(`class`,s))].join(` `).trim():o===`style`?i(`style`,s).join(`;`).trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=``){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var Vi=(()=>{class t extends Y{autofocus=!1;focused=!1;platformId=D(hg);document=D(So$1);host=D(dr$1);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute(`autofocus`):this.host.nativeElement.setAttribute(`autofocus`,!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ze(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Hi.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵdir=_I({type:t,selectors:[[``,`pAutoFocus`,``]],inputs:{autofocus:[0,`pAutoFocus`,`autofocus`]},features:[zf]})}return t})();var x=(()=>{class t$4{el;renderer;pBind=nP(void 0);_attrs=xo$1(void 0);attrs=sD(()=>this._attrs()||this.pBind());styles=sD(()=>this.attrs()?.style);classes=sD(()=>pe(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,hu(()=>{let l=this.attrs()||{},{style:i,class:o}=l,s=t(l,[`style`,`class`]);for(let[a,u]of Object.entries(s))if(a.startsWith(`on`)&&typeof u==`function`){let c=a.slice(2).toLowerCase();if(!this.listeners.some(p=>p.eventName===c)){let p=this.renderer.listen(this.el.nativeElement,c,u);this.listeners.push({eventName:c,unlisten:p})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,a):(this.renderer.setAttribute(this.el.nativeElement,a,u.toString()),a in this.el.nativeElement&&(this.el.nativeElement[a]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Dn(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static ɵfac=function(n){return new(n||t$4)(mr$1(dr$1),mr$1(ya))};static ɵdir=_I({type:t$4,selectors:[[``,`pBind`,``]],hostVars:4,hostBindings:function(n,i){n&2&&(_E(i.styles()),NE(i.classes()))},inputs:{pBind:[1,`pBind`]}})}return t$4})();var zi=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=wI({type:t});static ɵinj=El({})}return t})();var Ao=`
    
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
`;var Fo={root:({instance:t})=>{let r=typeof t.value==`function`?t.value():t.value,e=typeof t.size==`function`?t.size():t.size,n=typeof t.badgeSize==`function`?t.badgeSize():t.badgeSize,i=typeof t.severity==`function`?t.severity():t.severity;return[`p-badge p-component`,{"p-badge-circle":C(r)&&String(r).length===1,"p-badge-dot":fe(r),"p-badge-sm":e===`small`||n===`small`,"p-badge-lg":e===`large`||n===`large`,"p-badge-xl":e===`xlarge`||n===`xlarge`,"p-badge-info":i===`info`,"p-badge-success":i===`success`,"p-badge-warn":i===`warn`,"p-badge-danger":i===`danger`,"p-badge-secondary":i===`secondary`,"p-badge-contrast":i===`contrast`}]}};var Gi=(()=>{class t extends z{name=`badge`;style=Ao;classes=Fo;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var Ki=new S(`BADGE_INSTANCE`);var In=(()=>{class t extends Y{componentName=`Badge`;$pcBadge=D(Ki,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=nP();badgeSize=nP();size=nP();severity=nP();value=nP();badgeDisabled=nP(!1,{transform:cP});_componentStyle=D(Gi);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-badge`]],hostVars:5,hostBindings:function(n,i){n&2&&(Xf(`data-p`,i.dataP),NE(i.cn(i.cx(`root`),i.styleClass())),mp(`display`,i.badgeDisabled()?`none`:null))},inputs:{styleClass:[1,`styleClass`],badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`]},features:[GE([Gi,{provide:Ki,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf],decls:1,vars:1,template:function(n,i){n&1&&jE(0),n&2&&bp(i.value())},dependencies:[de,Re,zi],encapsulation:2})}return t})();var Yi=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=wI({type:t});static ɵinj=El({imports:[In,Re,Re]})}return t})();var Oo=[`*`];var Po={root:`p-fluid`};var Xi=(()=>{class t extends z{name=`fluid`;classes=Po;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var Zi=new S(`FLUID_INSTANCE`);var On=(()=>{class t extends Y{componentName=`Fluid`;$pcFluid=D(Zi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=D(Xi);static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-fluid`]],hostVars:2,hostBindings:function(n,i){n&2&&NE(i.cx(`root`))},features:[GE([Xi,{provide:Zi,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf],ngContentSelectors:Oo,decls:1,vars:0,template:function(n,i){n&1&&(cE(),lE(0))},dependencies:[de],encapsulation:2})}return t})();var Ro=[`*`];var Lo=`
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
`;var qi=(()=>{class t extends z{name=`baseicon`;css=Lo;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ji=(()=>{class t extends Y{spin=!1;_componentStyle=D(qi);getClassNames(){return pe(`p-icon`,{"p-icon-spin":this.spin})}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[`ng-component`]],hostAttrs:[`width`,`14`,`height`,`14`,`viewBox`,`0 0 14 14`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],hostVars:2,hostBindings:function(n,i){n&2&&NE(i.getClassNames())},inputs:{spin:[2,`spin`,`spin`,cP]},features:[GE([qi]),zf],ngContentSelectors:Ro,decls:1,vars:0,template:function(n,i){n&1&&(cE(),lE(0))},encapsulation:2})}return t})();var Qi=(()=>{class t extends Ji{pathId;onInit(){this.pathId=`url(#`+at()+`)`}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[``,`data-p-icon`,`spinner`]],features:[zf],decls:5,vars:2,consts:[[`d`,`M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,i){n&1&&(ou(),yc(0,`g`),np(1,`path`,0),vc(),yc(2,`defs`)(3,`clipPath`,1),np(4,`rect`,2),vc()()),n&2&&(Xf(`clip-path`,i.pathId),Hy(3),ip(`id`,i.pathId))},encapsulation:2,changeDetection:1})}return t})();var No=`
    
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
`;var xo={root:`p-ink`};var tr=(()=>{class t extends z{name=`ripple`;style=No;classes=xo;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var nr=(()=>{class t extends Y{componentName=`Ripple`;zone=D(Me);_componentStyle=D(tr);animationListener;mouseDownListener;timeout;constructor(){super(),hu(()=>{ze(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display===`none`)return;if(!this.$unstyled()&&We(n,`p-ink-active`),n.setAttribute(`data-p-ink-active`,`false`),!Cn(n)&&!wn(n)){let l=Math.max(Ti(this.el.nativeElement),Ai(this.el.nativeElement));n.style.height=l+`px`,n.style.width=l+`px`}let i=_i(this.el.nativeElement),o=e.pageX-i.left+this.document.body.scrollTop-wn(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Cn(n)/2;this.renderer.setStyle(n,`top`,s+`px`),this.renderer.setStyle(n,`left`,o+`px`),!this.$unstyled()&&st(n,`p-ink-active`),n.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let l=this.getInk();l&&(!this.$unstyled()&&We(l,`p-ink-active`),l.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className==`string`&&e[n].className.indexOf(`p-ink`)!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&We(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&We(e.currentTarget,`p-ink-active`),e.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let e=this.renderer.createElement(`span`);this.renderer.addClass(e,`p-ink`),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,`data-p-ink`,`true`),this.renderer.setAttribute(e,`data-p-ink-active`,`false`),this.renderer.setAttribute(e,`aria-hidden`,`true`),this.renderer.setAttribute(e,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(e,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Fi(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(n){return new(n||t)};static ɵdir=_I({type:t,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[GE([tr]),zf]})}return t})();var ir=`
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
`;var Mo=[`content`];var ko=[`loadingicon`];var Bo=[`icon`];var $o=[`*`];var cr=(t,r)=>({class:t,pt:r});function Uo(t,r){t&1&&op(0)}function jo(t,r){if(t&1&&tp(0,`span`,7),t&2){let e=sE(3);NE(e.cn(e.cx(`loadingIcon`),`pi-spin`,e.loadingIcon||e.buttonProps?.loadingIcon)),ep(`pBind`,e.ptm(`loadingIcon`)),Xf(`aria-hidden`,!0)}}function Ho(t,r){if(t&1&&(ou(),tp(0,`svg`,8)),t&2){let e=sE(3);NE(e.cn(e.cx(`loadingIcon`),e.cx(`spinnerIcon`))),ep(`pBind`,e.ptm(`loadingIcon`))(`spin`,!0),Xf(`aria-hidden`,!0)}}function Vo(t,r){if(t&1&&(Ic(0),Zf(1,jo,1,4,`span`,3)(2,Ho,1,5,`svg`,6),Ec()),t&2){let e=sE(2);Hy(),ep(`ngIf`,e.loadingIcon||e.buttonProps?.loadingIcon),Hy(),ep(`ngIf`,!(e.loadingIcon||e.buttonProps?.loadingIcon))}}function zo(t,r){}function Wo(t,r){if(t&1&&Zf(0,zo,0,0,`ng-template`,9),t&2){let e=sE(2);ep(`ngIf`,e.loadingIconTemplate||e._loadingIconTemplate)}}function Go(t,r){if(t&1&&(Ic(0),Zf(1,Vo,3,2,`ng-container`,2)(2,Wo,1,1,null,5),Ec()),t&2){let e=sE();Hy(),ep(`ngIf`,!e.loadingIconTemplate&&!e._loadingIconTemplate),Hy(),ep(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)(`ngTemplateOutletContext`,QE(3,cr,e.cx(`loadingIcon`),e.ptm(`loadingIcon`)))}}function Ko(t,r){if(t&1&&tp(0,`span`,7),t&2){let e=sE(2);NE(e.cn(e.cx(`icon`),e.icon||e.buttonProps?.icon)),ep(`pBind`,e.ptm(`icon`)),Xf(`data-p`,e.dataIconP)}}function Yo(t,r){}function Xo(t,r){if(t&1&&Zf(0,Yo,0,0,`ng-template`,9),t&2){let e=sE(2);ep(`ngIf`,!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Zo(t,r){if(t&1&&(Ic(0),Zf(1,Ko,1,4,`span`,3)(2,Xo,1,1,null,5),Ec()),t&2){let e=sE();Hy(),ep(`ngIf`,(e.icon||e.buttonProps?.icon)&&!e.iconTemplate&&!e._iconTemplate),Hy(),ep(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)(`ngTemplateOutletContext`,QE(3,cr,e.cx(`icon`),e.ptm(`icon`)))}}function qo(t,r){if(t&1&&(si(0,`span`,7),jE(1),mc()),t&2){let e=sE();NE(e.cx(`label`)),ep(`pBind`,e.ptm(`label`)),Xf(`aria-hidden`,(e.icon||e.buttonProps?.icon)&&!(e.label||e.buttonProps?.label))(`data-p`,e.dataLabelP),Hy(),bp(e.label||e.buttonProps?.label)}}function Jo(t,r){if(t&1&&tp(0,`p-badge`,10),t&2){let e=sE();ep(`value`,e.badge||e.buttonProps?.badge)(`severity`,e.badgeSeverity||e.buttonProps?.badgeSeverity)(`pt`,e.ptm(`pcBadge`))(`unstyled`,e.unstyled())}}var Qo={root:({instance:t})=>[`p-button p-component`,{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos===`top`||t.iconPos===`bottom`)&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant===`text`||t.buttonProps?.text||t.buttonProps?.variant===`text`,"p-button-outlined":t.outlined||t.variant===`outlined`||t.buttonProps?.outlined||t.buttonProps?.variant===`outlined`,"p-button-sm":t.size===`small`||t.buttonProps?.size===`small`,"p-button-lg":t.size===`large`||t.buttonProps?.size===`large`,"p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:`p-button-loading-icon`,icon:({instance:t})=>[`p-button-icon`,{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos===`left`||t.buttonProps?.iconPos===`left`)&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos===`right`||t.buttonProps?.iconPos===`right`)&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos===`top`||t.buttonProps?.iconPos===`top`)&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos===`bottom`||t.buttonProps?.iconPos===`bottom`)&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx(`icon`)).filter(([,r])=>!!r).reduce((r,[e])=>r+` ${e}`,`p-button-loading-icon`),label:`p-button-label`};var Ze=(()=>{class t extends z{name=`button`;style=ir;classes=Qo;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵprov=oe({token:t,factory:t.ɵfac})}return t})();var rr=new S(`BUTTON_INSTANCE`);var or=new S(`BUTTON_DIRECTIVE_INSTANCE`);var sr=new S(`BUTTON_LABEL_INSTANCE`);var ar=new S(`BUTTON_ICON_INSTANCE`);var Le={button:`p-button`,component:`p-component`,iconOnly:`p-button-icon-only`,disabled:`p-disabled`,loading:`p-button-loading`,labelOnly:`p-button-loading-label-only`};var lr=(()=>{class t extends Y{componentName=`ButtonLabel`;ptButtonLabel=nP();pButtonLabelPT=nP();pButtonLabelUnstyled=nP();$pcButtonLabel=D(sr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});constructor(){super(),hu(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),hu(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(n){return new(n||t)};static ɵdir=_I({type:t,selectors:[[``,`pButtonLabel`,``]],hostVars:2,hostBindings:function(n,i){n&2&&yp(`p-button-label`,!i.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,`ptButtonLabel`],pButtonLabelPT:[1,`pButtonLabelPT`],pButtonLabelUnstyled:[1,`pButtonLabelUnstyled`]},features:[GE([Ze,{provide:sr,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf]})}return t})();var ur=(()=>{class t extends Y{componentName=`ButtonIcon`;ptButtonIcon=nP();pButtonIconPT=nP();pButtonUnstyled=nP();$pcButtonIcon=D(ar,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});constructor(){super(),hu(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),hu(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(n){return new(n||t)};static ɵdir=_I({type:t,selectors:[[``,`pButtonIcon`,``]],hostVars:2,hostBindings:function(n,i){n&2&&yp(`p-button-icon`,!i.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,`ptButtonIcon`],pButtonIconPT:[1,`pButtonIconPT`],pButtonUnstyled:[1,`pButtonUnstyled`]},features:[GE([Ze,{provide:ar,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf]})}return t})();var Nd=(()=>{class t extends Y{componentName=`Button`;$pcButtonDirective=D(or,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});_componentStyle=D(Ze);ptButtonDirective=nP();pButtonPT=nP();pButtonUnstyled=nP();hostName=``;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}constructor(){super(),hu(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),hu(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),hu(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos=`left`;loadingIcon;fluid=nP(void 0,{transform:cP});iconSignal=oP(ur);labelSignal=oP(lr);isIconOnly=sD(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Le);pcFluid=D(On,{optional:!0,host:!0,skipSelf:!0});isTextButton=sD(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e==`object`&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
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
    </svg>`;onAfterViewInit(){!this.$unstyled()&&st(this.htmlElement,this.getStyleClass().join(` `)),ze(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[Le.button,Le.component];return this.icon&&!this.label&&fe(this.htmlElement.textContent)&&e.push(Le.iconOnly),this.loading&&(e.push(Le.disabled,Le.loading),!this.icon&&this.label&&e.push(Le.labelOnly),this.icon&&!this.label&&!fe(this.htmlElement.textContent)&&e.push(Le.iconOnly)),this.text&&e.push(`p-button-text`),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push(`p-button-plain`),this.raised&&e.push(`p-button-raised`),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push(`p-button-outlined`),this.rounded&&e.push(`p-button-rounded`),this.size===`small`&&e.push(`p-button-sm`),this.size===`large`&&e.push(`p-button-lg`),this.hasFluid&&e.push(`p-button-fluid`),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=[`success`,`info`,`warn`,`danger`,`help`,`primary`,`secondary`,`contrast`],n=this.htmlElement.classList.value.split(` `).find(i=>e.some(o=>i===`p-button-${o}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Ge(this.htmlElement,`[data-pc-section="buttonlabel"]`)&&this.label){let n=xt(`span`,{class:this.cx(`label`),"p-bind":this.ptm(`buttonlabel`),"aria-hidden":this.icon&&!this.label?`true`:null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Ge(this.htmlElement,`[data-pc-section="buttonicon"]`)&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?`p-button-icon-`+this.iconPos:null,i=!this.$unstyled()&&this.getIconClass(),o=xt(`span`,{class:this.cn(this.cx(`icon`),n,i),"aria-hidden":`true`,"p-bind":this.ptm(`buttonicon`)});!this.loadingIcon&&this.loading&&(o.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(o,this.htmlElement.firstChild)}}updateLabel(){let e=Ge(this.htmlElement,`[data-pc-section="buttonlabel"]`);if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Ge(this.htmlElement,`[data-pc-section="buttonicon"]`),n=Ge(this.htmlElement,`[data-pc-section="buttonlabel"]`);this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=``),e&&!this.$unstyled()?this.iconPos?e.className=`p-button-icon `+(n?`p-button-icon-`+this.iconPos:``)+` `+this.getIconClass():e.className=`p-button-icon `+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?`p-button-loading-icon `+(this.loadingIcon?this.loadingIcon:`p-icon`):this.icon||`p-hidden`}onDestroy(){this.initialized=!1}static ɵfac=function(n){return new(n||t)};static ɵdir=_I({type:t,selectors:[[``,`pButton`,``]],contentQueries:function(n,i,o){n&1&&up(o,i.iconSignal,ur,5)(o,i.labelSignal,lr,5),n&2&&pE(2)},hostVars:4,hostBindings:function(n,i){n&2&&yp(`p-button-icon-only`,!i.$unstyled()&&i.isIconOnly())(`p-button-text`,!i.$unstyled()&&i.isTextButton())},inputs:{ptButtonDirective:[1,`ptButtonDirective`],pButtonPT:[1,`pButtonPT`],pButtonUnstyled:[1,`pButtonUnstyled`],hostName:`hostName`,text:[2,`text`,`text`,cP],plain:[2,`plain`,`plain`,cP],raised:[2,`raised`,`raised`,cP],size:`size`,outlined:[2,`outlined`,`outlined`,cP],rounded:[2,`rounded`,`rounded`,cP],iconPos:`iconPos`,loadingIcon:`loadingIcon`,fluid:[1,`fluid`],label:`label`,icon:`icon`,loading:`loading`,buttonProps:`buttonProps`,severity:`severity`},features:[GE([Ze,{provide:or,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf]})}return t})();var es=(()=>{class t extends Y{componentName=`Button`;hostName=``;$pcButton=D(rr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});_componentStyle=D(Ze);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}type=`button`;badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity=`secondary`;ariaLabel;autofocus;iconPos=`left`;icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=nP(void 0,{transform:cP});onClick=new Le$1;onFocus=new Le$1;onBlur=new Le$1;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=D(On,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`content`:this._contentTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant===`outlined`,text:this.text||this.variant===`text`,link:this.link,vertical:(this.iconPos===`top`||this.iconPos===`bottom`)&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-button`]],contentQueries:function(n,i,o){if(n&1&&lp(o,Mo,5)(o,ko,5)(o,Bo,5)(o,Ri,4),n&2){let s;dE(s=fE())&&(i.contentTemplate=s.first),dE(s=fE())&&(i.loadingIconTemplate=s.first),dE(s=fE())&&(i.iconTemplate=s.first),dE(s=fE())&&(i.templates=s)}},inputs:{hostName:`hostName`,type:`type`,badge:`badge`,disabled:[2,`disabled`,`disabled`,cP],raised:[2,`raised`,`raised`,cP],rounded:[2,`rounded`,`rounded`,cP],text:[2,`text`,`text`,cP],plain:[2,`plain`,`plain`,cP],outlined:[2,`outlined`,`outlined`,cP],link:[2,`link`,`link`,cP],tabindex:[2,`tabindex`,`tabindex`,lP],size:`size`,variant:`variant`,style:`style`,styleClass:`styleClass`,badgeClass:`badgeClass`,badgeSeverity:`badgeSeverity`,ariaLabel:`ariaLabel`,autofocus:[2,`autofocus`,`autofocus`,cP],iconPos:`iconPos`,icon:`icon`,label:`label`,loading:[2,`loading`,`loading`,cP],loadingIcon:`loadingIcon`,severity:`severity`,buttonProps:`buttonProps`,fluid:[1,`fluid`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[GE([Ze,{provide:rr,useExisting:t},{provide:me,useExisting:t}]),AI([x]),zf],ngContentSelectors:$o,decls:7,vars:17,consts:[[`pRipple`,``,3,`click`,`focus`,`blur`,`ngStyle`,`disabled`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`],[3,`class`,`pBind`,4,`ngIf`],[3,`value`,`severity`,`pt`,`unstyled`,4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`spinner`,3,`class`,`pBind`,`spin`,4,`ngIf`],[3,`pBind`],[`data-p-icon`,`spinner`,3,`pBind`,`spin`],[3,`ngIf`],[3,`value`,`severity`,`pt`,`unstyled`]],template:function(n,i){n&1&&(cE(),si(0,`button`,0),ap(`click`,function(s){return i.onClick.emit(s)})(`focus`,function(s){return i.onFocus.emit(s)})(`blur`,function(s){return i.onBlur.emit(s)}),lE(1),Zf(2,Uo,1,0,`ng-container`,1)(3,Go,3,6,`ng-container`,2)(4,Zo,3,6,`ng-container`,2)(5,qo,2,6,`span`,3)(6,Jo,1,4,`p-badge`,4),mc()),n&2&&(NE(i.cn(i.cx(`root`),i.styleClass,i.buttonProps?.styleClass)),ep(`ngStyle`,i.style||i.buttonProps?.style)(`disabled`,i.disabled||i.loading||i.buttonProps?.disabled)(`pAutoFocus`,i.autofocus||i.buttonProps?.autofocus)(`pBind`,i.ptm(`root`)),Xf(`type`,i.type||i.buttonProps?.type)(`aria-label`,i.ariaLabel||i.buttonProps?.ariaLabel)(`tabindex`,i.tabindex||i.buttonProps?.tabindex)(`data-p`,i.dataP)(`data-p-disabled`,i.disabled||i.loading||i.buttonProps?.disabled)(`data-p-severity`,i.severity||i.buttonProps?.severity),Hy(2),ep(`ngTemplateOutlet`,i.contentTemplate||i._contentTemplate),Hy(),ep(`ngIf`,i.loading||i.buttonProps?.loading),Hy(),ep(`ngIf`,!(i.loading||i.buttonProps?.loading)),Hy(),ep(`ngIf`,!i.contentTemplate&&!i._contentTemplate&&(i.label||i.buttonProps?.label)),Hy(),ep(`ngIf`,!i.contentTemplate&&!i._contentTemplate&&(i.badge||i.buttonProps?.badge)))},dependencies:[de,cn,pn,dn,nr,Vi,Qi,Yi,In,Re,x],encapsulation:2})}return t})();var xd=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=wI({type:t});static ɵinj=El({imports:[de,es,Re,Re]})}return t})();var De=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r==`string`?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(`:`);if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<`u`&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:`a`})}set(r,e){return this.clone({name:r,value:e,op:`s`})}delete(r,e){return this.clone({name:r,value:e,op:`d`})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init();for(let[e,n]of r.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,r.normalizedNames.get(e))}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case`a`:case`s`:let n=r.value;if(typeof n==`string`&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=r.op===`a`?(this.headers.get(e)||[]).slice():[];i.push(...n),this.headers.set(e,i);break;case`d`:let o=r.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],l=this.headers.get(e);if(!l)return;l=l.filter(a=>s.indexOf(a)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var Rn=class{defaultValue;constructor(r){this.defaultValue=r}};var Bt=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};var $t=class{encodeKey(r){return dr(r)}encodeValue(r){return dr(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function ts(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,``).split(`&`).forEach(i=>{let o=i.indexOf(`=`),[s,l]=o==-1?[r.decodeKey(i),``]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],a=e.get(s)||[];a.push(l),e.set(s,a)}),e}var ns=/%(\d[a-f0-9])/gi;var is={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function dr(t){return encodeURIComponent(t).replace(ns,(r,e)=>is[e]??r)}function kt(t){return`${t}`}var Ae=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new $t,r.fromString){if(r.fromObject)throw new b(2805,!1);this.map=ts(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(kt):[kt(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:`a`})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:`a`})}):e.push({param:n,value:i,op:`a`})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:`s`})}delete(r,e){return this.clone({param:r,value:e,op:`d`})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+`=`+this.encoder.encodeValue(n)).join(`&`)}).filter(r=>r!==``).join(`&`)}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[r,e]of this.cloneFrom.map.entries())this.map.set(r,e);this.updates.forEach(r=>{switch(r.op){case`a`:case`s`:let e=r.op===`a`?(this.map.get(r.param)||[]).slice():[];e.push(kt(r.value)),this.map.set(r.param,e);break;case`d`:if(r.value!==void 0){let n=(this.map.get(r.param)||[]).slice(),i=n.indexOf(kt(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null}}};function rs(t){switch(t){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function pr(t){return typeof ArrayBuffer<`u`&&t instanceof ArrayBuffer}function hr(t){return typeof Blob<`u`&&t instanceof Blob}function fr(t){return typeof FormData<`u`&&t instanceof FormData}function os(t){return typeof URLSearchParams<`u`&&t instanceof URLSearchParams}var ut=`Content-Type`;var Ut=`Accept`;var br=`text/plain`;var yr=`application/json`;var Dr=`${yr}, ${br}, */*`;var qe=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(rs(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new b(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new De,this.context??=new Bt,!this.params)this.params=new Ae,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let l=e,a=``,u=e.indexOf(`#`);u!==-1&&(a=e.substring(u),l=e.substring(0,u));let c=l.indexOf(`?`),p=c===-1?`?`:c<l.length-1?`&`:``;this.urlWithParams=l+p+s+a}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||pr(this.body)||hr(this.body)||fr(this.body)||os(this.body)?this.body:this.body instanceof Ae?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||fr(this.body)?null:hr(this.body)?this.body.type||null:pr(this.body)?null:typeof this.body==`string`?br:this.body instanceof Ae?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?yr:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,s=r.priority||this.priority,l=r.cache||this.cache,a=r.mode||this.mode,u=r.redirect||this.redirect,c=r.credentials||this.credentials,p=r.referrer??this.referrer,h=r.integrity||this.integrity,g=r.referrerPolicy||this.referrerPolicy,m=r.transferCache??this.transferCache,b=r.timeout??this.timeout,E=r.body!==void 0?r.body:this.body,F=r.withCredentials??this.withCredentials,D=r.reportProgress??this.reportProgress,v=r.reportUploadProgress??this.reportUploadProgress,M=r.reportDownloadProgress??this.reportDownloadProgress,j=r.headers||this.headers,w=r.params||this.params,Q=r.context??this.context;return r.setHeaders!==void 0&&(j=Object.keys(r.setHeaders).reduce((ee,H)=>ee.set(H,r.setHeaders[H]),j)),r.setParams&&(w=Object.keys(r.setParams).reduce((ee,H)=>ee.set(H,r.setParams[H]),w)),new t(e,n,E,{params:w,headers:j,context:Q,reportProgress:D,reportUploadProgress:v,reportDownloadProgress:M,responseType:i,withCredentials:F,transferCache:m,keepalive:o,cache:l,priority:s,timeout:b,mode:a,redirect:u,credentials:c,referrer:p,integrity:h,referrerPolicy:g})}};var ye=(function(t){return t[t.Sent=0]=`Sent`,t[t.UploadProgress=1]=`UploadProgress`,t[t.ResponseHeader=2]=`ResponseHeader`,t[t.DownloadProgress=3]=`DownloadProgress`,t[t.Response=4]=`Response`,t[t.User=5]=`User`,t})(ye||{});var Je=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n=`OK`){this.headers=r.headers||new De,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}};var ct=class t extends Je{constructor(r={}){super(r)}type=ye.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}};var Qe=class t extends Je{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=ye.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}};var be=class extends Je{name=`HttpErrorResponse`;message;error;ok=!1;constructor(r){super(r,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||`(unknown url)`}`:this.message=`Http failure response for ${r.url||`(unknown url)`}: ${r.status} ${r.statusText}`,this.error=r.error||null}};var vr=200;var ss=204;var as=/^\)\]\}',?\n/;var Er=new S(``,{factory:()=>null});var jt=(()=>{class t{fetchImpl=D(Ln,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=D(Me);destroyRef=D(_e$1);maxResponseSize=D(Er);handle(e){return new C$1(n=>{let i=new AbortController,o=!1,s={next:a=>{a.type===ye.Response&&(o=!0),n.next(a)},error:a=>{o=!0,n.error(a)},complete:()=>{o=!0,n.complete()}};this.doRequest(e,i.signal,s).then(Nn,a=>s.error(new be({error:a})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!o&&!i.signal.aborted&&i.abort()}})}async doRequest(e,n,i){let o=this.createRequestInit(e),s;try{let E=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,r({signal:n},o)));ls(E),i.next({type:ye.Sent}),s=await E}catch(E){i.error(new be({error:E,status:E.status??0,statusText:E.statusText,url:e.urlWithParams,headers:E.headers}));return}let l=new De(s.headers),a=s.statusText,u=s.url||e.urlWithParams,c=s.status,p=null,h=e.reportProgress||e.reportDownloadProgress;if(h&&i.next(new ct({headers:l,status:c,statusText:a,url:u})),s.body){let E=s.headers.get(ut)??``,F=s.headers.get(`content-length`),D=F!==null?Number(F):NaN;this.maxResponseSize!==null&&Number.isFinite(D)&&D>this.maxResponseSize&&gr(this.maxResponseSize);let v=[],M=s.body.getReader(),j=0,w,Q,ee=typeof Zone<`u`&&Zone.current,H=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await M.cancel(),H=!0;break}let{done:ve,value:Fe}=await M.read();if(ve)break;if(v.push(Fe),j+=Fe.length,this.maxResponseSize!==null&&j>this.maxResponseSize&&(await M.cancel(),gr(this.maxResponseSize)),h){Q=e.responseType===`text`?(Q??``)+(w??=mr(E)).decode(Fe,{stream:!0}):void 0;let xe=()=>i.next({type:ye.DownloadProgress,total:Number.isFinite(D)?D:void 0,loaded:j,partialText:Q});ee?ee.run(xe):xe()}}}),H){i.complete();return}let Ne=this.concatChunks(v,j);try{p=this.parseBody(e,Ne,E,c)}catch(ve){i.error(new be({error:ve,headers:new De(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}c===0&&(c=p?vr:0);let g=c>=200&&c<300,m=s.redirected,b=s.type;g?(i.next(new Qe({body:p,headers:l,status:c,statusText:a,url:u,redirected:m,responseType:b})),i.complete()):i.error(new be({error:p,headers:l,status:c,statusText:a,url:u,redirected:m,responseType:b}))}parseBody(e,n,i,o){switch(e.responseType){case`json`:let s=new TextDecoder().decode(n).replace(as,``);if(s===``)return null;try{return JSON.parse(s)}catch(l){if(o<200||o>=300)return s;throw l}case`text`:return mr(i).decode(n);case`blob`:return new Blob([n],{type:i});case`arraybuffer`:return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new b(2824,!1);let n={},i;if(i=e.credentials,e.withCredentials&&(i=`include`),e.headers.forEach((o,s)=>n[o]=s.join(`,`)),e.headers.has(Ut)||(n[Ut]=Dr),!e.headers.has(ut)){let o=e.detectContentTypeHeader();o!==null&&(n[ut]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:i,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let i=new Uint8Array(n),o=0;for(let s of e)i.set(s,o),o+=s.length;return i}static ɵfac=function(n){return new(n||t)};static ɵprov=ur$1({token:t,factory:t.ɵfac})}return t})();var Ln=class{};function Nn(){}function ls(t){t.then(Nn,Nn)}function gr(t){throw new b(-2825,!1)}var us=/charset=\s*["']?([^;"'\s]+)["']?/i;function mr(t){let r=t.match(us);if(r!==null)try{return new TextDecoder(r[1])}catch{}return new TextDecoder}var cs=new S(``,{factory:()=>!0});var ds=`XSRF-TOKEN`;var ps=new S(``,{factory:()=>ds});var hs=`X-XSRF-TOKEN`;var fs=new S(``,{factory:()=>hs});var gs=(()=>{class t{cookieName=D(ps);doc=D(So$1);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=hn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(n){return new(n||t)};static ɵprov=ur$1({token:t,factory:t.ɵfac})}return t})();var Sr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Ce(gs),i},providedIn:`root`})}return t})();function Cr(t,r){if(!D(cs)||t.method===`GET`||t.method===`HEAD`)return r(t);try{let i=D(Ve).href,{origin:o}=new URL(i),{origin:s}=new URL(t.url,o);if(o!==s)return r(t)}catch{return r(t)}let e=D(Sr).getToken(),n=D(fs);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function ms(t,r){return r(t)}function bs(t,r,e){return(n,i)=>go(e,()=>r(n,o=>t(o,i)))}var Mn=new S(``,{factory:()=>[Cr]});var wr=new S(``);var Tr=new S(``,{factory:()=>!0});var Vt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Ce(jt),i},providedIn:`root`})}return t})();var Ht=(()=>{class t{backend;injector;chain=null;pendingTasks=D($s);contributeToStability=D(Tr);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let i=this.injector.get(zt,null,{skipSelf:!0}),o=i!==null&&this.backend===i,s=this.injector.get(wr,[],o?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(Mn),...s]));this.chain=l.reduceRight((a,u)=>bs(a,u,this.injector),ms)}let n=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return Rp(()=>n(e,o=>this.backend.handle(o))).pipe(el(i))}else return Rp(()=>n(e,i=>this.backend.handle(i)))}static ɵfac=function(n){return new(n||t)(Ce(Vt),Ce(ae))};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var zt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=oe({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=Ce(Ht),i},providedIn:`root`})}return t})();function Pn(t,r$7){return r({body:r$7},t)}var Wt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof qe)o=e;else{let a;i.headers instanceof De?a=i.headers:a=new De(i.headers);let u;i.params&&(i.params instanceof Ae?u=i.params:u=new Ae({fromObject:i.params})),o=new qe(e,n,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:u,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||`json`,withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=eh(o).pipe(Ih(a=>this.handler.handle(a)));if(e instanceof qe||i.observe===`events`)return s;let l=s.pipe(Ai$1(a=>a instanceof Qe));switch(i.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return l.pipe(Ee(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new b(2806,!1);return a.body}));case`blob`:return l.pipe(Ee(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new b(2807,!1);return a.body}));case`text`:return l.pipe(Ee(a=>{if(a.body!==null&&typeof a.body!=`string`)throw new b(2808,!1);return a.body}));default:return l.pipe(Ee(a=>a.body))}case`response`:return l;default:throw new b(2809,!1)}}delete(e,n={}){return this.request(`DELETE`,e,n)}get(e,n={}){return this.request(`GET`,e,n)}head(e,n={}){return this.request(`HEAD`,e,n)}jsonp(e,n){return this.request(`JSONP`,e,{params:new Ae().append(n,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,n={}){return this.request(`OPTIONS`,e,n)}patch(e,n,i={}){return this.request(`PATCH`,e,Pn(i,n))}post(e,n,i={}){return this.request(`POST`,e,Pn(i,n))}put(e,n,i={}){return this.request(`PUT`,e,Pn(i,n))}static ɵfac=function(n){return new(n||t)(Ce(zt))};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ys=/^\)\]\}',?\n/;var xn=(()=>{class t{xhrFactory;tracingService=D(hn$1,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method===`JSONP`)throw new b(-2800,!1);let n=this.xhrFactory;return eh(null).pipe(nl(()=>new C$1(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((D,v)=>s.setRequestHeader(D,v.join(`,`))),e.headers.has(Ut)||s.setRequestHeader(Ut,Dr),!e.headers.has(ut)){let D=e.detectContentTypeHeader();D!==null&&s.setRequestHeader(ut,D)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let D=e.responseType.toLowerCase();s.responseType=D!==`json`?D:`text`}let l=e.serializeBody(),a=null,u=()=>{if(a!==null)return a;let D=s.statusText||`OK`,v=new De(s.getAllResponseHeaders()),M=s.responseURL||e.url;return a=new ct({headers:v,status:s.status,statusText:D,url:M}),a},c=this.maybePropagateTrace(()=>{let{headers:D,status:v,statusText:M,url:j}=u(),w=null;v!==ss&&(w=typeof s.response>`u`?s.responseText:s.response),v===0&&(v=w?vr:0);let Q=v>=200&&v<300;if(e.responseType===`json`&&typeof w==`string`){let ee=w;w=w.replace(ys,``);try{w=w!==``?JSON.parse(w):null}catch(H){w=ee,Q&&(Q=!1,w={error:H,text:w})}}Q?(o.next(new Qe({body:w,headers:D,status:v,statusText:M,url:j||void 0})),o.complete()):o.error(new be({error:w,headers:D,status:v,statusText:M,url:j||void 0}))}),p=this.maybePropagateTrace(D=>{let{url:v}=u(),M=new be({error:D,status:s.status||0,statusText:s.statusText||`Unknown Error`,url:v||void 0});o.error(M)}),h=p;e.timeout&&(h=this.maybePropagateTrace(D=>{let{url:v}=u(),M=new be({error:new DOMException(`Request timed out`,`TimeoutError`),status:s.status||0,statusText:s.statusText||`Request timeout`,url:v||void 0});o.error(M)}));let g=!1,m=this.maybePropagateTrace(D=>{g||(o.next(u()),g=!0);let v={type:ye.DownloadProgress,loaded:D.loaded};D.lengthComputable&&(v.total=D.total),e.responseType===`text`&&s.responseText&&(v.partialText=s.responseText),o.next(v)}),b=this.maybePropagateTrace(D=>{let v={type:ye.UploadProgress,loaded:D.loaded};D.lengthComputable&&(v.total=D.total),o.next(v)});s.addEventListener(`load`,c),s.addEventListener(`error`,p),s.addEventListener(`timeout`,h),s.addEventListener(`abort`,p);let E=e.reportProgress||e.reportUploadProgress,F=e.reportProgress||e.reportDownloadProgress;return F&&s.addEventListener(`progress`,m),E&&l!==null&&s.upload&&s.upload.addEventListener(`progress`,b),s.send(l),o.next({type:ye.Sent}),()=>{s.removeEventListener(`error`,p),s.removeEventListener(`abort`,p),s.removeEventListener(`load`,c),s.removeEventListener(`timeout`,h),F&&s.removeEventListener(`progress`,m),E&&l!==null&&s.upload&&s.upload.removeEventListener(`progress`,b),s.readyState!==s.DONE&&s.abort()}})))}static ɵfac=function(n){return new(n||t)(Ce(fn))};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Gt=(function(t){return t[t.Interceptors=0]=`Interceptors`,t[t.LegacyInterceptors=1]=`LegacyInterceptors`,t[t.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,t[t.NoXsrfProtection=3]=`NoXsrfProtection`,t[t.JsonpSupport=4]=`JsonpSupport`,t[t.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,t[t.Fetch=6]=`Fetch`,t[t.Xhr=7]=`Xhr`,t})(Gt||{});function _r(t,r){return{ɵkind:t,ɵproviders:r}}function Ds(...t){let r=[Wt,jt,Ht,{provide:zt,useExisting:Ht},{provide:Vt,useFactory:()=>D(jt)},{provide:Mn,useValue:Cr,multi:!0}];for(let e of t)r.push(...e.ɵproviders);return ho$1(r)}function vs(t){return _r(Gt.Interceptors,t.map(r=>({provide:Mn,useValue:r,multi:!0})))}function Es(){return _r(Gt.Xhr,[xn,{provide:Vt,useExisting:xn}])}var Ar=class t{http=D(Wt);get(r,e){return this.http.get(r,e)}post(r,e,n){return this.http.post(r,e,n)}static ɵfac=function(e){return new(e||t)};static ɵprov=oe({token:t,factory:t.ɵfac,providedIn:`root`})};export{me as A,zi as B,cn as C,fu as D,fi as E,vs as F,x as I,xd as L,pn as M,sn as N,hn as O,to as P,z as R,bl as S,es as T,Wt as _,Dn as a,au as b,Hr as c,Nd as d,On as f,Rn as g,Ri as h,C as i,ml as j,lu as k,It as l,Re as m,Bt as n,Ds as o,Ot as p,Bu as r,Es as s,Ar as t,Jr as u,Y as v,de as w,be as x,Yr as y,ze as z};