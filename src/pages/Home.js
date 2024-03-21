import { useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import MonsterCard from "../components/MonsterCard";
import MonsterForm from "../components/MonsterForm";
import { useEffect } from "react";

function Home() {

    const {monsters} = useOutletContext();

    const displayedMonsters = monsters.map(monster => (
      <MonsterCard 
      key={monster.id}
      monster={monster}
      />
    ))

    useEffect(() => {
      document.title = "Monster Match"
    }, [])

    return (
        <>
          <Header />
          <MonsterForm />
          <hr/>
          <h2 className="header">Confirmed Monster Sightings:</h2>
          {displayedMonsters}
        </>
    )
};

export default Home;