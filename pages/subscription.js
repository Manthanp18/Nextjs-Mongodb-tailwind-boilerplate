import React from "react";
import { useSession } from "next-auth/react";
export default function subscription() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <h1>Google Authentication with NextAuth </h1>

      {!session && (
        <>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )}

      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div>
            <h4>Email: {session.user.email}</h4>
            <br />
          </div>
          <br />
          <br />
          <button onClick={() => signIn()}>add accounts</button>
        </>
      )}
      <div>Subscription Page</div>
    </div>
  );
}
