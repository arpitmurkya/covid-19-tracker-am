import axios from 'axios';
import { DATA_API, DAILY_DATA_API, FETCH_DATA, FETCH_DAILY_DATA, FETCH_COUNTRIES_API, FETCH_COUNTRIES } from '../actionConstants';

export function dispatchFetchData (data) {
    return {
        type: FETCH_DATA,
        payload: data
    };
}

export function fetchData() {
    return (dispatch) => {
        const url = DATA_API;
        axios.get(url)
            .then((response) => {
                dispatch(dispatchFetchData(response.data));
            })
            .catch((error) => {
                console.log('Error occurred: ', error);
            })
    }
}

export function dispatchDailyData(data) {
    return {
        type: FETCH_DAILY_DATA,
        payload: data
    }
}

export function fetchDailyData() {
    return (dispatch) => {
        const url = DAILY_DATA_API;
        axios.get(url)
            .then((response) => {
                dispatch(dispatchDailyData(response.data));
            })
            .catch((error) => {
                console.log('Error occurred: ', error);
            })
    }
}

export function dispatchCountries(data) {
    return {
        type: FETCH_COUNTRIES,
        payload: data
    }
}

export function fetchCountries() {
    return (dispatch) => {
        const url = FETCH_COUNTRIES_API;
        axios.get(url)
            .then((response) => {
                dispatch(dispatchCountries(response.data));
            })
            .catch((error) => {
                console.log('Error occurred: ', error);
            })
    }
}