import{Bt as dE,C as GE,D as Hy,Gn as sE,Jt as ep,Mt as bp,O as Ic,Pt as cE,U as NE,Yt as fE,_n as mc,bt as _E,cn as jE,cr as xo,d as D,f as DI,h as Ec,hn as lp,i as AI,jn as op,kn as oe$1,pn as lE,qn as si,qt as em,tt as S,vt as Zf,xr as zf}from"./chunk-IXL62mWL.js";import{A as me$1,B as zi,C as cn,I as x,M as pn,R as z,a as Dn,b as au,h as Ri,k as lu,m as Re,v as Y$1,w as de$1}from"./chunk-XuGcw35V.js";var K=`
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
`;var W=[`header`];var X=[`title`];var Y=[`subtitle`];var Z=[`content`];var ee=[`footer`];var te=[`*`,[[`p-header`]],[[`p-footer`]]];var ie=[`*`,`p-header`,`p-footer`];function ne(t,l){t&1&&op(0)}function ae(t,l){if(t&1&&(si(0,`div`,1),lE(1,1),Zf(2,ne,1,0,`ng-container`,2),mc()),t&2){let e=sE();NE(e.cx(`header`)),ep(`pBind`,e.ptm(`header`)),Hy(2),ep(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function oe(t,l){if(t&1&&(Ic(0),jE(1),Ec()),t&2){let e=sE(2);Hy(),bp(e.header)}}function re(t,l){t&1&&op(0)}function le(t,l){if(t&1&&(si(0,`div`,1),Zf(1,oe,2,1,`ng-container`,3)(2,re,1,0,`ng-container`,2),mc()),t&2){let e=sE();NE(e.cx(`title`)),ep(`pBind`,e.ptm(`title`)),Hy(),ep(`ngIf`,e.header&&!e._titleTemplate&&!e.titleTemplate),Hy(),ep(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function pe(t,l){if(t&1&&(Ic(0),jE(1),Ec()),t&2){let e=sE(2);Hy(),bp(e.subheader)}}function ce(t,l){t&1&&op(0)}function de(t,l){if(t&1&&(si(0,`div`,1),Zf(1,pe,2,1,`ng-container`,3)(2,ce,1,0,`ng-container`,2),mc()),t&2){let e=sE();NE(e.cx(`subtitle`)),ep(`pBind`,e.ptm(`subtitle`)),Hy(),ep(`ngIf`,e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),Hy(),ep(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function se(t,l){t&1&&op(0)}function me(t,l){t&1&&op(0)}function fe(t,l){if(t&1&&(si(0,`div`,1),lE(1,2),Zf(2,me,1,0,`ng-container`,2),mc()),t&2){let e=sE();NE(e.cx(`footer`)),ep(`pBind`,e.ptm(`footer`)),Hy(2),ep(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ue=`
    ${K}

    .p-card {
        display: block;
    }
`;var _e={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var L=(()=>{class t extends z{name=`card`;style=ue;classes=_e;static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵprov=oe$1({token:t,factory:t.ɵfac})}return t})();var U=new S(`CARD_INSTANCE`);var Ae=(()=>{class t extends Y$1{componentName=`Card`;$pcCard=D(U,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});_componentStyle=D(L);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header;subheader;set style(e){Dn(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(r=>{this.el.nativeElement.style[r]=e[r]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=xo(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=(()=>{let e;return function(i){return(e||(e=em(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-card`]],contentQueries:function(r,i,s){if(r&1&&lp(s,au,5)(s,lu,5)(s,W,4)(s,X,4)(s,Y,4)(s,Z,4)(s,ee,4)(s,Ri,4),r&2){let a;dE(a=fE())&&(i.headerFacet=a.first),dE(a=fE())&&(i.footerFacet=a.first),dE(a=fE())&&(i.headerTemplate=a.first),dE(a=fE())&&(i.titleTemplate=a.first),dE(a=fE())&&(i.subtitleTemplate=a.first),dE(a=fE())&&(i.contentTemplate=a.first),dE(a=fE())&&(i.footerTemplate=a.first),dE(a=fE())&&(i.templates=a)}},hostVars:4,hostBindings:function(r,i){r&2&&(_E(i._style()),NE(i.cn(i.cx(`root`),i.styleClass)))},inputs:{header:`header`,subheader:`subheader`,style:`style`,styleClass:`styleClass`},features:[GE([L,{provide:U,useExisting:t},{provide:me$1,useExisting:t}]),AI([x]),zf],ngContentSelectors:ie,decls:8,vars:11,consts:[[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`]],template:function(r,i){r&1&&(cE(te),Zf(0,ae,3,4,`div`,0),si(1,`div`,1),Zf(2,le,3,5,`div`,0)(3,de,3,5,`div`,0),si(4,`div`,1),lE(5),Zf(6,se,1,0,`ng-container`,2),mc(),Zf(7,fe,3,4,`div`,0),mc()),r&2&&(ep(`ngIf`,i.headerFacet||i.headerTemplate||i._headerTemplate),Hy(),NE(i.cx(`body`)),ep(`pBind`,i.ptm(`body`)),Hy(),ep(`ngIf`,i.header||i.titleTemplate||i._titleTemplate),Hy(),ep(`ngIf`,i.subheader||i.subtitleTemplate||i._subtitleTemplate),Hy(),NE(i.cx(`content`)),ep(`pBind`,i.ptm(`content`)),Hy(2),ep(`ngTemplateOutlet`,i.contentTemplate||i._contentTemplate),Hy(),ep(`ngIf`,i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[de$1,cn,pn,Re,zi,x],encapsulation:2})}return t})();export{Ae as t};