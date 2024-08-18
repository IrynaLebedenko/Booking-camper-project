import React from 'react';
import PropTypes from 'prop-types'; 
import { IoPeopleOutline } from 'react-icons/io5'; // 
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import styles from "./CamperDetails.module.css";
const CamperDetails = ({ details }) => {
    if (!details) {
        return <p>No details available</p>
    }
  return (
    <div className={styles["icon-main"]}>
      <button className={styles["icon-button"]}>
        <IoPeopleOutline className={styles.icon} />
        <span>{details.adults} Adult</span>
      </button>
      <button className={styles["icon-button"]}>
        <MdOutlineLocalGasStation className={styles.icon} />
        <span>{details.engine} Petrol</span>
      </button>
      <button className={styles["icon-button"]}>
        <TbAutomaticGearbox  className={styles.icon} />
        <span>{details.transmission} Automatic</span>
      </button>
      <button className={styles["icon-button"]}>
        <TbToolsKitchen2 className={styles.icon} />
        <span>{details.kitchen ? 'Kitchen' : 'No Kitchen'}</span>
      </button>
      <button className={styles["icon-button"]}>
        <IoBedOutline className={styles.icon} />
        <span>{details.beds ? `${details.beds} Beds` : 'No Beds'}</span>
          </button>
          
    </div>
  );
};

CamperDetails.propTypes = {
  details: PropTypes.shape({
    adults: PropTypes.number.isRequired,
    engine: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    kitchen: PropTypes.bool.isRequired,
    beds: PropTypes.number.isRequired,
  
  }).isRequired,
     
   
};  


export default CamperDetails;