import React, { useEffect } from 'react';

// Test page to see example of creating, reading, updating, and deleting a user
export default function UserPage(): JSX.Element {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomUsername = `user${Math.floor(Math.random() * 100)}`;
        // Create a new user
        const responseNewUser = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // random username
            username: randomUsername,
            // random email
            email: `${randomUsername}@example.com`,
            password: 'password1234',
          }),
        });
        const dataNewUser = await responseNewUser.json();
        console.log('User created', dataNewUser);

        // Get all users
        const responseAllUsers = await fetch('/api/users');
        const dataAllUsers = await responseAllUsers.json();
        console.log('All users', dataAllUsers);

        // Get a specific user
        const responseUser = await fetch(`/api/users/${dataNewUser._id}`);
        const dataUser = await responseUser.json();
        console.log('User', dataUser);

        // Update a user
        const responseUpdatedUser = await fetch(
          `/api/users/${dataNewUser._id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: `${randomUsername}-2`,
              email: `${randomUsername}-2@example.com`,
              password: 'password12345',
            }),
          }
        );
        const dataUpdatedUser = await responseUpdatedUser.json();
        console.log('User updated', dataUpdatedUser);

        // Delete a user
        await fetch(`/api/users/${dataNewUser._id}`, {
          method: 'DELETE',
        });
        console.log('User deleted');
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Page</h1>
      <p>See console and network tab to see API calls to user endpoints</p>
    </div>
  );
}
