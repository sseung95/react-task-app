import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alertMsg: null,
};

const alertSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    changeAlertMsg(state, action) {
      state.alertMsg = {
        className: action.payload.className,
        msg: action.payload.msg,
      };
    },
    removeAlertMsg(state) {
      state.alertMsg = null;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice;
