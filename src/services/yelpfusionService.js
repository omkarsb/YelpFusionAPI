import axios from 'axios';

export default {
    getAll() {
        return axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: 'qGU1w1qoPTfUjT8p6AQAHjm_3ZsLB51od2pAH8WNpgEO68KiePXlPu3IqbCXG69wnBcK6Srofe4M25JwQ3x9Sqn9Xe5DuaCIDV13CKrEyYIOqVvicNNgEql08mV3WnYx'
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