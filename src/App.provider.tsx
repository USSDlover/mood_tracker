import React from 'react';

type AppContextType = {
    greeting: string;
}

const AppContext = React.createContext<AppContextType>({
    greeting: 'Hello'
});

type AppProviderProps = {
    children?: React.ReactElement
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <AppContext.Provider value={{ greeting: 'Hello Context' }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => React.useContext(AppContext);
