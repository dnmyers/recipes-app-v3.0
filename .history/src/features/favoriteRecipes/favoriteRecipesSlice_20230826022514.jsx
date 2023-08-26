import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

const options = {
    name: 'favoriteRecipes',
    initialState: [],
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload);
        },
        removeRecipe: (state, action) => {
            return state.filter(recipe => recipe.id !== action.payload.id);
        }
    }
};

export const favoriteRecipesSlice = createSlice(options);

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;
export default favoriteRecipesSlice.reducer;

// console.log(favoriteRecipesSlice.name);

// console.group("favoriteRecipesSlice.actions");
// for(let action in favoriteRecipesSlice.actions) {
//     console.log(action);
// }
// console.groupEnd();

// console.log(favoriteRecipesSlice);