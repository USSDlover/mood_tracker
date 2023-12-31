import React from 'react';
import { MoodOptionType, MoodOptionWithTimestamp } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppData = {
    moodList: MoodOptionWithTimestamp[];
}

type AppContextType = {
    moodList: MoodOptionWithTimestamp[];
    handleSelectMood: (mood: MoodOptionType) => void;
    handleDeleteMood: (mood: MoodOptionWithTimestamp) => void;
}

const AppContext = React.createContext<AppContextType>({
    moodList: [],
    handleSelectMood: () => {},
    handleDeleteMood: () => {}
});

type AppProviderProps = {
    children?: React.ReactElement
}

const dataKey = 'stored-moods';

const setAppData = async (appData: AppData)=> {
    try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
    } catch (e) {
        console.error('Failed to store the data', e);
    }
}

const getAppData = async (): Promise<AppData | null> => {
    try {
        const appData = await AsyncStorage.getItem(dataKey);
        if (appData) {
            return JSON.parse(appData);
        }
    } catch (e) {
        console.error('Failed to get stored data', e);
    }

    return null;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([])

    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => {
            const newMoodList = [
                ...current,
                { mood: selectedMood, timestamp: Date.now() }
            ];

            setAppData({ moodList: newMoodList });

            return newMoodList;
        });
    }, []);

    const handleDeleteMood = React.useCallback((mood: MoodOptionWithTimestamp) => {
        setMoodList(current => {
            const updatedMoodList = current.filter(val => val.timestamp !== mood.timestamp);
            setAppData({ moodList: updatedMoodList });
            return updatedMoodList;
        })
    }, []);

    React.useEffect(() => {
        const getStoredData = async () => {
            const storedData = await getAppData();

            if (storedData) {
                setMoodList(storedData.moodList);
            }
        };

        getStoredData();
    }, []);

    return (
        <AppContext.Provider value={{ moodList, handleSelectMood, handleDeleteMood }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => React.useContext(AppContext);
