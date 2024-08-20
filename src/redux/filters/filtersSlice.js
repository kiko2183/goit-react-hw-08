import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',  // початкове значення фільтра
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.filter; // Експортуємо селектор
export const filtersReducer = filtersSlice.reducer;
