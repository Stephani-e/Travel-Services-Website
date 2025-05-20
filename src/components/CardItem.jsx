import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion'

function CardItem(props) {
  return (
      <Motion.li
        className='cards__item'
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt={`${props.label} Image`}
              src={props.src}
              loading='lazy'
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </Motion.li>
  );
}

export default CardItem;