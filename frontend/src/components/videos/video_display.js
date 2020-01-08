import React from 'react'

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { video } = this.props;
        return (
            <div>
                <video controls height="180" width="320">
                    <source src={video.data.videoURL}></source>
                </video>
            </div>
        )
    }
}

export default VideoDisplay;
