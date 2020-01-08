import React, { Component } from 'react';
import VideoIndexItemContainer from './video_index_item_container';

export default class VideoIndex extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos(); 
    }
    
    render() {

        if(Object.keys(this.props.videos).length === 0) { return null }
        // debugger
        return (
            <div>
                <ul>
                    {this.props.videos.map(video =>
                        <li>
                            <VideoIndexItemContainer key={video.id} video={video} />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


