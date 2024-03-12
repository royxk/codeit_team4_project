import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './styles/theme';

import Router from './Router';

const queryClient = new QueryClient();

function App() {
  console.log('App');
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
