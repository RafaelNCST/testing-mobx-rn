import { useContext } from "react";
import { TodoContext } from ".";

export const UseTodoContext = () => {
  if (!TodoContext) {
    throw "Não é possível usar esse metodo fora do useTodoProvider.";
  }

  return useContext(TodoContext);
};
