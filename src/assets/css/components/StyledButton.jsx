import styled from 'styled-components';
import { color, typography } from '../common/variables';

const BUTTONCOLOR = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
};

const SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}

export const StyledButton = styled.button`
    display: inline-flex;

    ${props =>
        props.size === SIZES.SMALL && `
            min-height: 40px;
            padding: 0 12px;

            span {
                font-size: 14px;
                line-height: 14px;
                font-weight: ${typography.weight.medium};
            }
        `
    };

    ${props =>
        props.size === SIZES.MEDIUM && `
            min-width: 184px;
            min-height: 52px;
            padding: 0 12px;

            span {
                font-size: 16px;
                line-height: 16px;
                font-weight: ${typography.weight.black};
            }
        `
    };

    ${props =>
        props.size === SIZES.LARGE && `
            min-width: 264px;
            min-height: 56px;
            padding: 0 16px 0 20px;

            span {
                font-size: 22px;
                line-height: 22px;
                font-weight: ${typography.weight.black};
            }
        `
    };

    align-items: center;
    ${props => (props.isSpace ? "justify-content: space-between" : "justify-content: center")};
    ${props => (props.isReverse && "flex-direction: row-reverse" )};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: ${typography.type.primary};
    color: ${color.white};
    transition: all .2s;
    word-break: break-all;

    ${props =>
        props.color === BUTTONCOLOR.PRIMARY && `
            background: ${color.blue};

            &:hover {
                background: ${color.blue2};
            }

            &:disabled {
                background: ${color.purpleLight};

                span {
                    opacity: 0.2;
                }

                svg {
                    opacity: 0.2;
                }
            }
        `
    };

    ${props =>
        props.color === BUTTONCOLOR.SECONDARY && `
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.6);

            &:hover {
                background: rgba(255, 255, 255, 0.1);
            }

            &:disabled {
                border: 1px solid rgba(255, 255, 255, 0.1);

                span {
                    opacity: 0.2;
                }

                svg {
                    opacity: 0.2;
                }
            }
        `
    };

    &:disabled {
        pointer-events: none;
    }

    span {
        transition: all .2s;
    }

    svg {
        color: #C9F5FE;
        transition: all .2s;
    }

    & + & {
        margin-left: 40px;
    }
`