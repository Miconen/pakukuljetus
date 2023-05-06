import Button from "../../Button/Button";
import Container from "../../Container/Container";

function Pricing() {
    return (
        <div className="flex justify-center py-32">
            <Container className="gap-8 items-center">
                <h2 className="font-extrabold text-4xl text-center">Hinnat</h2>
                <p className="text-xl text-center">Tarjoamme muutot Helsingin alueella edullisesti alkaen 240 € / 2 tuntia.</p>
                <div className="flex gap-8 flex-col md:flex-row lg:w-1/2">
                    <div className="bg-white text-white flex flex-col p-8 gap-8 rounded-md bg-amber-500 shadow-lg">
                        <div className="font-extrabold text-2xl text-center">Muuttotarjous</div>
                        <div className="font-extrabold text-4xl text-center">240<span className="font-normal text-lg">€</span></div>
                        <ul className="flex flex-col gap-4 text-center">
                            <li>Sisältää <span className="font-bold">kaksi</span> muuttomiestä ja pakettiauton <span className="font-bold">kahdeksi</span> tunniksi</li>
                            <li>Sopii erityisesti yksiön muuttoihin</li>
                            <li>Lisäaikaa tarvittaessa joustavasti 15 min erissä 41,25€/15 minuuttia</li>
                            <li>Voit halutessasi vaikuttaa itse hintaan osallistumalla muuttoon</li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <Button type="Secondary">PYYDÄ MUUTTOTARJOUS</Button>
                        </div>
                    </div>
                    <div className="bg-white text-white flex flex-col p-8 gap-8 rounded-md bg-amber-500 shadow-lg">
                        <div className="font-extrabold text-2xl text-center">Muuttotarjous</div>
                        <div className="font-extrabold text-4xl text-center">350<span className="font-normal text-lg">€</span></div>
                        <ul className="flex flex-col gap-4 text-center">
                            <li>Sisältää <span className="font-bold">kaksi</span> muuttomiestä ja pakettiauton <span className="font-bold">kahdeksi</span> tunniksi</li>
                            <li>Sopii erityisesti yksiön muuttoihin</li>
                            <li>Lisäaikaa tarvittaessa joustavasti 15 min erissä 41,25€/15 minuuttia</li>
                            <li>Voit halutessasi vaikuttaa itse hintaan osallistumalla muuttoon</li>
                        </ul>
                        <div className="flex items-center justify-center">
                            <Button type="Secondary">PYYDÄ MUUTTOTARJOUS</Button>
                        </div>
                    </div>
                </div>
                <p className="text-center md:w-1/2">Maksu tapahtuu muuton päätteeksi pankkikortilla, luottokortilla tai käteisellä.
                    Kuitti tulee maksun yhteydessä sähköpostiisi.</p>
            </Container>
        </div>
    )
}

export default Pricing;
