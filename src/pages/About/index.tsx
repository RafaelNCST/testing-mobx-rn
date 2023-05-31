import React, { useState } from 'react';
import { BackGroundScreen, ModalWarningTwo } from '@components';
import { Button, ContainerButton, ButtonBack } from './styles';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@routes/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { UseTodoContext } from '@contexts/todoContext/useTodoContext';
import { ViewMode } from './components/ViewMode.tsx';
import { EditMode } from './components/EditMode.tsx';
import { observer } from 'mobx-react-lite';

export const About = observer(() => {
  const { params } = useRoute<RouteProp<RootStackParamList>>();
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();

  const { TodoStore } = UseTodoContext();
  const [editMode, setEditMode] = useState({ active: false, changes: false });
  const [isLoading, setIsLoading] = useState(false);
  const [warningEdit, setWarningEdit] = useState(false);
  const [warningDelete, setWarningDelete] = useState(false);

  const actualUserInfos = TodoStore.todoList.filter(item => item.id === params?.id);
  const { name, phrase } = actualUserInfos[0];

  const handleEdit = () => {
    if (editMode?.changes) {
      setWarningEdit(true);
    } else {
      setEditMode(prev => ({ ...prev, active: !prev.active }));
      setWarningEdit(false);
    }
  };

  const handleBackPage = () => {
    if (editMode?.changes) {
      setWarningEdit(true);
    } else {
      goBack();
    }
  };

  const handleAcceptDeleteItem = () => {
    TodoStore.deleteItem(actualUserInfos);
    goBack();
  };

  return (
    <BackGroundScreen>
      <ButtonBack onPress={handleBackPage}>
        <Icon name="arrow-back-ios" size={30} color="white" />
      </ButtonBack>
      {editMode?.active && (
        <EditMode
          name={name}
          phrase={phrase}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setEditMode={setEditMode}
          idUser={params?.id}
          warningEdit={warningEdit}
          setWarningEdit={setWarningEdit}
        />
      )}
      {!editMode?.active && (
        <ViewMode
          name={name}
          phrase={phrase}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setEditMode={setEditMode}
          idUser={params?.id}
          warningEdit={warningEdit}
          setWarningEdit={setWarningEdit}
        />
      )}
      <ContainerButton>
        {!editMode.active && (
          <Button backgroundColor="#b65d5d" disabled={isLoading} onPress={() => setWarningDelete(true)}>
            <Icon name="delete-forever" color="white" size={30} />
          </Button>
        )}
        <Button backgroundColor="#caca6f" disabled={isLoading} onPress={handleEdit}>
          <Icon name="edit" color="white" size={30} />
        </Button>
      </ContainerButton>
      <ModalWarningTwo
        changeWarningState={setWarningDelete}
        isOpenWarning={warningDelete}
        message="Você deseja mesmo excluir esse item?"
        onAcceptAction={handleAcceptDeleteItem}
      />
    </BackGroundScreen>
  );
});
