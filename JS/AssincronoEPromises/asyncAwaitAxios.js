const axios = require('axios')

/*
axios
  .get('https://api.github.com/users/rafaelrrb')
  .then(res => {
    return axios.get(res.data.repos_url)
  })
  .then(repos => console.log(repos.data))
  .catch(err => console.log(err))
*/

// axios com async
async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/rafaelrrb')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  } catch (e) {
    console.log(e)
  }
}

fetchRepos()
