import store from '@/redux/store';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Preloader } from './components';
import { AppContainer } from './styled-components';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';
import { ParallaxProvider } from 'react-scroll-parallax';

// Routes
const Home = lazy(() => import('@/pages/Home/Home'));
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const Login = lazy(() => import('@/pages/Login/Login'));
const Register = lazy(() => import('@/pages/Register/Register'));

const App = () => {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <AppContainer className="App">
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
            <Suspense fallback={<Preloader />}>
              <Provider store={store}>
                <BrowserRouter>
                  <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`dashboard/*`} element={<Dashboard />} />
                    <Route path={`login`} element={<Login />} />
                    <Route path={`register`} element={<Register />} />
                  </Routes>
                </BrowserRouter>
              </Provider>
            </Suspense>
          </SnackbarProvider>
        </AppContainer>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

export default App;
