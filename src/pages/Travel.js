import { useOutletContext } from "react-router-dom";
import FilterCard from "../components/FilterCard";
import { useState, useEffect } from "react";

function Travel() {

    useEffect(() => {
      document.title = "Travel"
    }, [])

    const {monsters} = useOutletContext();
    const [filteredOrigins, setFilteredOrigins] = useState("");
    const origins = Array.from(new Set(monsters.map(monster => monster.origin)))

    const originsList = filteredOrigins ? (
        origins
          .filter(origin => origin === filteredOrigins)
          .map(origin => {
            const filteredMonsters = monsters.filter(
              monster => monster.origin === origin
            );
            return (
              <FilterCard
                unique={origin}
                monsters={filteredMonsters}
              />
            );
          })
      ) : null;

      const originOptions = origins.map((origin) => (
        <option key={origin} value={origin}>
      {origin}
        </option>
      ))

    return (
        <>
        <main>
          <h2>Find monsters by their known habitat!</h2>
          <span>Travel destinations for monster sightings:</span>
          <br/>
          <select value={filteredOrigins} onChange={(e) => setFilteredOrigins(e.target.value)}>
          <option disabled value="">Choose Destination</option>
          {originOptions}
          </select>
          {originsList}
        </main>
        </>
    );
};

export default Travel;