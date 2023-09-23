import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';
import { format } from 'date-fns';

export const HomeScreen: React.FC = () => {
    const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([])

    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => [
            ...current, { mood: selectedMood, timestamp: Date.now() }
        ]);
    }, []);

    return <View style={styles.container}>
        <MoodPicker handleSelectMood={handleSelectMood} />
        {moodList.map(item =>
            <Text key={item.timestamp}>
                {item.mood.emoji} {format(new Date(item.timestamp), 'd')}
            </Text>
        )}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    }
})
