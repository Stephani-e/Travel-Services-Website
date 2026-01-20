import React from 'react';
import './styles/Cards.css';
import CardItem from './CardItem';
import { motion as Motion } from 'framer-motion';


function Cards() {
    return (
        <div className='cards'>
            <Motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Check out these EPIC Destinations!
            </Motion.h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <Motion.ul
                        className='cards__items'
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </Motion.ul>
                    <Motion.ul
                        className='cards__items'
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himalayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </Motion.ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;