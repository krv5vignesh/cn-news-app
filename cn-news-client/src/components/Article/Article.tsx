import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import "./article.css";
import { ArticleType } from "./types";

const Article = (props: ArticleType) => {
  const { title, url, urlToImage } = props;
  return (
    <Card className="article-card">
      <CardActionArea className="action-area">
        <Link href={url} target="_blank">
          <CardMedia
            className="article-image"
            component="img"
            image={urlToImage ?? "/fallback-image.png"}
            alt="Article image"
          />
          <CardContent>
            <Typography className="article-title">{title}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default Article;
