// this file will combine all the slices/reducers
import { combineReducers } from 'redux';
import authSlice from './authSlice';

const rootReducer = combineReducers({
    auth: authSlice,
    
  });
  
  export default rootReducer;