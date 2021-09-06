//Packages
import React, { useContext }  from "react";

//Styles
import { Screem } from "./styles";

//auth
import { Auth } from "../../provider/AuthProvider"
import ButtonLogoutComponent from "./ButtonLogout";

export default function LogoutComponent(){

    const {handleLogin} = useContext(Auth);

    const handleLogout = () => {
        handleLogin ? handleLogin() : 'null'
    };

    return(
        <Screem>
            <ButtonLogoutComponent 
                tittle="Logout"
                handleReset={handleLogout}
            />
        </Screem>
    );

};