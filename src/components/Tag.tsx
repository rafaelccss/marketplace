import { Text, StyleSheet, View } from "react-native";
import theme from "src/theme";

type Props = {
    isNew: boolean
    isSmallTag?: boolean
}

export function Tag(props: Props) {
    return (
        <View style={[
            props.isNew ? styles.containerNew : styles.containerUsed,
            props.isSmallTag ? styles.containerPaddingSmall : styles.containerPaddingNormal
        ]}>
            <Text style={styles.text}>
                {props.isNew ? "Novo" : "Usado"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.XSM,
        color: "#FFF"
    },
    containerNew: {
        backgroundColor: theme.COLORS.BLUE,
        borderRadius: 9999
    },
    containerUsed: {
        backgroundColor: theme.COLORS.GRAY_2,
        borderRadius: 9999
    },
    containerPaddingSmall: {
        paddingHorizontal: 8,
        paddingVertical: 2
    },
    containerPaddingNormal: {
        paddingHorizontal: 16,
        paddingVertical: 6
    },
})