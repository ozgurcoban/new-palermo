import React from 'react';

import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import {
  FullWidthBackground as BaseFullWidthBackground,
  ContentContainer as BaseContentContainer,
} from '../styles/StyledComponents';

const AboutUsSection = () => {
  return (
    <FullWidthBackground>
      <ContentContainer>
        <h2>Om oss</h2>
        <TextContainer>
          <AboutUsTextContainer>
            <p>
              Välkommen till Restaurang Palermo i Uppsala, en gemytlig
              restaurang med passionerad personal. Vi serverar allt från pasta
              och pizza till grillrätter, kompletterat med en gedigen
              dryckesmeny.
            </p>
            <p>
              Restaurangen har en kvarterskrogsatmosfär med en mångsidig
              gästskara. Vi har även en intim källare för större sällskap, samt
              en uteservering för alla årstider. Vid sportevenemang erbjuder vi
              storbildsvisning.
            </p>
          </AboutUsTextContainer>
        </TextContainer>
        <ImageContainer>
          <StaticImage
            src='../images/basement.jpg'
            alt='Background' //TODO: Change to something more descriptive
            layout='fullWidth'
            placeholder='blurred'
            className='image'
          />
          <StaticImage
            src='../images/rose_wine.jpg'
            alt='Background' //TODO: Change to something more descriptive
            layout='fullWidth'
            placeholder='blurred'
            className='image'
          />
          <div className='square' />
          {/* <StaticImage
            src='../images/rose_wine.jpg'
            alt='Background' //TODO: Change to something more descriptive
            layout='fullWidth'
            placeholder='blurred'
            className='image'
          /> */}
        </ImageContainer>
      </ContentContainer>
    </FullWidthBackground>
  );
};

const FullWidthBackground = styled(BaseFullWidthBackground)`
  background-color: ${({ theme }) => theme.colors.main};
`;

const ContentContainer = styled(BaseContentContainer)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  /* padding: 1rem; */
  padding: 2rem 0;

  h2 {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;

const TextContainer = styled.div`
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const AboutUsTextContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 5px;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: 0.5px;
`;

const ImageContainer = styled.div`
  padding-bottom: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  gap: 1rem;
  position: relative;
  margin: 3rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  .image,
  .square {
    /* height: 400px; */
    /* margin: 0 auto; */
    border-radius: 5px;
    aspect-ratio: 2/3;
    width: 30%;
    position: absolute;
    object-fit: cover;
  }

  .image:nth-child(1) {
    transform: translate(60%, 30%);
    width: 40%;
    z-index: 1;
  }

  .image:nth-child(2) {
    transform: translate(-60%, -30%);
    width: 40%;
    z-index: 0;
  }

  .square {
    background-color: ${({ theme }) => theme.colors.tertiary};
    z-index: 0;
    background: rgba(228, 203, 175, 0.6);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(20px);
  }
`;

export default AboutUsSection;
