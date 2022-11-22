import { createGlobalStyle } from 'styled-components';
import { Fonts } from './fonts';
import { Reset } from './reset';
import { BaseStyles } from './base-styles';

export const GlobalStyles = createGlobalStyle`
    ${Fonts}
    ${Reset}
    ${BaseStyles}
`;
