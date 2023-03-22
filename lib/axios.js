import Axios from "axios";

const headers = {
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.RAPID_API_KEY
    
};

export const axios = Axios.create({
    baseUrl: "https://bayut.p.rapidapi.com",
    headers: headers
});