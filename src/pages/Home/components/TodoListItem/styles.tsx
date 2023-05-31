import styled from 'styled-components/native';
import { FunctionComponent } from 'react';
import { Text, TouchableOpacityProps, TouchableHighlight } from 'react-native';

export const ContainerItem: typeof TouchableHighlight = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  background-color: wheat;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextItem: typeof Text = styled.Text`
  color: black;
`;

interface CheckBoxProps {
  backgroundColor: string;
}

export const CheckBox: FunctionComponent<CheckBoxProps & TouchableOpacityProps> = styled.TouchableOpacity`
  border-radius: 4px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  height: 25px;
  width: 25px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  justify-content: center;
  align-items: center;
`;
