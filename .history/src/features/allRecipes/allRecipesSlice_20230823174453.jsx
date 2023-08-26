import allRecipesData from '../../data.jsx';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.jsx';

export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    };
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        case 'favoriteRecipes/addRecipe':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case 'favoriteRecipes/removeRecipe':
            return [...allRecipes, action.payload]
        default:
            return allRecipes;
    }
}


export const selectAllRecipes = state => state.allRecipes;
export const selectFilteredAllRecipes = state => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return allRecipes.filter(
        recipe => recipe.name.toLowerCase().includes(
            searchTerm.toLowerCase()
        )
    );
}

// This code is for testing the selectors only.
// const testState = {
//     allRecipes: allRecipesData,
//     searchTerm: 'ch'
// };

// const testSelectAllRecipes = () => {
//     console.group('All Recipes');
//     console.table(selectAllRecipes(testState));
//     console.groupEnd();
// }

// const testSelectFilteredAllRecipes = () => {

//     console.group('Recipes filtered by searchTerm');
//     console.table(selectFilteredAllRecipes(testState));
//     console.groupEnd();
// }

// // Uncomment these to test each selector.
// testSelectAllRecipes();
// testSelectFilteredAllRecipes();