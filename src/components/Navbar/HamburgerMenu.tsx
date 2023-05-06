import Button from "../Button/Button";

type Props = {
    close: Function;
    visible: boolean;
}

function HamburgerMenu({close, visible}: Props) {
    return (
        <div className={`navbar-menu relative z-50 ${visible ? '' : ' hidden'}`}>
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center mb-8 justify-between">
                    <img className="justify-items-start" src="https://www.pakukuljetus.net/wp-content/uploads/2021/04/pakukuljetus.webp" alt="Pakukuljetus logo" />
                    <button className="navbar-close" onClick={() => close(false)}>
                        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <ul>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold hover:bg-yellow-50 rounded" href="#">Tietoa meistä</a>
                        </li>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold hover:bg-yellow-50 rounded" href="#">Hinnat</a>
                        </li>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold hover:bg-yellow-50 rounded" href="#">Asiakkaiden kokemuksia</a>
                        </li>
                        <li className="mb-1">
                            <a className="block p-4 text-sm font-semibold hover:bg-yellow-50 rounded" href="#">Yhteystiedot</a>
                        </li>
                    </ul>
                </div>
                <Button className="mt-auto" type="Main">Haluan muuttotarjouksen</Button>
            </nav>
        </div>
    )
}

export default HamburgerMenu;
