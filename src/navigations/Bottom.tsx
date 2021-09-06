//Packages
import React from "react";

//native components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screns
import { Personajes, Lugares, Episodios } from "../screens";

//Icon
import { Icon } from "../components";

const Bottom = createBottomTabNavigator();

export default function BottonNavigation() {

    return (
        <Bottom.Navigator
            screenOptions={{
                "tabBarActiveTintColor": "white",
                "tabBarActiveBackgroundColor": "blue",
                "tabBarLabelStyle": {
                    "fontWeight": "700",
                    "fontFamily": "Oswald-Light"
                },
                "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                ]
            }}
        >
            <Bottom.Screen 
                name="Personajes"
                component={Personajes}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='personajes'
                            size={size}
                            focused={focused}
                            color={color}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Bottom.Screen 
                name="Lugares"
                component={Lugares}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='lugares'
                            size={size}
                            focused={focused}
                            color={color}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Bottom.Screen 
                name="Episodios"
                component={Episodios}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name='episodios'
                            size={size}
                            focused={focused}
                            color={color}
                        />
                    ),
                    headerShown: false
                }}
            />

        </Bottom.Navigator>
    );

};