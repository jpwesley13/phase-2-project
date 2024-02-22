import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MonsterCard from "../components/MonsterCard";
//import MonsterForm from "../components/MonsterForm";

function Home() {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/monster`)
        .then(res => res.json())
        .then(setMonsters)
    }, [])

    return (
        <>
          <header>
            <NavBar />
          </header>
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