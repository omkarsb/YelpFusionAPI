import axios from 'axios';

export default {
    getRandom() {
        return axios.get('https://api.publicapis.org/random')
    },
    getCategories(){
        return axios.get('https://api.publicapis.org/categories')
    },
    getEntries(){
        return axios.get('https://api.publicapis.org/entries')
    },
    update(state, id) {},
    delete(state, id) {}
} 