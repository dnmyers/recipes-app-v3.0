/* eslint-disable react/prop-types */
import { AllRecipes } from '../features/allRecipes/AllRecipes';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes';

import './App.css';

export function App() {
	return (
		<main>
			<section>
				<SearchTerm />
			</section>
			<section>
				<h3>Favorite Recipes</h3>
				<FavoriteRecipes />
			</section>
			<hr />
			<section>
				<h2>All Recipes</h2>
				<AllRecipes />
			</section>
		</main>
	);
}

/* Utility Helpers */
function getFilteredRecipes(recipes, searchTerm) {
	return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}