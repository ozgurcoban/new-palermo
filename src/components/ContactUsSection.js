import React from 'react';
import styled from 'styled-components';
import GoogleMap from './GoogleMap';
import OpeningHours from './OpeningHours';

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
        <h2>Kontakta oss</h2>
        <RoundedDiv>
          <GoogleMap />
        </RoundedDiv>
        <div className='container'>
          <OpeningHours />
          <ContactCard
            address='Sysslomansgatan 7, 753 11 Uppsala'
            email='info@palermo-uppsala.se'
            phoneNumber='018-13 18 20'
          />
        </div>
      </ContentContainer>
    </FullWidthBackground>
  );
};

const FullWidthBackground = styled(BaseFullWidthBackground)`
  background-color: #907963;
`;

const ContentContainer = styled(BaseContentContainer)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  width: 100%;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryWhite};
    padding: 2rem 0;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const RoundedDiv = styled.div`
  clip-path: inset(0 round 8px);
  overflow: hidden;
  height: 50vh;
`;

export default ContactUsSection;
