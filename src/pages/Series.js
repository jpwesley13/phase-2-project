import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import FilterCard from "../components/FilterCard";

function Series() {

    const [series, setSeries] = useState([]);
    const [monsters, setMonsters] = useState([]);
    const [filtered, setFiltered] = useState("");

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/monster`)
        .then(res => res.json())
        .then(data => {
            setMonsters(data);
            const uniqueSeries = Array.from(new Set(data.map(monster => monster.series)));
            setSeries(uniqueSeries);
        })
    }, []);

    const seriesList = filtered && series.includes(filtered) ? (
        series
          .filter((production) => production === filtered)
          .map((production) => {
            const filteredMonsters = monsters.filter(
              (monster) => monster.series === production
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
        <header>
            <NavBar />
        </header>
        <main>
        <select value={filtered} onChange={(e) => setFiltered(e.target.value)}>
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

//I want to create a card template for each series. It'd be cool if they had their own logos but for this project I think I'd better not.

//By default there should be a search bar or filter option to find monsters by series. A filter option is cool, but I am unsure if I can make it dynamic to newly added series or not. If so, I definitely want to do it this way.

