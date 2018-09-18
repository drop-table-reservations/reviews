import reset from 'styled-reset';
import { injectGlobal } from 'styled-components';

const setFonts = () => {
  const setGlobalStyles = injectGlobal`
    ${reset};
    @font-face {
        font-family: "BrandonText";
        src: url("https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff2") format('woff');
    }

    @font-face {
        font-family: "BrandonText";
        font-weight: 500;
        src: url("https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_med-webfont.woff2") format('woff');
    }

    @font-face {
        font-family: "BrandonText";
        font-weight: 700;
        src: url("https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_bld-webfont.woff2") format('woff');
    }

    html {
    font-family: 'BrandonText';
    font-size: 16px;
    }
  `;
};

export default setFonts;
