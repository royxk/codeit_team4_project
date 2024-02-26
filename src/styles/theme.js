const fontFamily = {
  base: '"Pretendard Variable", "Noto Sans KR", sans-serif',
  bold: '"Pretendard Variable", "Noto Sans KR", sans-serif', // Assuming the same font family but with a bold weight
};

const fontWeights = {
  regular: 400,
  bold: 700,
};

const fontSizes = {
  xxxs: "12px",
  xxs: "14px",
  xs: "15px",
  sm: "16px",
  base: "18px",
  lg: "20px",
  xl: "24px",
  xxl: "28px",
};

const lineHeights = {
  xs: "16px",
  sm: "18px",
  base: "20px",
  lg: "22px",
  xl: "26px",
  xxl: "28px",
};

const breakpoints = {
  tablet: 768,
  desktop: 1024,
  widescreen: 1440,
};

const colors = {
  purple: {
    100: "#F8F0FF",
    200: "#ECD9FF",
    300: "#DCB9FF",
    400: "#C894FD",
    500: "#AB57FF",
    600: "#9935FF",
    700: "#861DEE",
    800: "#6E0AD1",
    900: "#5603A7",
  },
  orange: {
    100: "#FFF0D6",
    200: "#FFE2AD",
    300: "#FFC583",
    400: "#FFAE65",
    500: "#FF8832",
  },
  blue: {
    100: "#E2F5FF",
    200: "#B1E4FF",
    300: "#7CD2FF",
    400: "#34B9FF",
    500: "#00A2FE",
  },
  green: {
    100: "#E4FBDC",
    200: "#D0F5C3",
    300: "#9BE282",
    400: "#60CF37",
    500: "#2BA600",
  },
  grey: {
    100: "#F6F6F6",
    200: "#EEEEEE",
    300: "#CCCCCC",
    400: "#999999",
    500: "#555555",
    600: "#4A4A4A",
    700: "#3A3A3A",
    800: "#2B2B2B",
    900: "#181818",
  },
  black: "#000000",
  white: "#FFFFFF",
  error: "#DC3A3A",
  background: "#f0f6ff",
  surface: "#F6F8FF",
};

const theme = {
  fontFamily,
  colors,
  breakpoints,
  fontSizes,
  lineHeights,
  fontWeights,
};

export default theme;
