const { MongoClient, ServerApiVersion, Collection } = require('mongodb')
const USER = 'espiritudeaire'
const PASS = '123'
const URI = `mongodb+srv://${USER}:${PASS}@cluster0.lg823yo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


const client = new MongoClient(URI);

/**
 * 
 * @param {Array} documento 
 * @param {Collection} collection 
 * @returns 
 */
async function insertar(collection, docs) {
    try {
        return await collection.insertMany(docs);
    } catch (error) {
        console.error('Error Insertando en ', error);
    }
}


async function main() {
    try {
        await client.connect();
        console.log("Conectando");
        const db = client.db('historia');
        const coll = db.collection('personajes');

        /*const results = await insertar(coll, personajes());
        console.log(results);*/

        let cursor = db.collection('inventory').find({
            status: { $in: ['A', 'D'] },
            qty: { $lt: 30 }
        });

        cursor = db.collection('inventory').find({
            $or: [{ status: 'A' }, { qty: { $lt: 30 } }]

        });

        cursor = db.collection('inventory').find({
            status: 'A',
            $or: [{ qty: { $lt: 30 } }, { item: { $regex: '^p' } }]

        });

        cursor = db.collection('inventory').find({
            'size.h': { $lt: 9 }
        });
        console.log(await cursor.toArray());



    } catch (error) {
        console.error('Error conectando a mongo', error);
    } finally {
        await client.close();
    }
}

function personajes() {
    return [
        {
            nombre: 'Cleopatra',
            pais: 'Egipto',
            epoca: '51 a.C. - 30 a.C.',
            descripcion: 'Última reina de Egipto y miembro de la dinastía Ptolemaica, famosa por su relación con Julio César y Marco Antonio.'
        },
        {
            nombre: 'Julio César',
            pais: 'Roma',
            epoca: '100 a.C. - 44 a.C.',
            descripcion: 'General y dictador romano que desempeñó un papel crítico en la transformación de la República Romana en el Imperio Romano.'
        },
        {
            nombre: 'Leonardo da Vinci',
            pais: 'Italia',
            epoca: '1452 - 1519',
            descripcion: 'Pintor, inventor y científico renacentista conocido por obras como La Última Cena y Mona Lisa.'
        },
        {
            nombre: 'Simón Bolívar',
            pais: 'Venezuela',
            epoca: '1783 - 1830',
            descripcion: 'Líder militar y político conocido como El Libertador, quien ayudó a independizar varias naciones sudamericanas del Imperio Español.'
        },
        {
            nombre: 'Marie Curie',
            pais: 'Polonia/Francia',
            epoca: '1867 - 1934',
            descripcion: 'Científica pionera en el estudio de la radiactividad y ganadora del Premio Nobel en dos disciplinas distintas.'
        },
        {
            nombre: 'Mahatma Gandhi',
            pais: 'India',
            epoca: '1869 - 1948',
            descripcion: 'Líder del movimiento de independencia de India, conocido por su uso de la resistencia pacífica como medio de protesta.'
        },
        {
            nombre: 'Nelson Mandela',
            pais: 'Sudáfrica',
            epoca: '1918 - 2013',
            descripcion: 'Líder anti-apartheid y primer presidente negro de Sudáfrica, símbolo de la lucha por la igualdad y la justicia social.'
        },
        {
            nombre: 'Albert Einstein',
            pais: 'Alemania/EE.UU.',
            epoca: '1879 - 1955',
            descripcion: 'Físico teórico que desarrolló la teoría de la relatividad, una de las bases de la física moderna.'
        },
        {
            nombre: 'Frida Kahlo',
            pais: 'México',
            epoca: '1907 - 1954',
            descripcion: 'Pintora mexicana conocida por sus autorretratos y sus obras que exploran la identidad, el poscolonialismo y el género.'
        },
        {
            nombre: 'Winston Churchill',
            pais: 'Reino Unido',
            epoca: '1874 - 1965',
            descripcion: 'Primer ministro británico durante la Segunda Guerra Mundial, famoso por su liderazgo y oratoria inspiradora.'
        }
    ];
}

main();