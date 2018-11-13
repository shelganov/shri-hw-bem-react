import React from 'react';
import {cn} from '@bem-react/classname';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import {Hamburger} from '../Hamburger';
import './_Header.scss';

const cnHeader = cn('Header');
const cnContainer = cn('Container');

export default class Header extends React.Component {
    constructor(props: any) {
        super(props);
    };

    render() {

        return (
            <header className={cnHeader()}>
                <div className={cnHeader('Inner')}>
                    <Logo className={cnHeader('Logo')}/>
                    <div className={cnContainer()}>
                        <Menu/>
                        <Hamburger className={cnHeader('Hamburger')} mode="active"/>
                    </div>
                </div>
            </header>
        )
    }
}