import { View, Image, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./style"

import Logo from "@assets/logo.png"
import { useState } from "react"

export function SignIn() {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

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

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerNewAccount}>
                <Text style={styles.accountText}>
                    Ainda não tem acesso?
                </Text>

                <TouchableOpacity style={styles.buttonNewAccount}>
                    <Text style={styles.buttonTextNewAccount}>
                        Criar uma conta
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}