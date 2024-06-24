import { StyleSheet, Switch } from "react-native";
import theme from "src/theme";

type Props = {
    value: boolean
    onValueChange: () => void
}

export function ToggleButton({ value, onValueChange }: Props) {
    return (
        <Switch
            trackColor={{ false: theme.COLORS.GRAY_5, true: theme.COLORS.BLUE_LIGHT }}
            onValueChange={onValueChange}
            value={value}
        />
    )
}

const styles = StyleSheet.create({

})