import React from 'react';
import { StatusBar } from 'react-native';
import { TodoProvider } from './src/contexts/todoContext';
import { Routes } from './src/routes';

export const App = () => {
  return (
    <>
      <TodoProvider>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </TodoProvider>
    </>
  );
};
