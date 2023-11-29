import { useState } from 'react';
import PrimaryAttribute from './PrimaryAttribute';
import HeroesGrid from './HeroesGrid';
import './Heroes.css';

export default function Heroes() {
  const [primaryAttributeFilters, setPrimaryAttributeFilters] = useState([]);

  let allHeroes = [];
  for (const attribute in PrimaryAttribute) {
    allHeroes.push(<HeroesGrid key={attribute} attribute={attribute} />);
  }

  return (
    <div className='heroes-container'>
      {allHeroes}
    </div>
  );
}