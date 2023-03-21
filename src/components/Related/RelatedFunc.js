import axios from 'axios'
const token = process.env.API_KEY

const headers = {
  'Authorization': token
}

let getProductById = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`, { headers })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

let getInfoById = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, { headers })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

let getInfoByIdRelated = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/related`, { headers })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

let loadCarousel = (id) => {
  var styles = []
  var products = []

  let getInfoByIdRelated = (id) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/related`, { headers })
      .then((response) => {
        console.log(response)
        for (var i = 0; i<response.data.length;i++) {

          styles.push(getProductById(response.data[i]))

          products.push(getInfoById(response.data[i]))
        }
        return Promise.all([Promise.all(styles), Promise.all(products)])
      })
      .then((result) => {
        return result;
        console.log(result, 'result')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return getInfoByIdRelated(id)

}

export default loadCarousel;