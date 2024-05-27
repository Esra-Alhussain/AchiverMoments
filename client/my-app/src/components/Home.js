import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listAchievements } from '../graphql/queries';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';

function Home() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetchAchievements();
  }, []);

  async function fetchAchievements() {
    try {
      const achievementData = await API.graphql(graphqlOperation(listAchievements));
      setAchievements(achievementData.data.listAchievements.items);
    } catch (err) {
      console.log('error fetching achievements');
    }
  }

  return (
    <div>
      <h1>AchieverMoments</h1>
      <div>
        {achievements.map((achievement) => (
          <div key={achievement.id}>
            <p>{achievement.username}: {achievement.content}</p>
          </div>
        ))}
      </div>
      <Link to="/add">
        <button>Add Achievement</button>
      </Link>
      <SignOutButton />
    </div>
  );
}

export default Home;
