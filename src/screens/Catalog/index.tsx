import { FlatList, StyleSheet, View } from "react-native";
import { Card } from "@components/Card";
import { Input } from "@components/Input";

export function Catalog() {
    const products = [
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" },
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" },
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" }
    ]

    return (
        <View style={styles.container}>
            <Input />
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
        justifyContent: "center"
    },
    columnWrapperStyle: {
        gap: 24
    },
    contentContainerStyle: {
        gap: 24
    }
})