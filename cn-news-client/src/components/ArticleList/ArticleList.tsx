import { Article as ArticleType } from "../Article/types";
import Article from "../Article";
import { CircularProgress, Grid } from "@mui/material";
import { DOMAIN, ENDPOINTS } from "../../constants";
import { useEffect, useState } from "react";
import "./articleList.css";

const ArticleList = () => {
  const [articles, setArticles] = useState<Array<ArticleType>>([]);

  useEffect(() => {
    fetch(`${DOMAIN}${ENDPOINTS.headlines}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data?.data?.articles);
      });
  }, []);

  return (
    <div className="article-list">
      {!(articles?.length > 0) ? (
        <CircularProgress className="spinner" size={100} />
      ) : (
        <Grid container spacing={6}>
          {articles?.map((article: any) => {
            return (
              <Grid item xs={3}>
                <Article {...article} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default ArticleList;
