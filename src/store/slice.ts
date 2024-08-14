import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define a type for the slice state
export interface RootSlice {
  toggleSidebar: boolean;
}

// Define the initial state using that type
const initialState: RootSlice = {
  toggleSidebar: false,
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
    hideSidebarOutSideClick: (state) => {
      state.toggleSidebar = false;
    }
  },
});

export const { toggleSidebar, hideSidebarOutSideClick } = rootSlice.actions

export const selectSidebarToggle = (state: RootState) =>
  state.root.toggleSidebar;

export default rootSlice.reducer;
