import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import {
  FullWidthBackground,
  ContentContainer as BaseContentContainer,
} from '../styles/StyledComponents';

const AboutUsSection = () => {
  const ref = useParallax({
    speed: 15,
  });
  const ref2 = useParallax({
    speed: 20,
  });

  return (
    <FullWidthBackground>
      <StaticImage
        src='../images/three_smiling.jpg'
        alt='three smiling persons'
        layout='fullWidth'
        placeholder='blurred'
        style={{
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <ContentContainer>
        <TextContainer>
          <h2>Om oss</h2>
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
          <div ref={ref.ref}>
            <StaticImage
              src='../images/basement.jpg'
              alt='Background' //TODO: Change to something more descriptive
              layout='fullWidth'
              placeholder='blurred'
              className='parallax-image'
            />
          </div>
          <div ref={ref2.ref}>
            <StaticImage
              src='../images/rose_wine.jpg'
              alt='Background' //TODO: Change to something more descriptive
              layout='fullWidth'
              placeholder='blurred'
              className='parallax-image'
            />
          </div>
        </ImageContainer>
      </ContentContainer>
    </FullWidthBackground>
  );
};

const ContentContainer = styled(BaseContentContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;
`;

const TextContainer = styled.div`
  padding: 50px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    padding-top: 3rem;
    font-weight: 400;
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
  padding: 1rem 0;
  /* height: 1500px; */
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  > div {
    width: 300px;
  }

  .parallax-image {
    /* height: 400px; */
    /* margin: 0 auto; */
    border-radius: 5px;
    aspect-ratio: 2/3;
    width: 100%;
  }
`;

export default AboutUsSection;
