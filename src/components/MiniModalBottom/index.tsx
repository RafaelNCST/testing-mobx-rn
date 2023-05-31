import React, { useEffect, useState } from 'react';
import { ModalContent, Button, TextWhite, CheckBox, ContainerCheckBox } from './styles';
import IconCheckBox from 'react-native-vector-icons/MaterialIcons';
import { UseTodoContext } from '@contexts/todoContext/useTodoContext';
import { TodoItemProps } from '@pages/Home/@types/TodoListItem';

interface ModalWarningProps {
  isOpenModal: boolean;
  message: string;
  onClickAction: () => void;
  isExistCheckBox?: boolean;
  Icon?: () => JSX.Element;
  allSelectedItens: TodoItemProps[];
}

const colorsToggle = {
  active: '#589958',
  inactive: '#ffff',
};

export const MiniModalBottom = ({
  isOpenModal,
  message,
  isExistCheckBox = false,
  onClickAction,
  Icon,
  allSelectedItens,
}: ModalWarningProps) => {
  const { TodoStore } = UseTodoContext();

  const [stateAllSelects, setStateAllSelects] = useState(false);

  const handleToggleChoosedOption = () => {
    const newState = !stateAllSelects;
    setStateAllSelects(newState);
    TodoStore.selectAll(newState);
  };

  useEffect(() => {
    if (allSelectedItens.length !== TodoStore.todoList.length) {
      setStateAllSelects(false);
    } else {
      setStateAllSelects(true);
    }
  }, [allSelectedItens]);

  return (
    <>
      {isOpenModal && (
        <ModalContent>
          {isExistCheckBox && (
            <ContainerCheckBox>
              <CheckBox
                onPress={handleToggleChoosedOption}
                backgroundColor={stateAllSelects ? colorsToggle.active : colorsToggle.inactive}>
                <IconCheckBox name="check" size={20} color="white" />
              </CheckBox>
              <TextWhite onPress={handleToggleChoosedOption}>Todos</TextWhite>
            </ContainerCheckBox>
          )}
          <Button onPress={onClickAction}>
            {Icon && Icon()}
            <TextWhite>{message}</TextWhite>
          </Button>
        </ModalContent>
      )}
    </>
  );
};
