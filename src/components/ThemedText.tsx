import { useTheme } from "@/src/constants/theme/ThemeContext";
import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

type ThemedTextProps = RNTextProps & {
    variant?: "default" | "title" | "subtitle" | "caption";
};

export const ThemedText = ({ style, variant = "default", ...rest }: ThemedTextProps) => {
    const { theme } = useTheme();

    const fontSizeMap = {
        default: 16,
        title: 24,
        subtitle: 18,
        caption: 12
    };

    return (
        <RNText
            {...rest}
            style={[
                {
                    color: theme.colors.text,
                    fontSize: fontSizeMap[variant]
                },
                style
            ]}
        />
    );
};
