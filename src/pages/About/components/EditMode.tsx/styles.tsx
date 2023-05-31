import styled from 'styled-components/native';
import { Text, TextInput, TouchableOpacity } from 'react-native';

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

export const ContainerEditButtons = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const ButtonEdit = styled(TouchableOpacity)`
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #7c7cc9;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const TextWhite = styled.Text`
  color: white;
  font-family: RussoOne-Regular;
  font-size: 16px;
`;

export const InputHeader: typeof TextInput = styled.TextInput`
  color: white;
  font-family: RussoOne-Regular;
  font-size: 16px;
  border: 1px solid black;
  padding-left: 10px;
  padding-right: 10px;
`;
