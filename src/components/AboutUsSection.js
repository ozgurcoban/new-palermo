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
        <Headline>Om oss</Headline>
        <Subtitle>
          Välkommen till Restaurang Palermo i Uppsala, en gemytlig restaurang
          med passionerad personal. Vi serverar allt från pasta och pizza till
          grillrätter, kompletterat med en gedigen dryckesmeny.
        </Subtitle>
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
        </ImageContainer>
        <AboutUsTextContainer>
          <AboutUsText>
            Restaurangen har en kvarterskrogsatmosfär med en mångsidig
            gästskara. Vi har även en intim källare för större sällskap, samt en
            uteservering för alla årstider. Vid sportevenemang erbjuder vi
            storbildsvisning.
          </AboutUsText>
        </AboutUsTextContainer>
      </ContentContainer>
    </FullWidthBackground>
  );
};

const FullWidthBackground = styled(BaseFullWidthBackground)`
  background-image: url('/wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.main};
`;

const ContentContainer = styled(BaseContentContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  padding: 2rem 0;

  @media (min-width: 768px) {
    /* h2 {
      grid-column: span 2;
    } */
    grid-template-columns: 1fr 1fr;
  }
`;

const Headline = styled.h2`
  @media (min-width: 768px) {
    grid-area: 1/1/1/3;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: 0.5px;
  justify-self: center;
  align-self: center;
  padding: 0 2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryWhite};
  width: clamp(30ch, 90%, 60ch);
  @media (min-width: 768px) {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;

const AboutUsTextContainer = styled.div`
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 3/4;
    /* padding: 2rem; */
  }
`;

const AboutUsText = styled.p`
  display: grid;
  place-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  font-size: 1.2rem;
  line-height: 1.7rem;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    padding: 5rem;
  }
`;

const ImageContainer = styled.div`
  padding: 2rem;
  padding-bottom: 100%;
  display: grid;
  place-items: center;
  position: relative;
  margin: 3rem 0;

  .image,
  .square {
    border-radius: 5px;
    aspect-ratio: 2/3;
    width: 25%;
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

  @media (min-width: 768px) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
`;

export default AboutUsSection;
