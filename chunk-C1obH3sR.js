import{$t as ah,A as Gp,Dr as wh,Ft as Wp,J as Kp,M as Gv,Mt as VD,On as jc,U as KD,X as LE,Yn as oe$1,_ as D,c as BD,d as CD,fr as ty,gr as vD,ir as sT,it as N,kn as jo,l as Bc,t as $c,tn as bE,ur as th,v as DD,wr as wD,x as ED,yr as vi}from"./chunk-CBX4aEHF.js";import{A as Te,K as _t,L as Vn,Pt as wc,_ as Ir,a as Cc,bt as q,ct as jr,et as ee$1,ot as j,p as Ge,st as jn,u as Ee}from"./chunk-Dm1bq6DV.js";var K=`
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
`;var W=[`header`];var X=[`title`];var Y=[`subtitle`];var Z=[`content`];var ee=[`footer`];var te=[`*`,[[`p-header`]],[[`p-footer`]]];var ie=[`*`,`p-header`,`p-footer`];function ne(t,l){t&1&&th(0)}function ae(t,l){if(t&1&&(vi(0,`div`,1),DD(1,1),Gp(2,ne,1,0,`ng-container`,2),jc()),t&2){let e=vD();BD(e.cx(`header`)),Kp(`pBind`,e.ptm(`header`)),Gv(2),Kp(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function oe(t,l){if(t&1&&(Bc(0),KD(1),$c()),t&2){let e=vD(2);Gv(),wh(e.header)}}function re(t,l){t&1&&th(0)}function le(t,l){if(t&1&&(vi(0,`div`,1),Gp(1,oe,2,1,`ng-container`,3)(2,re,1,0,`ng-container`,2),jc()),t&2){let e=vD();BD(e.cx(`title`)),Kp(`pBind`,e.ptm(`title`)),Gv(),Kp(`ngIf`,e.header&&!e._titleTemplate&&!e.titleTemplate),Gv(),Kp(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function pe(t,l){if(t&1&&(Bc(0),KD(1),$c()),t&2){let e=vD(2);Gv(),wh(e.subheader)}}function ce(t,l){t&1&&th(0)}function de(t,l){if(t&1&&(vi(0,`div`,1),Gp(1,pe,2,1,`ng-container`,3)(2,ce,1,0,`ng-container`,2),jc()),t&2){let e=vD();BD(e.cx(`subtitle`)),Kp(`pBind`,e.ptm(`subtitle`)),Gv(),Kp(`ngIf`,e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),Gv(),Kp(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function se(t,l){t&1&&th(0)}function me(t,l){t&1&&th(0)}function fe(t,l){if(t&1&&(vi(0,`div`,1),DD(1,2),Gp(2,me,1,0,`ng-container`,2),jc()),t&2){let e=vD();BD(e.cx(`footer`)),Kp(`pBind`,e.ptm(`footer`)),Gv(2),Kp(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ue=`
    ${K}

    .p-card {
        display: block;
    }
`;var _e={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var L=(()=>{class t extends q{name=`card`;style=ue;classes=_e;static ɵfac=(()=>{let e;return function(i){return(e||(e=ty(t)))(i||t)}})();static ɵprov=oe$1({token:t,factory:t.ɵfac})}return t})();var U=new N(`CARD_INSTANCE`);var Ae=(()=>{class t extends ee$1{componentName=`Card`;$pcCard=D(U,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(j,{self:!0});_componentStyle=D(L);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header;subheader;set style(e){_t(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(r=>{this.el.nativeElement.style[r]=e[r]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=jo(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=(()=>{let e;return function(i){return(e||(e=ty(t)))(i||t)}})();static ɵcmp=bE({type:t,selectors:[[`p-card`]],contentQueries:function(r,i,s){if(r&1&&ah(s,Cc,5)(s,wc,5)(s,W,4)(s,X,4)(s,Y,4)(s,Z,4)(s,ee,4)(s,Ir,4),r&2){let a;CD(a=wD())&&(i.headerFacet=a.first),CD(a=wD())&&(i.footerFacet=a.first),CD(a=wD())&&(i.headerTemplate=a.first),CD(a=wD())&&(i.titleTemplate=a.first),CD(a=wD())&&(i.subtitleTemplate=a.first),CD(a=wD())&&(i.contentTemplate=a.first),CD(a=wD())&&(i.footerTemplate=a.first),CD(a=wD())&&(i.templates=a)}},hostVars:4,hostBindings:function(r,i){r&2&&(VD(i._style()),BD(i.cn(i.cx(`root`),i.styleClass)))},inputs:{header:`header`,subheader:`subheader`,style:`style`,styleClass:`styleClass`},features:[sT([L,{provide:U,useExisting:t},{provide:Te,useExisting:t}]),LE([j]),Wp],ngContentSelectors:ie,decls:8,vars:11,consts:[[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`]],template:function(r,i){r&1&&(ED(te),Gp(0,ae,3,4,`div`,0),vi(1,`div`,1),Gp(2,le,3,5,`div`,0)(3,de,3,5,`div`,0),vi(4,`div`,1),DD(5),Gp(6,se,1,0,`ng-container`,2),jc(),Gp(7,fe,3,4,`div`,0),jc()),r&2&&(Kp(`ngIf`,i.headerFacet||i.headerTemplate||i._headerTemplate),Gv(),BD(i.cx(`body`)),Kp(`pBind`,i.ptm(`body`)),Gv(),Kp(`ngIf`,i.header||i.titleTemplate||i._titleTemplate),Gv(),Kp(`ngIf`,i.subheader||i.subtitleTemplate||i._subtitleTemplate),Gv(),BD(i.cx(`content`)),Kp(`pBind`,i.ptm(`content`)),Gv(2),Kp(`ngTemplateOutlet`,i.contentTemplate||i._contentTemplate),Gv(),Kp(`ngIf`,i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[Ee,jn,Vn,Ge,jr,j],encapsulation:2})}return t})();export{Ae as t};