import { StyleSheet } from "react-native";
import theme from "src/theme";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_6,
    },
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_6,
        paddingHorizontal: 24
    },
    headerContainer: {
        height: 26,
        flexDirection: 'row',        
        justifyContent: 'space-between',
        paddingBottom: 50,
    },
    header1: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.LG,
        color: theme.COLORS.GRAY_1,
        paddingBottom: 24,
        textAlign: "center"
    },
    backButtonContainer: {
        height: 24,
        width: 24
    },
    header2: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.GRAY_2,
        paddingBottom: 16
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_3
    },
    paddingBottom: {
        paddingBottom: 20
    }
})