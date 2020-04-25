import { FETCH_DATA } from "../actionConstants";

export default function fetchData (state={}, action) {
    switch(action.type) {
        case FETCH_DATA:
            const { confirmed, recovered, deaths, lastUpdate } = action.payload;
            const data = { confirmed, recovered, deaths, lastUpdate };
            return {
                ...state,
                ...data
            }
        default:
            return state;
    }
}