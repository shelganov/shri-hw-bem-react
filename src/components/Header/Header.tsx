import React from 'react';
import {cn} from '@bem-react/classname';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import {Hamburger} from '../Hamburger/Hamburger';
import './_Header.scss';

const cnHeader = cn('Header');
const cnContainer = cn('Container');

interface IProps {
    name: string,
    state: any
}

export default class Header extends React.Component {
    constructor(props: any) {
        super(props);
        console.log(props);
    };

    render() {

        return (
            <header className={cnHeader()}>
                <div className={cnHeader('Inner')}>
                    <Logo className={cnHeader('Logo')}/>
                    <div className={cnContainer()}>
                        <Menu/>
                        <Hamburger/>
                    </div>
                </div>
            </header>
        )
    }
}