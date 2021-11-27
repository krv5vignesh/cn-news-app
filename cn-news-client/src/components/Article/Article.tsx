import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@mui/material"
import './article.css';

type AritcleProps = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}
const Article = (props: AritcleProps) => {
  const { title, url, urlToImage } = props;
  return (
    <Card className="article-card">
      <CardActionArea>
      <Link href={url} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={urlToImage ?? '/fallback-image.png'}
          alt="Article image"
        />
        <CardContent>
          <Typography className="article-title">
            {title}
          </Typography>
        </CardContent>
        </Link>
        </CardActionArea>
    </Card>
  );
};

export default Article;
