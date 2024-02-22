import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Monster() {
    const [monster, setMonster] = useState([]);
    const params = useParams();
    const monsterId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/monster/${monsterId}`)
        .then(res => res.json())
        .then(console.log(monsterId))
        .then(setMonster)
        .catch(error => console.error(error));
      }, [monsterId])

      if(!monster.name){
        return <h1>Hunting...</h1>
      };

    return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>{monster.name}</h1>
            <span>Series: {monster.series} | First sighting: {monster.origin}</span>
            <h2>Risk to humans: {monster.risk}</h2>
            <h3>Rarity: {monster.rarity}</h3>
        </main>
    </>
    );
};

export default Monster;