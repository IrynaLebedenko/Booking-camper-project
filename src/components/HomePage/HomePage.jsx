import { Link } from 'react-router-dom';
import { useState } from 'react';
import Container1x from '../../images/Container1-1x.png';
import Container2x from '../../images/Container2-1x.png';
import Switch1x from '../../images/Switch-1x.png';
import styles from './HomePage.module.css';


const Homepage = () => {
   const [filters, setFilters] = useState({
    name: '',
    location: '',
    transmission: '',
    consumption: '',
    details: []
   });
  
   const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? (checked ?  [...prevFilters.details, value] : prevFilters.details.filter(item => item !== value)) : value
    }));
  };

  const handleApply = () => {
    // Логіка для фільтрації даних або оновлення стану
    
    console.log('Applied filters:', filters);

    // Якщо ви використовуєте API, ви можете зробити запит з фільтрами
    // fetchDataWithFilters(filters);

   };
  
  // const [name, setName] = useState('');
  // const [location, setLocation] = useState('');
  // const [transmission, setTransmission] = useState('');
  // const [consumption, setConsumption] = useState('');
  // const [details, setDetails] = useState([]);

  const nameOptions = ['Road Bear C 23-25', 'Cruise America C-21', 'Britz 4 Berth', 'Mighty Class C Large [MT]', 'El Monte Class C Small [C]', 'Road Bear A 30-32', 'El Monte Class A Family Sleeper [AF]'];
  const locationOptions = ['Kyiv', 'Poltava', 'Dnipro', 'Odesa', 'Kharkiv', 'Sumy'];
  const transmissionOptions = ['Automatic', 'Manual'];
  const consumptionOptions = ['12.4L/100', '8.7L/100','12.L/100','14L/100','21L/100','30L/100','33L/100', '38L/100',];
  const detailsOptions = ['Air Conditioner', 'Bathroom', 'Kitchen', 'TV', 'CD', 'shower', 'toilet', 'freezer', 'microwave', 'water']

  return (
    <div>
     <nav className={styles.navbar}>
           <ul className={styles.navList}>
             <li><Link to='/'>Home</Link></li>
             <li><Link to="/catalog">Catalog</Link></li>
             <li><Link to="/favorites">Favorites</Link></li>
           </ul>
         </nav>
      
    <div className={styles.container}>
       <div>
         <div className={styles.filterSection}>
           <h2>Filter Options</h2>
           <form className={styles.filterForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
               <select
                //  type="text"
                  id="name"
                  name="name"
                 value={filters.name}
                 onChange={handleFilterChange}
               ><option value="">Select Name</option>
                 {nameOptions.map((option, index) => (
                   <option key={index} value={option}>{option}</option>
                 ))}
                </select>
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="location">Location:</label>
               <select
                //  type="text"
                  id="location"
                  name="location"
                 value={filters.location}
                 onChange={handleFilterChange}
               ><option value="">Select Location</option>
                 {locationOptions.map((option, index) => (
                   <option key={index} value={option}>{option}</option>
                 ))}
                </select>
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="transmission">Transmission:</label>
               <select
                  id="transmission"
                  name="transmission"
                 value={filters.transmission}
                 onChange={handleFilterChange}
               >
                 <option value="">Select Transmission</option>
                 {transmissionOptions.map((option, index) => (
                   <option key={index} value={option}>{option}</option>
                 ))}
               </select>
             </div>
             <div className={styles.formGroup}>
               <label htmlFor="consumption">Consumption:</label>
               <select
                  id="consumption"
                  name="consumption"
                 value={filters.consumption}
                 onChange={handleFilterChange}
               >
                 <option value="">Select Consumption</option>
                 {consumptionOptions.map((option, index) => (
                   <option key={index} value={option}>{option}</option>
                 ))}
               </select>
             </div>
             <div className={styles.formGroupCheckbox}>
               <label htmlFor="details">Details:</label>
               {detailsOptions.map((option, index) => (
                 <div key={index} className={styles.checkboxGroup}>
                   <input
                     type="checkbox"
                     id={option}
                     name="details"
                     value={option}
                     checked={filters.details.includes(option)}
                     onChange={handleFilterChange}
                   />
                   <label htmlFor={option}>{option}</label>
                 </div>
               ))}
             </div>
            </form>
            <button className={styles.btn} onClick={handleApply}>Apply</button>
          </div>
      </div>
      
      <div className={styles.imageContainer}>
         <div className={styles.imageSection}>
           <div className={styles.imageGallery}>
              <img src={Container1x} alt="Container 1" className={styles.image} />
              <img src={Container2x} alt="Container 2" className={styles.image} />
              <img src={Switch1x} alt="Switch" className={styles.image} />
           </div>
         </div>
      </div>
      </div>
  </div>
  );
};

export default Homepage;