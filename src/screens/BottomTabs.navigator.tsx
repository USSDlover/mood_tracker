import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen } from './Home.screen';
import { HistoryScreen } from './History.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name={'Home'} component={HomeScreen} />
            <BottomTabs.Screen name={'History'} component={HistoryScreen} />
        </BottomTabs.Navigator>
    )
}
