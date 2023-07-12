enum ScreenSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl"
}

const getScreenSize = (width: number): ScreenSize => {
  if (width < 480) {
    return ScreenSize.XS;
  } else if (width < 768) {
    return ScreenSize.SM;
  } else if (width < 1024) {
    return ScreenSize.MD;
  } else if (width < 1200) {
    return ScreenSize.LG;
  } else {
    return ScreenSize.XL;
  }
};

export default getScreenSize;
