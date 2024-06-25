import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "phosphor-react-native";
import { CheckboxGroup } from "@components/CheckboxGroup";
import { ImageSelector } from "@components/ImageSelector";
import { Input } from "@components/Input";
import { RadioButtonGroup } from "@components/RadioButtonGroup";
import { styles } from "./style";
import { ToggleButton } from "@components/ToggleButton";
import { useState } from "react";

export function CreateAd() {
    const [acceptExchange, setAcceptExchange] = useState(false)
    const [productState, setProductState] = useState("Produto usado")
    const [choosePayments, setChoosePayments] = useState<string[]>([])

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function toggleSwitch() {
        setAcceptExchange(previousState => !previousState)
    }

    function handleGoBack() {
        navigation.goBack()
    }

    function handlePaymentSelect(option: string) {
        setChoosePayments(prevPayments =>
            prevPayments.includes(option)
                ? prevPayments.filter(opt => opt !== option)
                : [...prevPayments, option]
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.backButtonContainer}>
                        <ArrowLeft size={24} />
                    </TouchableOpacity>

                    <Text style={styles.header1}>
                        Criar anúncio
                    </Text>

                    <View />
                </View>


                <View style={styles.paddingBottom}>
                    <View style={styles.paddingBottom} >
                        <Text style={styles.header2}>
                            Imagens
                        </Text>

                        <Text style={styles.text}>
                            Escolha até 3 imagens para mostrar o quanto o seu produto é incrível
                        </Text>
                    </View>


                    <ImageSelector />
                </View>

                <View style={styles.paddingBottom}>
                    <Text style={styles.header2}>
                        Sobre o produto
                    </Text>

                    <Input placeholder="Título do anúncio" />

                    <Input placeholder="Descrição do produto" multiline />

                    <RadioButtonGroup
                        options={["Produto novo", "Produto usado"]}
                        onSelect={setProductState}
                        selectedOption={productState}
                    />
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

                    <CheckboxGroup
                        options={["Boleto", "Pix", "Dinheiro", "Cartão de Crédito", "Depósito Bancário"]}
                        selectedOptions={choosePayments}
                        onSelect={handlePaymentSelect}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}