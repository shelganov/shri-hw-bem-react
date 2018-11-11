import React from "react";
import {cn} from '@bem-react/classname';
import './_Footer.scss';

const cnFooter = cn('Footer');

export default class Footer extends React.Component {
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <footer className={cnFooter()}>
                <div className={cnFooter("Inner")}>
                    <ul className={cnFooter("Links")}>
                        <li className={cnFooter("Item")}>
                            <a href="#" className={cnFooter("Link")}>Помощь</a></li>
                        <li className={cnFooter("Item")}>
                            <a href="#" className={cnFooter("Link")}>Обратная связь</a></li>
                        <li className={cnFooter("Item")}>
                            <a href="#" className={cnFooter("Link")}>Разработчикам</a></li>
                        <li className={cnFooter("Item")}>
                            <a href="#" className={cnFooter("Link")}>Условия использования</a></li>
                        <li className={cnFooter("Item")}>
                            <a
                            href="https://docviewer.yandex.ru/view/1130000031416129/?*=NDquAwEqAaHVit0R666Z9nfyxRB7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxMjkiLCJ5dSI6IjYzNTM1OTM5NDE0OTU4MzYxMTciLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4ODkzMjg3MTY0fQ%3D%3D"
                            className={cnFooter("Link")}>Авторские права</a></li>
                    </ul>
                    <div className={cnFooter("Copyright")}>© 2001–2017 &nbsp;ООО «Яндекс»</div>
                </div>
            </footer>
        )
    }
}
