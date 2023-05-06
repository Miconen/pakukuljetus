import Container from "../../Container/Container";
import Quote from "../../Quote/Quote";

function Testimonials() {
    return (
        <div className="flex justify-center py-32 bg-blue-700 text-white">
            <Container className="gap-16 items-center">
                <h2 className="font-extrabold text-4xl">Mitä asiakkaamme ovat sanoneet palvelustamme?</h2>
                <div className="flex gap-8 flex-col lg:flex-row">
                    <Quote name="Leena H." info="Muutto Kannelmäestä Konalaan">Muutto sujui suunnitelmien mukaan kuten myös tavarankuljetus. Palvelu soitosta muuttoon ja tavarankuljetukseen oli miellyttävää ja sovitut asiat toteutui eikä aikataulukaan pettänyt. Kiitos! Suosittelen.</Quote>
                    <Quote name="Jaakko V." info="Muutto Kirstinmäestä Niittykumpuun">Heti alkumetreillä tuli todella turvallinen vaikutelma että muutto sujuu hyvin! Paku oli ketterä kuin gebardi ja kuljettajalla ratti hallussa.</Quote>
                    <Quote name="Johanna A." info="Muutto Oulunkylässä uuteen asuntoon">Erittäin hyvä palvelu, nopea tehokas ja ripeät muuttomiehet. Kaikki toimi hyvin ja huolellisesti. Sain ystävällisiä neuvoja myös tilausta tehdessä kun kyselin vinkkejä, oli mukava asioida. Suosittelen!</Quote>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials;
