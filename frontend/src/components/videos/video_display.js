import React from 'react'
import { withRouter } from 'react-router-dom';
import '../stylesheets/video_display.css';
import VideoIndexItemContainer from './video_index_item_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentContainer from '../comments/comment_container';
import LikeButtonsContainer from '../likes/like_buttons_container';

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.upNextVideos = this.upNextVideos.bind(this);
        this.state = {
            subscriber_id: '',
            subscription_id: ''
        }
        this.comments = this.comments.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.toggleSubscribeButton = this.toggleSubscribeButton.bind(this);
        this.fetchEverything = this.fetchEverything.bind(this);
    }

    componentDidMount() {
        this.fetchEverything();
    }

    componentDidUpdate(prevProps){
        if (!prevProps.video || this.props.video._id !== prevProps.video._id){
            this.fetchEverything();
        }
    }

    fetchEverything(){
        this.props.fetchSubscriptions();
        this.props.fetchVideos()
            .then(() => this.props.fetchVideoComments(this.props.video._id))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.video === undefined) {
            return {}
        }
        const vid = document.getElementById(this.props.video._id);
        const that = this.props;
        vid.onloadedmetadata = function () {
            // const viewThresh = vid.duration / 3;
            // console.log("DURATION:", viewThresh);
            vid.addEventListener("timeupdate", function () {
                if (vid.currentTime >= 5 && vid.currentTime < 5.3) {
                    that.incrementViewCount(that.video._id);
                }
            })
            
        };
    }

    upNextVideos(){
        if ((Object.keys(this.props.videos).length > 0)){
            return (
                <ul>
                    {Object.values(this.props.videos).map(video => 
                        <li key={video._id}>
                            <VideoIndexItemContainer video={video} />
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

    comments(){
        if (!this.props.comments) return '';
        return this.props.comments.map(comment => 
            <CommentContainer comment={comment} user={this.props.user}/>
        )
	}
		

	subscribe() {
		this.props.createSubscription({
			subscriber_id: this.props.user.id,
			subscription_id: this.props.video.user_id
		})
			// .then(() => this.setState({
			// 	subscriber_id: this.props.user.id,
			// 	subscription_id: this.props.video.user_id
			// }))
	}

	unsubscribe() {
		const subId = Object.values(this.props.subscriptions.map(sub => sub._id))
		this.props.deleteSubscription(subId);
	}

	toggleSubscribeButton() {
		const subIds = Object.values(this.props.subscriptions.map(subId => subId.subscription_id))
		const checkSub = subIds.includes(this.props.video.user_id)
        
		if (checkSub) {
			return (
				<button onClick={this.unsubscribe} className='subscription-button'>UNSUBSCRIBE</button>
			)
		} else {
			return (
                <button onClick={this.subscribe} className='subscription-button'>SUBSCRIBE</button>
			)
		}
	}


    render() {
        const { video } = this.props;
        if (!video) return null;
        return (
            <div className="entire-video-display-view">
                <div className="video-display-view">
                    <div className="main-section">
                        <div className="video-box">
                            <video key={video._id} id={video._id} className="video-display" controls height="540" width="900">
                                <source src={video.videoURL}></source>
                            </video>
                            <div className="video-description">
                                <div className='video-title-id'>
                                    <h1>{video.title}</h1>
                                    {/* <h2>{video._id}</h2> */}
                                    <h2>{this.props.user.username}</h2>
                                    <div className="views-and-date">
                                        <p className="views">{video.views.length} Views</p>
                                        <p>&bull;</p>
                                        <p className="date">{video.date}</p>
                                    </div>
                                </div>
                                <LikeButtonsContainer video={this.props.video} user={this.props.user}/>
                                {this.toggleSubscribeButton()}
                            </div>
                        </div>
                        <div className="comments">
                            <CommentFormContainer user={this.props.user} videoId={this.props.video._id} />
                            <div className="comment-div">
                                {this.comments()}
                            </div>
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

export default withRouter(VideoDisplay);

