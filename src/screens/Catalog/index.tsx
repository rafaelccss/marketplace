import { FlatList, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Card } from "@components/Card";
import { CardMyAds } from "@components/CardMyAds";
import { Input } from "@components/Input";
import { styles } from "./style";
import { UserHeader } from "@components/UserHeader";

export function Catalog() {
    const products = [
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" },
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" },
        { isNew: false, sourceSellerImage: "http://localhost:3333/images/ae6be82fb27d5068e5db-avatar.png", sourceProductImage: "https://st2.depositphotos.com/3994509/10356/i/450/depositphotos_103565474-stock-photo-dress-on-stores-showcase.jpg" }
    ]

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleNewAdd() {
        navigation.navigate("createAd")
    }

    return (
        <View style={styles.container}>
            <View style={styles.paddingUserHeader}>
                <UserHeader
                    username="Maria"
                    sourceSellerImage={products[0].sourceSellerImage}
                    buttonAction={handleNewAdd}
                />
            </View>

            <CardMyAds numberOfAds={4} style={styles.paddingBottomCardMyAds} />

            <Text style={styles.text}>
                Compre produtos variados
            </Text>

            <Input placeholder="Buscar anúncio" />
            <FlatList
                columnWrapperStyle={styles.columnWrapperStyle}
                contentContainerStyle={styles.contentContainerStyle}
                data={products}
                numColumns={2}
                renderItem={({ item }) => (
                    <Card {...item} />
                )}
            />
        </View>
    )
}