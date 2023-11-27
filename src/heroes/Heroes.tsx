import { useState } from 'react';
import heroes from '../assets/json/formatted_heroes.json';
import PrimaryAttribute from './PrimaryAttribute';
import HeroesGrid from './HeroesGrid';

export default function Heroes() {
  const [primaryAttributeFilters, setPrimaryAttributeFilters] = useState([]);

  let allHeroes = [];
  for (const attribute in PrimaryAttribute) {
    allHeroes.push(<HeroesGrid key={attribute} attribute={attribute}/>);
  }

  return ( 
  <>
    {allHeroes}
  </>
  );
}