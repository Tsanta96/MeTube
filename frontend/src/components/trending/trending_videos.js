import React from 'react'
import convertDate from '../../util/format_date';
import '../stylesheets/trending_videos.css';

class TrendingVideos extends React.Component {
    constructor() {
        super();
        
        this.state = {
            refresh: false
        }
    }

    componentDidMount() {
        this.props.fetchTrendingVideos("timeSpan")
        // setTimeout(() => {
        //     this.setState({
        //         refresh: true
        //     })
        //     console.log(this);
        // }, 1000)
    }

    handleVideoClick(video_id) {
        this.props.history.push(`/api/videos/${video_id}`)
    }

    // convertDate(date) {
    //     let newDate = new Date(date);
    //     let day = newDate.getDate();
    //     let month = newDate.getMonth() + 1;
    //     let year = newDate.getYear() + 1900;
    //     let newDateFormat = `${month}/${day}/${year}`

    //     return newDateFormat;
    // }

    render() {
        return (
            <div className="trending-body">
                <div className="trending-header">
                    <h1>Trending</h1>
                </div>
                <ul className="trending-videos-list">
                    {this.props.videos.map((video, idx) => 
                        <li key={idx}>
                            <div className="trending-video-container">
                                <div className="video-on-left">
                                    <button className="trending-video-button" onClick={() => this.handleVideoClick(video._id)}>
                                        <video width="240" height="135">
                                            <source src={video.videoURL}></source>
                                        </video>
                                    </button>
                                </div>
                                <div className="description-on-right">
                                    <p>{video.title}</p>
                                    <div className="username-views-date">
                                        <p className="trending-username">{video.user_id}</p>
                                        <p className="trending-views">{video.views.length} Views</p>
                                        <p className="trending-date">Created on {convertDate(video.date)}</p>
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
