import { View, Image, Text } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { useNavigation } from '@react-navigation/native';

import { Input } from "@components/Input";
import { AuthNavigatorRoutesProps } from "src/routes/auth.routes"

import { styles } from "./style"

import Avatar from "@assets/avatar.png"
import Logo from "@assets/logo.png"
import EditPhotoIcon from "@assets/editPhotoIcon.png"
import { useState } from "react"
import { Button } from "@components/Button";

export function SignUp() {
    const [name, setName] = useState<string>()

    const [email, setEmail] = useState<string>()
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>()

    const [phone, setPhone] = useState<string>()

    const [password, setPassword] = useState<string>()
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>();

    const [passwordConfirm, setPasswordConfirm] = useState<string>()
    const [passwordConfirmErrorMessage, setpasswordConfirmErrorMessage] = useState<string>();


    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleEmailChange(text: string) {
        setEmail(text);
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

        if (!emailRegex.test(text)) {
            setEmailErrorMessage("O e-mail é inválido.")
        } else {
            setEmailErrorMessage("");
        }
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
        if (text.length < 6) {
            setPasswordErrorMessage("A senha deve ter pelo menos 6 caracteres.");
        } else {
            setPasswordErrorMessage("");
        }
    }

    function handlePasswordConfirmChange(text: string) {
        setPasswordConfirm(text);

        if (text !== password) {
            setpasswordConfirmErrorMessage("A confirmação da senha não confere");
        } else {
            setpasswordConfirmErrorMessage("");
        }
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

                <Input
                    placeholder="Nome"
                    onChangeText={setName}
                    value={name}
                />
                <Input
                    placeholder="E-mail"
                    onChangeText={handleEmailChange}
                    value={email}
                    errorMessage={emailErrorMessage}
                />

                <Input
                    placeholder="Telefone"
                    onChangeText={setPhone}
                    value={phone}
                />

                <Input
                    placeholder="Senha"
                    onChangeText={handlePasswordChange}
                    value={password}
                    errorMessage={passwordErrorMessage}
                    secureTextEntry
                />

                <Input
                    placeholder="Confirmar senha"
                    onChangeText={handlePasswordConfirmChange}
                    value={passwordConfirm}
                    errorMessage={passwordConfirmErrorMessage}
                    secureTextEntry
                />

                <Button
                    buttonTitle="Criar"
                    type="dark"
                />

                <Text style={styles.accountText}>
                    Já tem uma conta?
                </Text>

                
                <Button
                    buttonTitle="Ir para o login"
                    type="light"
                    onPress={handleGoBack}
                />
            </View>
        </KeyboardAwareScrollView>
    )
}