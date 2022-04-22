/*
fetch('https://api.github.com/users/rafaelrrb')
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(d => console.log(d))
  .catch(err => console.log(err))
  
*/
// Fazendo a mesma coisa com async

async function start() {
  try {
    const response = await fetch('https://api.github.com/users/rafaelrrb')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
  } catch (err) {
    console.log(err)
  }
}

start()

// outra forma de fazer o exemplo anterio
async function start() {
  const response = await fetch('https://api.github.com/users/rafaelrrb')
  const user = await response.json()
  const reposResponse = await fetch(user.repos_url)
  const repos = await reposResponse.json()
  console.log(repos)
}

start().catch(err => console.log(err))

// reduzindo forma de fazer o exemplo anterio
async function start() {
  const user = await fetch('https://api.github.com/users/rafaelrrb').then(r =>
    r.json()
  )
  const repos = await fetch(user.repos_url).then(r => r.json())
  console.log(repos)
}

start().catch(err => console.log(err))
