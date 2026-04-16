import React from 'react'
import { latestReleases } from '../Data/latestRelease'
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
    </div>
  )
}

export default NewEra