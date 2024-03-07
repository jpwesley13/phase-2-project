import { useOutletContext } from "react-router-dom";
import FilterCard from "../components/FilterCard";
import { useState } from "react";

function Travel() {

    const {origins, monsters} = useOutletContext();
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