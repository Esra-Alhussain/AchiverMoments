import React from 'react';
import { generateClient } from 'aws-amplify/api'; // Import generateClient

async function handleSignOut() {
  const client = generateClient(); // Create client using generateClient
  try {
    await client.Auth.signOut(); // Use client.Auth.signOut instead of Auth.signOut
    window.location.reload();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

function SignOutButton() {
  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOutButton;
