import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {
  emailChangedCreate,
  passwordChangedCreate,
  createUserWithEmailAndPassword,
  createCompanyWithEmailAndPassword,
  blankCreateData
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

  onButtonCreateCompany() {
    const { newemail, newpassword } = this.props;

    this.props.createCompanyWithEmailAndPassword({ newemail, newpassword });
  }

  onButtonCreateUser() {
    const { newemail, newpassword } = this.props;
    this.props.createUserWithEmailAndPassword({ newemail, newpassword });
    this.props.blankCreateData();
  }

  onButtonBackToLogIn() {
    this.props.blankCreateData();
    this.props.navigation.navigate('auth');
  }

  renderButtonCreateCompany() {
    if (this.props.loadingCompany) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonCreateCompany.bind(this)}>
        Stwórz konto firmy!
      </Button>
    );
  }

  renderButtonCreateUser() {
    if (this.props.loadingUser) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonCreateUser.bind(this)}>
        Stwórz użytkownika!
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
            {this.renderButtonCreateCompany()}
          </CardSection>

          <CardSection>
            {this.renderButtonCreateUser()}
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonBackToLogIn.bind(this)}>
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
  const { newemail, newpassword, error, loadingUser, loadingCompany } = createAcc;

  return { newemail, newpassword, error, loadingUser, loadingCompany };
};

export default connect(mapStateToProps, {
  emailChangedCreate,
  passwordChangedCreate,
  createUserWithEmailAndPassword,
  createCompanyWithEmailAndPassword,
  blankCreateData
})(CreateAccScreen);
