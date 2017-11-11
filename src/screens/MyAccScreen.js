import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Card, CardSection, HeaderSection, Button } from '../common';
import { userAccForm, companyAccForm } from '../components';

export default class MyAccScreen extends Component {
  static navigationOptions = {
    header: null
  }


  LogOut() {
    firebase.auth().signOut();
    this.props.navigation.navigate('auth');
  }

  MyAccForm() {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`${currentUser.uid}`).once('value', (snapshot) => {
      const type = snapshot.val().type;
      console.log(type);
    });
    if (this.type === 'user') {
      console.log(this.type);
      return (
        <userAccForm />
      );
    } else {
      console.log(this.type);
      return (
        <companyAccForm />
      );
    }
  }

  render() {
    return (
      <View>
        <HeaderSection headerText='My Account' />
        <Card>
          <CardSection>
            {this.MyAccForm()}
          </CardSection>
          <CardSection>
            <Button onPress={this.LogOut.bind(this)}>
              Wyloguj!
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}
