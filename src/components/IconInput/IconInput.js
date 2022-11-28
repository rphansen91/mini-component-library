import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--font-size': `${14 / 16}rem`,
    '--padding': '4px 24px'
  },
  large: {
    '--font-size': `${18 / 16}rem`,
    '--padding': '7px 36px'
  },
}

const ICONS_SIZE = {
  small: 16,
  large: 24,
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper width={width}>
    <IconPlacement id={icon} size={ICONS_SIZE[size]} />
    <Input label={label} placeholder={placeholder} style={STYLES[size]} />
  </Wrapper>;
};

const toUnit = (unit) => (props) => typeof props[unit] === 'number' ? `${props[unit]}px` : props[unit]

const Wrapper = styled.div`
position: relative;
display: inline-block;
border-bottom: 1px solid;
width: ${toUnit('width')};
color: ${COLORS.gray700};

&:hover {
  color: ${COLORS.black};
}
`

const IconPlacement = styled(Icon)`
position: absolute;
margin: auto;
left: 0;
top: 50%;
transform: translateY(-50%);
pointer-events: none;
`

const Input = styled.input`
padding: var(--padding);
font-size: var(--font-size);
width: 100%;
border: 0;
outline-offset: 4px;
color: ${COLORS.gray700};
font-weight: 700;

&:hover {
  color: ${COLORS.black};
}

&::placeholder {
  color: ${COLORS.gray500};
  font-weight: normal;
}
`

export default IconInput;
