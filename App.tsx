import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import SwimmerScreen from './Screens/SwimmerScreen';
import ResultScreen from './Screens/ResultScreen';
import Settings from './Screens/Settings';
import Privacy from './Screens/Privacy';
import SwimmerData from './SwimmerData';
import Swimmer from './Swimmer';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import NavBar from './Screens/NavBar';
import {Theme} from 'react-native-paper/lib/typescript/types';

const Stack = createNativeStackNavigator();

const theme: Theme = {
  ...PaperDefaultTheme,
  mode: 'exact',
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#546f7a',
  },
  fonts: {
    regular: {
      fontFamily: 'proxima nova',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'proxima nova',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'proxima nova',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'proxima nova',
      fontWeight: 'normal',
    },
  },
};

// TODO app logo https://medium.com/@ansonmathew/app-icon-in-react-native-ios-and-android-6165757e3fdb

const App = () => {
  const [swimmers, setSwimmers] = React.useState<Swimmer[]>([]);

  return (
    <PaperProvider theme={theme}>
      <SwimmerData.Provider value={{swimmers, setSwimmers}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Lap Timer"
            screenOptions={{
              header: props => <NavBar {...props} />,
              orientation: 'portrait_up',
            }}>
            <Stack.Screen name="Lap Timer" component={HomeScreen} />
            <Stack.Screen name="Stopwatch" component={SwimmerScreen} />
            <Stack.Screen name="Results" component={ResultScreen} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Privacy" component={Privacy} />
          </Stack.Navigator>
        </NavigationContainer>
      </SwimmerData.Provider>
    </PaperProvider>
  );
};

export default App;
