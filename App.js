import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { default as theme } from './custom-theme.json';
import { CommonContextProvider } from './context/CommonContext';
import 'react-native-gesture-handler';

export default () => (
  <CommonContextProvider>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <AppNavigator />
    </ApplicationProvider>
  </CommonContextProvider>
);


