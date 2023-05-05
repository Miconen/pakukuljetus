import Container from "../../Container/Container";

function Testimonials() {
    return (
        <div className="flex justify-center py-32 bg-blue-700 text-white">
            <Container className="gap-16 items-center">
                <h2 className="font-extrabold text-4xl">Mitä asiakkaamme ovat sanoneet palvelustamme?</h2>
                <div className="flex gap-8 flex-col lg:flex-row">
                    <div className="bg-white text-gray-800 flex flex-col p-8 gap-4 border-2 rounded-md">
                        <p>Muutto sujui suunnitelmien mukaan kuten myös tavarankuljetus. Palvelu soitosta muuttoon ja tavarankuljetukseen oli miellyttävää ja sovitut asiat toteutui eikä aikataulukaan pettänyt. Kiitos! Suosittelen.</p>
                        <div>
                            <p className="font-bold">Leena H.</p>
                            <p>Muutto Kannelmäestä Konalaan</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-800 flex flex-col p-8 gap-4 border-2 rounded-md">
                        <p>Heti alkumetreillä tuli todella turvallinen vaikutelma että muutto sujuu hyvin! Paku oli ketterä kuin gebardi ja kuljettajalla ratti hallussa.</p>
                        <div>
                            <p className="font-bold">Jaakko V.</p>
                            <p>Muutto Kirstinmäestä Niittykumpuun</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-800 flex flex-col p-8 gap-4 border-2 rounded-md">
                        <p>Erittäin hyvä palvelu, nopea tehokas ja ripeät muuttomiehet. Kaikki toimi hyvin ja huolellisesti. Sain ystävällisiä neuvoja myös tilausta tehdessä kun kyselin vinkkejä, oli mukava asioida. Suosittelen!</p>
                        <div>
                            <p className="font-bold">Johanna A.</p>
                            <p>Muutto Oulunkylässä uuteen asuntoon</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials;
