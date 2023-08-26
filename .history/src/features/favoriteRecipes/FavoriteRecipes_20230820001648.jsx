import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const unfavoriiteIconURL = "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

// Import removeRecipe from favoriteRecipesSlice.js
import { removeRecipe } from "../favoriteRecipes/favoriteRecipesSlice";

export const FavoriteRecipes = (props) => {
    const { favoriteRecipes, dispatch } = props;

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };

    return (
        <div className="recipes-container">
            {
                favoriteRecipes.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe.id}>
                        <FavoriteButton
                            onClickHandler={() => onRemoveRecipeHandler(recipe)}
                            icon={unfavoriiteIconURL}
                        >
                            Remove Favorite
                        </FavoriteButton>
                    </Recipe>
                ))
            }
        </div>
    );
}