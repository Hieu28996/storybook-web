import styled from 'styled-components';
import { typography } from '../common/variables';

const FONTWEIGHT = {
    REGULAR: 'regular',
    MEDIUM: 'medium',
    BLACK: 'black',
    LIGHT: 'light'
}

export const StyledText = styled.span`
    ${props => props.font && `font-family: ${props.font}` };
    ${props => props.size && `font-size: ${props.size}px` };
    ${props => props.lineHeight && `line-height: ${props.lineHeight}px` };
    ${props => (props.weight === FONTWEIGHT.REGULAR && `font-weight: ${typography.weight.regular}`)};
    ${props => (props.weight === FONTWEIGHT.MEDIUM && `font-weight: ${typography.weight.medium}`)};
    ${props => (props.weight === FONTWEIGHT.BLACK && `font-weight: ${typography.weight.black}`)};
    ${props => (props.weight === FONTWEIGHT.LIGHT && `font-weight: ${typography.weight.light}`)};
    ${props =>
        props.color && `color: ${props.color}`
    }
`