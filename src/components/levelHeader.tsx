import { Card, Text } from "@/src/constants/theme/ThemeContext";
import { Image, StyleSheet, View } from "react-native";

export default function LevelHeader() {
    const img = require("@/src/assets/icons/levels/level_silver_2.png");
    const platinumTrophy = require("@/src/assets/icons/trophies/platinum_trophy.png");
    const goldTrophy = require("@/src/assets/icons/trophies/gold_trophy.png");
    const silverTrophy = require("@/src/assets/icons/trophies/silver_trophy.png");
    const bronzeTrophy = require("@/src/assets/icons/trophies/bronze_trophy.png");
    return (
        <Card style={styles.container}>
            <View style={styles.levelContainer}>
                <View style={styles.level}>
                    <Image source={img} resizeMode="contain" style={styles.trophyLevel}></Image>
                    <Text>Level 356</Text>
                </View>
                <View style={styles.levelProgress}>
                    <Text variant="title">51%</Text>
                </View>
                <View style={styles.tropyCount}>
                    <Text variant="title">3908</Text>
                    <Text variant="caption" numberOfLines={0} style={{ textAlign: "center" }}>
                        Trophäen insgeasmt
                    </Text>
                </View>
            </View>
            <View style={styles.trophiesContainer}>
                <View style={[styles.trophyContainer, { backgroundColor: "blue" }]}>
                    <Image source={platinumTrophy} resizeMode="contain" style={styles.trophy}></Image>
                    <Text variant="title">60</Text>
                </View>
                <View style={[styles.trophyContainer, { backgroundColor: "gold" }]}>
                    <Image source={goldTrophy} resizeMode="contain" style={styles.trophy}></Image>
                    <Text variant="title">60</Text>
                </View>
                <View style={[styles.trophyContainer, { backgroundColor: "silver" }]}>
                    <Image source={silverTrophy} resizeMode="contain" style={styles.trophy}></Image>
                    <Text variant="title">60</Text>
                </View>
                <View style={[styles.trophyContainer, { backgroundColor: "brown" }]}>
                    <Image source={bronzeTrophy} resizeMode="contain" style={styles.trophy}></Image>
                    <Text variant="title">60</Text>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        margin: 10
    },
    levelContainer: {
        height: 100,
        flexDirection: "row"
    },
    trophiesContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    trophyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column"
    },
    level: {
        // backgroundColor: "gray",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    levelProgress: {
        // backgroundColor: "green",
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    tropyCount: {
        // backgroundColor: "red",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        paddingBottom: 10
    },
    trophyLevel: {
        width: 50,
        height: 50
    },
    trophy: {
        width: 60,
        height: 60
    }
});
