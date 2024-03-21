import { Link } from "react-router-dom";

function MonsterCard({monster}) {

    const {name, image, id} = monster

    return (
        <div className="card">
            <h2>{name}</h2>
            <img 
              src={image}
              alt={name}
              className="monster-card"  
            />
            <Link to={`/monster/${id}`}>Observations</Link>
        </div>
    );
};

export default MonsterCard;