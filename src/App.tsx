import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';
import { Preloader } from './components';
import { AppContainer } from './styled-components';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppRouter } from './routes';
import { auth } from './services';
import { modifyUser } from '@/redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const expToken = (await user?.getIdTokenResult())?.claims.exp ?? 0;
      const currentDate = Math.round(Date.now() / 1000);
      if (expToken < currentDate && expToken > 0) {
        dispatch(modifyUser({ accessToken: user?.refreshToken }));
      }
    });
  }, [dispatch]);

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <AppContainer className="App">
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
            <Suspense fallback={<Preloader />}>
              <BrowserRouter>
                <AppRouter />
              </BrowserRouter>
            </Suspense>
          </SnackbarProvider>
        </AppContainer>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

export default App;
