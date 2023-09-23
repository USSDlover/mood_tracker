import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MoodOptionType } from '../types';

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
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: '#454C73',
    },
    descriptionText: {
        textAlign: 'center',
        color: '#454C73',
        fontWeight: 'bold',
        fontSize: 10
    }
});
