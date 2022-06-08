import { configureStore } from '@reduxjs/toolkit';

import taskSlice from './task-slice';
import alertSlice from './alert-slice';

const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
