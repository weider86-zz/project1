import React from 'react';
import styled from 'styled-components';
import { StarWars } from '../StarWars/StarWars';

export const Container = styled.header`
  align-items: center;
  color: #3d3d3d;
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

const Wrapper = (): JSX.Element => (
  <Container>
    <StarWars />
  </Container>
);

export { Wrapper };
