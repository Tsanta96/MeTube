import React, { Component } from 'react';
import VideoIndexItemContainer from './video_index_item_container';
import '../stylesheets/splash.css';

export default class VideoIndex extends Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        this.props.fetchVideos(); 
    }
    
    render() {
        if (!this.props.videos){
            return (
                <p>Loading...</p>
            )
        } else {
            return (
                <div className='video-content-container'>
                    <ul className='video-index-ul'>
                        {this.props.videos.map((video, ind) =>
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
