import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Faq from '../Faq/Faq';
import Feedback from '../Feedback/Feedback';
import Products from '../Products/Products/Products';
import ShopByAge from '../ShopByAge/ShopByAge';
import ShopByPrice from '../ShopByPrice/ShopByPrice';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByPrice></ShopByPrice>
            <ShopByAge></ShopByAge>
            <Products></Products>
            <CustomerReviews></CustomerReviews>
            <Faq></Faq>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;