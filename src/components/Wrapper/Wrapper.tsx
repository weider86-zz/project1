import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  color: #3d3d3d;
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

const Wrapper: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export { Wrapper };
