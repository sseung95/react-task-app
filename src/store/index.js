import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push({
        id: new Date().getTime().toString(),
        value: action.payload,
      });
    },
    editItem(state, action) {},
    removeItem(state, action) {},
    removeAllItem(state) {
      state.items = [];
    },
  },
});

const store = configureStore({
  reducer: taskSlice.reducer,
});

export const taskActions = taskSlice.actions;
export default store;
