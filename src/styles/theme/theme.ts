import { createGlobalStyle } from 'styled-components';

export const ThemeStyle = createGlobalStyle`
 :root {
  --primary-50: var(#f2e7fe);
  --primary-100: var(#dbb2ff);
  --primary-200: var(#bb86fc);
  --primary-300: var(#985eff);
  --primary-400: var(#7f39fb);
  --primary-500: var(#6200ee);
  --primary-600: var(#5600e8);
  --primary-700: var(#3700b3);
  --primary-800: var(#30009c);
  --primary-900: var(#23036a);

  --secondary-50: var(#c8fff4);
  --secondary-100: var(#70efde);
  --secondary-200: var(#03dac5);
  --secondary-300: var(#00c4b4);
  --secondary-400: var(#00b3a6);
  --secondary-500: var(#01a299);
  --secondary-600: var(#019592);
  --secondary-700: var(#018786);
  --secondary-800: var(#017374);
  --secondary-900: var(#005457);

  --error: var(#b00020);
  --on-error: var(#fff);
  --warning: var(#ffd600);
  --on-warning: var(#000);
  --info: var(#03a9f4);
  --on-info: var(#fff);
  --success: var(#55dd00);
  --on-success: var(#000);

  --transparent: var(rgba(255, 255, 255, 0));

  --elevation-umbra: var(rgba(0, 0, 0, 0.2));
  --elevation-penumbra: var(rgba(0, 0, 0, 0.14));
  --elevation-ambient: var(rgba(0, 0, 0, 0.12));
 }
 `;
