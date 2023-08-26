/* eslint-disable react/prop-types */
const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

import {
    setSearchTerm,
    clearSearchTerm
} from './searchTermSlice';

export const SearchTerm = (props) => {
    const { searchTerm, dispatch } = props;

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div id="search-container">
            <img src={searchIconUrl} alt="search icon" id="search-icon" />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search Recipes"
            />
            {
                searchTerm.length > 0 && (
                    <button
                        onClick={onClearSearchTermHandler}
                        type="button"
                        id="search-clear-button"
                    >
                        <img src={clearIconUrl} alt="clear search icon" id="search-clear-icon" />
                    </button>
                )
            }
        </div>
    );
};