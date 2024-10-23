/**
 * Operaciones CRUD con JSONPlaceHolder 
 */

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log('GET - Lista de Uusarios:', data);

        })
        .catch(error => console.log('Error en Get', error));
}

getUsers();