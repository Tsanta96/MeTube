import React from 'react'
import '../stylesheets/video_upload.css';

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            user_id: this.props.currentUser.id,
            video: "",
        };

        this.update = this.update.bind(this);
        this.upload = this.upload.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, user_id, video } = this.state;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('user_id', user_id);
        formData.append('video', video);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        this.props.createVideo(formData, config);
    }

    upload(e) {
        this.setState({ 'video': e.target.files[0]});
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    };

    handleClose(e) {
        e.preventDefault();
        this.props.history.push('/');
    }


    render() {
        return (
            <div className="video-upload-container-background">
                <div className="top-margin"></div>
                <div className="video-upload-container">
                    <div className="v-u-header">
                        <h1 className="upload-video">Upload video</h1>
                        <button onClick={this.handleClose}>&times;</button>
                    </div>
                    <div className="v-u-form-container">
                        <form onSubmit={this.handleSubmit} className="v-u-form">
                            <label className="video-title">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    />
                            </label>
                            <br></br>
                            <label id="video-upload" className="video-upload">Click To Select File
                                <input
                                    type="file"
                                    name="video"
                                    onChange={this.upload}
                                    />
                            </label>
                            <br></br>
                            <input className="submit" type="submit" value="Upload" />
                            <p className="v-u-form-terms">By submitting your videos to MeTube, you acknowledge that you agree to MeTube's Terms of Service.
                                Please be sure not to violate others' copyright or privacy rights</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoUpload;
