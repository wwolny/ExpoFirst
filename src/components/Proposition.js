import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from '../common';

class Proposition extends Component {
  onRowPress() {
    this.props.navigation.navigate('place');
  }

  render() {
    const { name } = this.props.place;
    const { ViewStyle, TextStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={ViewStyle}>
          <CardSection>
            <Text style={TextStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  ViewStyle: {},
  TextStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default Proposition;
