import React from 'react'
import '../stylesheets/video_display.css';
import VideoIndexItemContainer from './video_index_item_container';

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.upNextVideos = this.upNextVideos.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }
    
    // componentDidUpdate(prevProps) {
    //     if (prevProps.video._id !== this.props.video._id) {
    //         this.props.fetchVideo(this.props.video._id);
    //     }
    // }

    upNextVideos(){
        if (Object.keys(this.props.videos).length > 0){
            return (
                <ul>
                    {this.props.videos.map(video => 
                        <li>
                            <VideoIndexItemContainer key={video._id} video={video} />
                        </li>    
                    )}
                </ul>
            )
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }

    render() {
        const { video } = this.props;
        return (
            <div className="entire-video-display-view">
                <div className="video-display-view">
                    <div className="main-section">
                        <div className="video-box">
                            <video key={video._id} className="video-display" controls height="540" width="900">
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
                    {this.upNextVideos()}
                </div>
            </div>
        )
    }
}

export default VideoDisplay;
