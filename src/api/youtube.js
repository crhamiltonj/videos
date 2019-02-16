import axios from 'axios';

const KEY = 'AIzaSyAB_ccEQNF-aGtcmRuZCqzP1-fdgAgg4cc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

