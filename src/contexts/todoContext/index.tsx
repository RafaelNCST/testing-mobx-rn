import React, { createContext } from 'react';
import { TodoContextProps, TodoProviderProps } from './types';
import { TodoListStore } from '@store/todoStore';

export const TodoContext = createContext({} as TodoContextProps);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const TodoStore = new TodoListStore();

  return <TodoContext.Provider value={{ TodoStore }}>{children}</TodoContext.Provider>;
};
