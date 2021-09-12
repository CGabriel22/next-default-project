import { createGlobalStyle } from 'styled-components';

export const ThemeStyle = createGlobalStyle`
 :root {
  --primary-50: var(--theme-primary-50, #f2e7fe);
  --primary-100: var(--theme-primary-100, #dbb2ff);
  --primary-200: var(--theme-primary-200, #bb86fc);
  --primary-300: var(--theme-primary-300, #985eff);
  --primary-400: var(--theme-primary-400, #7f39fb);
  --primary-500: var(--theme-primary-500, #6200ee);
  --primary-600: var(--theme-primary-600, #5600e8);
  --primary-700: var(--theme-primary-700, #3700b3);
  --primary-800: var(--theme-primary-800, #30009c);
  --primary-900: var(--theme-primary-900, #23036a);

  --secondary-50: var(--theme-secondary-50, #c8fff4);
  --secondary-100: var(--theme-secondary-100, #70efde);
  --secondary-200: var(--theme-secondary-200, #03dac5);
  --secondary-300: var(--theme-secondary-300, #00c4b4);
  --secondary-400: var(--theme-secondary-400, #00b3a6);
  --secondary-500: var(--theme-secondary-500, #01a299);
  --secondary-600: var(--theme-secondary-600, #019592);
  --secondary-700: var(--theme-secondary-700, #018786);
  --secondary-800: var(--theme-secondary-800, #017374);
  --secondary-900: var(--theme-secondary-900, #005457);

  --error: var(--light-error, #b00020);
  --on-error: var(--light-on-error, #fff);
  --warning: var(--light-warning, #ffd600);
  --on-warning: var(--light-on-warning, #000);
  --info: var(--light-info, #03a9f4);
  --on-info: var(--light-on-info, #fff);
  --success: var(--light-success, #55dd00);
  --on-success: var(--light-on-success, #000);

  --transparent: var(--light-transparent, rgba(255, 255, 255, 0));

  --elevation: var(--light-elevation);
  --elevation-umbra: var(--light-elevation-umbra, rgba(0, 0, 0, 0.2));
  --elevation-penumbra: var(--light-elevation-penumbra, rgba(0, 0, 0, 0.14));
  --elevation-ambient: var(--light-elevation-ambient, rgba(0, 0, 0, 0.12));
 }
 `;
