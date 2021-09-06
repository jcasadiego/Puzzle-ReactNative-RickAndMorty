//Packages
import React from 'react';

//styles
import { HeaderContainer, Tittle, ButtonHeader } from './Styles';

//Icon
import Icon from '../svg/Icon';

interface IHeader {
    actionLeft?: () => void,
    title: string,
    navigation: any
}

export default function Header({ title, actionLeft, navigation }: IHeader) {

    const handleLeftAction = () => {
        navigation.goBack();
    };

    return (
        <HeaderContainer>
            <ButtonHeader onPress={actionLeft ? actionLeft : handleLeftAction}>
                <Icon name={actionLeft ? 'drawer' : 'left'} size={24} color="white" focused={false} />
            </ButtonHeader>
            <Tittle>
                {title}
            </Tittle>
        </HeaderContainer>
    )
}