import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: absolute;
  top: 1em;
  left: 2em;
  z-index: 100;
`

const TitleLink = styled(Link)`
  font-family: 'Anonymous Pro', monospace;
  font-size: 2em;
  font-weight: bold;
  margin: 0 0 1em 0;
  color: white;
  text-decoration: none;

  &:hover {
    color: #FF0066;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <TitleLink to={'/'}>
      {siteTitle}
    </TitleLink>
  </HeaderContainer>
)

export default Header
