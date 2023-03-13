import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define the menu slice
const menuSlice = createSlice({
  name: 'MenuState',
  initialState: {
    isContextMenuOpen: true,
  },
  reducers: {
    openMenu: state => {
      state.isContextMenuOpen = true
    },
    closeMenu: state => {
      state.isContextMenuOpen = false
    }
  }
});

// Define the user slice
const SectionMenu = createSlice({
  name: 'SectionMenu',
  initialState: {
    isSectionMenuOpen: true,
  },
  reducers: {
    openSectionMenu: state => {
      state.isSectionMenuOpen = true
    },
    closeSectionMenu: state => {
      state.isSectionMenuOpen = false
    }
  }
});

// Combine the slices into a single reducer
const rootReducer = {
  menu: menuSlice.reducer,
  user: SectionMenu.reducer,
};

// Create the store with the combined reducer
const store = configureStore({
  reducer: rootReducer,
});

// Export the slices' actions and types
export const { openMenu, closeMenu } = menuSlice.actions;
export const { openSectionMenu, closeSectionMenu, } = SectionMenu.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;