import React from "react";
import {cn} from '@bem-react/classname';
import './_Card.scss';
import '../Icon/_Icon.scss';
import Camera from '../Camera/Camera';

const cnCard = cn('Card');
const cnIcon = cn('Icon');

export default class Card extends React.Component {
    constructor(props: any) {
        super(props);
    };

    render() {
        return (

            <div className={cnCard({'type': 'critical', 'size': 'l', 'mode': 'camera'})}>
                <div className={cnCard('Wrap')}>
                    <div className={cnCard('Header')}>
                        <div className={cnIcon( {thumb: 'cam'}, ['Card-Icon'])}></div>
                        <div className={cnCard('Title')}>Пылесос застрял</div>
                    </div>
                    <div className={cnCard('Source')}>Сенсор движения</div>
                    <div className={cnCard('Time')}>16:17, Сегодня</div>
                </div>
                <div className={cnCard('Next')}></div>
                <div className={cnCard('Cross')}></div>
                <div className={cnCard('Content')}>
                    <div className={cnCard('Text')}>
                        Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже,
                        ему нужна помощь.
                    </div>
                    <Camera className={cnCard('Img')}/>
                </div>
            </div>
        )
    }
}