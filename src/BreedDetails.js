import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BreedDetails from './BreedDetails';

const fetchBreeds = async () => {
  const response = await fetch('https://dogapi.dog/api/v2/breeds');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log('Breeds data:', data); // Log the response data
  return data;
};

const DogBreeds = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['breeds'],
    queryFn: fetchBreeds,
  });
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  // Log the received data
  console.log('Breeds data:', data);

  // Continue with rendering logic
  const breeds = data?.data;

  // Remaining code for rendering breeds
};

export default DogBreeds;
