import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://guarded-fjord-79973.herokuapp.com/',
});

export default instance