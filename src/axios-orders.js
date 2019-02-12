import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-cef86.firebaseio.com/'
})

export default instance;