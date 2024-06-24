import { FlatList, StyleSheet, View, Text } from "react-native";
import { Card } from "@components/Card";
import { Input } from "@components/Input";
import { CardMyAds } from "@components/CardMyAds";
import theme from "../../theme";

export function Catalog() {
    const products = [
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" },
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" },
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" }
    ]

    return (
        <View style={styles.container}>
            <CardMyAds numberOfAds={4} style={styles.paddingBottomCardMyAds} />
            
            <Text style={styles.text}>
                Compre produtos variados
            </Text>

            <Input placeholder="Buscar anúncio"/>
            <FlatList
                columnWrapperStyle={styles.columnWrapperStyle}
                contentContainerStyle={styles.contentContainerStyle}
                data={products}
                numColumns={2}
                renderItem={ ({ item }) => (
                    <Card {...item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, 
        alignContent: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: theme.COLORS.GRAY_6
    },
    paddingBottomCardMyAds: {
        paddingBottom: 40,
    },
    columnWrapperStyle: {
        gap: 24
    },
    contentContainerStyle: {
        gap: 24
    },
    text: {
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_3,
        marginBottom: 16
    },
})