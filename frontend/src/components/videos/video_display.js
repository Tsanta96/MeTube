import React from 'react'
import { withRouter } from 'react-router-dom';
import convertDate from '../../util/format_date';
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
        this.props.fetchUsers();
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
                <ul className="up-next-video-list">
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

    createLike(){
        if (!this.props.user.id){
            this.setState({ errors: 'You must be logged in to like or dislike' })
        } else if (!this.state.liked){
            this.props.createLike({
                dislike: false,
                likeable_type: 'video',
                likeable_id: this.props.video._id,
                user_id: this.props.user.id
            })
                .then(() => this.setState(
                    {
                        numLikes: this.state.numLikes + 1,
                        liked: true
                    })
                );
        } else {
            const like = Object.values(this.props.likes).filter(like => like.userId === this.props.user.id);
            if (like.length > 0){
                this.props.deleteLike(like[0]._id)
                    .then(() => this.setState(
                        {
                            numLikes: this.state.numLikes - 1,
                            liked: false
                        })
                    )
                }
        }
    }

    createDislike(){
        if (!this.props.user.id){
            this.setState({ errors: 'You must be logged in to like or dislike' })
        } else if (!this.state.disliked){
            this.props.createLike({
                dislike: true,
                likeable_type: 'video',
                likeable_id: this.props.video._id,
                user_id: this.props.user.id
            }).then(() => {
                this.setState({
                    numDislikes: this.state.numDislikes + 1,
                    disliked: true
                })
            });
        } else {
            const dislike = Object.values(this.props.dislikes).filter(dislike => dislike.userId === this.props.user.id);
            if (dislike.length > 0){
                this.props.deleteLike(dislike[0]._id)
                    .then(() => this.setState(
                        {
                            numDislikes: this.state.numDislikes - 1,
                            disliked: false
                        }
                    ))
            }
        }
    }

    likeButton(){
        let button;
        if (this.state.liked){
            button = <i className="fas fa-thumbs-up liked" onClick={this.createLike}></i>
        } else {
            button = <i className="fas fa-thumbs-up" onClick={this.createLike}></i>
        }
        return button;
    }

    dislikeButton(){
        let button;
        if (this.state.disliked){
            button = <i className="fas fa-thumbs-down disliked" onClick={this.createDislike}></i>
        } else {
            button = <i className="fas fa-thumbs-down" onClick={this.createDislike}></i>
        }
        return button;
    }

    displayErrors(){
        if (this.state.errors !== ''){
            return (
                <div className="like-errors">
                    {this.state.errors}
                </div>
            )
        } else {
            return
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
    }
    
    // subscribe() {
    //     let subs = Object.values(this.props.subscriptions).map(sub => sub.subscription_id);
    //     subs.forEach(sub => {
    //         if(!subs.includes(sub)){
    //             this.props.createSubscription({
    //                 subscriber_id: this.props.user.id,
    //                 subscription_id: this.props.video.user_id
    //             });
    //         }
    //     })
    // }

	// unsubscribe() {
	// 	const subId = Object.values(this.props.subscriptions.map(sub => sub._id))
	// 	this.props.deleteSubscription(subId);
    // }
    
    unsubscribe(){
		const subId = Object.values(this.props.subscriptions.map(sub => sub._id));
        subId.forEach(id => {
            this.props.deleteSubscription(id)
        })
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
        const { video, users } = this.props;

        if (!video || !users) return null;

        const userName = Object.values(users).filter(
            user => user._id === video.user_id)
            
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
                                    <h2>{userName[0].username}</h2>
                                    {/* <h2>{video._id}</h2> */}
                                    <h2>{this.props.user.username}</h2>
                                    <div className="views-and-date">
                                        <p className="views">{video.views.length} Views</p>
                                        <p>&bull;</p>
                                        <p className="date">{convertDate(video.date)}</p>
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

