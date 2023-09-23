import React from 'react';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './App.provider';

export const App: React.FC = () => {
  return (
      <AppProvider>
          <NavigationContainer>
              <BottomTabsNavigator />
          </NavigationContainer>
      </AppProvider>
  )
}
