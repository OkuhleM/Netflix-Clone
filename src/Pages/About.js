import React from "react";
import "../Styling/About.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />
    <div className="about-container">
      <div className="about-overlay"></div>

      <div className="about-content">
        <h1 className="about-title">✨ About ZAYNFLIX ✨</h1>
        <p className="about-text">
          ZAYNFLIX isn’t just a website — it’s a vibe.  
          A digital sanctuary for fans who live and breathe Zayn Malik.  
          Every beat, every lyric, every soft confession that spills through
          his voice — it’s all here, curated with love and obsession 💖.
          Well, a cute obsession.
        </p>

        <p className="about-text">
          From the soul of <span className="highlight">“Mind of Mine”</span>  
          to the raw depth of{" "}
          <span className="highlight">“Room Under the Stairs”</span>,  
          this space celebrates Zayn’s evolution — the artistry, the pain,  
          the peace, and everything in between.
        </p>

        <div className="quote-box">
          <p className="quote">
            “I'm not tryna fit in anymore. I’m just creating what feels real.”
          </p>
          <span className="quote-by">– Zayn Malik</span>
        </div>

        <div className="signature">
          Crafted with 💖 and Stardust by <span className="name">OkuhleM</span>
        </div>
      </div>
    </div>

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
    </>
  );
}

export default About;
