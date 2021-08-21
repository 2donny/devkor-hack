import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const commonStyles = {
  accent: '#25D482',
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    p {
      margin: 0;
      padding: 0;
    }
`;
