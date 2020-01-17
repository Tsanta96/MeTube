import React from 'react'
import { withRouter } from 'react-router-dom';
import '../stylesheets/video_display.css';
import VideoIndexItemContainer from './video_index_item_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentContainer from '../comments/comment_container';

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.upNextVideos = this.upNextVideos.bind(this);
        this.state = {
            numLikes: 0,
            numDislikes: 0,
            liked: false,
            disliked: false,
            errors: '',
            subscriber_id: '',
            subscription_id: ''
        }
        this.createLike = this.createLike.bind(this);
        this.createDislike = this.createDislike.bind(this);
        this.likeButton = this.likeButton.bind(this);
        this.dislikeButton = this.dislikeButton.bind(this);
        this.displayErrors = this.displayErrors.bind(this);
        this.comments = this.comments.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.toggleSubscribeButton = this.toggleSubscribeButton.bind(this);
        this.removeLike = this.removeLike.bind(this);
        this.removeDislike = this.removeDislike.bind(this);
        this.fetchEverything = this.fetchEverything.bind(this);
    }

    componentDidMount() {
        this.fetchEverything();
    }

    componentDidUpdate(prevProps){
        if (!prevProps.video || this.props.video._id !== prevProps.video._id){
            this.fetchEverything();
            debugger;
        }
    }

    fetchEverything(){
        this.props.fetchSubscriptions();
        this.props.fetchVideos()
            .then(() => this.props.fetchVideoComments(this.props.video._id))
            .then(() => this.props.fetchVideoLikes(this.props.video._id)
                .then(() => this.setState(
                    {
                        numLikes: this.props.likes.length,
                        numDislikes: this.props.dislikes.length,
                        liked: Object.values(this.props.likes).filter(like => like.userId === this.props.user.id).length > 0,
                        disliked: Object.values(this.props.dislikes).filter(dislike => dislike.userId === this.props.user.id).length > 0
                    })
                )
            )
    }

    upNextVideos(){
        if ((Object.keys(this.props.videos).length > 0)){
            return (
                <ul>
                    {Object.values(this.props.videos).map(video => 
                        <li>
                            <VideoIndexItemContainer key={video._id} video={video} />
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
        if (!this.props.user.id){ // only allow like functionailty if logged in
            this.setState({ errors: 'You must be logged in to like or dislike' })
        } else if (!this.state.liked){ // only create the like if it's not already liked
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
        } else { // unlike the video if it's already liked
            this.removeLike();
        }
        if (this.state.disliked){ // if it was previously disliked, remove the dislike
            this.removeDislike();
        }
    }

    createDislike(){
        if (!this.props.user.id){ // only allow like functionailty if logged in
            this.setState({ errors: 'You must be logged in to like or dislike' })
        } else if (!this.state.disliked){ // only create the dislike if it's not already disliked
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
        } else { // remove the dislike if it's been previously disliked
            this.removeDislike()
        }
        if (this.state.liked){ // remove the like if it's been previously liked
            this.removeLike();
        }
    }

    removeLike(){
        // find the like with the corresponding userId
        const like = Object.values(this.props.likes).filter(like => like.userId === this.props.user.id);
        debugger;
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

    removeDislike(){
        // find the dislike with the corresponding userId
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

    likeButton(){
        // change whether the like button will be blue or gray
        let button;
        if (this.state.liked){
            button = <i className="fas fa-thumbs-up liked" onClick={this.createLike}></i>
        } else {
            button = <i className="fas fa-thumbs-up" onClick={this.createLike}></i>
        }
        return button;
    }

    dislikeButton(){
        // change whether the dislike button will be red or gray
        let button;
        if (this.state.disliked){
            button = <i className="fas fa-thumbs-down disliked" onClick={this.createDislike}></i>
        } else {
            button = <i className="fas fa-thumbs-down" onClick={this.createDislike}></i>
        }
        return button;
    }

    displayErrors(){
        if (this.state.errors != ''){
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
                            <video key={video._id} className="video-display" controls height="540" width="900">
                                <source src={video.videoURL}></source>
                            </video>
                            <div className="video-description">
                                <div className='video-title-id'>
                                    <h1>{video.title}</h1>
                                    {/* <h2>{video._id}</h2> */}
                                    <h2>{this.props.user.username}</h2>
                                </div>
                                {this.displayErrors()}
                                <div className="likes-dislikes">
                                    {this.likeButton()}
                                    {this.state.numLikes}
                                    {this.dislikeButton()}
                                    {this.state.numDislikes}
                                </div>
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