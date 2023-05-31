import styled from 'styled-components/native';
import { TextInput, TouchableOpacity } from 'react-native';

export const ContainerInput = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
`;

export const InputName: typeof TextInput = styled.TextInput`
  background-color: white;
  border-style: solid;
  border-width: 1px;
  flex: 1;
  border-color: black;
  height: 50px;
  border-radius: 8px;
  margin-right: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ButtonAddName: typeof TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  margin-left: 5px;
  border-radius: 8px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
