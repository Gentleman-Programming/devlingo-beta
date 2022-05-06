import store from '@/redux/store';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { Preloader } from './components';
import { AppContainer } from './styled-components';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppRouter } from './routes/';

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
                  <AppRouter />
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
