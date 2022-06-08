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
    removeItem(state, action) {
      // items에 존재하지 않으면 중지
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (!existingItem) return;

      // 해당하는 item 제외한 배열 반환
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
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
