import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MonsterCard from "../components/MonsterCard";
import MonsterForm from "../components/MonsterForm";

function Home() {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/monster`)
        .then(res => res.json())
        .then(setMonsters)
    }, [])

    function onAddMonster(newMonster){
        return setMonsters([...monsters, newMonster])
    }

    return (
        <>
          <header>
            <NavBar />
          </header>
          <MonsterForm
          onAddMonster={onAddMonster}/>
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