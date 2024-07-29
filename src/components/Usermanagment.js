import React, { useState } from 'react';
import { Table, Button, Container, Alert } from 'react-bootstrap';

// Fake data
const initialUsers = [
  { id: 1, username: 'john_doe', email: 'john@example.com', postCount: 15 },
  { id: 2, username: 'jane_smith', email: 'jane@example.com', postCount: 23 },
  { id: 3, username: 'bob_johnson', email: 'bob@example.com', postCount: 7 },
  { id: 4, username: 'alice_brown', email: 'alice@example.com', postCount: 31 },
  { id: 5, username: 'charlie_davis', email: 'charlie@example.com', postCount: 12 },
];

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(null);

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  return (
    <Container className="mt-4">
      <h2>User Management</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Number of Posts</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.postCount}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserManagement;