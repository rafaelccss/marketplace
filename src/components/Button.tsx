import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";
import theme from "src/theme";

type Props = TouchableOpacityProps & {
    buttonTitle: string,
    type?: "dark" | "blue" | "light"
}

export function Button({ buttonTitle, type, ...rest }: Props) {
    // Define estilos condicionalmente
    const getButtonStyle = () => {
        switch (type) {
            case "dark":
                return styles.darkButton;
            case "blue":
                return styles.blueButton;
            case "light":
                return styles.lightButton;
            default:
                return styles.darkButton;
        }
    };

    const getButtonTextStyle = () => {
        switch (type) {
            case "dark":
                return styles.darkButtonText;
            case "blue":
                return styles.blueButtonText;
            case "light":
                return styles.lightButtonText;
            default:
                return styles.darkButtonText;
        }
    };

    return (
        <TouchableOpacity
            style={[styles.button, getButtonStyle(), rest.style]}
            onPress={rest.onPress}
        >
            <Text style={[styles.buttonText, getButtonTextStyle()]}>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 42,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: 'center'
    },
    darkButton: {
        backgroundColor: theme.COLORS.GRAY_1,
    },
    blueButton: {
        backgroundColor: theme.COLORS.BLUE_LIGHT,
    },
    lightButton: {
        backgroundColor: theme.COLORS.GRAY_5,
    },
    buttonText: {
        fontSize: theme.FONT_SIZE.SM,
        fontFamily: theme.FONT_FAMILY.BOLD
    },
    darkButtonText: {
        color: theme.COLORS.GRAY_7,
    },
    blueButtonText: {
        color: theme.COLORS.GRAY_7,
    },
    lightButtonText: {
        color: theme.COLORS.GRAY_2,
    },
})
