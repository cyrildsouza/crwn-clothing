import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cartIcon';
import CartDropdown from '../cartDropdown';
import { auth } from '../../firebase';
import  { IState } from  '../../redux/reducer';
import './headerStyle.scss';

const mapStateToProps = ({currentUser, showCartDropdown}: IState) => ({
    currentUser,
    showCartDropdown,
});

const Header: React.FunctionComponent = () => {
    
    const { currentUser, showCartDropdown } = useSelector(mapStateToProps, shallowEqual);

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
                <CartIcon />
            </div>
            {showCartDropdown ?  <CartDropdown /> : null}
           
        </div>
    ); 
};

export default Header;
