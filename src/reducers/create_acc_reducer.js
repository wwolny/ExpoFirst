import {
  CREATE_EMAIL_CHANGED,
  CREATE_PASSWORD_CHANGED,
  CREATE_USER_WITH_EMAIL_AND_PASSWORD,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_COMPANY_SUCCESS,
  BLANK_CREATE_DATA,
  CREATE_COMPANY_WITH_EMAIL_AND_PASSWORD
} from '../actions/types';

const INITIAL_STATE = {
  newemail: '',
  newpassword: '',
  user: null,
  error: '',
  loadingUser: false,
  loadingCompany: false,
  credential: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EMAIL_CHANGED:
      return { ...state, newemail: action.payload };
    case CREATE_PASSWORD_CHANGED:
      return { ...state, newpassword: action.payload };
    case CREATE_USER_WITH_EMAIL_AND_PASSWORD:
      return { ...state, loadingUser: true, error: '' };
    case CREATE_COMPANY_WITH_EMAIL_AND_PASSWORD:
      return { ...state, loadingCompany: true, error: '' };
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case CREATE_COMPANY_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case CREATE_USER_FAIL:
      return {
        ...state,
        error: 'Ten mail już istnieje, hasło powinno mieć 6 znaków',
        newpassword: '',
        loadingCompany: false,
        loadingUser: false
      };
    case BLANK_CREATE_DATA:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
