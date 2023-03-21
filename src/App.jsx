import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { getData } from './js/components/Utilities';
import { Map } from './js/Presentational/Leaflet';
import { Sidebar } from './js/Presentational/Sidebar';
async function getThePlaces(pageQuery) {
  const businessURL = 'https://choctawsmallbusiness.com/wp-json/wp/v2/places';
  const params = {
    fields: 'title,content,id,acf,_links&_embed=wp:term',
    order: 'asc',
    orderby: 'title',
    perPage: '10',
    page: pageQuery,
  };
  const parameters = `?_fields=${params.fields}&order=${params.order}&orderby=${params.orderby}&per_page=${params.perPage}&page=${params.page}`;
  try {
    const response = await getData(businessURL, parameters);
    if (response.length === 0) {
      alert('No places to display!');
      return;
    } else return response;
  } catch (err) {
    console.error(err);
  }
}
function App() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [businessListings, setBusinessListings] = useState([]);
  const [pageQuery, setPageQuery] = useState(1);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    getThePlaces(pageQuery)
      .then(response => {
        setBusinessListings(
          response.map(place => {
            const embedded = place._embedded;
            const embeddedList = Object.values(embedded);
            const termsList = embeddedList[0][0];
            const termsArray = termsList.map(term => {
              return term.name.toLowerCase();
            });
            const terms = new Set(termsArray);
            return {
              title: place.title.rendered,
              content: place.content.rendered,
              terms: terms,
              acf: place.acf,
              id: place.id,
            };
          })
        );
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <>
      <Sidebar
        atBottom={atBottom}
        setAtBottom={setAtBottom}
        reduceMotion={reduceMotion}
        setReduceMotion={setReduceMotion}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        businessListings={businessListings}
      />
      <Map />
    </>
  );
}
const root = createRoot(document.getElementById('app'));
root.render(<App />);
