/*
fetch('https://api.github.com/users/rafaelrrb').then(response => {
  response.json().then(data => console.log(data))
})
*/

// melhorando o exemplo anterior em casos que se tem encadiemanto de promessas
fetch('https://api.github.com/users/rafaelrrb')
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(d => console.log(d))
  .catch(err => console.log(err))
