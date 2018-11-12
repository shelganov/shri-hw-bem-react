import React from 'react';
import {ModBody, withBemMod} from '@bem-react/core';
import {IHamburgerProps} from '../index';
import {cn} from "@bem-react/classname";

const cnHamburger = cn('Hamburger');

const HamburgerLink: ModBody<IHamburgerProps> = (Base, {className, mode}) => {

    return <button className={className}>
        <div className={cnHamburger('Icon')}></div>
    </button>;
};

export const HamburgerModeActive = withBemMod<IHamburgerProps>('Hamburger', {mode: 'active'}, HamburgerLink);
