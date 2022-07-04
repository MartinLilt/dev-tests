import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITodo from '../interface/interface';

type TodosState = {
  list: ITodo[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: payload,
        completed: false,
      });
    },
    toggleCompleted(state, { payload }: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    removeTodo(state, { payload }: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, toggleCompleted, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
