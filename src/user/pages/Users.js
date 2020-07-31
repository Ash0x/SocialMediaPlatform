import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Alex Galev',
      image:
        'https://nebulartribe.com/wp-content/uploads/2020/07/OfficeWorking-scaled.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
