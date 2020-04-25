import fetch from 'node-fetch';
import { checkResponse } from './httpResponseInterceptor';
import { checkRequest } from './httpRequestInterceptor';

export function httpFetch(url, options) {
    let requestObj = checkRequest(url, options);

    let response = fetch(requestObj.url, requestObj.params)
    .then(checkResponse, () => {
        return Promise.reject({
            error: {
                message: "Something went wrong. Please try again later."
            }
        });
    })
    .then(resp => {
        return new Promise(resolve => {
            resp.json().then(data => {
                resolve(data);
            }, () => {
                resolve({});
            });
        });
    },err => Promise.reject(err));

    return response;
}
