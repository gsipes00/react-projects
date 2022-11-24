import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-projects";
function App() {
  // set the state for the component
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // fetch data from api
  const fetchTours = async () => {
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
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
