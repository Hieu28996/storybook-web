import { css } from 'styled-components';
import QualyWOFF from '../../fonts/Qualy/Qualy.woff'
import QualyWOFF2 from '../../fonts/Qualy/Qualy.woff2';
import SofiaProBlackWOFF from '../../fonts/SofiaProBlack/font.woff'
import SofiaProBlackWOFF2 from '../../fonts/SofiaProBlack/font.woff2';
import SofiaProLightWOFF from '../../fonts/SofiaProLight/font.woff'
import SofiaProLightWOFF2 from '../../fonts/SofiaProLight/font.woff2';
import SofiaProMediumWOFF from '../../fonts/SofiaProMedium/font.woff'
import SofiaProMediumWOFF2 from '../../fonts/SofiaProMedium/font.woff2';

export const FontName = {
    Qualy: {
        woff: QualyWOFF,
        woff2: QualyWOFF2,
    },
    SofiaProBlack: {
        woff: SofiaProBlackWOFF,
        woff2: SofiaProBlackWOFF2,
    },
    SofiaProLight: {
        woff: SofiaProLightWOFF,
        woff2: SofiaProLightWOFF2,
    },
    SofiaProMedium: {
        woff: SofiaProMediumWOFF,
        woff2: SofiaProMediumWOFF2,
    },
}

export const fontFace = css`
    @font-face {
        font-family: "Qualy";
        src: url(${FontName.Qualy.woff2}) format('woff2'), url(${FontName.Qualy.woff}) format('woff');
    }
    @font-face {
        font-family: "Sofia Pro";
        font-weight: "500";
        src: url(${FontName.SofiaProMedium.woff2}) format('woff2'), url(${FontName.SofiaProMedium.woff}) format('woff');
    }
    @font-face {
        font-family: "Sofia Pro";
        font-weight: "300";
        src: url(${FontName.SofiaProBlack.woff2}) format('woff2'), url(${FontName.SofiaProBlack.woff}) format('woff');
    }
    @font-face {
        font-family: "Sofia Pro";
        font-weight: "900";
        src: url(${FontName.SofiaProLight.woff2}) format('woff2'), url(${FontName.SofiaProLight.woff}) format('woff');
    }
`