import { useLiveQuery } from 'dexie-react-hooks';
import React from 'react';

import { db } from '@/db';

function UserList() {
  const friends = useLiveQuery(async () => {
    const myFriends = await db.friends.toArray();

    return myFriends;
  });

  return (
    <>
      <ul>
        {friends?.map((u) => (
          <li key={u.id}>
            {u.name}, {u.age}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
