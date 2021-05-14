import { createGlobalStyle, css } from "styled-components";
import normalize from "styled-normalize";
import GilroyRegularWoff from "../assets/fonts/Gilroy-Regular.woff";
import GilroyRegularWoff2 from "../assets/fonts/Gilroy-Regular.woff2";
import GilroySemiboldWoff from "../assets/fonts/Gilroy-Semibold.woff";
import GilroySemiboldWoff2 from "../assets/fonts/Gilroy-Semibold.woff2";

const Size = {
  TABLET: "768px",
  LAPTOP_L: "1440px",
};

export const Colors = {
  BLACK: "#22252C",
  FOOTER_BLACK: "#121418",
  WHITE: "#FFFFFF",
  GRAY: "#9493A1",
};

export const Fonts = {
  BLOCK_TITLE: css`
    font-weight: 600;
    font-family: "Gilroy", sans-serif;
    color: ${Colors.BLACK};
  `,
  BLOCK_DESC: css`
    font-weight: 400;
    font-family: "Gilroy", sans-serif;
    color: ${Colors.BLACK};
  `,
  FOOTER_GRAY: css`
    font-weight: 400;
    font-family: "Gilroy", sans-serif;
    color: ${Colors.GRAY};
  `,
  FOOTER_WHITE: css`
    font-weight: 400;
    font-family: "Gilroy", sans-serif;
    color: ${Colors.WHITE};
  `,
};

export const Device = {
  TABLET: `min-width: ${Size.TABLET}`,
  DESKTOP: `min-width: ${Size.LAPTOP_L}`,
};

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    @font-face {
      font-style: normal;
      font-weight: 400;
      font-family: "Gilroy";
      src: url(${GilroyRegularWoff2}) format("woff2"),
      url(${GilroyRegularWoff}) format("woff");
    }

    @font-face {
      font-style: normal;
      font-weight: 600;
      font-family: "Gilroy";
      src: url(${GilroySemiboldWoff2}) format("woff2"),
      url(${GilroySemiboldWoff}) format("woff");
    }
`;

export const sizer = (mobile = "", tablet = null, desktop = null) => css`
  ${mobile ? mobile : ""}
  ${tablet
    ? css`
        @media (${Device.TABLET}) {
          ${tablet}
        }
      `
    : ""}
  ${desktop
    ? css`
        @media (${Device.DESKTOP}) {
          ${desktop}
        }
      `
    : ""}
`;
