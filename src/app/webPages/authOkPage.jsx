import React from "react";

export default function AuthOkPage({ user, firebaseSignOut }) {
  return (
    <div className="flex flex-col p-4 h-screen justify-center items-center bg-black">
      <div className="flex text-white text-3xl text-bold">
        <span>Logged in as </span>
        <p className="text-green-400 ml-3 text-3xl text-bold">
          {user.displayName} ({user.email}).
        </p>
      </div>
      <button
        className="text-white text-3xl text-bold hover:text-orange-400 hover:underline"
        onClick={firebaseSignOut}
      >
        Logout
      </button>
      <a
        className="text-white text-3xl text-bold hover:text-orange-400 hover:underline"
        href="/webPages/holidays"
      >
        Continue to your Holiday List
      </a>
    </div>
  );
}
