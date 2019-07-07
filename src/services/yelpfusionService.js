import axios from 'axios';

export default {
    getAll() {
        return axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                'Authorization' : 'Bearer ' + '4bd04198b3942c3eae9ca18ae709f36d'
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