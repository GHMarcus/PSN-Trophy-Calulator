import { useTheme } from "@/src/constants/theme/ThemeContext";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export const ThemedCard = ({ children, style, ...rest }: ViewProps) => {
    const { theme } = useTheme();

    return (
        <View
            {...rest}
            style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }, style]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        marginVertical: 8
    }
});
