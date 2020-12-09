import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import  { ICurrentUser } from '../../App';
import { auth } from '../../firebase';
import './headerStyle.scss';

interface Props {
    currentUser: ICurrentUser | null;
}

const Haeder: React.FunctionComponent<Props> = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                { currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</ div> :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    ); 
};

export default Haeder;
