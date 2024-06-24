import { StyleSheet } from "react-native";
import theme from "src/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, 
        alignContent: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: theme.COLORS.GRAY_6
    },
    paddingUserHeader: {
        paddingTop: 16, 
        paddingBottom: 40
    },
    paddingBottomCardMyAds: {
        paddingBottom: 40,
    },
    columnWrapperStyle: {
        gap: 24
    },
    contentContainerStyle: {
        gap: 24
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_3,
        marginBottom: 16
    },
})