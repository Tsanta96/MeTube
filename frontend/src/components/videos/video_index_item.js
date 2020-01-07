import React from 'react'

export class video_index_item extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.video);
    }

    render() {
        const { video } = this.props.video;
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

export default video_index_item;
