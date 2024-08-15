import React from 'react';
import PropTypes from 'prop-types';
import styles from './CamperCard.module.css'; 

const CamperCard = ({ image, name, price, location, description, features, onButtonClick }) => {
  return (
    <div className={styles["camper-card"]}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.location}>{location}</p>
        <p className={styles.price}>${price}</p>
        <p className={styles.price}>{description}</p>
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
     <button className={styles.button} onClick={onButtonClick}>Show More</button>
      </div>
    </div>
  );
};

CamperCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CamperCard;