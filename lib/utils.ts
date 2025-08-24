export const getImagePath = (path: string) => {
  // Use environment variable if available, otherwise default to /website for production
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/website' : '');
  return `${basePath}${path}`;
};
