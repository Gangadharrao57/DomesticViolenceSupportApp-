import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'purple' | 'blue' | 'green' | 'pink';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeColors = {
  purple: {
    primary: '#9333EA',
    secondary: '#A855F7',
    accent: '#C084FC',
    bg: '#FAF5FF',
    dark: '#581C87'
  },
  blue: {
    primary: '#2563EB',
    secondary: '#3B82F6',
    accent: '#60A5FA',
    bg: '#EFF6FF',
    dark: '#1E3A8A'
  },
  green: {
    primary: '#059669',
    secondary: '#10B981',
    accent: '#34D399',
    bg: '#ECFDF5',
    dark: '#065F46'
  },
  pink: {
    primary: '#DB2777',
    secondary: '#EC4899',
    accent: '#F472B6',
    bg: '#FDF2F8',
    dark: '#9F1239'
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('purple');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme && themeColors[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    const colors = themeColors[theme];
    document.documentElement.style.setProperty('--color-primary', colors.primary);
    document.documentElement.style.setProperty('--color-secondary', colors.secondary);
    document.documentElement.style.setProperty('--color-accent', colors.accent);
    document.documentElement.style.setProperty('--color-bg', colors.bg);
    document.documentElement.style.setProperty('--color-dark', colors.dark);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('app-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
