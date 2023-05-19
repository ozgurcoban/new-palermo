import React from 'react';
import styled from 'styled-components';

const ContactCard = ({ address, email, phoneNumber }) => {
  const encodedAddress = encodeURIComponent(address);
  return (
    <Card>
      <h3>Kontaktuppgifter</h3>
      <Details>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {address}
        </a>
      </Details>
      <Details>
        <a href={`mailto:${email}`}>{email}</a>
      </Details>
      <Details>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </Details>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
`;

const Details = styled.p`
  margin: 5px 0;
`;

export default ContactCard;
