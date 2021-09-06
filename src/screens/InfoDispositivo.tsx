//Packages
import React from "react";

//native components
import { Text } from "react-native";

//components
import { Header, Screen } from "../components";

export default function InfoDispositivoScreen({ navigation }: any){

    return(
        <Screen>
            <Header
                title="Informacion"
                actionLeft={() => navigation.openDrawer()}
                navigation={navigation}
            />
            <Text>Informacion del dispositivo</Text>
        </Screen>
    );
};