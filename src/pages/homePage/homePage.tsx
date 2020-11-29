import React from 'react';
import Directory from '../../components/directory';
import './homePageStyle.scss';

const HomePage:React.FunctionComponent = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
};

export default HomePage;
