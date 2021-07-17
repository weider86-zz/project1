import React, { useContext } from 'react';
import { UserContext } from '../../providers';

const Home = (): JSX.Element => {
  const users = useContext(UserContext);
  const firstUser = users[0];
  const firstUserName = firstUser.name;

  return (
    <div>
      <h2>Welcome to Home</h2>
      <div>{`First user name by context: ${firstUserName}`}</div>
    </div>
  );
};

export { Home };
