import { useEffect } from 'react';

import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice';
import { loadData } from './allRecipesSlice';

import FavoriteButton from '../../components/FavoriteButton';
import Recipe from '../../components/Recipe';

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';