import './_Header@mobile.scss';
import React, {Component} from 'react';
import {cn} from '@bem-react/classname';
import Logo from '../Logo/Logo';
import {Hamburger} from '../Hamburger';
// import './_Header.scss';

const cnHeader = cn('Header');
const cnContainer = cn('Container');

export class Header extends Component {
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <header className={cnHeader()}>
                <div className={cnHeader('Inner')}>
                    <Logo className={cnHeader('Logo')}/>
                    <div className={cnContainer()}>
                        <Hamburger className={cnHeader('Hamburger')} mode="active"/>
                    </div>
                </div>
            </header>
        )
    }
}