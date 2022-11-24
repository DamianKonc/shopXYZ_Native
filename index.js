/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/screens/app/App';
import { WeatherAppScreen } from './src/screens/weatherAppScreen';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
