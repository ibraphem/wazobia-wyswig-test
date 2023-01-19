import axios from 'axios';
const httpRequest = async (url, method = 'get', body = null, others) => {
    try {
        const response = await axios({
            url,
            method,
            data: body,
            ...others,
        });
        return response;
    } catch (error) {
        return error.response;
    }
};

export default httpRequest;