import styled from 'styled-components/native';
import { Text } from 'react-native';

export const TextHeader: typeof Text = styled.Text`
  color: white;
  font-family: RussoOne-Regular;
  font-size: 32px;
`;

export const TextContent: typeof Text = styled.Text`
  color: black;
  width: 90%;
  text-align: center;
`;

export const Header = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  padding-top: 20px;
`;

