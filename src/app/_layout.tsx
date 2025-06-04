import { useTheme } from "@/src/constants/theme/ThemeContext";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

function LayoutWithTheme() {
    const { theme } = useTheme();

    return (
        <Stack
            screenOptions={{ headerStyle: { backgroundColor: theme.colors.card }, headerTintColor: theme.colors.text }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}

export default function RootLayout() {
    const [appIsReady, setAppIsReady] = useState(false);

    const onLayoutRootView = useCallback(() => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            SplashScreen.hide();
        }
    }, [appIsReady]);

    useEffect(() => {
        setAppIsReady(true);
    }, []);

    if (!appIsReady) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={styles.container}>
            <LayoutWithTheme />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
