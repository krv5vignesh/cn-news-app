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

const getNewsByKeyword = async (req: Request, res: Response, next: NextFunction) => {
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

export default { getHeadlines, getNewsByKeyword };