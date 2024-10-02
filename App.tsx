import { NavigationContainer } from '@react-navigation/native';
import { Fragment } from 'react';
import StackNavigation from './src/component/stack/stackNavigation';
import { GlobalContextProvider } from './src/context/GlobalContext';
import { ToastProvider } from 'react-native-toast-notifications';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <ToastProvider>
        <Fragment>
          <GlobalContextProvider>
            <StatusBar barStyle={'dark-content'} />
            <StackNavigation />
          </GlobalContextProvider>
        </Fragment>
      </ToastProvider>
    </NavigationContainer>
  );
}