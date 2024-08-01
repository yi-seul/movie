import axios from "axios";

const Axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,

    // api key를 기본 param에 작성 -> 모든 요청에 api key가 담김
    params: {
        api_key: process.env.REACT_APP_API_KEY,
    },
});

export default Axios;
