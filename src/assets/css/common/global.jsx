import { createGlobalStyle, css } from "styled-components";
import { typography } from "./variables";
import { fontFace } from "./fonts";

export const bodyStyles = css`
    html,body{overflow-x:hidden;}
    html { -webkit-overflow-scrolling:touch; -webkit-touch-callout:none;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0); font-size:10px; }
    body { word-break:keep-all; min-width:32rem; margin:0;padding:0;font-family: ${typography.type.primary}, sans-serif;font-weight: ${typography.weight.medium}; font-size:1.3rem; background:#181a2c; -webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;scrollbar-color:#2864a3 #01182e;scrollbar-width:thin}
    body::-webkit-scrollbar{width:1rem}
    body::-webkit-scrollbar-track{background:#01182e}
    body::-webkit-scrollbar-thumb{background:#2864a3;border-radius:100px}
    body::-webkit-scrollbar-thumb:hover{background:#3f96d9; -webkit-text-size-adjust:none;}
    em { font-style:normal }
    html, h1, h2, h3, h4, h5, h6, form, fieldset, img {margin:0;padding:0;border:0; }
    main, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display:block}
    ul {margin:0;padding:0;list-style:none}
    ol,li,dl,dt,dd {margin:0;padding:0} 
    .blind,
    caption span,
    legend {overflow:hidden;position:absolute;top:0;left:0;width:1px;height:1px;font-size:1px;line-height:100px;white-space:nowrap}
    label, input, button, select, img {vertical-align:middle}
    input, button {margin:0;padding:0;font-family:${typography.type.primary}, sans-serif;font-weight:${typography.weight.light} }
    button {cursor:pointer; border:0;background-color:transparent;}
    button:focus { outline:none }
    textarea { resize:none }
    textarea, select {font-family:${typography.type.primary}, sans-serif;font-weight:${typography.weight.light} }
    select {margin:0; background:none}
    p {margin:0;padding:0;}
    hr {display:none}
    pre {overflow-x:scroll;font-family:${typography.type.primary}, sans-serif;font-weight:${typography.weight.light} }
    a {text-decoration:none}
    table { width:100%; padding:0; border-spacing:0px; border:0; border-collapse:collapse;  }
    td { word-break:break-all }
    img { max-width:100%; height:auto }
    strong { font-weight:normal }

    *, :after, :before {
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        box-sizing:border-box;
    }

    input[type=text],input[type=password], textarea { outline:none; }
    select, textarea { border:1px solid #ccc; padding:0.5rem; }

    /* 헤더 */
    #header{position:fixed;top:0;left:0;right:0;width:100%;background-color:rgba(0,0,0,0);-webkit-transition:.3s ease;-o-transition:.3s ease;transition:.3s ease;z-index:99999}
    #header.is-fixed{background-color:rgba(0,0,0,.95)}
    #header .inner{width:120rem; padding:2rem 0; margin:0 auto; display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
    #header .logo{ width:15.2rem; height:4.1rem;-webkit-transition:.3s ease;-o-transition:.3s ease;transition:.3s ease}
    #header .logo a{display:block;width:100%;height:100%}
    #header .btn {display:none;width:4.4rem;height:4.4rem;padding:0;border-radius:0; }
    #header .btn1{display:none;width:4.4rem;height:4.4rem;padding:0;border-radius:0; }

    #header .btn1.gnb-close{position:absolute;right:4rem;top:2.5rem}
    #gnb{position:relative;margin-left:5rem;z-index:9999999}
    #gnb a{display:block;white-space:nowrap}
    #gnb .gnb-depth1{display:-webkit-box;display:-ms-flexbox;display:flex}
    #gnb .gnb-depth1 li{margin-right:4rem}
    #gnb .gnb-depth1 a{padding:1rem 0;color:#fff;font-size:1.5rem;font-weight:700}
    #gnb .gnb-depth1 a.signup { background:rgba(255,255,255,.1); padding:0.5rem 2rem; border-radius:1rem; }
    #gnb .gnb-depth1 .line-t { margin:1rem 0 0; padding:1rem 0 0; border-top:1px solid rgba(255,255,255,.4) }
    #gnb .gnb-depth1 .mobile_block { display:none }

    .mask { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,.5); z-index:999 }

    #header .member { margin-left:auto; position:relative;  }
    #header .member a { color:#fff }
    #header .member a.signup { margin-left:1.5rem; border:1px solid #fff; border-radius:0.5rem; text-align:center; padding:0.5rem 1rem }
    #header .member button { font-size:1.5rem; color:#fff; padding-right:3rem; background:url("../images/iskra/ico_gnb_open.png") 100% 50% no-repeat; }
    #header .member button.active { padding-right:3rem; background:url("../images/iskra/ico_gnb_close.png") 100% 50% no-repeat; }
    #header .member .member_layer { display:none; position:absolute; top:3rem; right:0; width:14rem; height:14rem; border-radius:1rem; padding:1.2rem; background:#1d1f36; box-shadow:0 0 12px 4px rgba(0,0,0,.1) }
    #header .member .member_layer li { font-size:1.5rem; color:#fff; padding:0.7rem 0.5rem 0.7rem 3.5rem; }
    #header .member .member_layer li a { color:#fff }
    #header .member .member_layer li:nth-child(1) { border-bottom:1px solid #34364b; background:url("../images/iskra/ico_gnb_cp.png") 1rem 50% no-repeat; }
    #header .member .member_layer li:nth-child(2) { background:url("../images/iskra/ico_gnb_setting.png") 1rem 50% no-repeat; }
    #header .member .member_layer li:nth-child(3) { background:url("../images/iskra/ico_gnb_signout.png") 1rem 50% no-repeat; }


    @media only screen and (max-width: 1199px){
        
        .pc_block { display:none }
        #gnb .gnb-depth1 .mobile_block { display:block }

        #header .logo{margin:0.5rem 0 0;}
        #header .inner{width:100%; padding:1rem 2rem;}
        #header .member { display:none }
        #header .btn1 { display:block; margin-left:auto; }
        #header.is-gnb #gnb{left:0}
        #gnb{margin-left:8rem;position:fixed;top:0;left:100%;right:0;bottom:0;background-color:rgba(1,24,46,.98);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:20;-webkit-transition:.4s ease;-o-transition:.4s ease;transition:.4s ease}
        #gnb a{display:block;white-space:nowrap}
        #gnb .gnb-depth1{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
        #gnb .gnb-depth1{-webkit-box-direction:normal;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}
        #gnb .gnb-depth1 li{margin-right:0}
        #gnb .gnb-depth1 a{padding:1.5rem 0;font-size:2.5rem}
        #header .member { top:0.5rem }
    }
    @media only screen and (min-width: 1200px){
        .mobile_block { display:none }
    }
    @media only screen and (max-width: 767px){
        #header .btn1.gnb-close{right:3rem}
    }

    /* 푸터 */
    #footer { height:24rem; background:#232323}
    #footer .inner { max-width:120rem; margin:0 auto; position:relative; padding:4rem 1.5rem }
    #footer ul.foot-depth { display:flex; }
    #footer ul.foot-depth li { margin-right:7.5rem; }
    #footer ul.foot-depth li:last-child { margin:0 }
    #footer ul.foot-depth li a:nth-child(1) { font-size:1.7rem; color:#fff }
    #footer ul.foot-depth li a { display:block; margin:0 0 1.5rem;  font-size:1.5rem; color:#CBCBCB }
    #footer ul.foot-depth li a:last-child { margin-bottom:0 }

    #footer .position { position:absolute; bottom:0; right:1.5rem; }
    #footer .foot-sns { text-align:right; margin:0 0 2rem }
    #footer .foot-sns a { margin-left:1rem }
    #footer .foot-sns a img { width:4rem; height:auto }

    #footer .copyright{ text-align:right;font-size:1.5rem;color:#A7A7A7}


    @media all and (max-width: 1199px){
        #footer ul.foot-depth { display:flex; flex-wrap:wrap;}
        #footer ul.foot-depth li { width:calc(50% - 7.5rem); margin-bottom: 4rem;}
        
        #footer { height:auto; background:#232323}
        #footer .responsive { width:100%; padding:0 1.5rem }
        #footer .foot-sns { text-align:left; margin:3rem 0 2rem }
        #footer .foot-sns a { margin-left:0; margin-right:1rem }
        #footer .foot-sns a img { width:3.2rem; height:auto }
        #footer .copyright{ margin-bottom: 2rem;}
    }
    @media only screen and (max-width: 768px){
        #footer ul.foot-depth { display:flex; flex-wrap:wrap;}
        #footer ul.foot-depth li { width:calc(50% - 7.5rem); margin-bottom: 4rem;}
        
        #footer { height:auto; background:#232323}
        #footer .position { position:relative; bottom:auto; right:auto; }
        #footer .copyright{ text-align:center;font-size:1.5rem;color:#A7A7A7; margin-bottom: 0;}
        #footer .mobile_br { display:block }
    }
`;

export const GlobalStyle = createGlobalStyle`
    ${fontFace}
    ${bodyStyles}
`;