import React from 'react';

function AboutUs() {
    return (
        <div className="container mx-auto px-4">
            <div className="about-us-section my-8">
                <h1 className="text-3xl font-bold">La nostra història</h1>
                <p className="mt-4">
                    Des de la nostra fundació fa més de 20 anys, SIM ha estat al servei de clients de tota mena, oferint una àmplia gamma de serveis que cobreixen lloguer, compra, venda, reparació, modificació i creació a mida de contenidors i mòduls. La nostra experiència i dedicació ens han permès entendre profundament les necessitats dels nostres clients i del mercat, permetent-nos oferir solucions que realment fan la diferència.
                    El nostre equip està format per professionals altament qualificats i apassionats per proporcionar serveis excepcionals. Ens esforcem per oferir productes de la màxima qualitat i serveis que superin les expectatives dels nostres clients, garantint la satisfacció total en cada projecte.
                    A SIM, creiem fermament en la innovació com a motor de creixement i millora contínua. És aquest compromís amb l'excel·lència el que ens ha permès construir relacions de llarga durada amb els nostres clients i convertir-nos en el vostre aliad de confiança per a totes les necessitats de contenidors i mòduls.
                    Ens enorgulleix la nostra història i els èxits assolits, i estem entusiasmats per el que el futur ens depara. A SIM, estem preparats per ajudar-vos a fer realitat els vostres projectes amb les millors solucions del mercat.
                </p>
                <div className="team-section mt-8">
                    <h2 className="text-2xl font-semibold">El nostre equip</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {/* Placeholder for team member photos and bios */}
                        <div className="team-member">
                            <p>[Team Member Photo]</p>
                            <h3 className="mt-2 font-semibold">Andreu Escolà</h3>
                            <p>Pare creador de SIM</p>
                        </div>
                        {/* Repeat for other team members */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
