import React, { useEffect, useState } from "react";
import { ICONS } from "../constants";


export default function usenIcon(icon: string): string {

    const [iconPath, setIconPath] = useState('');

    useEffect(() => {
        switch (icon) {
            case 'personajes':
                setIconPath(ICONS.personajes)
                break;
            case 'lugares':
                setIconPath(ICONS.lugares)
                break;
            case 'drawer':
                setIconPath(ICONS.drawer)
                break;
            case 'left':
                setIconPath(ICONS.left)
                break;
            case 'episodios':
                setIconPath(ICONS.episodios)
                break;
            case 'users':
                setIconPath(ICONS.users)
                break;
            case 'login':
                setIconPath(ICONS.login)
                break;
            case 'password':
                setIconPath(ICONS.password)
                break;
            case 'email':
                setIconPath(ICONS.email)
                break;
            case 'registro':
                setIconPath(ICONS.registro)
                break;
            case 'reset':
                setIconPath(ICONS.reset)
                break;
            default:
                setIconPath(ICONS.personajes)
                break;
        }
    }, [])

    return iconPath;
}