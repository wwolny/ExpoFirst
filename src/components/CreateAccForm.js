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

class CreateAccForm extends Component {
  onEmailChange(text) {
    this.props.emailChangedCreate(text);
  }

  onPasswordChange(text) {
      this.props.passwordChangedCreate(text);
  }

  onButtonEmailPress() {
    const { email, password } = this.props;

    this.props.createUserWithEmailAndPassword({ email, password });
  }
  
  renderButtonEmail() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this.onButtonEmailPress().bind(this)}>
        Stwórz!
      <Button />
    );
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
            {this.renderButtonEmail()}
          </CardSection>

          <CardSection>
            <Button onPress={this.setState(this.state.createForm: false)}>
              Wróć!
            </Button>
          </CardSection>
        </Card>
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
export default CreateAccForm;
