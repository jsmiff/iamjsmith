import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from "@reach/router";

export const HERO_HEIGHT = '85vh';

export const Grid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding-top: ${HERO_HEIGHT};
`

export const Hero = styled(Img)`
  height: ${HERO_HEIGHT};
  left: 0; 
  position: absolute !important;
  top: 0;
  width: 100vw;
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