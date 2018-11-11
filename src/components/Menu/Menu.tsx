import React from "react";
import {cn} from '@bem-react/classname';
import { compose, IClassNameProps } from '@bem-react/core';
import './_Menu.scss';


const cnMenu = cn('Menu');
const links = ['События', 'Сводка', 'Устройства', 'Сценарии', 'Видео', 'Наблюдение']

export default class Menu extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <ul className={cnMenu(null, ['Header-Menu'])}>
                <li className={cnMenu('Item')}>
                    <a href="#" className={cnMenu('Link')}>События</a>
                </li>
                <li className={cnMenu('Item')}>
                    <a href="#" className={cnMenu('Link')}>Сводка</a>
                </li>
                <li className={cnMenu('Item')}>
                    <a href="#" className={cnMenu('Link')}>Устройства</a>
                </li>
                <li className={cnMenu('Item')}>
                    <a href="#" className={cnMenu('Link')}>Сценарии</a>
                </li>
                <li className={cnMenu('Item')}>
                    <a href="video.html" className={cnMenu('Link')}>Видео</a></li>
                <li className={cnMenu('Item', {active: true})}>
                    <a href="touch.html" className={cnMenu('Link')}>Наблюдение</a>
                </li>
            </ul>
        )
    }
}
