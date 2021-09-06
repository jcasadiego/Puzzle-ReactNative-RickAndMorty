//Packages
import React from "react";

//Components
import { Button, TextButton } from "./styles";

interface Ibutton {
    tittle: string,
    onPress: () => void
}

export default function ButtonComponent({ tittle, onPress }: Ibutton) {

    return (
        <Button onPress={onPress}>
            <TextButton>
                {tittle}
            </TextButton>
        </Button>
    );

};