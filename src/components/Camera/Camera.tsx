import React from "react";
import ReactDOM from 'react-dom';
import {cn} from '@bem-react/classname';
import InitCamera from './InitCamera';
import './_Camera.scss';

const cnCamera = cn('Camera');
const cnCameraBrightness = cn('CameraBrightness');

// new InitCamera(
//         document.querySelector('.Camera') as HTMLElement,
//         document.querySelector('.Camera-Screen') as HTMLElement,
//         document.querySelector('.Camera-Img') as HTMLImageElement,
//         document.querySelector('.Camera-Scroll') as HTMLElement,
//         document.querySelector('#CameraBrightness-Value') as HTMLElement
// );

interface IProps {
    className?: string
}

export default class Camera extends React.Component<IProps> {
    constructor(props: any) {
        super(props);
    };

    // componentDidMount() {
    //     const img = document.querySelector('.Camera-Img') as HTMLImageElement;
    //     console.log(img.offsetWidth);
    //     new InitCamera(
    //         document.querySelector('.Camera-Wrap') as HTMLElement,
    //         document.querySelector('.Camera-Screen') as HTMLElement,
    //         document.querySelector('.Camera-Img') as HTMLImageElement,
    //         document.querySelector('.Camera-Scroll') as HTMLElement,
    //         document.querySelector('#CameraBrightness-Value') as HTMLElement
    //     );
    // }

    render() {
        return (

          <div className={cnCamera(null, [this.props.className])}>
            <div className={cnCamera('Wrap')}>
                <div className={cnCamera("Screen")} touch-action="none">
                  <img className={cnCamera("Img")} src="../../../dist/src/img/flat.jpg" alt=""/>
                </div>
                <div className={cnCamera("Scroll")}></div>
            </div>
            <div className={cnCameraBrightness()}>Яркость: <span id={cnCameraBrightness('Value')}></span></div>
          </div>
        )
    }
}