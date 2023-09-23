import React from 'react';
import { MoodOptionType, MoodOptionWithTimestamp } from './types';

type AppContextType = {
    moodList: MoodOptionWithTimestamp[];
    handleSelectMood: (mod: MoodOptionType) => void;
}

const AppContext = React.createContext<AppContextType>({
    moodList: [],
    handleSelectMood: () => {}
});

type AppProviderProps = {
    children?: React.ReactElement
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([])

    const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
        setMoodList(current => [
            ...current, { mood: selectedMood, timestamp: Date.now() }
        ]);
    }, []);

    return (
        <AppContext.Provider value={{ moodList, handleSelectMood }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => React.useContext(AppContext);
