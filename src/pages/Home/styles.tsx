import styled from 'styled-components/native';
import { FlatList, Modal } from 'react-native';

export const ContainerList = styled.View`
  flex: 1;
  background-color: white;
`;

export const TodoList: typeof FlatList = styled.FlatList`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;