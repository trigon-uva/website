export const getImagePath = (path: string) => {
  // Use environment variable if available, otherwise use root path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};
