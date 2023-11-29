import heroes from '../assets/json/formatted_heroes.json';
import './HeroesGrid.css';

function getHeroesByPrimaryAttribute(attribute: string) {
  return heroes
    .filter((hero) => hero.primary_attr === attribute)
    .sort((a, b) => a.localized_name.localeCompare(b.localized_name));
}

enum Attribute {
  str = 'STRENGTH',
  agi = 'AGILITY',
  int = 'INTELLIGENCE',
  all = 'UNIVERSAL',
}

export default function HeroesGrid({ attribute }: { attribute: string }) {
  const filteredHeroes = getHeroesByPrimaryAttribute(attribute);

  return (
    <div className="sorted-attribute-heroes">
      <h1>{Attribute[attribute as keyof typeof Attribute]}</h1>
      <div className="heroes-grid-container">
        {filteredHeroes.map((hero) => (
          <img key={hero.id} className="hero-avatar" src={hero.image_url}></img>
        ))}
      </div>
    </div>
  );
}
