import './img/flat.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);




// import Camera from './js/Camera';
// document.addEventListener('DOMContentLoaded', () => {
//     initMenu();
//
//     new Camera(
//         document.querySelector('.Camera') as HTMLElement,
//         document.querySelector('.Camera-Screen') as HTMLElement,
//         document.querySelector('.Camera-Img') as HTMLImageElement,
//         document.querySelector('.Camera-Scroll') as HTMLElement,
//         document.querySelector('#CameraBrightness-Value') as HTMLElement
//     );
// });