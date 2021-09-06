//Packages
import React from "react";

//native components
import { Text } from "react-native";

//components
import { Header, Screen } from "../components";

export default function LugaresScreen({ navigation }: any){

    return(
        <Screen>
            <Header
                title="Lugares"
                actionLeft={() => navigation.openDrawer()}
                navigation={navigation}
            />
            <Text>Lugares</Text>
        </Screen>
    );
};