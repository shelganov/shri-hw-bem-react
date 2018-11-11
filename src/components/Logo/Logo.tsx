import React from 'react';
import {cn} from '@bem-react/classname';
import './_Logo.scss';

const cnLogo = cn('Logo');

interface IProps {
    className?: string
}

export default class Logo extends React.Component<IProps> {
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <a href="/" className={cnLogo(null, [this.props.className])}></a>
        )
    }
}