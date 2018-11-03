import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';

/* TODO
 * add click on img to show full screen
 * add sick hover to images
 * write a lil bio
 * do day/night mode?
 */

const HERO_HEIGHT = '85vh';

const Grid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fill, 20%) 20%;
  padding-top: ${HERO_HEIGHT};
`

const Hero = styled(Img)`
  height: ${HERO_HEIGHT};
  left: 0; 
  position: absolute !important;
  top: 0;
  width: 100vw;
`

const StyledImg = styled(Img)`
  max-width: 2000px;
`

const IndexPage = ({ data }) => {
  console.log(data)
  const sortedImages = data.allFile.edges.sort(function(a, b) {
    return b - a;
  });
  const firstImage = sortedImages[0].node.childImageSharp.fluid;
  const allOtherImages = sortedImages.slice(1);
  return (
    <Layout>
      <Hero fluid={firstImage} />
      <Grid>
        { allOtherImages.map((p, i) => <StyledImg key={i} fluid={p.node.childImageSharp.fluid} />) }
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
