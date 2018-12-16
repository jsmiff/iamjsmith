import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Hero } from '../styles/index.styled';

const HeroContainer = styled(Link)`
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
`

const PageContainer = styled.div`
  padding: 2em;
`

export const IndexPage = ({ data, location, ...props }) => {
  const firstImage = data.allFile.edges[0].node.childImageSharp.fluid;

  return (
    <Layout>
      <HeroContainer to={`/photos`}>
        <Hero fluid={firstImage} />
      </HeroContainer>
      <PageContainer>
        <p>Hi, I am a web developer living in NYC.</p>
        <p>Sometimes I take <Link to="photos">photos</Link>.</p>
      </PageContainer>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(sort: { fields: name, order: DESC }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 3000, quality: 100) {
              originalName,
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
