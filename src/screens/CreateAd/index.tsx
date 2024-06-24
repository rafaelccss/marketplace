import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Input } from "@components/Input";
import { ToggleButton } from "@components/ToggleButton";
import { useState } from "react";
import theme from "src/theme";
import { ArrowLeft } from "phosphor-react-native";

export function CreateAd() {
    const [acceptExchange, setAcceptExchange] = useState(false)

    function toggleSwitch() {
        setAcceptExchange(previousState => !previousState)
    }

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleGoBack} style={styles.backButtonContainer}>
                    <ArrowLeft size={24}/>
                </TouchableOpacity>

                <Text style={styles.header1}>
                    Criar anúncio
                </Text>

                <View />
            </View>


            <View style={styles.paddingBottom}>
                <Text style={styles.header2}>
                    Imagens
                </Text>

                <Text style={styles.text}>
                    Escolha até 3 imagens para mostrar o quanto o seu produto é incrível
                </Text>
            </View>

            <View style={styles.paddingBottom}>
                <Text style={styles.header2}>
                    Sobre o produto
                </Text>

                <Input placeholder="Título do anúncio" />
            </View>

            <View style={styles.paddingBottom}>
                <Text style={styles.header2}>
                    Venda
                </Text>

                <Input placeholder="Valor do produto" />
            </View>

            <View style={styles.paddingBottom}>
                <Text style={styles.header2}>
                    Aceita troca?
                </Text>

                <ToggleButton
                    value={acceptExchange}
                    onValueChange={toggleSwitch}
                />
            </View>

            <View style={styles.paddingBottom}>
                <Text style={styles.header2}>
                    Meios de pagamento aceitos
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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