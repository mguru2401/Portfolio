export const imageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
