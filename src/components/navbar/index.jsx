import {
  DarkMode,
  LightMode,
  LoginRounded,
  LogoutRounded,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeContext from "../../context/themeContext";
import UserContext from "../../context/userContext";
import { StyledTab, StyledTabs } from "./components/tabs";
import LINKS from "./navlinks";
export default function Navbar() {
  const { logo } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { mode, setMode, themeModes } = useContext(ThemeContext);
  const { LIGHT_THEME_MODE, DARK_THEME_MODE } = themeModes;
  const [drawerOpen, setDrawerOpen] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState(
    LINKS.findIndex((link) => link.route === location.pathname.split("/")[1])
  );
  const toggleTheme = () => {
    mode === LIGHT_THEME_MODE
      ? setMode(DARK_THEME_MODE)
      : setMode(LIGHT_THEME_MODE);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleTabChange = (tab) => {
    setCurrentLocation(tab);
    setTimeout(1000, navigate(`/${LINKS[tab].route}`));
  };
  // const toggleLogin = () => {
  //   user ? setUser(null) : setUser({ displayName: "Shubham Kushwaha" });
  // };
  const firstName = user?.displayName.split(" ")[0];
  useEffect(() => {}, [currentLocation]);
  return (
    <>
      <AppBar
        sx={{ boxShadow: "0px 2px 20px rgba(105, 66, 220, 0.25)" }}
        color=""
        elevation={0}
        position="sticky"
      >
        <Container>
          <Toolbar disableGutters>
            <Box flexGrow={1} justifyContent="center">
              <Typography component="a" href="/">
                <img width={100} src={logo} alt="brightern logo" />
              </Typography>
            </Box>
            <Box
              flexGrow={1}
              justifyContent={"space-evenly"}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <StyledTabs
                value={currentLocation}
                onChange={(e, tab) => handleTabChange(tab)}
                variant="fullWidth"
                scrollButtons="auto"
              >
                {LINKS.map((link, idx) => {
                  return (
                    <StyledTab
                      key={idx}
                      disabled={link.disabled}
                      label={
                        <Typography
                          fontWeight={500}
                          color="inherit"
                          sx={{ textDecoration: "none", position: "relative" }}
                        >
                          {link.name}
                          {link.disabled && (
                            <Chip
                              sx={{
                                fontSize: 10,
                                height: 15,
                                p: 0,
                                position: "absolute",
                                right: "50%",
                                top: "70%",
                                transform: "translate(50%, 50%)",
                                backgroundColor: "#FF00000F",
                              }}
                              label="Coming Soon"
                              size="small"
                              color="error"
                              variant="outlined"
                            />
                          )}
                        </Typography>
                      }
                    />
                  );
                })}
              </StyledTabs>
            </Box>
            {/* <Box display={{ xs: "none", md: "flex" }}>
              {user ? (
                <IconButton onClick={toggleDrawer}>
                  <Avatar src={user?.photoURL} />
                </IconButton>
              ) : (
                <Button color="primary">Login/Signup</Button>
              )}
            </Box> */}
            <Box display={{ xs: "flex", md: "none" }}>
              <IconButton onClick={toggleDrawer}>
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          // add a function when drawer is open
          onOpen={() => {}}
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Box sx={{ width: 300 }} role="presentation">
            <List>
              {LINKS.map((link, idx) => {
                return (
                  <ListItem
                    key={idx}
                    button
                    disabled={link.disabled}
                    component="a"
                    href={`/${link.route}`}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          {link.name}
                          {link.disabled && (
                            <Chip
                              sx={{ fontSize: 10, height: 18, p: 0, ml: 1 }}
                              label="Coming Soon"
                              size="small"
                              color="error"
                              variant="outlined"
                            />
                          )}
                        </>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            {/* <List>
              {user ? (
                <>
                  <ListItem button component="a" href="/profile">
                    <ListItemIcon>
                      <Avatar src={user.photoURL} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        firstName[0].toUpperCase() +
                        firstName.substring(1).toLowerCase()
                      }
                      secondary="You profile settings"
                    />
                  </ListItem>
                  <ListItem button onClick={() => {}}>
                    <ListItemIcon>
                      <LogoutRounded />
                    </ListItemIcon>
                    <ListItemText primary="Sign Out" />
                  </ListItem>
                </>
              ) : (
                <ListItem button onClick={() => {}}>
                  <ListItemIcon>
                    <LoginRounded />
                  </ListItemIcon>
                  <ListItemText primary="Sign In" />
                </ListItem>
              )}
            </List> */}
          </Box>
        </SwipeableDrawer>
      </AppBar>
      <Box
      // display={{ xs: "none", md: "flex" }}
      >
        <Fab
          color="primary"
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
          onClick={toggleTheme}
        >
          {mode === LIGHT_THEME_MODE ? <DarkMode /> : <LightMode />}
        </Fab>
      </Box>
    </>
  );
}
