import React from 'react';
import { Container, ButtonText } from './styles';

const Input: React.FC =({children}) => (
<Container>
  <ButtonText>{children}</ButtonText>
  </Container>
);

export default Input;