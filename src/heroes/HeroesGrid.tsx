import heroes from '../assets/json/formatted_heroes.json';
import './HeroesGrid.css';
import strengthImage from '../assets/images/attributes/Strength-attribute.webp';
import agilityImage from '../assets/images/attributes/Agility-attribute.webp';
import intelligenceImage from '../assets/images/attributes/Intelligence-attribute.webp';
import universalImage from '../assets/images/attributes/Universal-attribute.webp';

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

function getAttributeImage(attribute: string) {
  switch (attribute) {
    case 'str':
      return strengthImage;
    case 'agi':
      return agilityImage;
    case 'int':
      return intelligenceImage;
    case 'all':
      return universalImage;
  }
}

export default function HeroesGrid({ attribute }: { attribute: string }) {
  const filteredHeroes = getHeroesByPrimaryAttribute(attribute);

  return (
    <div className="sorted-attribute-heroes">
      <div className='heroes-grid-header'>
        <h1>{Attribute[attribute as keyof typeof Attribute]}</h1>
        <img className='attribute-icon' src={getAttributeImage(attribute)}></img>
      </div>
      <div className="heroes-grid-container">
        {filteredHeroes.map((hero) => (
          <img key={hero.id} className="hero-avatar" src={hero.image_url}></img>
        ))}
      </div>
    </div>
  );
}
