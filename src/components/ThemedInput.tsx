import { useTheme } from "@/src/constants/theme/ThemeContext";
import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export const ThemedInput = ({ style, ...rest }: TextInputProps) => {
    const { theme } = useTheme();

    return (
        <TextInput
            {...rest}
            placeholderTextColor={theme.colors.border}
            style={[
                styles.input,
                {
                    backgroundColor: theme.colors.inputBackground,
                    color: theme.colors.text,
                    borderColor: theme.colors.border
                },
                style
            ]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        marginVertical: 6
    }
});
