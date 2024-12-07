import React from "react";

export default function AuthErrorPage({ gitHubSignIn }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <p className="text-white text-4xl text-bold">
        Sorry, you cannot see the contents of this page without authentication.
      </p>
      <button
        className="text-orange-600 text-4xl text-bold hover:text-green-400 hover:underline "
        onClick={gitHubSignIn}
      >
        Login with GitHub
      </button>
    </div>
  );
}
