import React, { useEffect, useState } from 'react';
import api from "../../apiJs/api";
import CamperCard from '../CamperCard/CamperCard';
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [catalogs, setCatalogs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    location: '',
    details: [],
    type: ''
  });

  useEffect(() => {
    const fetchCatalogs = async () => {
      setIsLoading(true);
      try {
        console.log('Fetching catalogs with:', {
          page: page,
          limit: 4,
          ...filters,
        });
        const response = await api.get('/booking-truck', {
          params: {
            page: page,
            limit: 4,
            ...filters,
          },
        });
        if (page === 1) {
          setCatalogs(response.data);
        } else {
          setCatalogs((prevCatalogs) => [...prevCatalogs, ...response.data]);
        } setHasMore(response.data.length == 4);
      } catch (error) {
          console.error('Error fetching data:', error);
        }
        setIsLoading(false);
      };
        

    fetchCatalogs();
  }, [page, filters]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (newFilters) => {
    setPage(1);
    setFilters(newFilters);
  };

  return (
    <div>
      <div className={styles["catalogs-list"]}>
        {catalogs.map((catalog) => (
          <CamperCard 
             key={catalog.id} 
             gallery={catalog.gallery} 
             name={catalog.name} 
             price={catalog.price} 
             location={catalog.location}
             rating={catalog.rating} 
             reviews={catalog.reviews.length.toString()} 
             details={catalog.details}
             onButtonClick={() => console.log(`Show more for ${catalog.name}`)} 
           />
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
      {hasMore && !isLoading && (
        <button className={styles.btn } onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
};

export default CatalogPage;