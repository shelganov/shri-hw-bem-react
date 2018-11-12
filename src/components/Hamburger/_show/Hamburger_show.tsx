import React from 'react';
import {ModBody, withBemMod} from '@bem-react/core';
import {IHamburgerProps} from '../index';



const HamburgerLink: ModBody<IHamburgerProps> = (Base, {show, className}) => (
    // className += `Hamburger_show_${show}`;
    <a id="js-SideMenu-trigger" href="#" className={className}>
        <div className={className}></div>
    </a>
);
export const HamburgerShow = withBemMod<IHamburgerProps>('Hamburger', {show: 'yes'}, HamburgerLink);
