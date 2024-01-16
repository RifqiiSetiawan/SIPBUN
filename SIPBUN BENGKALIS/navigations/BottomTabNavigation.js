import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, icons } from '../constants'
import { Home, Input, History, Profile} from '../screens'
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: Platform.OS === "ios" ? 90 : 60,
                    backgroundColor: COLORS.green
                }
            }}
        >
            <Tab.Screen
                name="DrawerHome"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.home : icons.homeOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.white
                                }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Input"
                component={Input}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.input : icons.inputoutline}
                                resizeMode='contain'
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.white
                                }}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Riwayat"
                component={History}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.box : icons.boxoutline}
                                resizeMode='contain'
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.white
                                }}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? icons.user : icons.userOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.white
                                }}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation