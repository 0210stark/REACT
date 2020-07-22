import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';

const items = [
  {
    title: 'What is react?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use react?',
    content: 'Very famous among engineers',
  },
  {
    title: 'Which is the best front end JS framework?',
    content: 'React',
  },
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
