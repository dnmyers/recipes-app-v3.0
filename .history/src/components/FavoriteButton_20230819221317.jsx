export default function FavoriteButon({ children, onClickHandler, icon }) {
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            <img className="heart-icon" alt="" src={icon} />
            {children}
        </button>
    );
}