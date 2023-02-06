import { useLiveQuery } from 'dexie-react-hooks';
import React, { useEffect } from 'react';

import { db } from '@/db';

const iframeHtml = `
  <!doctype html>
  <html>
  <head>
    <script>
      document.domain = "app.fujia.site";
      // window.parent.iframeReady();
      window.parent.dispatchEvent(new CustomEvent("iframeReady"));
    </script>
  </head>
  <body></body>
  </html>
`;

function UserList() {
  const friends = useLiveQuery(async () => {
    const myFriends = await db.friends.toArray();

    return myFriends;
  });

  useEffect(() => {
    window.addEventListener('iframeReady', () => {
      console.log('iframe is ready!');
    });
    return () => {};
  }, []);

  return (
    <>
      <ul>
        {friends?.map((u) => (
          <li key={u.id}>
            {u.name}, {u.age}
          </li>
        ))}
      </ul>
      <iframe srcDoc={iframeHtml} src="https://app.fujia.site"></iframe>
    </>
  );
}

export default UserList;
