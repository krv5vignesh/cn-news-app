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

/**
 * This component displays the article information in a card UI.
 * @component
 * @param {Object} props - props of the article component
 * @param {string} props.title - Title of the article.
 * @param {string} props.description - Description of the article.
 * @param {string} props.url - URL of the article.
 * @param {string} props.urlToImage - Image URL of the article thumbnail.
 */

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
