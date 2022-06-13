import React from 'react';
import { Text } from '../text/Text';
import { StyledButton } from '../../assets/css/components/StyledButton';
import { ReactComponent as IconSearch } from '../../assets/images/icon/ic_search.svg';
import { ReactComponent as IconFilter } from '../../assets/images/icon/ic_filter.svg';
import { ReactComponent as IconReset } from '../../assets/images/icon/ic_reset.svg';
import { ReactComponent as IconHamburger } from '../../assets/images/icon/ic_hamburger.svg';
import { ReactComponent as IconMore } from '../../assets/images/icon/ic_more.svg';
import { ReactComponent as IconLess } from '../../assets/images/icon/ic_less.svg';
import { ReactComponent as IconBack } from '../../assets/images/icon/ic_back.svg';
import { ReactComponent as IconNext } from '../../assets/images/icon/ic_next.svg';
import { ReactComponent as IconClose } from '../../assets/images/icon/ic_close.svg';

export const ButtonIconTypes = {
    search: 'search',
    filter: 'filter',
    reset: 'reset',
    hamburger: 'hamburger',
    more: 'more',
    less: 'less',
    back: 'back',
    next: 'next',
    close: 'close'
}

function IconUI({iconType}) {
    return (
        <>
            {iconType === ButtonIconTypes.search && <IconSearch className='icon' width={24} height={24} />}
            {iconType === ButtonIconTypes.filter && <IconFilter className='icon' width={24} height={24} />}
            {iconType === ButtonIconTypes.reset && <IconReset className='icon' width={24} height={24} />}
            {iconType === ButtonIconTypes.hamburger && <IconHamburger className='icon' width={24} height={24} />}
            {iconType === ButtonIconTypes.more && <IconMore className='icon' width={24} height={24} />}
            {iconType === ButtonIconTypes.less && <IconLess className='icon' width={24} height={24} />}
            {iconType === ButtonIconTypes.back && <IconBack className='icon' width={24} height={24} />}
            {iconType === ButtonIconTypes.next && <IconNext className='icon' width={24} height={24} />}
            {iconType === ButtonIconTypes.close && <IconClose className='icon' width={24} height={24} />}
        </>
    )
}

export const Button = (props) => {
    const { type, content, iconType, iconPostion, isDisabled, ...rest } = props;

    return (
        <StyledButton
            type='button'
            disabled={isDisabled}
            {...rest}
        >
            { iconType !== ButtonIconTypes.none && <IconUI iconType={iconType} /> }
            { content && <Text content={content} /> }
        </StyledButton>
    )
}