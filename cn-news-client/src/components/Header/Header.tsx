import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

/**
 * This component displays the app bar.
 * @component
 */
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Condé Nast - UK News
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
