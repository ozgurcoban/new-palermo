import React from 'react';
import styled from 'styled-components';
import { BsEnvelopeAt, BsPhone } from 'react-icons/bs';
import { BiMapPin } from 'react-icons/bi';

const ContactCard = ({ address, email, phoneNumber }) => {
  const encodedAddress = encodeURIComponent(address);
  return (
    <Card>
      <h3>Kontaktuppgifter</h3>
      <DetailContainer>
        <Details>
          <BiMapPin className='icon' />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {address}
          </a>
        </Details>
        <Details>
          <BsEnvelopeAt className='icon' />{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </Details>
        <Details>
          <BsPhone className='icon' />
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </Details>
      </DetailContainer>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
`;

const DetailContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%; */
`;

const Details = styled.p`
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.main};
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 0.5rem 0;

  a {
    color: black;
    text-decoration: none;
    margin-left: 5px;
    font-weight: 600;
  }

  .icon {
    position: absolute;
    left: -25px;
    top: 0;
    /* margin: 5px 0; */
    font-size: 1.2rem;
  }
`;

export default ContactCard;
