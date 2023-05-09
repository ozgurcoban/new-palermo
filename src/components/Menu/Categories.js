import React, { useState } from 'react';
import styled from 'styled-components';

const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState(categories);
  return (
    <CategoriesContainer>
      {categories.map((category, index) => {
        return (
          <FilterButton key={index} onClick={() => filterItems(category)}>
            {category}
          </FilterButton>
        );
      })}
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  margin: 0 0.2rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: red;
  }
`;

export default Categories;
