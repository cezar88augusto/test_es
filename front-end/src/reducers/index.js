import { combineReducers } from 'redux';
import user from './user';
import users from './data';

const rootReducers = combineReducers({ user, users });

export default rootReducers;
