export const createLike = (props, type) => {
    let likeable_type;
    let likeable_id;
    if (type === 'video'){
        likeable_type = 'video';
        likeable_id = props.video._id
    };
    if (!props.user.id){ // only allow like functionailty if logged in
        this.setState({ errors: 'You must be logged in to like or dislike' })
    } else if (!this.state.liked){ // only create the like if it's not already liked
        props.createLike({
            dislike: false,
            likeable_type,
            likeable_id,
            user_id: props.user.id
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