import { useEffect, useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import ArticleList from "../ArticleList";
import SearchIcon from "@mui/icons-material/Search";
import "./newsContainer.css";
import { ArticleType } from "../Article/types";
import { DOMAIN, ENDPOINTS } from "../../constants";

const NewsContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [noOfResults, setNoOfResults] = useState<number>(0);

  const getHeadlines = () => {
    fetch(`${DOMAIN}${ENDPOINTS.headlines}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data?.data?.articles);
        setNoOfResults(data?.data?.totalResults);
      });
  };
  useEffect(() => {
    // On initial load, fetch latest articles
    getHeadlines();
  }, []);

  const handleSearch = () => {
    setArticles([]);
    setNoOfResults(0);
    if (!searchTerm) {
      getHeadlines();
      return;
    }
    // On search term change, fetch articles from everything endpoint
    fetch(`${DOMAIN}${ENDPOINTS.search}/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data?.data?.articles);
        setNoOfResults(data?.data?.totalResults);
      });
  };

  return (
    <div className="news-container">
      <div className="search-container">
        <TextField
          id="search-bar"
          className="search-bar"
          variant="filled"
          label="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={(event) => {
            event.key === "Enter" && handleSearch();
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <ArticleList
        articles={articles}
        noOfResults={noOfResults}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default NewsContainer;
