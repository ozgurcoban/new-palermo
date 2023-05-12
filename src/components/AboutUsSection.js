import React from 'react';
import styled from 'styled-components';

import {
  FullWidthBackground,
  ContentContainer as BaseContentContainer,
} from '../styles/StyledComponents';

const AboutUsSection = () => {
  return (
    <FullWidthBackground>
      <ContentContainer>
        <TextContainer>
          <h2>Om oss</h2>
          <p>
            Välkommen till Restaurang Palermo i Uppsala, en gemytlig restaurang
            med passionerad personal. Vi serverar allt från pasta och pizza till
            grillrätter, kompletterat med en gedigen dryckesmeny. Restaurangen
            har en kvarterskrogsatmosfär med en mångsidig gästskara. Vi har även
            en intim källare för större sällskap, samt en isolerad uteservering
            för alla årstider. Vid sportevenemang erbjuder vi storbildsvisning.
          </p>
        </TextContainer>
        <ImageContainer>
          <div>
            <img src='image1.jpg' alt='image 1' />
          </div>
          <div>
            <img src='image2.jpg' alt='image 2' />
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
  gap: 2rem;
`;

const TextContainer = styled.div`
  padding: 50px 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    padding-top: 3rem;
    font-weight: 400;
  }

  p {
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 5px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  padding: 50px 0;

  > div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default AboutUsSection;
