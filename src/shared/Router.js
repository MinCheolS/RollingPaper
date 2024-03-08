import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import LandingPage from '../pages/LandingPage';
import ListPage from '../pages/ListPage';
import RollingPage from '../pages/RollingPage';
import RollingToBgPage from '../pages/RollingToBgPage';
import RollingToMsgPage from '../pages/RollingToMsgPage';
import { lightTheme, darkTheme } from '../styles/theme';
import ToggleTheme from '../styles/Common/ThemeToggle.style';

function Router() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const savedThemeMode = localStorage.getItem('themeMode');
    if (savedThemeMode) {
      setTheme(savedThemeMode === 'true');
    }
  }, []);

  const toggleTheme = () => {
    const newThemeMode = !theme;
    setTheme(newThemeMode);
    localStorage.setItem('themeMode', newThemeMode);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage theme={theme} />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/post">
            <Route index element={<RollingToBgPage />} />
            <Route path=":id" element={<RollingPage />} />
            <Route path=":id/message" element={<RollingToMsgPage />} />
          </Route>
        </Routes>
        <ToggleTheme onClick={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default Router;
