import { useState } from 'react';

const filters = [
  {
    name: 'beauty/health',
    displayName: 'Beauty/Health',
  },
  {
    name: 'construction',
    displayName: 'Construction',
  },
  {
    name: 'eat &amp; drink',
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

export function SearchFilters({
  handleFilterChange,
  selectedFilters,
  setSelectedFilters,
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <aside className="filters">
      <header className="filters__header">
        <h2>Filter Options</h2>
        {selectedFilters.length > 0 && (
          <span
            className="hide-filters--alt"
            onClick={() => setSelectedFilters([])}
          >
            Reset Filters
          </span>
        )}
        <span
          className={showFilters ? 'hide-filters' : 'hide-filters--alt'}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
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
