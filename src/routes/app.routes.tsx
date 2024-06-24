import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { House, SignOut, Tag } from "phosphor-react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useAuth } from "@hooks/useAuth"
import { useEffect } from "react"

import { Catalog } from "@screens/Catalog"
import { CreateAd } from "@screens/CreateAd"
import { MyAds } from "@screens/MyAds"

import theme from "src/theme"

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

type AppRoutes = {
    appTabs: undefined;
    createAd: undefined;
};

type TabRoutes = {
    catalog: undefined
    myAds: undefined
    logout: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<TabRoutes>()
const Stack = createStackNavigator<AppRoutes>()

export function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="appTabs" component={AppTabs} />
            <Stack.Screen name="createAd" component={CreateAd} />
        </Stack.Navigator>
    )
}

function AppTabs() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: theme.COLORS.GRAY_2,
            tabBarInactiveTintColor: theme.COLORS.GRAY_4,
            tabBarStyle: {
                backgroundColor: theme.COLORS.GRAY_7
            }
        }}>
            <Screen
                name="catalog"
                component={Catalog}
                options={{
                    tabBarIcon: (props => (
                        <House color={props.color} size={theme.FONT_SIZE.XL} />
                    ))
                }}
            />

            <Screen
                name="myAds"
                component={MyAds}
                options={{
                    tabBarIcon: (props => (
                        <Tag color={props.color} size={theme.FONT_SIZE.XL} />
                    ))
                }}
            />

            <Screen
                name="logout"
                component={Logout}
                options={{
                    tabBarIcon: (props => (
                        <SignOut color={theme.COLORS.RED_LIGHT} size={theme.FONT_SIZE.XL} />
                    ))
                }}
            />
        </Navigator>
    )
}

function Logout() {
    const { signOut } = useAuth()

    useEffect(() => {
        signOut()
    }, [])

    return null;
}