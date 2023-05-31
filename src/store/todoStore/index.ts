import { makeAutoObservable } from 'mobx';

interface TodoItemInterface {
  id: string;
  name: string;
  state: boolean;
  phrase: string;
}

export class TodoListStore {
  todoList: TodoItemInterface[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem = (todoItem: TodoItemInterface) => {
    const repeteadName = this.todoList.filter(item => todoItem?.name === item.name);

    if (repeteadName.length !== 0) {
      throw new Error('Nome não pode ser repetido');
    }

    const regex = /[\\\|\'"!@#$%¨&*()_\+\-\=`\[{~^\]},<\.>;:\/\?]/;
    const invalidName = regex.test(todoItem.name);

    if (invalidName) {
      throw new Error('Nome Inválido, use apenas letras');
    }

    this.todoList.push(todoItem);
  };

  deleteItem = (selectedItens: TodoItemInterface[]) => {
    const selectedItensIds = selectedItens.map(item => item.id);
    const filteredList = this.todoList.filter(itemList => {
      if (!selectedItensIds.includes(itemList.id)) {
        return itemList;
      }
    });

    this.todoList = filteredList;
  };

  selectOne = (todoID: string) => {
    for (let item of this.todoList) {
      if (todoID === item.id) {
        item.state = !item.state;
      }
    }
  };

  selectAll = (newBoolean: boolean) => {
    for (let item of this.todoList) {
      item.state = newBoolean;
    }
  };

  selectPhrase = (todoID: string, newValue: string) => {
    for (let item of this.todoList) {
      if (todoID === item.id) {
        item.phrase = newValue;
      }
    }
  };

  changeName = (todoID: string, newValue: string) => {
    for (let item of this.todoList) {
      if (todoID === item.id) {
        item.name = newValue;
      }
    }
  };
}
