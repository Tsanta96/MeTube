import React from 'react';

export default class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: '',
            userId: this.props.user.id,
            username: this.props.user.username,
            videoId: this.props.videoId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state).then(() => this.setState({body: ''}));
    }

    update(){
        return e => this.setState({body: e.currentTarget.value});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="comment-form">
                <input type="text" onChange={this.update()} value={this.state.body} placeholder="Leave a comment..."/>
                <button type="submit">Comment</button>
            </form>
        )
    }
};