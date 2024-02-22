import React, {useState} from "react";
import { Link } from "react-router-dom";

function MonsterCard({monster, id}) {
    return (
        <div className="card">
            <h2>{monster.name}</h2>
            <img 
              src={monster.image}
              alt={monster.name}
              className="monster-card"  
            />
            <Link to={`/monster/${id}`}>Details</Link>
        </div>
    );
};

export default MonsterCard;