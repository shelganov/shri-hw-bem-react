import React from 'react';
import {ModBody, withBemMod} from '@bem-react/core';
import {IHambrugerProps} from '../index';

export const HamburgerShow: ModBody<IHambrugerProps> = (Base, {show}) => (
    <div id="js-SideMenu-trigger" className={className()}>
        <div className={cnHamburger('Icon')}></div>
    </div>
);
