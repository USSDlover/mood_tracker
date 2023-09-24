import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';
import { HomeIcon } from '../components/Icons';

const imageUrl = 'https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=';
const background = require('../../assets/background.jpg');

export const HomeScreen: React.FC = () => {
    const appContext = useAppContext();

    return (
        <ImageBackground source={background} style={styles.container}>
            <HomeIcon />
            <MoodPicker handleSelectMood={appContext.handleSelectMood} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
