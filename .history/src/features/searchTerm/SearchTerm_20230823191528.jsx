/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

import {
    setSearchTerm,
    clearSearchTerm,
    selectSearchTerm
} from './searchTermSlice';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = () => {
    const searchTerm = useSelector(selectSearchTerm);

    const onSearchTermChangeHandler = ({ target }) => {
        const userInput = target.value;
        // dispatch(setSearchTerm(target.value));
    };

    const onClearSearchTermHandler = () => {
        // dispatch(clearSearchTerm());
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