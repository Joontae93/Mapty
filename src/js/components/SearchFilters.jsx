import { useState, useEffect } from 'react';

const filters = [
  {
    name: 'all',
    displayName: 'Show All',
  },
  {
    name: 'beauty',
    displayName: 'Beauty/Health',
  },
  {
    name: 'construction',
    displayName: 'Construction',
  },
  {
    name: 'food',
    displayName: 'Eat & Drink',
  },
  {
    name: 'entertainment',
    displayName: 'Entertainment',
  },
  {
    name: 'manufacturing',
    displayName: 'Manufacturing',
  },
  {
    name: 'services',
    displayName: 'Services',
  },
  {
    name: 'shopping',
    displayName: 'Shopping',
  },
  {
    name: 'stay',
    displayName: 'Stay',
  },
];

function Filter({ name, displayName, checked, onChange }) {
  function handleFilterClick() {
    onChange(name);
  }
  return (
    <div
      className={`filter ${checked ? 'selected' : ''}`}
      onClick={handleFilterClick}
    >
      <label htmlFor={name}>{displayName}</label>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={() => {}}
      />
    </div>
  );
}
export function SearchFilters({ handleFilterChange, selectedFilters }) {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <aside className="filters">
      <header className="filters__header">
        <h2>Filter Options</h2>
        <span
          className="hide-filters"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Options' : 'Show Options'}
        </span>
      </header>
      <div className="filters__container">
        {showFilters &&
          filters.map(filter => {
            const isChecked = selectedFilters.includes(filter.name);
            return (
              <Filter
                key={filter.name}
                name={filter.name}
                displayName={filter.displayName}
                checked={isChecked}
                onChange={handleFilterChange}
              />
            );
          })}
      </div>
    </aside>
  );
}
