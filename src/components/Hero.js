import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled, { keyframes } from 'styled-components';
import DownArrow from './DownArrow';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <HeroContainer Tag='section' fluid={data.file.childImageSharp.fluid}>
      <HeroOverlay>
        <HeroTitle>
          Hem
          <br />
          trevliga
          <br />
          Palermo.
        </HeroTitle>

        <HeroSubtitle>
          <div className='subtitle-wrapper'>
            <h5>Inofficiella 14:e nationen i Uppsala</h5>
            <div>
              <span>Välkomnande</span>
              <span>Avslappnad</span>
              <span>Vällagat</span>
            </div>
          </div>
        </HeroSubtitle>
        <DownArrow
          strokeColor='#E4CBAF'
          animationDuration='3.5s'
          animationDelay='4.5s'
        />
      </HeroOverlay>
    </HeroContainer>
  );
};

const HeroContainer = styled(BackgroundImage)`
  height: 100vh;
  width: 100%;
  color: white;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 10px 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: flex-end;
  justify-items: center;
  grid-template-areas:
    'title'
    'spacer'
    'subtitle';
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    grid-template-rows: 2.5fr 10px 1fr;
  }
`;

const fadeInMove = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInMoveSpan1 = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInMoveSpan2 = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInMoveSpan3 = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(5rem, 20vw, 8rem);
  font-family: 'Lobster', cursive;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.tertiary};
  grid-area: title;
  align-self: flex-end;
  justify-self: center;
  /* padding-left: 1rem; */
  grid-column: 2 / 3;
  animation: ${fadeInMove} 1s ease-out forwards;
`;

const HeroSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: clamp(1.7rem, 2vw, 2rem);
  letter-spacing: 0.1rem;
  /* padding: 1rem; */
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  align-self: center;
  grid-area: subtitle;
  justify-self: center;
  color: #f6f1eb;
  grid-column: 2 / 3;
  animation: ${fadeInMove} 1s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;

  .subtitle-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  h5 {
    margin-bottom: 2rem;
    /* padding-left: 0.5rem; */
    margin-top: -2rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: clamp(1.2rem, 2vw, 2rem);
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  span {
    position: relative;
    /* padding: 0 0.5rem; */
    font-size: clamp(0.7rem, 1.2vw, 1.5rem);
    flex-grow: 1;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    opacity: 0;

    @media (min-width: 768px) {
      /* padding: 0 1.5rem; */
    }
  }

  span:nth-child(1) {
    animation: ${fadeInMoveSpan1} 1s ease-out forwards;
    animation-delay: 0.7s;
  }

  span:nth-child(2) {
    animation: ${fadeInMoveSpan2} 1s ease-out forwards;
    animation-delay: 1.2s;
  }

  span:nth-child(3) {
    animation: ${fadeInMoveSpan3} 1s ease-out forwards;
    animation-delay: 1.7s;
  }

  span:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 1.5rem;
    background-color: #f6f1eb;
    z-index: 1;
  }
`;

export default Hero;
