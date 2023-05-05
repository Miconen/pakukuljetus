import Container from "../Container/Container";
import { RxHamburgerMenu } from 'react-icons/rx';
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="flex justify-center w-full py-3 bg-white sticky top-0">
            <Container className="items-center justify-between" horizontal={true}>
                <img className="justify-items-start" src="https://www.pakukuljetus.net/wp-content/uploads/2021/04/pakukuljetus.webp" alt="Pakukuljetus logo" />
                <RxHamburgerMenu className="w-8 h-auto"/>
            </Container>
        </nav>
    );
}

export default Navbar;
