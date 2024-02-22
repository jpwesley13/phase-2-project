import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Series() {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/monster`)
        .then(res => res.json())
        .then(data => {
            const uniqueSeries = Array.from(new Set(data.map(monster => monster.series)));
            setSeries(uniqueSeries)
        })
    }, [])

    console.log(series)

    return (
        <>
        <header>
            <NavBar />
        </header>
        </>
    );
};

export default Series;

//I want to create a card template for each series. It'd be cool if they had their own logos but for this project I think I'd better not.

//By default there should be a search bar or filter option to find monsters by series. A filter option is cool, but I am unsure if I can make it dynamic to newly added series or not. If so, I definitely want to do it this way.

