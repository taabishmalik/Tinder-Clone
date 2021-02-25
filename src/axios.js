import axios from 'axios'

const instance = axios.create({
  baseURL: "https://tinder-clone-backend-h.herokuapp.com/",
  //"http://localhost:8001",
});

export default instance;