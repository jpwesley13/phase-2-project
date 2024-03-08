function FilterCard({ unique, monsters }) {
  const monsterList = monsters.map(monster => (
    <li key={monster.id}><strong>{monster.name}</strong>: Risk rating of {monster.risk}</li>
  ));

  return (
    <article>
      <h3>Monsters sighted in {unique}:</h3>
      <ul>{monsterList}</ul>
    </article>
  );
}
  
  export default FilterCard;