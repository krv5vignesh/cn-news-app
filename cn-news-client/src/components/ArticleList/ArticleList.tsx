import Article from "../Article";
import { CircularProgress, Grid } from "@mui/material";
import "./articleList.css";
import { ArticleType } from "../Article/types";

type ArticleListProps = {
  articles: Array<ArticleType>;
};

const ArticleList = (props: ArticleListProps) => {
  const { articles } = props;

  return (
    <div className="article-list">
      {!(articles?.length > 0) ? (
        <CircularProgress className="spinner" size={100} />
      ) : (
        <>
          <Grid className="article-list-container" container spacing={6}>
            {articles?.map((article: any) => {
              return (
                <Grid item xs={3}>
                  <Article {...article} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default ArticleList;
