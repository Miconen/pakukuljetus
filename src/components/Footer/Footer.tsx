import Container from "../Container/Container";
import Button from "../Button/Button";
import Email from "../Links/Email";
import Phone from "../Links/Phone";
import Location from "../Links/Location";
import DateTime from "../Links/DateTime";

function Footer() {
    return (
        <footer className="bg-slate-500 text-white flex justify-center">
            <Container className="gap-16 px-4 py-16 flex-col md:flex-row">
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="font-bold text-3xl">Yhteystiedot</h2>
                        <p>Vastaamme puhelimeen arkisin ja lauantaisin. Voit myös lähettää sähköpostia.</p>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4">
                            <li><Location content="Kalannintie 6 A, 00430 Helsinki" /></li>
                            <li><DateTime content="MA – PE 8:00 - 21:00, LA 9:00 – 15:00" /></li>
                            <li><Phone number="0400 631 118" call="+3584006311118" /></li>
                            <li><Email email="helsinki@pakukuljetus.fi" /></li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <img
                                className="justify-items-start"
                                src="https://www.pakukuljetus.net/wp-content/uploads/2021/04/pakukuljetus.webp"
                                alt="Pakukuljetus logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-12">
                    <div>
                        <h2 className="font-bold text-3xl">Haluatko edullisen muuttotarjouksen?</h2>
                        <p>Täytä alla oleva lomake ja otamme sinuun yhteyttä pian. Voit myös soittaa meille suoraan!</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl">Haluatko tilata netistä?</h3>
                        <p>Voit myös tilata muuton suoraan netistä. Soitamme sinulle ja vahvistamme muuttoajan.</p>
                    </div>
                    <div>
                        <Button type="Secondary">Tilaa muutto netistä</Button>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
