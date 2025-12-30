import './App.css'
import MusicPlatformLink from './components/MusicPlatformLink.jsx'

function App() {

    return (
        <>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>bubblegumhead.io</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
                  rel="stylesheet"/>

            <div className="header">
                <h1>bubblegumhead</h1>
            </div>

            <div className="music-container">
                <div className="player-wrapper">
                    <div className="track-title">a heart that bleeds</div>
                    <audio controls>
                        <source src="assets/a_heart_that_bleeds.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>

            <div className="footer">
                <MusicPlatformLink
                    platform="soundcloud"
                    url="https://soundcloud.com/bubblegumhead-670686202/"
                />
                <MusicPlatformLink
                    platform="spotify"
                    url="https://artists.spotify.com/c/artist/26rrAp95IMo08NT0deHyEc"
                />
            </div>
        </>
    )
}

export default App
