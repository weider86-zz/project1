import React from 'react';
import styled from 'styled-components';
import packageJson from '../../../package.json';

export const Container = styled.header`
  align-items: center;
  background-color: #2c2c2c;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  height: 64px;
  width: 100%;
  h1 {
    font-size: 14px;
    margin-right: 8px;
  }
  h2 {
    color: tomato;
    font-size: 14px;
  }
  h4 {
    color: $ffff00;
    text-align: right;
  }
`;

const Header = (): JSX.Element => (
  <Container>
    <h1>{`{ ${packageJson.name} }`}</h1>
    <h2>{packageJson.description}</h2>
    <h4>v{packageJson.version}</h4>
  </Container>
);

export { Header };
