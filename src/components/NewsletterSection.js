import React from 'react';
import styled from 'styled-components';

import {
  ContentContainer as BaseContentContainer,
  FullWidthBackground as BaseFullWidthBackground,
} from '../styles/StyledComponents';

const NewsletterSection = () => {
  return (
    <FullWidthBackground>
      <ContentContainer>
        <h2>Håll dig uppdaterad</h2>
      </ContentContainer>
    </FullWidthBackground>
  );
};

const FullWidthBackground = styled(BaseFullWidthBackground)`
  background-color: ${({ theme }) => theme.colors.main};
  background-image: url('/contact-wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;

const ContentContainer = styled(BaseContentContainer)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
`;

export default NewsletterSection;
