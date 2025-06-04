import { ThemedButton } from "@/src/components/ThemedButton";
import { ThemedCard } from "@/src/components/ThemedCard";
import { ThemedInput } from "@/src/components/ThemedInput";
import { ThemedText } from "@/src/components/ThemedText";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./theme";

const ThemeContext = createContext({
    theme: lightTheme,
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemScheme = useColorScheme(); // "light" | "dark" | null
    const [isDark, setIsDark] = useState(systemScheme === "dark");

    useEffect(() => {
        if (systemScheme) setIsDark(systemScheme === "dark");
    }, [systemScheme]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ theme: isDark ? darkTheme : lightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
export const Text = ThemedText;
export const Button = ThemedButton;
export const Card = ThemedCard;
export const Input = ThemedInput;
