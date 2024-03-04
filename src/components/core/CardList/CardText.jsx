import { css } from "styled-components";
import theme from "../../../styles/theme";

const { fontSizes, lineHeights, fontWeights, fontFamily } = theme;

export const textStyle = (
  fontfamily = "base",
  fontWeight = 400,
  fontSize,
  lineHeight
) => {
  return css`
    font-size: ${fontSizes[fontSize]};
    line-height: ${lineHeights[lineHeight]};
    font-weight: ${fontWeights[fontWeight]};
    font-family: ${fontFamily[fontfamily]};
  `;
};
