import React from 'react';
import { useState } from "react";
import { Navigate } from "react-router-dom";

const imgURL =
  "https://res.cloudinary.com/dbdn9hraj/image/upload/v1656535865/Menschentraube_x9fpjl.jpg";

function HomePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    if (!isLoggedIn) return <Navigate to="/error" />;

  return (
    <div>
      <h1>Wiki Countries </h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}

export default HomePage;