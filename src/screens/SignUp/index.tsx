import { View, Image, Text, TextInput, TouchableOpacity } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import { AuthNavigatorRoutesProps } from "src/routes/auth.routes"
import { useNavigation } from '@react-navigation/native';

import { styles } from "./style"

import Avatar from "@assets/avatar.png"
import Logo from "@assets/logo.png"
import EditPhotoIcon from "@assets/editPhotoIcon.png"
import { useState } from "react"

export function SignUp() {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [passwordConfirm, setPasswordConfirm] = useState<string>()

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <Text style={styles.title}>
                    Boas vindas!
                </Text>

                <Text style={styles.text}>
                    Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
                </Text>

                <View style={{ flexDirection: "row", alignContent: "center", alignItems: "baseline" }}>
                    <Image
                        style={styles.avatar}
                        source={Avatar}
                    />

                    <Image
                        style={styles.editIcon}
                        source={EditPhotoIcon}
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    value={email}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    onChangeText={setPhone}
                    value={phone}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={setPassword}
                    value={password}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    onChangeText={setPasswordConfirm}
                    value={passwordConfirm}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Criar
                    </Text>
                </TouchableOpacity>

                <Text style={styles.accountText}>
                    Já tem uma conta?
                </Text>

                <TouchableOpacity style={styles.buttonGoToLogin} onPress={handleGoBack}>
                    <Text style={styles.buttonTextGoToLogin}>
                        Ir para o login
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}