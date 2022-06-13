import { createGlobalStyle, css } from "styled-components";
import { typography } from "./styles";
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
`;

export const GlobalStyle = createGlobalStyle`
    ${fontFace}
    ${bodyStyles}
`;