import store from '@/redux/store';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { RouteGuard } from './components';
import { AppContainer } from './styled-components';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';
import { Preloader } from './components';

// Routes
const Home = lazy(() => import('@/pages/Home/Home'));
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppContainer className="App">
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
            <Suspense fallback={<Preloader />}>
              <Provider store={store}>
                <BrowserRouter>
                  <Routes>
                    {/* <Route path="/" element={<Navigate to={`dashboard`} />} /> */}
                    {/*  <Route element={<RouteGuard />}>
                    </Route> */}
                    <Route path={`/`} element={<Home />} />
                    <Route path={`dashboard/*`} element={<Dashboard />} />
                  </Routes>
                </BrowserRouter>
              </Provider>
            </Suspense>
          </SnackbarProvider>
        </AppContainer>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
