import { Global } from '@emotion/react';
import React from 'react';

const Fonts = () => (
  <Global
    styles={ `
      /* latin */
      @font-face {
        font-family: 'Quantify';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/quantify.ttf') format('ttf');
      }
      ` }
  />
);

export default Fonts;
