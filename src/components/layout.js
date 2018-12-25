import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components";

import Header from './header'
import './layout.css'

const LayoutContainer = styled.div`
  display: block;
`;

const Footer = styled.div`
  padding: 2em;
  text-align: center;
`;

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
        />
        <LayoutContainer>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer>© 2019 iamjsmith</Footer>
        </LayoutContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
