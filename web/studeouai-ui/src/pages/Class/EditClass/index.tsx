
import React from 'react';

import {
  Container,
  
} from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  description: string;
}

interface Class {
  id: string;
  name: string;
  description: string;
  category_id: string;
}

const EditClass: React.FC = () => {
  

  return (
    <Container>
     
    </Container>
  );
}

export default EditClass