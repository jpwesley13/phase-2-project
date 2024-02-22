function FilterCard({ unique, monsters }) {
  const monsterList = monsters.map((monster) => (
    <li key={monster.id}>{monster.name}</li>
  ));

  return (
    <article>
      <h2>{unique}</h2>
      <ul>{monsterList}</ul>
    </article>
  );
}
  
  export default FilterCard