import axios from 'axios';

export default {
    getAll() {
        return axios.get(`${'https://cors-git.herokuapp.com/'}https://cors-git.herokuapp.com/https://api.yelp.com/v3/businesses/search`, {
            headers: {
                Authorization : `Bearer ${process.env.REACT_APP_YELP_FUSION_API_KEY}`
            },
            params: {
                location: 'New York',
                categories: 'breakfast_brunch',
            }
        });
    },
    getCalifornia() {
        return axios.get(`${'https://cors-git.herokuapp.com/'}https://cors-git.herokuapp.com/https://api.yelp.com/v3/businesses/search`, {
            headers: {
                Authorization : `Bearer ${process.env.REACT_APP_YELP_FUSION_API_KEY}`
            },
            params: {
                location: 'California',
                categories: 'breakfast_brunch',
            }
        });
    },
    get(loc, cat){
        return axios.get(`${'https://cors-git.herokuapp.com/'}https://cors-git.herokuapp.com/https://api.yelp.com/v3/businesses/search`, {
            headers: {
                Authorization : `Bearer ${process.env.REACT_APP_YELP_FUSION_API_KEY}`
            },
            params: {
                location: loc,
                categories: cat
            }
        });
    },/*
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