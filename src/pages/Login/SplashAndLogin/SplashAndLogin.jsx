import React, { useState, useEffect } from "react";
import Splash from "../../Splash/Splash";
import Login from "../Login";  
import { Container } from "../../Splash/Splash";  // Assuming Container is exported from your Splash file

export default function SplashAndLogin() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {!showLogin && <Splash />}
      {showLogin && <Login />}
    </Container>
  );
}


