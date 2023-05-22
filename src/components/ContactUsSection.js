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

const ContactUsSection = () => {
  return (
    <FullWidthBackground>
      <ContentContainer>
        <h2>Vi ser fram emot att höra från dig</h2>
        <RoundedDiv>
          <GoogleMap />
        </RoundedDiv>
        <div className='container'>
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
        </div>
        <div className='contact-container'>
          <ContactCard
            address='Sysslomansgatan 7, 753 11 Uppsala'
            email='info@palermo-uppsala.se'
            phoneNumber='018-13 18 20'
          />
        </div>
        <div class='spacer'></div>
      </ContentContainer>
    </FullWidthBackground>
  );
};

const FullWidthBackground = styled(BaseFullWidthBackground)`
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
`;

const ContentContainer = styled(BaseContentContainer)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  width: 100%;

  h2 {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.primaryWhite};
    padding: 2rem 0;
    width: clamp(9ch, 80%, 16ch);
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 6rem;
    grid-row-gap: 2rem;
    background: ${({ theme }) => theme.colors.primaryWhite};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: 2rem;
    }

    &:nth-of-type(3) {
      background-color: ${({ theme }) => theme.colors.tertiary};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .clock-wrapper {
      padding: 2rem;

      .clock {
        /* margin: 2rem; */
        border-radius: 50%;
      }
    }

    .spacer {
      height: 2rem;
    }
  }
`;

const RoundedDiv = styled.div`
  clip-path: inset(0 round 8px);
  overflow: hidden;
  height: 50vh;
`;

export default ContactUsSection;
