import { useOutletContext } from "react-router-dom";
import FilterCard from "../components/FilterCard";
import { useState, useEffect } from "react";

function Travel() {

    useEffect(() => {
      document.title = "Travel"
    }, [])

    const {monsters} = useOutletContext();
    const origins = Array.from(new Set(monsters.map(monster => monster.origin)))
    const [filteredOrigins, setFilteredOrigins] = useState("");

    const originsList = filteredOrigins ? (
        origins
          .filter(origin => origin === filteredOrigins)
          .map(origin => {
            const filteredMonsters = monsters.filter(
              monster => monster.origin === origin
            );
            return (
              <FilterCard
                key={origin}
                unique={origin}
                monsters={filteredMonsters}
              />
            );
          })
      ) : null;

    return (
        <>
        <main>
          <h2>Find monsters by their known habitat!</h2>
          <span>Travel destinations for monster sightings:</span>
          <br/>
          <select value={filteredOrigins} onChange={(e) => setFilteredOrigins(e.target.value)}>
          <option disabled value="">Choose Destination</option>
        {origins.map((origin) => (
          <option key={origin} value={origin}>
        {origin}
          </option>
        ))}
          </select>
            {originsList}
        </main>
        </>
    );
};

export default Travel;