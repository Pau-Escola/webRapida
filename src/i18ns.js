// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations for each language
const resources = {
    en: {
        translation: {
            "Welcome to SIM": "Welcome to SIM",
            "Hero Text": "An experience of 20 years specializing in all types of prefabricated solutions: temporary or permanent, for rent or sale, new or second-hand, makes <strong>SIM GROUP</strong> an answer in mobile construction and modular building. A global service, where the possibility of maintenance, transformation, or relocation of any prefabricated property is included. At SIM, we advise you or develop products tailored to your needs.",
            "Our services": "Our services",
            "Contact us": "Contact us",
            "Ask for quote": "Ask for quote",
            "Container": "Containers",
            "Container Text": "If what you need is to acquire a container or module, we will help you find what you need, and if not, we will make it custom for you.",
            "Prefabs": "Prefabs",
            "Prefabs Text": "If what you need is a temporary solution that adapts and is available quickly, we will take it wherever it is needed.",
            "Sale": "Sale",
            "Sale Text": "Products ready to be used at lower prices.",
            "Repairs": "Repairs",
            "Repairs Text": "So many years dedicated to the sector allow us to fix or modify anything related to modules.",
            "Rent": "Rent",
            "Rent Text": "If what you need is a temporary solution that adapts and is available quickly, we will take it wherever it is needed.",
            "Buy": "Buy",
            "Buy Text": "If what you need is to acquire a container or module, we will help you find what you need, and if not, we will make it custom for you.",
            "Relocation": "Trasllat",
            "Relocation Text": "Products ready to be used at lower prices.",
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
            "Sent Success": "Message correctly sent",
            "Sent Failure": "Unable to send message, contact us through comercial@simreus.com or call us 977 344 711"

        },
    },
    es: {
        translation: {
            "Welcome to SIM": "Benvenido a SIM",
            "Hero Text": "Una experiencia de 20 años de especialización en todo tipo de soluciones prefabricadas: temporales o definitivas, en alquiler o venta, nuevas o de ocasión, hacen del <strong>GRUPO SIM</strong> una respuesta en la construcción móvil y edificación modular. Un servicio global, donde se incluye la posibilidad del servicio de mantenimiento, transformación o traslado de cualquier prefabricado de su propiedad. En SIM le asesoramos o desarrollamos productos a medida de sus necesidades",
            "Our services": "Nuestros servicios",
            "Contact us": "Contacta-nos",
            "Ask for quote": "Pedir presupuesto",
            "Container": "Contenedores",
            "Container Text": "Si lo que necesitas es adquirir un contenedor o módulo, te ayudaremos a encontrar lo que necesitas y si no, te lo haremos a medida.",
            "Prefabs": "Módulos",
            "Prefabs Text": "Si lo que necesitas es una solución temporal que se adapte y esté disponible en poco tiempo, te lo llevaremos donde sea necesario.",
            "Sale": "Ocasión",
            "Sale Text": "Productos preparados para ser utilizados a precios más bajos.",
            "Repairs": "Reparaciones",
            "Repairs Text": "Tantos años dedicados al sector nos permiten arreglar o modificar cualquier cosa relacionada con módulos.",
            "Rent": "Alquiler",
            "Rent Text": "Si lo que necesitas es una solución temporal que se adapte y esté disponible en poco tiempo, te lo llevaremos donde sea necesario",
            "Buy": "Venta",
            "Buy Text": "Si lo que necesitas es adquirir un contenedor o módulo, te ayudaremos a encontrar lo que necesitas y si no, te lo haremos a medida.",
            "Relocation": "Traslados",
            "Relocation Text": "Productos preparados para ser utilizados a precios más bajos.",
            "Availability": "Horario de atención",
            "Open Times": "Lunes - Viernes: 8am - 4pm",
            "Closed Times": "Sábados y Dominngos: Cerrado",
            "Phone": "Teléfono",
            "Email": "Correo elctrónico",
            "Find us": "Dónde estamos",
            "Name": "Nombre",
            "Name PlaceHolder": "Tu nombre o el de tu empresa",
            "Phone PlaceHolder": "Teléfono de contacto",
            "Email PlaceHolder": "Corro para comunicarnos",
            "Message": "Mensaje",
            "Message PlaceHolder": "Escrivenos tu consulta aquí",
            "Send": "Enviar",
            "Sent Success": "Mensaje enviado correctamente",
            "Sent Failure": "No se ha podido enviar tu mensaje, escrívenos a comercial@simreus.com o llámanos al 977 344 711"

        },
    },
    ca: {
        translation: {
            "Welcome to SIM": "Benvingut a SIM",
            "Hero Text": "Una experiència de 20 anys d'especialització en tot tipus de solucions prefabricades: temporals o definitives, en lloguer o venda, noves o d'ocasió, fan del <strong>GRUP SIM</strong> una resposta en la construcció mòbil i edificació modular. Un servei global, on s'inclou la possibilitat del servei de manteniment, transformació o trasllat de qualsevol prefabricat de la seva propietat. A SIM li assessorem o desenvolupem productes a mida de les seves necessitats.",
            "Our services": "Els nostres serveis",
            "Contact us": "Contacta'ns",
            "Ask for quote": "Demanar pressupost",
            "Container": "Contenidor",
            "Container Text": "Si el que necessites és adquirir un contenidor o mòdul t'ajudarem a trobar el que necessites i sino te'l farem a mida",
            "Prefabs": "Mòduls",
            "Prefabs Text": "Si el que necessites és una solució temporal que s'adapti i estigui disponible en poc temps, t'ho durem on calgui",
            "Sale": "Ocasió",
            "Sale Text": "Productes preparats per ser utilitzats a preus més baixos",
            "Repairs": "Reparacions",
            "Repairs Text": "Tants anys dedicats al sector ens permeten arreglar o modificar qualssevol cosa relacionada amb mòduls",
            "Rent": "Lloguer",
            "Rent Text": "Si el que necessites és una solució temporal que s'adapti i estigui disponible en poc temps, t'ho durem on calgui",
            "Buy": "Venda",
            "Buy Text": "Si el que necessites és adquirir un contenidor o mòdul t'ajudarem a trobar el que necessites i sino te'l farem a mida",
            "Relocation": "Trasllat",
            "Relocation Text": "Productes preparats per ser utilitzats a preus més baixos",
            "Availability": "Horari d'atenció",
            "Open Times": "Dilluns - Divendres: 8am - 4pm",
            "Closed Times": "Dissabtes i Diumenges: Tancat",
            "Phone": "Telèfon",
            "Email": "Correu elctrònic",
            "Find us": "On som",
            "Name": "Nom",
            "Name PlaceHolder": "El teu nom o de la teva empresa",
            "Phone PlaceHolder": "Telèfon de contacte",
            "Email PlaceHolder": "Correu per comunicar-nos",
            "Message": "Missatge",
            "Message PlaceHolder": "Escriu-nos la teva consulta aquí",
            "Send": "Enviar",
            "Sent Success": "Missatge enviat correctament",
            "Sent Failure": "No s'ha pogut enviar el teu missatge, escriu-nos a comercial@simreus.com o truca'ns al 977 344 711"
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
