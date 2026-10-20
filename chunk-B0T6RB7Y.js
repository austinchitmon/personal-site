import{At as Yf,Bn as qf,Dn as mc,Et as XI,H as N,It as _o,Lt as ae$1,On as nE,Pn as pc,Pt as _,Qt as eE,R as KI,Vn as rE,a as Ay,b as FE,en as ep,et as Qg,fr as yc,hn as ip,j as IE,kn as ni,m as Dp,nn as fI,pt as Uf,rt as SE,ur as yE,ut as TI}from"./chunk-BgznnxaQ.js";import{A as ge,E as dn,G as x,K as yu,T as de$1,U as vn,f as Pi,h as Re,j as hn,q as z,v as Vi,w as bu,y as Y$1}from"./chunk-8Kp1C-g2.js";var K=`
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
`;var W=[`header`];var X=[`title`];var Y=[`subtitle`];var Z=[`content`];var ee=[`footer`];var te=[`*`,[[`p-header`]],[[`p-footer`]]];var ie=[`*`,`p-header`,`p-footer`];function ne(t,l){t&1&&ep(0)}function ae(t,l){if(t&1&&(ni(0,`div`,1),eE(1,1),qf(2,ne,1,0,`ng-container`,2),pc()),t&2){let e=KI();IE(e.cx(`header`)),Yf(`pBind`,e.ptm(`header`)),Ay(2),Yf(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function oe(t,l){if(t&1&&(mc(0),SE(1),yc()),t&2){let e=KI(2);Ay(),Dp(e.header)}}function re(t,l){t&1&&ep(0)}function le(t,l){if(t&1&&(ni(0,`div`,1),qf(1,oe,2,1,`ng-container`,3)(2,re,1,0,`ng-container`,2),pc()),t&2){let e=KI();IE(e.cx(`title`)),Yf(`pBind`,e.ptm(`title`)),Ay(),Yf(`ngIf`,e.header&&!e._titleTemplate&&!e.titleTemplate),Ay(),Yf(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function pe(t,l){if(t&1&&(mc(0),SE(1),yc()),t&2){let e=KI(2);Ay(),Dp(e.subheader)}}function ce(t,l){t&1&&ep(0)}function de(t,l){if(t&1&&(ni(0,`div`,1),qf(1,pe,2,1,`ng-container`,3)(2,ce,1,0,`ng-container`,2),pc()),t&2){let e=KI();IE(e.cx(`subtitle`)),Yf(`pBind`,e.ptm(`subtitle`)),Ay(),Yf(`ngIf`,e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),Ay(),Yf(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function se(t,l){t&1&&ep(0)}function me(t,l){t&1&&ep(0)}function fe(t,l){if(t&1&&(ni(0,`div`,1),eE(1,2),qf(2,me,1,0,`ng-container`,2),pc()),t&2){let e=KI();IE(e.cx(`footer`)),Yf(`pBind`,e.ptm(`footer`)),Ay(2),Yf(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ue=`
    ${K}

    .p-card {
        display: block;
    }
`;var _e={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var L=(()=>{class t extends z{name=`card`;style=ue;classes=_e;static ɵfac=(()=>{let e;return function(i){return(e||(e=Qg(t)))(i||t)}})();static ɵprov=ae$1({token:t,factory:t.ɵfac})}return t})();var U=new N(`CARD_INSTANCE`);var Ae=(()=>{class t extends Y$1{componentName=`Card`;$pcCard=_(U,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(x,{self:!0});_componentStyle=_(L);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header;subheader;set style(e){vn(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(r=>{this.el.nativeElement.style[r]=e[r]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=_o(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=(()=>{let e;return function(i){return(e||(e=Qg(t)))(i||t)}})();static ɵcmp=fI({type:t,selectors:[[`p-card`]],contentQueries:function(r,i,s){if(r&1&&ip(s,bu,5)(s,yu,5)(s,W,4)(s,X,4)(s,Y,4)(s,Z,4)(s,ee,4)(s,Pi,4),r&2){let a;nE(a=rE())&&(i.headerFacet=a.first),nE(a=rE())&&(i.footerFacet=a.first),nE(a=rE())&&(i.headerTemplate=a.first),nE(a=rE())&&(i.titleTemplate=a.first),nE(a=rE())&&(i.subtitleTemplate=a.first),nE(a=rE())&&(i.contentTemplate=a.first),nE(a=rE())&&(i.footerTemplate=a.first),nE(a=rE())&&(i.templates=a)}},hostVars:4,hostBindings:function(r,i){r&2&&(yE(i._style()),IE(i.cn(i.cx(`root`),i.styleClass)))},inputs:{header:`header`,subheader:`subheader`,style:`style`,styleClass:`styleClass`},features:[FE([L,{provide:U,useExisting:t},{provide:ge,useExisting:t}]),TI([x]),Uf],ngContentSelectors:ie,decls:8,vars:11,consts:[[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`]],template:function(r,i){r&1&&(XI(te),qf(0,ae,3,4,`div`,0),ni(1,`div`,1),qf(2,le,3,5,`div`,0)(3,de,3,5,`div`,0),ni(4,`div`,1),eE(5),qf(6,se,1,0,`ng-container`,2),pc(),qf(7,fe,3,4,`div`,0),pc()),r&2&&(Yf(`ngIf`,i.headerFacet||i.headerTemplate||i._headerTemplate),Ay(),IE(i.cx(`body`)),Yf(`pBind`,i.ptm(`body`)),Ay(),Yf(`ngIf`,i.header||i.titleTemplate||i._titleTemplate),Ay(),Yf(`ngIf`,i.subheader||i.subtitleTemplate||i._subtitleTemplate),Ay(),IE(i.cx(`content`)),Yf(`pBind`,i.ptm(`content`)),Ay(2),Yf(`ngTemplateOutlet`,i.contentTemplate||i._contentTemplate),Ay(),Yf(`ngIf`,i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[de$1,dn,hn,Re,Vi,x],encapsulation:2})}return t})();export{Ae as t};