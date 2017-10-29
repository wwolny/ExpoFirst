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
      this.props.passwordChangedCreate(text);
  }

  onButtonEmailPress() {
    const { newemail, newpassword } = this.props;

    this.props.createUserWithEmailAndPassword({ newemail, newpassword });
  }

  renderButtonEmail() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    console.log(this.props.newpassword);
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
              value={this.props.newemail}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.newpassword}
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
  const { newemail, newpassword, error, loading } = createAcc;

  return { newemail, newpassword, error, loading };
};

export default connect(mapStateToProps, {
  emailChangedCreate,
  passwordChangedCreate,
  createUserWithEmailAndPassword
})(CreateAccScreen);
