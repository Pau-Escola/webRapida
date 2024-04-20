// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations for each language
const resources = {
    en: {
        translation: {
            "Welcome to SIM": "Welcome to SIM",
            "Hero Text": "An experience of 20 years specializing in all types of prefabricated solutions: temporary or permanent, for <strong>rent</strong> or <strong>sale</strong>, <strong>new</strong> or <strong>second-hand</strong>, makes <strong>SIM GROUP</strong> an answer in mobile construction and <strong>modular building</strong>. A global service, where the possibility of <strong>maintenance</strong>, <strong>transformation</strong>, or <strong>relocation</strong> of any prefabricated property is included. At SIM, we advise you or develop products tailored to your needs.",
            "Our services": "Our services",
            "Our products": "Our products",
            "Contact us": "Contact us",
            "Ask for quote": "Request for quote",
            "Container": "Containers",
            "Container Text": "If what you need is to acquire or rent a container, we will help you find what you need, and if not, we will make it custom for you.",
            "Prefabs": "Prefabs",
            "Prefabs Text": "If what you need is a temporary solution that adapts and is available quickly, we will take it wherever it is needed.",
            "Sale": "Sale",
            "Sale Text": "Products ready to be used at lower prices.",
            "Repairs": "Repairs and Modifications",
            "Repairs Text": "So many years dedicated to the sector allow us to fix or modify anything related to prefab.",
            "Rent": "Rent",
            "Rent Text": "If what you need is a temporary solution that adapts and is available quickly, we will take it wherever it is needed.",
            "Buy": "Buy",
            "Buy Text": "If what you need is to acquire a container or prefab, we will help you find what you need, and if not, we will make it custom for you.",
            "Relocation": "Relocation",
            "Relocation Text": "We disassemble, relocate, and assemble your modular buildings so you can continue to utilize them.",
            "Availability": "Working Hours",
            "Open Times": "Monday to Friday: 8am - 4pm",
            "Closed Times": "Saturdays and Sundays: Closed",
            "Phone": "Phone",
            "Email": "Email",
            "Find us": "Find us",
            "Name": "Name",
            "Name PlaceHolder": "Your name or your company's name",
            "Phone PlaceHolder": "Phone to reach you",
            "Email PlaceHolder": "Email for communication",
            "Message": "Message",
            "Message PlaceHolder": "Ask for what you need here",
            "Send": "Send",
            "Sending": "Sending...",
            "Sent Success": "Message correctly sent.",
            "Sent Failure": "Unable to send message, contact us through comercial@simreus.com or call us 977 344 711.",
            "Modular Building": "Modular Building",
            "Modular Building Text": "We collaborate with construction companies in the building of homes and buildings.",
            "Recycled Goods": "Containers and Prefabs Recycling",
            "Recycled Goods Text": "We give old prefabs a second life and if it's not possible we use the parts that are still functional to <strong>reduce the carbon footprint</strong>.",
            "Trading": "Trading",
            "Trading Text": "We will take care of collecting, repairing, and selling the containers and prefabs you no longer need so that you can get the best price.",
            "Cabin": "Modular cabins",
            "Cabin Text": "If you have a field and are looking for a solution to enjoy the weekend with family or friends, we offer you an economical, flexible, and quick option.",
            "Maintenance": "Maintenance",
            "Maintenance Text": "If you have any problem with a prefab or container, we can fix it efficiently and professionally to extend its useful life."

        },
    },
    es: {
        translation: {
            "Welcome to SIM": "Bienvenido a SIM",
            "Hero Text": "Una experiencia de 20 años de especialización en todo tipo de soluciones prefabricadas: temporales o definitivas, en <strong>alquiler</strong> o <strong>venta</strong>, <strong>nuevas</strong> o de <strong>ocasión</strong>, hacen del <strong>GRUPO SIM</strong> una respuesta en la construcción móvil y <strong>edificación modular</strong>. Un servicio global, donde se incluye la posibilidad del servicio de <strong>mantenimiento</strong>, <strong>transformación</strong> o <strong>traslado</strong> de cualquier prefabricado de su propiedad. En SIM le asesoramos o desarrollamos productos a medida de sus necesidades",
            "Our services": "Nuestros servicios",
            "Our products": "Nuestros productos",
            "Contact us": "Contáctanos",
            "Ask for quote": "Pedir presupuesto",
            "Container": "Contenedores",
            "Container Text": "Si lo que necesitas es adquirir o alquilar un contenedor, te ayudaremos a encontrar lo que necesitas y si no, te lo haremos a medida.",
            "Prefabs": "Módulos",
            "Prefabs Text": "Si lo que necesitas es una solución temporal que se adapte y esté disponible en poco tiempo, te lo llevaremos donde sea necesario.",
            "Sale": "Ocasión",
            "Sale Text": "Productos preparados para ser utilizados a precios más bajos.",
            "Repairs": "Reparaciones y Modificaciones",
            "Repairs Text": "Tantos años dedicados al sector nos permiten arreglar o modificar cualquier cosa relacionada con módulos.",
            "Rent": "Alquiler",
            "Rent Text": "Si lo que necesitas es una solución temporal que se adapte y esté disponible en poco tiempo, te lo llevaremos donde sea necesario.",
            "Buy": "Venta",
            "Buy Text": "Si lo que necesitas es adquirir un contenedor o módulo, te ayudaremos a encontrar lo que necesitas y si no, te lo haremos a medida.",
            "Relocation": "Traslados",
            "Relocation Text": "Desmontamos, trasladamos y montamos sus conjuntos modulares para que pueda seguir aprovechándolos",
            "Availability": "Horario de atención",
            "Open Times": "Lunes - Viernes: 8am - 4pm",
            "Closed Times": "Sábados y Domingos: Cerrado",
            "Phone": "Teléfono",
            "Email": "Correo-e",
            "Find us": "Dónde estamos",
            "Name": "Nombre",
            "Name PlaceHolder": "Tu nombre o el de tu empresa",
            "Phone PlaceHolder": "Teléfono de contacto",
            "Email PlaceHolder": "Correo para comunicarnos",
            "Message": "Mensaje",
            "Message PlaceHolder": "Escrívenos tu consulta aquí",
            "Send": "Enviar",
            "Sending": "Enviando...",
            "Sent Success": "Mensaje enviado correctamente.",
            "Sent Failure": "No se ha podido enviar tu mensaje, escrívenos a comercial@simreus.com o llámanos al 977 344 711.",
            "Modular Building": "Construcción Modular",
            "Modular Building Text": "Colaboramos con empresas de construcción en la edificación de viviendas y edificios.",
            "Recycled Goods": "Reciclaje de contenedores y módulos",
            "Recycled Goods Text": "Damos una segunda vida a los módulos antiguos y, si no es posible, utilizamos las partes que aún son funcionales para <strong>reducir la huella de carbono</strong>.",
            "Trading": "Compraventa",
            "Trading Text": "Nos encargaremos de recoger, reparar y vender los contenedors y módulos que no necesites para que consigas el mejor precio.",
            "Cabin": "Casa de campo",
            "Cabin Text": "Si tienes un campo y buscas una solución para disfrutar del fin de semana con familia o amigos, te proponemos una opción económica, flexible y rápida.",
            "Maintenance": "Mantenimiento",
            "Maintenance Text": "Si tienes algún problema con un módulo o contenedor, podemos arreglarlo de manera eficiente y profesional para prolongar su vida útil."
        },
    },
    ca: {
        translation: {
            "Welcome to SIM": "Benvingut a SIM",
            "Hero Text": "Una experiència de 20 anys d'especialització en tot tipus de solucions prefabricades: temporals o definitives, en <strong>lloguer</strong> o <strong>venda</strong>, <strong>noves</strong> o d'<strong>ocasió</strong>, fan del <strong>GRUP SIM</strong> una resposta en la construcció mòbil i <strong>edificació modular</strong>. Un servei global, on s'inclou la possibilitat del servei de <strong>manteniment</strong>, <strong>transformació</strong> o <strong>trasllat</strong> de qualsevol prefabricat de la seva propietat. A SIM li assessorem o desenvolupem productes a mida de les seves necessitats.",
            "Our services": "Els nostres serveis",
            "Our products": "Els nostres productes",
            "Contact us": "Contacta'ns",
            "Ask for quote": "Demanar pressupost",
            "Container": "Contenidor",
            "Container Text": "Si el que necessites és adquirir o llogar un contenidor t'ajudarem a trobar el que necessites i sino te'l farem a mida.",
            "Prefabs": "Mòduls",
            "Prefabs Text": "Si el que necessites és una solució temporal que s'adapti i estigui disponible en poc temps, t'ho durem on calgui.",
            "Sale": "Ocasió",
            "Sale Text": "Productes reciclats per ser utilitzats a preus més baixos.",
            "Repairs": "Reparacions i Modificacions",
            "Repairs Text": "Tants anys dedicats al sector ens permeten arreglar o modificar qualssevol cosa relacionada amb mòduls.",
            "Rent": "Lloguer",
            "Rent Text": "Si el que necessites és una solució temporal que s'adapti i estigui disponible en poc temps, t'ho durem on calgui.",
            "Buy": "Venda",
            "Buy Text": "Si el que necessites és adquirir un contenidor o mòdul t'ajudarem a trobar el que necessites i sino te'l farem a mida.",
            "Relocation": "Trasllat",
            "Relocation Text": "Desmontem, traslladem i montem els seus conjunts modulars perquè pugui seguir aprofitant-los.",
            "Availability": "Horari d'atenció",
            "Open Times": "Dilluns - Divendres: 8am - 4pm",
            "Closed Times": "Dissabtes i Diumenges: Tancat",
            "Phone": "Telèfon",
            "Email": "Correu-e",
            "Find us": "On som",
            "Name": "Nom",
            "Name PlaceHolder": "El teu nom o de la teva empresa",
            "Phone PlaceHolder": "Telèfon de contacte",
            "Email PlaceHolder": "Correu per comunicar-nos",
            "Message": "Missatge",
            "Message PlaceHolder": "Escriu-nos la teva consulta aquí",
            "Send": "Enviar",
            "Sending": "Enviant...",
            "Sent Success": "Missatge enviat correctament.",
            "Sent Failure": "No s'ha pogut enviar el teu missatge, escriu-nos a comercial@simreus.com o truca'ns al 977 344 711.",
            "Modular Building": "Contrucció Modular",
            "Modular Building Text": "Col·laborem amb empreses de construcció en l'edificació de vivendes i edificis.",
            "Recycled Goods": "Reciclatge de contenidors i mòduls",
            "Recycled Goods Text": "Donem una segona vida als mòduls antics i, si no és possible, utilitzem les parts que encara són funcionals per a <strong>reduir la petjada de carboni</strong>.",
            "Trading": "Compravenda",
            "Trading Text": "Ens encarregarem de recollir, reparar i vendre els contenidors i mòduls que no necessitis perquè aconsegueixis el millor preu.",
            "Cabin": "Vivenda de camp",
            "Cabin Text": "Si tens un camp i busques una solució per disfrutar del cap de setmana amb familia o amics, et proposem una opció econòmica, flexible i ràpida.",
            "Maintenance": "Manteniment",
            "Maintenance Text": "Si te cap problema amb un mòdul o contenidor li podem arreglar de manera eficient i professional per allargar-ne la vida útil."
            // Add other keys and translations
        },
    }
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .use(LanguageDetector) // Detects language
    .init({
        resources,
        fallbackLng: "es", // Use English if detection fails
        interpolation: {
            escapeValue: false, // React already safes from XSS
        },
    });

export default i18n;
