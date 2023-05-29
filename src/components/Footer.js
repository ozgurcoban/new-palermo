import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BsInstagram } from 'react-icons/bs';
import { TbBrandFacebook } from 'react-icons/tb';

export const Footer = () => {
  return (
    <FooterContainerStyled>
      <TopLine />
      <FooterWrapperStyled>
        <FooterContactWrapperStyled>
          <FooterContactItemsStyled>
            <SocialMediaStyled>
              <SocialMediaWrapStyled>
                <HeadlineStyled>följ oss</HeadlineStyled>
                <SocialIconsStyled>
                  <a
                    href='https://www.facebook.com/profile.php?id=100046443356150'
                    target='_blank'
                    aria-label='Facebook'
                  >
                    <TbBrandFacebook className='icon' />
                  </a>
                  <a
                    href='https://www.instagram.com/palermo_uppsala'
                    target='_blank'
                    aria-label='Instagram'
                  >
                    <BsInstagram className='icon' />
                  </a>
                </SocialIconsStyled>
              </SocialMediaWrapStyled>
            </SocialMediaStyled>
            <AddressStyled>
              <HeadlineStyled>hitta oss</HeadlineStyled>
              <a
                href='http://maps.google.com/?q=Palermo Sysslomansgatan 7, 753 11 Uppsala'
                target='_blank'
              >
                Sysslomansgatan 7 <br /> 753 11 Uppsala
              </a>
            </AddressStyled>
            <AddressStyled>
              <HeadlineStyled>kontakta oss</HeadlineStyled>
              <ContactItemStyled href='tel:018-018-131820'>
                018 - 131820 <br />
              </ContactItemStyled>
              <ContactItemStyled href='mailto:info@palermo-uppsala.se'>
                info@palermo-uppsala.se
              </ContactItemStyled>
            </AddressStyled>
            <FooterLinksItemsStyled>
              <HeadlineStyled>navigering</HeadlineStyled>
              <li>
                <FooterLinkStyled to='/'>start</FooterLinkStyled>
              </li>
              <li>
                <FooterLinkStyled to='/om-palermo'>om palermo</FooterLinkStyled>
              </li>
              <li>
                <FooterLinkStyled to='/kontakt'>kontakta oss</FooterLinkStyled>
              </li>
            </FooterLinksItemsStyled>
          </FooterContactItemsStyled>
          <FooterLinksWrapperStyled></FooterLinksWrapperStyled>
        </FooterContactWrapperStyled>
      </FooterWrapperStyled>
      <WebsiteRightsWrapperStyled>
        <WebsiteRightsStyled>
          © Palermo, Uppsala.&nbsp;{new Date().getFullYear()}&nbsp;
          {/* <FooterTextStyled>
            Powered by
            <a href='https://www.gatsbyjs.com/' target='_blank'>
              &nbsp;Gatsby
            </a>
          </FooterTextStyled> */}
        </WebsiteRightsStyled>
      </WebsiteRightsWrapperStyled>
    </FooterContainerStyled>
  );
};

const TopLine = styled.div`
  position: absolute;
  top: -3px; // Adjust this value if you want the line to overlap more or less
  left: 0;
  height: 10px; // Adjust the height as needed
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
`;

const FooterContainerStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.main};
  position: relative;
`;

const FooterWrapperStyled = styled.div`
  padding: 2rem;
  max-width: 1120px;
  margin: 0 auto;
`;

const AddressStyled = styled.address`
  font-style: normal;
  align-self: start;

  a {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryLight};
  }
`;

const HeadlineStyled = styled.h5`
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

const ContactItemStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const FooterContactWrapperStyled = styled.div`
  width: 100%;
  line-height: 1.5rem;
`;

const FooterContactItemsStyled = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  grid-gap: 1rem;
  @media (min-width: 992px) {
    justify-items: center;
  }
`;

const FooterLinksWrapperStyled = styled.div`
  //...
`;

const FooterLinksItemsStyled = styled.ul`
  display: none;
`;

const FooterLinkStyled = styled(Link)`
  text-transform: capitalize;
`;

const SocialMediaStyled = styled.div`
  align-self: start;
`;

const SocialMediaWrapStyled = styled.div`
  /* max-width: 3.4rem; */
`;

const SocialIconsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  gap: 1rem;

  .icon {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 584px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const SocialIconLinkStyled = styled.a`
  font-size: 1.2rem;
`;

const WebsiteRightsWrapperStyled = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;

const WebsiteRightsStyled = styled.small`
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

const FooterTextStyled = styled.p`
  background-color: ${({ theme }) => theme.colors.main};
  margin-bottom: 0;
  font-size: 8px;
  font-weight: 300;
  padding: 0.1rem 0;

  a {
    font-weight: bold;
    color: #7026b9;
  }
`;

export default Footer;
