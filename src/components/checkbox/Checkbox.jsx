import React from "react";
import { StyledCheckBox, StyledCheckBoxWrap, StyledCheckBoxLabel } from "../../assets/css/components/StyledCheckBox";
import { ReactComponent as IconCommon } from '../../assets/images/icon/ic_common.svg';
import { ReactComponent as IconRare } from '../../assets/images/icon/ic_rare.svg';
import { ReactComponent as IconEpic } from '../../assets/images/icon/ic_epic.svg';
import { ReactComponent as IconLegendary } from '../../assets/images/icon/ic_legendary.svg';
import { ReactComponent as IconAncient } from '../../assets/images/icon/ic_ancient.svg';

export const CheckboxIconTypes = {
    common: 'common',
    rare: 'rare',
    epic: 'epic',
    legendary: 'legendary',
    ancient: 'ancient'
}

function IconUI({iconType}) {
    return (
        <>
            {iconType === CheckboxIconTypes.common && <IconCommon className='icon' width={40} height={40} />}
            {iconType === CheckboxIconTypes.rare && <IconRare className='icon' width={40} height={40} />}
            {iconType === CheckboxIconTypes.epic && <IconEpic className='icon' width={40} height={40} />}
            {iconType === CheckboxIconTypes.legendary && <IconLegendary className='icon' width={40} height={40} />}
            {iconType === CheckboxIconTypes.ancient && <IconAncient className='icon' width={40} height={40} />}
        </>
    )
}

export const Checkbox = (props) => {
    const { id, name, value, isChecked, isDisabled, iconType, ...rest } = props;

    return (
        <StyledCheckBoxWrap>
            <StyledCheckBox
                type="checkbox"
                name={name}
                defaultChecked={isChecked}
                disabled={isDisabled}
                id={id}
                {...rest}
            />
            <StyledCheckBoxLabel htmlFor={id}>
                { iconType !== CheckboxIconTypes.none && <IconUI iconType={iconType} /> }
                {value}
            </StyledCheckBoxLabel>
        </StyledCheckBoxWrap>
    )
}