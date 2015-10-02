
import React from 'react';
import Exercise1 from './exercise1';
import Exercise2 from './exercise2';
import Lesson3 from './lesson3';
import Exercise3 from './exercise3';

let DATA = [
  { name: 'USA', description: 'Land of the Free, Home of the brave' },
  { name: 'China', description: 'Lots of concrete' },
  { name: 'Russia', description: 'World Cup 2018!' },
];

React.render(
  <Exercise3 countries={DATA} />,
  document.body
);
