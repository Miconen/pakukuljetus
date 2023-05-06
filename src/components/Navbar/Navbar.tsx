import { useState } from "react";
import Container from "../Container/Container";
import HamburgerMenu from "./HamburgerMenu";
import { Menu as MenuIcon } from 'react-feather';
import "./Navbar.scss";
import Button from "../Button/Button";

function Navbar() {
    const [isOpen, setState] = useState<boolean>(false);

    return (
        <nav className="flex justify-center w-full py-3 bg-white sticky top-0 z-10 shadow-lg">
            <Container className="items-center justify-between" horizontal={true}>
                <img className="justify-items-start" src="https://www.pakukuljetus.net/wp-content/uploads/2021/04/pakukuljetus.webp" alt="Pakukuljetus logo" />
                <MenuIcon onClick={() => setState(!isOpen)} className="w-8 h-auto block lg:hidden" />
                <div className="gap-4 font-bold items-center hidden lg:flex">
                    <a href="#">Tietoa meistä</a>
                    <a href="#">Hinnat</a>
                    <a href="#">Asiakkaiden kokemuksia</a>
                    <a href="#">Yhteystiedot</a>
                    <Button type="Tertiary">Haluan muuttotarjouksen</Button>
                </div>
            </Container>
            <HamburgerMenu visible={isOpen} close={setState}/>
        </nav>
    );
}

export default Navbar;
