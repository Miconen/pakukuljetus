import "./Cards.scss";
import Card from "./Card.jsx";

function Cards() {
    return (
        <div className="container">
            <section>
                <h2>Cards</h2>
                <ul className="cards">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </ul>
            </section>
        </div>
    );
}

export default Cards;
