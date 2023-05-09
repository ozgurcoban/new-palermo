import React, { useState } from 'react';
import styled from 'styled-components';
import Categories from './Menu/Categories';
import MenuItem from './Menu/MenuItem';
import items from '../data/menuItems';

const allCategories = ['alla', ...new Set(items.map(item => item.category))];

const MenuSection = () => {
  const [menuData, setMenuData] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    if (category === 'alla') {
      setMenuData(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuData(newItems);
  };

  return (
    <MenuWrapper>
      <h2>Meny</h2>
      <Categories categories={categories} filterItems={filterItems} />
      <ScrollableContent>
        <MenuItem items={menuData} />
      </ScrollableContent>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.secondaryAccent};

  h2 {
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primaryWhite};
  }
`;

const ScrollableContent = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  background-color: darkcyan;
  max-width: 600px;
  width: 90vw;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;

export default MenuSection;
