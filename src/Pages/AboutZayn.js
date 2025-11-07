import React from "react";
import '../Styling/About.css'
import zaynProfile from "../Assets/ZaynBanner.jpg"
import Navbar from "../Components/Navbar";

function AboutZayn() {
  return (
    <div>
        <Navbar />
    <div className="about-page">
      <section className="hero-section">
        <img src={zaynProfile} alt="Zayn Malik" className="zayn-img" />
        <div className="hero-text">
          <h1>About Zayn</h1>
          <p>
            Zayn Malik is a British singer, songwriter, and style icon known for his soulful voice and genre-blending artistry. Rising to fame with One Direction, Zayn launched a solo career in 2016 with his debut album <em>Mind of Mine</em>, featuring the chart-topping single <strong>"Pillowtalk"</strong>.
          </p>
        </div>
      </section>

      <section className="bio-section">
        <h2>Career Highlights</h2>
        <ul>
          <li>🎤 Debuted solo with <em>Mind of Mine</em> (2016)</li>
          <li>🌌 Released the double album <em>Icarus Falls</em> (2018)</li>
          <li>🎧 Dropped <em>Nobody Is Listening</em> (2021), showcasing raw vulnerability</li>
          <li>🏠 Latest album <em>Room Under the Stairs</em> (2024) explores introspection and growth</li>
          <li>🌠 2025 collab with Jisoo: <strong>"Eyes Closed"</strong></li>
        </ul>
      </section>

      <section className="style-section">
        <h2>Signature Style</h2>
        <p>
          Zayn blends edgy fashion with emotional depth from tattoos and streetwear to cosmic visuals and poetic lyrics. His aesthetic inspires fans worldwide to embrace individuality and vulnerability.
        </p>
      </section>
      </div>
      </div>
      )
      }

      export default AboutZayn