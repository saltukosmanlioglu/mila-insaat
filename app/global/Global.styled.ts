import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: pBlack;
    src: url(/fonts/Poppins-Black.ttf);
  }
  @font-face {
    font-family: pBlackItalic;
    src: url(/fonts/Poppins-BlackItalic.ttf);
  }
  @font-face {
    font-family: pBold;
    src: url(/fonts/Poppins-Bold.ttf);
  }
  @font-face {
    font-family: pBoldItalic;
    src: url(/fonts/Poppins-BoldItalic.ttf);
  }
  @font-face {
    font-family: pExtraBold;
    src: url(/fonts/Poppins-ExtraBold.ttf);
  }
  @font-face {
    font-family: pExtraBoldItalic;
    src: url(/fonts/Poppins-ExtraBoldItalic.ttf);
  }
  @font-face {
    font-family: pExtraLight;
    src: url(/fonts/Poppins-ExtraLight.ttf);
  }
  @font-face {
    font-family: pExtraLightItalic;
    src: url(/fonts/Poppins-ExtraLightItalic.ttf);
  }
  @font-face {
    font-family: pItalic;
    src: url(/fonts/Poppins-Italic.ttf);
  }
  @font-face {
    font-family: pLight;
    src: url(/fonts/Poppins-Light.ttf);
  }
  @font-face {
    font-family: pLightItalic;
    src: url(/fonts/Poppins-LightItalic.ttf);
  }
  @font-face {
    font-family: pMedium;
    src: url(/fonts/Poppins-Medium.ttf);
  }
  @font-face {
    font-family: pMediumItalic;
    src: url(/fonts/Poppins-MediumItalic.ttf);
  }
  @font-face {
    font-family: pRegular;
    src: url(/fonts/Poppins-Regular.ttf);
  }
  @font-face {
    font-family: pSemiBold;
    src: url(/fonts/Poppins-SemiBold.ttf);
  }
  @font-face {
    font-family: pSemiBoldItalic;
    src: url(/fonts/Poppins-SemiBoldItalic.ttf);
  }
  @font-face {
    font-family: pThin;
    src: url(/fonts/Poppins-Thin.ttf);
  }
  @font-face {
    font-family: pThinItalic;
    src: url(/fonts/Poppins-ThinItalic.ttf);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: pLight;
  }
  
  body {
    font-family: overpass, serif;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
  }
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export default GlobalStyle;
