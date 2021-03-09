import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100  //converting price from dollar into cents
    const publishableKey ='pk_test_51ISyeCJoydHmzplti1b7ecQRwL83mPHy6h3z3h3rDE54jSugB1Xd2DcETrioeEw0lGvFe301D0rqZuAmEJckLbDB00W7joRD5y';

  const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Crwn Clothing ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        ></StripeCheckout>
    );
};

export default StripeCheckoutButton;