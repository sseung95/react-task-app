import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  editingItem: null,
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
    editItem(state, action) {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { id: item.id, value: action.payload.value }
          : item
      );

      // 수정하고 난 뒤에는 현재 수정할 것은 모두 마쳤으므로 비워주기
      state.editingItem = null;
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAllItem(state) {
      state.items = [];
    },
    changeEditingItem(state, action) {
      state.editingItem = state.items.find(
        (item) => item.id === action.payload
      );
    },
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
