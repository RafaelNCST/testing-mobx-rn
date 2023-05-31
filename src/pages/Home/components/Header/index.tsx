import React, { useState, Dispatch, SetStateAction } from 'react';
import 'react-native-get-random-values';

import { ButtonAddName, ContainerInput, InputName } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { v4 as uuidv4 } from 'uuid';

import { UseTodoContext } from '@contexts/todoContext/useTodoContext';

interface HeaderProps {
  changeMessage: Dispatch<SetStateAction<string>>;
  changeWarningState: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ changeWarningState, changeMessage }: HeaderProps) => {
  const {
    TodoStore: { addItem },
  } = UseTodoContext();

  const [inputName, setInputName] = useState('');

  const handleChangeInputName = (text: string) => {
    setInputName(text);
  };

  const handleClickAddToDoItem = () => {
    try {
      const item = {
        id: uuidv4(),
        name: inputName,
        state: false,
        phrase: '',
      };
      addItem(item);
      setInputName('');
    } catch (error) {
      switch ((error as Error).message) {
        case 'Nome não pode ser repetido':
          changeMessage('Este nome já existe');
          break;
        case 'Nome Inválido, use apenas letras':
          changeMessage('Digite somente Letras e números');
          break;
        default:
          changeMessage('Um erro ocorreu, tente novamente mais tarde');
          break;
      }
      changeWarningState(true);
    }
  };

  return (
    <ContainerInput>
      <InputName
        accessibilityHint="Digite um Nome"
        placeholder="Digite um nome"
        onChangeText={handleChangeInputName}
        value={inputName}
      />
      <ButtonAddName
        onPress={handleClickAddToDoItem}
        accessibilityHint="Adicionar Nome"
        accessibilityLabel="Adicionar"
        disabled={inputName.length === 0}>
        <Icon name="add" size={30} color="green" />
      </ButtonAddName>
    </ContainerInput>
  );
};
