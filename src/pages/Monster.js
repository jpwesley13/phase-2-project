import { useParams, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

function Monster() {
    const params = useParams();
    const {monsters} = useOutletContext();

    const monster = monsters.find(monster => monster.id === parseInt(params.id));

    useEffect(() => {
      document.title = `${monster.name}`
    }, [])

      if(!monster){
        return <h1>Hunting...</h1>
      };

    return (
    <>
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