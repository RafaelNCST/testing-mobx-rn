import React from 'react';
import { ContainerContent, ContainerEmptyList, TextEmpty } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const EmptyList = () => {
  return (
    <ContainerEmptyList>
      <ContainerContent>
        <Icon name='warning' size={50} color="gray" />
        <TextEmpty>Lista Vazia</TextEmpty>
      </ContainerContent>
    </ContainerEmptyList>
  );
};
