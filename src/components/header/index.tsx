import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase';
import  { IState } from  '../../redux/reducer';
import './headerStyle.scss';

const mapStateToProps = ({currentUser}: IState) => ({
    currentUser,
});

const Header: React.FunctionComponent = () => {
    const { currentUser} = useSelector(mapStateToProps, shallowEqual);

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

export default Header;
