/* To finalize installation of react-native-gesture-handler, add the following at the top
(make sure it's at the top and there's nothing else before it) of your entry file */
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/home';

const GlobalStateContext = React.createContext();

const RootStack = createStackNavigator();
const { Navigator, Screen } = RootStack;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      /* eslint-disable */
      userInfo: null,
      setGlobalState: setFn => this.setState(setFn),
      /* eslint-enable */
    };
  }

  render() {
    return (
      <GlobalStateContext.Provider value={this.state}>
        <View style={styles.appContainer}>
          <NavigationContainer>
            <Navigator initialRouteName="HomeScreen">
              <Screen name="ScreenHome" component={HomeScreen} />
            </Navigator>
          </NavigationContainer>
        </View>
      </GlobalStateContext.Provider>
    );
  }
}