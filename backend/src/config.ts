import 'dotenv/config';

export default {
  port: process.env.PORT,
  dbAddress: process.env.DB_ADDRESS,
  uplooadPath: process.env.UPLOAD_PATH,
  uploadPathTemp: process.env.UPLOAD_PATH_TEMP,
  originAllow: process.env.ORIGIN_ALLOW,
  authREfreshTokenExpiry: process.env.AUTH_REFRESH_TOKEN_EXPIRY,
  authAccessTokenExpiry: process.env.AUTH_ACCESS_TOKEN_EXPIRY,
};
