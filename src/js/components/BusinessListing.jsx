export function BusinessListings({ businessListings, selectedFilters }) {
  const listings = businessListings;

  /** DOING: if listings in selectedFilters....
   * blah blah blah
   * return filteredlistings
   */
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
            <h3 className="business__title">{listing.title}</h3>
            {listing.acf.address && (
              <span class="business__meta">{listing.acf.address}</span>
            )}
            <div className="business__details">{content}</div>
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
