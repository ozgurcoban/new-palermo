import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
      <Logo to='/'>Logolito</Logo>
      <Hamburger
        onClick={() => {
          toggleSidebar();
        }}
      >
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu>
        <li>
          <MenuLink to='/'>Hem</MenuLink>
        </li>
        <li>
          <MenuLink to='/menu'>Meny</MenuLink>
        </li>
        <li>
          <MenuLink to='/about'>Om oss</MenuLink>
        </li>
        <li>
          <MenuLink to='/contact'>Kontakt</MenuLink>
        </li>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const Hamburger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 2rem;

  span {
    background-color: #fff;
    border-radius: 2px;
    height: 3px;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;

  @media (min-width: 768px) {
    position: static;
    align-items: center;
    flex-direction: row;
    display: flex;
  }

  li {
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      margin-left: 1rem;
    }
  }
`;

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.tertiary};
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryAccent};

    &:after {
      width: 100%;
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: #8c6c5b;
    transition: width 0.3s ease-in-out;
  }
`;

export default Navbar;
