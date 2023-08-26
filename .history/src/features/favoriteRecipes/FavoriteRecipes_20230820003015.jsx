import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const unfavoriteIconURL = "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

// Import removeRecipe from favoriteRecipesSlice.js
import { removeRecipe } from "../favoriteRecipes/favoriteRecipesSlice";

export const FavoriteRecipes = (props) => {
    const { favoriteRecipes, dispatch } = props;

    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };

    // Check to see if favoriteRecipes is isEmpty
    const isEmpty = favoriteRecipes.length === 0;
    if(isEmpty) {
        return (
            <div className="recipes-container">
                <p> Choose Your Favorite Recipes! </p>
            </div>
        )
    }

    return (
        <div className="recipes-container">
            {
                favoriteRecipes.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe.id}>
                        <FavoriteButton
                            onClickHandler={() => onRemoveRecipeHandler(recipe)}
                            icon={unfavoriteIconURL}
                        >
                            Remove Favorite
                        </FavoriteButton>
                    </Recipe>
                ))
            }
        </div>
    );
}+