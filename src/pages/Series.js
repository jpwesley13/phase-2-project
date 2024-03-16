import { useOutletContext } from "react-router-dom";
import FilterCard from "../components/FilterCard";
import { useState, useEffect } from "react";

function Series() {

    useEffect(() => {
      document.title = "Series"
    }, [])

    const {monsters} = useOutletContext();
    const [filteredSeries, setFilteredSeries] = useState("");
    const series = Array.from(new Set(monsters.map(monster => monster.series)))

    const seriesList = filteredSeries ? (
        series
          .filter(production => production === filteredSeries)
          .map(production => {
            const filteredMonsters = monsters.filter(
              monster => monster.series === production
            );
            return (
              <FilterCard
                key={production}
                unique={production}
                monsters={filteredMonsters}
              />
            );
          })
      ) : null;

    return (
        <>
        <main>
          <h2>Find monsters by their first sighted series!</h2>
          <span>Series with confirmed monster sightings:</span>
          <br/>
        <select value={filteredSeries} onChange={(e) => setFilteredSeries(e.target.value)}>
        <option disabled value="">Choose Series</option>
        {series.map((production) => (
        <option key={production} value={production}>
        {production}
        </option>
        ))}
        </select>
            {seriesList}
        </main>
        </>
    );
};

export default Series;

//Can accomplish all desired tasks with just storing monsters state.
//Only fetch and set monster data, and then use that monster state in both series and travel to create my dropdowns.