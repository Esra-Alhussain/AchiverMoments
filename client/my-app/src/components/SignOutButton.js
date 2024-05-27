import React from 'react';
import { Auth } from 'aws-amplify';

function SignOutButton() {
  async function handleSignOut() {
    try {
      await Auth.signOut();
      window.location.reload();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOutButton;
