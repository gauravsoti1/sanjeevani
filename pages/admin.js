import React from 'react';
import { signIn, useSession } from 'next-auth/client';
import Blog from '../components/Blog';

export default function Page() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <Blog />
      ) : (
        <p>
          <p>You are not permitted to see this page.</p>
          <button onClick={signIn}>Sign in</button>
        </p>
      )}
    </>
  );
}
