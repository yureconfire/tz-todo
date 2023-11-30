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
    dataPerPage: 10,
    currentPage: 1,
    isError: false,
    isCompleted: false,
  },
  //Change state with Thunk(async)
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
  //Action functions
  reducers: {
    addTodo(state, action) {
      state.isLoading = true;
      state.data = [action.payload, ...state.data];
      state.isLoading = false;
    },
    deleteTodo(state, action) {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    editTodo(state, action) {
      state.data = state.data.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.value }
          : todo
      );
    },
    completeTodo(state, action) {
      state.data = state.data.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    clearList(state) {
      state.data = [];
    },
    onNavigateNext(state) {
      state.currentPage++;
    },
    onNavigatePrev(state) {
      state.currentPage--;
    },
    onChangeTodosPerpage(state, action) {
      state.dataPerPage = action.payload;
    },
    onClickCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  clearList,
  onNavigateNext,
  onNavigatePrev,
  onChangeTodosPerpage,
  onClickCurrentPage,
} = listSlice.actions;

export default listSlice.reducer;
