import{A as HI,Cn as hp,Cr as yD,Ct as Tc,En as iv,F as Im,Ft as YE,Gt as _c,H as LE,I as Ip,It as YI,L as JE,Mn as kE,Tn as ip,_r as x,_t as RE,bt as T,in as cD,ir as rp,lr as up,ot as PE,q as Lp,qn as oe$1,sn as ci,tn as bc,vt as Ro,yr as xE}from"./chunk-DppdaJuN.js";import{E as yr,m as cr,p as ar}from"./chunk-MqDztGTR.js";import{C as nt,S as kr,_ as Zh,b as j,d as K$1,f as Lt,g as Xt,o as Ca,p as Qh,y as ca}from"./main-UTYZGTQ7.js";var K=`
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
`;var W=[`header`];var X=[`title`];var Y=[`subtitle`];var Z=[`content`];var ee=[`footer`];var te=[`*`,[[`p-header`]],[[`p-footer`]]];var ie=[`*`,`p-header`,`p-footer`];function ne(t,l){t&1&&hp(0)}function ae(t,l){if(t&1&&(ci(0,`div`,1),kE(1,1),ip(2,ne,1,0,`ng-container`,2),Tc()),t&2){let e=xE();JE(e.cx(`header`)),up(`pBind`,e.ptm(`header`)),iv(2),up(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function oe(t,l){if(t&1&&(bc(0),cD(1),_c()),t&2){let e=xE(2);iv(),Lp(e.header)}}function re(t,l){t&1&&hp(0)}function le(t,l){if(t&1&&(ci(0,`div`,1),ip(1,oe,2,1,`ng-container`,3)(2,re,1,0,`ng-container`,2),Tc()),t&2){let e=xE();JE(e.cx(`title`)),up(`pBind`,e.ptm(`title`)),iv(),up(`ngIf`,e.header&&!e._titleTemplate&&!e.titleTemplate),iv(),up(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function pe(t,l){if(t&1&&(bc(0),cD(1),_c()),t&2){let e=xE(2);iv(),Lp(e.subheader)}}function ce(t,l){t&1&&hp(0)}function de(t,l){if(t&1&&(ci(0,`div`,1),ip(1,pe,2,1,`ng-container`,3)(2,ce,1,0,`ng-container`,2),Tc()),t&2){let e=xE();JE(e.cx(`subtitle`)),up(`pBind`,e.ptm(`subtitle`)),iv(),up(`ngIf`,e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),iv(),up(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function se(t,l){t&1&&hp(0)}function me(t,l){t&1&&hp(0)}function fe(t,l){if(t&1&&(ci(0,`div`,1),kE(1,2),ip(2,me,1,0,`ng-container`,2),Tc()),t&2){let e=xE();JE(e.cx(`footer`)),up(`pBind`,e.ptm(`footer`)),iv(2),up(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ue=`
    ${K}

    .p-card {
        display: block;
    }
`;var _e={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var L=(()=>{class t extends K$1{name=`card`;style=ue;classes=_e;static ɵfac=(()=>{let e;return function(i){return(e||(e=Im(t)))(i||t)}})();static ɵprov=oe$1({token:t,factory:t.ɵfac})}return t})();var U=new x(`CARD_INSTANCE`);var Ae=(()=>{class t extends nt{componentName=`Card`;$pcCard=T(U,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=T(j,{self:!0});_componentStyle=T(L);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header;subheader;set style(e){kr(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(r=>{this.el.nativeElement.style[r]=e[r]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Ro(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=(()=>{let e;return function(i){return(e||(e=Im(t)))(i||t)}})();static ɵcmp=HI({type:t,selectors:[[`p-card`]],contentQueries:function(r,i,s){if(r&1&&Ip(s,Qh,5)(s,Zh,5)(s,W,4)(s,X,4)(s,Y,4)(s,Z,4)(s,ee,4)(s,ca,4),r&2){let a;LE(a=PE())&&(i.headerFacet=a.first),LE(a=PE())&&(i.footerFacet=a.first),LE(a=PE())&&(i.headerTemplate=a.first),LE(a=PE())&&(i.titleTemplate=a.first),LE(a=PE())&&(i.subtitleTemplate=a.first),LE(a=PE())&&(i.contentTemplate=a.first),LE(a=PE())&&(i.footerTemplate=a.first),LE(a=PE())&&(i.templates=a)}},hostVars:4,hostBindings:function(r,i){r&2&&(YE(i._style()),JE(i.cn(i.cx(`root`),i.styleClass)))},inputs:{header:`header`,subheader:`subheader`,style:`style`,styleClass:`styleClass`},features:[yD([L,{provide:U,useExisting:t},{provide:Lt,useExisting:t}]),YI([j]),rp],ngContentSelectors:ie,decls:8,vars:11,consts:[[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`]],template:function(r,i){r&1&&(RE(te),ip(0,ae,3,4,`div`,0),ci(1,`div`,1),ip(2,le,3,5,`div`,0)(3,de,3,5,`div`,0),ci(4,`div`,1),kE(5),ip(6,se,1,0,`ng-container`,2),Tc(),ip(7,fe,3,4,`div`,0),Tc()),r&2&&(up(`ngIf`,i.headerFacet||i.headerTemplate||i._headerTemplate),iv(),JE(i.cx(`body`)),up(`pBind`,i.ptm(`body`)),iv(),up(`ngIf`,i.header||i.titleTemplate||i._titleTemplate),iv(),up(`ngIf`,i.subheader||i.subtitleTemplate||i._subtitleTemplate),iv(),JE(i.cx(`content`)),up(`pBind`,i.ptm(`content`)),iv(2),up(`ngTemplateOutlet`,i.contentTemplate||i._contentTemplate),iv(),up(`ngIf`,i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[yr,ar,cr,Xt,Ca,j],encapsulation:2})}return t})();export{Ae as t};