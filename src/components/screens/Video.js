import React from 'react';
import { Player } from 'video-react';
import runway from "../../source/video/runway.mp4";

const Video = () =>
{
    return (
        <Player
            playsInline
            poster="/assets/poster.png"
            src={ runway }
        />
    );
};

export default Video;