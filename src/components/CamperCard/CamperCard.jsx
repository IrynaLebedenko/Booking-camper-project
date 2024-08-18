// import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './CamperCard.module.css';
import CamperDetails from '../CamperDetails/CamperDetails';
import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneStar } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";

const CamperCard = ({ gallery, name, price, location, reviews, rating, details, onButtonClick }) => {
    const mainImage = gallery[0];
    
    return (    
          
      
      <div className={styles["camper-card"]}>
          <div className={styles.image} >
              <img src={mainImage} alt={name} />
          </div>
          <div className={styles.content}>
              <div className={styles["name-prise"]}>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.price}>${price},00</p>
                  <IoMdHeartEmpty className={styles.icon} />
              </div>
              <div className={styles["rating-container"]}>
                
                  <p className={styles["rating-text"]}><AiTwotoneStar className={styles["icon-star"]}/>{rating} ({reviews} Reviews)</p>
                  <div className={styles.location}>
                     
                      <p className={styles.locations} ><IoLocationOutline className={styles.icon} />{location}</p>
                  </div>
               </div>
           
        
               <p className={styles.description}>The pictures shown here are example vehicles of the respective.</p>
                {details && <CamperDetails className={styles.details} details={details} />} 
               <button className={styles.button} onClick={onButtonClick}>Show More</button>
          </div>
        </div>
          
  );
};

CamperCard.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  details: PropTypes.shape({
    adults: PropTypes.number.isRequired,
    engine: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    kitchen: PropTypes.bool.isRequired,
    shower: PropTypes.bool.isRequired,
  }).isRequired,
};

CamperCard.defaultProps = {
  details: {
    adults: 0,
    engine: 'unknown',
    transmission: 'unknown',
    kitchen: false,
    shower: false,
  },
};

export default CamperCard;