import React from 'react';
import LikeButtonsContainer from '../likes/like_buttons_container';

export default class Comment extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div className="comment">
                <span className="comment-username">{this.props.comment.username}</span>
                <div className="comment-likes">
                    {this.props.comment.body}
                    <LikeButtonsContainer comment={this.props.comment} user={this.props.user}/>
                </div>
            </div>
        )
    }
};