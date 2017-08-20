import { combineReducers } from 'redux';
import auth from './auth_reducer';
import createAcc from './create_acc_reducer';

export default combineReducers({
  auth, createAcc
});
