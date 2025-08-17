/**
 * Get the correct asset path for GitHub Pages deployment
 * In production, adds the basePath prefix to asset URLs
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/kala-khab' : '';
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}

/**
 * Get the correct image path for GitHub Pages deployment
 */
export function getImagePath(imageName: string): string {
  return getAssetPath(`/images/${imageName}`);
}

/**
 * Get the correct font path for GitHub Pages deployment
 */
export function getFontPath(fontPath: string): string {
  return getAssetPath(fontPath);
}
