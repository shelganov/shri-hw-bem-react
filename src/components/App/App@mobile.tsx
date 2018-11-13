import React from 'react';
import {cn} from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import {App as AppFull} from './App';
import {Header} from '../Header/Header@mobile';

const cnApp = cn("App");
const cnHeader = cn("Header");
const registry = new Registry({id: cnApp()});
registry.set(cnHeader(), Header);

export const AppMobile = withRegistry(registry)(AppFull);