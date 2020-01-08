import React from 'react'
import '../stylesheets/video_display.css';
import VideoIndexItemContainer from './video_index_item_container';

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("hello from videoDisplay!")
    }
    
    componentDidUpdate() {
        console.log("testing");
    }

    render() {
        const { video } = this.props;
        return (
            <div className="entire-video-display-view">
                <div className="video-display-view">
                    <div className="main-section">
                        <div className="video-box">
                            <video controls height="540" width="900">
                                <source src={video.videoURL}></source>
                            </video>
                            <div className="video-description">
                                <h1>{video.title}</h1>
                                <h2>{video._id}</h2>
                            </div>
                        </div>
                        <div className="comments">
                            <h1>Comments Gonna Go Here</h1>
                        </div>
                    </div>
                </div>
                <div className="rightside-vids">
                    <h1 className="up-next">Up next</h1>
                    {this.props.videos.map(video =>
                            <li className='video-thumb'>
                                <VideoIndexItemContainer key={video.id} video={video} />
                            </li>
                        )}
                </div>
            </div>
        )
    }
}

export default VideoDisplay;
