import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import LandingPage from '../pages/LandingPage';
import ListPage from '../pages/ListPage';
import RollingPage from '../pages/RollingPage';
import RollingToBgPage from '../pages/RollingToBgPage';
import RollingToMsgPage from '../pages/RollingToMsgPage';
import { lightTheme, darkTheme } from '../styles/theme';

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
          <Route
            path="/"
            element={<LandingPage theme={theme ? 'light' : 'dark'} />}
          />
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

const ToggleTheme = styled.button`
  position: fixed;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 50px;
  background: ${({ theme }) =>
    theme.mode === 'light' ? '#ebebeb' : '#242424'};
  border-radius: 200px;
  box-shadow:
    inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  &::after {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    left: 10px;
    background: ${({ theme }) =>
      theme.mode === 'light'
        ? 'linear-gradient(180deg, #ffcc89, #d8860b)'
        : 'linear-gradient(180deg, #777, #3a3a3a)'};
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transform: translateX(
      ${({ theme }) => (theme.mode === 'light' ? '0px' : '130%')}
    );
    transition: all 0.3s ease;
  }
`;
