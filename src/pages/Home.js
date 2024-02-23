import { Outlet, useOutletContext } from "react-router-dom";
import MonsterCard from "../components/MonsterCard";
import MonsterForm from "../components/MonsterForm";

function Home() {

    const {monsters, setMonsters} = useOutletContext();

    function onAddMonster(newMonster){
        return setMonsters([...monsters, newMonster])
    };

    return (
        <>
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