import firebase from 'firebase';
import {
  CREATE_EMAIL_CHANGED,
  CREATE_PASSWORD_CHANGED,
  CREATE_USER_WITH_EMAIL_AND_PASSWORD,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
} from './types';

export const emailChangedCreate = (text) => {
  return {
    type: CREATE_EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChangedCreate = (text) => {
  return {
    type: CREATE_PASSWORD_CHANGED,
    payload: text
  };
};

export const createUserWithEmailAndPassword = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER_WITH_EMAIL_AND_PASSWORD });
    console.log(password);
    console.log(email);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => createUserSuccess(dispatch, user))
      .catch(() => createUserFail(dispatch));
  };
};

const createUserFail = (dispatch) => {
  dispatch({ type: CREATE_USER_FAIL });
};

const createUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: user
  });
};
