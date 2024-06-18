import { StyleSheet } from "react-native"
import theme from "@theme/index"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_6,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 48,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    },
    containerNewAccount: {
        backgroundColor: theme.COLORS.GRAY_7,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 48
    },
    accountText: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_2,
        marginTop: 80,
        marginBottom: 16
    },
    input: {
        width: '100%',
        height: 45,
        backgroundColor: theme.COLORS.GRAY_7,
        borderRadius: 6,
        color: theme.COLORS.GRAY_4,
        padding: 16,
        fontSize: theme.FONT_SIZE.MD,
        marginBottom: 16
    },
    button: {
        width: '100%',
        height: 42,
        borderRadius: 6,
        backgroundColor: theme.COLORS.BLUE_LIGHT,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: theme.COLORS.GRAY_7,
        fontSize: theme.FONT_SIZE.SM,
        fontFamily: theme.FONT_FAMILY.BOLD
    },
    buttonNewAccount: {
        width: '100%',
        height: 42,
        borderRadius: 6,
        backgroundColor: theme.COLORS.GRAY_5,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 76
    },
    buttonTextNewAccount: {
        color: theme.COLORS.GRAY_2,
        fontSize: theme.FONT_SIZE.SM,
        fontFamily: theme.FONT_FAMILY.BOLD
    },
    logo: {
        width: 96,
        height: 64,
    },
    title: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.XL,
        color: theme.COLORS.GRAY_1,
        marginTop: 16
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_3
    },
})