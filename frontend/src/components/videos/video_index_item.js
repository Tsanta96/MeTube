import React from 'react';
import '../stylesheets/splash.css';
import { withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.handleVideoClick = this.handleVideoClick.bind(this);
    }

    

    handleVideoClick(videoId){
        debugger
        // e.preventDefault();
        this.props.fetchVideo(videoId);
        this.props.history.push(`/api/videos/${videoId}`);
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.video);
    }

    render() {
        debugger;
        console.log(this.props)
        const video = this.props.video;
        return (
            <div>
                <button onClick={() => this.handleVideoClick(video.id)}><video controls height="180" width="320">
                    <source src={video.videoURL}></source>
                </video></button>
                <h1 className='video-thumb-title'>{video.title}</h1>
                <p>{video.user_id}</p>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);

