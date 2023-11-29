import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//APi request function with thunk
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
});

//create slice(redux logic)
const listSlice = createSlice({
  name: "list",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
  reducers: {
    addTodo(state, action) {
      state.isLoading = true;
      state.data = [action.payload, ...state.data];
      state.isLoading = false;
    },
    deleteTodo(state, action) {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    editTodo(state, action) {},
  },
});

export const { addTodo, deleteTodo, editTodo } = listSlice.actions;

export default listSlice.reducer;
