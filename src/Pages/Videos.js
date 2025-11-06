import React from 'react'
import Navbar from '../Components/Navbar'
import { musicVideos } from '../Data/zaynData'
import '../Styling/MusicVideo.css'
import Footer from '../Components/Footer'

function Videos() {
  return (
    <div>
        <Navbar />
        <div className='music-videos-page'>
          <h1 className="mv-title">🎬 ZAYN Music Videos</h1>

        <div className="mv-grid">
          {musicVideos.map((video) => (
            <div key={video.id} className="mv-card">
              <img
                src={video.image}
                alt={video.title}
                className="mv-thumb"
              />
              <div className="mv-info">
                <h2>{video.title}</h2>
                <p>{video.year}</p>
                <a
                  href={video.link}
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

        {/* ✨ Subscribe Section */}
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
        </div>
        <Footer />
    </div>
  )
}

export default Videos