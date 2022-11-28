/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 24,
    radius: 8,
    padding: 4,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]
  return (
    <ProgressOuter
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <ProgressWrapper>
        <ProgressInner style={{
          '--width': value + '%',
          '--height': styles.height + 'px',
        }} />
      </ProgressWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </ProgressOuter>
  );
};

const ProgressOuter = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
`

const ProgressWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const ProgressInner = styled.div`
  background: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`

export default ProgressBar;
