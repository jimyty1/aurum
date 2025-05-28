const importAll = (r) => r.keys().map(r);
const allImages = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|webp)$/));

export const previewImages = allImages.slice(2, 5);
export const bannerImage = allImages[5];
export const grid1Images = allImages.slice(6, 12);
export const grid2Images = allImages.slice(12, 18);
export const remainingImages = allImages.slice(18, 36);
export const journalImages = allImages.slice(36, 39);
