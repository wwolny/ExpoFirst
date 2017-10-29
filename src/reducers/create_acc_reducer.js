import {
  CREATE_EMAIL_CHANGED,
  CREATE_PASSWORD_CHANGED,
  CREATE_USER_WITH_EMAIL_AND_PASSWORD,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  newemail: '',
  newpassword: '',
  user: null,
  error: '',
  loading: false,
  credential: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EMAIL_CHANGED:
      return { ...state, newemail: action.payload };
    case CREATE_PASSWORD_CHANGED:
      return { ...state, newpassword: action.payload };
    case CREATE_USER_WITH_EMAIL_AND_PASSWORD:
      return { ...state, loading: true, error: '' };
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case CREATE_USER_FAIL:
      return {
        ...state,
        error: 'Ten mail już istnieje, hasło powinno mieć 6 znaków',
        newpassword: '',
        loading: false
    };
    default:
      return state;
  }
};
