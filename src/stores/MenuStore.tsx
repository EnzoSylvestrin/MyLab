import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'MenuState',
  initialState: {
    isContextMenuOpen: true,
  },
  reducers: {
    open: state => {
      state.isContextMenuOpen = true
    },
    close: state => {
      state.isContextMenuOpen = false
    }
  }
});

export const { open, close } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;