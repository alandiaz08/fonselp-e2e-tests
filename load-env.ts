import dotenv from 'dotenv';
dotenv.config();

export const env = {
  APP_ENV: process.env.APP_ENV || 'urlChallenge',
  APP_LANG: process.env.APP_LANG || 'urlTest',
  VIEWPORT_WIDTH: process.env.VIEWPORT_WIDTH || '1920',
  VIEWPORT_HEIGHT: process.env.VIEWPORT_HEIGHT || '1080',
};
