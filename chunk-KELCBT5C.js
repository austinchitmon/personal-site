import{a as Fe,b as S,c as Se}from"./chunk-XE4FTZXR.js";import{d as ve,g as B}from"./chunk-URPY57FW.js";import{a as R,b as Ie,d as Oe,g as Ne,i as Le,j as Ee,k as Ae,l as Be,n as je,o as Re,p as Ve}from"./chunk-NI52JW64.js";import{a as De}from"./chunk-Y2WKHKZP.js";import{Aa as j,Ba as ke,Ha as Te,Ia as Me,Ja as Pe,m as he,pa as ye,ra as xe,s as Ce,ta as _e,ua as we}from"./chunk-F6GZT4GM.js";import{$ as O,Ab as o,B as ee,Bb as f,E as te,Ib as L,K as Y,Mb as u,Ob as m,Pa as r,Pb as se,Q as C,Qb as pe,T as ne,V as d,Zb as de,_ as I,ac as me,ba as ae,bc as s,cb as g,cc as v,dc as F,fb as ie,hb as oe,hc as q,ib as re,ic as E,ja as N,jb as Z,jc as ge,m as J,nc as fe,oa as H,oc as ue,p as D,q as K,qc as b,tb as le,u as Q,ub as ce,vb as k,vc as p,wb as T,xb as M,yb as c,yc as be,z as X,zb as i,zc as A}from"./chunk-UAIG5MLJ.js";import{a as _,b as w}from"./chunk-IFGU66OU.js";var $e=`
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
`;var Ze=["*"],qe=`
    ${$e}

    /* For Optimus */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,We={root:({instance:n})=>["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]},ze=(()=>{class n extends xe{name="floatlabel";style=qe;classes=We;static \u0275fac=(()=>{let e;return function(l){return(e||(e=H(n)))(l||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac})}return n})();var Ue=new ne("FLOATLABEL_INSTANCE"),Ge=(()=>{class n extends we{componentName="FloatLabel";_componentStyle=d(ze);$pcFloatLabel=d(Ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(j,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let e;return function(l){return(e||(e=H(n)))(l||n)}})();static \u0275cmp=g({type:n,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(a,l){a&2&&me(l.cx("root"))},inputs:{variant:"variant"},features:[E([ze,{provide:Ue,useExisting:n},{provide:_e,useExisting:n}]),oe([j]),re],ngContentSelectors:Ze,decls:1,vars:0,template:function(a,l){a&1&&(se(),pe(0))},dependencies:[he,ye,ke],encapsulation:2,changeDetection:0})}return n})();var V=class n{transform(t,e=", "){return t==null||!Array.isArray(t)?null:t.filter(l=>typeof l=="string").join(e)}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=ie({name:"join",type:n,pure:!0})};var $=class n{TAG_CONFIG={angular:{background:"#a51e24",textColor:"#FFFFFF"},primeng:{background:"#a51e24",textColor:"#FFFFFF"},typescript:{background:"#007acc",textColor:"#FFFFFF"},node:{background:"#3e863d",textColor:"#FFFFFF"},obsidian:{background:"#582bac",textColor:"#FFFFFF"},markdown:{background:"#196989",textColor:"#FFFFFF"}};value=A.required();currentConfig=p(()=>this.TAG_CONFIG[this.value().toLowerCase()]??{background:"rgba(51,51,51,0.88)",textColor:"#FFFFFF"});tagClick=be();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-article-tag"]],inputs:{value:[1,"value"]},outputs:{tagClick:"tagClick"},decls:1,vars:9,consts:[["severity","info",3,"click","value"]],template:function(e,a){e&1&&(i(0,"p-tag",0),u("click",function(){return a.tagClick.emit(a.value())}),o()),e&2&&(de("border-radius","20px")("font-weight","500")("background-color",a.currentConfig().background)("color",a.currentConfig().textColor),c("value",a.value()))},dependencies:[R],encapsulation:2,changeDetection:0})};var Ye={files:[{fileName:"angular-coding-standard.md",title:"Typescript / Angular 20+ Coding Standards",cover:"angular-coding-standard.png",subtitle:"My personal collection of standards for building robust, responsive Angular applications using PrimeNG.",date:"2025-08-27T05:01:00.000Z",tags:["typescript","angular","PrimeNG"]},{fileName:"networking-1-lessons-learned.md",title:"Networking 1 - Lessons Learned",cover:"networking-1-lessons-learned.jpg",subtitle:"Problems I faced while setting up IP Passthrough for my local network and how I solved them.",date:"2025-08-27T05:00:00.000Z",tags:["networking"]},{fileName:"hello-blog.md",title:"Hello Blog",cover:"hello-blog.png",subtitle:"Testing blog post, please ignore. Explains how populating this blog works.",date:"2025-08-26T05:00:00.000Z",tags:["markdown","angular","obsidian","node"]}]};var y=class n{articleSource=p(()=>this.#e().articleSource);searchControl=p(()=>this.#e().searchControl);selectedTags=p(()=>this.#e().selectedTags);#e=N({searchControl:new Le,articleSource:Ye.files,selectedTags:new Set});toggleTagSelection(t){return this.#e().selectedTags.has(t)?this.removeTag(t):this.addTag(t)}addTag(t){this.#e.update(e=>w(_({},e),{selectedTags:new Set([...e.selectedTags,t])}))}removeTag(t){this.#e.update(e=>{let a=new Set(e.selectedTags);return a.delete(t),w(_({},e),{selectedTags:a})})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac})};var P=class n{#e=d(y);control=this.#e.searchControl;featured=p(()=>this.articles().find(t=>t.tags.includes("featured"))||this.articles()[0]);others=p(()=>this.articles().filter(t=>t.title!==this.featured().title));articles=p(()=>this.#e.articleSource().map(t=>this.formatFile(t)));filterList=p(()=>[...this.searchValue()?[`"${this.searchValue()}"`]:[],...this.selectedTags()?.length?this.selectedTags():[]]);selectedTags=p(()=>[...this.#e.selectedTags()]);searchValue=S(this.control().valueChanges.pipe(ee(300),te(),D(t=>t?.toLowerCase()?.trim())));filteredArticles=p(()=>{let t=this.searchValue(),e=this.selectedTags();return this.others().filter(a=>this.includesSearchValue(a,t)&&this.includesTag(a.tags,e))});allTags=p(()=>[...new Set(this.articles().flatMap(t=>t.tags))]);toggleTagSelection(t){this.#e.toggleTagSelection(t)}formatFile(t){return w(_({},t),{date:new Date(t.date).toDateString(),routerLink:t.fileName.replace(".md","")})}includesSearchValue(t,e){return e?t.title.toLowerCase().includes(e)||t.subtitle.toLowerCase().includes(e)||t.tags.some(a=>a.toLowerCase().includes(e)):!0}includesTag(t,e){return e?.length?e.every(a=>t.map(l=>l.toLowerCase()).includes(a.toLowerCase())):!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};function Je(n,t){if(n&1&&(i(0,"div",20),f(1,"img",21),i(2,"p-tag",22),s(3,"\u2728 Featured"),o()()),n&2){let e=m();r(),c("alt",q(e.facade.featured().title))("ngSrc","blog/"+e.facade.featured().cover)}}function Ke(n,t){if(n&1&&s(0),n&2){let e=m();F(" ",e.facade.featured().title||"Article"," ")}}function Qe(n,t){if(n&1){let e=L();i(0,"app-article-tag",25),u("tagClick",function(l){I(e);let x=m(2);return O(x.facade.toggleTagSelection(l))}),o()}if(n&2){let e=t.$implicit;c("value",e)}}function Xe(n,t){if(n&1&&(i(0,"div",23)(1,"div",24),T(2,Qe,1,1,"app-article-tag",17,k),o(),i(4,"div"),s(5),o()()),n&2){let e=m();r(2),M(e.facade.featured().tags),r(3),v(e.facade.featured().date)}}function et(n,t){if(n&1){let e=L();i(0,"app-article-tag",25),u("tagClick",function(l){I(e);let x=m();return O(x.facade.toggleTagSelection(l))}),o()}if(n&2){let e=t.$implicit;c("value",e)}}function tt(n,t){if(n&1&&(i(0,"div")(1,"span",26),s(2),fe(3,"join"),o()()),n&2){let e=m();r(2),F("Filter by: ",ue(3,1,e.facade.filterList()))}}function nt(n,t){if(n&1&&(i(0,"div",27),f(1,"img",21),o()),n&2){let e=m().$implicit;r(),c("alt",q(e.title))("ngSrc","blog/"+e.cover)}}function at(n,t){if(n&1&&s(0),n&2){let e=m().$implicit;v(e.title||"Article")}}function it(n,t){if(n&1){let e=L();i(0,"app-article-tag",25),u("tagClick",function(l){I(e);let x=m(3);return O(x.facade.toggleTagSelection(l))}),o()}if(n&2){let e=t.$implicit;c("value",e)}}function ot(n,t){if(n&1&&(i(0,"div",23)(1,"div",24),T(2,it,1,1,"app-article-tag",17,k),o(),i(4,"div"),s(5),o()()),n&2){let e=m().$implicit;r(2),M(e.tags),r(3),v(e.date)}}function rt(n,t){if(n&1&&(i(0,"p-card",19),Z(1,nt,2,3,"ng-template",null,0,b)(3,at,1,1,"ng-template",null,1,b)(5,ot,6,1,"ng-template",null,2,b),i(7,"p",9),s(8),o()()),n&2){let e=t.$implicit;c("routerLink",e.routerLink),r(8),v(e.subtitle)}}var z=class n{facade=d(P);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-chittylog-container"]],features:[E([y,P])],decls:36,vars:4,consts:[["header",""],["title",""],["subtitle",""],[1,"page-container"],[1,"title","white"],[1,"title","gradient"],[1,"subtitle"],[1,"w-95"],[1,"card","featured",3,"routerLink"],[1,"multiline-ellipsis"],[1,"search-container"],["variant","in"],[1,"pi","pi-search"],["pInputText","","id","search_articles",1,"search-input",3,"formControl"],["for","search_articles"],[1,"tag-search-container"],[1,"tag-container"],[1,"clickable",3,"value"],[1,"card-container"],[1,"card",3,"routerLink"],[1,"box","featured"],["fill","",1,"img-fill",3,"alt","ngSrc"],[1,"featured-tag-overlay"],[1,"display-flex","flex-col","row-gap-2"],[1,"display-flex","flex-row","col-gap-2"],[1,"clickable",3,"tagClick","value"],[1,"text-sm"],[1,"box"]],template:function(e,a){e&1&&(i(0,"div",3)(1,"h1")(2,"span",4),s(3,"Chitty"),o(),i(4,"span",5),s(5,"blog"),o()(),i(6,"h3",6),s(7," Guides, updates, and random thoughts directly from me \u{1F30C} "),o(),i(8,"div",7)(9,"p-card",8),Z(10,Je,4,3,"ng-template",null,0,b)(12,Ke,1,1,"ng-template",null,1,b)(14,Xe,6,1,"ng-template",null,2,b),i(16,"p",9),s(17),o()()(),i(18,"div",10)(19,"p-floatlabel",11)(20,"p-iconfield"),f(21,"p-inputicon",12)(22,"input",13),o(),i(23,"label",14),s(24,"Search articles..."),o()()(),i(25,"div",15)(26,"div")(27,"p"),s(28,"Search by tag:"),o()(),i(29,"div",16),T(30,et,1,1,"app-article-tag",17,k),o()(),le(32,tt,4,3,"div"),i(33,"div",18),T(34,rt,9,2,"p-card",19,k),o()()),e&2&&(r(9),c("routerLink",a.facade.featured().routerLink),r(8),v(a.facade.featured().subtitle),r(5),c("formControl",a.facade.control()),r(8),M(a.facade.allTags()),r(2),ce(a.facade.filterList().length?32:-1),r(2),M(a.facade.filteredArticles()))},dependencies:[De,Ce,B,Ge,Re,Ve,je,Ae,Oe,Ne,Be,Ee,$,R,V],styles:['.page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px;justify-content:center;align-items:center;row-gap:1rem}.multiline-ellipsis[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis}.gradient[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4bb,#b48);-webkit-background-clip:text;background-clip:text;color:transparent}.box.featured[_ngcontent-%COMP%]{height:22rem;position:relative}.box[_ngcontent-%COMP%]{position:relative;height:16rem}.featured-tag-overlay[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:10;background:linear-gradient(135deg,#8e44ad,#3498db);color:#fff;border-radius:20px;padding:.5rem 1rem;font-weight:700;font-size:1.05em;border:none;box-shadow:0 2px 8px #0000004d}@media(max-width:768px){.featured-tag-overlay[_ngcontent-%COMP%]{top:.75rem;left:.75rem;font-size:1.03em;padding:.4rem .8rem}}.img-fill[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;object-fit:cover}.title[_ngcontent-%COMP%]{font-weight:800;font-size:3rem;text-align:center}@media(max-width:768px){.title[_ngcontent-%COMP%]{font-size:2rem}}.white[_ngcontent-%COMP%]{color:#cfcbc6}.subtitle[_ngcontent-%COMP%]{font-weight:100;font-size:1rem;color:#cacaca;text-align:center}.tag-search-container[_ngcontent-%COMP%]{row-gap:.25rem;display:flex;flex-direction:column;max-width:900px;width:100%}.tag-container[_ngcontent-%COMP%]{gap:.5rem;display:flex;flex-direction:row;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:2rem 0 1rem;display:flex;justify-content:center}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;border-radius:20px;font-size:1rem}@media(max-width:768px){.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{font-size:.9rem}}.search-container[_ngcontent-%COMP%]   p-floatlabel[_ngcontent-%COMP%]{width:100%}.search-container[_ngcontent-%COMP%]   p-iconfield[_ngcontent-%COMP%]{width:100%}.card-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:row;gap:1rem;flex-wrap:wrap;justify-content:center}.card.featured[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #2ceaddb3}.card.featured[_ngcontent-%COMP%]:before{background:linear-gradient(0deg,transparent,transparent 30%,rgba(44,234,221,.3))}.card.featured[_ngcontent-%COMP%]{width:unset}.card[_ngcontent-%COMP%]{width:22rem;position:relative;overflow:hidden;transition:all .5s ease}.card[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(1.05);box-shadow:0 0 20px #bb448880}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(0deg,transparent,transparent 30%,rgba(187,68,136,.3));transform:rotate(-45deg);transition:all .5s ease;opacity:0;z-index:1;pointer-events:none}.card[_ngcontent-%COMP%]:hover:before{opacity:1;transform:rotate(-45deg) translateY(100%)}'],changeDetection:0})};function He(n){let t=d(ae);return Q(()=>n().then(e=>t.get(e)))}var U=class n{articleContent=A.required({transform:t=>this.stripFrontMatter(t)});stripFrontMatter(t){let e=/^---\s*[\s\S]*?\s*---/;return t.replace(e,"").trim()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-post-markdown"]],inputs:{articleContent:[1,"articleContent"]},decls:1,vars:1,consts:[["emoji","",1,"markdown",3,"data"]],template:function(e,a){e&1&&f(0,"markdown",0),e&2&&c("data",a.articleContent())},dependencies:[Se],styles:[".markdown p:not(li>p){text-indent:1rem}  .markdown p,   .markdown li{margin:1.25rem 0}  .markdown p code:not(pre>code),   .markdown li code:not(pre>code){font-family:Fira Mono,Consolas,Monaco,Courier New,monospace;background:#2e2e2e;color:#b48;padding:.1em .2em;border-radius:4px;font-size:.9em;word-break:break-word}  .markdown li{padding-left:.5rem}"],changeDetection:0})};var lt=()=>["../"],ct=()=>import("./chunk-GQR3QCQG.js").then(n=>n.ReadingTimeService),G=class n{route=d(ve);api=d(Pe);timeEstimate=He(ct);shareButtonCopied=N(!1);shareButtonLabel=p(()=>this.shareButtonCopied()?"Copied!":"Share");article=S(this.route.paramMap.pipe(D(t=>t.get("postName")||""),Y(t=>t?this.api.get(`blog/${t}.md`,{responseType:"text"}):J(()=>"No route param")),X(t=>(console.error(t),""))));timeToReadInMinutes=S(K([Fe(this.article),this.timeEstimate]).pipe(Y(([t,e])=>e.getReadingTimeInMinutes(t||""))));downloadMarkdown(){if(this.article()){let t=this.article(),e=new Blob([t],{type:"text/markdown"}),a=document.createElement("a");a.href=URL.createObjectURL(e),a.download="my-file.md",a.click(),URL.revokeObjectURL(a.href)}}copyCurrentUrl(){navigator.clipboard.writeText(window.location.href).then(()=>{}).catch(t=>{console.error("Failed to copy URL: ",t)})}handleShareClick(){this.copyCurrentUrl(),this.shareButtonCopied.set(!0),setTimeout(()=>{this.shareButtonCopied.set(!1)},2e3)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-post-container"]],decls:14,vars:9,consts:[["spinner",""],[1,"page-container"],[3,"spinWhileUndefined"],[1,"navigation-header"],["label","Back to Blog","icon","pi pi-chevron-left","severity","secondary",3,"routerLink","text"],[1,"action-buttons"],["icon","pi pi-share-alt","severity","secondary",3,"click","label","text"],["label","Download","icon","pi pi-download","severity","secondary",3,"click","text"],[1,"reading-time-container"],[1,"pi","pi-clock","reading-time-icon"],[1,"text-sm"],[1,"content-area"],[3,"articleContent"]],template:function(e,a){e&1&&(i(0,"div",1)(1,"app-loading-spinner",2,0)(3,"div",3),f(4,"p-button",4),i(5,"div",5)(6,"p-button",6),u("click",function(){return a.handleShareClick()}),o(),i(7,"p-button",7),u("click",function(){return a.downloadMarkdown()}),o()()(),i(8,"div",8),f(9,"i",9),i(10,"p",10),s(11),o()(),i(12,"div",11),f(13,"app-post-markdown",12),o()()()),e&2&&(r(),c("spinWhileUndefined",a.article()),r(3),c("routerLink",ge(8,lt))("text",!0),r(2),c("label",a.shareButtonLabel())("text",!0),r(),c("text",!0),r(4),F("",a.timeToReadInMinutes()," min. read"),r(2),c("articleContent",a.article()||""))},dependencies:[U,Me,Te,B,Ie],styles:[".page-container[_ngcontent-%COMP%]{flex:1;padding:2rem;display:flex;flex-direction:column;margin:0 auto;max-width:1200px}@media(max-width:768px){.page-container[_ngcontent-%COMP%]{padding:1.5rem .75rem}}.navigation-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}@media(max-width:768px){.navigation-header[_ngcontent-%COMP%]{margin-bottom:1rem}}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:center}.content-area[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.reading-time-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.reading-time-icon[_ngcontent-%COMP%]{font-size:.875rem;color:#cfcbc6}"],changeDetection:0})};var $n=[{path:"",component:z},{path:":postName",component:G}];export{$n as CHITTYLOG_ROUTES};
