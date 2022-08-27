import { keyframes } from '@chakra-ui/react';

export const hideNavbar = keyframes`
  from {
    transform: rotateX(0);
    opacity: 1;
  }

  to {
    transform: rotateX(-70deg);
    opacity: 0;
  }
`;

export const showNavbar = keyframes`
    from {
    transform: rotateX(-70deg);
    opacity: 0;
  }
  
  to {
    transform: rotateX(0);
    opacity: 1;
  }


`;

export const gradientBg = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
