import React from "react";
import Navbar from "../Components/Navbar";
import {
  singles,
  Collaboration,
  PromotionalSingles,
} from "../Data/SinglesData";

const styles = {
  h1: {
    textAlign: "center",
    margin: "4rem 0rem",
    fontWeight: "700",
    color: "#f2a2b1",
    letterSpacing: "2px",
    fontSize: "2.3rem"
  },
};

function Singles() {
  return (
    <div>
      <Navbar />
      <div className="singles-page">
        <h1 style={styles.h1}> Zayn's Single Songs</h1>
        <div className="mv-grid">
          {singles.map((music) => (
            <div key={music.id} className="mv-card">
              <img src={music.image} alt={music.title} className="mv-thumb" />
              <div className="mv-info">
                <h2>{music.title}</h2>
                <p>{music.year}</p>
                <a
                  href={music.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mv-btn"
                >
                  ▶ Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        <h1 style={styles.h1}> Collaborations </h1>

        <div className="mv-grid">
          {Collaboration.map((collabs) => (
            <div key={collabs.id} className="mv-card">
              <img
                src={collabs.image}
                alt={collabs.title}
                className="mv-thumb"
              />
              <div className="mv-info">
                <h2>{collabs.title}</h2>
                <p>{collabs.year}</p>
                <a
                  href={collabs.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mv-btn"
                >
                  ▶ Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        <h1 style={styles.h1}> Promotional Singles</h1>

        <div className="mv-grid">
          {PromotionalSingles.map((promotions) => (
            <div key={promotions.id} className="mv-card">
              <img
                src={promotions.image}
                alt={promotions.title}
                className="mv-thumb"
              />
              <div className="mv-info">
                <h2>{promotions.title}</h2>
                <p>{promotions.year}</p>
                <a
                  href={promotions.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mv-btn"
                >
                  ▶ Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Singles;
