import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchDogFacts = async () => {
  const response = await fetch('https://dogapi.dog/api/v2/facts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log('Dog facts data:', data); // Log the response data
  return data;
};

const DogFacts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['dogFacts'],
    queryFn: fetchDogFacts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  console.log('Dog facts data structure:', data);
  const facts = data?.data;
  console.log('Facts array:', facts);

  // Log the first item to inspect its structure
  if (facts && facts.length > 0) {
    console.log('First fact item:', facts[0]);
  }

  if (!Array.isArray(facts)) {
    console.error('Facts is not an array:', facts);
    return <div>No dog facts available.</div>;
  }

  return (
    <div>
      <h1>Dog Facts</h1>
      <ul>
        {facts.map((fact) => (
          <li key={fact.id}>{fact.attributes.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogFacts;
