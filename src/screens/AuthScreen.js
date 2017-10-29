import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChangedAuth,
  passwordChangedAuth,
  loginUser,
  blankLogInData
} from '../actions';
import { HeaderSection, Spinner, Button, Card, CardSection, Input } from '../common';

class AuthScreen extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('mainProp');
      }
    });
  }

  onEmailChange(text) {
    this.props.emailChangedAuth(text);
  }

  onPasswordChange(text) {
    this.props.passwordChangedAuth(text);
  }

  onButtonLoginPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onButtonCreatePress() {
    this.props.blankLogInData();
    this.props.navigation.navigate('createAcc');
  }

  renderLogInButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonLoginPress.bind(this)}>
      Zaloguj się!
      </Button>
    );
  }

  renderCreateButton() {
    return (
      <Button onPress={this.onButtonCreatePress.bind(this)}>
        Stwórz konto!
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <HeaderSection headerText="PLACES!!!" />
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
            //secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderLogInButton()}
        </CardSection>

        <CardSection>
          {this.renderCreateButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  emailChangedAuth,
  passwordChangedAuth,
  loginUser,
  blankLogInData
})(AuthScreen);

/*
    if (firebase.auth().currentUser !== null) {
        this.props.navigation.navigate('mainProp');
    } else {
      this.props.navigation.navigate('auth');
    }
*/
