import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from 'src/theme';

type Props = {
    options: string[];
    onSelect: (option: string) => void;
    selectedOption: string | null;
}

export function RadioButtonGroup({ options, onSelect, selectedOption }: Props) {
    return (
        <View style={styles.optionContainer}>
            {options.map((option, index) => (
                <View style={styles.optionRow}>
                        <RadioButton
                            selected={selectedOption === option}
                            onPress={() => onSelect(option)}
                        />
                    <Text style={styles.optionText}>{option}</Text>
                </View>
            ))}
        </View>
    )
}

type RadioButtonProps = {
    selected: boolean;
    onPress: () => void;
}

function RadioButton({ selected, onPress }: RadioButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.radioCircle}>
            {selected && <View style={styles.selectedRadioButton} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16
    },
    optionText: {
        marginLeft: 10,
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: theme.COLORS.BLUE_LIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRadioButton: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.COLORS.BLUE_LIGHT,
    },
});