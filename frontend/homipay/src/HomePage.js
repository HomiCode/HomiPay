import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import { API_URL } from './config/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './HomePage.css';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const values = QueryString.parse(location.search);

        if (values.success) {
            console.log(
                'Order placed! You will receive an email confirmation.'
            );
        }

        if (values.canceled) {
            console.log(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, [location.search]);

    return (
        <section className='container'>
            <div className='card'>
                <img
                    src='https://stripe-camo.global.ssl.fastly.net/03687b92598387fb966d4aa170a36df7949ec3c0a7e8397f99065b023af39bd9/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387854576832646e4e436331424257574e58626c686d66475a735833526c63335266536a4e4665573559646b70734d47387751326c584d46424d536b357663585a693030576534426a45706f'
                    alt='iPhone 14 Pro Max'
                    className="rounded mx-auto d-block"
                />
                <div className='card-body'>
                    <h3 className='card-title'>iPhone 14 Pro Max</h3>
                    <p className='card-text'>$1,200.0</p>
                    <form
                        action={`${API_URL}/api/stripe/create-checkout-session`}
                        method='POST'
                    >
                        <button type='submit' className='btn btn-primary'>
                            Checkout
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default HomePage;
