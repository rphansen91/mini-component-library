/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    '--height': '8px',
    '--radius': '4px',
    '--padding': '0',
  },
  medium: {
    '--height': '12px',
    '--radius': '4px',
    '--padding': '0',
  },
  large: {
    '--height': '24px',
    '--radius': '8px',
    '--padding': '4px',
  },
}

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressOuter
      role="progressbar"
      aria-labelledby="loadinglabel"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={STYLES[size]}
    >
      <ProgressInner value={value} />
    </ProgressOuter>
  );
};

const ProgressOuter = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  height: var(--height);
`

const ProgressInner = styled.div`
  background: ${(props) => `linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.primary} ${props.value}%, transparent ${props.value}%, transparent 100%)`};
  border-radius: 4px;
  height: 100%;
`

export default ProgressBar;
