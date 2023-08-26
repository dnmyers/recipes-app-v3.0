import { createStore } from 'redux';

import allRecipesData from "./data";

/*******************
 * Action Creators *
 *******************/
// Dispatched when the user clicks on the heart icon of
// a recipe in the 'All Recipes' section.
// Sends the recipe object to the store.
const addRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/addRecipe',
        payload: recipe
    }
}

// Dispatched when the user clicks on the broken heart
// icon of a recipe in the "Favorite Recipes" section.
// Sends the recipe object to the store.
const removeRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/removeRecipe',
        payload: recipe
    }
}

// Dispatched when the user types in the search input.
// Sends the search term to the store.
export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    };
}

// Dispatched when the user presses the clear search button.
const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    };
}

// Dispatched when the user first opens the application.
// Sends the allRecipesData array to the store.
const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }
}

/****************
 *   Reducers   *
 ****************/

const initialAllRecipes = [];

const allRecipesReducer = ( allRecipes = initialAllRecipes, action ) => {
    switch(action.type) {
        case 'allRecipes/loadData': {
            return action.payload;
        }
        default:
            return allRecipes;
    }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch(action.type) {
        case 'searchTerm/setSearchTerm': {
            return action.payload;
        }
        case 'searchTerm/clearSearchTerm': {
            return '';
        }
        default:
            return searchTerm;
    }
}


// Create the initial state for this Reducer
const initialFavoriteRecipes = [];

const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
    switch(action.type) {
        case 'favoriteRecipes/addRecipe': {
            return [
                ...favoriteRecipes,
                action.payload
            ]
        }
        case 'favoriteRecipes/removeRecipe': {
            return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id);
        }
        default:
            return favoriteRecipes;
    }
}