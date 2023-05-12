import React, { useState } from 'react';
import styled from 'styled-components';

const Categories = ({ categories, filterItems, includeAll }) => {
  const [activeCategory, setActiveCategory] = useState(
    includeAll ? 'alla' : categories[0]
  );
  const categoriesToRender = includeAll ? ['alla', ...categories] : categories;
  return (
    <CategoriesWrapper>
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
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CategoriesContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  margin-bottom: 2rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterButton = styled.button`
  margin: 0;
  padding: 0.25rem 0.2rem;
  border: none;
  border-radius: 0.25rem;
  background-color: transparent;
  color: ${({ active }) => (active ? `#E4CBAF` : '#F6F1EB')};
  cursor: pointer;
  transition: all 0.3s linear;
  text-transform: uppercase;
  font-size: clamp(0.85rem, 1.2vw, 1.1rem);

  @media (min-width: 380px) {
    padding: 0.5rem 0.5rem;
  }

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
  margin: 0.25rem auto 10px;
`;

export default Categories;
