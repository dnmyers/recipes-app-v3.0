/* eslint-disable react/prop-types */
import { AllRecipes } from '../features/allRecipes/AllRecipes';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes';

import './App.css';

export function App(props) {
	const { state, dispatch } = props;

	const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
	const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

	return (
		<main>
			<section>
				<SearchTerm
					searchTerm={state.searchTerm}
					dispatch={dispatch}
				/>
			</section>
			<section>
				<h3>Favorite Recipes</h3>
				<FavoriteRecipes
					favoriteRecipes={visibleFavoriteRecipes}
					dispatch={dispatch}
				/>
			</section>
			<hr />
			<section>
				<h2>All Recipes</h2>
				<AllRecipes
					allRecipes={visibleAllRecipes}
					dispatch={dispatch}
				/>
			</section>
		</main>
	);
}

/* Utility Helpers */
function getFilteredRecipes(recipes, searchTerm) {
	return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}