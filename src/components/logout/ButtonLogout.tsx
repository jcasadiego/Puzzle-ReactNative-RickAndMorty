//Packages
import React from 'react';

//Components
import { Button, TextButton } from "./styles";

interface Ibutton {
    tittle: string,
    handleReset: () => void
}

export default function ButtonLogoutComponent({ tittle, handleReset }: Ibutton) {

    return (
        <Button onPress={handleReset}>
            <TextButton>
                {tittle}
            </TextButton>
        </Button>
    );

};