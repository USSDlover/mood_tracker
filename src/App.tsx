import React from 'react';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';
import { NavigationContainer } from '@react-navigation/native';

export const App: React.FC = () => {
  return (
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
  )
}
