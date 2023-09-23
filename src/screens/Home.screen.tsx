import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';
import { MoodItemRow } from '../components/MoodItemRow';

export const HomeScreen: React.FC = () => {
    const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([])

    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => [
            ...current, { mood: selectedMood, timestamp: Date.now() }
        ]);
    }, []);

    return <View style={styles.container}>
        <MoodPicker handleSelectMood={handleSelectMood} />
        {moodList.map(item => <MoodItemRow item={item} key={item.timestamp} />)}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    }
})
