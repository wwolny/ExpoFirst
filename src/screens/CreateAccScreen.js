import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {
  emailChangedCreate,
  passwordChangedCreate,
  createUserWithEmailAndPassword
} from '../actions';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner,
  HeaderSection
} from '../common';

class CreateAccScreen extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('mainProp');
      }
    });
  }

  onEmailChange(text) {
    this.props.emailChangedCreate(text);
  }

  onPasswordChange(text) {
      console.log(this.password);
      this.props.passwordChangedCreate(text);
  }

  onButtonEmailPress() {
    const { email, password } = this.props;
    console.log(password);
    this.props.createUserWithEmailAndPassword({ email, password });
  }

  renderButtonEmail() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonEmailPress.bind(this)}>
        Stwórz!
      </Button>
    );
  }

  render() {
    return (
        <Card>
          <HeaderSection headerText="Stwórz konto!" />
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
            {this.renderButtonEmail()}
          </CardSection>

          <CardSection>
            <Button onPress={() => this.props.navigation.navigate('auth')}>
              Wróć!
            </Button>
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
const mapStateToProps = ({ createAcc }) => {
  const { email, passowrd, error, loading } = createAcc;

  return { email, passowrd, error, loading };
};

export default connect(mapStateToProps, {
  emailChangedCreate,
  passwordChangedCreate,
  createUserWithEmailAndPassword
})(CreateAccScreen);
