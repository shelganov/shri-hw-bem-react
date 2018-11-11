import React from "react";
import Logo from '../Logo/Logo';
import {cn} from '@bem-react/classname';
import './_SideMenu.scss';

const cnSideMenu = cn('SideMenu');

export default class SideMenu extends React.Component {
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <div className={cnSideMenu()}>
                <div className={cnSideMenu('Content')}>
                    <div className={cnSideMenu('Content')}>
                        <Logo/>
                        <div className={cnSideMenu(null, ['cross'])}>×</div>
                    </div>
                    <ul className={cnSideMenu('List')}>
                        <li className={cnSideMenu('Item')}>
                            <a href="#" className="menu__link">События</a>
                        </li>
                        <li className={cnSideMenu('Item')}>
                            <a href="#" className="menu__link">Сводка</a>
                        </li>
                        <li className={cnSideMenu('Item')}>
                            <a href="#" className="menu__link">Устройства</a>
                        </li>
                        <li className={cnSideMenu('Item')}>
                            <a href="#" className="menu__link">Сценарии</a>
                        </li>
                        <li className={cnSideMenu('Item')}>
                            <a href="video.html" className="menu__link">Видео</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
