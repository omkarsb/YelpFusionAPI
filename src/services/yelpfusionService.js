import axios from 'axios';

export default {
    getAll() {
        return axios.get('https://cors-git.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization : `Bearer ${process.env.REACT_APP_YELP_FUSION_API_KEY}`
            }});
    },
    get(id){},/*
    post(state){
        return axios.post('http://localhost:8090/bw/v1/experiences', state, {                    
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" //expected request header
                }
            })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    },*/
    update(state, id) {},
    delete(state, id) {}
} 