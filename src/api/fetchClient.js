import queryString from "./queryString.js";
import AppConstants from '../appConstants.js';


const request = async(url, options) => {

    try {
        const requestOptions = {
            ...options,
            headers: {
            'Content-Type': 'application/json'
            },
        };
        
                
        
            const response = await fetch(url,requestOptions);

        
            if(response.status >=200 && response.status <300){
            return response.json();
            }

        const error = new Error(response.status);
        throw error;

    } catch {
        // Handle error
        const error = new Error(response.status);
        throw error;
    };

};

const get = async (url, params) => {
    
    const paramString = params ? `?${queryString.stringify(params)}` : '';
    //console.log(queryString.stringify(params));
    const requestUrl = `${url}${paramString}`;
    //console.log(requestUrl);
    return request(requestUrl, { method: 'GET' });
};

const post = (url, body) => request(url, {
    body: JSON.stringify(body),
    method: 'POST'
});

const patch = (url, body) => request(url, {
    body: JSON.stringify(body),
    method: 'PATCH'
});

const deleteRequest = (url) => request(url, { method: 'DELETE'});

const fetchClient = {
    get,
    post,
    patch,
    delete: deleteRequest,
};

export default fetchClient;