import Expo from 'expo';
import React from 'react';
import firebase from 'firebase';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

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
        <MainNavigator />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
