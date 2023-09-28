import { Todo } from '../types/todo';
import todoData from './todo.json';

export const fetchTodos = async (): Promise<Todo[]> => {
  // Simply return the imported data
  return todoData as Todo[];
};
