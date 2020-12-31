import React from 'react';
import './customButtonStyle.scss';

interface Props {
    type?: 'submit'|'button';
    onClick?: () => void;
    isGoogleSignIn?: boolean;
}

const CustomButton: React.FunctionComponent<Props> = ({ children, type, onClick, isGoogleSignIn }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default CustomButton;
