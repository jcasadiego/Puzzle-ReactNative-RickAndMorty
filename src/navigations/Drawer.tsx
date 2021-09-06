//Packages 
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//navigator
import BottonNavigation from "./Bottom";
import { Logout, InfoDispositivo } from "../screens";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Botton" component={BottonNavigation} options={{ headerShown: false, title: 'Personajes' }} />
            <Drawer.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
            <Drawer.Screen name="InfoDispositivo" component={InfoDispositivo} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};