import styled from 'styled-components/native';
import { Text } from 'react-native';

export const ContainerEmptyList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextEmpty: typeof Text = styled.Text`
  color: black;
`;

