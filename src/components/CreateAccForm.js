import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChangedCreate, passwordChangedCreate, createUserWithEmailAndPassword } from '../actions';
import { Button, Card, CardSection, Input, Spinner, HeaderSection } from '../common';

class CreateAccForm extends Component {

  onEmailChange(text) {
    this.props.emailChangedCreate(text);
  }

  onPasswordChange(text) {
      this.props.passwordChangedCreate(text);
  }

  render() {
    return (
      <View>
        <HeaderSection headerText="Stwórz konto!" />
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            />
          </CardSection>
          <CardSection>
            <Button>
              Stwórz!
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}
const mapStateToProps = ({ createAcc }) => {
  const { email, password, error, loading } = createAcc;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChangedCreate,
  passwordChangedCreate,
  createUserWithEmailAndPassword
})(CreateAccForm);
