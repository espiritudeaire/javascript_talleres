/**
 * Operaciones CRUD con JSONPlaceHolder 
 */

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => json = response.json())
        .then(data => data)
        .catch(error => console.log('Error en Get', error));
}

usuarios = getUsers();
console.log(usuarios);
