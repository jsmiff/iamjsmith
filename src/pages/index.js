import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Hero } from '../styles/index.styled';

const HeroContainer = styled.div`
  margin-top: 100px;
  position: relative;
  width: 100%;
`

export const IndexPage = ({ data, location, ...props }) => {
  const firstImage = data.photos.edges[0].node.childImageSharp.fluid;

  return (
    <Layout>
      <HeroContainer>
        <Hero fluid={firstImage} />
      </HeroContainer>
    </Layout>
  );
}

export const query = graphql`
  query {
    me: file(sourceInstanceName: { eq: "images" }, name: { eq: "me" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          originalName,
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    },
    photos: allFile(filter: { sourceInstanceName: { eq: "photos" } }, sort: { fields: name, order: DESC }) {
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
