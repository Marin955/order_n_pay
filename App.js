import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartSlider from './screens/StartSlider';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CaffeBarsList from './screens/CaffeBarsList';
import ChooseDrinks from './screens/ChooseDrinks';

class App extends React.Component {
  render () {
    return (
      <AppContainer />
    );
  };
}

const AppNavigator = createStackNavigator(
  {
    Start: StartSlider,
    Home: HomeScreen,
    Profile: ProfileScreen,
    Kafici: CaffeBarsList,
    OdabirPica: ChooseDrinks
  },

  {
    initialRouteName: 'Start',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#262c47'
      },
      headerTintColor: 'white'
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default App;

