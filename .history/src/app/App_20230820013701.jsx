/* eslint-disable react/prop-types */
import { AllRecipes } from '../features/allRecipes/AllRecipes';
import { SearchTerm } from '../features/searchTerm/SearchTerm';

import './App.css';

function App(props) {
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
	)
}

function getFilteredRecipes(recipes, searchTerm) {
	return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
