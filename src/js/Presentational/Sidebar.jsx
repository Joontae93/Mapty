import { useState, useEffect } from 'react';
import {
  Logo,
  ReduceMotionToggle,
  LoadingMesssage,
  getData,
} from '../components/Utilities';
import { BusinessListings } from '../components/BusinessListing';
import { SearchFilters } from '../components/SearchFilters';

export function Sidebar({
  reduceMotion,
  setReduceMotion,
  isLoading,
  businessListings,
}) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  function handleFilterChange(filterName) {
    if (selectedFilters.includes(filterName)) {
      setSelectedFilters(selectedFilters.filter(name => name !== filterName));
    } else {
      setSelectedFilters([...selectedFilters, filterName]);
    }
  }
  return (
    <div className="sidebar">
      <Logo />
      <ReduceMotionToggle
        reduceMotion={reduceMotion}
        setReduceMotion={setReduceMotion}
      />
      <SearchFilters
        handleFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
      />
      {isLoading && <LoadingMesssage />}
      <BusinessListings
        businessListings={businessListings}
        selectedFilters={selectedFilters}
      />
    </div>
  );
}
