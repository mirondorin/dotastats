import heroes from '../assets/json/formatted_heroes.json';

function getHeroesByPrimaryAttribute(attribute: string) {
  return heroes.filter(hero => hero.primary_attr === attribute)
    .sort((a, b) => a.localized_name.localeCompare(b.localized_name));
}

export default function HeroesGrid({attribute} : {attribute: string}) {
  const filteredHeroes = getHeroesByPrimaryAttribute(attribute);

  return (
    <div className="hero-grid-container">
      {filteredHeroes.map((hero) => (
        <img key={hero.id} className="hero-img" src={hero.image_url}></img>
      ))}
    </div>
  );
}