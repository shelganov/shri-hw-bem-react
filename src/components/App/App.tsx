import React from 'react';
import {cn} from '@bem-react/classname';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import Card from '../Card/Card';
import './_App.scss';

const cnContent = cn('Content');
const cnContainer = cn('Container');

export default class App extends React.Component {
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <div className={cnContent()}>
                <Header/>
                <main>
                    <div className={cnContainer(null,['PageTouch'])}>
                        <Card/>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}