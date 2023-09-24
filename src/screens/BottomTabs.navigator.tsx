import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen } from './Home.screen';
import { HistoryScreen } from './History.screen';
import { Text } from 'react-native';
import { AnalyticIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { AnalyticScreen } from './Analytic.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    switch (route.name) {
                        case 'Home':
                            return <HomeIcon size={size} color={color} />;
                        case 'History':
                            return <HistoryIcon size={size} color={color} />;
                        case 'Analytics':
                            return <AnalyticIcon size={size} color={color} />;
                        default:
                            return <Text>{route.name}</Text>;
                    }
                }
            })}
        >
            <BottomTabs.Screen name={'Home'} component={HomeScreen} />
            <BottomTabs.Screen name={'History'} component={HistoryScreen} />
            <BottomTabs.Screen name={'Analytics'} component={AnalyticScreen} />
        </BottomTabs.Navigator>
    )
}
