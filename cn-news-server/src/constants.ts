
require('dotenv').config();

export const API_KEY = process.env.NEWS_API_KEY;

export const DOMAIN = 'https://newsapi.org/v2/';

export const ENDPOINTS = {
  everything: 'everything',
  topHeadlines: 'top-headlines',
  sources: 'top-headlines/sources'
}

export const COUNTRIES = {
  uniterKingdom: 'gb',
  india: 'in',
}
