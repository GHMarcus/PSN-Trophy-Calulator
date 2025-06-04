import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LevelHeader from "../components/levelHeader";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <LevelHeader />
            </View>

            <View style={styles.tableContainer}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "orange",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    tableContainer: {
        backgroundColor: "blue",
        flex: 2
    }
});
