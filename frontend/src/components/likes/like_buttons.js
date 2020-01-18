import React from 'react'

export default class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numLikes: 0,
            numDislikes: 0,
            liked: false,
            disliked: false,
            errors: '',
            likeable_id: 'none',
            id: 'none'
        }
        this.createLike = this.createLike.bind(this);
        this.createDislike = this.createDislike.bind(this);
        this.likeButton = this.likeButton.bind(this);
        this.dislikeButton = this.dislikeButton.bind(this);
        this.displayErrors = this.displayErrors.bind(this);
        this.removeLike = this.removeLike.bind(this);
        this.removeDislike = this.removeDislike.bind(this);
        this.initialize = this.initialize.bind(this);
    }

    componentDidMount(){
        this.initialize();
    }

    componentDidUpdate(prevProps){
        debugger;
        if ((!prevProps.video && !prevProps.comment) || 
        ((this.props.video && prevProps.video) && this.props.video._id !== prevProps.video._id) ||
        ((this.props.comment && prevProps.comment) && this.props.comment._id !== prevProps.comment._id)){
            this.initialize();
        }
    }

    initialize(){
        if (this.props.video){
            this.setState({ likeable_id: this.props.video._id})
            this.props.fetchVideoLikes(this.props.video._id)
                .then(() => this.setState(
                    {
                        numLikes: this.props.likes.length,
                        numDislikes: this.props.dislikes.length,
                        liked: Object.values(this.props.likes).filter(like => like.userId === this.props.user.id).length > 0,
                        disliked: Object.values(this.props.dislikes).filter(dislike => dislike.userId === this.props.user.id).length > 0
                    })
                )
        } else if (this.props.comment){
            this.setState({ likeable_id: this.props.comment._id})
            this.props.fetchCommentLikes(this.props.comment._id)
                .then(() => this.setState(
                    {
                        numLikes: this.props.likes.length,
                        numDislikes: this.props.dislikes.length,
                        liked: Object.values(this.props.likes).filter(like => like.userId === this.props.user.id).length > 0,
                        disliked: Object.values(this.props.dislikes).filter(dislike => dislike.userId === this.props.user.id).length > 0
                    })
                )
        };
    }

    createLike(){
        if (!this.props.user.id){ // only allow like functionailty if logged in
            this.setState({ errors: 'You must be logged in to like or dislike' })
        } else if (!this.state.liked){ // only create the like if it's not already liked
            this.props.createLike({
                dislike: false,
                likeable_type: this.props.video? 'video' : 'comment',
                likeable_id: this.state.likeable_id,
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
                likeable_type: this.props.video? 'video' : 'comment',
                likeable_id: this.state.likeable_id,
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

    render(){
        return (
            <div>
                {this.displayErrors()}
                <div className="likes-dislikes">
                    {this.likeButton()}
                    {this.state.numLikes}
                    {this.dislikeButton()}
                    {this.state.numDislikes}
                </div>
            </div>
        )
    }
}
