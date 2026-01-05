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

            <div className="footer">
                <MusicPlatformLink
                    platform="soundcloud"
                    url="https://soundcloud.com/bubblegumhead-670686202/"
                />
                <MusicPlatformLink
                    platform="spotify"
                    url="https://open.spotify.com/artist/26rrAp95IMo08NT0deHyEc"
                />
{/*
                <MusicPlatformLink
                    platform="youtube"
                    url="https://music.youtube.com/"
                />
*/}
                <MusicPlatformLink
                    platform="itunes"
                    url="http://itunes.apple.com/album/id1864306033?ls=1&app=itunes"
                />
            </div>
        </>
    )
}

export default App
