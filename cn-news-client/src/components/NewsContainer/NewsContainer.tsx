import { useEffect, useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  TablePagination,
} from "@mui/material";
import ArticleList from "../ArticleList";
import SearchIcon from "@mui/icons-material/Search";
import "./newsContainer.css";
import { ArticleType } from "../Article/types";
import { DOMAIN, ENDPOINTS } from "../../constants";

const NewsContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [noOfResults, setNoOfResults] = useState<number>(0);

  //Pagination
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  //Get latest headlines
  const getHeadlines = () => {
    fetch(
      `${DOMAIN}${ENDPOINTS.headlines}?pageSize=${rowsPerPage}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data?.data?.articles);
        setNoOfResults(data?.data?.totalResults);
      });
  };

  //On initial load, fetch latest articles
  useEffect(() => {
    getHeadlines();
  }, []);

  //Search articles using the 'everything' endpoint
  const handleSearch = () => {
    setArticles([]);
    setNoOfResults(0);
    if (!searchTerm) {
      getHeadlines();
      return;
    }

    fetch(
      `${DOMAIN}${ENDPOINTS.search}/${searchTerm}?pageSize=${rowsPerPage}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data?.data?.articles);
        setNoOfResults(data?.data?.totalResults);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [page, rowsPerPage]);

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
      <TablePagination
        className={"pagination"}
        component="div"
        count={noOfResults}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 75, 100].filter(
          (item) => item < noOfResults
        )}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default NewsContainer;
