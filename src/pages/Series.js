import { useOutletContext } from "react-router-dom";
import FilterCard from "../components/FilterCard";
import { useState, useEffect } from "react";

function Series() {

    useEffect(() => {
      document.title = "Series"
    }, [])

    const {series, monsters} = useOutletContext();
    const [filteredSeries, setFilteredSeries] = useState("");

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
        <select value={filteredSeries} onChange={(e) => setFilteredSeries(e.target.value)}>
        <option disabled value="">Choose Series</option>
        {series.map((production) => (
<       option key={production} value={production}>
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

