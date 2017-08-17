import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, HeaderSection } from '../common';
import { ListOfPropositions } from '../components/ListOfPropositions';

export default class MainPropScreen extends Component {
  static navigationOptions = {

  }
  render() {
    return (
      <View>
        <HeaderSection>
            MainPropScreen
        </HeaderSection>
        <Card>
          <CardSection>
            <ListOfPropositions />
          </CardSection>
        </Card>
      </View>
    );
  }
}
