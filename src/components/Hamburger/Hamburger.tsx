import React, {Component} from "react";
import {cn} from '@bem-react/classname';
import {IHamburgerProps} from './index';
import './_Hamburger.scss';

const cnHamburger = cn('Hamburger');

export class Hamburger extends Component<IHamburgerProps> {
    constructor(props: any) {
        super(props);
    };

    render() {
        const {show} = this.props;
        return (
            <div id="js-SideMenu-trigger" className={cnHamburger()}>
                <div className={cnHamburger('Icon')}></div>
            </div>
        )
    }
}
