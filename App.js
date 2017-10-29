import Expo from 'expo';
import React from 'react';
import firebase from 'firebase';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/store';
import AuthScreen from './src/screens/AuthScreen';
import CreateAccScreen from './src/screens/CreateAccScreen';
import MainPropScreen from './src/screens/MainPropScreen';
import PlaceScreen from './src/screens/PlaceScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import CategoryPropScreen from './src/screens/CategoryPropScreen';
import MyAccScreen from './src/screens/MyAccScreen';

export default class App extends React.Component {
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
  }

  render() {
    const MainNavigator = TabNavigator({
      auth: { screen: AuthScreen },
      createAcc: { screen: CreateAccScreen },
      main: {
        screen: TabNavigator({
          mainProp: {
            screen: StackNavigator({
              mainProp: { screen: MainPropScreen },
              place: { screen: PlaceScreen }
            })
          },
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
          tabBarVisible: false
      },
      swipeEnabled: false,
      lazy: true,
      animationEnabled: false
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
