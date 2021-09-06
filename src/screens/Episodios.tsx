//Packages
import React from "react";

//native components
import { Text } from "react-native";

//components
import { Header, Screen } from "../components";

export default function EpisodiosScreen({ navigation }: any){

    return(
        <Screen>
            <Header
                title="Episodios"
                actionLeft={() => navigation.openDrawer()}
                navigation={navigation}
            />
            <Text>Episodios</Text>
        </Screen>
    );
};