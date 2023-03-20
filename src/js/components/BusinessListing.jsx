import { useState, useEffect } from 'react';
export function BusinessListings({ businessListings, selectedFilters }) {
  const [listings, setListings] = useState(businessListings);
  function filterListings() {
    if (0 === selectedFilters.length) {
      setListings(businessListings);
    } else {
      const filteredListings = businessListings.filter(listing =>
        selectedFilters.some(filter => listing.terms.has(filter))
      );
      setListings(filteredListings);
    }
  }
  useEffect(() => {
    filterListings();
  }, [businessListings, selectedFilters]);
  return (
    <ul className="businesses">
      {listings.map(listing => {
        const content = listing.content.slice(0, 141) + '...';

        return (
          <li
            className={
              listing.acf.remote === false
                ? 'business business--physical'
                : 'business business--remote'
            }
            data-id={listing.id}
            key={listing.id}
          >
            <h3
              className="business__title"
              dangerouslySetInnerHTML={{ __html: listing.title }}
            />
            {listing.acf.address && (
              <span className="business__meta">{listing.acf.address}</span>
            )}
            <div
              className="business__details"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {listing.acf.remote === false ? (
              ''
            ) : (
              <p className="business--online">Online Only</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
