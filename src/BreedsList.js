import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchDogBreeds = async () => {
  const response = await fetch('https://dogapi.dog/api/v2/breeds');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log('Dog breeds data:', data);
  return data;
};

const DogBreeds = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['dogBreeds'],
    queryFn: fetchDogBreeds,
  });

  if (isLoading) return <div>Loading dog breeds...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const breeds = data?.data;

  return (
    <ul>
      {breeds.map((breed) => (
        <li key={breed.id}>{breed.attributes.name}</li>
      ))}
    </ul>
  );
};

export default DogBreeds;
