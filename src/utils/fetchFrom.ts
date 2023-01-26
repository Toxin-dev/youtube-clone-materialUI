import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options:AxiosRequestConfig = {
    method: 'GET',
    url: BASE_URL,
    params: {part: 'snippet', videoId: 'M7FIvfx5J10', maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': "47b8ee5ac6mshad4a56e7ee53cd7p11e7c1jsnce57b565c13b",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(uri: string) =>{
    const {data} = await axios.get(`${BASE_URL}/${uri}`, options)
    return data;
  }