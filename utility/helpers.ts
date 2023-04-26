export const convertToSlug = (s: string) => {
  return s
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
