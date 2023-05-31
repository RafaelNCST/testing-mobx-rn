import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ContainerList, TodoList } from './styles';
import { BackGroundScreen, ModalWarningOk, MiniModalBottom, ModalWarningTwo } from '@components';

import { TodoListItem, EmptyList, Header } from './components';
import { observer, Observer } from 'mobx-react-lite';

import { UseTodoContext } from '@contexts/todoContext/useTodoContext';

export const Home = observer(() => {
  const { TodoStore } = UseTodoContext();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const selectedItens = TodoStore.todoList.filter(item => item.state);

  const [isOpenError, setIsOpenError] = useState(false);
  const [messageError, setMessageError] = useState('');

  const [isOpenWarning, setIsOpenWarning] = useState(false);

  const handleClickDeleteItens = () => {
    setIsOpenWarning(true);
  };

  const handleConfirmDeleteItens = () => {
    TodoStore.deleteItem(selectedItens);
    setIsOpenWarning(false);
  };

  useEffect(() => {
    if (selectedItens.length !== 0) {
      setIsOpenDeleteModal(true);
    } else {
      setIsOpenDeleteModal(false);
    }
  }, [selectedItens]);

  return (
    <BackGroundScreen>
      <Header changeMessage={setMessageError} changeWarningState={setIsOpenError} />
      <ContainerList>
        <TodoList
          data={TodoStore?.todoList.slice()}
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={({ id }) => String(id)}
          ListEmptyComponent={EmptyList}
          renderItem={({ item }) => {
            return (
              <Observer>
                {() => <TodoListItem id={item?.id} name={item?.name} state={item?.state} />}
              </Observer>
            );
          }}
        />
      </ContainerList>
      <ModalWarningOk
        isOpenWarning={isOpenError}
        changeWarningState={setIsOpenError}
        message={messageError}
      />

      <ModalWarningTwo
        changeWarningState={setIsOpenWarning}
        isOpenWarning={isOpenWarning}
        message={`Você deseja mesmo excluir ${
          selectedItens.length === 1 ? `${selectedItens.length} item` : `${selectedItens.length} itens`
        }`}
        onAcceptAction={handleConfirmDeleteItens}
      />

      <MiniModalBottom
        isOpenModal={isOpenDeleteModal}
        message="Excluir"
        isExistCheckBox={true}
        onClickAction={handleClickDeleteItens}
        allSelectedItens={selectedItens}
        Icon={() => <Icon name="delete" size={20} color="white" />}
      />
    </BackGroundScreen>
  );
});
