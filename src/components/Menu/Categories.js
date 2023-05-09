import React, { useState } from 'react';
import styled from 'styled-components';

const Categories = ({ categories, filterItems, includeAll }) => {
  const [activeCategory, setActiveCategory] = useState(
    includeAll ? 'alla' : categories[0]
  );
  const categoriesToRender = includeAll ? ['alla', ...categories] : categories;
  return (
    <CategoriesContainer>
      {categoriesToRender.map((category, index) => {
        const isActive = category === activeCategory;
        return (
          <FilterWrapper>
            <FilterButton
              key={index}
              onClick={() => {
                filterItems(category);
                setActiveCategory(category);
              }}
              active={isActive}
            >
              {category}
            </FilterButton>
            {isActive && <ActiveLine />}
          </FilterWrapper>
        );
      })}
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  margin-bottom: 2rem;
  -webkit-overflow-scrolling: touch; // Smooth scrolling for iOS devices
  scrollbar-width: none; // Hide scrollbar for Firefox
  &::-webkit-scrollbar {
    display: none; // Hide scrollbar for Chrome, Safari, and Opera
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterButton = styled.button`
  margin: 0 0.2rem;
  padding: 0.25rem 0.2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: transparent;
  color: ${({ active }) => (active ? `#E4CBAF` : '#F6F1EB')};
  cursor: pointer;
  transition: all 0.3s linear;
  text-transform: uppercase;

  /* &:hover {
    background-color: purple;
  } */
`;

const ActiveLine = styled.div`
  width: calc(100% - 1rem);
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    #e4cbaf 25%,
    #e4cbaf 75%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 0.25rem auto 0;
`;

export default Categories;
