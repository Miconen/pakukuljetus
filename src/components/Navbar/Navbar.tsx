import Container from "../Container/Container";
import { Menu as MenuIcon } from 'react-feather';
import "./Navbar.scss";
import Button from "../Button/Button";

function Navbar() {
    return (
        <nav className="flex justify-center w-full py-3 bg-white sticky top-0 z-10">
            <Container className="items-center justify-between px-4 md:px-0" horizontal={true}>
                <img className="justify-items-start" src="https://www.pakukuljetus.net/wp-content/uploads/2021/04/pakukuljetus.webp" alt="Pakukuljetus logo" />
                <MenuIcon className="w-8 h-auto block lg:hidden"/>
                <div className="gap-4 font-bold items-center hidden lg:flex">
                    <a href="#">Tietoa meistä</a>
                    <a href="#">Hinnat</a>
                    <a href="#">Asiakkaiden kokemuksia</a>
                    <a href="#">Yhteystiedot</a>
                    <Button type="Tertiary">Haluan muuttotarjouksen</Button>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;
