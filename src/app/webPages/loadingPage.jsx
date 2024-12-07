import React from "react";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="w-12 h-12 border-4 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
}
