import React, { Component } from 'react';
import VideoIndexItemContainer from './video_index_item_container';
import '../stylesheets/splash.css';

export default class VideoIndex extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
        // this.props.fetchUsers();
    }
    
    render() {
        console.log(this.props)

        if (!this.props.videos){
            return (
                <p>Loading...</p>
            )
        } else {
            return (
                <div className='video-content-container'>
                    {/* {this.renderSplashVideos()} */}
                    <ul className='video-index-ul'>
                        {Object.values(this.props.videos).map((video, ind) =>
                            <li key={ind} className='video-thumb'>
                                <VideoIndexItemContainer key={video._id} video={video} />
                            </li>
                        )}
                    </ul>
                </div>
            )
        }
    }
}
