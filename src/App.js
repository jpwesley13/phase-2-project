import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {

    const [monsters, setMonsters] = useState([]);
    const [series, setSeries] = useState([]);
    const [filteredSeries, setFilteredSeries] = useState("");

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/monster`)
        .then(res => res.json())
        .then(data => {
            setMonsters(data);
            const uniqueSeries = Array.from(new Set(data.map(monster => monster.series)));
            setSeries(uniqueSeries);
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <>
        <header>
            <NavBar />
        </header>
        <Outlet context={{monsters, setMonsters, series, setSeries, filteredSeries, setFilteredSeries}} />
        </>
    );
};

export default App;