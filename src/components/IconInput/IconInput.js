import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: `${14 / 16}rem`,
    padding: "4px 24px",
    strokeWidth: 1,
    size: 16,
  },
  large: {
    fontSize: `${18 / 16}rem`,
    padding: "7px 36px",
    strokeWidth: 2,
    size: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];
  return (
    <Wrapper
      style={{
        "--stroke-width": styles["strokeWidth"] + "px",
        width
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconPlacement>
        <Icon id={icon} size={styles.size} strokeWidth={styles.strokeWidth} />
      </IconPlacement>
      <Input
        placeholder={placeholder}
        style={{
          "--font-size": styles.fontSize,
          "--padding": styles.padding,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  border-bottom: var(--stroke-width) solid;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconPlacement = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = styled.input`
  padding: var(--padding);
  font-size: var(--font-size);
  width: 100%;
  border: 0;
  outline-offset: 4px;
  color: inherit;
  background-color: transparent;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`;

export default IconInput;
