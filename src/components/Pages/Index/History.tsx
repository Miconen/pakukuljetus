import Container from "../../Container/Container";
import Email from "../../Links/Email";
import Phone from "../../Links/Phone";

function History() {
    return (
        <div className="flex justify-center py-32">
            <Container className="gap-16">
                <div className="flex gap-8 items-center flex-col md:flex-row">
                    <div className="flex flex-col gap-8 w-full md:w-half">
                        <h2 className="font-extrabold text-4xl">Mikä Suomen Pakukuljetus?</h2>
                        <p className="font-bold">Hei!</p>
                        <p>Olen <span className="font-bold">Marko Rintala</span>, Pakukuljetuksen perustaja ja nokkamies. Kun perustin firman, kaikki lähti liikkeelle melko vaatimattomasti — kokoonpanolla paku ja mies. Nyt meitä on jo useita ja pakun kaveriksi on saatu myös kuorma-auto, jonka avulla myös suurempien asuntojen muutot onnistuvat helposti.</p>
                        <p><span className="font-bold">Yrittäjänä minulle on tärkeää, että muuttosi onnistuu odotetusti.</span> Selkä suorana voin sanoa, että olemme onnistuneet tässä tavoitteessa – siitä osan voit lukea tämänkin sivun asiakaspalautteista. Tästä kiitos kuuluu tietysti kokeneille muuttomiehillemme, jotka hoitavat muutot ammattilaisen rutiinilla päivästä toiseen.</p>
                        <p><span className="font-bold">Jos haluat hyvää muuttopalvelua, soita minulle.</span> Lupaamme hoitaa muuttosi ammattitaidolla ja kohtuuhintaan.</p>
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">Marko Rintala</p>
                            <Phone number="0400 631 118" call="+358400631118" />
                            <Email email="helsinki@pakukuljetus.fi" />
                        </div>
                    </div>
                    <img className="rounded-md w-full md:w-half shadow-lg" src="https://www.pakukuljetus.fi/wp-content/uploads/xmarkon-kuva.jpg.pagespeed.ic.5VPN7IxooI.webp" alt="Headshot photo" />
                </div>
            </Container>
        </div>
    )
}

export default History;
