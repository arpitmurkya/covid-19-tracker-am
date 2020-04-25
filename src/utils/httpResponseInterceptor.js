export async function checkResponse (response) {
    let status = response.status;
    if(status >= 200 && status <= 305) {
        return response;
    } else if (status === 401) {
        // LOGOUT user
        
        return Promise.reject({
            httpStatus: status,
            error: "Session time out. Please login again to continue."
        });
    } else {

        let error;
        try {
            error = await response.json();
        } catch {
            error = "Something went wrong. Please try again later.";
        }
        Promise.reject({
            httpStatus: status,
            error
        })
    }
}