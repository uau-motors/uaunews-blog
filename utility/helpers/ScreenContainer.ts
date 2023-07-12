export const screenContainer = (screen: string) => {
  if (screen === "xs") {
    return {
      xsl: 12,
      xsr: 12
    };
  } else if (screen === "sm") {
    return {
      xsl: 7,
      xsr: 5
    };
  } else if (screen === "md") {
    return {
      xsl: 8,
      xsr: 4
    };
  } else if (screen === "lg" || screen === "xl") {
    return {
      xsl: 9,
      xsr: 3
    };
  }
};
