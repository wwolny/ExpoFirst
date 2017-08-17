import _ from 'lodash';
import React, { Component } from 'react';
import { Image, View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { CardSection, ContinueButton } from '../common';

class WelcomeScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false
  }
  state = { token: true }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('mainProp');
      this.setState({ token: false });
    } else {
      this.setState({ token: false });
    }
  }

  render() {
    if (this.state.token === true) {
      return <AppLoading />;
    }

    return (
      <Image
        source={require('../img/welcome.jpg')}
        style={styles.ImageStyle}
      >
        <Text style={styles.HeaderStyle}>
            PLACES!
        </Text>
        <CardSection
          style={styles.SectionStyle}
        >
          <ContinueButton onPress={() => this.props.navigation.navigate('auth')}>
            Kontynuuj!
          </ContinueButton>
        </CardSection>
      </Image>
    );
  }
}

const styles = {
  HeaderStyle: {
    fontSize: 80,
    alignSelf: 'center',
    color: '#dc143c',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  SectionStyle: {
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  ImageStyle: {
    justifyContent: 'center',
    flex: 1,
    width: null,
    height: null
  }
};


export default WelcomeScreen;
