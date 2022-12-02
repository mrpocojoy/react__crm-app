import axios from 'axios'

const getAll = (url) => {
  return axios
    .get(url)
    .then(response => response.data)
}

const getSingle= (url, id) => {
  return axios
    .get(`${url}/${id}`)
    .then(response => response.data)
}

const create = (url, item) => {
  return axios
    .post(url, item)
    .then(response => response.data)
}

const update = (url, id, item) => {
  return axios
    .put(`${url}/${id}`, item)
    .then(response => response.data)
}

const remove = (url, id) => {
  return axios
    .delete(`${url}/${id}`)
    .then(response => response.data)
}

export const apiCall = { getAll, getSingle, create, update, remove }