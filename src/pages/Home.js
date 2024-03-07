import { useOutletContext } from "react-router-dom";
import MonsterCard from "../components/MonsterCard";
import MonsterForm from "../components/MonsterForm";

function Home() {

    const {monsters} = useOutletContext();

    return (
        <>
          <MonsterForm />
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