import {combineReducers} from 'redux';
import agents from './agents'
import filter from './filter'

const reducers = combineReducers({
	agents,
	filter
});
export default reducers;