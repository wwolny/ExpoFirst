import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Card, CardSection, HeaderSection, Button } from '../common';

export default class CategoryScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View>
        <HeaderSection headerText='Categoriess' />
        <Card>
          <CardSection>

          </CardSection>
        </Card>
      </View>
    );
  }
}
