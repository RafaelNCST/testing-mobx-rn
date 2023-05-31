import React from 'react';
import { TodoItemProps } from '@pages/Home/@types/TodoListItem';
import { ContainerItem, TextItem, CheckBox } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UseTodoContext } from '@contexts/todoContext/useTodoContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@routes/types';

const colorsToggle = {
  active: '#589958',
  inactive: '#ffff',
};

export const TodoListItem = ({ id, name, state }: TodoItemProps) => {
  const { TodoStore } = UseTodoContext();

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const handleToggleChoosedOption = () => {
    TodoStore.selectOne(id);
  };

  const handleNavigation = () => {
    navigate('About', { id: id });
  };

  return (
    <ContainerItem onPress={handleNavigation} activeOpacity={0.6} underlayColor="#DDDDDD">
      <>
        <TextItem>{name}</TextItem>
        <CheckBox
          onPress={handleToggleChoosedOption}
          backgroundColor={state ? colorsToggle.active : colorsToggle.inactive}>
          <Icon name="check" size={20} color="white" />
        </CheckBox>
      </>
    </ContainerItem>
  );
};
