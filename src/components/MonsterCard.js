import React, {useState} from "react";

function MonsterCard({monster}) {
    return (
        <div className="card">
            <h2>{monster.name}</h2>
            <img 
              src={monster.image}
              alt={monster.name}
              className="monster-card"  
            />
        </div>
    );
};

export default MonsterCard;