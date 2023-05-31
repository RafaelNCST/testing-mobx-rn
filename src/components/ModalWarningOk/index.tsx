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
} from './styles';

interface ModalWarningProps {
  isOpenWarning: boolean;
  changeWarningState: Dispatch<SetStateAction<boolean>>;
  message: string;
}

export const ModalWarningOk = ({ isOpenWarning, changeWarningState, message }: ModalWarningProps) => {
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
            <Button onPress={() => changeWarningState(false)}>
              <TextWhite accessibilityLabel='OK' accessibilityHint="Fecha Modal De Aviso">OK</TextWhite>
            </Button>
          </Body>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};
