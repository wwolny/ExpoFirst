import Expo from 'expo';
import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { Spinner } from './src/common';
import store from './src/store';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MainPropScreen from './src/screens/MainPropScreen';
import PlaceScreen from './src/screens/PlaceScreen';
import PrefScreen from './src/screens/PrefScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import CategoryPropScreen from './src/screens/CategoryPropScreen';
import MyAccScreen from './src/screens/MyAccScreen';

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD5aHdi4pzlcF2HPEKHDul7Hek8h2j8UJ4',
      authDomain: 'expoone-62e50.firebaseapp.com',
      databaseURL: 'https://expoone-62e50.firebaseio.com',
      projectId: 'expoone-62e50',
      storageBucket: 'expoone-62e50.appspot.com',
      messagingSenderId: '98374872463'
    };
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        this.props.navigation.navigate('mainProp');
        return;
      case false:
        return;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          mainProp: {
            screen: StackNavigator({
              mainProp: { screen: MainPropScreen },
              place: { screen: PlaceScreen }
            })
          },
          pref: { screen: PrefScreen },
          category: {
            screen: StackNavigator({
              category: { screen: CategoryScreen },
              categoryProp: { screen: CategoryPropScreen },
              place: { screen: PlaceScreen }
            })
          },
          myAcc: { screen: MyAccScreen }
        }, {
          tabBarPosition: 'bottom',
          lazy: true,
          swipeEnabled: true
        }),
        navigationOptions: () => ({
          header: null
        })
      }
    }, {
      navigationOptions: {
          tabBarVisible: true
      },
      swipeEnabled: false,
      lazy: true,
      animationEnabled: false
    });

    return (
      <Provider store={store}>
        <View>
          <MainNavigator />
          {this.renderContent()}
        </View>
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
