import { FETCH_COUNTRIES } from "../actionConstants";

export default function fetchCountries(state=[], action) {
    switch(action.type) {
        case FETCH_COUNTRIES:
            let data = action.payload.countries;
            data = data.map(({name}) => name);
            return [
                ...state,
                ...data
            ]
        default:
            return state;
    }
}