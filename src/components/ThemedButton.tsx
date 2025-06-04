import { useTheme } from "@/src/constants/theme/ThemeContext";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
};

export const ThemedButton = ({ title, onPress, style }: Props) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: theme.colors.primary }, style]}>
            <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center"
    }
});
