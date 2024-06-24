import { Image, StyleSheet, Text, View } from "react-native";
import theme from "src/theme";
import { Button } from "./Button";

type Props = {
    username: string
    sourceSellerImage: string
    buttonAction: () => void
}

export function UserHeader({ username, sourceSellerImage, buttonAction }: Props) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: sourceSellerImage }}
                style={styles.sellerImage}
            />
            <View style={styles.containerTexts}>
                <Text style={styles.textWelcome}>
                    Boas vindas,
                </Text>
                <Text style={styles.textUsername}>
                    {username}
                </Text>
            </View>

            <Button
                buttonTitle="Criar anúncio"
                type="dark"
                style={{ width: 140 }}
                onPress={buttonAction}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        height: 45
    },
    containerTexts: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16
    },
    sellerImage: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderColor: theme.COLORS.BLUE_LIGHT,
        borderWidth: 2,
        backgroundColor: "#FFF"
    },
    textWelcome: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.GRAY_1
    },
    textUsername: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.GRAY_1
    },
});