import React, { FunctionComponent, createContext } from 'react';
import { users } from '../mocks';

const UserContext = createContext(users);

const UserProvider: FunctionComponent = ({ children }) => {
  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
