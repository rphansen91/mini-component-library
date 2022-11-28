import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper displayedValue={displayedValue}>
      <select value={value} onChange={onChange}>
        {children}
      </select>
      <SelectIcon id="chevron-down" />
    </Wrapper>
  );
};

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 12px;
  pointer-events: none;
`

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  
  select {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-size: 1rem;
    padding: 12px 16px;
    width: ${(p) => `calc(${p.displayedValue.length}ch + 24px)`};
    box-sizing: content-box;
    border-radius: 8px;
    appearance: none;
    border: 0;
  }
`

export default Select;
