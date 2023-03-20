const axios = require('axios');
const { response } = require('express');

const baseUrl = "https://dummyjson.com";

exports.getRandomText = async () => {
    let randomId = Math.floor(Math.random()*100);

    let response = await axios.get(`${baseUrl}/posts/${randomId}`);

    return response.data;
}