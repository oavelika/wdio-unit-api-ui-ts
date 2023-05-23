import axios from "axios";
import { TEST_URL } from "../config/endpoints";

const sendRequest = async (url: string, data = Object(null), method = String('get')) => {
    try {
        const response = await axios({
            method,
            url: `${TEST_URL}${url}`,
            headers: {},
            data
        });
        return {
            status: response.status,
            data: response.data,
            headers: response.headers
        };
    } catch (error) {
        return {
            status: error.response.status,

        };
    }
};

export {
    sendRequest
};
