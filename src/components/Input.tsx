import React, { useState } from 'react';
import { TextInput, TextInputProps, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Eye, EyeSlash } from 'phosphor-react-native';
import theme from '../theme';

type Props = TextInputProps & {
    errorMessage?: string,
    multiline?: boolean
}

export function Input({ errorMessage, secureTextEntry, multiline, ...rest }: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={{ width: '100%' }}>
            <View style={[styles.inputContainer, multiline && { height: 'auto' }]}>
                <TextInput
                    style={[styles.input, multiline && styles.multilineInput]}
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                    multiline={multiline}
                    textAlignVertical="top"
                    {...rest}
                />
                {secureTextEntry && !multiline && (
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        style={styles.iconContainer}
                    >
                        {isPasswordVisible ? <EyeSlash style={styles.icon} /> : <Eye style={styles.icon} />}
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.errorMessageContainer}>
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        backgroundColor: theme.COLORS.GRAY_7,
        borderRadius: 6,
    },
    input: {
        flex: 1,
        color: theme.COLORS.GRAY_4,
        paddingVertical: 10,
        paddingHorizontal: 16,
        fontSize: theme.FONT_SIZE.MD,
    },
    multilineInput: {
        minHeight: 160,
        paddingVertical: 10,
    },
    iconContainer: {
        padding: 16,
    },
    icon: {
        width: 20,
        height: 20,
        color: theme.COLORS.GRAY_4
    },
    errorMessageContainer: {
        minHeight: 16,
        marginBottom: 6,
        marginTop: 2
    },
    errorMessage: {
        color: theme.COLORS.RED_LIGHT,
        fontSize: theme.FONT_SIZE.XSM,
    }
});
