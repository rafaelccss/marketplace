import { useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity } from "react-native"

import { styles } from "./style";
import { AuthNavigatorRoutesProps } from "src/routes/auth.routes";

import { useAuth } from "@hooks/useAuth";
import Logo from "@assets/logo.png"
import { Input } from "@components/Input";
import { Button } from "@components/Button";

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

                <Input
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    value={email}
                />

                <Input
                    placeholder="Senha"
                    onChangeText={setPassword}
                    value={password}
                />
            
                <Button
                    buttonTitle="Entrar"
                    type="blue"
                    onPress={() => handleSignIn(email, password)}
                />
            </View>

            <View style={styles.containerNewAccount}>
                <Text style={styles.accountText}>
                    Ainda não tem acesso?
                </Text>

                <Button
                    buttonTitle="Criar uma conta"
                    type="light"
                    style={{marginBottom: 76}}
                    onPress={() => handleNewAccount()}
                />
            </View>
        </>
    )
}