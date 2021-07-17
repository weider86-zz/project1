import React from 'react';
import { users as usersMock } from '../../mocks';

const Users = (): JSX.Element => (
  <div>
    <div>
      <h2>Users</h2>
    </div>
    <div>
      <ul>
        {usersMock.map(({ name, email }) => (
          <li key={`${name} - ${email}`}>{`${name} - ${email}`}</li>
        ))}
      </ul>
    </div>
  </div>
);

export { Users };
