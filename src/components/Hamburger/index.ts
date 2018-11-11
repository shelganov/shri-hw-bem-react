import { compose, IClassNameProps } from '@bem-react/core';
import {Hamburger as Base} from "./Hamburger";
import {HamburgerShow} from './_show/Hamburger_show';

export interface IHambrugerProps extends IClassNameProps {
    show?: true;
}

export const Hamburger = compose(
    HamburgerShow
)(Base);