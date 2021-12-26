import React from 'react';
import './SecondNav.css'

const SecondNav = () => {
    return (
        <div className="second-nav">
            <div className='row align-items-center text-light'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h1><span>Baby</span>Care</h1>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h6 className='mt-2'>Need help? 88923 091 - CARE - 000</h6>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <input type="text" placeholder='Search for products' />
                    <i class="fas fa-search search-icon"></i>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <span className='language'>English <i class="fas fa-angle-down"></i></span>
                    <span className='ms-3 me-3 currency'>USD <i class="fas fa-angle-down"></i></span>
                    <span>|</span>
                    <i class="far fa-heart ms-3 me-3 heart"></i>
                    <i class="fas fa-cart-plus cart"></i>
                </div>
            </div>
        </div>
    );
};

export default SecondNav;