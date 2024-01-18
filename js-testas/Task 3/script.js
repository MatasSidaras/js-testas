/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output = document.querySelector('#output');
const message = document.querySelector('#message');

async function fetchUsers() {
  try {
    const response = await fetch(ENDPOINT);
    const users = await response.json();

    output.innerHTML = '';

    users.forEach((user) => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      userCard.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}">
        <h3>${user.login}</h3>
      `;
      output.appendChild(userCard);
    });

    message.style.display = 'none';
  } catch (error) {
    console.error(error);
    alert('Įvyko klaida, bandykite dar kartą.');
  }
}

document.querySelector('#btn').addEventListener('click', fetchUsers);
