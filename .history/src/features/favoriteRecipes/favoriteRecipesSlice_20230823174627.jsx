import { selectSearchTerm } from "../searchTerm/searchTermSlice";

const initialFavoriteRecipes = [];
export const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
    switch (action.type) {
        case 'favoriteRecipes/addRecipe':
            return [...favoriteRecipes, action.payload];
        case 'favoriteRecipes/removeRecipe':
            return favoriteRecipes.filter(recipe => {
                return recipe.id !== action.payload.id
            });
        default:
            return favoriteRecipes;
    }
};

export const addRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/addRecipe',
        payload: recipe
    };
}

export const removeRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/removeRecipe',
        payload: recipe
    };
}

export const selectFavoriteRecipes = state => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = state => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return favoriteRecipes.filter(recipe =>)
}