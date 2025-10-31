import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { musicVideos, albums, singles } from "../Data/zaynData";
import { Link } from "react-router-dom";
import Banner from "./Banner";

function LandingPage() {
  console.log('albums', albums)


  return (
    <div>
      <Navbar />
      <Banner />
      {/* <div className="home">
        <section className="section">
          <div className="section-header">
            <h2>Albums That Hit Different 🎧</h2>
            <Link to="/albums" className="more-link">
              More →
            </Link>
          </div>
          <div className="media-grid">
      
            {albums.slice(0.4).map((album, index) => {
              <a
                key={index}
                href={album.link}
                target="_blank"
                rel="noreferrer"
                className="media-card"
              >
              < img src={album.image} alt={album.title} />
                <p>{album.title}</p>
              </a>;
            })}
          </div>
        </section>
      </div> */}
    </div>
  );
}

export default LandingPage;
