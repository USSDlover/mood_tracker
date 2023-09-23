import React from 'react';
import { Text, View } from 'react-native';
import { useAppContext } from '../App.provider';

export const HistoryScreen: React.FC = () => {
    const appContext = useAppContext();

    return <View>
        <Text>The History Screen</Text>
        <Text>{appContext.greeting}</Text>
    </View>
}
