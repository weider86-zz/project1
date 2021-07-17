import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const StarWars = (): JSX.Element => {
  const { isLoading, error, data } = useQuery('fetchLuke', () =>
    axios('http://swapi.dev/api/people/1/')
  );
  return (
    <div>
      <h2>React Query example with star wars API</h2>
      {error && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};
export { StarWars };
