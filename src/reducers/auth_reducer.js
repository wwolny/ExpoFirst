import {
  AUTH_EMAIL_CHANGED,
  AUTH_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  BLANK_LOG_IN_DATA
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  credential: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case AUTH_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Złe hasło lub email', password: '', loading: false };
    case BLANK_LOG_IN_DATA:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
