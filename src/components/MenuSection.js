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
      <h2>Meny</h2>
      <Categories
        style={{ paddingTop: '1rem' }}
        categories={categories}
        filterItems={filterItems}
      />
      <ScrollableContent>
        <MenuItem items={menuData} />
      </ScrollableContent>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  position: relative;
  overflow: auto; // new line
  background-image: url('/top-wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 2rem 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    background-color: #607d8b;
    z-index: 2;
  }

  h2 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primaryWhite};
  }
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

export default MenuSection;
