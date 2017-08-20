import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChangedAuth, passwordChangedAuth, loginUser } from '../actions';
import { Spinner, Button, Card, CardSection, Input } from '../common';
import { CreateAccForm } from '../components/CreateAccForm';

class AuthScreen extends Component {
  onEmailChange(text) {
      this.props.emailChangedAuth(text);
  }

  onPasswordChange(text) {
      this.props.passwordChangedAuth(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
    if (firebase.auth().currentUser !== null) {
        this.props.navigation.navigate('mainProp');
    }
  }

  onButtonCreatePress() {
    return <CreateAccForm />;
  }

  renderCreateButton() {
    if (this.props.createLoading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonCreatePress.bind(this)}>
        Stwórz konto!
      </Button>
    );
  }

  renderLogInButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Zaloguj się!
      </Button>
    );
  }

  render() {
    return (
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
            secureTextEntry
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

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChangedAuth, passwordChangedAuth, loginUser
})(AuthScreen);
