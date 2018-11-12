import './img/flat.jpg';
import MobileDetect from 'mobile-detect';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const md = new MobileDetect(window.navigator.userAgent);
console.log(md)
const root = document.getElementById('root');

if (md.mobile()) {
    import('./components/App/App@mobile');
} else {
    import('./components/App/App@desktop');
}
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