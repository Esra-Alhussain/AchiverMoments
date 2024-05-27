import React, { useState } from 'react';
import { createAchievement } from '../graphql/mutations';
import { generateClient } from 'aws-amplify/api'; // Import generateClient
import { fetchAuthSession } from 'aws-amplify/auth';

const client = generateClient(); // Generate client

function AddAchievement() {
  const [achievement, setAchievement] = useState('');

  async function handleAddAchievement() {
    if (!achievement) return;
    try {
      const user = await fetchAuthSession.currentAuthenticatedUser();
      const username = user.username;
      const newAchievement = { content: achievement, username };
      await client.graphql({ query: createAchievement, variables: { input: newAchievement } }); // Use client.graphql
      setAchievement('');
      window.location.href = '/';
    } catch (err) {
      console.log('error creating achievement:', err);
    }
  }

  return (
    <div>
      <h1>Add Your Achievement</h1>
      <input
        type="text"
        value={achievement}
        onChange={(e) => setAchievement(e.target.value)}
        placeholder="Write your achievement"
      />
      <button onClick={handleAddAchievement}>Add Achievement</button>
    </div>
  );
}

export default AddAchievement;
