import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        },
        clearSearchTerm: () => {
            return '';
        }
    }
}

export const searchTermSlice = createSlice(options);

export const selectSearchTerm = state => state.searchTerm;