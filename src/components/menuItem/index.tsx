import React from 'react';
import { Link } from 'react-router-dom';
import './menuItemStyle.scss';

interface Props {
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}

const MenuItem: React.FunctionComponent<Props> = ({ title, imageUrl, size, linkUrl}) => {
    return (
        <div
            className={`${size} menu-item`}>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                className="background-image"/>
            <Link to={linkUrl} className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </Link>
        </div>
    );
};

export default MenuItem;
