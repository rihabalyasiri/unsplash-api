import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: ' Client-ID ad598ea541bc067ddecb9fb780329f2744240c8d1d795811e9c6f46cf2896056'
      }
})

