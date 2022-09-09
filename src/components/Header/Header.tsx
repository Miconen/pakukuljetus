import "./Header.scss";

function Header() {
    return (
        <header>
            <div className="container">
                <section>
                    <h1>Heading text</h1>
                    <p>Longer example text with word wrapping.</p>
                </section>
                <div className="bg__box1" />
                <div className="bg__box2" />
            </div>
        </header>
    );
}

export default Header;
