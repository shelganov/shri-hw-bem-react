import {compose, IClassNameProps} from '@bem-react/core';
import {Hamburger as Base} from "./Hamburger";
import {HamburgerShow} from './_show/Hamburger_show';

export interface IHamburgerProps extends IClassNameProps {
    show?: 'yes';
}

export const Hamburger = compose(
    HamburgerShow
)(Base);