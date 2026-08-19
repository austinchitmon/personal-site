import{$a as jt,$b as ji,A as Ei,Ab as In,Ba as Ii,Bb as dt,Bc as Ln,Cb as Fn,Cc as Ye,Db as On,Dc as Vi,Eb as Pn,Ec as zi,F as Ci,Fb as Ht,Gb as Vt,Gc as A,Hb as Mi,Hc as gt,Jb as xi,K as Si,Kb as se,Lb as $,Mb as ki,N as k,O as kt,Ob as ce,Pa as Z,Pb as Te,Q as v,Qa as Fi,Qb as _e,R as J,Rb as Bi,Sa as Oi,T as C,Ta as Pi,Tb as pt,U as Y,Ua as ct,Ub as ht,V as h,Vb as $i,W as Bt,Wa as Se,Xa as R,Xb as Ui,Y as Cn,Z as wi,Zb as zt,_b as Wt,aa as $t,ac as ee,ba as We,bc as Gt,ca as H,cb as ne,cc as Kt,d as Di,da as Sn,db as Q,e as Ce,eb as P,fa as Ut,fb as _n,ga as wn,hb as we,ia as Ti,ib as V,ic as X,ja as W,jb as je,l as En,la as _i,lb as Ri,lc as Rn,ma as B,mb as Li,na as Ge,nb as Ni,oa as O,p as ut,qa as ue,qb as be,tc as Hi,ua as Ke,uc as ft,vc as ye,xa as Ai,y as vi,ya as Tn,yb as N,zb as An,zc as _}from"./chunk-UAIG5MLJ.js";import{a as y,b as Ue,c as vn}from"./chunk-IFGU66OU.js";var Wi=null;function Yt(){return Wi}function Xo(t){Wi??=t}var Nn=class{},Ze=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(Gi),providedIn:"platform"})}return t})();var Gi=(()=>{class t extends Ze{_location;_history;_doc=h(H);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Yt().getBaseHref(this._doc)}onPopState(e){let n=Yt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Yt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Zi(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Ki(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Le(t){return t&&t[0]!=="?"?`?${t}`:t}var Zt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>h(Jo),providedIn:"root"})}return t})(),qo=new C(""),Jo=(()=>{class t extends Zt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(H).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Zi(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Le(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+Le(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+Le(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(Y(Ze),Y(qo,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xi=(()=>{class t{_subject=new Ce;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ts(Ki(Yi(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Le(n))}normalize(e){return t.stripTrailingSlash(es(this._basePath,Yi(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Le(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Le(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Le;static joinWithSlash=Zi;static stripTrailingSlash=Ki;static \u0275fac=function(n){return new(n||t)(Y(Zt))};static \u0275prov=v({token:t,factory:()=>Qo(),providedIn:"root"})}return t})();function Qo(){return new Xi(Y(Zt))}function es(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Yi(t){return t.replace(/\/index\.html$/,"")}function ts(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var G=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(G||{}),S=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(S||{}),te=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(te||{}),Ie={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function tr(t){return se(t)[$.LocaleId]}function nr(t,i,e){let n=se(t),r=[n[$.DayPeriodsFormat],n[$.DayPeriodsStandalone]],o=ae(r,i);return ae(o,e)}function ir(t,i,e){let n=se(t),r=[n[$.DaysFormat],n[$.DaysStandalone]],o=ae(r,i);return ae(o,e)}function rr(t,i,e){let n=se(t),r=[n[$.MonthsFormat],n[$.MonthsStandalone]],o=ae(r,i);return ae(o,e)}function or(t,i){let n=se(t)[$.Eras];return ae(n,i)}function mt(t,i){let e=se(t);return ae(e[$.DateFormat],i)}function bt(t,i){let e=se(t);return ae(e[$.TimeFormat],i)}function yt(t,i){let n=se(t)[$.DateTimeFormat];return ae(n,i)}function Dt(t,i){let e=se(t),n=e[$.NumberSymbols][i];if(typeof n>"u"){if(i===Ie.CurrencyDecimal)return e[$.NumberSymbols][Ie.Decimal];if(i===Ie.CurrencyGroup)return e[$.NumberSymbols][Ie.Group]}return n}function sr(t){if(!t[$.ExtraData])throw new k(2303,!1)}function ar(t){let i=se(t);return sr(i),(i[$.ExtraData][2]||[]).map(n=>typeof n=="string"?Mn(n):[Mn(n[0]),Mn(n[1])])}function lr(t,i,e){let n=se(t);sr(n);let r=[n[$.ExtraData][0],n[$.ExtraData][1]],o=ae(r,i)||[];return ae(o,e)||[]}function ae(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new k(2304,!1)}function Mn(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}var ns=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Xt={},is=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,rs=256;function ur(t,i,e,n){let r=fs(t);os(i),i=Ae(e,i)||i;let s=[],a;for(;i;)if(a=is.exec(i),a){s=s.concat(a.slice(1));let c=s.pop();if(!c)break;i=c}else{s.push(i);break}let l=r.getTimezoneOffset();n&&(l=dr(n,l),r=hs(r,n));let u="";return s.forEach(c=>{let d=ds(c);u+=d?d(r,e,l):c==="''"?"'":c.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function os(t){if(t.length>rs)throw new k(2300,!1)}function tn(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function Ae(t,i){let e=tr(t);if(Xt[e]??={},Xt[e][i])return Xt[e][i];let n="";switch(i){case"shortDate":n=mt(t,te.Short);break;case"mediumDate":n=mt(t,te.Medium);break;case"longDate":n=mt(t,te.Long);break;case"fullDate":n=mt(t,te.Full);break;case"shortTime":n=bt(t,te.Short);break;case"mediumTime":n=bt(t,te.Medium);break;case"longTime":n=bt(t,te.Long);break;case"fullTime":n=bt(t,te.Full);break;case"short":let r=Ae(t,"shortTime"),o=Ae(t,"shortDate");n=qt(yt(t,te.Short),[r,o]);break;case"medium":let s=Ae(t,"mediumTime"),a=Ae(t,"mediumDate");n=qt(yt(t,te.Medium),[s,a]);break;case"long":let l=Ae(t,"longTime"),u=Ae(t,"longDate");n=qt(yt(t,te.Long),[l,u]);break;case"full":let c=Ae(t,"fullTime"),d=Ae(t,"fullDate");n=qt(yt(t,te.Full),[c,d]);break}return n&&(Xt[e][i]=n),n}function qt(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function de(t,i,e="-",n,r){let o="";(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,o=e));let s=String(t);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),o+s}function ss(t,i){return de(t,3).substring(0,i)}function M(t,i,e=0,n=!1,r=!1){return function(o,s){let a=as(t,o);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return ss(a,i);let l=Dt(s,Ie.MinusSign);return de(a,i,l,n,r)}}function as(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new k(2301,!1)}}function I(t,i,e=G.Format,n=!1){return function(r,o){return ls(r,o,t,i,e,n)}}function ls(t,i,e,n,r,o){switch(e){case 2:return rr(i,r,n)[t.getMonth()];case 1:return ir(i,r,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(o){let u=ar(i),c=lr(i,r,n),d=u.findIndex(p=>{if(Array.isArray(p)){let[f,m]=p,D=s>=f.hours&&a>=f.minutes,g=s<m.hours||s===m.hours&&a<m.minutes;if(f.hours<m.hours){if(D&&g)return!0}else if(D||g)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return nr(i,r,n)[s<12?0:1];case 3:return or(i,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new k(2302,!1)}}function Jt(t){return function(i,e,n){let r=-1*n,o=Dt(e,Ie.MinusSign),s=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?"+":"")+de(s,2,o)+de(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+de(s,1,o);case 2:return"GMT"+(r>=0?"+":"")+de(s,2,o)+":"+de(Math.abs(r%60),2,o);case 3:return n===0?"Z":(r>=0?"+":"")+de(s,2,o)+":"+de(Math.abs(r%60),2,o);default:throw new k(2310,!1)}}}var us=0,en=4;function cs(t){let i=tn(t,us,1).getDay();return tn(t,0,1+(i<=en?en:en+7)-i)}function cr(t){let i=t.getDay(),e=i===0?-3:en-i;return tn(t.getFullYear(),t.getMonth(),t.getDate()+e)}function xn(t,i=!1){return function(e,n){let r;if(i){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();r=1+Math.floor((s+o)/7)}else{let o=cr(e),s=cs(o.getFullYear()),a=o.getTime()-s.getTime();r=1+Math.round(a/6048e5)}return de(r,t,Dt(n,Ie.MinusSign))}}function Qt(t,i=!1){return function(e,n){let o=cr(e).getFullYear();return de(o,t,Dt(n,Ie.MinusSign),i)}}var kn={};function ds(t){if(kn[t])return kn[t];let i;switch(t){case"G":case"GG":case"GGG":i=I(3,S.Abbreviated);break;case"GGGG":i=I(3,S.Wide);break;case"GGGGG":i=I(3,S.Narrow);break;case"y":i=M(0,1,0,!1,!0);break;case"yy":i=M(0,2,0,!0,!0);break;case"yyy":i=M(0,3,0,!1,!0);break;case"yyyy":i=M(0,4,0,!1,!0);break;case"Y":i=Qt(1);break;case"YY":i=Qt(2,!0);break;case"YYY":i=Qt(3);break;case"YYYY":i=Qt(4);break;case"M":case"L":i=M(1,1,1);break;case"MM":case"LL":i=M(1,2,1);break;case"MMM":i=I(2,S.Abbreviated);break;case"MMMM":i=I(2,S.Wide);break;case"MMMMM":i=I(2,S.Narrow);break;case"LLL":i=I(2,S.Abbreviated,G.Standalone);break;case"LLLL":i=I(2,S.Wide,G.Standalone);break;case"LLLLL":i=I(2,S.Narrow,G.Standalone);break;case"w":i=xn(1);break;case"ww":i=xn(2);break;case"W":i=xn(1,!0);break;case"d":i=M(2,1);break;case"dd":i=M(2,2);break;case"c":case"cc":i=M(7,1);break;case"ccc":i=I(1,S.Abbreviated,G.Standalone);break;case"cccc":i=I(1,S.Wide,G.Standalone);break;case"ccccc":i=I(1,S.Narrow,G.Standalone);break;case"cccccc":i=I(1,S.Short,G.Standalone);break;case"E":case"EE":case"EEE":i=I(1,S.Abbreviated);break;case"EEEE":i=I(1,S.Wide);break;case"EEEEE":i=I(1,S.Narrow);break;case"EEEEEE":i=I(1,S.Short);break;case"a":case"aa":case"aaa":i=I(0,S.Abbreviated);break;case"aaaa":i=I(0,S.Wide);break;case"aaaaa":i=I(0,S.Narrow);break;case"b":case"bb":case"bbb":i=I(0,S.Abbreviated,G.Standalone,!0);break;case"bbbb":i=I(0,S.Wide,G.Standalone,!0);break;case"bbbbb":i=I(0,S.Narrow,G.Standalone,!0);break;case"B":case"BB":case"BBB":i=I(0,S.Abbreviated,G.Format,!0);break;case"BBBB":i=I(0,S.Wide,G.Format,!0);break;case"BBBBB":i=I(0,S.Narrow,G.Format,!0);break;case"h":i=M(3,1,-12);break;case"hh":i=M(3,2,-12);break;case"H":i=M(3,1);break;case"HH":i=M(3,2);break;case"m":i=M(4,1);break;case"mm":i=M(4,2);break;case"s":i=M(5,1);break;case"ss":i=M(5,2);break;case"S":i=M(6,1);break;case"SS":i=M(6,2);break;case"SSS":i=M(6,3);break;case"Z":case"ZZ":case"ZZZ":i=Jt(0);break;case"ZZZZZ":i=Jt(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=Jt(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=Jt(2);break;default:return null}return kn[t]=i,i}function dr(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function ps(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function hs(t,i,e){let r=t.getTimezoneOffset(),o=dr(i,r);return ps(t,-1*(o-r))}function fs(t){if(qi(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,o=1,s=1]=t.split("-").map(a=>+a);return tn(r,o-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(ns))return gs(n)}let i=new Date(t);if(!qi(i))throw new k(2311,!1);return i}function gs(t){let i=new Date(0),e=0,n=0,r=t[8]?i.setUTCFullYear:i.setFullYear,o=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),r.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(i,s,a,l,u),i}function qi(t){return t instanceof Date&&!isNaN(t.valueOf())}var Bn=/\s+/,Ji=[],ms=(()=>{class t{_ngEl;_renderer;initialClasses=Ji;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Bn):Ji}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Bn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Bn).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)(R(ue),R(Se))};static \u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var nn=class{$implicit;ngForOf;index;count;constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},pr=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new nn(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(o===null?void 0:o);else if(o!==null){let a=n.get(o);n.move(a,s),Qi(a,r)}});for(let r=0,o=n.length;r<o;r++){let a=n.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);Qi(o,r)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(R(jt),R(ct),R(Vi))};static \u0275dir=P({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Qi(t,i){t.context.$implicit=i.item}var jn=(()=>{class t{_viewContainer;_context=new rn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){er(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){er(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(R(jt),R(ct))};static \u0275dir=P({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),rn=class{$implicit=null;ngIf=null};function er(t,i){if(t&&!t.createEmbeddedView)throw new k(2020,!1)}var Hn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:Fi.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(R(ue),R(zi),R(Se))};static \u0275dir=P({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Vn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=h(We);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(R(jt))};static \u0275dir=P({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ge]})}return t})();function hr(t,i){return new k(2100,!1)}var $n=class{createSubscription(i,e,n){return ft(()=>i.subscribe({next:e,error:n}))}dispose(i){ft(()=>i.unsubscribe())}},Un=class{createSubscription(i,e,n){return i.then(r=>e?.(r),r=>n?.(r)),{unsubscribe:()=>{e=null,n=null}}}dispose(i){i.unsubscribe()}},bs=new Un,ys=new $n,Ds=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=h(Ti);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Ri(e))return bs;if(Li(e))return ys;throw hr(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(R(Ye,16))};static \u0275pipe=_n({name:"async",type:t,pure:!1})}return t})();var vs="mediumDate",fr=new C(""),gr=new C(""),Es=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,r){this.locale=e,this.defaultTimezone=n,this.defaultOptions=r}transform(e,n,r,o){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??vs,a=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return ur(e,s,o||this.locale,a)}catch(s){throw hr(t,s.message)}}static \u0275fac=function(n){return new(n||t)(R(Hi,16),R(fr,24),R(gr,24))};static \u0275pipe=_n({name:"date",type:t,pure:!0})}return t})();var De=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=J({})}return t})();function zn(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var vt=class{};var Cs="browser",Ss="server";function Xe(t){return t===Cs}function Gn(t){return t===Ss}var Iu=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new Wn(h(H),window)})}return t})(),Wn=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(Ue(y({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=ws(this.document,i);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(kt(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(Ue(y({},e),{left:r-s[0],top:o-s[1]}))}};function ws(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(s)return s}r=n.nextNode()}}return null}var yr=t=>t.src,Ts=new C("",{factory:()=>yr});var mr=/^((\s*\d+w\s*(,|$)){1,})$/;var _s=[1,2],As=640;var Is=1920,Fs=1080;var Fu=(()=>{class t{imageLoader=h(Ts);config=Os(h(Tn));renderer=h(Se);imgElement=h(ue).nativeElement;injector=h(We);destroyRef=h(Sn);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){Pi("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&mr.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let n=e;this.loaderParams&&(n.loaderParams=this.loaderParams);let r=this.getAspectRatio();return r!==null&&n.width&&(n.height=Math.round(n.width/r)),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=mr.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(o=>o>=As)),n.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return _s.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Is||this.height>Fs),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==yr&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url("${br(this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0}))}")`:typeof e=="string"?`url("${br(e)}")`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let s=this.injector.get(Ye);r(),o(),this.placeholder=!1,s.markForCheck()},r=this.renderer.listen(e,"load",n),o=this.renderer.listen(e,"error",n);this.destroyRef.onDestroy(()=>{r(),o()}),Ps(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,r){n&2&&zt("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",Rs],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",gt],height:[2,"height","height",gt],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",A],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",A],fill:[2,"fill","fill",A],placeholder:[2,"placeholder","placeholder",Ls],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[Ge]})}return t})();function Os(t){let i={};return t.breakpoints&&(i.breakpoints=t.breakpoints.sort((e,n)=>e-n)),Object.assign({},Ai,t,i)}function Ps(t,i){t.complete&&t.naturalWidth&&i()}function Rs(t){return typeof t=="string"?t:Ii(t)}function br(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ls(t){return typeof t=="string"&&t!=="true"&&t!=="false"&&t!==""?t:A(t)}function Ne(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let r=typeof n;if(r==="string"||r==="number")i.push(n);else if(r==="object"){let o=Array.isArray(n)?[Ne(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=o.length?i.concat(o.filter(s=>!!s)):i}}return i.join(" ").trim()}}function ve(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Kn(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),o,s,a;if(n&&r){if(s=t.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!Kn(t[o],i[o],e))return!1;return!0}if(n!=r)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let c=t instanceof RegExp,d=i instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[o]))return!1;for(o=s;o--!==0;)if(a=p[o],!Kn(t[a],i[a],e))return!1;return!0}function Ms(t,i){return Kn(t,i)}function sn(t){return typeof t=="function"&&"call"in t&&"apply"in t}function w(t){return!ve(t)}function on(t,i){if(!t||!i)return null;try{let e=t[i];if(w(e))return e}catch{}if(Object.keys(t).length){if(sn(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,o=e.length;r<o;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function an(t,i,e){return e?on(t,e)===on(i,e):Ms(t,i)}function Fe(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function xu(t,i){let e=-1;if(w(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function x(t,...i){return sn(t)?t(...i):t}function le(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Me(t){return le(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function ln(t,i="",e={}){let n=Me(i).split("."),r=n.shift();if(r){if(Fe(t)){let o=Object.keys(t).find(s=>Me(s)===r)||"";return ln(x(t[o],e),n.join("."),e)}return}return x(t,e)}function Yn(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Dr(t){return w(t)&&!isNaN(t)}function ku(t=""){return w(t)&&t.length===1&&!!t.match(/\S| /)}function pe(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function He(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function ie(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function un(t){return le(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function Bu(t){return t==="auto"?0:typeof t=="number"?t:Number(t.replace(/[^\d.]/g,"").replace(",","."))*1e3}function vr(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Ve(t,i){if(t&&i){let e=n=>{vr(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function xs(){return window.innerWidth-document.documentElement.offsetWidth}function Er(t){typeof t=="string"?Ve(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,xs()+"px"),Ve(document.body,t?.className||"p-overflow-hidden"))}function xe(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Cr(t){typeof t=="string"?xe(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),xe(document.body,t?.className||"p-overflow-hidden"))}function Et(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Sr(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],r=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",i.width=r.width||t.offsetWidth,i.height=r.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function wr(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:o}}function Zn(t){return t?Math.abs(t.scrollLeft):0}function ks(){let t=document.documentElement;return(window.pageXOffset||Zn(t))-(t.clientLeft||0)}function Bs(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function $s(t){return t?getComputedStyle(t).direction==="rtl":!1}function Uu(t,i,e=!0){var n,r,o,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Sr(t),l=a.height,u=a.width,c=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),f=Bs(),m=ks(),D=wr(),g,b,E="top";p.top+c+l>D.height?(g=p.top+f-l,E="bottom",g<0&&(g=f)):g=c+p.top+f,p.left+u>D.width?b=Math.max(0,p.left+m+d-u):b=p.left+m,$s(t)?t.style.insetInlineEnd=b+"px":t.style.insetInlineStart=b+"px",t.style.top=g+"px",t.style.transformOrigin=E,e&&(t.style.marginTop=E==="bottom"?`calc(${(r=(n=Et(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=Et(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function ju(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Tr(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Hu(t,i,e=!0,n=void 0){var r;if(t){let o=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Sr(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=wr(),u,c,d=n??"top";if(!n&&a.top+s+o.height>l.height?(u=-1*o.height,d="bottom",a.top+u<0&&(u=-1*a.top)):u=s,o.width>l.width?c=a.left*-1:a.left+o.width>l.width?c=(a.left+o.width-l.width)*-1:c=0,t.style.top=u+"px",t.style.insetInlineStart=c+"px",t.style.transformOrigin=d,e){let p=(r=Et(/-anchor-gutter$/))==null?void 0:r.value;t.style.marginTop=d==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function Us(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function js(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Us(t))}function qe(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function _r(t){if(qe(t))return t;if(!t||typeof t!="object")return;let i=t;return i=t.nativeElement,i=x(i),qe(i)?i:void 0}function Hs(t,i){var e,n,r;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((r=i?.children)==null?void 0:r[parseInt(a[1],10)])||null:document.querySelector(t)||null}let o=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=_r(o);return js(s)?s:o?.nodeType===9?o:void 0}}}function zu(t,i){let e=Hs(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function cn(t,i={}){if(qe(t)){let e=(r,o)=>{var s,a;let l=(s=t?.$attrs)!=null&&s[r]?[(a=t?.$attrs)==null?void 0:a[r]]:[];return[o].flat().reduce((u,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")u.push(c);else if(d==="object"){let p=Array.isArray(c)?e(r,c):Object.entries(c).map(([f,m])=>r==="style"&&(m||m===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?f:void 0);u=p.length?u.concat(p.filter(f=>!!f)):u}}return u},l)},n=r=>{e("style",r).forEach(o=>{let s=o.indexOf(":");if(s<0)return;let a=o.slice(0,s).trim(),l=o.slice(s+1).trim();a&&t.style.setProperty(a,l)})};Object.entries(i).forEach(([r,o])=>{if(o!=null){let s=r.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),o):r==="p-bind"||r==="pBind"?cn(t,o):r==="style"?(n(o),(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=t.style.cssText)):(o=r==="class"?[...new Set(e("class",o))].join(" ").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=o),t.setAttribute(r,o))}})}}function dn(t,i={},...e){if(t){let n=document.createElement(t);return cn(n,i),n.append(...e),n}}function Wu(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(r):setTimeout(r,16))};r()}}function Vs(t,i){return qe(t)?Array.from(t.querySelectorAll(i)):[]}function Je(t,i){return qe(t)?t.matches(i)?t:t.querySelector(i):null}function Gu(t,i){t&&document.activeElement!==t&&t.focus(i)}function Ar(t,i=""){let e=Vs(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function Ku(t,i){let e=Ar(t,i);return e.length>0?e[0]:null}function Xn(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Yu(t,i){let e=Ar(t,i);return e.length>0?e[e.length-1]:null}function Ir(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||Zn(document.documentElement)||Zn(document.body)||0)}}return{top:"auto",left:"auto"}}function qn(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Jn(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Zu(t){return!!(t&&t.offsetParent!=null)}function Xu(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qu(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ju(){return new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(t)})})}function Fr(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Qu(t,i){let e=_r(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function ec(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),o=r?parseFloat(r):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-o,l=t.scrollTop,u=t.clientHeight,c=qn(i);a<0?t.scrollTop=l+a:a+c>u&&(t.scrollTop=l+a-u+c)}function Or(t,i="",e){if(qe(t)&&e!==null&&e!==void 0){if(i==="style"){typeof e=="string"?t.style.cssText=e:typeof e=="object"&&Object.entries(e).forEach(([n,r])=>{if(r==null)return;let o=n.startsWith("--")?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();t.style.setProperty(o,String(r))});return}t.setAttribute(i,e)}}function tc(t,i,e=null,n){var r;i&&((r=t?.style)==null||r.setProperty(i,e,n))}function Pr(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(r=>{r(e)})},clear(){t.clear()}}}var zs=Object.defineProperty,Rr=Object.getOwnPropertySymbols,Ws=Object.prototype.hasOwnProperty,Gs=Object.prototype.propertyIsEnumerable,Lr=(t,i,e)=>i in t?zs(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Nr=(t,i)=>{for(var e in i||(i={}))Ws.call(i,e)&&Lr(t,e,i[e]);if(Rr)for(var e of Rr(i))Gs.call(i,e)&&Lr(t,e,i[e]);return t};function Mr(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let r=typeof n;if(r==="string"||r==="number")i.push(n);else if(r==="object"){let o=Array.isArray(n)?[Mr(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=o.length?i.concat(o.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Ks(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Ys({skipUndefined:t=!1},...i){return i?.reduce((e,n={})=>{for(let r in n){let o=n[r];if(!(t&&o===void 0))if(r==="style")e.style=Nr(Nr({},e.style),n.style);else if(r==="class"||r==="className")e[r]=Mr(e[r],n[r]);else if(Ks(o)){let s=e[r];e[r]=s?(...a)=>{s(...a),o(...a)}:o}else e[r]=o}return e},{})}function Qn(...t){return Ys({skipUndefined:!1},...t)}var pn={};function Ct(t="pui_id_"){return Object.hasOwn(pn,t)||(pn[t]=0),pn[t]++,`${t}${pn[t]}`}var xr=["*"],Zs=(function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t})(Zs||{}),uc=(()=>{class t{requireConfirmationSource=new Ce;acceptConfirmationSource=new Ce;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var z=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var cc=(()=>{class t{filter(e,n,r,o,s){let a=[];if(e)for(let l of e)for(let u of n){let c=on(l,u);if(this.filters[o](c,r,s)){a.push(l);break}}return a}filters={startsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let o=ie(n.toString()).toLocaleLowerCase(r);return ie(e.toString()).toLocaleLowerCase(r).slice(0,o.length)===o},contains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let o=ie(n.toString()).toLocaleLowerCase(r);return ie(e.toString()).toLocaleLowerCase(r).indexOf(o)!==-1},notContains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let o=ie(n.toString()).toLocaleLowerCase(r);return ie(e.toString()).toLocaleLowerCase(r).indexOf(o)===-1},endsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let o=ie(n.toString()).toLocaleLowerCase(r),s=ie(e.toString()).toLocaleLowerCase(r);return s.indexOf(o,s.length-o.length)!==-1},equals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:ie(e.toString()).toLocaleLowerCase(r)==ie(n.toString()).toLocaleLowerCase(r),notEquals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:ie(e.toString()).toLocaleLowerCase(r)!=ie(n.toString()).toLocaleLowerCase(r),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let r=0;r<n.length;r++)if(an(e,n[r]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,r)=>this.filters.equals(e,n,r),isNot:(e,n,r)=>this.filters.notEquals(e,n,r),before:(e,n,r)=>this.filters.lt(e,n,r),after:(e,n,r)=>this.filters.gt(e,n,r),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dc=(()=>{class t{clickSource=new Ce;parentDragSource=new Ce;clickObservable=this.clickSource.asObservable();parentDragObservable=this.parentDragSource.asObservable();add(e){e&&this.clickSource.next(e)}emitParentDrag(e){this.parentDragSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=ne({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:xr,decls:1,vars:0,template:function(n,r){n&1&&(Te(),_e(0))},encapsulation:2})}return t})(),hc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=ne({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:xr,decls:1,vars:0,template:function(n,r){n&1&&(Te(),_e(0))},encapsulation:2})}return t})(),kr=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(R(ct))};static \u0275dir=P({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ke=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=J({imports:[De]})}return t})(),fc=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Xs=Object.defineProperty,qs=Object.defineProperties,Js=Object.getOwnPropertyDescriptors,hn=Object.getOwnPropertySymbols,Ur=Object.prototype.hasOwnProperty,jr=Object.prototype.propertyIsEnumerable,Br=(t,i,e)=>i in t?Xs(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,fe=(t,i)=>{for(var e in i||(i={}))Ur.call(i,e)&&Br(t,e,i[e]);if(hn)for(var e of hn(i))jr.call(i,e)&&Br(t,e,i[e]);return t},ei=(t,i)=>qs(t,Js(i)),Oe=(t,i)=>{var e={};for(var n in t)Ur.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&hn)for(var n of hn(t))i.indexOf(n)<0&&jr.call(t,n)&&(e[n]=t[n]);return e};var Qs=Pr(),re=Qs,St=/{([^}]*)}/g,Hr=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Vr=/var\([^)]+\)/g;function $r(t){return le(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function ea(t){return Fe(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function ta(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ti(t="",i=""){return ta(`${le(t,!1)&&le(i,!1)?`${t}-`:t}${i}`)}function zr(t="",i=""){return`--${ti(t,i)}`}function na(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Wr(t,i="",e="",n=[],r){if(le(t)){let o=t.trim();if(na(o))return;if(pe(o,St)){let s=o.replaceAll(St,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>pe(u,c)));return`var(${zr(e,un(l.join("-")))}${w(r)?`, ${r}`:""})`});return pe(s.replace(Vr,"0"),Hr)?`calc(${s})`:s}return o}else if(Dr(t))return t}function ia(t,i,e){le(i,!1)&&t.push(`${i}:${e};`)}function Qe(t,i){return t?`${t}{${i}}`:""}function Gr(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,c="",d=null,p=0;for(;u<=s.length;){let f=s[u];if((f==='"'||f==="'"||f==="`")&&s[u-1]!=="\\"&&(d=d===f?null:f),!d&&(f==="("&&p++,f===")"&&p--,(f===","||u===s.length)&&p===0)){let m=c.trim();m.startsWith("dt(")?l.push(Gr(m,a)):l.push(n(m)),c="",u++;continue}f!==void 0&&(c+=f),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let r=[],o=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")o.push(s),s+=2;else if(t[s]===")"&&o.length>0){let a=o.pop();o.length===0&&r.push([a,s])}if(!r.length)return t;for(let s=r.length-1;s>=0;s--){let[a,l]=r[s],u=t.slice(a+3,l),c=e(u,i),d=i(...c);t=t.slice(0,a)+d+t.slice(l+1)}return t}var ii=t=>{var i;let e=T.getTheme(),n=ni(e,t,void 0,"variable"),r=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],o=ni(e,t,void 0,"value");return{name:r,variable:n,value:o}},Pe=(...t)=>ni(T.getTheme(),...t),ni=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=T.defaults||{},{prefix:s,transform:a}=t?.options||o||{},l=pe(i,St)?i:`{${i}}`;return n==="value"||ve(n)&&a==="strict"?T.getTokenValue(i):Wr(l,void 0,s,[r.excludedKeyRegex],e)}return""};function et(t,...i){if(t instanceof Array){let e=t.reduce((n,r,o)=>{var s;return n+r+((s=x(i[o],{dt:Pe}))!=null?s:"")},"");return Gr(e,Pe)}return x(t,{dt:Pe})}function ra(t,i={}){let e=T.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:d}=l.pop();for(let p in c){let f=c[p],m=ea(f),D=pe(p,o)?ti(d):ti(d,un(p));if(Fe(m))l.push({node:m,path:D});else{let g=zr(D),b=Wr(m,D,n,[o]);ia(a,g,b);let E=D;n&&E.startsWith(n+"-")&&(E=E.slice(n.length+1)),s.push(E.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Qe(r,u)}}var he={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return ra(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,a,l,u,c,d;let{preset:p,options:f}=i,m,D,g,b,E,L,F;if(w(p)&&f.transform!=="strict"){let{primitive:ge,semantic:me,extend:oe}=p,st=me||{},{colorScheme:Tt}=st,_t=Oe(st,["colorScheme"]),At=oe||{},{colorScheme:It}=At,at=Oe(At,["colorScheme"]),lt=Tt||{},{dark:Ft}=lt,Ot=Oe(lt,["dark"]),Pt=It||{},{dark:Rt}=Pt,Lt=Oe(Pt,["dark"]),Nt=w(ge)?this._toVariables({primitive:ge},f):{},Mt=w(_t)?this._toVariables({semantic:_t},f):{},xt=w(Ot)?this._toVariables({light:Ot},f):{},gi=w(Ft)?this._toVariables({dark:Ft},f):{},mi=w(at)?this._toVariables({semantic:at},f):{},bi=w(Lt)?this._toVariables({light:Lt},f):{},yi=w(Rt)?this._toVariables({dark:Rt},f):{},[Ro,Lo]=[(o=Nt.declarations)!=null?o:"",Nt.tokens],[No,Mo]=[(s=Mt.declarations)!=null?s:"",Mt.tokens||[]],[xo,ko]=[(a=xt.declarations)!=null?a:"",xt.tokens||[]],[Bo,$o]=[(l=gi.declarations)!=null?l:"",gi.tokens||[]],[Uo,jo]=[(u=mi.declarations)!=null?u:"",mi.tokens||[]],[Ho,Vo]=[(c=bi.declarations)!=null?c:"",bi.tokens||[]],[zo,Wo]=[(d=yi.declarations)!=null?d:"",yi.tokens||[]];m=this.transformCSS(t,Ro,"light","variable",f,n,r),D=Lo;let Go=this.transformCSS(t,`${No}${xo}`,"light","variable",f,n,r),Ko=this.transformCSS(t,`${Bo}`,"dark","variable",f,n,r);g=`${Go}${Ko}`,b=[...new Set([...Mo,...ko,...$o])];let Yo=this.transformCSS(t,`${Uo}${Ho}color-scheme:light`,"light","variable",f,n,r),Zo=this.transformCSS(t,`${zo}color-scheme:dark`,"dark","variable",f,n,r);E=`${Yo}${Zo}`,L=[...new Set([...jo,...Vo,...Wo])],F=x(p.css,{dt:Pe})}return{primitive:{css:m,tokens:D},semantic:{css:g,tokens:b},global:{css:E,tokens:L},style:F}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var a,l,u;let c,d,p;if(w(i)&&e.transform!=="strict"){let f=t.replace("-directive",""),m=i,{colorScheme:D,extend:g,css:b}=m,E=Oe(m,["colorScheme","extend","css"]),L=g||{},{colorScheme:F}=L,ge=Oe(L,["colorScheme"]),me=D||{},{dark:oe}=me,st=Oe(me,["dark"]),Tt=F||{},{dark:_t}=Tt,At=Oe(Tt,["dark"]),It=w(E)?this._toVariables({[f]:fe(fe({},E),ge)},e):{},at=w(st)?this._toVariables({[f]:fe(fe({},st),At)},e):{},lt=w(oe)?this._toVariables({[f]:fe(fe({},oe),_t)},e):{},[Ft,Ot]=[(a=It.declarations)!=null?a:"",It.tokens||[]],[Pt,Rt]=[(l=at.declarations)!=null?l:"",at.tokens||[]],[Lt,Nt]=[(u=lt.declarations)!=null?u:"",lt.tokens||[]],Mt=this.transformCSS(f,`${Ft}${Pt}`,"light","variable",e,r,o,s),xt=this.transformCSS(f,Lt,"dark","variable",e,r,o,s);c=`${Mt}${xt}`,d=[...new Set([...Ot,...Rt,...Nt])],p=x(b,{dt:Pe})}return{css:c,tokens:d,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:a}=i,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,c=((o=l?.components)==null?void 0:o[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${x(r.order||r.name||"optimus",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(Fe(c)&&Object.hasOwn(c,"css")){let d=He(c.css),p=`${u}-variables`;l.push(`<style type="text/css" data-optimus-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let a={name:t,theme:i,params:e,set:r,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,p])=>c.push(`${d}="${p}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-optimus-style-id="${t}-variables" ${u}>${He(l)}</style>`:""},createTokens(t={},i,e="",n="",r={}){let o=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&St.test(this.value)){let d=this.value.trim().replace(St,p=>{var f;let m=p.slice(1,-1),D=this.tokens[m];if(!D)return console.warn(`Token not found for path: ${m}`),"__UNRESOLVED__";let g=D.computed(a,l,u);return Array.isArray(g)&&g.length===2?`light-dark(${g[0].value},${g[1].value})`:(f=g?.value)!=null?f:"__UNRESOLVED__"});c=Hr.test(d.replace(Vr,"0"))?`calc(${d})`:d}return ve(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,d])=>{let p=pe(c,i.variable.excludedKeyRegex)?l:l?`${l}.${$r(c)}`:$r(c),f=u?`${u}.${c}`:c;Fe(d)?s(d,p,f):(r[p]||(r[p]={paths:[],computed:(m,D={},g=[])=>{if(r[p].paths.length===1)return r[p].paths[0].computed(r[p].paths[0].scheme,D.binding,g);if(m&&m!=="none")for(let b=0;b<r[p].paths.length;b++){let E=r[p].paths[b];if(E.scheme===m)return E.computed(m,D.binding,g)}return r[p].paths.map(b=>b.computed(b.scheme,D[b.scheme],g))}}),r[p].paths.push({path:f,value:d,scheme:f.includes("colorScheme.light")?"light":f.includes("colorScheme.dark")?"dark":"none",computed:o,tokens:r}))})};return s(t,e,n),r},getTokenValue(t,i,e){var n;let r=(a=>a.split(".").filter(l=>!pe(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),o=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[r])==null?void 0:n.computed(o)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,d=Oe(u,["colorScheme"]);return a[c]=d,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Qe(w(i)?`${t}${i},${t} ${i}`:t,n):Qe(t,Qe(i??":root,:host",n))},transformCSS(t,i,e,n,r={},o,s,a){if(w(i)){let{cssLayer:l}=r;if(n!=="style"){let u=this.getColorSchemeOption(r,s);i=e==="dark"?u.reduce((c,{type:d,selector:p})=>(w(p)&&(c+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,d,i)),c),""):Qe(a??":root,:host",i)}if(l){let u={name:"optimus",order:"optimus"};Fe(l)&&(u.name=x(l.name,{name:t,type:n})),w(u.name)&&(i=Qe(`@layer ${u.name}`,i),o?.layerNames(u.name))}return i}return""}},T={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=ei(fe({},i),{options:fe(fe({},this.defaults.options),i.options)}),this._tokens=he.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),re.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ei(fe({},this.theme),{preset:t}),this._tokens=he.createTokens(t,this.defaults),this.clearLoadedStyleNames(),re.emit("preset:change",t),re.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ei(fe({},this.theme),{options:t}),this.clearLoadedStyleNames(),re.emit("options:change",t),re.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return he.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return he.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return he.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return he.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return he.getPreset(r)},getLayerOrderCSS(t=""){return he.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return he.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return he.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return he.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),re.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&re.emit("theme:load"))}};var Kr=`
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
`;var oa=0,Yr=(()=>{class t{document=h(H);use(e,n={}){let r=!1,o=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++oa}`,id:c=void 0,media:d=void 0,nonce:p=void 0,first:f=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-optimus-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),s){if(!s.isConnected){o=e;let D=this.document.head;Or(s,"nonce",p),f&&D.firstChild?D.insertBefore(s,D.firstChild):D.appendChild(s),cn(s,{type:"text/css",media:d,nonce:p,"data-optimus-style-id":u})}s.textContent!==o&&(s.textContent=o)}return{id:c,name:u,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},sa=`
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
`,K=(()=>{class t{name="base";useStyle=h(Yr);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(et`${x(e,{dt:Pe})}`);return o?this.useStyle.use(He(o),y({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(r="")=>T.transformCSS(e.name||this.name,`${r}${et`${n}`}`));loadBaseCSS=(e={})=>this.load(sa,e);loadBaseStyle=(e={},n="")=>this.load(Kr,e,(r="")=>T.transformCSS(e.name||this.name,`${r}${et`${n}`}`));getCommonTheme=e=>T.getCommon(this.name,e);getComponentTheme=e=>T.getComponent(this.name,e);getPresetTheme=(e,n,r)=>T.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>T.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=x(this.css,{dt:Pe}),o=He(et`${r}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-optimus-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>T.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[T.getStyleSheet(this.name,e,n)];if(this.style){let o=this.name==="base"?"global-style":`${this.name}-style`,s=et`${x(this.style,{dt:Pe})}`,a=He(T.transformCSS(o,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");r.push(`<style type="text/css" data-optimus-style-id="${o}" ${l}>${a}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var aa=(()=>{class t{theme=W(void 0);csp=W({nonce:void 0});isThemeChanged=!1;document=h(H);baseStyle=h(K);constructor(){B(()=>{re.on("theme:change",e=>{ft(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),B(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){T.clearLoadedStyleNames(),re.clear()}onThemeChange(e){T.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!T.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,y({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,y({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,y({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(y({name:"global-style"},s),o),T.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ri=(()=>{class t extends aa{ripple=W(!1);platformId=h(Ke);inputStyle=W(null);inputVariant=W(null);overlayAppendTo=W("self");overlayOptions={};csp=W({nonce:void 0});unstyled=W(void 0);pt=W(void 0);ptOptions=W(void 0);filterMatchModeOptions={text:[z.STARTS_WITH,z.CONTAINS,z.NOT_CONTAINS,z.ENDS_WITH,z.EQUALS,z.NOT_EQUALS],numeric:[z.EQUALS,z.NOT_EQUALS,z.LESS_THAN,z.LESS_THAN_OR_EQUAL_TO,z.GREATER_THAN,z.GREATER_THAN_OR_EQUAL_TO],date:[z.DATE_IS,z.DATE_IS_NOT,z.DATE_BEFORE,z.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Ce;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=y(y({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:d,zIndex:p,ptOptions:f,pt:m,unstyled:D}=e||{};n&&this.csp.set(n),d&&this.overlayAppendTo.set(d),r&&this.ripple.set(r),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),p&&(this.zIndex=p),m&&this.pt.set(m),f&&this.ptOptions.set(f),D&&this.unstyled.set(D),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),la=new C("OPTIMUS_CONFIG");function zc(...t){let i=t?.map(n=>({provide:la,useValue:n,multi:!1})),e=Ni(()=>{let n=h(ri);t?.forEach(r=>n.setConfig(r))});return Bt([...i,e])}var Zr=(()=>{class t extends K{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ee=new C("PARENT_INSTANCE"),q=(()=>{class t{document=h(H);platformId=h(Ke);el=h(ue);injector=h(We);cd=h(Ye);renderer=h(Se);config=h(ri);$parentInstance=h(Ee,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=h(Zr);baseStyle=h(K);scopedStyleEl;parent=this.$params.parent;cn=Ne;_themeScopedListener;themeChangeListenerMap=new Map;dt=_();unstyled=_();pt=_();ptOptions=_();$attrSelector=Ct("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=W(void 0);directiveUnstyled=W(void 0);$unstyled=ye(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=ye(()=>x(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>x(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||x(e,this.$params))}get $style(){return y(y({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){B(e=>{this.document&&!Gn(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),B(e=>{this.document&&!Gn(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return sn(e)?e(...n):Qn(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",r={}){return ln(e,n,r)}_hook(e,...n){if(!this.$hostName){let r=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),o=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);r?.(...n),o?.(...n)}}_load(){tt.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),tt.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);w(e)&&this.baseStyle.load(e,y({name:"global"},this.$styleOptions))}_loadCoreStyles(){!tt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),tt.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!T.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,y({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,y({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(r?.css,y({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(y({name:"global-style"},this.$styleOptions),o),T.setLoadedStyleName("common")}if(!T.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,y({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(y({name:`${this.$style?.name}-style`},this.$styleOptions),n),T.setLoadedStyleName(this.$style?.name)}if(!T.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,y({name:"layer-order",first:!0},this.$styleOptions)),T.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},r=this.$style?.load(n,y({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),tt.clearLoadedStyleNames();let r=n.bind(this);this.themeChangeListenerMap.set(e,r),re.on("theme:change",r)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(re.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",r={},o=!0){let s=/./g.test(n)&&!!r[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=o?s?this._useGlobalPT(this._getPTClassValue,n,r):this._useDefaultPT(this._getPTClassValue,n,r):void 0,c=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,Ue(y({},r),{global:u||{}})),d=this._getPTDatasets(n);return a||!a&&c?l?this._mergeProps(l,u,c,d):y(y(y({},u),c),d):y(y({},c),d)}_getPTDatasets(e=""){let n="data-pc-",r=e==="root"&&w(this.$pt()?.["data-pc-section"]);return e!=="transition"&&Ue(y({},e==="root"&&Ue(y({[`${n}name`]:Me(r?this.$pt()?.["data-pc-section"]:this.$name)},r&&{[`${n}extend`]:Me(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:Me(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,r){let o=this._getOptionValue(e,n,r);return le(o)||Yn(o)?{class:o}:o}_getPT(e,n="",r){let o=(s,a=!1)=>{let l=r?r(s):s,u=Me(n),c=Me(this.$hostName||this.$name);return(a?u!==c?l?.[u]:void 0:l?.[u])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)}_usePT(e,n,r,o){let s=a=>n?.call(this,a,r,o);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),c=s(e.value);return u===void 0&&c===void 0?void 0:le(c)?c:le(u)?u:a||!a&&c?l?this._mergeProps(l,u,c):y(y({},u),c):c}return s(e)}_useGlobalPT(e,n,r){return this._usePT(this.$globalPT,e,n,r)}_useDefaultPT(e,n,r){return this._usePT(this.$defaultPT,e,n,r)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,y(y({},this.$params),n))}ptms(e,n={}){return e.reduce((r,o)=>(r=Qn(r,this.ptm(o,n))||{},r),{})}ptmo(e={},n="",r={}){return this._getPTValue(e,n,y({instance:this},r),!1)}cx(e,n={}){return this.$unstyled()?void 0:Ne(this._getOptionValue(this.$style.classes,e,y(y({},this.$params),n)))}sx(e="",n=!0,r={}){if(n){let o=this._getOptionValue(this.$style.inlineStyles,e,y(y({},this.$params),r)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,y(y({},this.$params),r));return y(y({},s),o)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[X([Zr,K]),Ge]})}return t})();var oi=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let o=0;o<r.length;o++)e.classList.add(r[o])}else{let r=n.split(" ");for(let o=0;o<r.length;o++)e.className+=" "+r[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var o=0;o<n.length;o++){if(n[o]==e)return r;n[o].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==e)return o;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let o=L=>{if(L)return getComputedStyle(L).getPropertyValue("position")==="relative"?L:o(L.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),f=o(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},m,D,g="top";l.top+a+s.height>d.height?(m=l.top-f.top-s.height,g="bottom",l.top+m<0&&(m=-1*l.top)):(m=a+l.top-f.top,g="top");let b=l.left+s.width-d.width,E=l.left-f.left;if(s.width>d.width?D=(l.left-f.left)*-1:b>0?D=E-b:D=l.left-f.left,e.style.top=m+"px",e.style.left=D+"px",e.style.transformOrigin=g,r){let L=Et(/-anchor-gutter$/)?.value;e.style.marginTop=g==="bottom"?`calc(${L??"2px"} * -1)`:L??""}}static absolutePosition(e,n,r=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,a=o.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),m,D;c.top+l+s>f.height?(m=c.top+d-s,e.style.transformOrigin="bottom",m<0&&(m=d)):(m=l+c.top+d,e.style.transformOrigin="top"),c.left+a>f.width?D=Math.max(0,c.left+p+u-a):D=c.left+p,e.style.top=m+"px",e.style.left=D+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),o=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return o.test(l.getPropertyValue("overflow"))||o.test(l.getPropertyValue("overflowX"))||o.test(l.getPropertyValue("overflowY"))};for(let a of r){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-o-a,d=e.scrollTop,p=e.clientHeight,f=this.getOuterHeight(n);c<0?e.scrollTop=d+c:c+f>p&&(e.scrollTop=d+c-p+f)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,o=50,s=n,a=o/s;let l=setInterval(()=>{r=r-a,r<=0&&(r=0,clearInterval(l)),e.style.opacity=r},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||o.clientWidth,a=e.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of r){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...r),o}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(o,s)=>{let a=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?r(o,u):Object.entries(u).map(([p,f])=>o==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let a=o.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function sd(){Er({variableName:ii("scrollbar.width").name})}function ad(){Cr({variableName:ii("scrollbar.width").name})}var Xr=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=oi.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var qr=(()=>{class t extends q{autofocus=!1;focused=!1;platformId=h(Ke);document=h(H);host=h(ue);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Xe(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=oi.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[V]})}return t})();var U=(()=>{class t{el;renderer;pBind=_(void 0);_attrs=W(void 0);attrs=ye(()=>this._attrs()||this.pBind());styles=ye(()=>this.attrs()?.style);classes=ye(()=>Ne(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,B(()=>{let a=this.attrs()||{},{style:r,class:o}=a,s=vn(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let c=l.slice(2).toLowerCase();if(!this.listeners.some(d=>d.eventName===c)){let d=this.renderer.listen(this.el.nativeElement,c,u);this.listeners.push({eventName:c,unlisten:d})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){an(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(R(ue),R(Se))};static \u0275dir=P({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,r){n&2&&(ji(r.styles()),ee(r.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),Jr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=J({})}return t})();var Qr=`
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
`;var ua=`
    ${Qr}

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
`,ca={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,r=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":w(i)&&String(i).length===1,"p-badge-dot":ve(i),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":r==="info","p-badge-success":r==="success","p-badge-warn":r==="warn","p-badge-danger":r==="danger","p-badge-secondary":r==="secondary","p-badge-contrast":r==="contrast"}]}},eo=(()=>{class t extends K{name="badge";style=ua;classes=ca;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var to=new C("BADGE_INSTANCE");var ai=(()=>{class t extends q{componentName="Badge";$pcBadge=h(to,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(U,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=_();badgeSize=_();size=_();severity=_();value=_();badgeDisabled=_(!1,{transform:A});_componentStyle=h(eo);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=ne({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,r){n&2&&(be("data-p",r.dataP),ee(r.cn(r.cx("root"),r.styleClass())),zt("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[X([eo,{provide:to,useExisting:t},{provide:Ee,useExisting:t}]),we([U]),V],decls:1,vars:1,template:function(n,r){n&1&&Gt(0),n&2&&Kt(r.value())},dependencies:[De,ke,Jr],encapsulation:2,changeDetection:0})}return t})(),no=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=J({imports:[ai,ke,ke]})}return t})();var pa=["*"],ha={root:"p-fluid"},io=(()=>{class t extends K{name="fluid";classes=ha;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ro=new C("FLUID_INSTANCE"),li=(()=>{class t extends q{componentName="Fluid";$pcFluid=h(ro,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(U,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=h(io);static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=ne({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,r){n&2&&ee(r.cx("root"))},features:[X([io,{provide:ro,useExisting:t},{provide:Ee,useExisting:t}]),we([U]),V],ngContentSelectors:pa,decls:1,vars:0,template:function(n,r){n&1&&(Te(),_e(0))},dependencies:[De],encapsulation:2,changeDetection:0})}return t})();var fa=["*"],ga=`
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
`,oo=(()=>{class t extends K{name="baseicon";css=ga;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var so=(()=>{class t extends q{spin=!1;_componentStyle=h(oo);getClassNames(){return Ne("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=ne({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,r){n&2&&ee(r.getClassNames())},inputs:{spin:[2,"spin","spin",A]},features:[X([oo]),V],ngContentSelectors:fa,decls:1,vars:0,template:function(n,r){n&1&&(Te(),_e(0))},encapsulation:2,changeDetection:0})}return t})();var ma=["data-p-icon","spinner"],ao=(()=>{class t extends so{pathId;onInit(){this.pathId="url(#"+Ct()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=ne({type:t,selectors:[["","data-p-icon","spinner"]],features:[V],attrs:ma,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&($t(),Fn(0,"g"),Pn(1,"path",0),On(),Fn(2,"defs")(3,"clipPath",1),Pn(4,"rect",2),On()()),n&2&&(be("clip-path",r.pathId),Z(3),xi("id",r.pathId))},encapsulation:2})}return t})();var lo=`
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
`;var ba=`
    ${lo}

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
`,ya={root:"p-ink"},uo=(()=>{class t extends K{name="ripple";style=ba;classes=ya;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var co=(()=>{class t extends q{componentName="Ripple";zone=h(wn);_componentStyle=h(uo);animationListener;mouseDownListener;timeout;constructor(){super(),B(()=>{Xe(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&xe(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Xn(n)&&!Jn(n)){let a=Math.max(Tr(this.el.nativeElement),qn(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let r=Ir(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-Jn(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-Xn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),!this.$unstyled()&&Ve(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&xe(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&xe(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&xe(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Fr(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[X([uo]),V]})}return t})();var po=`
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
`;var Da=["content"],va=["loadingicon"],Ea=["icon"],Ca=["*"],Do=(t,i)=>({class:t,pt:i});function Sa(t,i){t&1&&Mi(0)}function wa(t,i){if(t&1&&dt(0,"span",7),t&2){let e=ce(3);ee(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),N("pBind",e.ptm("loadingIcon")),be("aria-hidden",!0)}}function Ta(t,i){if(t&1&&($t(),dt(0,"svg",8)),t&2){let e=ce(3);ee(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),N("pBind",e.ptm("loadingIcon"))("spin",!0),be("aria-hidden",!0)}}function _a(t,i){if(t&1&&(Ht(0),je(1,wa,1,4,"span",3)(2,Ta,1,5,"svg",6),Vt()),t&2){let e=ce(2);Z(),N("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),Z(),N("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function Aa(t,i){}function Ia(t,i){if(t&1&&je(0,Aa,0,0,"ng-template",9),t&2){let e=ce(2);N("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Fa(t,i){if(t&1&&(Ht(0),je(1,_a,3,2,"ng-container",2)(2,Ia,1,1,null,5),Vt()),t&2){let e=ce();Z(),N("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),Z(),N("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Rn(3,Do,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Oa(t,i){if(t&1&&dt(0,"span",7),t&2){let e=ce(2);ee(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),N("pBind",e.ptm("icon")),be("data-p",e.dataIconP)}}function Pa(t,i){}function Ra(t,i){if(t&1&&je(0,Pa,0,0,"ng-template",9),t&2){let e=ce(2);N("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function La(t,i){if(t&1&&(Ht(0),je(1,Oa,1,4,"span",3)(2,Ra,1,1,null,5),Vt()),t&2){let e=ce();Z(),N("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),Z(),N("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Rn(3,Do,e.cx("icon"),e.ptm("icon")))}}function Na(t,i){if(t&1&&(An(0,"span",7),Gt(1),In()),t&2){let e=ce();ee(e.cx("label")),N("pBind",e.ptm("label")),be("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),Z(),Kt(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function Ma(t,i){if(t&1&&dt(0,"p-badge",10),t&2){let e=ce();N("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var xa={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},nt=(()=>{class t extends K{name="button";style=po;classes=xa;static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ho=new C("BUTTON_INSTANCE"),fo=new C("BUTTON_DIRECTIVE_INSTANCE"),go=new C("BUTTON_LABEL_INSTANCE"),mo=new C("BUTTON_ICON_INSTANCE"),Be={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},bo=(()=>{class t extends q{componentName="ButtonLabel";ptButtonLabel=_();pButtonLabelPT=_();pButtonLabelUnstyled=_();$pcButtonLabel=h(go,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(U,{self:!0});constructor(){super(),B(()=>{let e=this.ptButtonLabel()||this.pButtonLabelPT();e&&this.directivePT.set(e)}),B(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&Wt("p-button-label",!r.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[X([nt,{provide:go,useExisting:t},{provide:Ee,useExisting:t}]),we([U]),V]})}return t})(),yo=(()=>{class t extends q{componentName="ButtonIcon";ptButtonIcon=_();pButtonIconPT=_();pButtonUnstyled=_();$pcButtonIcon=h(mo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(U,{self:!0});constructor(){super(),B(()=>{let e=this.ptButtonIcon()||this.pButtonIconPT();e&&this.directivePT.set(e)}),B(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&Wt("p-button-icon",!r.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[X([nt,{provide:mo,useExisting:t},{provide:Ee,useExisting:t}]),we([U]),V]})}return t})(),zp=(()=>{class t extends q{componentName="Button";$pcButtonDirective=h(fo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(U,{self:!0});_componentStyle=h(nt);ptButtonDirective=_();pButtonPT=_();pButtonUnstyled=_();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),B(()=>{let e=this.ptButtonDirective()||this.pButtonPT();e&&this.directivePT.set(e)}),B(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),B(()=>{let e=this.$unstyled();this.initialized&&e&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=_(void 0,{transform:A});iconSignal=Ln(yo);labelSignal=Ln(bo);isIconOnly=ye(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Be);pcFluid=h(li,{optional:!0,host:!0,skipSelf:!0});isTextButton=ye(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
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
    </svg>`;onAfterViewInit(){!this.$unstyled()&&Ve(this.htmlElement,this.getStyleClass().join(" ")),Xe(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let e=[Be.button,Be.component];return this.icon&&!this.label&&ve(this.htmlElement.textContent)&&e.push(Be.iconOnly),this.loading&&(e.push(Be.disabled,Be.loading),!this.icon&&this.label&&e.push(Be.labelOnly),this.icon&&!this.label&&!ve(this.htmlElement.textContent)&&e.push(Be.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),this.$unstyled()?[]:e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(r=>e.some(o=>r===`p-button-${o}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Je(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let n=dn("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Je(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let n=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,r=!this.$unstyled()&&this.getIconClass(),o=dn("span",{class:this.cn(this.cx("icon"),n,r),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(o.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(o,this.htmlElement.firstChild)}}updateLabel(){let e=Je(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Je(this.htmlElement,'[data-pc-section="buttonicon"]'),n=Je(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e&&!this.$unstyled()?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","pButton",""]],contentQueries:function(n,r,o){n&1&&$i(o,r.iconSignal,yo,5)(o,r.labelSignal,bo,5),n&2&&Ui(2)},hostVars:4,hostBindings:function(n,r){n&2&&Wt("p-button-icon-only",!r.$unstyled()&&r.isIconOnly())("p-button-text",!r.$unstyled()&&r.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",A],plain:[2,"plain","plain",A],raised:[2,"raised","raised",A],size:"size",outlined:[2,"outlined","outlined",A],rounded:[2,"rounded","rounded",A],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[X([nt,{provide:fo,useExisting:t},{provide:Ee,useExisting:t}]),we([U]),V]})}return t})(),ka=(()=>{class t extends q{componentName="Button";hostName="";$pcButton=h(ho,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(U,{self:!0});_componentStyle=h(nt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=_(void 0,{transform:A});onClick=new Ut;onFocus=new Ut;onBlur=new Ut;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=h(li,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=O(t)))(r||t)}})();static \u0275cmp=ne({type:t,selectors:[["p-button"]],contentQueries:function(n,r,o){if(n&1&&Bi(o,Da,5)(o,va,5)(o,Ea,5)(o,kr,4),n&2){let s;pt(s=ht())&&(r.contentTemplate=s.first),pt(s=ht())&&(r.loadingIconTemplate=s.first),pt(s=ht())&&(r.iconTemplate=s.first),pt(s=ht())&&(r.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",A],raised:[2,"raised","raised",A],rounded:[2,"rounded","rounded",A],text:[2,"text","text",A],plain:[2,"plain","plain",A],outlined:[2,"outlined","outlined",A],link:[2,"link","link",A],tabindex:[2,"tabindex","tabindex",gt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",A],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",A],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[X([nt,{provide:ho,useExisting:t},{provide:Ee,useExisting:t}]),we([U]),V],ngContentSelectors:Ca,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,r){n&1&&(Te(),An(0,"button",0),ki("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),_e(1),je(2,Sa,1,0,"ng-container",1)(3,Fa,3,6,"ng-container",2)(4,La,3,6,"ng-container",2)(5,Na,2,6,"span",3)(6,Ma,1,4,"p-badge",4),In()),n&2&&(ee(r.cn(r.cx("root"),r.styleClass,r.buttonProps==null?null:r.buttonProps.styleClass)),N("ngStyle",r.style||(r.buttonProps==null?null:r.buttonProps.style))("disabled",r.disabled||r.loading||(r.buttonProps==null?null:r.buttonProps.disabled))("pAutoFocus",r.autofocus||(r.buttonProps==null?null:r.buttonProps.autofocus))("pBind",r.ptm("root")),be("type",r.type||(r.buttonProps==null?null:r.buttonProps.type))("aria-label",r.ariaLabel||(r.buttonProps==null?null:r.buttonProps.ariaLabel))("tabindex",r.tabindex||(r.buttonProps==null?null:r.buttonProps.tabindex))("data-p",r.dataP)("data-p-disabled",r.disabled||r.loading||(r.buttonProps==null?null:r.buttonProps.disabled))("data-p-severity",r.severity||(r.buttonProps==null?null:r.buttonProps.severity)),Z(2),N("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),Z(),N("ngIf",r.loading||(r.buttonProps==null?null:r.buttonProps.loading)),Z(),N("ngIf",!(r.loading||r.buttonProps!=null&&r.buttonProps.loading)),Z(),N("ngIf",!r.contentTemplate&&!r._contentTemplate&&(r.label||(r.buttonProps==null?null:r.buttonProps.label))),Z(),N("ngIf",!r.contentTemplate&&!r._contentTemplate&&(r.badge||(r.buttonProps==null?null:r.buttonProps.badge))))},dependencies:[De,jn,Vn,Hn,co,qr,ao,no,ai,ke,U],encapsulation:2,changeDetection:0})}return t})(),Wp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Q({type:t});static \u0275inj=J({imports:[De,ka,ke,ke]})}return t})();var $e=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var gn=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},mn=class{encodeKey(i){return vo(i)}encodeValue(i){return vo(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Ba(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var $a=/%(\d[a-f0-9])/gi,Ua={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function vo(t){return encodeURIComponent(t).replace($a,(i,e)=>Ua[e]??i)}function fn(t){return`${t}`}var Re=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new mn,i.fromString){if(i.fromObject)throw new k(2805,!1);this.map=Ba(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(fn):[fn(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(fn(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(fn(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function ja(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Eo(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Co(t){return typeof Blob<"u"&&t instanceof Blob}function So(t){return typeof FormData<"u"&&t instanceof FormData}function Ha(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var wo="Content-Type",To="Accept",_o="text/plain",Ao="application/json",Va=`${Ao}, ${_o}, */*`,it=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(ja(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new k(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new $e,this.context??=new gn,!this.params)this.params=new Re,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Eo(this.body)||Co(this.body)||So(this.body)||Ha(this.body)?this.body:this.body instanceof Re?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||So(this.body)?null:Co(this.body)?this.body.type||null:Eo(this.body)?null:typeof this.body=="string"?_o:this.body instanceof Re?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ao:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,s=i.priority||this.priority,a=i.cache||this.cache,l=i.mode||this.mode,u=i.redirect||this.redirect,c=i.credentials||this.credentials,d=i.referrer??this.referrer,p=i.integrity||this.integrity,f=i.referrerPolicy||this.referrerPolicy,m=i.transferCache??this.transferCache,D=i.timeout??this.timeout,g=i.body!==void 0?i.body:this.body,b=i.withCredentials??this.withCredentials,E=i.reportProgress??this.reportProgress,L=i.headers||this.headers,F=i.params||this.params,ge=i.context??this.context;return i.setHeaders!==void 0&&(L=Object.keys(i.setHeaders).reduce((me,oe)=>me.set(oe,i.setHeaders[oe]),L)),i.setParams&&(F=Object.keys(i.setParams).reduce((me,oe)=>me.set(oe,i.setParams[oe]),F)),new t(e,n,g,{params:F,headers:L,context:ge,reportProgress:E,responseType:r,withCredentials:b,transferCache:m,keepalive:o,cache:a,priority:s,timeout:D,mode:l,redirect:u,credentials:c,referrer:d,integrity:p,referrerPolicy:f})}},ze=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(ze||{}),ot=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new $e,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},bn=class t extends ot{constructor(i={}){super(i)}type=ze.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},wt=class t extends ot{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=ze.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},rt=class extends ot{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},za=200,Wa=204;var Ga=new C("");var Ka=/^\)\]\}',?\n/;var ci=(()=>{class t{xhrFactory;tracingService=h(Oi,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new k(-2800,!1);let n=this.xhrFactory;return En(null).pipe(Si(()=>new Di(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((g,b)=>s.setRequestHeader(g,b.join(","))),e.headers.has(To)||s.setRequestHeader(To,Va),!e.headers.has(wo)){let g=e.detectContentTypeHeader();g!==null&&s.setRequestHeader(wo,g)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let a=e.serializeBody(),l=null,u=()=>{if(l!==null)return l;let g=s.statusText||"OK",b=new $e(s.getAllResponseHeaders()),E=s.responseURL||e.url;return l=new bn({headers:b,status:s.status,statusText:g,url:E}),l},c=this.maybePropagateTrace(()=>{let{headers:g,status:b,statusText:E,url:L}=u(),F=null;b!==Wa&&(F=typeof s.response>"u"?s.responseText:s.response),b===0&&(b=F?za:0);let ge=b>=200&&b<300;if(e.responseType==="json"&&typeof F=="string"){let me=F;F=F.replace(Ka,"");try{F=F!==""?JSON.parse(F):null}catch(oe){F=me,ge&&(ge=!1,F={error:oe,text:F})}}ge?(o.next(new wt({body:F,headers:g,status:b,statusText:E,url:L||void 0})),o.complete()):o.error(new rt({error:F,headers:g,status:b,statusText:E,url:L||void 0}))}),d=this.maybePropagateTrace(g=>{let{url:b}=u(),E=new rt({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:b||void 0});o.error(E)}),p=d;e.timeout&&(p=this.maybePropagateTrace(g=>{let{url:b}=u(),E=new rt({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:b||void 0});o.error(E)}));let f=!1,m=this.maybePropagateTrace(g=>{f||(o.next(u()),f=!0);let b={type:ze.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),e.responseType==="text"&&s.responseText&&(b.partialText=s.responseText),o.next(b)}),D=this.maybePropagateTrace(g=>{let b={type:ze.UploadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),o.next(b)});return s.addEventListener("load",c),s.addEventListener("error",d),s.addEventListener("timeout",p),s.addEventListener("abort",d),e.reportProgress&&(s.addEventListener("progress",m),a!==null&&s.upload&&s.upload.addEventListener("progress",D)),s.send(a),o.next({type:ze.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",c),s.removeEventListener("timeout",p),e.reportProgress&&(s.removeEventListener("progress",m),a!==null&&s.upload&&s.upload.removeEventListener("progress",D)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(Y(vt))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ya(t,i){return i(t)}function Za(t,i,e){return(n,r)=>wi(e,()=>i(n,o=>t(o,r)))}var di=new C("",{factory:()=>[]}),Io=new C(""),Fo=new C("",{factory:()=>!0});var pi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Y(ci),r},providedIn:"root"})}return t})();var yn=(()=>{class t{backend;injector;chain=null;pendingTasks=h(_i);contributeToStability=h(Fo);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(di),...this.injector.get(Io,[])]));this.chain=n.reduceRight((r,o)=>Za(r,o,this.injector),Ya)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Ci(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(Y(pi),Y(Cn))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Y(yn),r},providedIn:"root"})}return t})();function ui(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Dn=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof it)o=e;else{let l;r.headers instanceof $e?l=r.headers:l=new $e(r.headers);let u;r.params&&(r.params instanceof Re?u=r.params:u=new Re({fromObject:r.params})),o=new it(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:u,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=En(o).pipe(Ei(l=>this.handler.handle(l)));if(e instanceof it||r.observe==="events")return s;let a=s.pipe(vi(l=>l instanceof wt));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(ut(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new k(2806,!1);return l.body}));case"blob":return a.pipe(ut(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new k(2807,!1);return l.body}));case"text":return a.pipe(ut(l=>{if(l.body!==null&&typeof l.body!="string")throw new k(2808,!1);return l.body}));default:return a.pipe(ut(l=>l.body))}case"response":return a;default:throw new k(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Re().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,ui(r,n))}post(e,n,r={}){return this.request("POST",e,ui(r,n))}put(e,n,r={}){return this.request("PUT",e,ui(r,n))}static \u0275fac=function(n){return new(n||t)(Y(hi))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xa=new C("",{factory:()=>!0}),qa="XSRF-TOKEN",Ja=new C("",{factory:()=>qa}),Qa="X-XSRF-TOKEN",el=new C("",{factory:()=>Qa}),tl=(()=>{class t{cookieName=h(Ja);doc=h(H);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=zn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Oo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=Y(tl),r},providedIn:"root"})}return t})();function nl(t,i){if(!h(Xa)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=h(Ze).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return i(t)}catch{return i(t)}let e=h(Oo).getToken(),n=h(el);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}var fi=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(fi||{});function il(t,i){return{\u0275kind:t,\u0275providers:i}}function rl(...t){let i=[Dn,yn,{provide:hi,useExisting:yn},{provide:pi,useFactory:()=>h(Ga,{optional:!0})??h(ci)},{provide:di,useValue:nl,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return Bt(i)}function ol(t){return il(fi.Interceptors,t.map(i=>({provide:di,useValue:i,multi:!0})))}var Po=class t{http=h(Dn);get(i,e){return this.http.get(i,e)}post(i,e,n){return this.http.post(i,e,n)}delete(i,e){return this.http.delete(i,e)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};export{Yt as a,Xo as b,Nn as c,Zt as d,Xi as e,ms as f,pr as g,jn as h,Hn as i,Vn as j,Ds as k,Es as l,De as m,zn as n,vt as o,Cs as p,Xe as q,Iu as r,Fu as s,Dn as t,rl as u,ol as v,ve as w,Ms as x,w as y,on as z,an as A,xu as B,ku as C,Bu as D,vr as E,Ve as F,xe as G,Sr as H,wr as I,ks as J,Bs as K,Uu as L,ju as M,Tr as N,Hu as O,Hs as P,zu as Q,dn as R,Wu as S,Je as T,Gu as U,Ar as V,Ku as W,Xn as X,Yu as Y,qn as Z,Jn as _,Zu as $,Xu as aa,qu as ba,Ju as ca,Qu as da,ec as ea,Or as fa,tc as ga,Ct as ha,Zs as ia,uc as ja,cc as ka,dc as la,pc as ma,hc as na,kr as oa,ke as pa,fc as qa,K as ra,zc as sa,Ee as ta,q as ua,oi as va,sd as wa,ad as xa,Xr as ya,qr as za,U as Aa,Jr as Ba,li as Ca,so as Da,ao as Ea,co as Fa,zp as Ga,ka as Ha,Wp as Ia,Po as Ja};
