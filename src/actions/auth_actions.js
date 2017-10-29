import firebase from 'firebase';
import {
  AUTH_EMAIL_CHANGED,
  AUTH_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  FACEBOOK_LOGIN_USER,
  BLANK_LOG_IN_DATA
} from './types';

export const FacebookLoginUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: FACEBOOK_LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const emailChangedAuth = (text) => {
  return {
    type: AUTH_EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChangedAuth = (text) => {
  return {
    type: AUTH_PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

export const blankLogInData = () => {
  return { type: BLANK_LOG_IN_DATA };
};
