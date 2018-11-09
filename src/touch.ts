import './scss/main.scss';
import './img/flat.jpg';

import initMenu from './js/menu';
import Camera from './js/Camera';


document.addEventListener('DOMContentLoaded', () => {
    initMenu();

    new Camera(
        <HTMLElement>document.querySelector('.Camera'),
        <HTMLElement>document.querySelector('.Camera-Screen'),
        <HTMLImageElement>document.querySelector('.Camera-Img'),
        <HTMLElement>document.querySelector('.Camera-Scroll'),
        <HTMLElement>document.querySelector('#CameraBrightness-Value')
    );
});