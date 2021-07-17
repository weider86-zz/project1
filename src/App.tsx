import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { queryClient } from './ClientProvider';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { GlobalStyle } from './globalStyle';
import { StarWars } from './components/StarWars/StarWars';

const Home = () => <>Home page</>;
const Users = () => <>Users page</>;

const App = (): JSX.Element => {
  return (
    <Router>
      <div>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Header />
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/starwars'>StarWars</Link>
              </li>
            </ul>
          </nav>
          <Wrapper>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={Users} />
            <Route path='/starwars' exact component={StarWars} />
          </Wrapper>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </Router>
  );
};

export { App };
