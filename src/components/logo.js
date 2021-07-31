import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { siteShortTitle } from "../../config"

const StyledLogo = styled.h1`
  position: relative;
  z-index: 5;
  line-height: 37px;
  margin: 0;

  @media (min-width: 600px) {
    z-index: 13;
    line-height: unset;
  }

  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 700;
  color: ${({ theme, color }) => theme.colors[color] || color};

  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    {siteShortTitle}
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
