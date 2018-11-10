import React from 'react';
import { Router, Location, navigate } from "@reach/router";
import Layout from '../components/layout';
import { Grid, Hero, StyledImg, Modal, FullScreenImage, CloseButton, ImageLink } from '../styles/index.styled';

/* TODO
 * [x] sort images, newest first
 * [x] add click on img to show full screen
 * [] add sick hover to images
 * [] write a lil bio
 * [] exif data
 * [] do day/night mode? (use different folders)
 */

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Location>
        {({ location }) => (
          <Router location={location}>
            <HomePage data={data} path="/">
              <ImageDetailPage data={data} path=":image" />
            </HomePage>
          </Router>
        )}
      </Location>
    </Layout>
  );
}

const HomePage = ({ data, ...props }) => {
  const firstImage = data.allFile.edges[0].node.childImageSharp.fluid;
  const allOtherImages = data.allFile.edges.slice(1);
  return (
    <div>
      { 
        // this is the nested ImageDetail component
        props.children 
      }
      <ImageLink to={firstImage.originalName.split(`.`)[0]}>
        <Hero fluid={firstImage} />
      </ImageLink>
      <Grid>
        {allOtherImages.map((p, i) =>
          <ImageLink key={i} to={p.node.childImageSharp.fluid.originalName.split(`.`)[0]}> 
            <StyledImg fluid={p.node.childImageSharp.fluid} />
          </ImageLink>
        )}
      </Grid>
    </div>
  );
}

const ImageDetailPage  = ({ data, image, ...props }) => {
  const imageName = `${image}.jpg`;
  const fluidImage = data.allFile.edges.filter(e => e.node.childImageSharp.fluid.originalName === imageName)[0];

  const goBack = () => navigate('/');

  return (
    <Modal>
      <CloseButton onClick={goBack}>
        <svg viewBox="0 0 40 40">
          <path stroke="white" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </CloseButton>
      <FullScreenImage src={fluidImage.node.childImageSharp.fluid.src}/>
    </Modal>
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
