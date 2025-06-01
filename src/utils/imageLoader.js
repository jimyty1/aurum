const importAll = (r) => r.keys().map(r);
export const allImages = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|webp)$/));

export const previewImages = allImages.slice(2, 5);
export const bannerImage = allImages[25];
export const grid1Images = allImages.slice(6, 12);
export const grid2Images = allImages.slice(12, 18);
export const remainingImages = [
  // part of slice before index 25
  ...allImages.slice(18, 25),
  // part of slice after index 25
  ...allImages.slice(26, 36),
  // then add image[5]
  allImages[5],
];

export const journalImages = allImages.slice(36, 39);


export const journalDescriptions = [
  'Journal entry one: A rich narrative blending heritage and fashion.',
  'Journal entry two: Technology and craftsmanship meet.',
  'Journal entry three: Redefining soft luxury through time.',
];