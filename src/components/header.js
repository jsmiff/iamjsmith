import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 1em;
  left: 2em;
  z-index: 100;
`

const Title = styled.h1`
  margin: 0 0 1em 0;
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Title>
      {siteTitle}
    </Title>
  </HeaderContainer>
)

export default Header
