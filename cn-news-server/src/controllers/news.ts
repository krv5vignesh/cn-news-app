import axios, { AxiosResponse } from "axios";
import { Request, Response, NextFunction } from "express";
import { API_KEY, COUNTRIES, DOMAIN, ENDPOINTS } from "../constants";

const getHeadlines = async (req: Request, res: Response, next: NextFunction) => {
  const url = `${DOMAIN}${ENDPOINTS.topHeadlines}?apiKey=${API_KEY}&country=${COUNTRIES.uniterKingdom}&pageSize=${req.query.pageSize}&page=${req.query.page}`;
  await axios.get(url)
  .then(response => {
    return res.status(200).json({data: response.data});
  })
  .catch(function (error) {
    if (error.response) {
      return res.status(error.response.status).json({message: error.response.data});
    } else {
      return res.status(500).json({message: error.message});
    }
  });
};

const searchAllNews = async (req: Request, res: Response, next: NextFunction) => {
  const url = `${DOMAIN}${ENDPOINTS.everything}?apiKey=${API_KEY}&q=${encodeURI(req.params.searchTerm)}&pageSize=${req.query.pageSize}&page=${req.query.page}`;
  await axios.get(url)
  .then(response => {
    return res.status(200).json({data: response.data});
  })
  .catch(function (error) {
    if (error.response) {
      return res.status(error.response.status).json({message: error.response.data});
    } else {
      return res.status(500).json({message: error.message});
    }
  });
};

const searchNewsFromUK = async (req: Request, res: Response, next: NextFunction) => {
  //Get sources from UK

  const sourcesURL = `${DOMAIN}${ENDPOINTS.sources}?apiKey=${API_KEY}&country=${COUNTRIES.uniterKingdom}`;
  await axios.get(sourcesURL)
  .then(response => {
    const sources = response.data.sources.map((source: { id: any; }) => source.id)?.reduce((accumulator: any, currentValue: any) => `${accumulator},${currentValue}`);
    const url = `${DOMAIN}${ENDPOINTS.everything}?apiKey=${API_KEY}&q=${encodeURI(req.params.searchTerm)}&pageSize=${req.query.pageSize}&page=${req.query.page}&sources=${sources}`;
    axios.get(url)
    .then(response => {
      return res.status(200).json({data: response.data});
    });
  })
  .catch(function (error) {
    return res.status(200).json({data: 'response.data'});
  });
};

export default { getHeadlines, searchAllNews, searchNewsFromUK };