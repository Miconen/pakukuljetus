import "./Card.scss";

function Card() {
    return (
        <li className="card">
            <div className="card__image" />
            <div className="card__infobox">
                <h3 className="card__heading">Card heading</h3>
                <p className="card__info">
                    Card description and info box with a lot of text.
                </p>
            </div>
        </li>
    );
}

export default Card;
