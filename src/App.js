import React from 'react';
import DogBreeds from './DogBreeds';
import DogFacts from './DogFacts';
import DogGroups from './DogGroups';

const App = () => {
  return (
    <div>
      <div>
        <h2>Dog Breeds</h2>
        <DogBreeds />
      </div>
      <div>
        <DogFacts />
      </div>
      <div>
        <DogGroups />
      </div>
    </div>
  );
};

export default App;
