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

        const showTakeawayPrice = nestedItems.some(item => item.takeaway_price);
        const displayPrice = showTakeawayPrice ? 'Servering/Avh' : 'Servering';

        return (
          <MenuItemWrapper key={id}>
            <CategoryWrapper>
              <h3>{subcategory}</h3>
              <p>{description}</p>
              <p style={{ textAlign: 'right', marginTop: '1rem' }}>
                {displayPrice}
              </p>
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
                  <MenuItemDetails key={id}>
                    <div>
                      <h4>{name}</h4>
                      <Price>
                        {price}:-
                        {takeawayPrice ? (
                          <p>
                            <span>/</span>
                            {takeawayPrice}:-
                          </p>
                        ) : null}
                      </Price>
                    </div>

                    <p>{description}</p>
                  </MenuItemDetails>
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
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: 'Garamond', serif;

  h3,
  h4,
  p {
    font-family: 'Garamond', serif;
    &:first-letter {
      text-transform: uppercase;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

const CategoryWrapper = styled.div`
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primaryWhite};

  > p {
    margin-top: 0.5rem;
  }
`;

const Item = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

const MenuItemDetails = styled.div`
  padding: 1rem 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > p {
    width: 80%;
    margin: 0.5rem 0 0 0;
  }
`;

const Price = styled.div`
  font-size: 0.875rem;
  color: black;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export default MenuItem;
