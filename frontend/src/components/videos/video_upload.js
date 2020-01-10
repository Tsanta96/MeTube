import React from 'react'

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            user_id: this.props.currentUser.id,
            video: ""
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        let newVideo = {
            title: this.state.title,
            user_id: this.state.user_id,
            video: this.state.video
        };

        this.props.createVideo(newVideo);
    }


    render() {
        return (
            <div className="video-upload-form">
                <form onSubmit={this.handleSubmit}>
                    <label className="video-title">Title
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            />
                    </label>
                    <label className="video-upload">Upload!
                        <input
                            type="file"
                            value={this.state.video}
                            onChange={this.update('video')}
                            />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default VideoUpload;
