import React from 'react';
import styled, { keyframes } from 'styled-components';

const DownArrow = ({ strokeColor, animationDuration, animationDelay }) => (
  <Arrow
    strokeColor={strokeColor}
    animationDuration={animationDuration}
    animationDelay={animationDelay}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
  >
    <path
      d='M4,10 L12,18 L20,10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Arrow>
);

const PulseAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
     transform: translateY(0);
  }
  100% {
    opacity: 1;
     transform: translateY(20px);
  }
`;

const Arrow = styled.svg`
  animation: ${FadeInAnimation}
      ${({ animationDelay }) => animationDelay || '0s'} 2s forwards,
    ${PulseAnimation} ${({ animationDuration }) => animationDuration || '2s'}
      infinite;
  fill: none;
  fill: none;
  stroke: ${({ strokeColor }) => strokeColor || '#fff'};
  stroke-width: 2;
  width: clamp(1rem, 8vw, 2rem);
  position: absolute;
  bottom: 20px;
  opacity: 0;
`;

export default DownArrow;
