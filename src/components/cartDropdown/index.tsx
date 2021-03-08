import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import CustomButton from '../customButton';
import { IState} from '../../redux/reducer';
import './cart-dropdown.styles.scss';

const mapStateToProps = ({ showCartDropdown }: IState) => ({
    showCartDropdown,
});

const CartDropdown: React.FunctionComponent = () => {
    const { showCartDropdown } = useSelector(mapStateToProps, shallowEqual);
    return (
        <div className="cart-dropdown">
            <div className="cart-item"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );

   
};

export default CartDropdown;
