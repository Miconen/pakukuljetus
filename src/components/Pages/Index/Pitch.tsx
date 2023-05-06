import Container from "../../Container/Container";

function Pitch() {
    return (
        <div className="flex justify-center py-32">
            <Container className="gap-16 items-center">
                <h2 className="font-extrabold text-4xl lg:text-center">Kolme syytä, joiden takia yhä useampi valitsee Pakukuljetuksen muuttoavuksi</h2>
                <div className="flex gap-8 flex-col lg:flex-row">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-extrabold text-2xl">Kokeneiden muuttomiesten avulla muuttosi on ohi hetkessä</h3>
                        <p>Palvelumme on ystävällistä, nopeaa ja edullista. Olemme rehti ja toimelias muuttoyritys, jonka kaikki työntekijät ovat alan ammattilaisia.</p>
                        <p>Työntekijöidemme vuosien kokemuksella muuttoauton lastaus sujuu nopeasti ja vaivattomasti, ja sen tilat saadaan hyödynnettyä tehokkaasti. Saamme jatkuvasti positiivista palautetta, joka innostaa meitä palvelemaan sinua suurella sydämellä.</p>
                        <p>Muuttoauton mukana kulkevat aina nokkakärryt, ajorampit, sidontakiskot ja liinat kuorman sidontaan.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-extrabold text-2xl">Edulliset hinnat, emme laskuta turhasta</h3>
                        <p>Emme laskuta turhasta ja sinun on helppo ennakoida, mitä muuttosi tulee maksamaan. Tarjoamme Helsingin alueella muuttopalvelun edullisesti hintaan alkaen 240 € / kaksi tuntia. Hinta sisältää kaksi muuttomiestä ja pakettiauton. Tarjoamme myös kuorma-auton suurempiin muuttoihin hintaan 480 € / kolme tuntia. Hinta sisältää kolme muuttomiestä ja kuorma-auton.</p>
                        <p>Toimimme aina tehokkaasti ja iloisella mielellä, jotta muuttosi sujuu helposti ja vaivattomasti. Muutot tehdään ilman hankalia ja kalliita välikäsiä parhaimman lopputuloksen saavuttamiseksi.</p>
                        <p>Tilaa helppo ja edullinen muuttopalvelu!</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-extrabold text-2xl">Luotettava ja hyvämaineinen muuttopalvelu</h3>
                        <p>Olemme luotettava suomalainen yritys ja tarjoamme muuttoapua turvallisesti ja varmasti. Täytämme hyvämaineisen ja luotettavan kuljetusyrityksen vaatimukset. Ely-keskus on myöntänyt meille kansainvälisen tavaraliikenneluvan n:o 337953, joka on voimassa EU-jäsenvaltioissa.</p>
                        <p>Koulutamme henkilökuntamme hyvin tehtävään ja valitsemme vain oikealla asenteella työhön suhtautuvia tekijöitä. Tämä näkyy palvelussa. Kaikki muuttomiehemme puhuvat suomea äidinkielenään, joten saat meiltä palvelua aina suomeksi.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Pitch;
