import 'dotenv/config';

export default {
  port: process.env.PORT || 3000,
  dbAddress: process.env.DB_ADDRESS || 'mongodb://127.0.0.1:27017/weblarek',
  uplooadPath: process.env.UPLOAD_PATH || 'images',
  uploadPathTemp: process.env.UPLOAD_PATH_TEMP || 'temp',
  originAllow: process.env.ORIGIN_ALLOW || 'http://localhost:5173',
  authREfreshTokenExpiry: process.env.AUTH_REFRESH_TOKEN_EXPIRY || '7d',
  authAccessTokenExpiry: process.env.AUTH_ACCESS_TOKEN_EXPIRY || '1m',
};
