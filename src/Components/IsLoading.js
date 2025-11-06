import React, { useEffect, useState } from "react";

function IsLoading({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds of cuteness
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <h1 style={styles.logo}>ZAYNFLIX 💖</h1>
        <p style={styles.loadingText}>Pouring you a little Stardust ✨🎧</p>
        <div style={styles.loader}></div>
      </div>
    );
  }

  return <>{children}</>;
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    transition: "opacity 0.5s ease-in-out",
  },
  logo: {
    fontSize: "3rem",
    fontWeight: "bold",
    letterSpacing: "3px",
    marginBottom: "10px",
    color: "#fff",
  },
  loadingText: {
    fontSize: "1.2rem",
    fontWeight: "400",
    color: "#ffb6c1",
    marginBottom: "25px",
    animation: "fadeText 2s ease-in-out infinite",
  },
  loader: {
    border: "5px solid rgba(255, 255, 255, 0.1)",
    borderTop: "5px solid #ff69b4",
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    animation: "spin 1s linear infinite",
  },
};



export default IsLoading;