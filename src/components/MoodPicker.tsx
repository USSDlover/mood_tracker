import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';
import { theme } from '../theme';
import Reanimated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const moodOptions: MoodOptionType[] = [
    { emoji: '👨‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
    handleSelectMood: (mood: MoodOptionType) => void;
}

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

export const MoodPicker: React.FC<MoodPickerProps> = ({ handleSelectMood }) => {
    const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();
    const [hasSelected, setHasSelected] = React.useState(false);

    const handleChoose = React.useCallback(() => {
        if (selectedMood) {
            handleSelectMood(selectedMood);
            setSelectedMood(undefined);
            setHasSelected(true);
        }
    }, [handleSelectMood, selectedMood]);

    const chooseBtnStyle = useAnimatedStyle(() => {
        return {
            opacity: selectedMood ? withSpring(1) : 0.5,
            transform: [{ scale: selectedMood ? withTiming(1) : 0.8 }]
        }
    });

    if (hasSelected) {
        const butterFly = require('../../assets/butterflies.png');

        return (
            <View>
                <Image style={styles.image} source={butterFly} />
                <Pressable style={styles.button} onPress={() => setHasSelected(false)}>
                    <Text style={styles.buttonText}>Choose another!</Text>
                </Pressable>
            </View>
        )
    }

    return <View style={styles.container}>
        <Text style={styles.heading}>How are you right now?</Text>
        <View style={styles.moodPicker}>
            {moodOptions.map(option => (
                <View key={option.emoji}>
                    <Pressable
                        onPress={() => setSelectedMood(option)}
                        style={[styles.modItem, selectedMood?.emoji === option.emoji ? styles.selectedMood : undefined]}
                    >
                        <Text>{option.emoji}</Text>
                    </Pressable>
                    <Text style={styles.descriptionText}>{option.emoji === selectedMood?.emoji ? option.description : undefined}</Text>
                </View>
            ))}
        </View>
        <ReanimatedPressable
            style={[styles.button, chooseBtnStyle]}
            onPress={handleChoose}
        >
            <Text style={styles.buttonText}>Choose</Text>
        </ReanimatedPressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: theme.colorPurple,
        borderRadius: 15,
        padding: 15,
        marginHorizontal: 20,
        backgroundColor: 'rgba(13,58,162,0.1)'
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
        letterSpacing: 1,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: theme.fontFamilyBold
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
    },
    image: { alignSelf: 'center' }
});
