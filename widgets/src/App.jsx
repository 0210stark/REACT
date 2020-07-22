import React from 'react';
import Accordion from './Accordion';

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
      <Accordion items={items} />
    </div>
  );
};

export default App;
