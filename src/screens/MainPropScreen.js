import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Card, CardSection, HeaderSection, Button } from '../common';
import { ListOfPropositions } from '../components/ListOfPropositions';

export default class MainPropScreen extends Component {
  static navigationOptions = {
    header: null
  }
  onPlaceButtonPress() {
    this.props.navigation.navigate('place');
  }
  renderPlaceButton() {
    return (
      <Button onPress={this.onPlaceButtonPress.bind(this)}>
        Miejsce!
      </Button>
    );
  }

  render() {
    return (
      <View>
        <HeaderSection headerText='MainPropScreen' />
        <Card>
          <CardSection>
            {this.renderPlaceButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}
