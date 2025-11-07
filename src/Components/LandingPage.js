import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

function LandingPage() {

  return (
    <div>
      <Navbar />
      <Banner />
  <div className="subscribe-section">
          <h2>💖 Love Zayn’s visuals?</h2>
          <p>Don’t miss a single drop — subscribe to his official YouTube channel!</p>
          <a
            href="https://www.youtube.com/@Zayn"
            target="_blank"
            rel="noreferrer"
            className="subscribe-btn"
          >
            🔔 Subscribe on YouTube
          </a>
        </div>
        <Footer />
    </div>
  );
}

export default LandingPage;
