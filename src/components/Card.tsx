import React from "react";
import { Image, StyleSheet, View } from "react-native";
import theme from "src/theme";
import { Tag } from "./Tag";

type Props = {
    isNew: boolean
    sourceSellerImage: string
    sourceProductImage: string
}

export function Card({ isNew, sourceSellerImage, sourceProductImage }: Props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.productImage}
                source={{ uri: sourceProductImage }}
            />

            <View style={styles.sellerContainer}>
                <Image
                    style={styles.sellerImage}
                    source={{ uri: sourceSellerImage }}
                />
            </View>


            <View style={styles.tagContainer}>
                <Tag
                    isNew={isNew}
                    isSmallTag
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 153,
        height: 100,
    },
    sellerImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: theme.COLORS.RED_LIGHT,
    },
    sellerContainer: {
        position: 'absolute',
        top: 4,
        left: 4,
    },
    productImage: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
        backgroundColor: theme.COLORS.RED_LIGHT,
    },
    tagContainer: {
        position: 'absolute',
        top: 4,
        right: 4,
    },
});


