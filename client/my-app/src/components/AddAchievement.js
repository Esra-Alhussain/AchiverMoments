import React, { useState } from 'react';
import { createAchievement } from '../graphql/mutations';
import { Auth, API, graphqlOperation } from 'aws-amplify';


function AddAchievement() {
  const [achievement, setAchievement] = useState('');

  async function handleAddAchievement() {
    if (!achievement) return;
    try {
      const user = await Auth.currentAuthenticatedUser();
      const username = user.username;
      const newAchievement = { content: achievement, username };
      await API.graphql(graphqlOperation(createAchievement, { input: newAchievement }));
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
