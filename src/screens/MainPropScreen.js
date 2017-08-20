import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, HeaderSection } from '../common';
import { ListOfPropositions } from '../components/ListOfPropositions';

export default class MainPropScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <HeaderSection headerText='MainPropScreen' />
        <Card>
          <CardSection>
          </CardSection>
        </Card>
      </View>
    );
  }
}
