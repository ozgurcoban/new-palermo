import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TbBrandFacebook, TbBrandInstagram } from 'react-icons/tb';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const handleLinkClick = () => {
    toggleSidebar();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Overlay sidebarOpen={sidebarOpen} onClick={toggleSidebar} />
      <StyledSidebar sidebarOpen={sidebarOpen}>
        <CloseButton onClick={toggleSidebar}>
          <span />
          <span />
        </CloseButton>
        <ul>
          <li>
            <Link to='/'>Hem</Link>
          </li>
          <li>
            <Link to='/menu'>Meny</Link>
          </li>
          <li>
            <Link to='/about'>Om oss</Link>
          </li>
          <li>
            <Link to='/contact'>Kontakt</Link>
          </li>
        </ul>
        <OpeningHours>
          <h3>Öppettider</h3>
          <p>Mån 11:00 - 01:00</p>
          <p>Tis till fre 11:00 - 03:00</p>
          <p>Lör 12:00 - 03:00</p>
          <p>Sön 12:00 - 01:00</p>
        </OpeningHours>
        <SocialButtons>
          <SocialButton
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TbBrandFacebook />
          </SocialButton>
          <Divider />
          <SocialButton
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TbBrandInstagram />
          </SocialButton>
        </SocialButtons>
        <LogoWrapper>
          <Link to='/' onClick={handleLinkClick}>
            Logo
          </Link>
        </LogoWrapper>
      </StyledSidebar>
    </>
  );
};

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #8c6c5b;
  color: #fff;
  padding: 1rem;
  transition: transform 0.4s ease-in-out;
  transform: ${({ sidebarOpen }) =>
    sidebarOpen ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 2;
  overflow-y: auto;

  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 4rem;
    margin-left: 1rem;

    li {
      padding: 0.5rem 0;
      width: 100%;
    }

    a {
      text-decoration: none;
      font-size: 2.7rem;
      color: ${({ theme }) => theme.colors.tertiary};
      display: inline-block;
      text-transform: uppercase;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  opacity: ${({ sidebarOpen }) => (sidebarOpen ? '1' : '0')};
  visibility: ${({ sidebarOpen }) => (sidebarOpen ? 'visible' : 'hidden')};
  z-index: 1;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 2rem;
  top: 2rem;

  span {
    background-color: #fff;
    border-radius: 2px;
    height: 3px;
    width: 100%;
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 0;
  }

  span:first-child {
    transform: translateY(-50%) rotate(45deg);
  }

  span:last-child {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

const LogoWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0;
  bottom: 1rem;
  text-align: center;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const SocialButton = styled.a`
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 1.5rem;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #8c6c5b;
  }
`;

const Divider = styled.div`
  background-color: #fff;
  height: 40px;
  width: 2px;
  margin: 0 1rem;

  background-image: linear-gradient(
    to bottom,
    #9aaabf,
    rgba(255, 255, 255, 0),
    #9aaabf
  );
`;

const OpeningHours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  margin-left: 1rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

export default Sidebar;
