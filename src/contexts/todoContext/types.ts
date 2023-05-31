import { TodoListStore } from '@store/todoStore';

export interface TodoProviderProps {
  children: JSX.Element;
}

export interface TodoContextProps {
  TodoStore: TodoListStore;
}
