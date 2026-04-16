import React from 'react'
import { latestReleases } from '../Data/latestRelease'
import '../Styling/NewEra.css'

function NewEra() {
  return (
    <div className='new-era'>
        <div className="upcoming-album">


    <img
      src={latestReleases.upcomingAlbum.image}
      alt="Upcoming Album"
    />

    <div className="album-overlay">
      <h1>{latestReleases.upcomingAlbum.title}</h1>
      <p>{latestReleases.upcomingAlbum.description}</p>

      <a
        href={latestReleases.upcomingAlbum.link}
        target="_blank"
        rel="noreferrer"
        className="listen-btn"
      >
        🔥 Pre-Listen
      </a>
    </div>
    </div>

 <div className="recent-singles">
    <h2>Latest Drops 🎧</h2>

    <div className="singles-row">
      {latestReleases.recentSingles.map((song) => (
        <a
          key={song.id}
          href={song.link}
          target="_blank"
          rel="noreferrer"
          className="single-card"
        >
          <img src={song.image} alt={song.title} />
          <p>{song.title}</p>
        </a>
      ))}
    </div>
  </div>

    </div>
  )
}

export default NewEra