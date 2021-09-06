//Packages
import React from "react";

//components
import { Header, LogoutComponent, Screen } from "../components";

export default function LogoutScreen({ navigation }: any){

    return(
        <Screen>
            <Header
                title="Logout"
                actionLeft={() => navigation.openDrawer()}
                navigation={navigation}
            />
            <LogoutComponent />
        </Screen>
    );
};