"use client";

import { useRouter } from "next/compat/router";
import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import AuthErrorPage from "./authErrorPage";
import AuthOkPage from "./authOkPage";
import LoadingPage from "./loadingPage";

export default function LandingPage() {
  const { user, loading, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (router) {
        router.push("/webPages/profile");
      } else {
        console.error("Router object is not available.");
      }
    }
  }, [user, router]);

  if (loading) return <LoadingPage />;

  return (
    <div>
      {!user ? (
        <AuthErrorPage gitHubSignIn={gitHubSignIn} />
      ) : (
        <AuthOkPage user={user} firebaseSignOut={firebaseSignOut} />
      )}
    </div>
  );
}
