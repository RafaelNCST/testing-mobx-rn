import React, { useEffect } from 'react';
import { BackGroundScreen } from '@components';
import { ActivityIndicator } from 'react-native';
import { Content, Header, TextHeader, TextContent } from './styles';

import { ModeInterface } from '../../types/ModesType';
import { GET_PHRASE } from '@lib/axios';
import { UseTodoContext } from '@contexts/todoContext/useTodoContext';

export const ViewMode = ({ name, phrase, idUser, isLoading, setIsLoading }: ModeInterface) => {
  const { TodoStore } = UseTodoContext();

  const getPhrase = async () => {
    setIsLoading(true);
    try {
      const response = await GET_PHRASE('happiness');
      TodoStore.selectPhrase(idUser!, response?.data[0]?.quote);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (phrase!.length < 1) getPhrase();
  }, []);

  return (
    <BackGroundScreen>
      <Header>
        <TextHeader>{name}</TextHeader>
      </Header>
      <Content>
        {phrase!.length > 0 && <TextContent>{phrase}</TextContent>}
        {!phrase && <ActivityIndicator size={40} />}
      </Content>
    </BackGroundScreen>
  );
};
