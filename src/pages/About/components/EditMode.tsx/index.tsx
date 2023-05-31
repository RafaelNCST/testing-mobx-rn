import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { BackGroundScreen, ModalWarningTwo } from '@components';
import {
  Content,
  Header,
  ButtonEdit,
  ContainerEditButtons,
  TextContent,
  TextWhite,
  InputHeader,
} from './styles';
import { GET_PHRASE } from '../../../../lib/axios';

import { UseTodoContext } from '@contexts/todoContext/useTodoContext';
import { ModeInterface } from '../../types/ModesType';

export const EditMode = ({
  name,
  isLoading,
  setIsLoading,
  setEditMode,
  warningEdit,
  idUser,
  setWarningEdit,
  phrase,
}: ModeInterface) => {
  const { TodoStore } = UseTodoContext();

  const [category, setCategory] = useState('');

  const [nameInputMode, setNameInputMode] = useState(name);
  const [newPhrase, setNewPhrase] = useState(phrase);

  const handleGetPhrase = async () => {
    setNewPhrase('');
    setIsLoading(true);
    try {
      const response = await GET_PHRASE(category);
      setNewPhrase(await response?.data[0]?.quote);
      console.log('Dentro:', await response?.data[0]?.quote);
      setIsLoading(false);
      setCategory('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeText = (text: string) => {
    setNameInputMode(text);
  };

  useEffect(() => {
    if (nameInputMode !== name || newPhrase !== phrase) {
      setEditMode(prev => ({ ...prev, changes: true }));
    } else {
      setEditMode(prev => ({ ...prev, changes: false }));
    }
  }, [nameInputMode, newPhrase]);

  useEffect(() => {
    if (category.length > 1) {
      handleGetPhrase();
    }
  }, [category]);

  const onAcceptWarningEdit = () => {
    TodoStore.selectPhrase(idUser!, newPhrase!);
    TodoStore.changeName(idUser!, nameInputMode);
    setEditMode({ changes: false, active: false });
  };

  console.log(newPhrase);

  return (
    <BackGroundScreen>
      <Header>
        <InputHeader placeholder="Digite um nome" onChangeText={handleChangeText} value={nameInputMode} />
      </Header>
      <Content>
        <ContainerEditButtons>
          <ButtonEdit onPress={() => setCategory('happiness')} disabled={isLoading}>
            <TextWhite>Felicidade</TextWhite>
          </ButtonEdit>
          <ButtonEdit onPress={() => setCategory('success')} disabled={isLoading}>
            <TextWhite>Sucesso</TextWhite>
          </ButtonEdit>
          <ButtonEdit onPress={() => setCategory('love')} disabled={isLoading}>
            <TextWhite>Amor</TextWhite>
          </ButtonEdit>
          <ButtonEdit onPress={() => setCategory('courage')} disabled={isLoading}>
            <TextWhite>Coragem</TextWhite>
          </ButtonEdit>
        </ContainerEditButtons>
        {!!newPhrase && <TextContent>{newPhrase}</TextContent>}
        {!newPhrase && <ActivityIndicator size={40} />}
      </Content>

      <ModalWarningTwo
        onAcceptAction={onAcceptWarningEdit}
        changeWarningState={setWarningEdit}
        isOpenWarning={warningEdit}
        message="Há mudanças feitas, deseja descartá-las?"
      />
    </BackGroundScreen>
  );
};
