import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner,
  HeaderSection
} from '../common';

export default class userAccForm extends Component {
  render() {
    return (
      <View>
        <HeaderSection headerText="Konto User!" />
      </View>
    );
  }
}
/*const mapStateToProps = ({ createAcc }) => {
  const { email, password, error, loading } = createAcc;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChangedCreate,
  passwordChangedCreate,
  createUserWithEmailAndPassword
})(CreateAccForm);
*/
