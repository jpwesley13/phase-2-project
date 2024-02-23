import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function App() {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/monster`)
        .then(res => res.json())
        .then(setMonsters)
        .catch(error => console.error(error));
    }, []);

    return (
        <>
        <header>
            <NavBar />
        </header>
        <Outlet context={monsters} />
        </>
    );
};

export default App