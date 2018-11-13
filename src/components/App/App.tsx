import React from 'react';
import {cn} from '@bem-react/classname';
import {RegistryConsumer} from "@bem-react/di";
import Footer from '../Footer/Footer'
import Card from '../Card/Card';
import './_App.scss';

const cnApp = cn("App");
const cnHeader = cn("Header");
const cnContent = cn('Content');
const cnContainer = cn('Container');

export const App: React.SFC = () => (
    <RegistryConsumer>
        {registries => {
            const registry = registries[cnApp()];
            const Header = registry.get(cnHeader());
            return (
                <div className={cnContent()}>
                    <Header/>
                    <main>
                        <div className={cnContainer(null, ['PageTouch'])}>
                            <Card/>
                        </div>
                    </main>
                    <Footer/>
                </div>
            )
        }}
    </RegistryConsumer>
)