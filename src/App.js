import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {

    const [monsters, setMonsters] = useState([]);

    function onAddMonster(newMonster){
        return setMonsters([...monsters, newMonster])
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/monster`)
        .then(res => res.json())
        .then(data => {
            setMonsters(data);
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <>
        <header>
            <NavBar />
        </header>
        <Outlet context={{monsters, onAddMonster}} />
        </>
    );
};

export default App;