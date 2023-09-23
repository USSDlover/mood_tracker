import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MoodOptionType } from '../types';
import { theme } from '../theme';

const moodOptions: MoodOptionType[] = [
    { emoji: '👨‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
    const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();

    return <View style={styles.moodOptions}>
        {moodOptions.map(option => (
            <View>
                <Pressable
                    onPress={() => setSelectedMood(option)}
                    style={[styles.modItem, selectedMood?.emoji === option.emoji ? styles.selectedMood : undefined]}
                >
                    <Text key={option.emoji}>{option.emoji}</Text>
                </Pressable>
                <Text style={styles.descriptionText}>{option.emoji === selectedMood?.emoji ? option.description : undefined}</Text>
            </View>
        ))}
    </View>
}

const styles = StyleSheet.create({
    moodOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modItem: {
        height: 60,
        width:60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedMood: {
        borderColor: theme.colorWhite,
        borderWidth: 2,
        backgroundColor: theme.colorPurple,
    },
    descriptionText: {
        textAlign: 'center',
        color: theme.colorPurple,
        fontWeight: 'bold',
        fontSize: 10
    }
});
