import React from 'react';
import styled from 'styled-components';

const MenuItem = ({ items }) => {
  return (
    <>
      {items.map(item => {
        const {
          subcategory,
          category_id: id,
          description,
          items: nestedItems,
          extras,
        } = item;

        const showTakeawayPrice = items.some(item => item.takeaway_price);
        const displayPrice = showTakeawayPrice ? 'Servering/Avh' : 'Servering';

        return (
          <MenuItemWrapper key={id}>
            <CategoryWrapper>
              <h3>{subcategory}</h3>
              <p>{description}</p>
            </CategoryWrapper>
            <Item>
              {nestedItems.map(nestedItem => {
                const {
                  name,
                  id,
                  description,
                  price,
                  takeaway_price: takeawayPrice,
                } = nestedItem;
                return (
                  <div key={id}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <Price>
                      {takeawayPrice ? (
                        <p>
                          <span>/</span>
                          {takeawayPrice}:-
                        </p>
                      ) : null}
                    </Price>
                  </div>
                );
              })}
            </Item>
          </MenuItemWrapper>
        );
      })}
    </>
  );
};

const MenuItemWrapper = styled.div`
  /* padding: 1rem; */
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const CategoryWrapper = styled.div`
  padding: 1rem;
`;

const Item = styled.div`
  padding: 1rem;
`;

const Price = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: black;
`;

export default MenuItem;
