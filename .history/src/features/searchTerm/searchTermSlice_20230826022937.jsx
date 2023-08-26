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

export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    };
}

const initialSearchTerm = '';
export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload
        case 'searchTerm/clearSearchTerm':
            return ''
        default:
            return searchTerm;
    }
}

export const selectSearchTerm = state => state.searchTerm;