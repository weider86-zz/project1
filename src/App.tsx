import React from 'react';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { GlobalStyle } from './globalStyle';
import { queryClient } from './ClientProvider';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const App = (): JSX.Element => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Header />
        <Wrapper />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export { App };
