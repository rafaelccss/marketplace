import { CheckSquare, Square } from 'phosphor-react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from 'src/theme';

type Props = {
    options: string[];
    onSelect: (option: string) => void;
    selectedOptions: string[];
}

export function CheckboxGroup({ options, onSelect, selectedOptions }: Props) {
    return (
        <View style={styles.optionContainer}>
            {options.map((option, index) => (
                <View key={index} style={styles.optionRow}>
                    <CheckBoxButton
                        selected={selectedOptions.includes(option)}
                        onPress={() => onSelect(option)}
                    />
                    <Text style={styles.optionText}>{option}</Text>
                </View>
            ))}
        </View>
    );
}

type CheckBoxButtonProps = {
    selected: boolean;
    onPress: () => void;
}

function CheckBoxButton({ selected, onPress }: CheckBoxButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.checkboxButton}>
            {
                selected
                    ? <CheckSquare size={24} color={theme.COLORS.BLUE_LIGHT} weight='fill' />
                    : <Square size={24} color={theme.COLORS.BLUE_LIGHT} />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    optionText: {
        marginLeft: 4,
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        color: theme.COLORS.GRAY_2,
    },
    checkboxButton: {
        padding: 5,
    },
});
