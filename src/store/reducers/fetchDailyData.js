import { FETCH_DAILY_DATA } from "../actionConstants";

export default function fetchDailyData (state=[], action) {
    switch(action.type) {
        case FETCH_DAILY_DATA:
            const data = action.payload.map((item) => ({
                confirmed: item.confirmed.total,
                deaths: item.deaths.total,
                date: item.reportDate
            }))
            return [
                ...state,
                ...data
            ]
        default:
            return state;
    }
}