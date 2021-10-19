import {createStore} from 'redux';
import appReducers from './reducers/appReducer';


const store=createStore(appReducers)

window.store=store;
export default store;