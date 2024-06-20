import { useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native"

import { styles } from "./style"
import { AuthNavigatorRoutesProps } from "src/routes/auth.routes";

import { useAuth } from "@hooks/useAuth";
import Logo from "@assets/logo.png"

export function SignIn() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
 
    const { signIn } = useAuth()
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount() {
      navigation.navigate('signUp')
    }

    async function handleSignIn(email: string, password: string) {
        await signIn(email, password)
    }

    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
                <Text style={styles.title}>
                    marketspace
                </Text>

                <Text style={styles.text}>
                    Seu espaço de compra e venda
                </Text>

                <Text style={styles.accountText}>
                    Acesse sua conta
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    value={email}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={setPassword}
                    value={password}
                />

                <TouchableOpacity style={styles.button} onPress={() => handleSignIn(
                    email,
                    password
                )}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerNewAccount}>
                <Text style={styles.accountText}>
                    Ainda não tem acesso?
                </Text>

                <TouchableOpacity style={styles.buttonNewAccount} onPress={handleNewAccount}>
                    <Text style={styles.buttonTextNewAccount}>
                        Criar uma conta
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}