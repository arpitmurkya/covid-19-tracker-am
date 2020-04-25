import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// Reducers
import fetchedData from './reducers/fetchData';
import fetchedDailyData from './reducers/fetchDailyData';
import fetchedCountries from './reducers/fetchCountries';

// Creating Root Reducer
const rootReducer = combineReducers({
    fetchedData,
    fetchedDailyData,
    fetchedCountries
});

// Create Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;