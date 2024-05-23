// context/ThemeContext.tsx
import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';

interface ThemeContextProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
interface LayoutProps {
    children: ReactNode; // Define the children prop
}

export const ThemeProvider: React.FC<LayoutProps> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Default to light mode

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${theme === 'dark' ? 'dark' : ''}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
