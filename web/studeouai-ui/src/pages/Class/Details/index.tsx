
import React from 'react';

import {
  Container,

} from './styles';

interface Car {
  id: string;
  name: string;
  description: string;
  category_id: string;
}

const DetailsClass: React.FC = () => {
  
  return (
    <Container/>
  );
}

export default DetailsClass