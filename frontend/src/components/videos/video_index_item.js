import React from 'react'

export default class VideoIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.video);
    }

    render() {
        const video = this.props.video;
        return (
            <div>
                <h1>{video.title}</h1>
                <video controls height="180" width="320">
                    <source src={video.videoURL}></source>
                </video>
            </div>
        )
    }
}