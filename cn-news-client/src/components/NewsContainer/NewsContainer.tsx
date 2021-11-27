import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import ArticleList from "../ArticleList";
import SearchIcon from "@mui/icons-material/Search";
import "./newsContainer.css";

const NewsContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ p: "10px" }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <ArticleList />
    </div>
  );
};

export default NewsContainer;
