import { useAuth } from "@hooks/useAuth"
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Catalog } from "@screens/Catalog"
import { MyAds } from "@screens/MyAds"

import { House, SignOut, Tag } from "phosphor-react-native"
import { useEffect } from "react"
import theme from "src/theme"

type AppRoutes = {
    catalog: undefined
    myAds: undefined
    logout: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
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