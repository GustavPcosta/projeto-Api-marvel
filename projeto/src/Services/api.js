import axios from 'axios'


const timeStamp ="1662571421";
const apiPublic = process.env.REACT_APP_PUBLIC_KEY;
const hash = process.env.REACT_APP_HASH_KEY;

export default axios.create({
    timeout:10000,
    baseURL: `https://gateway.marvel.com/v1/public/`,
    headers:{
        'Content-Type':'apllication/json'
    },
    params:{
        ts:timeStamp,
        apikey:apiPublic,
        hash:hash
    } 
})

