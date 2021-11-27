import React, { useEffect, useState } from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DOMAIN, ENDPOINTS } from "./constants";
import Article from "./components/Article";
import { Grid } from "@mui/material";

const App = () => {
  const [headlines, setHeadlines] = useState<any>([]);

  useEffect(() => {
    fetch(`${DOMAIN}${ENDPOINTS.headlines}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHeadlines(data?.data?.articles);
      });
  }, []);

  useEffect(() => {
    console.log(headlines);
  }, [headlines]);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Condé Nast News
            </Typography>
            <Button color="inherit">About</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="app-content">
        <div className="article-list">
          <Grid container spacing={4}>
            {headlines?.map((headline: any) => {
              return (
                <Grid item xs={2}>
                  <Article {...headline} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default App;
