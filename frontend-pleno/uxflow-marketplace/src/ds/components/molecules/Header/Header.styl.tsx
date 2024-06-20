import styl, { css } from 'styled-components';

export const HeaderWrapper = styl.div(
  () => css`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  `,
);
