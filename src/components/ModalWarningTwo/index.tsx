import React, { Dispatch, useState, SetStateAction } from 'react';
import { Modal } from 'react-native';
import {
  Content,
  Header,
  ModalBody,
  ModalContent,
  Body,
  Button,
  TextTitle,
  TextWhite,
  TextBlack,
  ContainerButtons,
} from './styles';

interface ModalWarningProps {
  isOpenWarning: boolean;
  changeWarningState: Dispatch<SetStateAction<boolean>>;
  message: string;
  onAcceptAction: () => void;
}

export const ModalWarningTwo = ({
  isOpenWarning,
  changeWarningState,
  message,
  onAcceptAction,
}: ModalWarningProps) => {
  return (
    <Modal animationType="fade" transparent visible={isOpenWarning}>
      <ModalBody>
        <ModalContent>
          <Header>
            <TextTitle>Aviso</TextTitle>
          </Header>
          <Body>
            <Content>
              <TextBlack>{message}</TextBlack>
            </Content>
            <ContainerButtons>
              <Button onPress={() => onAcceptAction()}>
                <TextWhite accessibilityLabel="Aceitar" accessibilityHint="Aceita a ação da mensagem">
                  Sim
                </TextWhite>
              </Button>
              <Button onPress={() => changeWarningState(false)}>
                <TextWhite accessibilityLabel="Negar" accessibilityHint="Nega a ação da mensagem">
                  Não
                </TextWhite>
              </Button>
            </ContainerButtons>
          </Body>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};
