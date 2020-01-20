import React from 'react'
import '../stylesheets/trending_videos.css';

class TrendingVideos extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchTrendingVideos("timeSpan")
    }

    // convertDate() {
    //     this.props.videos[0].date
    // }

    render() {
        return (
            <div className="trending-body">
                <ul>
                    {this.props.videos.map((video, idx) => 
                        <li key={idx}>
                            <div className="trending-video-container">
                                <div className="video-on-left">
                                    <video width="240" height="135">
                                        <source src={video.videoURL}></source>
                                    </video>
                                </div>
                                <div className="description-on-right">
                                    <p>{video.title}</p>
                                    <div className="username-views-date">
                                        <p className="trending-username">{video.user_id}</p>
                                        <p className="trending-views">{video.views.length} Views</p>
                                        <p className="trending-date">{video.date}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default TrendingVideos;
