import React from 'react';
import Swimmer from './Swimmer';

const swimmer: Swimmer = {
  name: 'Placeholder',
  laps: [],
};

const SwimmerData = React.createContext({
  swimmers: [swimmer],
  setSwimmers: () => {},
});

export default SwimmerData;
