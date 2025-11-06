import React from "react";
import Navbar from "../Components/Navbar";
import "../Styling/Albums.css";
import { albums } from "../Data/zaynData";
import Footer from "../Components/Footer";

function Albums() {
  return (
    <div>
      <Navbar />
      <div className="albums-page">
        <h1 className="albums-title">🎵 ZAYN Albums</h1>
        <div className="albums-grid">
          {albums.map((album) => (
            <div key={album.id} className="album-card">
              <img
                src={album.image}
                alt={album.title}
                className="album-cover"
              />
              <div className="album-info">
                <h2>{album.title}</h2>
                <p>{album.description}</p>
                <span className="album-year">{album.year}</span>

                <a
                  href={album.link}
                  target="_blank"
                  rel="noreferrer"
                  className="album-btn"
                >
                 Listen on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="subscribe-section">
          <h2>💖 Love Zayn’s music?</h2>
          <p>Stay updated and show your support subscribe to his official YouTube channel!</p>
          <a
            href="https://www.youtube.com/@Zayn"
            target="_blank"
            rel="noreferrer"
            className="subscribe-btn"
          >
            🔔 Subscribe on YouTube
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Albums;
