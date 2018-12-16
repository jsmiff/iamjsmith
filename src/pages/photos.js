import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Router, Location, navigate } from "@reach/router";
import queryString from 'query-string';
import Layout from '../components/layout';

const PageContainer = styled.div`
  padding: 4em 2em;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export const ImageLink = styled(Link)`
  &:hover img {
    filter: grayscale(100%);
    transition: 300ms ease-in-out;
  }
  &:active img {
    filter: grayscale(100%);
    transition: 300ms ease-in-out;
  }
  &:focus img {
    filter: grayscale(100%);
    transition: 300ms ease-in-out;
  }
`

export const StyledImg = styled(Img)`
  max-width: 2000px;
`

export const Modal = styled.div`
  background: black;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`

export const FullScreenImage = styled.img`
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  height: 60px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 60px;
  background: black;
  z-index: 1000;
`

export const Photos = ({ data }) => {
  console.log('?')
  return (
    <Layout>
      <Location>
        {({ location }) => (
          <Router location={location}>
            <PhotosPage data={data} path="/photos" />
          </Router>
        )}
      </Location>
    </Layout>
  );
}

const ImageDetailPage  = ({ data, image, ...props }) => {
  const imageName = `${image}.jpg`;
  const fluidImage = data.allFile.edges.filter(e => e.node.childImageSharp.fluid.originalName === imageName)[0];

  const goBack = () => navigate('/photos');

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

export const PhotosPage = ({ data, location, ...props }) => {
  const photos = data.allFile.edges;
  const query = queryString.parse(location.search);
  if (query.image) {
    return <ImageDetailPage data={data} image={query.image} />
  }
  return (
    <Layout>
      <PageContainer>
      <h1>Photos</h1>
      <Grid>
        {photos.map((p, i) =>
          <ImageLink key={i} to={`/photos?image=${p.node.childImageSharp.fluid.originalName.split(`.`)[0]}`}> 
            <StyledImg fluid={p.node.childImageSharp.fluid} />
          </ImageLink>
        )}
      </Grid>
      </PageContainer>
    </Layout>
  )
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

export default Photos;