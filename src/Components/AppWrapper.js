import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import IsLoading from "./IsLoading";

function AppWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // 2s load each route
    return () => clearTimeout(timer);
  }, [location]); // triggers whenever URL changes

  return loading ? <IsLoading /> : children;
}

export default AppWrapper;
