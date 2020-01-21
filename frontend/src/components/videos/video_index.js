import React, { Component } from 'react';
import VideoIndexItemContainer from './video_index_item_container';
import '../stylesheets/splash.css';

export default class VideoIndex extends Component {
    constructor(props){
        super(props);

        this.mergedVideoUser = this.mergedVideoUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchUsers();
        this.props.fetchTrendingVideos("timespan");
    }

    mergedVideoUser(){
        let users = Object.values(this.props.users);
        let videos = Object.values(this.props.videos);

        let merged = [];
        // debugger
        videos.forEach(video => {
            users.forEach(user => {
                if(user._id === video.user_id){
                    merged.push({...video, ...user})
                }
            })
        })
        return (
            <ul className='video-index-ul'>
                {merged.map((video, ind) =>
                    <li key={ind} className='video-thumb'>
                        <VideoIndexItemContainer key={video._id} video={video} />
                    </li>
                )}
            </ul>
        )
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
                    <div className='splash-section-hearder'>Trending</div>
                    <ul className='video-index-ul'>
                       {Object.values(this.props.trending).map((video, idx) =>
                        <li key={idx} className='video-thumb'>
                            <VideoIndexItemContainer key={video._id} video={video} />
                        </li>
                       )} 
                    </ul>
                    <div className='border-top'></div>
                    <div className='splash-section-hearder'>Recommended</div>
                    <ul className='video-index-ul'>
                        {Object.values(this.props.videos).map((video, ind) =>
                            <li key={ind} className='video-thumb'>
                                <VideoIndexItemContainer key={video._id} video={video} />
                            </li>
                        )}
                    </ul>
                    {/* {this.mergedVideoUser()} */}
                </div>
            )
        }
    }
}
