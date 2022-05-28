import { Container, Paper, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import EventContext, { DEFAULT_EVENTS } from "./context/eventContext";
import ThemeContext, {
  DARK_THEME_MODE,
  DEFAULT_THEME_MODE,
  LIGHT_THEME_MODE,
  saveToLocalStorage,
} from "./context/themeContext";
import UserContext, { DEFAULT_USER_VALUE } from "./context/userContext";
import { blackLogo, iconBlack, iconWhite, whiteLogo } from "./static";
import { darkTheme, lightTheme } from "./theme";
import { Events, Home, Feed } from "./views";
import SummaryView from "./views/summaryView";

export const ContextWrapper = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_USER_VALUE);
  const [events, setEvents] = useState(DEFAULT_EVENTS);
  const [mode, setMode] = useState(DEFAULT_THEME_MODE); // when updating theme using setMode use the exported constant theme variables
  const setThemeMode = (mode) => {
    saveToLocalStorage({ mode });
    setMode(mode);
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider
        value={{
          mode,
          setMode: setThemeMode,
          logo: mode === LIGHT_THEME_MODE ? blackLogo : whiteLogo,
          icon: mode === LIGHT_THEME_MODE ? iconBlack : iconWhite,
          themeModes: {
            LIGHT_THEME_MODE,
            DARK_THEME_MODE,
            DEFAULT_THEME_MODE,
          },
        }}
      >
        <EventContext.Provider value={{ events, setEvents }}>
          <ThemeProvider
            theme={mode === LIGHT_THEME_MODE ? lightTheme : darkTheme}
          >
            {children}
          </ThemeProvider>
        </EventContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="/feed" element={<Feed />} />
      <Route exact path="/summary/:id" element={<SummaryView />} />
      <Route exact path="/design/:id" element={<Events />} />
    </Routes>
  );
};

export default function App() {
  return (
    <ContextWrapper>
      <Router>
        <Navbar />
        <Paper elevation={0}>
          <Container>
            <Routing />
          </Container>
        </Paper>
        <Footer />
      </Router>
    </ContextWrapper>
  );
}
