import { View, Text } from "react-native";
import theme from "../theme";
import { SignIn } from "@screens/SignIn";

export function Routes() {
    return (
        <View style={{flex: 1}}>
            <SignIn />
        </View>
    )
}