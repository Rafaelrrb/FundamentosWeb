//  Referência:  https://axios-http.com/ptbr/

// npm install axios

const axios = require('axios')

/*
axios
  .get('https://api.github.com/users/rafaelrrb')
  .then(res => {
    const user = res.data

    axios.get(user.repos_url).then(repos => console.log(repos.data))
  })
  .catch(err => console.log(err))

*/

// melhorando

axios
  .get('https://api.github.com/users/rafaelrrb')
  .then(res => {
    return axios.get(res.data.repos_url)
  })
  .then(repos => console.log(repos.data))
  .catch(err => console.log(err))
