import { User } from './User.js'

const apiURL = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
    try {
        const response = await fetch(apiURL);
        const users = await response.json();
        console.log(users);
        displayUser(users)
    } catch (error) {
        console.log(error);
    }
}

function displayUser(users) {
    const userList = document.getElementById('user-list');

    users.forEach(user => {
        const u = new User(user.id, user.name, user.email, user.phone, user.username, user.website);
        const userCard = document.createElement('div');
        userCard.innerHTML = `
        <h2>${u._name}</h2>
        <p><b>Email: </b>${u._email}</p>
        <p><b>Teléfono: </b>${u._phone}</p>
        <p><b>Sitio Web: </b>${u._website}</p>`;
        userList.appendChild(userCard);
    });
}

fetchUsers();

const user = new User(1, "Santi", "espiritudeaire@gmail.com", 456321, 'user1', 'wesite.com')


