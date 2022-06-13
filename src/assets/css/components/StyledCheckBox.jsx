import styled from 'styled-components';
import { color, typography } from '../common/variables';
import IconChecked from '../../images/icon/ic_checked.svg'

export const StyledCheckBoxWrap = styled.span`
    display: inline-block;
    position: relative;
    font-size: 0;
`

export const StyledCheckBox = styled.input`
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    background: 0 0;
    font-size: 1px;

    &:disabled + label{
        pointer-events: none;
        color: rgba(255, 255, 255, 0.2);

        &:before {
            opacity: 0.2;
        }

        svg {
            opacity: 0.3;
        }
    }

    &:checked + label {
        color: ${color.blue3};
        
        &:before {
            border: 1px solid ${color.blue3};
            background-color: ${color.blue3};
            background-image: url(${IconChecked});
            background-position: center;
        }
    }
`

export const StyledCheckBoxLabel = styled.label`
    display: flex;
    position: relative;
    min-height: 56px;
    padding: 6px 15px 6px 54px;
    align-items: center;
    font-family: ${typography.type.primary};
    font-size: 18px;
    font-weight: ${typography.weight.medium};
    line-height: 18px;
    color: ${color.white};
    box-sizing: border-box;
    cursor: pointer;

    &:before {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        border: 1px solid ${color.componentColor};
        border-radius: 4px;
        background-color: transparent;
        box-sizing: border-box;
        content: '';
    }

    &:hover {
        color: ${color.blue3};

        &:before {
            border: 1px solid ${color.blue3};
        }
    }
`