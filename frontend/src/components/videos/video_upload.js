import React from 'react'
import '../stylesheets/video_upload.css';

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            user_id: this.props.currentUser.id,
            video: ""
        };

        this.update = this.update.bind(this);
        this.upload = this.upload.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate() {
    //     debugger;
    // }

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

        this.setState({
            title: "",
            user_id: this.props.currentUser.id,
            video: ""
        })
        // document.getElementById("v-u-submit").classList.remove('submit-ready');
        // document.getElementById("v-u-submit").classList.add('submit');
    }

    upload(e) {
        this.setState({ 'video': e.target.files[0]});
        document.getElementById("v-u-submit").classList.remove('submit');
        document.getElementById("v-u-submit").classList.add('submit-ready');
        document.getElementById("select-file").innerText = `${e.target.files[0].name}`;
        console.log(document.getElementById("vid-upload").value);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    };

    handleClose(e) {
        e.preventDefault();
        this.props.hideModal();
        this.setState({
            title: "",
            user_id: this.props.currentUser.id,
            video: ""
        })
        document.getElementById("select-file").innerText = "Click To Select File";
        document.getElementById("vid-upload").value = "";
    }


    render() {
        const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
        return (
            <div className={showHideClassName}>
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
                                <label id="video-upload" className="video-upload">
                                    <p id="select-file">Click to Select File</p>
                                    <input
                                        id="vid-upload"
                                        type="file"
                                        name="video"
                                        onChange={this.upload}
                                        />
                                </label>
                                <br></br>
                                <input id="v-u-submit" className="submit" type="submit" value="Upload" />
                                <p className="v-u-form-terms">By submitting your videos to MeTube, you acknowledge that you agree to MeTube's Terms of Service.
                                    Please be sure not to violate others' copyright or privacy rights</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoUpload;
