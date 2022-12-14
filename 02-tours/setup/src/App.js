import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  // set the state for the component
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // remove tour click handler
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  // fetch data from api
  const fetchTours = async () => {
    // loading state setter called, set to true
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // useEffect to update component state
  useEffect(() => {
    fetchTours();
  }, []);

  // show loading screen
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // return data
  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
