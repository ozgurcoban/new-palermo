import React from 'react';
import styled from 'styled-components';
import GoogleMap from './GoogleMap';
import OpeningHours from './OpeningHours';
import { StaticImage } from 'gatsby-plugin-image';

import {
  FullWidthBackground as BaseFullWidthBackground,
  ContentContainer as BaseContentContainer,
} from '../styles/StyledComponents';
import { FaBus } from 'react-icons/fa';
import ContactCard from './ContactCard';
import OpeningHoursSection from './OpeningHours';

const ContactUsSection = () => {
  return (
    <FullWidthBackground>
      <TopLine />
      <ContentContainer>
        <h2>Vi ser fram emot att höra från dig</h2>
        <GoogleMap />
        <OpeningHoursContainer>
          <OpeningHours />
          <div className='clock-wrapper'>
            <StaticImage
              src='../images/clock.jpg'
              alt='Clock'
              placeholder='blurred'
              layout='constrained'
              className='clock'
            />
          </div>
        </OpeningHoursContainer>
        <ContactContainer>
          <ImageContainer>
            <StaticImage
              src='../images/palermo_front.png'
              alt='Palermo front'
              placeholder='blurred'
              layout='constrained'
              className='front-image'
              style={{ opacity: 0.05, position: 'absolute', height: '100%' }}
            />
            <StyledContactCard
              address='Sysslomansgatan 7, 753 11 Uppsala'
              email='info@palermo-uppsala.se'
              phoneNumber='018-13 18 20'
            />
          </ImageContainer>
          <ContactInfo>
            <h3>Vi ser fram emot att höra från dig</h3>
            <p>
              Har du några frågor eller funderingar? Tveka inte att kontakta oss
              via telefon eller e-post. Besök gärna vår Facebook-sida eller
              Instagram för att hålla dig uppdaterad om vad som händer på
              Palermo.
            </p>
            <p>
              Eller varför inte komma förbi och besöka oss på Sysslomansgatan 7
              i Uppsala?
            </p>
          </ContactInfo>
        </ContactContainer>
        <div className='spacer'></div>
      </ContentContainer>
    </FullWidthBackground>
  );
};

const TopLine = styled.div`
  position: absolute;
  top: 0; // Adjust this value if you want the line to overlap more or less
  left: 0;
  height: 2px; // Adjust the height as needed
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
`;

const FullWidthBackground = styled(BaseFullWidthBackground)`
  background-image: url('/contact-wave.svg');
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding-bottom: 6rem;
  position: relative;
`;

const ContentContainer = styled(BaseContentContainer)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
  position: relative;

  h2 {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.primaryWhite};
    padding: 2rem 0;
    width: clamp(9ch, 80%, 16ch);
  }
`;

const OpeningHoursContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 6rem;
  grid-row-gap: 2rem;
  align-items: center;
  background: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  &:nth-of-type(3) {
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .clock-wrapper {
    padding: 8rem;

    .clock {
      /* margin: 2rem; */
      border-radius: 50%;
    }
  }

  .spacer {
    height: 2rem;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 2rem;
  /* background-color: ${({ theme }) => theme.colors.primaryWhite}; */
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledContactCard = styled(ContactCard)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  color: white;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  .front-image {
    width: 100%;
    z-index: 1;
  }
`;

const ContactInfo = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primaryWhite};

  p {
    font-size: 1.2rem;
  }
`;

export default ContactUsSection;
