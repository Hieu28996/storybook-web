import React from 'react';
import { StyledText } from '../../assets/css/components/StyledText';

export const Text = (props) => {
    const { content, ...rest } = props;

    return (
        <StyledText {...rest}>
            {content}
        </StyledText>
    )
}