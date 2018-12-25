import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Hero } from '../styles/index.styled';

import me from './../images/me.jpg';

const HeroContainer = styled(Link)`
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
`

const PageContainer = styled.div`
  display: flex;
  padding: 4em;
`

const LeftColumn = styled.div`
  flex: 1 1 400px;

  @media (max-width: 768px) {
    display: none;
  }
`

const RightColumn = styled.div`
  flex: 1 1 100%;
  padding-left: 2em;
`

export const IndexPage = ({ data, location, ...props }) => {
  const firstImage = data.photos.edges[0].node.childImageSharp.fluid;

  return (
    <Layout>
      <HeroContainer to={`/photos`}>
        <Hero fluid={firstImage} />
      </HeroContainer>
      <PageContainer>
        <LeftColumn>
          <Img fluid={data.me.childImageSharp.fluid} />
        </LeftColumn>
        <RightColumn>
          <h2>About me</h2>
          <p>Heya, I am a web developer living in NYC.</p>
          <p>I work full time on web related things @ Spotify.</p>
          <p>I also run a <a href="http://engagemore.com">company</a> that helps gyms.</p>
          <p>Sometimes I take <Link to="photos">photos</Link>.</p>
        </RightColumn>
      </PageContainer>
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
