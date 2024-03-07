import { useOutletContext } from "react-router-dom";
import MonsterCard from "../components/MonsterCard";
import MonsterForm from "../components/MonsterForm";
import { useEffect } from "react";

function Home() {

    const {monsters} = useOutletContext();

    useEffect(() => {
      document.title = "Monster Match"
    }, [])

    return (
        <>
          <MonsterForm />
          <hr/>
          <h2>Confirmed Monster Sightings</h2>
          {monsters.map(monster => (
            <MonsterCard 
            key={monster.id}
            monster={monster}
            id={monster.id}
            />
          ))}
        </>
    )
};

export default Home;