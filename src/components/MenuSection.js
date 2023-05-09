import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Categories from './Menu/Categories';
import MenuItem from './Menu/MenuItem';
import items from '../data/menuItems';

const allCategories = ['alla', ...new Set(items.map(item => item.category))];

const MenuSection = ({ defaultCategory }) => {
  const [menuData, setMenuData] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [currentCategory, setCurrentCategory] = useState(defaultCategory);

  useEffect(() => {
    if (currentCategory === 'alla') {
      setMenuData(items);
      return;
    }
    const newItems = items.filter(item => item.category === currentCategory);
    setMenuData(newItems);
  }, [currentCategory]);

  const filterItems = category => {
    setCurrentCategory(category);
  };

  return (
    <MenuWrapper>
      <h2>Meny</h2>
      <Categories
        categories={categories.filter(category => category !== 'alla')}
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
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding-top: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primaryWhite};
  }
`;

const ScrollableContent = styled.div`
  min-height: 75vh;
  max-height: 75vh;
  overflow-y: auto;
  background-color: darkcyan;
  max-width: 600px;
  width: 90vw;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 2px solid #a28477;
`;

const Wrapper = styled.div`
  padding-bottom: 2rem;
`;

export default MenuSection;
