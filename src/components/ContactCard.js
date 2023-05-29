import React from 'react';
import styled from 'styled-components';
import { BsEnvelopeAt, BsPhone } from 'react-icons/bs';
import { BiMapPin } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { TbBrandFacebook } from 'react-icons/tb';

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
      <h3>Följ oss på sociala medier</h3>
      <SocialMediaContainer>
        <SocialMediaLink
          href='https://www.facebook.com/palermouppsala'
          target='_blank'
          rel='noopener noreferrer'
        >
          <TbBrandFacebook className='icon' />
          <span>Facebook</span>
        </SocialMediaLink>
        <SocialMediaLink
          href='https://www.instagram.com/palermouppsala'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsInstagram className='icon' />
          <span>Instagram</span>
        </SocialMediaLink>
      </SocialMediaContainer>
    </Card>
  );
};

const Card = styled.address`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  font-style: normal;
  color: ${({ theme }) => theme.colors.main};

  h3:last-of-type {
    margin-top: 2rem;
  }
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 0.5rem 0;

  a {
    color: black;
    text-decoration: none;
    margin-left: 5px;
    font-weight: 600;
    line-height: 2.2rem;
  }

  .icon {
    margin-right: 5px;
    font-size: 1.2rem;
    color: rgb(144, 121, 99);
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  line-height: 2.2rem;
`;

const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.main};
  text-decoration: none;
  font-weight: 600;

  .icon {
    margin-right: 5px;
    font-size: 1.2rem;
  }
`;

export default ContactCard;
