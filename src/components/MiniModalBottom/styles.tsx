import styled from 'styled-components/native';
import { FunctionComponent } from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';

export const ModalContent = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #cd5f5f;
  width: 100%;
  height: 50px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextWhite: typeof Text = styled.Text`
  font-size: 16px;
  color: white;
  line-height: 16px;
  margin-left: 8px;
  margin-top: 5px;
`;

export const Button: typeof TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerItem = styled.View`
  width: 100%;
  height: 50px;
  background-color: wheat;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  padding-left: 20px;
  padding-right: 20px;
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

export const ContainerCheckBox = styled.View`
  position: absolute;
  left: 0px;
  padding-left: 10px;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

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
