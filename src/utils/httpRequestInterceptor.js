import store from "../store/store";

function getPostHeaders(headers, include_sso_token, skip_content_type) {
    if (!headers) {
        return {};
    }
    if (!skip_content_type) {
        headers['Content-Type'] = 'application/json';
    }

    // Setting false currently since this is for specific use case
    // Not Available in this application
    let condition = false;
    if (include_sso_token && condition) {
        let user = store.getState().user;
        headers['sso-token'] = user ? user.token : null;
    }

    return headers;
}

export const checkRequest = (url, options) => {

    let params = { ...options };
    let headers = getPostHeaders(params && params.headers);

    if (params.body && typeof params.body === 'object') {
        params.body = JSON.stringify(params.body);
    }

    params = { ...headers, ...params };

    let requestObj = {
        url,
        params
    }
    return requestObj;
}