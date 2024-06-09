import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchDogGroups = async () => {
  const response = await fetch('https://dogapi.dog/api/v2/groups');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log('Dog groups data:', data); // Log the response data
  return data;
};

const DogGroups = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['dogGroups'],
    queryFn: fetchDogGroups,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  console.log('Dog groups data structure:', data);
  const groups = data?.data;
  console.log('Groups array:', groups);

  if (!Array.isArray(groups)) {
    console.error('Groups is not an array:', groups);
    return <div>No dog groups available.</div>;
  }

  return (
    <div>
      <h1>Dog Groups</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>{group.attributes.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogGroups;
