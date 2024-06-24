import { StyleSheet, View, Text, ViewProps, TouchableOpacity } from "react-native";
import theme from "../theme"

import { Tag, ArrowRight } from "phosphor-react-native";

type Props = ViewProps & {
    numberOfAds: number
}

export function CardMyAds({ numberOfAds, ...rest }: Props) {
    return (
        <View {...rest}>
            <Text style={styles.text}>
                Seus produtos anunciados para venda
            </Text>

            <TouchableOpacity style={styles.container}>
                <Tag style={styles.tagIcon} size={22} />
                <View style={styles.containerNumberOfAds}>
                    <Text style={styles.textNumberOfAds}>{numberOfAds}</Text>
                    <Text style={styles.textDescription}>
                        anúncios ativos
                    </Text>
                </View>
                <Text style={styles.textMyAds}>
                    Meus anúncios
                </Text>
                <ArrowRight style={styles.arrowIcon} size={16} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${theme.COLORS.BLUE_LIGHT}10`,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_3,
        marginBottom: 16
    },
    tagIcon: {
        color: theme.COLORS.BLUE,
    },
    containerNumberOfAds: {
        paddingLeft: 32
    },
    textNumberOfAds: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.LG,
        color: theme.COLORS.GRAY_2,
        paddingBottom: 4,
    },
    textDescription: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.XSM,
        color: theme.COLORS.GRAY_2
    },
    textMyAds: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.XSM,
        color: theme.COLORS.BLUE,
        paddingLeft: 54
    },
    arrowIcon: {
        color: theme.COLORS.BLUE,
        paddingLeft: 16
    }
})


