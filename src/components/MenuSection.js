import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Categories from './Menu/Categories';
import MenuItem from './Menu/MenuItem';
import items from '../data/menuItems';

const allCategories = [...new Set(items.map(item => item.category))];

const MenuSection = () => {
  const [menuData, setMenuData] = useState(
    items.filter(item => item.category === 'pizza')
  );
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    const newItems = items.filter(item => item.category === category);
    setMenuData(newItems);
  };

  return (
    <MenuWrapper>
      <TopLine />
      <h2>Meny</h2>
      <Categories
        style={{ paddingTop: '1rem' }}
        categories={categories}
        filterItems={filterItems}
      />
      <Wrapper>
        <ScrollableContent>
          <MenuItem items={menuData} />
        </ScrollableContent>
      </Wrapper>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  position: relative;
  /* overflow: auto; // new line */
  background-image: url('/top-wave.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem 0;

  h2 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primaryWhite};
  }

  @media (min-width: 1501px) {
    background-size: 100% auto; // you can adjust this to make the SVG look better on larger screens
  }
`;

const TopLine = styled.div`
  position: absolute;
  top: -3px;
  left: 0;
  height: 10px;
  width: 100%;
  background-color: black;
`;

const ScrollableContent = styled.div`
  min-height: 75vh;
  max-height: 75vh;
  overflow-y: auto;
  /* background-color: darkcyan; */
  max-width: 600px;
  width: 90vw;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: inset 0 4px 6px 2px rgba(0, 0, 0, 0.1);
  outline: 3px solid #a28477;
`;

const Wrapper = styled.div`
  /* padding-bottom: 2rem; */
`;

export default MenuSection;
