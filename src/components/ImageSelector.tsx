import { Plus, XCircle } from "phosphor-react-native";
import { useState } from "react";
import { Alert, Image, StyleSheet, FlatList, TouchableOpacity, View, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"

import theme from "src/theme";


export function ImageSelector() {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const MAX_IMAGES = 3;

    async function handleUserPhotoSelected() {
        try {
            if (images.length >= MAX_IMAGES) {
                Alert.alert("Limite atingido", `Você pode selecionar no máximo ${MAX_IMAGES} imagens.`);
                return;
            }

            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
            });

            if (photoSelected.canceled) {
                return;
            }

            setLoading(true);

            if (photoSelected.assets) {
                for (var asset of photoSelected.assets) {
                    const photoInfo = await FileSystem.getInfoAsync(asset.uri);

                    setImages((prevImages) => [...prevImages, asset.uri]);
                }
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    function handleRemoveImage(uri: string) {
        setImages((prevImages) => prevImages.filter(image => image !== uri));
    }

    return (
        <View>
            <FlatList
                data={images}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.imageContainer}
                        onPress={() => handleRemoveImage(item)}
                    >
                        <Image source={{ uri: item }} style={styles.image} />
                        <XCircle
                            size={16}
                            weight="fill"
                            color={theme.COLORS.GRAY_2}
                            style={styles.removeButton} />
                    </TouchableOpacity>
                )}
                ListFooterComponent={
                    images.length < MAX_IMAGES ? (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleUserPhotoSelected}
                            disabled={loading}
                        >
                            {
                                loading
                                    ? <ActivityIndicator size="small" color={theme.COLORS.GRAY_4} />
                                    : <Plus size={24} color={theme.COLORS.GRAY_4} />
                            }
                        </TouchableOpacity>
                    ) : null
                }
                horizontal
                scrollEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.COLORS.GRAY_5,
        width: 100,
        height: 100,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        width: 100,
        height: 100,
        marginRight: 16
    },
    removeButton: {
        position: 'absolute',
        top: 4,
        right: 4
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 6,
    },
});
