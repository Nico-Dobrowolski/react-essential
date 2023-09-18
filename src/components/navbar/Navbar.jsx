/* eslint-disable react/prop-types */

import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useContext } from "react";
import { UserContextes } from "../../contextes/UserData";
const Navbar = () => {
  const { username, like } = useContext(UserContextes);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Amazon lite
          </Typography>
          <Button color="inherit">Bonjour {username} </Button>

          <Button color="inherit">Retour et commandes</Button>
          <Button
            color="inherit"
            startIcon={
              <Badge badgeContent={like} color="primary">
                <ShoppingBasketIcon color="action" />
              </Badge>
            }
          >
            Panier
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
