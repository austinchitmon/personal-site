import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{A as Gp,Bn as mT,Cn as hT,Dr as wh,Dt as Tu,Er as wg,Ft as Wp,G as Ki,Gn as nT,H as Jp,J as Kp,Jn as oD,L as Ig,M as Gv,On as jc,Pr as yg,T as FI,U as KD,Un as nD,Wt as ZP,X as LE,Xn as oh,Yn as oe,Z as LI,Zt as aT,_ as D,a as AE,bn as gh,c as BD,cn as cg,dn as dD,fr as ty,g as Cu,gr as vD,hn as fT,ht as QP,ir as sT,it as N,kn as jo,kt as Uc,nr as rD,rt as Me,sr as tD,st as Nl,tn as bE,v as DD,vr as ve,wn as iD,x as ED,y as DT,yr as vi,yt as Rl}from"./chunk-CBX4aEHF.js";import{A as Te,Ot as th,bt as q,ct as jr,et as ee,ht as mu,i as Ca,j as To,ot as j,p as Ge$1,u as Ee}from"./chunk-Dm1bq6DV.js";import{a as Zt,i as K,n as He$1,r as dr,t as Cn}from"./main-5UBJ755R.js";import{t as Ae}from"./chunk-C1obH3sR.js";import{_ as so,c as _t,d as dr$1,h as qr,m as or,p as lr,s as Un$1,u as ci,v as sr,x as xr,y as ut}from"./chunk-CwQOr1Np.js";var Ue=`
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
`;var We=[`*`];var Je=`
    ${Ue}

    /* For Optimus */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`;var Ke={root:({instance:n})=>[`p-floatlabel`,{"p-floatlabel-over":n.variant===`over`,"p-floatlabel-on":n.variant===`on`,"p-floatlabel-in":n.variant===`in`}]};var Ge=(()=>{class n extends q{name=`floatlabel`;style=Je;classes=Ke;static ɵfac=(()=>{let e;return function(l){return(e||(e=ty(n)))(l||n)}})();static ɵprov=oe({token:n,factory:n.ɵfac})}return n})();var Ye=new N(`FLOATLABEL_INSTANCE`);var He=(()=>{class n extends ee{componentName=`FloatLabel`;_componentStyle=D(Ge);$pcFloatLabel=D(Ye,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(j,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}variant=`over`;static ɵfac=(()=>{let e;return function(l){return(e||(e=ty(n)))(l||n)}})();static ɵcmp=bE({type:n,selectors:[[`p-floatlabel`],[`p-floatLabel`],[`p-float-label`]],hostVars:2,hostBindings:function(a,l){a&2&&BD(l.cx(`root`))},inputs:{variant:`variant`},features:[sT([Ge,{provide:Ye,useExisting:n},{provide:Te,useExisting:n}]),LE([j]),Wp],ngContentSelectors:We,decls:1,vars:0,template:function(a,l){a&1&&(ED(),DD(0))},dependencies:[Ee,Ge$1,jr],encapsulation:2})}return n})();var V=class n{transform(t,e=`, `){return t==null||!Array.isArray(t)?null:t.filter(l=>typeof l==`string`).join(e)}static ɵfac=function(e){return new(e||n)};static ɵpipe=AE({name:`join`,type:n,pure:!0})};var $=class n{TAG_CONFIG={angular:{background:`#a51e24`,textColor:`#FFFFFF`},primeng:{background:`#a51e24`,textColor:`#FFFFFF`},typescript:{background:`#007acc`,textColor:`#FFFFFF`},node:{background:`#3e863d`,textColor:`#FFFFFF`},obsidian:{background:`#582bac`,textColor:`#FFFFFF`},markdown:{background:`#196989`,textColor:`#FFFFFF`}};value=ZP.required();currentConfig=DT(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:`rgba(51,51,51,0.88)`,textColor:`#FFFFFF`});tagClick=QP();static ɵfac=function(e){return new(e||n)};static ɵcmp=bE({type:n,selectors:[[`app-article-tag`]],inputs:{value:[1,`value`]},outputs:{tagClick:`tagClick`},decls:1,vars:9,consts:[[`severity`,`info`,3,`click`,`value`]],template:function(e,a){e&1&&(vi(0,`p-tag`,0),oh(`click`,function(){return a.tagClick.emit(a.value())}),jc()),e&2&&(gh(`border-radius`,`20px`)(`font-weight`,`500`)(`background-color`,a.currentConfig().background)(`color`,a.currentConfig().textColor),Kp(`value`,a.value()))},dependencies:[ci],encapsulation:2})};var Ze={files:[{fileName:`angular-coding-standard.md`,title:`Typescript / Angular 20+ Coding Standards`,cover:`angular-coding-standard.png`,subtitle:`My personal collection of standards for building robust, responsive Angular applications using PrimeNG.`,date:`2025-08-27T05:01:00.000Z`,tags:[`typescript`,`angular`,`PrimeNG`]},{fileName:`networking-1-lessons-learned.md`,title:`Networking 1 - Lessons Learned`,cover:`networking-1-lessons-learned.jpg`,subtitle:`Problems I faced while setting up IP Passthrough for my local network and how I solved them.`,date:`2025-08-27T05:00:00.000Z`,tags:[`networking`]},{fileName:`hello-blog.md`,title:`Hello Blog`,cover:`hello-blog.png`,subtitle:`Testing blog post, please ignore. Explains how populating this blog works.`,date:`2025-08-26T05:00:00.000Z`,tags:[`markdown`,`angular`,`obsidian`,`node`]}]};var v=class n{articleSource=DT(()=>this.#e().articleSource);searchControl=DT(()=>this.#e().searchControl);selectedTags=DT(()=>this.#e().selectedTags);#e=jo({searchControl:new sr,articleSource:Ze.files,selectedTags:new Set});toggleTagSelection(t){return this.#e().selectedTags.has(t)?this.removeTag(t):this.addTag(t)}addTag(t){this.#e.update(e=>s(r({},e),{selectedTags:new Set([...e.selectedTags,t])}))}removeTag(t){this.#e.update(e=>{let a=new Set(e.selectedTags);return a.delete(t),s(r({},e),{selectedTags:a})})}static ɵfac=function(e){return new(e||n)};static ɵprov=oe({token:n,factory:n.ɵfac})};var P=class n{#e=D(v);control=this.#e.searchControl;featured=DT(()=>this.articles().find(t=>t.tags.includes(`featured`))||this.articles()[0]);others=DT(()=>this.articles().filter(t=>t.title!==this.featured().title));articles=DT(()=>this.#e.articleSource().map(t=>this.formatFile(t)));filterList=DT(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=DT(()=>[...this.#e.selectedTags()]);searchValue=He$1(this.control().valueChanges.pipe(wg(300),Nl(),Me(t=>t?.toLowerCase()?.trim())));filteredArticles=DT(()=>{let t=this.searchValue(),e=this.selectedTags();return this.others().filter(a=>this.includesSearchValue(a,t)&&this.includesTag(a.tags,e))});allTags=DT(()=>[...new Set(this.articles().flatMap(t=>t.tags))]);toggleTagSelection(t){this.#e.toggleTagSelection(t)}formatFile(t){return s(r({},t),{date:new Date(t.date).toDateString(),routerLink:t.fileName.replace(`.md`,``)})}includesSearchValue(t,e){return e?t.title.toLowerCase().includes(e)||t.subtitle.toLowerCase().includes(e)||t.tags.some(a=>a.toLowerCase().includes(e)):!0}includesTag(t,e){return e?.length?e.every(a=>t.map(l=>l.toLowerCase()).includes(a.toLowerCase())):!0}static ɵfac=function(e){return new(e||n)};static ɵprov=oe({token:n,factory:n.ɵfac,providedIn:`root`})};function Qe(n,t){if(n&1&&(vi(0,`div`,20),Jp(1,`img`,21),vi(2,`p-tag`,22),KD(3,`✨ Featured`),jc()()),n&2){let e=vD();Gv(),Kp(`alt`,nT(e.facade.featured().title))(`ngSrc`,`blog/`+e.facade.featured().cover)}}function Xe(n,t){if(n&1&&KD(0),n&2)Uc(` `,vD().facade.featured().title||`Article`,` `)}function et(n,t){if(n&1){let e=dD();vi(0,`app-article-tag`,25),oh(`tagClick`,function(l){Tu(e);return Cu(vD(2).facade.toggleTagSelection(l))}),jc()}if(n&2){let e=t.$implicit;Kp(`value`,e)}}function tt(n,t){if(n&1&&(vi(0,`div`,23)(1,`div`,24),oD(2,et,1,1,`app-article-tag`,17,rD),jc(),vi(4,`div`),KD(5),jc()()),n&2){let e=vD();Gv(2),iD(e.facade.featured().tags),Gv(3),wh(e.facade.featured().date)}}function nt(n,t){if(n&1){let e=dD();vi(0,`app-article-tag`,25),oh(`tagClick`,function(l){Tu(e);return Cu(vD().facade.toggleTagSelection(l))}),jc()}if(n&2){let e=t.$implicit;Kp(`value`,e)}}function at(n,t){if(n&1&&(vi(0,`div`)(1,`span`,26),KD(2),fT(3,`join`),jc()()),n&2){let e=vD();Gv(2),Uc(`Filter by: `,hT(3,1,e.facade.filterList()))}}function it(n,t){if(n&1&&(vi(0,`div`,27),Jp(1,`img`,21),jc()),n&2){let e=vD().$implicit;Gv(),Kp(`alt`,nT(e.title))(`ngSrc`,`blog/`+e.cover)}}function ot(n,t){if(n&1&&KD(0),n&2){let e=vD().$implicit;wh(e.title||`Article`)}}function rt(n,t){if(n&1){let e=dD();vi(0,`app-article-tag`,25),oh(`tagClick`,function(l){Tu(e);return Cu(vD(3).facade.toggleTagSelection(l))}),jc()}if(n&2){let e=t.$implicit;Kp(`value`,e)}}function lt(n,t){if(n&1&&(vi(0,`div`,23)(1,`div`,24),oD(2,rt,1,1,`app-article-tag`,17,rD),jc(),vi(4,`div`),KD(5),jc()()),n&2){let e=vD().$implicit;Gv(2),iD(e.tags),Gv(3),wh(e.date)}}function ct(n,t){if(n&1&&(vi(0,`p-card`,19),Gp(1,it,2,3,`ng-template`,null,0,mT)(3,ot,1,1,`ng-template`,null,1,mT)(5,lt,6,1,`ng-template`,null,2,mT),vi(7,`p`,9),KD(8),jc()()),n&2){let e=t.$implicit;Kp(`routerLink`,e.routerLink),Gv(8),wh(e.subtitle)}}var z=class n{facade=D(P);static ɵfac=function(e){return new(e||n)};static ɵcmp=bE({type:n,selectors:[[`app-chittylog-container`]],features:[sT([v,P])],decls:36,vars:4,consts:[[`header`,``],[`title`,``],[`subtitle`,``],[1,`page-container`],[1,`title`,`white`],[1,`title`,`gradient`],[1,`subtitle`],[1,`w-95`],[1,`card`,`featured`,3,`routerLink`],[1,`multiline-ellipsis`],[1,`search-container`],[`variant`,`in`],[1,`pi`,`pi-search`],[`pInputText`,``,`id`,`search_articles`,1,`search-input`,3,`formControl`],[`for`,`search_articles`],[1,`tag-search-container`],[1,`tag-container`],[1,`clickable`,3,`value`],[1,`card-container`],[1,`card`,3,`routerLink`],[1,`box`,`featured`],[`fill`,``,1,`img-fill`,3,`alt`,`ngSrc`],[1,`featured-tag-overlay`],[1,`display-flex`,`flex-col`,`row-gap-2`],[1,`display-flex`,`flex-row`,`col-gap-2`],[1,`clickable`,3,`tagClick`,`value`],[1,`text-sm`],[1,`box`]],template:function(e,a){e&1&&(vi(0,`div`,3)(1,`h1`)(2,`span`,4),KD(3,`Chitty`),jc(),vi(4,`span`,5),KD(5,`blog`),jc()(),vi(6,`h3`,6),KD(7,` Guides, updates, and random thoughts directly from me 🌌 `),jc(),vi(8,`div`,7)(9,`p-card`,8),Gp(10,Qe,4,3,`ng-template`,null,0,mT)(12,Xe,1,1,`ng-template`,null,1,mT)(14,tt,6,1,`ng-template`,null,2,mT),vi(16,`p`,9),KD(17),jc()()(),vi(18,`div`,10)(19,`p-floatlabel`,11)(20,`p-iconfield`),Jp(21,`p-inputicon`,12)(22,`input`,13),LI(),jc(),vi(23,`label`,14),KD(24,`Search articles...`),jc()()(),vi(25,`div`,15)(26,`div`)(27,`p`),KD(28,`Search by tag:`),jc()(),vi(29,`div`,16),oD(30,nt,1,1,`app-article-tag`,17,rD),jc()(),tD(32,at,4,3,`div`),vi(33,`div`,18),oD(34,ct,9,2,`p-card`,19,rD),jc()()),e&2&&(Gv(9),Kp(`routerLink`,a.facade.featured().routerLink),Gv(8),wh(a.facade.featured().subtitle),Gv(5),Kp(`formControl`,a.facade.control()),FI(),Gv(8),iD(a.facade.allTags()),Gv(2),nD(a.facade.filterList().length?32:-1),Gv(2),iD(a.facade.filteredArticles()))},dependencies:[Ae,mu,Zt,He,qr,so,xr,lr,_t,or,dr$1,Un$1,$,ci,V],styles:[`.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4bb,#b48);-webkit-background-clip:text;background-clip:text;color:transparent}.box.featured[_ngcontent-%COMP%]{height:22rem;position:relative}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.featured-tag-overlay[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:10;background:linear-gradient(135deg,#8e44ad,#3498db);color:#fff;border-radius:20px;padding:.5rem 1rem;font-weight:700;font-size:1.05em;border:none;box-shadow:0 2px 8px #0000004d}@media(max-width:768px){.featured-tag-overlay[_ngcontent-%COMP%]{top:.75rem;left:.75rem;font-size:1.03em;padding:.4rem .8rem}}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media(max-width:768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.white[_ngcontent-%COMP%]{color:#cfcbc6}.subtitle[_ngcontent-%COMP%]{font-weight:100;font-size:1rem;color:#cacaca;text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media(max-width:768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card.featured[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #2ceaddb3}.card.featured[_ngcontent-%COMP%]:before{background:linear-gradient(0deg,transparent,transparent 30%,rgba(44,234,221,.3))}.card.featured[_ngcontent-%COMP%]{width:unset}.card[_ngcontent-%COMP%]{width:22rem;position:relative;overflow:hidden;transition:all .5s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);box-shadow:0 0 20px #bb448880}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(187,68,136,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0;z-index:1;pointer-events:none}.card[_ngcontent-%COMP%]:hover:before{opacity:1;transform:rotate(-45deg) translateY(100%)}`]})};function qe(n){let t=D(ve);return Ig(()=>n().then(e=>t.get(e)))}var U=class n{articleContent=ZP.required({transform:t=>this.stripFrontMatter(t)});stripFrontMatter(t){return t.replace(/^---\s*[\s\S]*?\s*---/,``).trim()}static ɵfac=function(e){return new(e||n)};static ɵcmp=bE({type:n,selectors:[[`app-post-markdown`]],inputs:{articleContent:[1,`articleContent`]},decls:1,vars:1,consts:[[`emoji`,``,1,`markdown`,3,`data`]],template:function(e,a){e&1&&Jp(0,`markdown`,0),e&2&&Kp(`data`,a.articleContent())},dependencies:[dr],styles:[`.markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:#2e2e2e;color:#b48;padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}`]})};var st=()=>[`../`];var pt=()=>import(`./chunk-BJb27V5i.js`).then(n=>n.ReadingTimeService);var G=class n{route=D(K);api=D(To);timeEstimate=qe(pt);shareButtonCopied=jo(!1);shareButtonLabel=DT(()=>this.shareButtonCopied()?`Copied!`:`Share`);article=He$1(this.route.paramMap.pipe(Me(t=>t.get(`postName`)||``),Rl(t=>t?this.api.get(`blog/${t}.md`,{responseType:`text`}):cg(()=>`No route param`)),Ki(t=>(console.error(t),``))));timeToReadInMinutes=He$1(yg([Cn(this.article),this.timeEstimate]).pipe(Rl(([t,e])=>e.getReadingTimeInMinutes(t||``))));downloadMarkdown(){if(this.article()){let t=this.article(),e=new Blob([t],{type:`text/markdown`}),a=document.createElement(`a`);a.href=URL.createObjectURL(e),a.download=`my-file.md`,a.click(),URL.revokeObjectURL(a.href)}}copyCurrentUrl(){navigator.clipboard.writeText(window.location.href).then(()=>{}).catch(t=>{console.error(`Failed to copy URL: `,t)})}handleShareClick(){this.copyCurrentUrl(),this.shareButtonCopied.set(!0),setTimeout(()=>{this.shareButtonCopied.set(!1)},2e3)}static ɵfac=function(e){return new(e||n)};static ɵcmp=bE({type:n,selectors:[[`app-post-container`]],decls:14,vars:9,consts:[[`spinner`,``],[1,`page-container`],[3,`spinWhileUndefined`],[1,`navigation-header`],[`label`,`Back to Blog`,`icon`,`pi pi-chevron-left`,`severity`,`secondary`,3,`routerLink`,`text`],[1,`action-buttons`],[`icon`,`pi pi-share-alt`,`severity`,`secondary`,3,`click`,`label`,`text`],[`label`,`Download`,`icon`,`pi pi-download`,`severity`,`secondary`,3,`click`,`text`],[1,`reading-time-container`],[1,`pi`,`pi-clock`,`reading-time-icon`],[1,`text-sm`],[1,`content-area`],[3,`articleContent`]],template:function(e,a){e&1&&(vi(0,`div`,1)(1,`app-loading-spinner`,2,0)(3,`div`,3),Jp(4,`p-button`,4),vi(5,`div`,5)(6,`p-button`,6),oh(`click`,function(){return a.handleShareClick()}),jc(),vi(7,`p-button`,7),oh(`click`,function(){return a.downloadMarkdown()}),jc()()(),vi(8,`div`,8),Jp(9,`i`,9),vi(10,`p`,10),KD(11),jc()(),vi(12,`div`,11),Jp(13,`app-post-markdown`,12),jc()()()),e&2&&(Gv(),Kp(`spinWhileUndefined`,a.article()),Gv(3),Kp(`routerLink`,aT(8,st))(`text`,!0),Gv(2),Kp(`label`,a.shareButtonLabel())(`text`,!0),Gv(),Kp(`text`,!0),Gv(4),Uc(``,a.timeToReadInMinutes(),` min. read`),Gv(2),Kp(`articleContent`,a.article()||``))},dependencies:[U,th,Ca,Zt,ut],styles:[`.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}@media(max-width:768px){.page-container[_ngcontent-%COMP%]{padding:1.5rem .75rem}}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}@media(max-width:768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:center}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.reading-time-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.reading-time-icon[_ngcontent-%COMP%]{font-size:.875rem;color:#cfcbc6}`]})};var Un=[{path:``,component:z},{path:`:postName`,component:G}];export{Un as CHITTYLOG_ROUTES};