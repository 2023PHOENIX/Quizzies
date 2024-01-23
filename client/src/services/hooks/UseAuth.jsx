import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
    }

    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate]);

  return isLoggedIn;
};

export default UseAuth;
