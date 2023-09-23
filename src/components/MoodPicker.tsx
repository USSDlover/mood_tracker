import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
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

    return <View style={styles.container}>
        <Text style={styles.heading}>How are you right now?</Text>
        <View style={styles.moodPicker}>
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
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Choose</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: theme.colorPurple,
        borderRadius: 15,
        padding: 15
    },
    moodPicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: theme.colorPurple,
        width: 150,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
        padding: 10
    },
    buttonText: {
        color: theme.colorWhite,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: 20,
        textAlign: 'center'
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
