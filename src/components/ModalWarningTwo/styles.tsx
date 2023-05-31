import styled from 'styled-components/native';
import { Modal, TouchableOpacity, Text } from 'react-native';

export const ModalBody = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: white;
  width: 90%;
  border-radius: 8px;
`;

export const TextBlack: typeof Text = styled.Text`
  font-size: 14px;
  color: black;
  line-height: 16px;
`;

export const TextWhite: typeof Text = styled.Text`
  font-size: 12px;
  color: white;
  line-height: 16px;
`;

export const TextTitle: typeof Text = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: RussoOne-Regular;
`;

export const Header = styled.View`
  background-color: #447dda;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const Body = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Content = styled.View`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Button: typeof TouchableOpacity = styled.TouchableOpacity`
  height: 30px;
  width: 80px;
  background-color: #447dda;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ContainerButtons = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;
