import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { queryClient } from './ClientProvider';
import { About } from './components/About';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { StarWars } from './components/StarWars/StarWars';
import { Users } from './components/Users';
import { Wrapper } from './components/Wrapper';
import { GlobalStyle } from './globalStyle';
import { UserProvider } from './providers/User';

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
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/starwars'>StarWars</Link>
              </li>
            </ul>
          </nav>
          <UserProvider>
            <Wrapper>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/users' exact component={Users} />
              <Route path='/starwars' exact component={StarWars} />
            </Wrapper>
          </UserProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </Router>
  );
};

export { App };
