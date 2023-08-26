import { createStore, combineReducers } from 'redux';

import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

// Can declare reducers and use in combineReducers(reducers)
// function in createStore function or can declare Reducers
// in combineReducers function like uncommented code below
// const reducers = {
//     allRecipes: allRecipesReducer,
//     favoriteRecipes: favoriteRecipesReducer,
//     searchTerm: searchTermReducer,
// };

export const store = createStore(
    combineReducers({
        allRecipes: allRecipesReducer,
        favoriteRecipes: favoriteRecipesReducer,
        searchTerm: searchTermReducer,
    })
);