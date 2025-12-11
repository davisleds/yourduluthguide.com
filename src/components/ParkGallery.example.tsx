// Example usage of ParkGallery component

import React from 'react';
import ParkGallery from './ParkGallery';

// Example: Using the component in a page
const ParkPage: React.FC = () => {
  return (
    <div>
      <h1>Aerial Lift Bridge</h1>
      <ParkGallery parkId="aerial-lift-bridge" />
    </div>
  );
};

// Example: Using with different parks
const ExamplePage: React.FC = () => {
  return (
    <div>
      <h1>Enger Park</h1>
      <ParkGallery parkId="enger-park" />
      
      <h1>Jay Cooke State Park</h1>
      <ParkGallery parkId="jay-cooke-state-park" />
    </div>
  );
};

export default ParkPage;



