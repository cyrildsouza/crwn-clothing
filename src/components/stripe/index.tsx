import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

interface IProps {
    price: number;
}

const StripeButtom: React.FunctionComponent<IProps> = ({ price }) => {
    const priceForStript = price * 100;
    const publicStripeKey = 'pk_test_51IvWRYKjdSkJ1iGoq6x9cq0yfX1ZkCmRZ2YGXzulpyTnvywhKcC7RWWV9QHRH1ShmTMpqpTiT1c1NLjuNxhA0pyB00g3IYEhrj';

    const onToken = (token: any) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            shippingAddress
            billingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStript}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publicStripeKey}
        />);
};


export default StripeButtom;