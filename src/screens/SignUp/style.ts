import { StyleSheet } from "react-native"
import theme from "../../theme"

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
    logo: {
        width: 60,
        height: 40,
    },
    avatar: {
        width: 88,
        height: 88,
        marginTop: 16,
        marginBottom: 12
    },
    editIcon: {
        width: 40,
        height: 40,
    },
    title: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.XL,
        color: theme.COLORS.GRAY_1,
        marginTop: 12, 
        textAlign: "center"
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_3,
        textAlign: "center"
    },
})