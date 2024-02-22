import { createContext, useState } from "react";

const MonsterContext = createContext();

function MonsterProvider({ children }) {
    const [monsters, setMonsters] = useState([]);
  
    return (
      <MonsterContext.Provider value={{ monsters, setMonsters }}>
        {children}
      </MonsterContext.Provider>
    );
  };

  export {MonsterContext, MonsterProvider}