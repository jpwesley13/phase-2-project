import { useParams, useOutletContext } from "react-router-dom";

function Monster() {
    const params = useParams();
    const {monsters} = useOutletContext();

    const monster = monsters.find(monster => monster.id === parseInt(params.id));

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