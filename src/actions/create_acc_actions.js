import firebase from 'firebase';
import {
  CREATE_EMAIL_CHANGED,
  CREATE_PASSWORD_CHANGED,
  CREATE_USER_WITH_EMAIL_AND_PASSWORD,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_COMPANY_SUCCESS,
  BLANK_CREATE_DATA,
  CREATE_COMPANY_WITH_EMAIL_AND_PASSWORD
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

export const createUserWithEmailAndPassword = ({ newemail, newpassword }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER_WITH_EMAIL_AND_PASSWORD });

    firebase.auth().createUserWithEmailAndPassword(newemail, newpassword)
      .then(user => createUserSuccess(dispatch, user, newemail))
      .catch(() => createUserFail(dispatch));
  };
};

export const createCompanyWithEmailAndPassword = ({ newemail, newpassword }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_COMPANY_WITH_EMAIL_AND_PASSWORD });

    firebase.auth().createUserWithEmailAndPassword(newemail, newpassword)
      .then(user => createCompanySuccess(dispatch, user, newemail))
      .catch(() => createUserFail(dispatch));
  };
};

const createUserFail = (dispatch) => {
  dispatch({ type: CREATE_USER_FAIL });
};

const createUserSuccess = (dispatch, user, newemail) => {
    firebase.database().ref(`/users/${user.uid}`)
    .set({
      username: newemail,
      mail: newemail,
      type: 'user'
    });
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: user
    });
};

const createCompanySuccess = (dispatch, user, newemail) => {
    firebase.database().ref(`/companies/${user.uid}`)
      .set({
        compname: newemail,
        www: 'brak',
        mail: newemail,
        address: 'brak',
        description: 'brak',
        longitude: 52.229676,
        latitude: 21.012229,
        opensAt: '08:00',
        closesAt: '20:00',
        type: 'company'
      });
    dispatch({
      type: CREATE_COMPANY_SUCCESS,
      payload: user
    });
};

export const blankCreateData = () => {
  return { type: BLANK_CREATE_DATA };
};
