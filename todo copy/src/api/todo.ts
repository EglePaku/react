import axios from "axios";
import {Todo} from "../types/todo";

const API = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await axios.get(API);
    return response.data;
}