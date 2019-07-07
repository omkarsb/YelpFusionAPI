import axios from 'axios';

export default {
    getAll() {
//        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=4bd04198b3942c3eae9ca18ae709f36d')
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Chico&units=metric&appid=4bd04198b3942c3eae9ca18ae709f36d')
    },
    getByLocation(location){
        return axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + location.lat + '&lon=' + location.lng + '&units=metric&appid=4bd04198b3942c3eae9ca18ae709f36d')
    },
    getByName(name){
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ name +'&units=metric&appid=4bd04198b3942c3eae9ca18ae709f36d')
    },
    getByID(id){
        return axios.get('http://api.openweathermap.org/data/2.5/weather?id='+ id +'&units=metric&appid=4bd04198b3942c3eae9ca18ae709f36d')
    },
    getCurrent(lat, lon){
        return axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=4bd04198b3942c3eae9ca18ae709f36d')
    },
    update(state, id) {},
    delete(state, id) {}
} 