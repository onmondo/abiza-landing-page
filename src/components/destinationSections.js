import React, { useState } from "react";
import playIcon from "../assets/play-bold.svg"

function DestinationSection() {
    const youtubeVideoReferences = [
        {
            youtubeId: 'Z7-pPssBQbw',
            title: 'Beautiful waters and sceneries of Sorsogon (Full episode) | Biyahe ni Drew'
        },
        {
            youtubeId: '9Y9v1PrrLG8',
            title: 'Biyahe ni Drew: Relaxing trip in Sorsogon | Full Episode'
        },
        {
            youtubeId: 'bcfnuDQgjUg',
            title: 'Nature spring sa Sorsogon, puwedeng paliguan at inumin?! | Biyahe ni Drew'
        }
    ]

    const [videoShown, setVideoShown] = useState(false);
    const [videoIDShown, setVideoIDShown] = useState('');

    const showVideo = (e, videoId) => {
        e.preventDefault();
        setVideoShown(true);
        setVideoIDShown(videoId)
    }
    return (
        <section id="destination" className="fullbleed">
            <header>
                <h2>Popular Destinations</h2>
                <p className="description videos">See our popular destinations that our client choose</p>
            </header>
            <ul>
                {youtubeVideoReferences.map((youtubeVideoReference) =>
                    <li key={youtubeVideoReference.youtubeId}>
                        <address>
                            <dl>
                                {/* <dt>Title</dt> */}
                                {/* <dd>Lorem ipsum</dd> */}
                                <dt>Description</dt>
                                <dd>
                                    <p className="description videos">
                                        📹 <a href={`https://www.youtube.com/watch?v=${youtubeVideoReference.youtubeId}`} target="_blank">{youtubeVideoReference.title}</a> by <a href="https://www.youtube.com/@gmapublicaffairs" target="_blank">GMA Public Affairs</a>
                                    </p>
                                </dd>
                                <dt>Video</dt>
                                <dd>
                                    {videoShown && (videoIDShown === youtubeVideoReference.youtubeId) ?
                                        <iframe
                                            src={`https://www.youtube.com/embed/${youtubeVideoReference.youtubeId}?autoplay=1`}
                                            title={youtubeVideoReference.title}
                                            frameBorder={0}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        /> :
                                        <section>
                                            <a href="#" onClick={() => { showVideo(event, youtubeVideoReference.youtubeId) }}>
                                                <img
                                                    className="playicon"
                                                    src={playIcon}
                                                    loading="lazy"
                                                    decoding="async"
                                                    role="presentation"
                                                />
                                            </a>
                                            <img
                                                className="videothumbnail"
                                                src={`https://img.youtube.com/vi/${youtubeVideoReference.youtubeId}/maxresdefault.jpg`}
                                                layout="fill"
                                                loading="lazy"
                                                decoding="async"
                                                role="presentation"
                                            />
                                        </section>

                                    }

                                </dd>
                            </dl>
                        </address>
                    </li>
                )}
                <li>
                    <address>
                        <dl>

                            <dt>Description</dt>
                            <dd>
                                <p className="description videos">
                                    Ad
                                </p>
                            </dd>
                            <dt>Video</dt>
                            <dd>
                                <div id="container-1f431b9e246d1bdd442126a4f6549222"></div>
                            </dd>
                        </dl>
                    </address>
                </li>
            </ul>
        </section>
    )
}

export default DestinationSection;
