import './img/flat.jpg';
import MobileDetect from 'mobile-detect';
import React from 'react';
import ReactDOM from 'react-dom';

const md = new MobileDetect(window.navigator.userAgent);
const root = document.getElementById('root');

if (md.mobile()) {
    import('./components/App/App@mobile').then(({AppMobile}) => {
        ReactDOM.render(<AppMobile/>, root);
    });
} else {
    import('./components/App/App@desktop').then(({AppDesktop}) => {
        ReactDOM.render(<AppDesktop/>, root);
    });
}