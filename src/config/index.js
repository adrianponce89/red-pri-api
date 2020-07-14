const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? process.env.DEV_SERVER : process.env.PROD_SERVER;

export const tinyAPIKey = process.env.TINY_API_KEY;
