// Construit un srcset à partir des variantes -640/-960 générées à côté de l'image source (1600w).
export function buildSrcSet(imagePath) {
  if (!imagePath) return undefined;
  const base = imagePath.replace(/\.jpg$/, '');
  return `${base}-640.jpg 640w, ${base}-960.jpg 960w, ${imagePath} 1600w`;
}
