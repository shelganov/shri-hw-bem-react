import {compose, IClassNameProps} from '@bem-react/core';
import {Hamburger as Base} from "./Hamburger";
import {HamburgerModeActive} from './_mode/Hamburger_mode_active';

export interface IHamburgerProps extends IClassNameProps {
    mode?: 'active';
}

export const Hamburger = compose(
    HamburgerModeActive
)(Base);