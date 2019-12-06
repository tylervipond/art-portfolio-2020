import { Link } from "./link/link"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

import { AppTitle } from "./app-title/app-title"

const HeaderWrapper = styled.header`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  ${AppTitle} {
    display: inline-block;
    margin-right: 32px;
  }
  ${Link} {
    margin-right: 16px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <AppTitle>
      <Link to="/">{siteTitle}</Link>
    </AppTitle>
    <Link to="/">Works</Link>
    <Link to="/bio/">Bio</Link>
    <Link to="/cv/">CV</Link>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
