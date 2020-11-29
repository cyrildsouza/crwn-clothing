import React from 'react';
import './menuItemStyle.scss';

interface Props {
    title: string;
    imageUrl: string;
    size?: string;
}

const MenuItem: React.FunctionComponent<Props> = ({ title, imageUrl, size}) => {
    return (
        <div
            className={`${size} menu-item`}>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                className="background-image"/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
